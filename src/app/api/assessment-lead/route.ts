import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

interface AssessmentPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  scheduledDate: string;
  scheduledTime: string;
  avgScore: number;
  maturityLevel: string;
  answerLabels: string[];
}

const QUESTION_CATEGORIES = [
  "Estratégia & Liderança",
  "Dados",
  "Pessoas & Liderança",
  "Casos de Uso & Retorno",
  "Governança & Riscos",
];

function getCredentials() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!raw) throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY não configurada");
  return JSON.parse(raw);
}

function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: getCredentials(),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

// ─── Double-booking check ─────────────────────────────────────────────────────
async function isSlotTaken(date: string, time: string): Promise<boolean> {
  const sheets = getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Agendamentos!A:C",
  });
  const brDate = formatDateBR(date);
  const rows = (res.data.values ?? []).slice(1);
  return rows.some(([, d, t]) => d === brDate && t === time);
}

// ─── Write to sheets ──────────────────────────────────────────────────────────
async function appendToSheet(data: AssessmentPayload) {
  const sheets = getSheetsClient();
  const timestamp = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const agenda = `${formatDate(data.scheduledDate)} às ${data.scheduledTime}`;

  const answerColumns = QUESTION_CATEGORIES.map((_, i) => {
    const label = data.answerLabels[i] ?? "";
    const num = String(i + 1).padStart(2, "0");
    return label ? `${num} - ${label}` : "";
  });

  await Promise.all([
    sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Leads!A:N",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          timestamp, data.name, data.company, data.role,
          data.email, data.phone, data.avgScore, data.maturityLevel,
          agenda, ...answerColumns,
        ]],
      },
    }),
    sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Agendamentos!A:C",
      valueInputOption: "RAW",
      requestBody: { values: [[data.name, formatDateBR(data.scheduledDate), data.scheduledTime]] },
    }),
  ]);
}

// ─── Google Chat notification ──────────────────────────────────────────────────
async function sendChatNotification(data: AssessmentPayload) {
  const webhookUrl = process.env.GOOGLE_CHAT_WEBHOOK_URL;
  if (!webhookUrl) return;

  const scoreBar = "█".repeat(Math.round(data.avgScore / 10)) + "░".repeat(10 - Math.round(data.avgScore / 10));
  const agenda = `${formatDate(data.scheduledDate)} às ${data.scheduledTime}`;
  const answersText = QUESTION_CATEGORIES
    .map((cat, i) => `   *${i + 1}. ${cat}*\n   └ ${data.answerLabels[i] ?? "—"}`)
    .join("\n");

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: [
        `🎯 *Novo lead — AI Assessment Sciensa*`, ``,
        `👤 *${data.name}*`,
        `🏢 ${data.company} · ${data.role}`,
        `📧 ${data.email}`, `📱 ${data.phone}`, ``,
        `📊 Score: *${data.avgScore}/100* — ${data.maturityLevel}`,
        `\`[${scoreBar}] ${data.avgScore}%\``, ``,
        `📋 *Respostas:*`, answersText, ``,
        `📅 Agendamento solicitado: *${agenda}*`,
      ].join("\n"),
    }),
  });
}

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}

function formatDateBR(iso: string): string {
  const [year, month, day] = iso.split("-");
  return `${day}-${month}-${year}`;
}

function parseDateBR(br: string): string {
  const [day, month, year] = br.split("-");
  return `${year}-${month}-${day}`;
}

// ─── POST ─────────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  let body: AssessmentPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Payload inválido" }, { status: 400 });
  }

  const { name, company, email, phone, role, scheduledDate, scheduledTime, avgScore, answerLabels } = body;

  if (!name || !company || !email || !phone || !role || !scheduledDate || !scheduledTime || avgScore === undefined || !answerLabels?.length) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 });
  }

  if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    console.log("[Assessment Lead — dev mode]", JSON.stringify(body, null, 2));
    return NextResponse.json({ success: true });
  }

  try {
    const taken = await isSlotTaken(scheduledDate, scheduledTime);
    if (taken) {
      return NextResponse.json(
        { error: "slot_taken", message: "Este horário acabou de ser reservado. Escolha outro horário." },
        { status: 409 }
      );
    }
  } catch (err) {
    console.error("[Assessment Lead] Erro ao verificar disponibilidade:", err);
  }

  const results = await Promise.allSettled([appendToSheet(body), sendChatNotification(body)]);
  results.forEach((r, i) => {
    if (r.status === "rejected") console.error(`[Assessment Lead] Integração ${i === 0 ? "Sheets" : "Chat"} falhou:`, r.reason);
  });

  return NextResponse.json({ success: true });
}

// ─── GET ──────────────────────────────────────────────────────────────────────
export async function GET() {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    return NextResponse.json({ slots: [] });
  }

  try {
    const sheets = getSheetsClient();
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Agendamentos!A:C",
    });

    const rows = (res.data.values ?? []).slice(1);
    const slots = rows
      .filter(([, d, t]) => d && t)
      .map(([, d, t]) => ({ date: parseDateBR(d), time: t }));

    return NextResponse.json({ slots });
  } catch (err) {
    console.error("[Booked Slots] Erro ao ler agendamentos:", err);
    return NextResponse.json({ slots: [] });
  }
}

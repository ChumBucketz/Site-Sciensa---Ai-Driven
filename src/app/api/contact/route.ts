import { NextRequest, NextResponse } from "next/server";

const MAKE_WEBHOOK = "https://hook.us1.make.com/543kc1g1sbibu1197dhwudw3d7i8hftk";

export async function POST(req: NextRequest) {
  const { name, email, phone, company, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const res = await fetch(MAKE_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Nome: name,
      Empresa: company ?? "",
      Email: email,
      Telefone: phone ?? "",
      Mensagem: message,
    }),
  });

  if (!res.ok) {
    console.error("Make webhook error:", res.status, await res.text());
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

"use client";

import { useState, useEffect } from "react";

type Step = "intro" | "questions" | "result" | "form" | "success";

interface Question {
  id: number;
  category: string;
  question: string;
  options: Array<{ label: string; score: number }>;
}

interface FormData {
  name: string; company: string; email: string; phone: string; role: string;
  scheduledDate: string; scheduledTime: string;
}

interface Maturity {
  level: string; label: string; color: string;
  description: string; insights: string[];
}

// ─── Score calibration: 0–100 scale ──────────────────────────────────────────
const OPTION_SCORES = [0, 38, 75, 100];

const QUESTIONS: Question[] = [
  {
    id: 1, category: "Estratégia & Liderança",
    question: "Sua empresa já definiu onde a IA deve ser aplicada primeiro?",
    options: [
      { label: "Ideias soltas. Não há critério para decidir onde começar", score: OPTION_SCORES[0] },
      { label: "Reagimos a demandas. A escolha é pontual e sem modelo", score: OPTION_SCORES[1] },
      { label: "Priorizamos por impacto percebido, mas sem scoring formal", score: OPTION_SCORES[2] },
      { label: "Portfólio estruturado de prioridades, alinhado ao plano da empresa", score: OPTION_SCORES[3] },
    ],
  },
  {
    id: 2, category: "Dados",
    question: "Os dados que sua IA vai precisar estão acessíveis e confiáveis?",
    options: [
      { label: "Espalhados em planilhas e sistemas. Cada área faz o seu", score: OPTION_SCORES[0] },
      { label: "Existem, mas com silos, retrabalho e qualidade inconsistente", score: OPTION_SCORES[1] },
      { label: "Os principais estão organizados, mas incompletos para IA em escala", score: OPTION_SCORES[2] },
      { label: "Dados críticos integrados e com qualidade para alimentar modelos", score: OPTION_SCORES[3] },
    ],
  },
  {
    id: 3, category: "Pessoas & Liderança",
    question: "Quem é o dono da agenda de IA na sua empresa?",
    options: [
      { label: "Ninguém. O tema foi delegado à TI sem patrocínio do C-Level", score: OPTION_SCORES[0] },
      { label: "Há um nome citado, mas sem autoridade ou orçamento real", score: OPTION_SCORES[1] },
      { label: "Existe responsável, mas sem cadência de acompanhamento formal", score: OPTION_SCORES[2] },
      { label: "Sponsor executivo com ownership claro, metas e budget definido", score: OPTION_SCORES[3] },
    ],
  },
  {
    id: 4, category: "Casos de Uso & Retorno",
    question: "Você consegue mostrar hoje o retorno das iniciativas de IA?",
    options: [
      { label: "Não. O impacto é percebido, mas não aparece no P&L", score: OPTION_SCORES[0] },
      { label: "Temos exemplos pontuais, mas sem modelo formal de mensuração", score: OPTION_SCORES[1] },
      { label: "Os principais casos têm indicadores, mas faltam baseline e meta", score: OPTION_SCORES[2] },
      { label: "ROI documentado por iniciativa, com KPIs e acompanhamento contínuo", score: OPTION_SCORES[3] },
    ],
  },
  {
    id: 5, category: "Governança & Riscos",
    question: "Privacidade, LGPD e segurança entram nas suas decisões de IA?",
    options: [
      { label: "Não. O tema aparece só quando surge um problema", score: OPTION_SCORES[0] },
      { label: "Há preocupação, mas sem processo ou avaliação formal", score: OPTION_SCORES[1] },
      { label: "Entram na validação dos casos, mas de forma não estruturada", score: OPTION_SCORES[2] },
      { label: "Governança de riscos é parte da estratégia desde a concepção", score: OPTION_SCORES[3] },
    ],
  },
];

function getMaturity(avg: number): Maturity {
  if (avg < 20) return {
    level: "Inicial", label: "Nível 1 — Inicial", color: "#F87171",
    description: "Sua empresa ainda não tem fundações para operar com IA. Cada trimestre sem estrutura é vantagem cedida a quem já decidiu.",
    insights: [
      "Sem direção definida, investimentos em IA tendem a virar custo sem retorno",
      "A ausência de ownership executivo é o principal motivo de projetos travarem",
      "A janela de diferenciação ainda está aberta — mas não por muito tempo",
    ],
  };
  if (avg < 40) return {
    level: "Exploratório", label: "Nível 2 — Exploratório", color: "#FBBF24",
    description: "Há iniciativas, mas sem coordenação estratégica. O risco de dispersão de esforço e orçamento é alto.",
    insights: [
      "Projetos isolados raramente escalam — faltam governança e critério de priorização",
      "Dados e infraestrutura inconsistentes bloqueiam a passagem de piloto para produção",
      "Momento crítico para estruturar onde apostar antes que o mercado consolide",
    ],
  };
  if (avg < 60) return {
    level: "Estruturado", label: "Nível 3 — Estruturado", color: "#60A5FA",
    description: "Existem fundações sólidas, mas ainda há lacunas que limitam escala e retorno consistente.",
    insights: [
      "Priorização por impacto percebido gera portfólio disperso e times sobrecarregados",
      "Governança e dados precisam evoluir para sustentar casos de uso mais complexos",
      "É a hora de formalizar métricas e business case para defender budget no board",
    ],
  };
  if (avg < 80) return {
    level: "Integrado", label: "Nível 4 — Integrado", color: "#34D399",
    description: "Você está à frente da maioria. O desafio agora é escalar com governança e arquitetura sólida.",
    insights: [
      "Escalar sem Reference Architecture gera débito técnico de difícil reversão",
      "A governança precisa acompanhar a velocidade de adoção para não virar passivo",
      "Business case formal é o próximo passo para aprovação de capital no board",
    ],
  };
  return {
    level: "AI-driven", label: "Nível 5 — AI-driven", color: "#0D9373",
    description: "Você tem a base certa. O próximo passo é blindar essa vantagem antes que o mercado chegue ao mesmo nível.",
    insights: [
      "Documentar e blindar a vantagem antes que concorrentes alcancem a mesma maturidade",
      "Roadmap executivo para os próximos 12–24 meses com ROI por iniciativa",
      "Foco em agentes, orquestração e otimização de ROI em processos críticos",
    ],
  };
}

// ─── Date / time helpers ──────────────────────────────────────────────────────
const DAY_NAMES = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function getWeeks(numWeeks: number): Date[][] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dow = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - (dow === 0 ? 6 : dow - 1));

  return Array.from({ length: numWeeks }, (_, w) =>
    Array.from({ length: 5 }, (_, d) => {
      const day = new Date(monday);
      day.setDate(monday.getDate() + w * 7 + d);
      return day;
    })
  );
}

function isSelectable(d: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return d > today;
}

function formatISO(d: Date) { return d.toISOString().split("T")[0]; }

function formatLabel(d: Date) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return { day: DAY_NAMES[d.getDay()], date: `${dd}/${mm}` };
}

const TIME_SLOTS = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"];
const WEEKS = getWeeks(3);
const ALL_DAYS = WEEKS.flat();

// ─── Component ────────────────────────────────────────────────────────────────
export default function MiniAssessment() {
  const [step, setStep] = useState<Step>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [answerLabels, setAnswerLabels] = useState<string[]>([]);
  const [avgScore, setAvgScore] = useState(0);
  const [bookedSlots, setBookedSlots] = useState<{ date: string; time: string }[]>([]);
  const [displayScore, setDisplayScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [form, setForm] = useState<FormData>({
    name: "", company: "", email: "", phone: "", role: "",
    scheduledDate: "", scheduledTime: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (step !== "form") return;
    fetch("/api/assessment-lead")
      .then((r) => r.json())
      .then((data) => { if (data.slots) setBookedSlots(data.slots); })
      .catch(() => {/* silent */});
  }, [step]);

  useEffect(() => {
    if (step !== "result") return;
    let count = 0;
    const totalSteps = 60;
    const id = setInterval(() => {
      count++;
      const ease = 1 - Math.pow(1 - count / totalSteps, 3);
      if (count >= totalSteps) { setDisplayScore(avgScore); clearInterval(id); }
      else setDisplayScore(Math.round(avgScore * ease));
    }, 900 / totalSteps);
    return () => clearInterval(id);
  }, [step, avgScore]);

  const handleAnswer = (score: number, label: string) => {
    if (selected !== null) return;
    setSelected(score);
    setTimeout(() => {
      const nextScores = [...answers, score];
      const nextLabels = [...answerLabels, label];
      setAnswers(nextScores);
      setAnswerLabels(nextLabels);
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(q => q + 1);
        setSelected(null);
      } else {
        const avg = Math.round(nextScores.reduce((a, b) => a + b, 0) / nextScores.length);
        setAvgScore(avg);
        setStep("result");
      }
    }, 360);
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.scheduledDate || !form.scheduledTime) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/assessment-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, avgScore, maturityLevel: m.level, answerLabels }),
      });

      if (res.status === 409) {
        const data = await res.json();
        setSubmitError(data.message ?? "Este horário já foi reservado. Escolha outro.");
        fetch("/api/assessment-lead")
          .then((r) => r.json())
          .then((d) => { if (d.slots) setBookedSlots(d.slots); })
          .catch(() => {});
        setSubmitting(false);
        return;
      }
    } catch { /* silent */ }
    setStep("success");
    setSubmitting(false);
  };

  const m = getMaturity(avgScore);
  const selectedDateObj = ALL_DAYS.find((d: Date) => formatISO(d) === form.scheduledDate);
  const selectedDateLabel = selectedDateObj ? formatLabel(selectedDateObj) : null;

  // ── INTRO ──────────────────────────────────────────────────────────────────
  if (step === "intro") return (
    <div className="glass-card-dark" style={{ maxWidth: 640, margin: "0 auto", padding: "clamp(2rem,4vw,3rem)", textAlign: "center" }}>
      <div className="label-tag-dark" style={{ marginBottom: "1.5rem" }}>
        <span className="pulse-dot" /> 5 perguntas · ~2 minutos
      </div>
      <h3 style={{ color: "#F9FAFB", marginBottom: "1rem" }}>
        Qual é o nível de maturidade<br />de IA da sua empresa?
      </h3>
      <p style={{ color: "#9CA3AF", fontSize: "1rem", lineHeight: 1.7, maxWidth: 440, margin: "0 auto 0.25rem" }}>
        Responda 5 perguntas e descubra em qual dos 5 níveis sua organização está
        e o que precisa mudar para subir de patamar.
      </p>
      <button className="btn-primary" onClick={() => setStep("questions")}
        style={{ marginTop: "1.75rem", width: "100%", fontSize: "1rem" }}>
        Iniciar diagnóstico →
      </button>
    </div>
  );

  // ── QUESTIONS ──────────────────────────────────────────────────────────────
  if (step === "questions") {
    const q = QUESTIONS[currentQ];
    return (
      <div className="glass-card-dark" style={{ maxWidth: 640, margin: "0 auto", padding: "clamp(1.75rem,4vw,2.5rem)" }}>
        <div style={{ marginBottom: "1.75rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", fontSize: "0.78rem" }}>
            <span style={{ color: "#0D9373", fontFamily: "var(--font-assessment-mono, monospace)" }}>{q.category}</span>
            <span style={{ color: "#6B7280" }}>{currentQ + 1} / {QUESTIONS.length}</span>
          </div>
          <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(currentQ / QUESTIONS.length) * 100}%`, background: "linear-gradient(90deg,#0D9373,#12C9A0)", transition: "width 0.4s ease" }} />
          </div>
        </div>

        <h3 style={{ color: "#F9FAFB", marginBottom: "1.5rem", fontSize: "clamp(1.1rem,2.5vw,1.375rem)" }}>
          {q.question}
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {q.options.map((opt, i) => {
            const chosen = selected === opt.score && selected !== null;
            return (
              <button key={i}
                className={`opt-btn${chosen ? " selected" : ""}`}
                onClick={() => handleAnswer(opt.score, opt.label)}
                disabled={selected !== null}
              >
                <span style={{
                  minWidth: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                  border: chosen ? "2px solid #0D9373" : "2px solid rgba(255,255,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.65rem", color: "#0D9373",
                  background: chosen ? "rgba(13,147,115,0.15)" : "transparent",
                  transition: "all 0.15s",
                }}>
                  {chosen ? "✓" : ""}
                </span>
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ── RESULT ─────────────────────────────────────────────────────────────────
  if (step === "result") return (
    <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div className="glass-card-dark" style={{ padding: "clamp(2rem,4vw,2.75rem)", textAlign: "center", borderColor: `${m.color}45` }}>
        <p style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280", fontFamily: "var(--font-assessment-mono, monospace)", marginBottom: "0.75rem" }}>
          AI Maturity Score
        </p>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.25rem", marginBottom: "0.875rem" }}>
          <div className="score-num-glow"
            style={{ fontSize: "clamp(5.5rem,16vw,9rem)", fontWeight: 900, lineHeight: 1, color: m.color, fontFamily: "var(--font-assessment-mono, monospace)", letterSpacing: "-0.04em" }}>
            {displayScore}
          </div>
          <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#4B5563", fontFamily: "var(--font-assessment-mono, monospace)", paddingBottom: "1rem" }}>
            / 100
          </span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", background: `${m.color}18`, border: `1px solid ${m.color}45`, borderRadius: 99, padding: "0.35rem 1.25rem", marginBottom: "1.25rem", fontSize: "0.82rem", fontWeight: 600, color: m.color }}>
          {m.label}
        </div>
        <p style={{ color: "#9CA3AF", fontSize: "0.97rem", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>{m.description}</p>

        <div style={{ marginTop: "1.5rem", background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "0.875rem 1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.65rem", color: "#6B7280", marginBottom: "0.5rem", fontFamily: "var(--font-assessment-mono, monospace)" }}>
            <span>0 Inicial</span>
            <span style={{ color: "#0D9373" }}>Referência integrada: 62–80</span>
            <span>100 AI-driven</span>
          </div>
          <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 99, overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "62%", width: "18%", height: "100%", background: "rgba(13,147,115,0.3)" }} />
            <div style={{ height: "100%", width: `${avgScore}%`, background: `linear-gradient(90deg,${m.color}80,${m.color})`, borderRadius: 99, transition: "width 0.8s ease" }} />
          </div>
        </div>
      </div>

      <div className="glass-card-dark" style={{ padding: "clamp(1.75rem,4vw,2.5rem)" }}>
        <p style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280", fontFamily: "var(--font-assessment-mono, monospace)", marginBottom: "1.25rem" }}>
          Riscos e oportunidades identificados
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {m.insights.map((ins, i) => (
            <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
              <span style={{ minWidth: 22, height: 22, borderRadius: "50%", background: `${m.color}18`, border: `1px solid ${m.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: m.color, flexShrink: 0, marginTop: 2, fontFamily: "var(--font-assessment-mono, monospace)" }}>{i + 1}</span>
              <p style={{ color: "#D1D5DB", fontSize: "0.93rem", lineHeight: 1.65, margin: 0 }}>{ins}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "1.5rem", padding: "1rem 1.25rem", background: "rgba(13,147,115,0.07)", border: "1px solid rgba(13,147,115,0.18)", borderRadius: 10 }}>
          <p style={{ color: "#9CA3AF", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
            <span style={{ color: "#12C9A0", fontWeight: 600 }}>Este é apenas o diagnóstico inicial.</span>{" "}
            O Assessment completo mapeia 40+ dimensões e entrega um Portfolio Map personalizado
            com os casos de uso priorizados para a realidade do seu negócio.
          </p>
        </div>

        <button className="btn-primary" onClick={() => setStep("form")}
          style={{ marginTop: "1.5rem", width: "100%", fontSize: "1rem" }}>
          Quero o diagnóstico completo →
        </button>
      </div>
    </div>
  );

  // ── FORM ───────────────────────────────────────────────────────────────────
  if (step === "form") return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <div className="glass-card-dark"
        style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", overflow: "hidden", borderRadius: "20px" }}>

        <div style={{
          padding: "clamp(2rem,4vw,2.75rem)",
          background: "rgba(13,147,115,0.06)",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          <p style={{ fontSize: "0.62rem", fontFamily: "var(--font-assessment-mono, monospace)", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#6B7280", marginBottom: "1.25rem" }}>
            Seu diagnóstico
          </p>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.2rem", marginBottom: "0.5rem" }}>
            <div style={{ fontSize: "4.5rem", fontWeight: 900, lineHeight: 1, fontFamily: "var(--font-assessment-mono, monospace)", color: m.color, letterSpacing: "-0.04em" }}>
              {avgScore}
            </div>
            <span style={{ fontSize: "1rem", color: "#4B5563", fontFamily: "var(--font-assessment-mono, monospace)", fontWeight: 700, paddingBottom: "0.5rem" }}>/ 100</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", background: `${m.color}18`, border: `1px solid ${m.color}40`, borderRadius: "8px", padding: "0.6rem 0.875rem", fontSize: "0.85rem", fontWeight: 700, color: m.color, marginBottom: "1.5rem" }}>
            {m.label}
          </div>
          <p style={{ color: "#9CA3AF", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            {m.description}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {m.insights.map((ins, i) => (
              <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: m.color, flexShrink: 0, marginTop: "6px" }} />
                <span style={{ fontSize: "0.75rem", color: "#6B7280", lineHeight: 1.55 }}>{ins}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: "clamp(2rem,4vw,2.75rem)" }}>
          <h3 style={{ color: "#F9FAFB", marginBottom: "0.5rem", fontSize: "1.25rem" }}>Agende com um especialista</h3>
          <p style={{ color: "#9CA3AF", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>
            Nossa equipe analisa seu score e apresenta o Assessment completo, sem compromisso.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 600, color: "#6B7280", marginBottom: "0.45rem", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Nome completo *</label>
              <input className="input-dark" type="text" required placeholder="Seu nome" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 600, color: "#6B7280", marginBottom: "0.45rem", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Empresa *</label>
                <input className="input-dark" type="text" required placeholder="Empresa" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 600, color: "#6B7280", marginBottom: "0.45rem", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Cargo *</label>
                <input className="input-dark" type="text" required placeholder="CTO, CEO…" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 600, color: "#6B7280", marginBottom: "0.45rem", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>E-mail corporativo *</label>
                <input className="input-dark" type="email" required placeholder="seu@empresa.com.br" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 600, color: "#6B7280", marginBottom: "0.45rem", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Telefone / WhatsApp *</label>
                <input className="input-dark" type="tel" required placeholder="(11) 9 0000-0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 600, color: "#6B7280", marginBottom: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
                Escolha uma data *
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {WEEKS.map((week, wi) => (
                  <div key={wi}>
                    <p style={{ fontSize: "0.58rem", color: "#4B5563", fontFamily: "var(--font-assessment-mono, monospace)", letterSpacing: "0.06em", marginBottom: "0.35rem" }}>
                      {formatLabel(week[0]).date} – {formatLabel(week[4]).date}
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.4rem" }}>
                      {week.map((d) => {
                        const iso = formatISO(d);
                        const lbl = formatLabel(d);
                        const active = form.scheduledDate === iso;
                        const selectable = isSelectable(d);
                        return (
                          <button key={iso} type="button"
                            disabled={!selectable}
                            onClick={() => setForm({ ...form, scheduledDate: iso, scheduledTime: "" })}
                            style={{
                              background: active ? "rgba(13,147,115,0.18)" : "rgba(255,255,255,0.04)",
                              border: active ? "1px solid rgba(13,147,115,0.6)" : "1px solid rgba(255,255,255,0.08)",
                              borderRadius: 10, padding: "0.5rem 0.25rem",
                              cursor: selectable ? "pointer" : "not-allowed",
                              textAlign: "center", transition: "all 0.15s",
                              opacity: selectable ? 1 : 0.28,
                            }}>
                            <div style={{ fontSize: "0.6rem", color: active ? "#12C9A0" : "#6B7280", fontWeight: 700, letterSpacing: "0.05em", marginBottom: "0.2rem" }}>{lbl.day}</div>
                            <div style={{ fontSize: "0.75rem", color: active ? "#F9FAFB" : "#9CA3AF", fontWeight: 700 }}>{lbl.date}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {form.scheduledDate && (
              <div>
                <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 600, color: "#6B7280", marginBottom: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
                  Escolha um horário *
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.4rem" }}>
                  {TIME_SLOTS.map((slot) => {
                    const active = form.scheduledTime === slot;
                    const booked = bookedSlots.some(s => s.date === form.scheduledDate && s.time === slot);
                    return (
                      <button key={slot} type="button"
                        disabled={booked}
                        onClick={() => !booked && setForm({ ...form, scheduledTime: slot })}
                        title={booked ? "Horário indisponível" : undefined}
                        style={{
                          background: active ? "rgba(13,147,115,0.18)" : "rgba(255,255,255,0.04)",
                          border: active ? "1px solid rgba(13,147,115,0.6)" : "1px solid rgba(255,255,255,0.08)",
                          borderRadius: 10, padding: "0.5rem",
                          cursor: booked ? "not-allowed" : "pointer",
                          fontSize: "0.78rem", fontWeight: 700, fontFamily: "var(--font-assessment-mono, monospace)",
                          color: active ? "#F9FAFB" : booked ? "#374151" : "#9CA3AF",
                          opacity: booked ? 0.35 : 1,
                          transition: "all 0.15s",
                        }}>
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <button
              type="submit"
              className="btn-cta-lg"
              disabled={submitting || !form.scheduledDate || !form.scheduledTime}
              style={{
                width: "100%", justifyContent: "center", marginTop: "0.5rem",
                opacity: (submitting || !form.scheduledDate || !form.scheduledTime) ? 0.55 : 1,
                cursor: (submitting || !form.scheduledDate || !form.scheduledTime) ? "not-allowed" : "pointer",
              }}>
              {submitting ? "Enviando..." : "Confirmar agendamento →"}
            </button>
            {submitError && (
              <p style={{ textAlign: "center", fontSize: "0.8rem", color: "#F87171", marginTop: "0.5rem", padding: "0.6rem 1rem", background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: 8 }}>
                ⚠ {submitError}
              </p>
            )}
            <p style={{ textAlign: "center", fontSize: "0.68rem", color: "#4B5563", marginTop: "0.25rem" }}>
              Sem spam · confirmação em até 1 dia útil
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .assessment-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );

  // ── SUCCESS ────────────────────────────────────────────────────────────────
  return (
    <div className="glass-card-dark" style={{ maxWidth: 640, margin: "0 auto", padding: "clamp(2.5rem,5vw,3.5rem)", textAlign: "center" }}>
      <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(13,147,115,0.15)", border: "1px solid rgba(13,147,115,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", margin: "0 auto 1.5rem", color: "#0D9373" }}>✓</div>
      <h3 style={{ color: "#F9FAFB", marginBottom: "1rem" }}>Agendamento confirmado</h3>

      {selectedDateLabel && form.scheduledTime && (
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(13,147,115,0.1)", border: "1px solid rgba(13,147,115,0.25)", borderRadius: 12, padding: "0.75rem 1.5rem", marginBottom: "1.25rem" }}>
          <span style={{ fontSize: "1.1rem" }}>📅</span>
          <span style={{ color: "#12C9A0", fontWeight: 700, fontSize: "0.95rem" }}>
            {selectedDateLabel.day} {selectedDateLabel.date} às {form.scheduledTime}
          </span>
        </div>
      )}

      <p style={{ color: "#9CA3AF", fontSize: "1rem", lineHeight: 1.7, maxWidth: 380, margin: "0 auto" }}>
        Um especialista da Sciensa vai analisar seu score de{" "}
        <span style={{ color: m.color, fontWeight: 700 }}>{avgScore} / 100</span>{" "}
        ({m.level}) e entrar em contato para confirmar a sessão.
      </p>
    </div>
  );
}

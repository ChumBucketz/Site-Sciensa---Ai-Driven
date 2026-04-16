"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import MiniAssessment from "./components/MiniAssessment";

// ─── Scroll-reveal ────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const Icon = {
  Target: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Shield: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  GitBranch: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 01-9 9" />
    </svg>
  ),
  Calendar: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Layers: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  BarChart: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  Package: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Users: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  Search: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Map: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  ),
  Code: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Building: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="10" height="20" /><path d="M12 6h8a2 2 0 012 2v14H12" /><path d="M2 14h4" /><path d="M2 10h4" /><path d="M2 6h4" /><path d="M16 10h2" /><path d="M16 14h2" /><path d="M16 18h2" />
    </svg>
  ),
  DollarSign: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  Roadmap: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20" /><path d="M6 20V10l6-6 6 6v10" /><path d="M10 20v-5h4v5" />
    </svg>
  ),
  FileText: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  Presentation: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h20" /><path d="M21 3v11a2 2 0 01-2 2H5a2 2 0 01-2-2V3" /><path d="M7 21l5-5 5 5" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  CheckCircle: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  TrendingDown: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
      <polyline points="17 18 23 18 23 12" />
    </svg>
  ),
  XCircle: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
  AlertTriangle: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "88%", label: "das empresas já usam IA em pelo menos uma função de negócio", source: "McKinsey, 2025" },
  { value: "72%", label: "dos CIOs reportam investimentos em IA sem retorno mensurável no P&L", source: "Deloitte, 2025" },
  { value: "1 em 9", label: "empresas que adotaram IA realmente operam projetos em produção", source: "Gartner, 2026" },
];

const PAIN_IMAGES = [
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&h=280&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=700&h=280&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=280&fit=crop&auto=format&q=80",
];

const PAINS = [
  {
    Icon: Icon.TrendingDown,
    tag: "PERDA FINANCEIRA",
    stat: "67%",
    statLabel: "dos projetos de IA não saem do piloto para a produção",
    title: "O dinheiro foi. A transformação não veio.",
    body: "Piloto aprovado, orçamento comprometido, fornecedor contratado. Meses depois, o board pergunta pelo retorno e ninguém tem uma resposta concreta. O ciclo recomeça — mais caro desta vez.",
    punch: "Sem priorização baseada em dados, empresas gastam 2,3× mais para obter o mesmo resultado.",
  },
  {
    Icon: Icon.XCircle,
    tag: "PARALISIA ESTRATÉGICA",
    stat: "74%",
    statLabel: "das empresas não têm um roadmap de IA para os próximos 12 meses",
    title: "Todo mundo está no mesmo workshop. Quem sair primeiro vence.",
    body: "Seu concorrente está no mesmo evento, com o mesmo fornecedor fazendo o mesmo pitch. A vantagem competitiva vai para quem tiver o mapa certo na mão quando o mercado consolidar.",
    punch: "Cada trimestre sem direção clara é distância que não se recupera depois.",
  },
  {
    Icon: Icon.AlertTriangle,
    tag: "RISCO OCULTO",
    stat: "R$ 4,2M",
    statLabel: "custo médio de um incidente de IA sem governança",
    title: "Um erro pode custar mais do que toda a IA vai gerar",
    body: "IA sem framework de governança é bomba com pino frouxo. LGPD, viés algorítmico, alucinação em processo crítico: cada gap não mapeado é um vetor de crise que pode liquidar em semanas o que levou anos para construir.",
    punch: "Governança não é burocracia. É o que separa ativo de passivo.",
  },
];

const SOLUTION_METRICS = [
  { Icon: Icon.Calendar, val: "8 semanas", desc: "do kick-off ao board pack final" },
  { Icon: Icon.Layers, val: "7 fases", desc: "com outputs claros e documentados" },
  { Icon: Icon.BarChart, val: "40+", desc: "dimensões de maturidade avaliadas" },
  { Icon: Icon.Package, val: "8 entregas", desc: "prontas para uso imediato" },
];

const PHASES = [
  {
    Icon: Icon.Users,
    n: "01", title: "Mobilização e Alinhamento Executivo", weeks: "Semana 1",
    desc: "Antes de qualquer análise, alinhamos o que realmente importa. Conduzimos entrevistas estruturadas com CEO, CTO, CFO e lideranças operacionais para entender pressões competitivas, apostas estratégicas e onde a IA já foi tentada e por que não funcionou.",
    detail: [
      "Entrevistas individuais de 60 a 90 min com C-Level e stakeholders-chave: agenda, prioridades e hipóteses documentadas",
      "Mapeamento de poder e influência: quem decide, quem bloqueia, quem precisa ser convertido para o projeto avançar",
      "Baseline de maturidade em 5 dimensões: estratégia, dados, tecnologia, pessoas e governança. Ponto de partida auditável e documentado",
    ],
    output: "Mapa de stakeholders · Baseline de maturidade (5 dimensões) · Agenda e critérios de priorização aprovados",
  },
  {
    Icon: Icon.Search,
    n: "02", title: "Discovery Dinâmico com AI EventStorming", weeks: "Semanas 1–3",
    desc: "A maioria das empresas sabe onde a IA 'deveria' ajudar. Nós descobrimos onde ela realmente vai. Aplicamos AI EventStorming, metodologia proprietária de sessões intensivas com os times que operam os processos no dia a dia.",
    detail: [
      "Sessões de 4 a 8h com times operacionais de cada área prioritária: identificação de eventos críticos, gargalos e decisões recorrentes passíveis de automação",
      "Mapeamento de fluxos de informação: onde os dados existem, onde estão fragmentados e onde a ausência de dado é o próprio problema",
      "Qualificação inicial de oportunidades por frequência de ocorrência, volume de decisão e impacto financeiro estimado",
    ],
    output: "Mapa de processos críticos anotado · Lista qualificada de oportunidades com hipótese de valor por área",
  },
  {
    Icon: Icon.Map,
    n: "03", title: "Portfolio Map e Priorização com AI Scoring", weeks: "Semanas 2–3",
    desc: "Com as oportunidades mapeadas, aplicamos nosso modelo proprietário de scoring para transformar intuição em decisão. Cada caso de uso é avaliado em 4 eixos independentes.",
    detail: [
      "AI Portfolio Scoring: cada iniciativa recebe nota em Valor de Negócio, Viabilidade Técnica, Time-to-Value e Risco",
      "Separação clara entre Quick Wins (alto impacto, baixa complexidade) e Apostas Estruturais (transformação de longo prazo)",
      "Workshop de calibração com liderança para validar scores e garantir que o Portfolio Map reflita as prioridades reais do negócio",
    ],
    output: "Portfolio Map visual com scoring completo · Ranking de casos de uso · Top 3–5 selecionados para Deep Dive",
  },
  {
    Icon: Icon.Code,
    n: "04", title: "Deep Dives Técnicos por Caso de Uso", weeks: "Semanas 3–5",
    desc: "Para cada iniciativa selecionada no Portfolio Map, conduzimos uma análise técnica profunda e específica para o contexto da empresa. O objetivo é chegar em decisões concretas de arquitetura, stack e make/buy antes do projeto começar.",
    detail: [
      "Auditoria de dados: qualidade, completude, latência, custos de aquisição e gaps que precisam ser resolvidos",
      "Mapeamento de integrações e dependências: sistemas legados, APIs disponíveis, riscos de acoplamento",
      "Decisão de Make/Buy/Partner documentada: critérios técnicos e de negócio para construir, comprar ou co-desenvolver",
    ],
    output: "Technical Assessment por caso de uso · Matriz de decisão Make/Buy/Partner · Estimativas de esforço e custo",
  },
  {
    Icon: Icon.Shield,
    n: "05", title: "Governança, Segurança e Operating Model", weeks: "Semanas 4–6",
    desc: "IA sem governança é passivo, não ativo. Construímos o framework que permite à empresa mover rápido sem criar exposições que podem destruir mais valor do que a IA vai gerar.",
    detail: [
      "AI Governance Framework: políticas de uso aceitável, critérios de aprovação por nível de risco, processos de monitoramento contínuo",
      "Privacy & Compliance Assessment: mapeamento de riscos regulatórios (LGPD, setorial) e controles necessários",
      "Operating Model de IA: papéis e responsabilidades, cadência de revisão e critérios de escalação de incidentes",
    ],
    output: "AI Governance Framework · Risk & Compliance Assessment · Operating Model com papéis e rituais definidos",
  },
  {
    Icon: Icon.Building,
    n: "06", title: "Architecture Factory", weeks: "Semanas 5–7",
    desc: "Arquitetura é uma decisão estratégica que determina velocidade, custo e capacidade de escala pelos próximos 3 a 5 anos. Para cada caso de uso priorizado, entregamos uma Reference Architecture completa.",
    detail: [
      "Reference Architecture por caso de uso: componentes, fluxo de dados, pontos de integração, stack recomendado",
      "Guardrails de segurança embarcados: controles de acesso, logging, monitoramento de drift de modelo",
      "Critérios de avaliação de fornecedores e plataformas: scorecard objetivo para selecionar entre as principais opções",
    ],
    output: "3 Reference Architectures completas · Scorecard de fornecedores · ADRs (Architecture Decision Records) documentados",
  },
  {
    Icon: Icon.DollarSign,
    n: "07", title: "Business Case, Roadmap e Board Pack", weeks: "Semanas 7–8",
    desc: "O trabalho das seis fases anteriores converge aqui em linguagem de negócio, para audiência executiva. Construímos o business case que justifica o investimento, o roadmap que mostra o caminho e o Board Pack que converte aprovação em capital.",
    detail: [
      "Business Case com ROI e TCO modelados por cenário (conservador, base, otimista): premissas explícitas e payback calculado",
      "Roadmap 90/180/365 dias: sequência de execução otimizada por dependências técnicas e velocidade de geração de valor",
      "Board Pack executivo: narrativa construída para o conselho cobrindo problema, oportunidade, risco de não agir e próximos passos",
    ],
    output: "Business Case completo por iniciativa · Roadmap faseado com KPIs · Board Pack pronto para apresentação",
  },
];

const DELIVERABLES = [
  { Icon: Icon.Map, title: "Portfolio Map com scoring proprietário", desc: "Matriz visual com todos os casos de uso pontuados por valor, viabilidade e risco.", audience: "CEO & Board" },
  { Icon: Icon.FileText, title: "Assessment Report completo", desc: "Diagnóstico detalhado de maturidade com gaps, riscos e recomendações práticas.", audience: "C-Level & TI" },
  { Icon: Icon.Building, title: "3 Reference Architectures técnicas", desc: "Blueprints técnicos prontos para execução imediata por caso de uso priorizado.", audience: "CTO & arquitetos" },
  { Icon: Icon.DollarSign, title: "Business Case com ROI e TCO", desc: "Modelagem financeira com retorno esperado, custo total e break-even point.", audience: "CFO & Board" },
  { Icon: Icon.Roadmap, title: "Roadmap 90/180/365 dias", desc: "Plano de execução faseado com milestones, owners e KPIs definidos.", audience: "COO & PMO" },
  { Icon: Icon.Users, title: "Transformation Plan", desc: "Plano de capacitação, gestão da mudança e metas de adoção por área.", audience: "CHRO & liderança" },
  { Icon: Icon.Presentation, title: "Board Pack executivo", desc: "Apresentação pronta para o conselho com narrativa, dados e próximos passos.", audience: "CEO" },
  { Icon: Icon.Package, title: "Handoff Kit técnico", desc: "Documentação completa para início imediato da implementação sem retrabalho.", audience: "TI & fornecedores" },
];

const PHASE_IMAGES = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=700&fit=crop&auto=format&q=85",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&h=700&fit=crop&auto=format&q=85",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=700&fit=crop&auto=format&q=85",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=700&fit=crop&auto=format&q=85",
  "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=900&h=700&fit=crop&auto=format&q=85",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=700&fit=crop&auto=format&q=85",
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=900&h=700&fit=crop&auto=format&q=85",
];

// ─── Nav ──────────────────────────────────────────────────────────────────────
function LPNav() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(5,11,21,0.90)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      height: "64px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 clamp(1.25rem, 5vw, 3rem)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
        <Image src="/logos/sciensa-brancoVerde.png" alt="Sciensa" width={120} height={28} style={{ objectFit: "contain", height: "28px", width: "auto" }} />
        <span style={{
          fontSize: "0.62rem", fontFamily: "var(--font-assessment-mono, monospace)", letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#0D9373",
          background: "rgba(13,147,115,0.1)", border: "1px solid rgba(13,147,115,0.3)",
          borderRadius: "4px", padding: "0.2rem 0.5rem",
        }}>
          AI Assessment
        </span>
      </div>

      <nav aria-label="Seções" className="lp-nav-links" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
        {[
          { label: "O problema", href: "#o-problema" },
          { label: "Metodologia", href: "#metodologia" },
          { label: "Entregáveis", href: "#entregaveis" },
        ].map((link) => (
          <a key={link.href} href={link.href}
            onClick={e => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
            style={{ fontSize: "0.8rem", color: "#6B7280", textDecoration: "none", padding: "0.4rem 0.75rem", borderRadius: "6px", transition: "color 0.2s, background 0.2s", cursor: "pointer" }}
            onMouseEnter={e => { (e.target as HTMLAnchorElement).style.color = "#F9FAFB"; (e.target as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)"; }}
            onMouseLeave={e => { (e.target as HTMLAnchorElement).style.color = "#6B7280"; (e.target as HTMLAnchorElement).style.background = "transparent"; }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#diagnostico" className="btn-cta-lg" style={{ padding: "0.6rem 1.5rem", fontSize: "0.875rem" }}
        onClick={e => { e.preventDefault(); document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
        Fazer diagnóstico <Icon.ArrowRight />
      </a>

      <style>{`@media (max-width: 768px) { .lp-nav-links { display: none !important; } }`}</style>
    </nav>
  );
}

// ─── Score preview card ────────────────────────────────────────────────────────
function ScorePreviewCard() {
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(13,147,115,0.3)",
      borderRadius: "20px", padding: "2rem",
      boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 80px rgba(13,147,115,0.12)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <span style={{ fontSize: "0.62rem", fontFamily: "var(--font-assessment-mono, monospace)", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280" }}>AI MATURITY SCORE</span>
        <span style={{ fontSize: "0.62rem", color: "#0D9373", fontFamily: "var(--font-assessment-mono, monospace)", background: "rgba(13,147,115,0.1)", padding: "0.15rem 0.4rem", borderRadius: "4px" }}>EXEMPLO</span>
      </div>
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <div className="score-num-glow" style={{ fontSize: "5rem", fontWeight: 900, lineHeight: 1, fontFamily: "var(--font-assessment-mono, monospace)", color: "#12C9A0", letterSpacing: "-0.04em" }}>73</div>
        <div style={{ fontSize: "0.78rem", color: "#9CA3AF", marginTop: "0.4rem" }}>de 100 pontos</div>
      </div>
      <div style={{ background: "rgba(13,147,115,0.1)", border: "1px solid rgba(13,147,115,0.3)", borderRadius: "8px", padding: "0.7rem 1rem", marginBottom: "1.5rem", textAlign: "center" }}>
        <div style={{ fontSize: "0.58rem", fontFamily: "var(--font-assessment-mono, monospace)", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.2rem", textTransform: "uppercase" }}>Nível 3</div>
        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#12C9A0" }}>Escalando</div>
      </div>
      {[{ l: "Estratégia", v: 82 }, { l: "Dados", v: 68 }, { l: "Governança", v: 55 }, { l: "Talento", v: 71 }].map((d) => (
        <div key={d.l} style={{ marginBottom: "0.7rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
            <span style={{ fontSize: "0.7rem", color: "#9CA3AF" }}>{d.l}</span>
            <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-assessment-mono, monospace)", color: "#0D9373" }}>{d.v}</span>
          </div>
          <div style={{ height: "3px", background: "rgba(255,255,255,0.07)", borderRadius: "2px", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${d.v}%`, background: "linear-gradient(90deg,#0D9373,#12C9A0)", borderRadius: "2px" }} />
          </div>
        </div>
      ))}
      <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <a href="#diagnostico" style={{ fontSize: "0.78rem", color: "#0D9373", textDecoration: "none", fontWeight: 600 }}
          onClick={e => { e.preventDefault(); document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
          Descubra seu score real →
        </a>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AIAssessmentPage() {
  useReveal();
  return (
    <div style={{ background: "#050B15", color: "#F9FAFB", overflowX: "hidden" }}>
      <LPNav />

      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(160deg, #050B15 0%, #071420 55%, #0A1628 100%)",
        minHeight: "100vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden",
        padding: "6rem clamp(1.25rem, 5vw, 3rem) 5rem",
      }}>
        <video autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.22, pointerEvents: "none", zIndex: 0 }}
          aria-hidden>
          <source src="https://res.cloudinary.com/dshrkq1up/video/upload/v1775576227/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323_dqsbv8.mp4" type="video/mp4" />
        </video>
        <div aria-hidden className="line-grid-dark" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }} />
        <div aria-hidden className="hero-glow" style={{ zIndex: 1 }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 300px", gap: "4rem", alignItems: "center", position: "relative", zIndex: 2 }} className="lp-hero-grid">
          <div>
            <div className="reveal eyebrow-dark" style={{ marginBottom: "1.75rem" }}>
              <span className="pulse-dot" style={{ marginRight: "0.375rem", display: "inline-block" }} />
              AI Enterprise Assessment
            </div>
            <h1 className="reveal reveal-d1" style={{ fontSize: "clamp(2.75rem, 6vw, 5.25rem)", fontWeight: 900, lineHeight: 1.03, color: "#F9FAFB", letterSpacing: "-0.035em", marginBottom: "1.875rem" }}>
              Você sabe onde sua<br />empresa <span className="gradient-text">está no mapa </span>da IA?
            </h1>
            <p className="reveal reveal-d2" style={{ fontSize: "clamp(1rem, 2.2vw, 1.2rem)", color: "#9CA3AF", lineHeight: 1.6, marginBottom: "0.875rem", maxWidth: "560px" }}>
              Existe um traço comum em toda empresa que está{" "}
              <strong style={{ color: "#F9FAFB", fontWeight: 700 }}>gerando retorno real com IA agora.</strong>{" "}
              Não é o orçamento. Não é o time. É saber exatamente onde apostar, antes de agir.
            </p>
            <p className="reveal reveal-d3" style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)", color: "#6B7280", lineHeight: 1.75, marginBottom: "1.5rem", maxWidth: "500px" }}>
              Em 8 semanas entregamos o blueprint estratégico completo: Portfolio Map, Business Case com ROI e Roadmap prontos para o seu Board.
            </p>
            <div className="reveal reveal-d4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <a href="#diagnostico" className="btn-cta-lg"
                onClick={e => { e.preventDefault(); document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
                Fazer diagnóstico gratuito <Icon.ArrowRight />
              </a>
              <a href="#metodologia" className="btn-ghost-dark"
                onClick={e => { e.preventDefault(); document.getElementById("metodologia")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
                Ver metodologia
              </a>
            </div>
            <div className="reveal" style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
              {["8 semanas · resultado garantido", "Especialistas seniores", "Metodologia proprietária"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "#6B7280" }}>
                  <span style={{ color: "#0D9373", flexShrink: 0 }}><Icon.CheckCircle /></span>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="score-card-float lp-hero-score-col">
            <ScorePreviewCard />
          </div>
        </div>
        <style>{`
          .lp-hero-grid { grid-template-columns: 1fr 300px !important; }
          @media (max-width: 960px) { .lp-hero-grid { grid-template-columns: 1fr !important; } .lp-hero-score-col { display: none !important; } }
        `}</style>
      </section>

      {/* ── Stats strip ── */}
      <section style={{ background: "#080E1A", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "4.5rem clamp(1.25rem, 5vw, 3rem)" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0" }}>
          {STATS.map((s, i) => (
            <div key={i} className="reveal" style={{ textAlign: "center", padding: "0 2rem", borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
              <div className="gradient-text" style={{ fontSize: "clamp(3rem, 8vw, 4.5rem)", fontWeight: 900, lineHeight: 1, marginBottom: "0.75rem", fontFamily: "var(--font-assessment-mono, monospace)", letterSpacing: "-0.03em" }}>
                {s.value}
              </div>
              <p style={{ color: "#9CA3AF", fontSize: "0.92rem", lineHeight: 1.65, maxWidth: "270px", margin: "0 auto 0.5rem" }}>{s.label}</p>
              <span style={{ fontSize: "0.62rem", color: "#4B5563", fontFamily: "var(--font-assessment-mono, monospace)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.source}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Problem ── */}
      <section id="o-problema" style={{ background: "#F9FAFB", padding: "7rem clamp(1.25rem, 5vw, 3rem)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: "1080px", margin: "0 auto", position: "relative" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>O problema</div>
            <h2 style={{ color: "#111827", maxWidth: "640px", margin: "0 auto 1.25rem" }}>
              Orçamento aprovado. Tecnologia contratada.{" "}
              <span style={{ color: "#DC2626", fontStyle: "italic" }}>Retorno desaparecido.</span>
            </h2>
            <p style={{ color: "#4B5563", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
              A lacuna entre quem <strong style={{ color: "#111827" }}>fala de IA</strong> e quem{" "}
              <strong style={{ color: "#DC2626" }}>gera resultado com ela</strong> está ficando mais larga e mais cara a cada trimestre sem direção.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "3.5rem" }}>
            {PAINS.map(({ Icon: PainIcon, tag, stat, statLabel, title, body, punch }, i) => (
              <div key={i} className="reveal" style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
                <div style={{ position: "relative", height: "168px", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={PAIN_IMAGES[i]} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div aria-hidden style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)" }} />
                  <div aria-hidden style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "110px", background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 100%)" }} />
                  <span style={{ position: "absolute", top: "1rem", left: "1rem", fontSize: "0.58rem", fontFamily: "var(--font-assessment-mono, monospace)", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FCA5A5", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)", border: "1px solid rgba(220,38,38,0.5)", borderRadius: "4px", padding: "0.22rem 0.55rem" }}>
                    ⚠ {tag}
                  </span>
                  <div style={{ position: "absolute", bottom: "1rem", left: "1.25rem", right: "1.25rem" }}>
                    <div style={{ fontSize: "clamp(1.75rem,4vw,2.375rem)", fontWeight: 900, fontFamily: "var(--font-assessment-mono, monospace)", lineHeight: 1, color: "#fff", letterSpacing: "-0.03em", marginBottom: "0.28rem" }}>{stat}</div>
                    <p style={{ fontSize: "0.74rem", color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.4 }}>{statLabel}</p>
                  </div>
                </div>
                <div style={{ padding: "1.375rem 1.75rem 1.75rem" }}>
                  <div style={{ marginBottom: "0.875rem" }}><span style={{ color: "#DC2626" }}><PainIcon /></span></div>
                  <h3 style={{ color: "#111827", marginBottom: "0.625rem", fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.35 }}>{title}</h3>
                  <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "1.125rem" }}>{body}</p>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", background: "rgba(220,38,38,0.05)", border: "1px solid rgba(220,38,38,0.18)", borderRadius: "8px", padding: "0.7rem 0.875rem" }}>
                    <span style={{ color: "#DC2626", flexShrink: 0, marginTop: "1px" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </span>
                    <p style={{ fontSize: "0.8rem", color: "#7F1D1D", fontWeight: 600, margin: 0, lineHeight: 1.6 }}>{punch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ background: "#fff", border: "1px solid #E5E7EB", borderLeft: "4px solid #DC2626", borderRadius: "12px", padding: "2rem 2.25rem", display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: "1.5rem", alignItems: "center" }}>
            {[
              { num: "R$ 1,4M", label: "perdidos em média por empresa em projetos de IA sem retorno" },
              { num: "14 meses", label: "desperdiçados em tentativa e erro sem metodologia estruturada" },
              { num: "3 de 4", label: "dos seus concorrentes já aceleraram IA enquanto você avalia" },
            ].map((item, i) => (
              <React.Fragment key={i}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(1.375rem,2.5vw,1.875rem)", fontWeight: 900, fontFamily: "var(--font-assessment-mono, monospace)", color: "#DC2626", letterSpacing: "-0.025em", lineHeight: 1, marginBottom: "0.5rem" }}>{item.num}</div>
                  <p style={{ color: "#4B5563", fontSize: "0.8rem", lineHeight: 1.6, margin: 0 }}>{item.label}</p>
                </div>
                {i < 2 && <div style={{ width: "1px", height: "48px", background: "#E5E7EB", flexShrink: 0 }} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section id="solucao" style={{ background: "#F3F4F6", padding: "7rem clamp(1.25rem, 5vw, 3rem)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>A solução</div>
            <h2 style={{ color: "#111827", maxWidth: "780px", margin: "0 auto 1.5rem" }}>O AI Enterprise Assessment da Sciensa</h2>
            <p style={{ color: "#4B5563", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "720px", margin: "0 auto" }}>
              Não é consultoria genérica. É um processo estruturado que termina com{" "}
              <strong style={{ color: "#111827" }}>clareza total sobre onde investir, como construir e quanto vai custar e retornar.</strong>
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1.25rem" }}>
            {SOLUTION_METRICS.map(({ Icon: MetricIcon, val, desc }, i) => (
              <div key={i} className="reveal metric-box" style={{ textAlign: "center", padding: "2rem 1.5rem" }}>
                <div style={{ color: "#0D9373", marginBottom: "0.875rem", display: "flex", justifyContent: "center" }}><MetricIcon /></div>
                <div style={{ fontSize: "1.875rem", fontWeight: 900, color: "#0D9373", fontFamily: "var(--font-assessment-mono, monospace)", letterSpacing: "-0.02em", marginBottom: "0.375rem" }}>{val}</div>
                <p style={{ color: "#4B5563", fontSize: "0.875rem", margin: 0, lineHeight: 1.55 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Phases ── */}
      <section id="metodologia" style={{ background: "#030810", padding: "7rem 0", position: "relative", overflow: "hidden" }}>
        <div aria-hidden className="line-grid-dark" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(1.25rem,5vw,3rem)", position: "relative" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div className="eyebrow-dark" style={{ justifyContent: "center" }}>Metodologia</div>
            <h2 style={{ color: "#F9FAFB", marginTop: "0.75rem", marginBottom: "1.25rem" }}>
              8 semanas, 7 fases, <span className="gradient-text">zero surpresa</span>
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto" }}>
              Cada fase tem objetivo claro, participantes definidos e entregável documentado. Sem subjetividade, sem prolongamentos, sem retrabalho.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {PHASES.map(({ Icon: PhaseIcon, n, title, weeks, desc, detail, output }, i) => {
              const reverse = i % 2 === 1;
              return (
                <div key={i} className="reveal lp-phase-card" style={{ display: "grid", gridTemplateColumns: reverse ? "1fr 420px" : "420px 1fr", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.025)", backdropFilter: "blur(12px)", boxShadow: "0 32px 80px rgba(0,0,0,0.4)", minHeight: "380px" }}>
                  <div style={{ order: reverse ? 2 : 1, position: "relative", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={PHASE_IMAGES[i]} alt={title} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    <div aria-hidden style={{ position: "absolute", inset: 0, background: reverse ? "linear-gradient(270deg, rgba(3,8,16,0.0) 0%, rgba(3,8,16,0.7) 70%, rgba(3,8,16,0.96) 100%)" : "linear-gradient(90deg, rgba(3,8,16,0.0) 0%, rgba(3,8,16,0.7) 70%, rgba(3,8,16,0.96) 100%)" }} />
                    <div aria-hidden style={{ position: "absolute", inset: 0, background: "rgba(13,147,115,0.08)" }} />
                    <div style={{ position: "absolute", top: "1.75rem", left: reverse ? "auto" : "1.75rem", right: reverse ? "1.75rem" : "auto", display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: reverse ? "flex-end" : "flex-start" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(13,147,115,0.18)", border: "1px solid rgba(13,147,115,0.45)", borderRadius: "8px", padding: "0.4rem 0.75rem", backdropFilter: "blur(8px)" }}>
                        <span style={{ color: "#12C9A0" }}><PhaseIcon /></span>
                        <span style={{ fontSize: "0.62rem", fontFamily: "var(--font-assessment-mono, monospace)", fontWeight: 800, color: "#12C9A0", letterSpacing: "0.1em" }}>FASE {n}</span>
                      </div>
                      <span style={{ fontSize: "0.62rem", color: "#9CA3AF", fontFamily: "var(--font-assessment-mono, monospace)", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)", borderRadius: "4px", padding: "0.2rem 0.5rem" }}>{weeks}</span>
                    </div>
                  </div>
                  <div style={{ order: reverse ? 1 : 2, padding: "2.5rem 2.25rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h3 style={{ color: "#F9FAFB", fontSize: "clamp(1.1rem,2vw,1.3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.875rem", lineHeight: 1.25 }}>{title}</h3>
                    <p style={{ color: "#9CA3AF", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "1.375rem" }}>{desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
                      {detail.map((item, j) => (
                        <div key={j} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(13,147,115,0.12)", border: "1px solid rgba(13,147,115,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px", fontSize: "0.55rem", color: "#0D9373", fontWeight: 700 }}>{j + 1}</span>
                          <span style={{ fontSize: "0.835rem", color: "#D1D5DB", lineHeight: 1.7 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: "rgba(13,147,115,0.07)", border: "1px solid rgba(13,147,115,0.2)", borderRadius: "12px", padding: "1.125rem 1.25rem" }}>
                      <span style={{ display: "block", fontSize: "0.55rem", color: "#0D9373", fontFamily: "var(--font-assessment-mono, monospace)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.875rem" }}>Entregas desta fase</span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {output.split(" · ").map((item, oi) => (
                          <div key={oi} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                            <span style={{ color: "#0D9373", flexShrink: 0, marginTop: "3px" }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </span>
                            <span style={{ fontSize: "0.82rem", color: "#9CA3AF", lineHeight: 1.55 }}>{item.trim()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <style>{`
          @media (max-width: 820px) {
            .lp-phase-card { grid-template-columns: 1fr !important; }
            .lp-phase-card > div:first-child { order: 1 !important; min-height: 220px; position: relative !important; }
            .lp-phase-card > div:last-child { order: 2 !important; }
          }
        `}</style>
      </section>

      {/* ── Deliverables ── */}
      <section id="entregaveis" style={{ background: "#F9FAFB", padding: "7rem clamp(1.25rem, 5vw, 3rem)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.45, pointerEvents: "none" }} />
        <div style={{ maxWidth: "1080px", margin: "0 auto", position: "relative" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Entregáveis</div>
            <h2 style={{ color: "#111827", marginBottom: "1rem" }}>O que você leva ao final das <span style={{ color: "#0D9373" }}>8 semanas</span></h2>
            <p style={{ color: "#4B5563", fontSize: "1.05rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.8 }}>Documentação pronta para execução imediata. Não relatórios que ficam na gaveta.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {DELIVERABLES.map(({ Icon: DIcon, title, desc, audience }, i) => (
              <div key={i} className="reveal accent-card" style={{ padding: "1.75rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(13,147,115,0.08)", border: "1px solid rgba(13,147,115,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0D9373", marginBottom: "1rem" }}><DIcon /></div>
                <h3 style={{ color: "#111827", fontSize: "0.95rem", fontWeight: 700, lineHeight: 1.4, marginBottom: "0.625rem" }}>{title}</h3>
                <p style={{ color: "#4B5563", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "1.125rem" }}>{desc}</p>
                <span style={{ display: "inline-flex", fontSize: "0.62rem", fontFamily: "var(--font-assessment-mono, monospace)", letterSpacing: "0.07em", textTransform: "uppercase", color: "#0D9373", background: "rgba(13,147,115,0.07)", border: "1px solid rgba(13,147,115,0.22)", borderRadius: "4px", padding: "0.25rem 0.625rem" }}>{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment / Closing ── */}
      <section id="diagnostico" style={{ background: "linear-gradient(180deg, #050B15 0%, #060D1A 100%)", padding: "7rem clamp(1.25rem, 5vw, 3rem)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden className="line-grid-dark" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", bottom: "-10%", left: "50%", transform: "translateX(-50%)", width: "80%", height: "60%", background: "radial-gradient(ellipse at bottom, rgba(13,147,115,0.14) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1080px", margin: "0 auto", position: "relative" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="eyebrow-dark" style={{ justifyContent: "center" }}>Diagnóstico</div>
            <h2 style={{ color: "#F9FAFB", marginBottom: "1.25rem" }}>Descubra seu <span className="gradient-text">AI Maturity Score</span></h2>
            <p style={{ color: "#9CA3AF", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "680px", margin: "0 auto 2.5rem" }}>
              Responda 5 perguntas e descubra em qual nível de maturidade sua empresa está. Você recebe o resultado por e-mail e um especialista da Sciensa entra em contato.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { num: "Nível 1", sub: "Explorando", color: "#F87171", bg: "rgba(248,113,113,0.08)", border: "rgba(248,113,113,0.3)" },
                { num: "Nível 2", sub: "Construindo", color: "#FBBF24", bg: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.3)" },
                { num: "Nível 3", sub: "Escalando", color: "#34D399", bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.3)" },
                { num: "Nível 4", sub: "Liderando", color: "#12C9A0", bg: "rgba(13,147,115,0.08)", border: "rgba(13,147,115,0.35)" },
              ].map((lvl, i) => (
                <div key={i} style={{ background: lvl.bg, border: `1px solid ${lvl.border}`, borderRadius: "14px", padding: "1rem 1.5rem", minWidth: "128px", textAlign: "center" }}>
                  <span style={{ display: "block", width: "8px", height: "8px", borderRadius: "50%", background: lvl.color, margin: "0 auto 0.5rem" }} />
                  <span style={{ display: "block", fontSize: "0.6rem", fontFamily: "var(--font-assessment-mono, monospace)", color: lvl.color, letterSpacing: "0.08em", marginBottom: "0.25rem" }}>{lvl.num}</span>
                  <span style={{ display: "block", fontSize: "0.95rem", fontWeight: 700, color: "#F9FAFB" }}>{lvl.sub}</span>
                </div>
              ))}
            </div>
          </div>
          <MiniAssessment />
          <div className="reveal" style={{ marginTop: "5rem", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "3.5rem" }}>
            <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.85, maxWidth: "640px", margin: "0 auto" }}>
              Nossa equipe analisa seu diagnóstico e entra em contato na data e horários que você escolher para apresentar o Assessment completo. Sem pressão, sem compromisso.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: "#030810", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "2.5rem clamp(1.25rem, 5vw, 3rem)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Image src="/logos/sciensa-brancoVerde.png" alt="Sciensa" width={100} height={24} style={{ objectFit: "contain", height: "24px", width: "auto", opacity: 0.85 }} />
          <span style={{ fontSize: "0.72rem", color: "#4B5563", fontFamily: "var(--font-assessment-mono, monospace)" }}>AI-Native Engineering</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
          <span style={{ fontSize: "0.75rem", color: "#4B5563" }}>© {new Date().getFullYear()} Sciensa</span>
          <a href="https://sciensa.ai" style={{ fontSize: "0.75rem", color: "#4B5563", textDecoration: "none" }}>sciensa.ai</a>
        </div>
      </footer>

      {/* ── Mobile sticky CTA ── */}
      <div className="mobile-sticky-cta" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, padding: "0.875rem 1.25rem", background: "rgba(3,8,16,0.97)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "center" }}>
        <a href="#diagnostico" className="btn-cta-lg" style={{ flex: 1, maxWidth: "420px", justifyContent: "center" }}
          onClick={e => { e.preventDefault(); document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
          Fazer diagnóstico gratuito <Icon.ArrowRight />
        </a>
      </div>
    </div>
  );
}

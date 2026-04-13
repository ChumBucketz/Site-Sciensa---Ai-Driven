import { type StrapiInsight } from "./strapi";

export const mockInsights: StrapiInsight[] = [
  {
    id: 1,
    documentId: "mock-1",
    titulo_carrossel: "A Ilusão da Inteligência: Por Que a Maioria das Empresas de Pagamentos no Brasil Está Usando IA Errado",
    descricao_carrossel: "E o que separa quem realmente transformou a operação de quem apenas comprou uma API de scoring.",
    markdown: `![Cover](https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1200&q=80)

# A Ilusão da Inteligência

E o que separa quem realmente transformou a operação de quem apenas comprou uma API de scoring.

---

Existe uma cena que se repete em praticamente toda conferência de fintechs no Brasil. Um executivo sobe ao palco, abre o slide com o título "IA & Inovação", e lista: detecção de fraudes, personalização, chatbots. A plateia assente. O café esfria. Ninguém aprende nada.

## 1. O paradoxo do PIX

O PIX encerrou 2025 com **79,8 bilhões de transações** e **R$ 35,36 trilhões** movimentados — um crescimento de **33,6%** sobre 2024.

Mas essa velocidade criou um problema que poucos anteciparam: **os modelos de fraude existentes não foram feitos para esse ritmo.**

### O que isso significa na prática

Não adianta ter um modelo de Gradient Boosting com 400 features treinado offline se a feature store leva 300ms para montar o vetor de entrada.

## 2. R$ 29 bilhões em golpes

Muito se fala sobre detecção de fraudes com machine learning. Mas os números contam outra história.

> "A melhor IA em pagamentos não é a mais sofisticada, é a que cabe no orçamento de latência."

## Conclusão

A IA no mercado de pagamentos brasileiro não é uma história de tecnologia. É uma história de **maturidade operacional**.
`,
    publishedAt: "2026-04-13T18:32:41.326Z",
    home: true,
    tag: "AI & Payments",
    autor_nome: "Felipe Scaphe",
    autor_cargo: "Founder & CVO · Sciensa",
    autor_picture: null,
  },
  {
    id: 2,
    documentId: "mock-2",
    titulo_carrossel: "Platform Engineering Maturity: From Shared Libraries to Internal Developer Portals",
    descricao_carrossel: "A maturity model for platform teams moving from ad-hoc tooling to fully self-service golden paths.",
    markdown: `![Cover](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80)

# Platform Engineering Maturity

A maturity model for platform teams moving from ad-hoc tooling to fully self-service golden paths.

---

Platform engineering has moved from a niche concept to a mainstream discipline in under five years. But most organizations are still figuring out what it actually means in practice.

## The Four Stages

### Stage 1: Shared Libraries
The team maintains common utilities. No self-service. Everything requires a ticket.

### Stage 2: Paved Paths
Golden path templates exist. Developers can start projects without help, but customization requires manual work.

### Stage 3: Self-Service Platform
An Internal Developer Portal (IDP) provides self-service provisioning, observability, and lifecycle management.

### Stage 4: Product-Thinking Platform
The platform team operates like a product team — with SLOs, roadmaps, and customer feedback loops.
`,
    publishedAt: "2026-03-20T10:00:00.000Z",
    home: true,
    tag: "Platform Engineering",
    autor_nome: "Bruno Mancini",
    autor_cargo: "CEO · Sciensa",
    autor_picture: null,
  },
  {
    id: 3,
    documentId: "mock-3",
    titulo_carrossel: "Agentic AI in the Enterprise: Moving Beyond Copilots",
    descricao_carrossel: "How leading enterprises are deploying autonomous AI agents that don't just assist — they execute.",
    markdown: `![Cover](https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80)

# Agentic AI in the Enterprise

How leading enterprises are deploying autonomous AI agents that don't just assist — they execute.

---

The copilot era is ending. The agentic era is beginning.

For the past two years, enterprise AI has been dominated by assistants — tools that respond to prompts, suggest completions, and help humans work faster. That model is giving way to something fundamentally different: agents that plan, execute, and iterate autonomously.

## What Makes an Agent Different

A copilot waits for instructions. An agent pursues goals.

The distinction matters architecturally. Copilots are stateless — each interaction is independent. Agents maintain state, build context over time, and can chain multiple tool calls to complete complex workflows.

## Production Patterns That Work

After deploying agentic systems across banking, payments, and healthcare, three patterns consistently deliver results.
`,
    publishedAt: "2026-02-15T09:00:00.000Z",
    home: false,
    tag: "AI Engineering",
    autor_nome: "Bruno Mizrahi",
    autor_cargo: "CPO · Sciensa",
    autor_picture: null,
  },
];

import type { Metadata } from "next";
import { PlatformDetailTemplate, type PlatformDetailData } from "@/components/templates/PlatformDetailTemplate";

export const metadata: Metadata = {
  title: "Lumia AI | Enterprise Intelligence Platform — Sciensa",
  description: "Lumia AI is Sciensa's intelligence layer — copilots, internal assistants, workflow automation and enterprise knowledge platform powered by LLMs and RAG pipelines.",
  alternates: { canonical: "/platforms/lumia-ai" },
  openGraph: { title: "Lumia AI by Sciensa — Enterprise LLM Platform", description: "Applied intelligence in copilots, knowledge agents and workflow automation for enterprise.", url: "https://sciensa.com/platforms/lumia-ai", images: [{ url: "/image/og.png", width: 1200, height: 630 }] },
};

const data: PlatformDetailData = {
  eyebrow: "Platforms / Lumia AI",
  headline: "Intelligence layer for the enterprise",
  subheadline: "An applied intelligence layer that powers copilots, internal assistants, contextual intelligence, workflow automation, and enterprise knowledge — embedded across journeys and operations.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda_nmr23l.mp4",
  logo: "/logos/Lumia logo.png",
  accentColor: "#8b5cf6",
  stats: [
    { value: "60%", label: "Avg. automation rate" },
    { value: "80%", label: "Knowledge query resolution" },
    { value: "85%", label: "Accuracy improvement" },
    { value: "Days", label: "Time to first copilot" },
  ],
  approach: {
    sectionLabel: "// WHY LUMIA AI",
    sectionHeadline: "Enterprise AI with production-grade guardrails.",
    rows: [
      {
        title: "RAG architecture, not raw LLMs",
        description: "Generic LLMs hallucinate about your business. Lumia AI uses Retrieval-Augmented Generation grounded in your actual data — contracts, policies, procedures, knowledge bases — so every AI response is accurate and attributable.",
        stat: "98%",
        statLabel: "Response accuracy in production RAG deployments",
        reverse: false,
        items: ["Hybrid dense + sparse search", "Document chunking & vectorization", "Citation & source attribution", "Real-time knowledge updates"],
      },
      {
        title: "Governance built in, not bolted on",
        description: "In regulated industries, every AI interaction is a compliance event. Lumia AI's model registry, prompt audit logging, and bias monitoring give you full visibility into every AI decision — before regulators ask.",
        stat: "100%",
        statLabel: "AI interactions with full audit trail",
        reverse: true,
        items: ["Prompt & output audit logging", "Model version registry", "Bias monitoring dashboards", "Regulatory reporting hooks"],
      },
    ],
  },
  modules: {
    sectionLabel: "// PLATFORM MODULES",
    sectionHeadline: "Every layer of enterprise AI",
    sectionSubheadline: "From copilot to knowledge management — the full intelligence stack.",
    items: [
      { title: "Copilots & AI Assistants", description: "Domain-specific AI assistants pre-trained for financial services, healthcare, and enterprise workflows — deployable in days.", tags: ["Domain Pre-training", "RAG", "Multi-turn Dialogue"] },
      { title: "Internal Knowledge Agents", description: "Enterprise search and knowledge retrieval agents that index internal documents, policies, and data — giving teams instant answers.", tags: ["Document Indexing", "Semantic Search", "Knowledge Graph"] },
      { title: "Contextual Intelligence", description: "Real-time context enrichment that surfaces relevant insights, alerts, and recommendations at the moment of decision.", tags: ["Context Enrichment", "Real-time Alerts", "Recommendations"] },
      { title: "Workflow Automation", description: "AI-orchestrated workflows that handle exceptions, route decisions, and learn from human feedback over time.", tags: ["Exception Handling", "Decision Routing", "HITL"] },
      { title: "Enterprise Knowledge Platform", description: "Centralized knowledge management with version control, access policies, and continuous learning from enterprise interactions.", tags: ["Knowledge Versioning", "Access Policies", "Continuous Learning"] },
      { title: "Model Registry & Governance", description: "Central registry for all AI models — tracking versions, performance, bias metrics, and compliance status across the enterprise.", tags: ["Model Versioning", "Bias Monitoring", "Compliance"] },
    ],
  },
  caseStudies: [
    { client: "Major Insurance Company", title: "Claims Copilot", result: "LLM-powered claims copilot handles 60% of inquiries autonomously — cutting resolution time from 12 to 4.8 minutes.", tags: ["Copilots", "Workflow Automation"] },
    { client: "Tier-1 Bank", title: "Internal Knowledge Agent", result: "Enterprise knowledge agent serving 5,000+ employees with instant policy & compliance answers — 80% query resolution rate.", tags: ["Knowledge Agent", "Contextual Intelligence"] },
    { client: "Healthcare Network", title: "Clinical Decision Support", result: "AI decision support platform improving diagnostic accuracy by 85% across 12 hospitals with full regulatory audit trail.", tags: ["Contextual Intelligence", "Model Governance"] },
  ],
  cta: {
    headline: "Ready to embed intelligence into your enterprise?",
    subheadline: "Schedule a demo to see Lumia AI in action — from copilot to knowledge management.",
    primary: { label: "Schedule a demo", href: "/contact" },
    secondary: { label: "All platforms →", href: "/platforms" },
  },
};

export default function LumiaAI() {
  return <PlatformDetailTemplate data={data} />;
}

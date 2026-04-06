import { SolutionDetailTemplate, type SolutionDetailData } from "@/components/templates/SolutionDetailTemplate";

const data: SolutionDetailData = {
  eyebrow: "Solutions / Enterprise AI",
  headline: "AI that works inside your enterprise, not beside it",
  subheadline: "Copilots, intelligent workflows, document understanding, and operational automation — enterprise AI integrated into your existing systems and processes.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486826/0_Triangle_Tunnel_Neon_3840x2160_1_zyn7ch.mp4",
  stats: [
    { value: "60%", label: "Avg. process automation rate" },
    { value: "85%", label: "Manual effort reduction" },
    { value: "40+", label: "Enterprise AI deployments" },
    { value: "94%", label: "End-user satisfaction" },
  ],
  approach: {
    sectionLabel: "// OUR APPROACH",
    sectionHeadline: "AI embedded in operations, not beside them.",
    rows: [
      {
        title: "Integration-first AI design",
        description: "Most AI proofs-of-concept fail because they were never designed to integrate with the real systems — CRMs, ERPs, banking cores — where decisions are actually made. We start with integration, not with models.",
        stat: "30+",
        statLabel: "Enterprise systems connected to AI in our deployments",
        reverse: false,
        items: ["CRM & ERP integration", "Core banking connectors", "Real-time event hooks", "Human-in-the-loop design"],
      },
      {
        title: "RAG over generic LLMs",
        description: "General LLMs hallucinate about your business. We build Retrieval-Augmented Generation systems grounded in your actual data — contracts, policies, knowledge bases — so AI answers are accurate and auditable.",
        stat: "98%",
        statLabel: "Grounding accuracy in production RAG deployments",
        reverse: true,
        items: ["Enterprise knowledge vectorization", "Hybrid search (dense + sparse)", "Citation & source attribution", "Automated guardrails"],
      },
      {
        title: "Governance from day one",
        description: "In regulated industries, AI governance is mandatory. We build audit trails, prompt logging, model versioning, and human escalation into every AI deployment from the first sprint.",
        stat: "100%",
        statLabel: "AI deployments with full audit trail",
        reverse: false,
        items: ["Prompt & output audit logging", "Model version control", "Human escalation triggers", "Regulatory reporting hooks"],
      },
    ],
  },
  modules: {
    sectionLabel: "// BUILDING BLOCKS",
    sectionHeadline: "What we deliver",
    sectionSubheadline: "AI embedded in your operations — not bolted on.",
    items: [
      { title: "LLM-powered Copilots", description: "Domain-specific AI assistants for customer service, internal knowledge, compliance review, and operational workflows.", tags: ["LLM", "RAG", "Copilots"] },
      { title: "Intelligent Document Processing", description: "OCR, extraction, classification, and validation pipelines for contracts, invoices, medical records, and regulatory documents.", tags: ["Document AI", "OCR", "Extraction"] },
      { title: "Workflow Automation", description: "AI-driven process automation that handles exceptions, escalates intelligently, and learns from human corrections over time.", tags: ["Automation", "HITL", "Process AI"] },
      { title: "Predictive Analytics", description: "ML models for demand forecasting, churn prediction, anomaly detection, and operational intelligence embedded in business systems.", tags: ["Forecasting", "Churn", "Anomaly Detection"] },
      { title: "AI-powered Decision Support", description: "Real-time scoring engines, recommendation systems, and contextual AI that augments human decision-making at critical moments.", tags: ["Scoring", "Recommendations", "Explainable AI"] },
    ],
    highlight: {
      label: "Powered by",
      title: "Lumia AI Platform",
      description: "Enterprise AI platform with model registry, RAG orchestration, and production-grade guardrails.",
      badge: "AI Platform",
    },
  },
  caseStudies: [
    { client: "Major Insurance Company", title: "Claims AI Agent", result: "LLM-powered copilot handles 60% of claims inquiries autonomously, cutting resolution time by 60% with 94% CSAT.", tags: ["LLM Copilot", "Workflow Automation"] },
    { client: "Global Bank", title: "Document AI Platform", result: "Automated processing of 5M+ documents/month with 98% accuracy — reducing analyst effort by 85%.", tags: ["Document Processing", "Predictive Analytics"] },
    { client: "Retail Conglomerate", title: "Customer Intelligence Platform", result: "AI-driven churn prediction and recommendation engine reduced customer churn by 25% and increased cross-sell by 40%.", tags: ["Predictive Analytics", "Decision Support"] },
  ],
  cta: {
    headline: "Ready to embed AI into your operations?",
    subheadline: "Talk to our AI engineering team about your automation and intelligence challenges.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "Explore Lumia AI →", href: "/platforms/lumia-ai" },
  },
};

export default function EnterpriseAI() {
  return <SolutionDetailTemplate data={data} />;
}

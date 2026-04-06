import { CapabilityDetailTemplate, type CapabilityDetailData } from "@/components/templates/CapabilityDetailTemplate";

const data: CapabilityDetailData = {
  eyebrow: "Capabilities / AI Engineering",
  headline: "Applied AI engineering for the enterprise",
  subheadline: "We design, build, and operationalize AI systems that create measurable business value — from computer vision to generative AI agents.",
  video: "/Videos/0_Technology_Futuristic_3840x2160.mp4",
  stats: [
    { value: "150+", label: "AI models in production" },
    { value: "85%", label: "Avg. accuracy improvement" },
    { value: "40+", label: "Enterprise AI deployments" },
    { value: "10×", label: "Faster model iteration" },
  ],
  approach: {
    sectionLabel: "// OUR APPROACH",
    sectionHeadline: "AI that ships, not AI that demos.",
    rows: [
      {
        title: "Production-first AI design",
        description: "We build AI systems with the end state in mind — production pipelines, latency constraints, compliance requirements, and real-world data distribution — not just accuracy metrics on a test set.",
        stat: "98%",
        statLabel: "Model accuracy in production deployments",
        reverse: false,
        items: ["Production pipeline design from day 1", "Latency-aware model selection", "Real-world data distribution handling", "Compliance and auditability built in"],
      },
      {
        title: "Enterprise integration depth",
        description: "AI without integration is just a notebook. We embed models into your real systems — CRMs, ERPs, banking cores, workflows — so intelligence flows where decisions are made.",
        stat: "20+",
        statLabel: "Enterprise systems integrated",
        reverse: true,
        items: ["CRM & ERP integration", "Core banking hooks", "Event-driven AI triggers", "Real-time scoring pipelines"],
      },
      {
        title: "Responsible AI at every layer",
        description: "In regulated industries, responsible AI isn't optional. We build explainability, bias detection, audit trails, and governance frameworks into every model we deploy.",
        stat: "100%",
        statLabel: "Deployments with audit trail & explainability",
        reverse: false,
        items: ["Model explainability (SHAP/LIME)", "Bias detection & mitigation", "Regulatory audit logging", "AI governance frameworks"],
      },
    ],
  },
  modules: {
    sectionLabel: "// WHAT WE BUILD",
    sectionHeadline: "AI capabilities that ship",
    sectionSubheadline: "Production AI — not proof-of-concepts.",
    items: [
      { title: "LLM & Generative AI", description: "Fine-tuned models, RAG architectures, and AI agents that integrate with your enterprise systems.", tags: ["LLM", "RAG", "Agents"] },
      { title: "Computer Vision", description: "Image classification, object detection, and video analytics for manufacturing, retail, and healthcare.", tags: ["Computer Vision", "OCR", "Video Analytics"] },
      { title: "MLOps & Model Operations", description: "End-to-end ML pipelines, model monitoring, and automated retraining for production AI.", tags: ["MLOps", "Monitoring", "CI/CD"] },
      { title: "NLP & Conversational AI", description: "Intelligent chatbots, document understanding, and sentiment analysis at scale.", tags: ["NLP", "Chatbots", "Document AI"] },
      { title: "Real-time AI Inference", description: "Low-latency inference pipelines for fraud detection, recommendations, and dynamic pricing.", tags: ["Real-time", "Edge AI", "Streaming ML"] },
      { title: "Responsible AI", description: "Bias detection, explainability, and governance frameworks that meet regulatory requirements.", tags: ["Explainability", "Governance", "Compliance"] },
    ],
  },
  caseStudies: [
    { client: "Global Bank", title: "Document AI Platform", result: "Automated processing of 5M+ documents/month with 98% accuracy, reducing manual effort by 85%.", tags: ["Computer Vision", "NLP"] },
    { client: "Retail Chain", title: "Demand Forecasting", result: "ML-powered demand prediction improved inventory accuracy by 40%, reducing waste by $12M annually.", tags: ["MLOps", "Real-time AI"] },
    { client: "Insurance Leader", title: "Claims AI Agent", result: "GenAI agent handles 60% of claims inquiries autonomously with 94% customer satisfaction.", tags: ["LLM", "Conversational AI"] },
  ],
  cta: {
    headline: "Ready to put AI to work?",
    subheadline: "Schedule a briefing with our AI engineering team.",
    primary: { label: "Schedule a briefing", href: "/contact" },
    secondary: { label: "All capabilities →", href: "/capabilities" },
  },
};

export default function AIEngineering() {
  return <CapabilityDetailTemplate data={data} />;
}

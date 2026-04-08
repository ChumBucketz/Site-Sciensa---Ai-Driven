import { SolutionDetailTemplate, type SolutionDetailData } from "@/components/templates/SolutionDetailTemplate";

const data: SolutionDetailData = {
  eyebrow: "Solutions / AI for Financial Institutions",
  headline: "AI purpose-built for regulated financial environments",
  subheadline: "Fraud detection, risk intelligence, credit analysis, anti-money laundering, and compliance automation — AI tuned for the precision demands of financial services.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486826/0_Triangle_Tunnel_Neon_3840x2160_1_zyn7ch.mp4",
  stats: [
    { value: "<50ms", label: "Fraud scoring latency" },
    { value: "60%", label: "Fraud loss reduction" },
    { value: "R$1.2B", label: "Annual recovery enabled" },
    { value: "40+", label: "Financial AI deployments" },
  ],
  approach: {
    sectionLabel: "// OUR APPROACH",
    sectionHeadline: "AI with the precision regulators require.",
    rows: [
      {
        title: "Sub-50ms or it's not real-time",
        description: "Fraud scoring in a payment flow has to return a decision in under 50ms — or the user experience suffers and fraud wins. We build inference pipelines designed around latency, not accuracy-in-isolation.",
        stat: "<50ms",
        statLabel: "Fraud scoring latency in production",
        reverse: false,
        items: ["Feature serving at millisecond latency", "GPU-accelerated inference", "Real-time graph analytics", "Model serving optimization"],
      },
      {
        title: "Explainability for the regulator",
        description: "BACEN and CVM require financial institutions to explain AI-driven credit decisions. We build explainable AI systems with SHAP values, decision traces, and regulatory reporting built into every model.",
        stat: "100%",
        statLabel: "Models with regulatory explainability",
        reverse: true,
        items: ["SHAP & LIME explainability", "Decision trace logging", "Automated regulatory reports", "Bias monitoring & remediation"],
      },
      {
        title: "Graph-based fraud detection",
        description: "The most sophisticated fraud rings are invisible to traditional models. Graph analytics reveals hidden relationships between accounts, devices, and transactions that rule-based systems miss entirely.",
        stat: "0.1%",
        statLabel: "False positive rate on fraud detection",
        reverse: false,
        items: ["Graph neural networks", "Entity resolution", "Behavioral biometrics", "Device intelligence fingerprinting"],
      },
    ],
  },
  modules: {
    sectionLabel: "// BUILDING BLOCKS",
    sectionHeadline: "What we deliver",
    sectionSubheadline: "AI with the precision and explainability that regulators require.",
    items: [
      { title: "Fraud Detection & Prevention", description: "Real-time fraud scoring with graph analytics, behavioral biometrics, and device intelligence — sub-50ms response for payment flows.", tags: ["Real-time Scoring", "Graph Analytics", "Behavioral AI"] },
      { title: "Risk Intelligence", description: "Credit risk models, market risk analytics, and operational risk dashboards — with full explainability for regulatory review.", tags: ["Credit Risk", "Market Risk", "Explainable AI"] },
      { title: "Credit Analysis & Scoring", description: "Alternative data credit scoring, automated underwriting, and AI-driven credit limit management for mass-market lending.", tags: ["Alternative Data", "Underwriting", "Limit Management"] },
      { title: "AML & Compliance Automation", description: "Anti-money laundering transaction monitoring, suspicious activity reporting, and KYC/KYB workflow automation.", tags: ["AML", "SAR", "KYC/KYB"] },
      { title: "Customer Intelligence", description: "Customer lifetime value modeling, next best action, and personalization engines tuned for regulated financial interactions.", tags: ["CLV", "Next Best Action", "Churn Prediction"] },
    ],
  },
  caseStudies: [
    { client: "Financial Conglomerate", title: "Nextdue AI Collections", result: "AI-driven collections platform recovering R$1.2B/year across 8M+ accounts with 45% efficiency improvement.", tags: ["AI Collections", "Predictive Analytics"] },
    { client: "Digital Payments Provider", title: "Real-time Fraud Platform", result: "Graph-based fraud detection reducing fraud losses by 60% while maintaining < 0.1% false positive rate on 2.5M daily transactions.", tags: ["Fraud Detection", "Risk Intelligence"] },
    { client: "Insurance Leader", title: "Claims Risk Intelligence", result: "ML-powered claims triage reduced fraudulent claims by 40% and cut processing time by 65% for legitimate claims.", tags: ["Risk Intelligence", "AML & Compliance"] },
  ],
  cta: {
    headline: "Ready to deploy AI in your financial institution?",
    subheadline: "Talk to our financial AI team about your risk, fraud, and compliance challenges.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "Explore Nextdue →", href: "/platforms/nextdue" },
  },
};

export default function AIFinancialInstitutions() {
  return <SolutionDetailTemplate data={data} />;
}

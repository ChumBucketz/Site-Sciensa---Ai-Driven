import { IndustryDetailTemplate, type IndustryDetailData } from "@/components/templates/IndustryDetailTemplate";

const data: IndustryDetailData = {
  eyebrow: "Industries / Financial Services",
  headline: "Engineering trust at transaction speed",
  subheadline: "From core banking modernization to real-time payments and AI-driven risk intelligence — we build the mission-critical systems that financial institutions rely on to operate, innovate, and scale.",
  video: "/Videos/7020046_Tunnel_Hexagon_1920x1080.mp4",
  stats: [
    { value: "200+", label: "Financial services projects delivered" },
    { value: "40+", label: "Clients across banking, payments & insurance" },
    { value: "99.99%", label: "System uptime for mission-critical platforms" },
    { value: "15+", label: "Years of sector expertise" },
  ],
  approach: {
    sectionLabel: "// OUR EDGE",
    sectionHeadline: "Financial-grade engineering, earned in production.",
    rows: [
      {
        title: "Compliance by architecture, not by checkbox",
        description: "BACEN, CVM, LGPD, and Open Finance regulations are not afterthoughts — we embed them into the architectural decisions that govern data flow, API design, and audit trails from the first sprint.",
        stat: "100%",
        statLabel: "Regulatory compliance across all financial deployments",
        reverse: false,
        items: ["BACEN automated reporting", "LGPD data architecture", "Open Finance FAPI compliance", "Immutable audit logging"],
      },
      {
        title: "Real-time is the minimum bar",
        description: "PIX processes in under 10 seconds. Fraud scoring must return in under 50ms. Credit decisions need to be instant. In financial services, batch processing is a liability — we design for real-time from day one.",
        stat: "15K+",
        statLabel: "Transactions per second on financial platforms",
        reverse: true,
        items: ["Event-driven payment rails", "Sub-50ms fraud scoring", "Real-time ledger updates", "Instant credit decisioning"],
      },
    ],
  },
  capabilities: {
    sectionLabel: "// WHAT WE DELIVER",
    sectionHeadline: "End-to-end capabilities for financial institutions",
    sectionSubheadline: "Deep domain knowledge meets engineering precision — from strategy through production.",
    items: [
      { title: "Core Banking Modernization", description: "Decompose monolithic core systems into event-driven, API-first architectures — without disrupting daily operations or regulatory compliance.", details: ["Strangler-fig migration", "Dual-run validation", "Legacy screen modernization", "Zero-downtime data migration"] },
      { title: "Real-Time Payments & Settlement", description: "Architect high-throughput, low-latency payment rails for PIX, instant transfers, and cross-border settlements at scale.", details: ["Sub-second transaction processing", "ISO 20022 orchestration", "Multi-rail routing & fallback", "Real-time fraud scoring"] },
      { title: "AI-Driven Risk Intelligence", description: "Deploy ML models for credit risk, fraud detection, AML compliance, and operational risk — integrated into real-time decision pipelines.", details: ["Explainable AI for regulators", "Real-time scoring (<50ms)", "Graph-based AML detection", "Continuous model monitoring"] },
      { title: "Open Finance & Ecosystem APIs", description: "Build secure, scalable API platforms for Open Banking, consent management, and third-party ecosystem orchestration.", details: ["FAPI-compliant APIs", "Consent lifecycle management", "API gateway & rate limiting", "Partner developer portals"] },
      { title: "Tokenization & Digital Assets", description: "Engineer platforms for asset tokenization, custody systems, and programmable finance on distributed ledger architectures.", details: ["Security token issuance", "Custody & key management (HSM)", "Smart contract audit pipelines", "Regulatory reporting integration"] },
      { title: "Compliance & Regulatory Engineering", description: "Automate regulatory reporting, build audit trails, and embed compliance checks directly into your engineering pipeline.", details: ["Automated regulatory reports", "Immutable audit logging", "Policy-as-code enforcement", "KYC/KYB orchestration"] },
    ],
  },
  caseStudies: [
    { client: "Tier-1 Brazilian Bank", title: "Core Banking Decomposition", result: "70% reduction in deployment cycles while maintaining 99.99% uptime during migration of 12M+ accounts.", tags: ["Platform Engineering", "AI Engineering"] },
    { client: "Digital Payments Provider", title: "PIX Infrastructure at Scale", result: "Processed 2.5M+ daily transactions with < 200ms p99 latency and real-time fraud scoring across all payment flows.", tags: ["Real-Time Systems", "Cloud & DevSecOps"] },
    { client: "Insurance Holding Group", title: "AI-Powered Claims Intelligence", result: "Reduced claims processing time by 65% and fraud-related losses by 40% through automated triage and anomaly detection.", tags: ["AI Engineering", "Data Intelligence"] },
  ],
  techStack: [
    { category: "Cloud", items: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"] },
    { category: "Data & AI", items: ["Spark", "Kafka", "MLflow", "TensorFlow", "LangChain"] },
    { category: "Integration", items: ["Kong", "Apigee", "MuleSoft", "GraphQL", "gRPC"] },
    { category: "Security", items: ["Vault", "OPA", "SonarQube", "Snyk", "SIEM"] },
  ],
  cta: {
    headline: "Ready to modernize your financial infrastructure?",
    subheadline: "Schedule a briefing with our financial services engineering team to discuss your challenges and roadmap.",
    primary: { label: "Schedule a briefing", href: "/contact" },
    secondary: { label: "Other industries →", href: "/industries" },
  },
};

export default function FinancialServices() {
  return <IndustryDetailTemplate data={data} />;
}

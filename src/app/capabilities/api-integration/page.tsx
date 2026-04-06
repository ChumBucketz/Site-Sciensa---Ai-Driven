import { CapabilityDetailTemplate, type CapabilityDetailData } from "@/components/templates/CapabilityDetailTemplate";

const data: CapabilityDetailData = {
  eyebrow: "Capabilities / API & Integration Engineering",
  headline: "Connecting systems with precision",
  subheadline: "Enterprise APIs, legacy integration, event-driven messaging, orchestration layers, and secure connectivity — unifying your technology ecosystem.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486835/0_Technology_Futuristic_3840x2160_1_fydegq.mp4",
  stats: [
    { value: "500M+", label: "API calls managed/month" },
    { value: "99.99%", label: "Integration uptime" },
    { value: "80+", label: "Systems integrated" },
    { value: "40%", label: "Faster integration delivery" },
  ],
  approach: {
    sectionLabel: "// OUR APPROACH",
    sectionHeadline: "Integration that actually holds.",
    rows: [
      {
        title: "API-first, always",
        description: "Every integration we build starts with a contract-first API design — OpenAPI specs, versioning strategy, and developer experience — before a line of implementation code is written.",
        stat: "500M+",
        statLabel: "API calls managed monthly",
        reverse: false,
        items: ["Contract-first API design", "OpenAPI / AsyncAPI specs", "Semantic versioning", "Developer portal & docs"],
      },
      {
        title: "Legacy without the legacy problems",
        description: "We've connected hundreds of mainframes, ERPs, and core banking systems to modern digital platforms — using anti-corruption layers and strangler patterns that isolate complexity without rewrites.",
        stat: "80+",
        statLabel: "Legacy systems successfully integrated",
        reverse: true,
        items: ["Mainframe integration adapters", "ERP connectors (SAP, Oracle)", "Anti-corruption layer pattern", "Bi-directional data sync"],
      },
      {
        title: "Compliance in the connectivity layer",
        description: "In financial services, every API call is a compliance event. We build FAPI, PCI-DSS, and LGPD compliance directly into the connectivity layer — not as an afterthought.",
        stat: "100%",
        statLabel: "Integrations with compliance controls",
        reverse: false,
        items: ["FAPI-compliant API design", "OAuth 2.0 / OIDC", "mTLS everywhere", "PCI-DSS & LGPD controls"],
      },
    ],
  },
  modules: {
    sectionLabel: "// WHAT WE BUILD",
    sectionHeadline: "Integration capabilities that connect",
    sectionSubheadline: "From legacy mainframes to modern microservices — every system connected.",
    items: [
      { title: "Enterprise API Design", description: "RESTful and GraphQL API design, versioning strategies, and developer experience optimization for external and internal consumers.", tags: ["REST", "GraphQL", "OpenAPI"] },
      { title: "Legacy Integration", description: "Adapter patterns, anti-corruption layers, and strangler fig approaches to connect modern systems with legacy mainframes and ERPs.", tags: ["Mainframe", "ERP", "Anti-corruption"] },
      { title: "Events & Messaging", description: "Kafka, RabbitMQ, and AWS SQS/SNS integration patterns for reliable, scalable asynchronous communication across systems.", tags: ["Kafka", "RabbitMQ", "Pub/Sub"] },
      { title: "Workflow Orchestration", description: "Business process automation using Temporal, Camunda, and custom orchestration engines for complex multi-step workflows.", tags: ["Temporal", "Camunda", "Saga Pattern"] },
      { title: "Secure Connectivity", description: "OAuth 2.0, mTLS, zero-trust networking, and API security hardening for regulated industries.", tags: ["OAuth 2.0", "mTLS", "Zero Trust"] },
      { title: "API Lifecycle Management", description: "API gateway configuration, rate limiting, analytics, monetization, and deprecation strategies for platform-scale API programs.", tags: ["Kong", "Apigee", "Rate Limiting"] },
    ],
  },
  caseStudies: [
    { client: "Open Finance Leader", title: "Open Banking API Platform", result: "Designed and implemented FAPI-compliant Open Banking platform handling 50M+ API calls/month across 30+ ecosystem partners.", tags: ["Enterprise API", "Open Finance"] },
    { client: "Retail Conglomerate", title: "ERP Integration Hub", result: "Built integration hub connecting 8 legacy ERPs to modern e-commerce systems, eliminating 200+ point-to-point integrations.", tags: ["Legacy Integration", "Orchestration"] },
    { client: "Fintech Scale-up", title: "Real-time Payments Orchestration", result: "Kafka-powered orchestration layer routing 1M+ daily transactions across PIX, TED, and card rails with full idempotency.", tags: ["Events & Messaging", "Payments"] },
  ],
  cta: {
    headline: "Ready to unify your technology ecosystem?",
    subheadline: "Talk to our integration engineering team about your connectivity challenges.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "All capabilities →", href: "/capabilities" },
  },
};

export default function APIIntegration() {
  return <CapabilityDetailTemplate data={data} />;
}

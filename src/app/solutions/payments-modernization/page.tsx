import { SolutionDetailTemplate, type SolutionDetailData } from "@/components/templates/SolutionDetailTemplate";

const data: SolutionDetailData = {
  eyebrow: "Solutions / Payments Modernization",
  headline: "Re-engineering payments for speed, compliance, and scale",
  subheadline: "Next-generation payment platforms covering orchestration, settlement, reconciliation, and multi-rail processing — designed for real-time and regulatory compliance.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486826/0_Triangle_Tunnel_Neon_3840x2160_1_zyn7ch.mp4",
  stats: [
    { value: "15K", label: "TPS processed" },
    { value: "<200ms", label: "P99 latency" },
    { value: "99.99%", label: "Platform availability" },
    { value: "80%", label: "Fewer operational incidents" },
  ],
  approach: {
    sectionLabel: "// OUR APPROACH",
    sectionHeadline: "Payments built for the real-time era.",
    rows: [
      {
        title: "Real-time from the ground up",
        description: "Legacy batch-based payment systems can't support PIX, instant loans, or real-time fraud scoring. We redesign payment architectures around event streaming and sub-second processing from the start.",
        stat: "15K",
        statLabel: "Transactions per second on platforms we've built",
        reverse: false,
        items: ["Event-streaming payment core", "Sub-100ms fraud scoring", "ISO 20022 message orchestration", "Real-time settlement finality"],
      },
      {
        title: "Multi-rail without the complexity",
        description: "PIX, TED, boleto, cards, Open Finance — each payment rail has its own compliance model, message format, and failure mode. We build unified orchestration layers that abstract this complexity.",
        stat: "10+",
        statLabel: "Payment rails integrated in a single platform",
        reverse: true,
        items: ["PIX & TED processing", "Boleto & card schemes", "Open Finance initiation", "Cross-border routing"],
      },
      {
        title: "Compliance is the product",
        description: "BACEN reporting, AML monitoring, PCI-DSS, and LGPD aren't features — they're the reason regulators let you operate. We embed compliance controls directly into the transaction flow, not as an add-on.",
        stat: "100%",
        statLabel: "Regulatory coverage across all payment flows",
        reverse: false,
        items: ["BACEN automated reporting", "AML transaction monitoring", "PCI-DSS Level 1 architecture", "Audit trail immutability"],
      },
    ],
  },
  modules: {
    sectionLabel: "// BUILDING BLOCKS",
    sectionHeadline: "What we deliver",
    sectionSubheadline: "A complete payments modernization stack, from orchestration to compliance.",
    items: [
      { title: "Payment Orchestration", description: "Multi-rail payment routing across PIX, TED, boleto, and card schemes — with intelligent fallback, retry logic, and real-time fraud scoring.", tags: ["Multi-rail", "PIX & TED", "Fraud Scoring"] },
      { title: "Real-time Settlement", description: "Sub-second settlement engines, intraday liquidity management, and DVP mechanisms for financial market participants.", tags: ["Settlement", "Liquidity", "DVP"] },
      { title: "Multi-rail Processing", description: "Unified abstraction layer across domestic and international payment networks — ISO 20022, SWIFT, and Open Finance.", tags: ["ISO 20022", "SWIFT", "Open Finance"] },
      { title: "Reconciliation Engines", description: "Automated reconciliation, exception management, and dispute workflows for high-volume payment environments.", tags: ["Reconciliation", "Disputes", "Audit Trail"] },
      { title: "Compliance & Reporting", description: "BACEN regulatory reporting, AML transaction monitoring, and real-time compliance controls embedded in the payment flow.", tags: ["BACEN", "AML", "Compliance"] },
    ],
  },
  caseStudies: [
    { client: "Leading Payments Institution", title: "PIX Infrastructure at Scale", result: "Processed 2.5M+ daily transactions with < 200ms p99 latency and real-time fraud scoring across all payment flows.", tags: ["Payment Orchestration", "Real-time"] },
    { client: "Tier-1 Bank", title: "Payments Modernization", result: "Replaced legacy COBOL payment core with event-driven architecture, reducing operational incidents by 80% and enabling 15K TPS.", tags: ["Multi-rail", "Settlement"] },
    { client: "Fintech", title: "Open Finance Payment Hub", result: "Built FAPI-compliant payment initiation hub connecting to 300+ financial institutions with 99.97% availability.", tags: ["Open Finance", "Compliance"] },
  ],
  cta: {
    headline: "Ready to modernize your payments infrastructure?",
    subheadline: "Talk to our payments engineering team about your architecture and compliance challenges.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "All solutions →", href: "/solutions" },
  },
};

export default function PaymentsModernization() {
  return <SolutionDetailTemplate data={data} />;
}

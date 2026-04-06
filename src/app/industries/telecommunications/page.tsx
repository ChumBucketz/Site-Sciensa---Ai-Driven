import { IndustryDetailTemplate, type IndustryDetailData } from "@/components/templates/IndustryDetailTemplate";

const data: IndustryDetailData = {
  eyebrow: "Industries / Telecommunications",
  headline: "Modern platforms for connectivity at scale",
  subheadline: "BSS/OSS modernization, self-service digital channels, billing architecture, and AI-powered operations — for telecom operators reimagining customer experience.",
  video: "/Videos/7020046_Tunnel_Hexagon_1920x1080.mp4",
  stats: [
    { value: "50%", label: "Faster order-to-activation" },
    { value: "70%", label: "Self-service containment" },
    { value: "28%", label: "Churn reduction" },
    { value: "40%", label: "Infrastructure cost reduction" },
  ],
  approach: {
    sectionLabel: "// OUR EDGE",
    sectionHeadline: "BSS/OSS modernization without business disruption.",
    rows: [
      {
        title: "Incremental BSS decomposition",
        description: "Legacy BSS stacks have been accumulating complexity for decades. A big-bang rewrite risks the entire operation. We use strangler fig patterns and API wrapping to modernize telecom systems incrementally — while keeping the business running.",
        stat: "18 months",
        statLabel: "Average BSS modernization timeline",
        reverse: false,
        items: ["Strangler fig BSS decomposition", "API wrapping for legacy stacks", "Incremental product catalog migration", "Zero-downtime order management migration"],
      },
      {
        title: "Self-service that actually works",
        description: "Telecom customers don't want to call. Building digital self-service that handles 70%+ of customer interactions requires deep integration with billing, provisioning, and CRM — not just a pretty front-end.",
        stat: "70%",
        statLabel: "Customer requests handled without agent",
        reverse: true,
        items: ["Billing & account self-service", "Service provisioning portals", "Real-time usage dashboards", "Omnichannel support integration"],
      },
    ],
  },
  capabilities: {
    sectionLabel: "// WHAT WE DELIVER",
    sectionHeadline: "Engineering for connectivity",
    sectionSubheadline: "From BSS modernization to AI-driven operations — full-stack telecom engineering.",
    items: [
      { title: "BSS/OSS Platform Modernization", description: "Decompose legacy BSS/OSS stacks into cloud-native, API-first architectures — reducing time-to-market for new products and services.", details: ["BSS decomposition", "OSS modernization", "Product catalog migration", "Order management"] },
      { title: "Self-service Digital Channels", description: "Web and mobile customer portals for account management, billing, support, and upsell — reducing call center volume and improving CX.", details: ["Customer portals", "Mobile apps", "Omnichannel CX", "Self-care journeys"] },
      { title: "Data & Automation", description: "Network analytics, customer intelligence, and AI-powered operations — from churn prediction to proactive fault management.", details: ["Churn prediction", "Network analytics", "AI-powered ops", "Proactive maintenance"] },
      { title: "Billing & Revenue Assurance", description: "Rating, charging, and billing modernization for convergent services — with revenue leakage detection and automated reconciliation.", details: ["Convergent billing", "Revenue assurance", "Leakage detection", "Automated reconciliation"] },
      { title: "Network Intelligence", description: "Real-time network performance monitoring, capacity planning, and AI-driven anomaly detection for telecom infrastructure.", details: ["Performance monitoring", "Capacity planning", "Anomaly detection", "SLA management"] },
    ],
  },
  caseStudies: [
    { client: "Tier-1 Telecom Operator", title: "BSS Platform Replacement", result: "Replaced legacy BSS with cloud-native platform using API wrapping — reducing order-to-activation time by 50% and infrastructure costs by 40%.", tags: ["BSS/OSS Modernization", "Digital Channels"] },
    { client: "Regional Carrier", title: "Customer Self-service Platform", result: "Digital self-service portal handling 70% of customer requests without agent interaction — NPS improved by 22 points in 6 months.", tags: ["Self-service Channels", "Digital CX"] },
    { client: "Mobile Operator", title: "AI Churn Intelligence", result: "ML churn prediction model with personalized retention offers reduced voluntary churn by 28% in the postpaid segment.", tags: ["Data & Automation", "Network Intelligence"] },
  ],
  cta: {
    headline: "Ready to modernize your telecom stack?",
    subheadline: "Talk to our team about your BSS/OSS modernization and digital channel challenges.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "All industries →", href: "/industries" },
  },
};

export default function Telecommunications() {
  return <IndustryDetailTemplate data={data} />;
}

import { PlatformDetailTemplate, type PlatformDetailData } from "@/components/templates/PlatformDetailTemplate";

const data: PlatformDetailData = {
  eyebrow: "Platforms / SmartCollect",
  headline: "Intelligent collection & recovery at scale",
  subheadline: "Applied intelligence for collections, recovery, and operational efficiency — with automated prioritization, segmentation, experience optimization, and operational intelligence.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486834/0_Circuit_Board_Technology_3840x2160_rbiidg.mp4",
  stats: [
    { value: "R$1.2B", label: "Annual recovery enabled" },
    { value: "8M+", label: "Accounts managed" },
    { value: "45%", label: "Operational efficiency gain" },
    { value: "38%", label: "Self-cure rate improvement" },
  ],
  approach: {
    sectionLabel: "// WHY SMARTCOLLECT",
    sectionHeadline: "Collections intelligence that recovers more, costs less.",
    rows: [
      {
        title: "Prioritization based on propensity, not balance",
        description: "Traditional collections sort by balance or delinquency days. SmartCollect's ML models score every account by recovery probability, contact propensity, and optimal contact timing — so agents work the right accounts, not just the biggest ones.",
        stat: "45%",
        statLabel: "Improvement in operational efficiency",
        reverse: false,
        items: ["Recovery probability scoring", "Contact propensity modeling", "Optimal timing prediction", "Agent productivity routing"],
      },
      {
        title: "Self-cure that protects the relationship",
        description: "The most efficient recovery is one where the customer cures themselves. SmartCollect's personalized digital journeys — tailored tone, channel, and offer by customer segment — drive voluntary payment without damaging the long-term relationship.",
        stat: "38%",
        statLabel: "Self-cure rate improvement",
        reverse: true,
        items: ["Personalized digital journeys", "Multi-channel outreach (SMS, email, WhatsApp)", "Tone & offer optimization by segment", "Self-service payment portal"],
      },
    ],
  },
  modules: {
    sectionLabel: "// PLATFORM MODULES",
    sectionHeadline: "The complete collections intelligence stack",
    sectionSubheadline: "From early delinquency detection to regulatory-compliant recovery — end to end.",
    items: [
      { title: "Automated Prioritization", description: "ML models that rank delinquent accounts by recovery probability, contact propensity, and optimal timing — automatically.", tags: ["Recovery Scoring", "Contact Propensity", "Timing Optimization"] },
      { title: "Intelligent Segmentation", description: "Behavioral clustering and risk-based segmentation that groups accounts by profile, enabling differentiated collection strategies.", tags: ["Behavioral Clustering", "Risk Segmentation", "Cohort Analysis"] },
      { title: "Customer Experience Optimization", description: "Personalized collection journeys across digital channels — reducing friction, improving response rates, and protecting customer relationships.", tags: ["Personalized Journeys", "Multi-channel", "Self-cure Portal"] },
      { title: "Recovery Intelligence", description: "Negotiation engine with AI-powered settlement offer optimization, payment plan recommendation, and concession management.", tags: ["Settlement Optimization", "Payment Plan AI", "Negotiation"] },
      { title: "Operational Efficiency", description: "Automated contact center workflows, agent augmentation, and performance dashboards for collections teams.", tags: ["Agent Augmentation", "Workflow Automation", "Performance"] },
      { title: "Regulatory Compliance", description: "Built-in compliance controls for BACEN, LGPD, and consumer protection regulation — with full audit trails for every interaction.", tags: ["BACEN Compliance", "LGPD Controls", "Audit Trails"] },
    ],
  },
  caseStudies: [
    { client: "Financial Conglomerate", title: "AI Collections at Scale", result: "SmartCollect platform recovering R$1.2B/year across 8M+ delinquent accounts with 45% operational efficiency improvement.", tags: ["Automated Prioritization", "Recovery Intelligence"] },
    { client: "Digital Lender", title: "Self-cure Optimization", result: "AI-personalized self-cure journeys increased voluntary payment rate by 38% while reducing operational cost per account by 55%.", tags: ["CX Optimization", "Intelligent Segmentation"] },
    { client: "Credit Card Issuer", title: "Early Delinquency Prevention", result: "Predictive risk scoring identified at-risk customers 30 days before delinquency — reducing NPL formation by 22%.", tags: ["Automated Prioritization", "Operational Efficiency"] },
  ],
  cta: {
    headline: "Ready to transform your collections operation?",
    subheadline: "See how SmartCollect can improve recovery rates and operational efficiency.",
    primary: { label: "Schedule a demo", href: "/contact" },
    secondary: { label: "All platforms →", href: "/platforms" },
  },
};

export default function SmartCollect() {
  return <PlatformDetailTemplate data={data} />;
}

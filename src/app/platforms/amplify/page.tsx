import { PlatformDetailTemplate, type PlatformDetailData } from "@/components/templates/PlatformDetailTemplate";

const data: PlatformDetailData = {
  eyebrow: "Platforms / Amplify",
  headline: "Accelerate your digital banking with Amplify",
  subheadline: "A modular platform that compresses digital banking launches from months to weeks — covering onboarding, accounts, payments, cards, and composable financial journeys.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7_lah9zl.mp4",
  logo: "/logos/Amplify Logo.png",
  accentColor: "#22AEA4",
  stats: [
    { value: "10×", label: "Faster time-to-market" },
    { value: "90%", label: "Lower development cost" },
    { value: "6×", label: "Project ROI" },
    { value: "94%", label: "Higher NPS" },
  ],
  approach: {
    sectionLabel: "// WHY AMPLIFY",
    sectionHeadline: "Built from real bank deployments.",
    rows: [
      {
        title: "Modules that come pre-compliant",
        description: "Every Amplify module ships with BACEN compliance, LGPD controls, and Open Finance APIs pre-built. You don't need to engineer regulatory compliance — we already did, across 20+ production deployments.",
        stat: "100%",
        statLabel: "Regulatory compliance across all Amplify deployments",
        reverse: false,
        items: ["BACEN automated reporting", "LGPD data handling", "FAPI-compliant Open Finance APIs", "PIX 100% Bacen compliance"],
      },
      {
        title: "Composable, not monolithic",
        description: "Don't need cards yet? Launch without them. Need to add PJ accounts in quarter two? Just activate the module. Amplify's composable architecture lets you launch what you need now and grow incrementally.",
        stat: "8 wks",
        statLabel: "Fastest full-stack launch with Amplify",
        reverse: true,
        items: ["Module-by-module activation", "API-first, no vendor lock-in", "White-label theming per brand", "Coexists with existing core banking"],
      },
    ],
  },
  modules: {
    sectionLabel: "// PLATFORM MODULES",
    sectionHeadline: "Everything you need to launch",
    sectionSubheadline: "Pre-built, battle-tested modules for digital banking — composable and white-label.",
    items: [
      { title: "Onboarding & KYC", description: "Automated onboarding with real-time identity verification — account opening in under 5 minutes.", tags: ["eKYC", "Biometrics", "Real-time Decisioning"] },
      { title: "Digital Accounts PF/PJ", description: "Complete accounts with balance management, statements, and enterprise-grade transactions.", tags: ["Checking & Savings", "Multi-product", "Real-time Ledger"] },
      { title: "PIX & Payments", description: "Full PIX stack with 100% Bacen compliance — plus bulk billing and payment orchestration.", tags: ["PIX Instant", "Bulk Billing", "Orchestration"] },
      { title: "Risk & Compliance", description: "Real-time risk management with limits, anti-fraud, credit analysis, and regulatory compliance.", tags: ["Anti-fraud", "Credit Analysis", "Dynamic Limits"] },
      { title: "Portal & Mobile", description: "White-label internet banking and native mobile apps with complete banking experience.", tags: ["Responsive Web", "iOS & Android", "White-label"] },
      { title: "Open Banking & Cards", description: "OpenAPI 3.0 integration layer and full card management — virtual and physical.", tags: ["Open Banking APIs", "Virtual Cards", "Physical Cards"] },
    ],
  },
  caseStudies: [
    { client: "iFood Pago", title: "Digital Bank Launch", result: "Stood up the entire banking operation rapidly, enabling strategic account rollout for iFood Pago's top partners — from zero to live in record time.", tags: ["Digital Banking", "Platform"] },
    { client: "Mid-Size Bank", title: "Core Modernization", result: "Replaced legacy core with Amplify modules, cutting operational cost by 90% and enabling new product launches in weeks instead of quarters.", tags: ["Modernization", "Cost Reduction"] },
    { client: "Financial Institution", title: "PJ Digital Account", result: "Launched a complete PJ digital account product in 8 weeks, reaching 10k+ active business accounts within the first quarter.", tags: ["PJ Accounts", "Time-to-Market"] },
  ],
  cta: {
    headline: "Ready to accelerate your digital banking?",
    subheadline: "Schedule a briefing to see how Amplify can compress your roadmap and reduce cost.",
    primary: { label: "Schedule a briefing", href: "/contact" },
    secondary: { label: "All platforms →", href: "/platforms" },
  },
};

export default function Amplify() {
  return <PlatformDetailTemplate data={data} />;
}

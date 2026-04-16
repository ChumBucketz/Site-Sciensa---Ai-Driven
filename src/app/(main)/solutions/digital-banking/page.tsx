import { SolutionDetailTemplate, type SolutionDetailData } from "@/components/templates/SolutionDetailTemplate";

const data: SolutionDetailData = {
  eyebrow: "Solutions / Digital Banking",
  headline: "Modern banking architectures for digital-first institutions",
  subheadline: "End-to-end digital banking platforms — from account opening and KYC to card management and self-service channels — built on event-driven, API-first architectures.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486826/0_Triangle_Tunnel_Neon_3840x2160_1_zyn7ch.mp4",
  stats: [
    { value: "12M+", label: "Users on platforms we built" },
    { value: "8 wks", label: "Fastest go-live with Amplify" },
    { value: "99.9%", label: "Platform uptime" },
    { value: "40×", label: "Deployment frequency" },
  ],
  approach: {
    sectionLabel: "// OUR APPROACH",
    sectionHeadline: "Digital banking done right, the first time.",
    rows: [
      {
        title: "API-first, event-driven by design",
        description: "Modern digital banking can't be built on synchronous monoliths. We design event-driven, API-first architectures that scale to millions of users — and to the next generation of digital products.",
        stat: "15K+",
        statLabel: "Transactions per second on platforms we've built",
        reverse: false,
        items: ["Event-driven architecture", "OpenBanking-compliant APIs", "Domain-driven service design", "Real-time notification engine"],
      },
      {
        title: "Compliance embedded, not bolted on",
        description: "Digital banking in Brazil requires BACEN compliance, LGPD, and Open Finance readiness. We encode regulatory requirements directly into the architecture — not as an afterthought checklist.",
        stat: "100%",
        statLabel: "Regulatory compliance across all deployments",
        reverse: true,
        items: ["BACEN reporting automation", "LGPD data handling", "Open Finance APIs (FAPI)", "KYC/AML workflow orchestration"],
      },
      {
        title: "Accelerated by Amplify platform",
        description: "Our Amplify platform provides pre-built, battle-tested modules for digital banking — onboarding, accounts, PIX, cards — cutting delivery from months to weeks without sacrificing quality.",
        stat: "8 wks",
        statLabel: "Fastest full stack go-live with Amplify",
        reverse: false,
        items: ["Pre-built onboarding & KYC module", "PIX & payments orchestration", "Card management (virtual + physical)", "White-label mobile & web channels"],
      },
    ],
  },
  modules: {
    sectionLabel: "// BUILDING BLOCKS",
    sectionHeadline: "What we deliver",
    sectionSubheadline: "A complete digital banking stack, modular and composable.",
    items: [
      { title: "Account Lifecycle Management", description: "End-to-end account opening, maintenance, and closure — supporting PF and PJ accounts with regulatory compliance built in.", tags: ["Account Opening", "KYC/CDD", "Compliance"] },
      { title: "Digital Onboarding & KYC", description: "Automated onboarding with biometric identity verification, document validation, and real-time credit decisioning in under 5 minutes.", tags: ["eKYC", "Biometrics", "Real-time Decisioning"] },
      { title: "Card & Wallet Management", description: "Virtual and physical card issuance, spending controls, limits management, and mobile wallet integration.", tags: ["Virtual Cards", "Physical Cards", "Apple/Google Pay"] },
      { title: "Self-service Channels", description: "Web and mobile banking with responsive design, accessibility compliance, and feature parity across all channels.", tags: ["Internet Banking", "Mobile Banking", "WCAG"] },
      { title: "Notification & Engagement", description: "Personalized multi-channel notification engine — push, SMS, email, and WhatsApp — for transactional and marketing communications.", tags: ["Multi-channel", "Personalization", "Push/SMS/Email"] },
    ],
    highlight: {
      label: "Powered by",
      title: "Amplify Platform",
      description: "Compress your digital banking roadmap from months to weeks with pre-built, battle-tested modules.",
      badge: "Platform / Accelerator",
    },
  },
  caseStudies: [
    { client: "Top-5 Brazilian Bank", title: "Next-gen Digital Banking Platform", result: "Built cloud-native digital banking platform for 12M+ users with 99.9% uptime and 40× weekly deployment frequency.", tags: ["Account Lifecycle", "Self-service"] },
    { client: "Digital Neobank", title: "Zero-to-Live in 8 Weeks", result: "Full digital banking stack — onboarding, accounts, PIX, and cards — live in 8 weeks via Amplify platform.", tags: ["Digital Onboarding", "Card Management"] },
    { client: "Regional Bank", title: "Mobile-first Transformation", result: "Redesigned mobile banking app achieving 4.8★ App Store rating and 60% increase in digital adoption within 6 months.", tags: ["Self-service", "Engagement"] },
  ],
  cta: {
    headline: "Ready to build your digital banking platform?",
    subheadline: "Talk to our team about your digital banking roadmap and how we can accelerate delivery.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "Explore Amplify →", href: "/platforms/amplify" },
  },
};

export default function DigitalBanking() {
  return <SolutionDetailTemplate data={data} />;
}

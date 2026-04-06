import { SolutionDetailTemplate, type SolutionDetailData } from "@/components/templates/SolutionDetailTemplate";

const data: SolutionDetailData = {
  eyebrow: "Solutions / Core Modernization",
  headline: "From legacy constraints to modern architectures",
  subheadline: "Strangler patterns, data migration, API wrapping, and incremental modernization — transforming monolithic core systems without business disruption.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486826/0_Triangle_Tunnel_Neon_3840x2160_1_zyn7ch.mp4",
  stats: [
    { value: "20+", label: "Core systems modernized" },
    { value: "0", label: "Data loss incidents" },
    { value: "70%", label: "Faster deployments post-migration" },
    { value: "99.99%", label: "Uptime during migration" },
  ],
  approach: {
    sectionLabel: "// OUR APPROACH",
    sectionHeadline: "Modernize without stopping the business.",
    rows: [
      {
        title: "No big-bang rewrites",
        description: "Big-bang rewrites fail. The system you're replacing still has to run while you build its replacement, and no one knows all its behaviors until something breaks. We use incremental migration patterns that keep the business running throughout.",
        stat: "0",
        statLabel: "Business disruptions in our modernization engagements",
        reverse: false,
        items: ["Strangler fig pattern", "Feature-by-feature replacement", "Traffic splitting & routing", "Rollback automation at every step"],
      },
      {
        title: "Data migration is the hardest part",
        description: "Moving data from a 30-year-old system to a modern platform — without data loss, without downtime, while the old system still processes transactions — is a precision engineering problem. We've done it dozens of times.",
        stat: "50M+",
        statLabel: "Records migrated without data loss",
        reverse: true,
        items: ["Zero-downtime migration patterns", "Dual-write consistency", "Reconciliation framework", "Point-in-time consistency guarantees"],
      },
      {
        title: "Legacy is still an asset",
        description: "The goal of modernization isn't to erase legacy — it's to escape its constraints. We use anti-corruption layers and API facades to let modern systems leverage legacy capabilities while we progressively replace them.",
        stat: "18 months",
        statLabel: "Average modernization program duration",
        reverse: false,
        items: ["Anti-corruption layer design", "Legacy API facade", "Protocol translation (MQ, COBOL, REST)", "Strangler boundary definition"],
      },
    ],
  },
  modules: {
    sectionLabel: "// BUILDING BLOCKS",
    sectionHeadline: "What we deliver",
    sectionSubheadline: "Proven patterns for modernizing systems that can't afford to stop.",
    items: [
      { title: "Legacy Assessment & Strategy", description: "Architectural audit, technical debt quantification, and modernization roadmap definition — with risk-adjusted migration scenarios.", tags: ["Architecture Audit", "Tech Debt", "Roadmap"] },
      { title: "Strangler Fig Pattern", description: "Proven incremental modernization using strangler fig — progressively replacing legacy functionality without disrupting operations.", tags: ["Strangler Fig", "Incremental", "Zero Disruption"] },
      { title: "Data Migration & Sync", description: "Zero-downtime data migration, dual-write patterns, and reconciliation frameworks for moving data from legacy to modern systems.", tags: ["Data Migration", "Dual-write", "Reconciliation"] },
      { title: "API Wrapping & Adaptation", description: "Anti-corruption layers, legacy API facades, and translation services that let modern systems consume legacy capabilities without coupling.", tags: ["Anti-corruption", "API Facade", "Translation"] },
      { title: "Incremental Modernization", description: "Parallel-run validation, canary releases, and progressive cutover strategies that minimize risk across large-scale modernization programs.", tags: ["Parallel Run", "Canary", "Progressive Cutover"] },
    ],
  },
  caseStudies: [
    { client: "Tier-1 Brazilian Bank", title: "Core Banking Decomposition", result: "70% reduction in deployment cycles while maintaining 99.99% uptime during migration of 12M+ accounts from legacy COBOL core.", tags: ["Strangler Fig", "Data Migration"] },
    { client: "Insurance Holding", title: "Policy Management Modernization", result: "Migrated 30-year-old policy management system to event-driven microservices in 18 months with zero data loss across 8M policies.", tags: ["Legacy Assessment", "Incremental Modernization"] },
    { client: "Telecom Operator", title: "BSS Platform Replacement", result: "Replaced monolithic BSS with cloud-native platform using API wrapping for legacy integration — 50% faster order-to-activation.", tags: ["API Wrapping", "Incremental"] },
  ],
  cta: {
    headline: "Ready to escape your legacy constraints?",
    subheadline: "Talk to our modernization team about your core system challenges and migration roadmap.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "All solutions →", href: "/solutions" },
  },
};

export default function CoreModernization() {
  return <SolutionDetailTemplate data={data} />;
}

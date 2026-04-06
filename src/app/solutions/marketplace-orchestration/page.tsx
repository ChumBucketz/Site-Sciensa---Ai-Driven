import { SolutionDetailTemplate, type SolutionDetailData } from "@/components/templates/SolutionDetailTemplate";

const data: SolutionDetailData = {
  eyebrow: "Solutions / Marketplace & Orchestration",
  headline: "Multi-sided platforms engineered for complexity",
  subheadline: "Marketplace engines, catalog management, pricing intelligence, seller onboarding, and operational orchestration — for businesses connecting multiple sides of a market.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486826/0_Triangle_Tunnel_Neon_3840x2160_1_zyn7ch.mp4",
  stats: [
    { value: "$2B+", label: "GMV on platforms we built" },
    { value: "3,000+", label: "Sellers managed" },
    { value: "99.97%", label: "Platform availability" },
    { value: "10×", label: "SKU growth in 12 months" },
  ],
  approach: {
    sectionLabel: "// OUR APPROACH",
    sectionHeadline: "Marketplace complexity, tamed.",
    rows: [
      {
        title: "Platform thinking, not feature thinking",
        description: "Most marketplace projects fail because they're built as a collection of features instead of a platform. We design marketplaces as multi-sided platforms — with explicit network effects, liquidity mechanics, and governance models.",
        stat: "3,000+",
        statLabel: "Sellers managed on platforms we've built",
        reverse: false,
        items: ["Network effect design", "Liquidity mechanics", "Trust & safety framework", "Platform governance model"],
      },
      {
        title: "Catalog at scale",
        description: "When you have millions of SKUs from thousands of sellers, catalog management becomes an engineering problem. We build taxonomy engines, attribute inheritance systems, and real-time indexing that keep catalog quality high at scale.",
        stat: "10×",
        statLabel: "SKU growth enabled in 12 months",
        reverse: true,
        items: ["Taxonomy management", "Attribute inheritance", "Media handling & CDN", "Real-time search indexing"],
      },
      {
        title: "Intelligent pricing in real-time",
        description: "Static pricing loses revenue. We build dynamic pricing engines that respond to demand signals, competitive monitoring, and promotional orchestration — keeping margins healthy across millions of listings.",
        stat: "15%",
        statLabel: "Average margin improvement with dynamic pricing",
        reverse: false,
        items: ["Demand-based pricing", "Competitive monitoring", "Promotional orchestration", "Margin management guardrails"],
      },
    ],
  },
  modules: {
    sectionLabel: "// BUILDING BLOCKS",
    sectionHeadline: "What we deliver",
    sectionSubheadline: "Every layer of a modern marketplace, composable and scalable.",
    items: [
      { title: "Marketplace Engine", description: "Multi-sided platform core — buyer/seller matching, listing management, transaction orchestration, and commission engines.", tags: ["Matching Engine", "Transactions", "Commission"] },
      { title: "Catalog & Product Management", description: "Unified product catalog with taxonomy management, attribute inheritance, media handling, and real-time indexing for high-volume assortments.", tags: ["Catalog", "Taxonomy", "Real-time Index"] },
      { title: "Pricing Intelligence", description: "Dynamic pricing engine with competitive monitoring, demand-based adjustments, and promotional pricing orchestration across the catalog.", tags: ["Dynamic Pricing", "Competitive Intel", "Promotions"] },
      { title: "Seller Onboarding & Management", description: "Self-service seller portal, automated document verification, quality scoring, and performance management for marketplace operators.", tags: ["Seller Portal", "Verification", "Performance"] },
      { title: "Operational Orchestration", description: "Order management, fulfillment routing, logistics integration, and post-sale SLA management for complex multi-seller operations.", tags: ["Order Management", "Fulfillment", "SLA"] },
    ],
  },
  caseStudies: [
    { client: "Enterprise Retailer", title: "$2B Marketplace Platform", result: "Built seller orchestration platform for 3,000+ sellers — managing catalog, pricing, fulfillment and settlement with 99.97% API uptime.", tags: ["Marketplace Engine", "Seller Management"] },
    { client: "Fashion Conglomerate", title: "Multi-brand Marketplace", result: "Unified product catalog for 15 brands with shared seller pool, dynamic pricing, and centralized order management — 10× SKU growth in 12 months.", tags: ["Catalog Management", "Pricing Intelligence"] },
    { client: "Logistics Operator", title: "B2B Freight Marketplace", result: "Carrier-shipper matching platform processing 50K+ daily shipments with AI-powered pricing and automated contract management.", tags: ["Marketplace Engine", "Operational Orchestration"] },
  ],
  cta: {
    headline: "Ready to build your marketplace platform?",
    subheadline: "Talk to our platform engineering team about your marketplace architecture.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "All solutions →", href: "/solutions" },
  },
};

export default function MarketplaceOrchestration() {
  return <SolutionDetailTemplate data={data} />;
}

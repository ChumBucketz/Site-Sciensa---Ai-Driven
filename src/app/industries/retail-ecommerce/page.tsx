import { IndustryDetailTemplate, type IndustryDetailData } from "@/components/templates/IndustryDetailTemplate";

const data: IndustryDetailData = {
  eyebrow: "Industries / Retail & E-Commerce",
  headline: "Platforms that move at the pace of commerce",
  subheadline: "Marketplace orchestration, pricing intelligence, loyalty personalization, and payment flows — engineered for the speed and complexity of modern retail.",
  video: "/Videos/7020046_Tunnel_Hexagon_1920x1080.mp4",
  stats: [
    { value: "$2B+", label: "GMV on platforms we built" },
    { value: "3,000+", label: "Sellers managed" },
    { value: "35%", label: "Customer retention improvement" },
    { value: "30%", label: "Waste reduction via ML forecasting" },
  ],
  approach: {
    sectionLabel: "// OUR EDGE",
    sectionHeadline: "Commerce engineering at real scale.",
    rows: [
      {
        title: "Marketplace complexity is a specialty",
        description: "Multi-sided marketplaces are among the hardest platforms to build — catalog at scale, dynamic pricing, seller management, and settlement all need to work simultaneously. We've built them for billion-dollar operations.",
        stat: "$2B+",
        statLabel: "GMV on marketplace platforms we've engineered",
        reverse: false,
        items: ["Multi-sided platform design", "Catalog at scale (10M+ SKUs)", "Dynamic pricing engines", "Settlement & commission management"],
      },
      {
        title: "AI-powered personalization that converts",
        description: "Retail personalization fails when it's based on static rules. We build ML-powered recommendation engines, behavioral segmentation, and loyalty intelligence that update in real-time as customers shop.",
        stat: "40%",
        statLabel: "Cross-sell conversion increase with AI personalization",
        reverse: true,
        items: ["Real-time recommendation engine", "Behavioral segmentation", "Loyalty point engine", "Churn prediction & retention"],
      },
    ],
  },
  capabilities: {
    sectionLabel: "// WHAT WE DELIVER",
    sectionHeadline: "Engineering for modern commerce",
    sectionSubheadline: "From marketplace to supply chain — every layer engineered for scale.",
    items: [
      { title: "Marketplace Architecture", description: "Multi-sided marketplace platforms with seller onboarding, catalog management, pricing intelligence, and settlement at scale.", details: ["Seller orchestration", "Catalog management", "Dynamic pricing", "Settlement & reconciliation"] },
      { title: "Loyalty & Personalization", description: "AI-powered loyalty engines, recommendation systems, and personalized experience platforms that drive repeat purchase and higher LTV.", details: ["Loyalty points engine", "Recommendation engine", "Behavioral segmentation", "Real-time personalization"] },
      { title: "Pricing Intelligence", description: "Competitive pricing monitoring, demand-based dynamic pricing, and promotional orchestration for complex retail environments.", details: ["Competitive monitoring", "Demand-based pricing", "Promo orchestration", "Margin management"] },
      { title: "Payment Orchestration", description: "Multi-rail payment routing, Buy Now Pay Later integration, and checkout optimization for maximum conversion and compliance.", details: ["Multi-rail routing", "BNPL integration", "Checkout optimization", "Fraud prevention"] },
      { title: "Digital Supply Chain", description: "Inventory intelligence, demand forecasting, supplier integration, and logistics orchestration for omnichannel retail operations.", details: ["Demand forecasting", "Inventory intelligence", "Supplier APIs", "Logistics orchestration"] },
    ],
  },
  caseStudies: [
    { client: "Enterprise Retailer", title: "$2B Marketplace Platform", result: "Marketplace orchestration platform managing 3,000+ sellers across catalog, pricing, fulfillment and settlement with 99.97% uptime.", tags: ["Marketplace Architecture", "Seller Management"] },
    { client: "Fashion Conglomerate", title: "Loyalty & Personalization Engine", result: "AI-driven loyalty platform increased customer retention by 35% and cross-sell revenue by 40% across 5M active members.", tags: ["Loyalty", "Personalization"] },
    { client: "Grocery Chain", title: "Demand Forecasting Platform", result: "ML demand forecasting reduced food waste by 30% and improved in-store availability by 15% across 500+ stores.", tags: ["Pricing Intelligence", "Supply Chain"] },
  ],
  cta: {
    headline: "Ready to engineer your retail platform?",
    subheadline: "Talk to our team about your marketplace, commerce, and supply chain challenges.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "All industries →", href: "/industries" },
  },
};

export default function RetailEcommerce() {
  return <IndustryDetailTemplate data={data} />;
}

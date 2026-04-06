import { IndustryDetailTemplate, type IndustryDetailData } from "@/components/templates/IndustryDetailTemplate";

const data: IndustryDetailData = {
  eyebrow: "Industries / Mobility & Logistics",
  headline: "Orchestrating movement with software precision",
  subheadline: "Operational platforms, tracking & orchestration systems, mobility marketplaces, and AI-driven efficiency — for companies that move the world.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486140/7020046_Tunnel_Hexagon_1920x1080_ajcc34.mp4",
  stats: [
    { value: "1M+", label: "Daily trips managed" },
    { value: "50K+", label: "Daily shipments processed" },
    { value: "97%", label: "On-time delivery rate" },
    { value: "25%", label: "Delivery cost reduction" },
  ],
  approach: {
    sectionLabel: "// OUR EDGE",
    sectionHeadline: "Logistics engineering at real operational scale.",
    rows: [
      {
        title: "Real-time orchestration for millions of events",
        description: "Mobility and logistics systems generate millions of events per day — position updates, status changes, driver assignments, route changes. We build event-driven platforms that process this volume in real-time without degradation.",
        stat: "1M+",
        statLabel: "Daily events processed in real-time",
        reverse: false,
        items: ["Event streaming at scale", "Sub-second dispatch matching", "Real-time route optimization", "Live tracking state management"],
      },
      {
        title: "AI routing that actually reduces costs",
        description: "Static route planning loses money. We build ML-powered routing engines that factor in real-time traffic, capacity, driver availability, and SLA constraints — optimizing for cost and delivery time simultaneously.",
        stat: "25%",
        statLabel: "Delivery cost reduction with AI routing",
        reverse: true,
        items: ["ML route optimization", "Dynamic capacity planning", "Multi-constraint solver", "Driver behavior analytics"],
      },
    ],
  },
  capabilities: {
    sectionLabel: "// WHAT WE DELIVER",
    sectionHeadline: "Engineering for movement",
    sectionSubheadline: "From fleet management to AI routing — every layer optimized for speed.",
    items: [
      { title: "Operational Platforms", description: "Fleet management, driver/courier apps, and operational control towers for real-time visibility across logistics networks.", details: ["Fleet management", "Driver/courier apps", "Control tower dashboards", "Real-time tracking"] },
      { title: "Tracking & Orchestration", description: "End-to-end shipment tracking, route optimization, and multi-carrier orchestration for complex logistics operations.", details: ["Shipment tracking", "Route optimization", "Multi-carrier APIs", "Last-mile orchestration"] },
      { title: "Mobility Marketplaces", description: "Two-sided marketplace platforms connecting shippers and carriers, drivers and passengers — with dynamic pricing and matching algorithms.", details: ["Carrier/shipper matching", "Dynamic pricing", "Matching algorithms", "Rating & reputation"] },
      { title: "Multi-system Integration", description: "TMS, WMS, and ERP integration hubs that unify fragmented logistics technology stacks into a coherent operational layer.", details: ["TMS integration", "WMS connectivity", "ERP connectors", "Real-time sync"] },
      { title: "AI-driven Efficiency", description: "Demand forecasting, intelligent routing, predictive capacity planning, and operational anomaly detection for logistics networks.", details: ["Demand forecasting", "Intelligent routing", "Capacity planning", "Anomaly detection"] },
    ],
  },
  caseStudies: [
    { client: "Logistics Operator", title: "B2B Freight Marketplace", result: "Carrier-shipper matching platform processing 50K+ daily shipments with AI-powered pricing and 99.5% on-time delivery rate.", tags: ["Mobility Marketplace", "AI Efficiency"] },
    { client: "Urban Mobility Company", title: "Real-time Operational Platform", result: "Driver management and dispatch platform handling 1M+ daily trips with sub-second matching and real-time route optimization.", tags: ["Operational Platforms", "Tracking"] },
    { client: "E-commerce Giant", title: "Last-mile Orchestration", result: "Unified last-mile orchestration layer integrating 20+ carriers, reducing delivery costs by 25% and improving OTIF to 97%.", tags: ["Multi-system Integration", "Orchestration"] },
  ],
  cta: {
    headline: "Ready to engineer your logistics platform?",
    subheadline: "Talk to our team about your mobility, tracking, and operational orchestration challenges.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "All industries →", href: "/industries" },
  },
};

export default function MobilityLogistics() {
  return <IndustryDetailTemplate data={data} />;
}

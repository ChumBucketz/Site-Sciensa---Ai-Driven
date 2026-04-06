import { IndustryDetailTemplate, type IndustryDetailData } from "@/components/templates/IndustryDetailTemplate";

const data: IndustryDetailData = {
  eyebrow: "Industries / Energy & Utilities",
  headline: "Intelligent infrastructure for critical operations",
  subheadline: "Real-time data platforms, predictive maintenance, trading systems, and process automation — for industries where uptime is non-negotiable.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486140/7020046_Tunnel_Hexagon_1920x1080_ajcc34.mp4",
  stats: [
    { value: "50K+", label: "Assets monitored" },
    { value: "35%", label: "Fewer unplanned outages" },
    { value: "10M+", label: "Sensor readings/day" },
    { value: "99.9%", label: "Operational platform uptime" },
  ],
  approach: {
    sectionLabel: "// OUR EDGE",
    sectionHeadline: "Engineering for systems that cannot go down.",
    rows: [
      {
        title: "IoT at industrial scale",
        description: "Energy and utility operations generate enormous data volumes — millions of sensor readings per second from substations, turbines, and smart meters. We build time-series data platforms and edge computing architectures that handle industrial scale without compromise.",
        stat: "10M+",
        statLabel: "Sensor readings processed daily",
        reverse: false,
        items: ["SCADA system integration", "Time-series analytics at scale", "Edge computing architecture", "IoT data ingestion pipelines"],
      },
      {
        title: "Predictive, not reactive maintenance",
        description: "A turbine failure costs millions. A planned maintenance window costs thousands. We build ML models that predict equipment failures weeks in advance — shifting operations from reactive maintenance to planned, cost-efficient programs.",
        stat: "35%",
        statLabel: "Reduction in unplanned outages",
        reverse: true,
        items: ["Failure prediction models", "Maintenance scheduling optimization", "Asset lifecycle analytics", "Anomaly detection pipelines"],
      },
    ],
  },
  capabilities: {
    sectionLabel: "// WHAT WE DELIVER",
    sectionHeadline: "Engineering for critical infrastructure",
    sectionSubheadline: "Where downtime is not an option, we engineer resilience in.",
    items: [
      { title: "Critical Operation Systems", description: "SCADA integration, real-time operational dashboards, and alert management for energy generation, transmission, and distribution.", details: ["SCADA integration", "Real-time dashboards", "Alert management", "Operational intelligence"] },
      { title: "Real-time Data Platforms", description: "IoT data ingestion, time-series analytics, and operational intelligence platforms processing millions of sensor readings per second.", details: ["IoT data ingestion", "Time-series analytics", "Sensor data pipelines", "Edge computing"] },
      { title: "Predictive Maintenance", description: "ML models for equipment failure prediction, maintenance scheduling optimization, and asset lifecycle management.", details: ["Failure prediction", "Maintenance scheduling", "Asset lifecycle", "Anomaly detection"] },
      { title: "Energy Trading Platforms", description: "Market data integration, automated trading systems, risk management, and regulatory reporting for energy market participants.", details: ["Market data integration", "Automated trading", "Risk management", "Regulatory reporting"] },
      { title: "Process Automation at Scale", description: "Field workforce management, work order automation, and process orchestration for large-scale utility operations.", details: ["Workforce management", "Work order automation", "Process orchestration", "ESG analytics"] },
    ],
  },
  caseStudies: [
    { client: "National Grid Operator", title: "Predictive Maintenance Platform", result: "ML-powered predictive maintenance reduced unplanned outages by 35% and maintenance costs by 25% across 50K+ monitored assets.", tags: ["Predictive Maintenance", "IoT Data"] },
    { client: "Energy Conglomerate", title: "Real-time Operations Platform", result: "Unified operations platform processing 10M+ sensor readings/day with real-time alerting and 99.9% system availability.", tags: ["Critical Operations", "Real-time Data"] },
    { client: "Renewable Energy Company", title: "Energy Trading System", result: "Automated energy trading platform with risk management and regulatory reporting, processing 500K+ trade events daily.", tags: ["Energy Trading", "Process Automation"] },
  ],
  cta: {
    headline: "Ready to modernize your energy infrastructure?",
    subheadline: "Talk to our team about your operational platform and predictive analytics challenges.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "All industries →", href: "/industries" },
  },
};

export default function EnergyUtilities() {
  return <IndustryDetailTemplate data={data} />;
}

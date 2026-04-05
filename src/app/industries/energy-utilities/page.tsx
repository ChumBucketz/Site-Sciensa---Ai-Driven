import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const capabilities = [
  { title: "Critical Operation Systems", description: "SCADA integration, real-time operational dashboards, and alert management for energy generation, transmission, and distribution.", details: ["SCADA integration", "Real-time dashboards", "Alert management", "Operational intelligence"] },
  { title: "Real-time Data Platforms", description: "IoT data ingestion, time-series analytics, and operational intelligence platforms processing millions of sensor readings per second.", details: ["IoT data ingestion", "Time-series analytics", "Sensor data pipelines", "Edge computing"] },
  { title: "Predictive Maintenance", description: "ML models for equipment failure prediction, maintenance scheduling optimization, and asset lifecycle management.", details: ["Failure prediction", "Maintenance scheduling", "Asset lifecycle", "Anomaly detection"] },
  { title: "Energy Trading Platforms", description: "Market data integration, automated trading systems, risk management, and regulatory reporting for energy market participants.", details: ["Market data integration", "Automated trading", "Risk management", "Regulatory reporting"] },
  { title: "Process Automation at Scale", description: "Field workforce management, work order automation, and process orchestration for large-scale utility operations.", details: ["Workforce management", "Work order automation", "Process orchestration", "ESG analytics"] },
];

const caseStudies = [
  { client: "National Grid Operator", title: "Predictive Maintenance Platform", result: "ML-powered predictive maintenance reduced unplanned outages by 35% and maintenance costs by 25% across 50K+ monitored assets.", tags: ["Predictive Maintenance", "IoT Data"] },
  { client: "Energy Conglomerate", title: "Real-time Operations Platform", result: "Unified operations platform processing 10M+ sensor readings/day with real-time alerting and 99.9% system availability.", tags: ["Critical Operations", "Real-time Data"] },
  { client: "Renewable Energy Company", title: "Energy Trading System", result: "Automated energy trading platform with risk management and regulatory reporting, processing 500K+ trade events daily.", tags: ["Energy Trading", "Process Automation"] },
];

export default function EnergyUtilities() {
  return (
    <>
      <HeroSimple
        eyebrow="Industries / Energy & Utilities"
        headline="Intelligent infrastructure for critical operations"
        subheadline="Real-time data platforms, predictive maintenance, trading systems, and process automation — for industries where uptime is non-negotiable."
      />

      <section className="border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <StatGrid stats={[
            { value: "50K+", label: "Assets monitored" },
            { value: "35%", label: "Fewer unplanned outages" },
            { value: "10M+", label: "Sensor readings/day" },
            { value: "99.9%", label: "Operational platform uptime" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader eyebrow="// WHAT WE DELIVER" headline="Engineering for critical infrastructure" subheadline="Where downtime is not an option, we engineer resilience in." />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {capabilities.map((cap) => (
            <div key={cap.title} className="el-card p-8 flex flex-col gap-4">
              <div>
                <h3 className="text-base font-medium text-black mb-2 tracking-tight">{cap.title}</h3>
                <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{cap.description}</p>
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-auto">
                {cap.details.map((d) => (
                  <li key={d} className="text-xs text-[#777169] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#777169] shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeader eyebrow="// PROOF POINTS" headline="Results from the field" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="el-card p-8 flex flex-col gap-4">
                <p className="text-xs text-[#777169] tracking-[0.01em]">{cs.client}</p>
                <h3 className="text-base font-medium text-black tracking-tight">{cs.title}</h3>
                <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em] flex-1">{cs.result}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cs.tags.map((tag) => <Badge key={tag} variant="default">{tag}</Badge>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to modernize your energy infrastructure?"
        subheadline="Talk to our team about your operational platform and predictive analytics challenges."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "All industries →", href: "/industries" }}
      />
    </>
  );
}

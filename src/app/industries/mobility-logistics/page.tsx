import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const capabilities = [
  { title: "Operational Platforms", description: "Fleet management, driver/courier apps, and operational control towers for real-time visibility across logistics networks.", details: ["Fleet management", "Driver/courier apps", "Control tower dashboards", "Real-time tracking"] },
  { title: "Tracking & Orchestration", description: "End-to-end shipment tracking, route optimization, and multi-carrier orchestration for complex logistics operations.", details: ["Shipment tracking", "Route optimization", "Multi-carrier APIs", "Last-mile orchestration"] },
  { title: "Mobility Marketplaces", description: "Two-sided marketplace platforms connecting shippers and carriers, drivers and passengers — with dynamic pricing and matching algorithms.", details: ["Carrier/shipper matching", "Dynamic pricing", "Matching algorithms", "Rating & reputation"] },
  { title: "Multi-system Integration", description: "TMS, WMS, and ERP integration hubs that unify fragmented logistics technology stacks into a coherent operational layer.", details: ["TMS integration", "WMS connectivity", "ERP connectors", "Real-time sync"] },
  { title: "AI-driven Efficiency", description: "Demand forecasting, intelligent routing, predictive capacity planning, and operational anomaly detection for logistics networks.", details: ["Demand forecasting", "Intelligent routing", "Capacity planning", "Anomaly detection"] },
];

const caseStudies = [
  { client: "Logistics Operator", title: "B2B Freight Marketplace", result: "Carrier-shipper matching platform processing 50K+ daily shipments with AI-powered pricing and 99.5% on-time delivery rate.", tags: ["Mobility Marketplace", "AI Efficiency"] },
  { client: "Urban Mobility Company", title: "Real-time Operational Platform", result: "Driver management and dispatch platform handling 1M+ daily trips with sub-second matching and real-time route optimization.", tags: ["Operational Platforms", "Tracking"] },
  { client: "E-commerce Giant", title: "Last-mile Orchestration", result: "Unified last-mile orchestration layer integrating 20+ carriers, reducing delivery costs by 25% and improving OTIF to 97%.", tags: ["Multi-system Integration", "Orchestration"] },
];

export default function MobilityLogistics() {
  return (
    <>
      <HeroSimple
        eyebrow="Industries / Mobility & Logistics"
        headline="Orchestrating movement with software precision"
        subheadline="Operational platforms, tracking & orchestration systems, mobility marketplaces, and AI-driven efficiency — for companies that move the world."
      />

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-12">
          <StatGrid stats={[
            { value: "1M+", label: "Daily trips managed" },
            { value: "50K+", label: "Daily shipments processed" },
            { value: "97%", label: "On-time delivery rate" },
            { value: "25%", label: "Delivery cost reduction" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
          <SectionHeader eyebrow="// WHAT WE DELIVER" headline="Engineering for movement" subheadline="From fleet management to AI routing — every layer optimized for speed." />
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
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
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

      <section className="max-w-7xl mx-auto px-6 py-3 pb-6">
        <CTABanner
          headline="Ready to engineer your logistics platform?"
          subheadline="Talk to our team about your mobility, tracking, and operational orchestration challenges."
          primary={{ label: "Start a conversation", href: "/contact" }}
          secondary={{ label: "All industries →", href: "/industries" }}
        />
      </section>
    </>
  );
}

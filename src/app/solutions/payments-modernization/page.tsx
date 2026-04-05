import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const modules = [
  { title: "Payment Orchestration", description: "Multi-rail payment routing across PIX, TED, boleto, and card schemes — with intelligent fallback, retry logic, and real-time fraud scoring.", items: ["Multi-rail routing", "PIX & TED processing", "Intelligent fallback", "Real-time fraud scoring"] },
  { title: "Real-time Settlement", description: "Sub-second settlement engines, intraday liquidity management, and DVP (delivery versus payment) for financial market participants.", items: ["Sub-second settlement", "Intraday liquidity", "DVP mechanisms", "Settlement finality"] },
  { title: "Multi-rail Processing", description: "Unified abstraction layer across domestic and international payment networks — ISO 20022, SWIFT, and Open Finance.", items: ["ISO 20022 messaging", "SWIFT integration", "Open Finance APIs", "Cross-border payments"] },
  { title: "Reconciliation Engines", description: "Automated reconciliation, exception management, and dispute workflows for high-volume payment environments.", items: ["Automated reconciliation", "Exception management", "Dispute workflows", "Audit trail"] },
  { title: "Compliance & Reporting", description: "Bacen regulatory reporting, AML transaction monitoring, and real-time compliance controls embedded in the payment flow.", items: ["Bacen reporting", "AML monitoring", "Compliance controls", "Regulatory audit logs"] },
];

const caseStudies = [
  { client: "Leading Payments Institution", title: "PIX Infrastructure at Scale", result: "Processed 2.5M+ daily transactions with < 200ms p99 latency and real-time fraud scoring across all payment flows.", tags: ["Payment Orchestration", "Real-time Processing"] },
  { client: "Tier-1 Bank", title: "Payments Modernization", result: "Replaced legacy COBOL payment core with event-driven architecture, reducing operational incidents by 80% and enabling 15K TPS.", tags: ["Multi-rail Processing", "Settlement"] },
  { client: "Fintech", title: "Open Finance Payment Hub", result: "Built FAPI-compliant payment initiation hub connecting to 300+ financial institutions with 99.97% availability.", tags: ["Open Finance", "Compliance"] },
];

export default function PaymentsModernization() {
  return (
    <>
      <HeroSimple
        eyebrow="Solutions / Payments Modernization"
        headline="Re-engineering payments for speed, compliance, and scale"
        subheadline="Next-generation payment platforms covering orchestration, settlement, reconciliation, and multi-rail processing — designed for real-time and regulatory compliance."
      />

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-12">
          <StatGrid stats={[
            { value: "15K", label: "TPS processed" },
            { value: "<200ms", label: "P99 latency" },
            { value: "99.99%", label: "Platform availability" },
            { value: "80%", label: "Fewer operational incidents" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
          <SectionHeader eyebrow="// BUILDING BLOCKS" headline="What we deliver" subheadline="A complete payments modernization stack, from orchestration to compliance." />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {modules.map((mod) => (
              <div key={mod.title} className="el-card p-8 flex flex-col gap-4">
                <div>
                  <h3 className="text-base font-medium text-black mb-2 tracking-tight">{mod.title}</h3>
                  <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{mod.description}</p>
                </div>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-auto">
                  {mod.items.map((item) => (
                    <li key={item} className="text-xs text-[#777169] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#777169] shrink-0" />
                      {item}
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
          headline="Ready to modernize your payments infrastructure?"
          subheadline="Talk to our payments engineering team about your architecture and compliance challenges."
          primary={{ label: "Start a conversation", href: "/contact" }}
        />
      </section>
    </>
  );
}

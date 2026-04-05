import { HeroSimple } from "@/components/sections/HeroSimple";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";
import { MonoLabel } from "@/components/ui/MonoLabel";

const solutions = [
  { slug: "digital-banking", label: "Digital Banking", headline: "Modern banking architectures for digital-first institutions", description: "End-to-end digital banking platforms — from account opening and KYC to card management and self-service channels — built on event-driven, API-first architectures.", buildingBlocks: ["Account lifecycle management", "Digital onboarding & KYC", "Card & wallet management", "Self-service channels", "Notification & engagement engines"], capabilities: ["Platform Engineering", "Product & Experience Engineering"], industries: ["Financial Services"] },
  { slug: "payments-modernization", label: "Payments Modernization", headline: "Re-engineering payments for speed, compliance, and scale", description: "Next-generation payment platforms covering orchestration, settlement, reconciliation, and multi-rail processing — designed for real-time and regulatory compliance.", buildingBlocks: ["Payment orchestration", "Real-time settlement", "Multi-rail processing", "Reconciliation engines", "Compliance & reporting"], capabilities: ["Platform Engineering", "API & Integration Engineering"], industries: ["Financial Services", "Retail & E-Commerce"] },
  { slug: "enterprise-ai", label: "Enterprise AI", headline: "AI that works inside your enterprise, not beside it", description: "Copilots, intelligent workflows, document understanding, and operational automation — enterprise AI integrated into your existing systems and processes.", buildingBlocks: ["LLM-powered copilots", "Intelligent document processing", "Workflow automation", "Predictive analytics", "AI-powered decision support"], capabilities: ["AI Engineering", "Data & AI"], industries: ["Cross-market"] },
  { slug: "ai-financial-institutions", label: "AI for Financial Institutions", headline: "AI purpose-built for regulated financial environments", description: "Fraud detection, risk intelligence, credit analysis, anti-money laundering, and compliance automation — AI tuned for the precision demands of financial services.", buildingBlocks: ["Fraud detection & prevention", "Risk intelligence", "Credit analysis & scoring", "AML & compliance automation", "Customer intelligence"], capabilities: ["AI Engineering", "Data & AI", "Cloud & DevSecOps"], industries: ["Financial Services"] },
  { slug: "marketplace-orchestration", label: "Marketplace & Orchestration Platforms", headline: "Multi-sided platforms engineered for complexity", description: "Marketplace engines, catalog management, pricing intelligence, seller onboarding, and operational orchestration — for businesses connecting multiple sides of a market.", buildingBlocks: ["Marketplace engine", "Catalog & product management", "Pricing intelligence", "Seller onboarding & management", "Operational orchestration"], capabilities: ["Platform Engineering", "API & Integration Engineering"], industries: ["Retail & E-Commerce", "Mobility & Logistics"] },
  { slug: "core-modernization", label: "Core Modernization", headline: "From legacy constraints to modern architectures", description: "Strangler patterns, data migration, API wrapping, and incremental modernization — transforming monolithic core systems without business disruption.", buildingBlocks: ["Legacy assessment & strategy", "Strangler fig pattern", "Data migration & sync", "API wrapping & adaptation", "Incremental modernization"], capabilities: ["Platform Engineering", "Cloud & DevSecOps", "API & Integration Engineering"], industries: ["Financial Services", "Telecommunications"] },
];

export default function Solutions() {
  return (
    <>
      <HeroSimple
        eyebrow="Solutions"
        headline="What our clients actually buy"
        subheadline="Problem-oriented solutions that combine our capabilities, platforms, and industry expertise into outcomes you can measure."
      />

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {solutions.map((solution) => (
            <div key={solution.slug} className="el-card p-10 flex flex-col gap-5">
              <div>
                <MonoLabel className="block mb-3">{solution.label}</MonoLabel>
                <h2 className="text-lg font-light leading-snug text-black mb-3 tracking-tight">{solution.headline}</h2>
                <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{solution.description}</p>
              </div>

              <ul className="space-y-2">
                {solution.buildingBlocks.map((block) => (
                  <li key={block} className="text-xs text-[#777169] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#777169] shrink-0" />
                    {block}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e5e5e5] mt-auto">
                {solution.industries.map((ind) => (
                  <Badge key={ind} variant="warm">{ind}</Badge>
                ))}
                {solution.capabilities.slice(0, 2).map((cap) => (
                  <Badge key={cap} variant="default">{cap}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Build what complexity demands"
        subheadline="Tell us about your challenge. We'll show you how our solutions, platforms, and capabilities come together to solve it."
        primary={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}

import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const modules = [
  { title: "Marketplace Engine", description: "Multi-sided platform core — buyer/seller matching, listing management, transaction orchestration, and commission engines.", items: ["Buyer/seller matching", "Listing management", "Transaction orchestration", "Commission engine"] },
  { title: "Catalog & Product Management", description: "Unified product catalog with taxonomy management, attribute inheritance, media handling, and real-time indexing for high-volume assortments.", items: ["Taxonomy management", "Attribute inheritance", "Media handling", "Real-time indexing"] },
  { title: "Pricing Intelligence", description: "Dynamic pricing engine with competitive monitoring, demand-based adjustments, and promotional pricing orchestration across the catalog.", items: ["Dynamic pricing", "Competitive monitoring", "Promotional pricing", "Margin management"] },
  { title: "Seller Onboarding & Management", description: "Self-service seller portal, automated document verification, quality scoring, and performance management for marketplace operators.", items: ["Self-service portal", "Document verification", "Quality scoring", "Performance dashboards"] },
  { title: "Operational Orchestration", description: "Order management, fulfillment routing, logistics integration, and post-sale SLA management for complex multi-seller operations.", items: ["Order management", "Fulfillment routing", "Logistics integration", "SLA management"] },
];

const caseStudies = [
  { client: "Enterprise Retailer", title: "$2B Marketplace Platform", result: "Built seller orchestration platform for 3,000+ sellers — managing catalog, pricing, fulfillment and settlement with 99.97% API uptime.", tags: ["Marketplace Engine", "Seller Management"] },
  { client: "Fashion Conglomerate", title: "Multi-brand Marketplace", result: "Unified product catalog for 15 brands with shared seller pool, dynamic pricing, and centralized order management — 10× SKU growth in 12 months.", tags: ["Catalog Management", "Pricing Intelligence"] },
  { client: "Logistics Operator", title: "B2B Freight Marketplace", result: "Carrier-shipper matching platform processing 50K+ daily shipments with AI-powered pricing and automated contract management.", tags: ["Marketplace Engine", "Operational Orchestration"] },
];

export default function MarketplaceOrchestration() {
  return (
    <>
      <HeroSimple
        eyebrow="Solutions / Marketplace & Orchestration"
        headline="Multi-sided platforms engineered for complexity"
        subheadline="Marketplace engines, catalog management, pricing intelligence, seller onboarding, and operational orchestration — for businesses connecting multiple sides of a market."
      />

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-12">
          <StatGrid stats={[
            { value: "$2B+", label: "GMV on platforms we built" },
            { value: "3,000+", label: "Sellers managed" },
            { value: "99.97%", label: "Platform availability" },
            { value: "10×", label: "SKU growth in 12 months" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
          <SectionHeader eyebrow="// BUILDING BLOCKS" headline="What we deliver" subheadline="Every layer of a modern marketplace, composable and scalable." />
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
          headline="Ready to build your marketplace platform?"
          subheadline="Talk to our platform engineering team about your marketplace architecture."
          primary={{ label: "Start a conversation", href: "/contact" }}
        />
      </section>
    </>
  );
}

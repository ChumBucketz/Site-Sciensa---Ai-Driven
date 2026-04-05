import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const capabilities = [
  { title: "Marketplace Architecture", description: "Multi-sided marketplace platforms with seller onboarding, catalog management, pricing intelligence, and settlement at scale.", details: ["Seller orchestration", "Catalog management", "Dynamic pricing", "Settlement & reconciliation"] },
  { title: "Loyalty & Personalization", description: "AI-powered loyalty engines, recommendation systems, and personalized experience platforms that drive repeat purchase and higher LTV.", details: ["Loyalty points engine", "Recommendation engine", "Behavioral segmentation", "Real-time personalization"] },
  { title: "Pricing Intelligence", description: "Competitive pricing monitoring, demand-based dynamic pricing, and promotional orchestration for complex retail environments.", details: ["Competitive monitoring", "Demand-based pricing", "Promo orchestration", "Margin management"] },
  { title: "Payment Orchestration", description: "Multi-rail payment routing, Buy Now Pay Later integration, and checkout optimization for maximum conversion and compliance.", details: ["Multi-rail routing", "BNPL integration", "Checkout optimization", "Fraud prevention"] },
  { title: "Digital Supply Chain", description: "Inventory intelligence, demand forecasting, supplier integration, and logistics orchestration for omnichannel retail operations.", details: ["Demand forecasting", "Inventory intelligence", "Supplier APIs", "Logistics orchestration"] },
];

const caseStudies = [
  { client: "Enterprise Retailer", title: "$2B Marketplace Platform", result: "Marketplace orchestration platform managing 3,000+ sellers across catalog, pricing, fulfillment and settlement with 99.97% uptime.", tags: ["Marketplace Architecture", "Seller Management"] },
  { client: "Fashion Conglomerate", title: "Loyalty & Personalization Engine", result: "AI-driven loyalty platform increased customer retention by 35% and cross-sell revenue by 40% across 5M active members.", tags: ["Loyalty", "Personalization"] },
  { client: "Grocery Chain", title: "Demand Forecasting Platform", result: "ML demand forecasting reduced food waste by 30% and improved in-store availability by 15% across 500+ stores.", tags: ["Pricing Intelligence", "Supply Chain"] },
];

export default function RetailEcommerce() {
  return (
    <>
      <HeroSimple
        eyebrow="Industries / Retail & E-Commerce"
        headline="Platforms that move at the pace of commerce"
        subheadline="Marketplace orchestration, pricing intelligence, loyalty personalization, and payment flows — engineered for the speed and complexity of modern retail."
      />

      <section className="border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <StatGrid stats={[
            { value: "$2B+", label: "GMV on platforms we built" },
            { value: "3,000+", label: "Sellers managed" },
            { value: "35%", label: "Customer retention improvement" },
            { value: "30%", label: "Waste reduction via ML forecasting" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader eyebrow="// WHAT WE DELIVER" headline="Engineering for modern commerce" subheadline="From marketplace to supply chain — every layer engineered for scale." />
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
        headline="Ready to engineer your retail platform?"
        subheadline="Talk to our team about your marketplace, commerce, and supply chain challenges."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "All industries →", href: "/industries" }}
      />
    </>
  );
}

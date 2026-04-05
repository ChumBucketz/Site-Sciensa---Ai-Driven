import { HeroSimple } from "@/components/sections/HeroSimple";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const caseStudies = [
  { slug: "digital-banking-platform", title: "Building a next-gen digital banking platform for 12M+ users", client: "Top-5 Brazilian Bank", industry: "Financial Services", solution: "Digital Banking", summary: "End-to-end redesign and modernization of a legacy core banking front-end into a cloud-native digital banking platform — serving 12 million active users with 99.99% uptime.", metrics: [{ label: "Active users", value: "12M+" }, { label: "Uptime", value: "99.99%" }, { label: "Deployment freq.", value: "40×/week" }] },
  { slug: "payments-modernization", title: "Modernizing real-time payments infrastructure for Pix and Open Finance", client: "Leading Payments Institution", industry: "Financial Services", solution: "Payments Modernization", summary: "Designed and implemented a high-throughput payment processing architecture capable of handling 15,000 TPS with sub-200ms latency — fully integrated with Brazil's Pix ecosystem.", metrics: [{ label: "Throughput", value: "15K TPS" }, { label: "Latency P99", value: "<200ms" }, { label: "Time-to-market", value: "6 months" }] },
  { slug: "ai-contact-center", title: "AI-powered contact center reducing resolution time by 60%", client: "Major Insurance Company", industry: "Financial Services", solution: "Enterprise AI", summary: "Deployed an intelligent contact center solution using LLM-powered copilots, intent classification, and automated routing — cutting average resolution time from 12 to 4.8 minutes.", metrics: [{ label: "Resolution time", value: "−60%" }, { label: "CSAT", value: "+22pts" }, { label: "Containment", value: "72%" }] },
  { slug: "marketplace-orchestration", title: "Orchestration platform for a $2B retail marketplace", client: "Enterprise Retailer", industry: "Retail & E-Commerce", solution: "Marketplace & Orchestration", summary: "Built a seller orchestration platform managing catalog, pricing, fulfillment and settlement for 3,000+ sellers — enabling the retailer to scale to a full marketplace model.", metrics: [{ label: "GMV enabled", value: "$2B+" }, { label: "Sellers", value: "3,000+" }, { label: "API uptime", value: "99.97%" }] },
  { slug: "smart-collect-transformation", title: "Intelligent collections platform recovering R$1.2B annually", client: "Financial Conglomerate", industry: "Financial Services", solution: "AI for Financial Institutions", summary: "Implemented SmartCollect — an AI-driven collections platform that segments, prioritizes and personalizes recovery strategies across 8M+ delinquent accounts.", metrics: [{ label: "Recovery", value: "R$1.2B/yr" }, { label: "Efficiency", value: "+45%" }, { label: "Accounts", value: "8M+" }] },
  { slug: "healthcare-data-platform", title: "Unified health data platform connecting 200+ hospitals", client: "Healthcare Network", industry: "Healthcare", solution: "Core Modernization", summary: "Built an interoperable health data platform using FHIR standards — connecting EHR systems across 200+ hospitals and enabling real-time clinical decision support.", metrics: [{ label: "Hospitals", value: "200+" }, { label: "Records synced", value: "50M+" }, { label: "Query latency", value: "<500ms" }] },
];

export default function CaseStudies() {
  return (
    <>
      <HeroSimple
        eyebrow="Case Studies"
        headline="Real results from complex builds"
        subheadline="How we help leaders in financial services, retail, healthcare and other regulated industries design, build and scale mission-critical platforms."
      />

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {caseStudies.map((cs) => (
            <div key={cs.slug} className="el-card p-10 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Badge variant="warm">{cs.industry}</Badge>
                <span className="text-xs text-[#777169]">{cs.client}</span>
              </div>
              <h2 className="text-lg font-light leading-snug text-black tracking-tight">{cs.title}</h2>
              <p className="text-[15px] text-[#4e4e4e] leading-relaxed flex-1 tracking-[0.01em]">{cs.summary}</p>
              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[#e5e5e5]">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="text-xl font-light text-black tracking-tight block">{m.value}</span>
                    <span className="text-xs text-[#777169] leading-snug">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Ready to build your next case study?"
        subheadline="Let's discuss how Sciensa can help you design and deliver mission-critical platforms."
        primary={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}

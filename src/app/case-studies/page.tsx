import { HeroSimple } from "@/components/sections/HeroSimple";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StatGrid } from "@/components/sections/StatGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { tagVariant } from "@/components/ui/tagColor";

const caseStudies = [
  { slug: "digital-banking-platform", title: "Building a next-gen digital banking platform for 12M+ users", client: "Top-5 Brazilian Bank", industry: "Financial Services", summary: "End-to-end redesign and modernization of a legacy core banking front-end into a cloud-native digital banking platform — serving 12 million active users with 99.9% uptime.", metrics: [{ label: "Active users", value: "12M+" }, { label: "Uptime", value: "99.9%" }, { label: "Deployment freq.", value: "40×/week" }] },
  { slug: "payments-modernization", title: "Modernizing real-time payments infrastructure for Pix and Open Finance", client: "Leading Payments Institution", industry: "Financial Services", summary: "Designed and implemented a high-throughput payment processing architecture capable of handling 15,000 TPS with sub-200ms latency — fully integrated with Brazil's Pix ecosystem.", metrics: [{ label: "Throughput", value: "15K TPS" }, { label: "Latency P99", value: "<200ms" }, { label: "Time-to-market", value: "6 months" }] },
  { slug: "ai-contact-center", title: "AI-powered contact center reducing resolution time by 60%", client: "Major Insurance Company", industry: "Financial Services", summary: "Deployed an intelligent contact center solution using LLM-powered copilots, intent classification, and automated routing — cutting average resolution time from 12 to 4.8 minutes.", metrics: [{ label: "Resolution time", value: "−60%" }, { label: "CSAT", value: "+22pts" }, { label: "Containment", value: "72%" }] },
  { slug: "marketplace-orchestration", title: "Orchestration platform for a $2B retail marketplace", client: "Enterprise Retailer", industry: "Retail & E-Commerce", summary: "Built a seller orchestration platform managing catalog, pricing, fulfillment and settlement for 3,000+ sellers — enabling the retailer to scale to a full marketplace model.", metrics: [{ label: "GMV enabled", value: "$2B+" }, { label: "Sellers", value: "3,000+" }, { label: "API uptime", value: "99.97%" }] },
  { slug: "healthcare-data-platform", title: "Unified health data platform connecting 200+ hospitals", client: "Healthcare Network", industry: "Healthcare", summary: "Built an interoperable health data platform using FHIR standards — connecting EHR systems across 200+ hospitals and enabling real-time clinical decision support.", metrics: [{ label: "Hospitals", value: "200+" }, { label: "Records synced", value: "50M+" }, { label: "Query latency", value: "<500ms" }] },
];

export default function CaseStudies() {
  return (
    <>
      <HeroSimple
        eyebrow="Case Studies"
        headline="Real results from complex builds"
        subheadline="How we help leaders in financial services, retail, healthcare and other regulated industries design, build and scale mission-critical platforms."
        video="https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486149/0_Gold_Abstract_3840x2160_sjzjia.mp4"
      />

      {/* Aggregate impact stats */}
      <section className="max-w-[1336px] mx-auto px-4 lg:px-0 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-12">
            <p className="text-label text-[#717171] mb-10">Aggregate impact across engagements</p>
            <StatGrid stats={[
              { value: "120+", label: "Enterprise clients" },
              { value: "R$1.2B+", label: "Recovered annually" },
              { value: "200+", label: "Hospitals connected" },
              { value: "99.9%", label: "Uptime delivered" },
            ]} />
          </div>
        </FadeIn>
      </section>

      {/* Featured case study */}
      <section className="max-w-[1336px] mx-auto px-4 lg:px-0 py-3">
        <FadeIn>
          <div className="bg-black text-white rounded-2xl p-10 md:p-14">
            <MonoLabel className="text-white/40 block mb-6">Featured engagement</MonoLabel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <Badge variant="brand" className="mb-4">Financial Services</Badge>
                <h2 className="text-heading text-white mt-2 mb-4">
                  Next-gen digital banking platform for 12M+ users
                </h2>
                <p className="text-[15px] text-white/60 leading-relaxed tracking-[0.01em]">
                  End-to-end modernization of a legacy core banking front-end into a cloud-native digital banking platform — serving 12 million active users, deploying 40× per week, and maintaining 99.9% uptime.
                </p>
                <div className="mt-8">
                  <Button variant="white-pill" href="/contact">
                    Discuss a similar challenge →
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 content-center">
                {[
                  { value: "12M+", label: "Active users" },
                  { value: "99.9%", label: "Uptime" },
                  { value: "40×", label: "Deployments/week" },
                  { value: "6 mo", label: "Time to production" },
                  { value: "3×", label: "Throughput improvement" },
                  { value: "−40%", label: "Infra cost reduction" },
                ].map((m) => (
                  <div key={m.label}>
                    <span className="text-2xl font-light text-white tracking-tight block">{m.value}</span>
                    <span className="text-xs text-white/40 leading-snug">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Case study grid */}
      <section className="max-w-[1336px] mx-auto px-4 lg:px-0 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
            <SectionHeader eyebrow="// ALL ENGAGEMENTS" headline="Outcomes that speak for themselves." />
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
              {caseStudies.map((cs, ci) => (
                <div key={cs.slug} className="el-card p-10 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <Badge variant={tagVariant(ci)}>{cs.industry}</Badge>
                    <span className="text-xs text-[#717171]">{cs.client}</span>
                  </div>
                  <h2 className="text-lg font-light leading-snug text-black tracking-tight">{cs.title}</h2>
                  <p className="text-[15px] text-[#4e4e4e] leading-relaxed flex-1 tracking-[0.01em]">{cs.summary}</p>
                  <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[#e5e5e5]">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <span className="text-xl font-light text-black tracking-tight block">{m.value}</span>
                        <span className="text-xs text-[#717171] leading-snug">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="max-w-[1336px] mx-auto px-4 lg:px-0 py-3 pb-6">
        <FadeIn>
          <CTABanner
            headline="Ready to build your next case study?"
            subheadline="Let's discuss how Sciensa can help you design and deliver mission-critical platforms."
            primary={{ label: "Start a conversation", href: "/contact" }}
          />
        </FadeIn>
      </section>
    </>
  );
}

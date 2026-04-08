import { HeroSimple } from "@/components/sections/HeroSimple";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StatGrid } from "@/components/sections/StatGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const solutions = [
  { slug: "digital-banking", label: "Digital Banking", headline: "Modern banking architectures for digital-first institutions", description: "End-to-end digital banking platforms — from account opening and KYC to card management and self-service channels — built on event-driven, API-first architectures.", buildingBlocks: ["Account lifecycle management", "Digital onboarding & KYC", "Card & wallet management", "Self-service channels", "Notification & engagement engines"], capabilities: ["Platform Engineering", "Product & Experience Engineering"], industries: ["Financial Services"] },
  { slug: "payments-modernization", label: "Payments Modernization", headline: "Re-engineering payments for speed, compliance, and scale", description: "Next-generation payment platforms covering orchestration, settlement, reconciliation, and multi-rail processing — designed for real-time and regulatory compliance.", buildingBlocks: ["Payment orchestration", "Real-time settlement", "Multi-rail processing", "Reconciliation engines", "Compliance & reporting"], capabilities: ["Platform Engineering", "API & Integration Engineering"], industries: ["Financial Services", "Retail & E-Commerce"] },
  { slug: "enterprise-ai", label: "Enterprise AI", headline: "AI that works inside your enterprise, not beside it", description: "Copilots, intelligent workflows, document understanding, and operational automation — enterprise AI integrated into your existing systems and processes.", buildingBlocks: ["LLM-powered copilots", "Intelligent document processing", "Workflow automation", "Predictive analytics", "AI-powered decision support"], capabilities: ["AI Engineering", "Data & AI"], industries: ["Cross-market"] },
  { slug: "ai-financial-institutions", label: "AI for Financial Institutions", headline: "AI purpose-built for regulated financial environments", description: "Fraud detection, risk intelligence, credit analysis, anti-money laundering, and compliance automation — AI tuned for the precision demands of financial services.", buildingBlocks: ["Fraud detection & prevention", "Risk intelligence", "Credit analysis & scoring", "AML & compliance automation", "Customer intelligence"], capabilities: ["AI Engineering", "Data & AI", "Cloud & DevSecOps"], industries: ["Financial Services"] },
  { slug: "marketplace-orchestration", label: "Marketplace & Orchestration Platforms", headline: "Multi-sided platforms engineered for complexity", description: "Marketplace engines, catalog management, pricing intelligence, seller onboarding, and operational orchestration — for businesses connecting multiple sides of a market.", buildingBlocks: ["Marketplace engine", "Catalog & product management", "Pricing intelligence", "Seller onboarding & management", "Operational orchestration"], capabilities: ["Platform Engineering", "API & Integration Engineering"], industries: ["Retail & E-Commerce", "Mobility & Logistics"] },
  { slug: "core-modernization", label: "Core Modernization", headline: "From legacy constraints to modern architectures", description: "Strangler patterns, data migration, API wrapping, and incremental modernization — transforming monolithic core systems without business disruption.", buildingBlocks: ["Legacy assessment & strategy", "Strangler fig pattern", "Data migration & sync", "API wrapping & adaptation", "Incremental modernization"], capabilities: ["Platform Engineering", "Cloud & DevSecOps", "API & Integration Engineering"], industries: ["Financial Services", "Telecommunications"] },
];

const howItWorks = [
  {
    title: "Diagnose the real problem",
    description: "We start with an engineering-led discovery — mapping existing systems, bottlenecks, and compliance constraints before proposing a solution path.",
    stat: "2–4 weeks",
    statLabel: "Typical discovery sprint",
    reverse: false,
    icon: "🔍",
    steps: ["Current-state architecture mapping", "Constraint & risk assessment", "Stakeholder alignment sessions", "Solution hypothesis definition"],
  },
  {
    title: "Compose the right solution",
    description: "Our solutions combine capabilities, proprietary platforms, and domain expertise — assembled for your specific context, not copied from a catalogue.",
    stat: "4",
    statLabel: "Solution levers (capabilities, platforms, domain, delivery)",
    reverse: true,
    icon: "⚙️",
    steps: ["Capability selection & team formation", "Platform fit analysis", "Build vs. configure decision", "Delivery model design"],
  },
  {
    title: "Deliver for measurable outcomes",
    description: "Every engagement is scoped around business metrics — throughput, latency, conversion, recovery rate — with engineering rigour backing each commitment.",
    stat: "90 days",
    statLabel: "Average time to first production deployment",
    reverse: false,
    icon: "📈",
    steps: ["OKR-aligned delivery sprints", "Weekly outcome reviews", "Continuous architecture validation", "Post-launch SRE support"],
  },
];

export default function Solutions() {
  return (
    <>
      <HeroSimple
        eyebrow="Solutions"
        headline="What our clients actually buy"
        subheadline="Problem-oriented solutions that combine our capabilities, platforms, and industry expertise into outcomes you can measure."
        video="https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486826/0_Triangle_Tunnel_Neon_3840x2160_1_zyn7ch.mp4"
      />

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-12">
            <StatGrid stats={[
              { value: "6", label: "Solution areas" },
              { value: "120+", label: "Enterprise clients" },
              { value: "90", label: "Days to production" },
              { value: "99.9%", label: "Uptime delivered" },
            ]} />
          </div>
        </FadeIn>
      </section>

      {/* Featured: Enterprise AI */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-black text-white rounded-2xl p-10 md:p-14">
            <MonoLabel className="text-white/40 block mb-6">Most requested</MonoLabel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-heading text-white mb-4">Enterprise AI</h2>
                <p className="text-[15px] text-white/60 leading-relaxed tracking-[0.01em]">
                  The solution our clients reach for most — AI that integrates into real business processes, not a demo that lives in a sandbox. Copilots, document intelligence, workflow automation, and decision support — deployed in production.
                </p>
                <div className="mt-8">
                  <Button variant="white-pill" href="/solutions/enterprise-ai">
                    Explore Enterprise AI →
                  </Button>
                </div>
              </div>
              <ul className="space-y-3">
                {["LLM-powered copilots for internal operations", "Intelligent document processing at scale", "Automated workflow orchestration", "Predictive analytics & decision support", "AI governance & compliance guardrails"].map((c) => (
                  <li key={c} className="text-[15px] text-white/60 flex items-center gap-3 tracking-[0.01em]">
                    <span className="w-1 h-1 rounded-full bg-white/40 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
            <SectionHeader eyebrow="// HOW WE WORK" headline="From problem to production." />
            <div className="mt-12 flex flex-col gap-0">
              {howItWorks.map((phase) => (
                <div
                  key={phase.title}
                  className={`overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 py-[60px] border-b border-[#f0f0f0] last:border-0 ${phase.reverse ? "lg:[&>*:first-child]:order-last" : ""}`}
                >
                  {/* Visual */}
                  <div className="relative min-h-[220px] rounded-2xl overflow-hidden bg-white border border-[#f0f0f0] flex flex-col">
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(34,174,164,0.10) 0%, transparent 70%)" }} />
                    <div className="flex items-center gap-1.5 px-4 py-3 bg-[#fafafa] border-b border-[#f0f0f0] shrink-0">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                      <span className="ml-3 text-[11px] text-[#717171] font-mono">phase.{phase.title.toLowerCase().replace(/ /g, "_")}</span>
                    </div>
                    <div className="flex-1 p-5 flex flex-col gap-2.5 justify-center">
                      {phase.steps.map((step, i) => (
                        <div key={step} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border border-[#22AEA4] flex items-center justify-center shrink-0">
                            <span className="text-[9px] font-medium text-[#22AEA4]">{i + 1}</span>
                          </div>
                          <span className="text-[12px] text-[#4e4e4e]">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-10 flex flex-col justify-center gap-6">
                    <div>
                      <h3 className="text-xl font-light text-black mb-3 tracking-tight">{phase.title}</h3>
                      <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{phase.description}</p>
                    </div>
                    <div className="pt-5 border-t border-[#e5e5e5]">
                      <span className="text-3xl font-light text-black tracking-tight">{phase.stat}</span>
                      <span className="block text-label text-[#717171] mt-1">{phase.statLabel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* All solutions grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
            <SectionHeader eyebrow="// ALL SOLUTIONS" headline="Six areas. Measurable outcomes." />
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
              {solutions.map((solution) => (
                <div key={solution.slug} className="el-card p-10 flex flex-col gap-5">
                  <div>
                    <MonoLabel className="block mb-3">{solution.label}</MonoLabel>
                    <h2 className="text-lg font-light leading-snug text-black mb-3 tracking-tight">{solution.headline}</h2>
                    <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{solution.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {solution.buildingBlocks.map((block) => (
                      <li key={block} className="text-xs text-[#717171] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#717171] shrink-0" />
                        {block}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e5e5e5] mt-auto">
                    {solution.industries.map((ind) => (
                      <Badge key={ind} variant="brand">{ind}</Badge>
                    ))}
                    {solution.capabilities.slice(0, 2).map((cap) => (
                      <Badge key={cap} variant="default">{cap}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3 pb-6">
        <FadeIn>
          <CTABanner
            headline="Build what complexity demands"
            subheadline="Tell us about your challenge. We'll show you how our solutions, platforms, and capabilities come together to solve it."
            primary={{ label: "Start a conversation", href: "/contact" }}
          />
        </FadeIn>
      </section>
    </>
  );
}

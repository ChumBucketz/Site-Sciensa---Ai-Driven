import { HeroSimple } from "@/components/sections/HeroSimple";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StatGrid } from "@/components/sections/StatGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const crossMarket = [
  { slug: "retail-ecommerce", label: "Retail & E-Commerce", headline: "Platforms that move at the pace of commerce", description: "Marketplace orchestration, pricing intelligence, loyalty personalization, and payment flows — engineered for the speed and complexity of modern retail.", challenges: ["Marketplace architecture", "Loyalty & personalization", "Pricing intelligence", "Payment orchestration", "Digital supply chain"] },
  { slug: "healthcare", label: "Healthcare & Life Sciences", headline: "Digital systems for regulated health ecosystems", description: "Interoperable health platforms, patient-centric digital journeys, and responsible AI — built to meet the operational and regulatory demands of healthcare.", challenges: ["Digital health platforms", "Interoperability & data exchange", "Operational automation", "Patient digital journeys", "Responsible AI in healthcare"] },
  { slug: "energy-utilities", label: "Energy & Utilities", headline: "Intelligent infrastructure for critical operations", description: "Real-time data platforms, predictive maintenance, trading systems, and process automation — for industries where uptime is non-negotiable.", challenges: ["Critical operation systems", "Real-time data platforms", "Predictive maintenance", "Energy trading platforms", "Process automation at scale"] },
  { slug: "telecommunications", label: "Telecommunications", headline: "Modern platforms for connectivity at scale", description: "BSS/OSS modernization, self-service digital channels, billing architecture, and AI-powered operations — for telecom operators reimagining customer experience.", challenges: ["BSS/OSS platform modernization", "Self-service channels", "Data & automation", "Billing & revenue assurance", "Network intelligence"] },
  { slug: "mobility-logistics", label: "Mobility & Logistics", headline: "Orchestrating movement with software precision", description: "Operational platforms, tracking & orchestration systems, mobility marketplaces, and AI-driven efficiency — for companies that move the world.", challenges: ["Operational platforms", "Tracking & orchestration", "Mobility marketplaces", "Multi-system integration", "AI-driven efficiency"] },
];

const rigors = [
  {
    title: "Financial-grade engineering for every industry",
    description: "Our roots are in financial services — the most demanding engineering environment in Latin America. The same patterns we built for tier-1 banks (real-time, regulated, high-throughput) transfer to every complex industry we enter.",
    stat: "15+",
    statLabel: "Years in financial services engineering",
    reverse: false,
    items: ["Real-time processing at scale", "Regulatory compliance by design", "99.99% uptime standards", "Financial-grade security posture"],
  },
  {
    title: "Domain expertise that accelerates delivery",
    description: "We don't just know how to code for healthcare, energy, and retail — we know the regulations, the data models, the integration points, and the failure modes. That knowledge compresses timelines and reduces risk.",
    stat: "6",
    statLabel: "Industries with dedicated practices",
    reverse: true,
    items: ["LGPD, HIPAA, SOX compliance", "FHIR & HL7 health interoperability", "BACEN & CVM regulatory frameworks", "Open Finance & Open Banking standards"],
  },
];

export default function Industries() {
  return (
    <>
      <HeroSimple
        eyebrow="Industries"
        headline="Deep engineering for complex markets"
        subheadline="We apply financial-grade engineering rigor to every industry we serve — solving the problems others call impossible."
        video="https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486140/7020046_Tunnel_Hexagon_1920x1080_ajcc34.mp4"
      />

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-12">
            <StatGrid stats={[
              { value: "6", label: "Industry verticals" },
              { value: "120+", label: "Enterprise clients" },
              { value: "15+", label: "Years of domain expertise" },
              { value: "500+", label: "Engineers deployed" },
            ]} />
          </div>
        </FadeIn>
      </section>

      {/* What makes our approach different */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
            <SectionHeader eyebrow="// OUR EDGE" headline="Engineering rigor meets domain depth." />
            <div className="mt-12 flex flex-col gap-0">
              {rigors.map((rigor) => (
                <div
                  key={rigor.title}
                  className={`overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 py-[60px] border-b border-[#f0f0f0] last:border-0 ${rigor.reverse ? "lg:[&>*:first-child]:order-last" : ""}`}
                >
                  {/* Visual */}
                  <div className="relative min-h-[220px] rounded-2xl overflow-hidden bg-white border border-[#f0f0f0] flex flex-col">
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(34,174,164,0.10) 0%, transparent 70%)" }} />
                    <div className="flex items-center gap-1.5 px-4 py-3 bg-[#fafafa] border-b border-[#f0f0f0] shrink-0">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                      <span className="ml-3 text-[11px] text-[#777169] font-mono">industry.standards</span>
                    </div>
                    <div className="flex-1 p-5 flex flex-col gap-2.5 justify-center">
                      {rigor.items.map((item) => (
                        <div key={item} className="flex items-center gap-3 h-8 rounded-[6px] bg-[#f5f5f5] border border-[#e5e5e5] px-3">
                          <div className="w-4 h-4 rounded-full bg-[#22AEA4] flex items-center justify-center shrink-0">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                          <span className="text-[12px] text-[#4e4e4e]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-10 flex flex-col justify-center gap-6">
                    <div>
                      <h3 className="text-xl font-light text-black mb-3 tracking-tight">{rigor.title}</h3>
                      <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{rigor.description}</p>
                    </div>
                    <div className="pt-5 border-t border-[#e5e5e5]">
                      <span className="text-3xl font-light text-black tracking-tight">{rigor.stat}</span>
                      <span className="block text-label text-[#777169] mt-1">{rigor.statLabel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Featured: Financial Services */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-black text-white rounded-2xl p-10 md:p-14">
            <MonoLabel className="text-white/40 block mb-6">Primary vertical</MonoLabel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-heading text-white mb-4">Financial Services</h2>
                <p className="text-[15px] text-white/60 leading-relaxed tracking-[0.01em]">
                  From core banking modernization to real-time payments and AI-driven risk intelligence — we build the mission-critical systems that financial institutions rely on to operate, innovate, and scale.
                </p>
                <div className="mt-8">
                  <Button variant="white-pill" href="/industries/financial-services">
                    Explore Financial Services
                  </Button>
                </div>
              </div>
              <ul className="space-y-3">
                {["Core & channel modernization", "Payments & settlement platforms", "Fraud, risk & operational intelligence", "Open finance & connected ecosystems", "Tokenization & digital assets"].map((c) => (
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

      {/* Cross-market */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
            <SectionHeader eyebrow="// CROSS-MARKET" headline="Cross-market expertise" subheadline="The same engineering rigor born in financial services, applied to every complex industry we serve." />
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
              {crossMarket.map((industry) => (
                <div key={industry.slug} className="el-card p-10 flex flex-col gap-5">
                  <div>
                    <MonoLabel className="block mb-3">{industry.label}</MonoLabel>
                    <h3 className="text-lg font-light text-black mb-3 tracking-tight">{industry.headline}</h3>
                    <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{industry.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {industry.challenges.map((c) => (
                      <li key={c} className="text-xs text-[#777169] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#777169] shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3 pb-6">
        <FadeIn>
          <CTABanner
            headline="Operating in a complex market?"
            subheadline="Let's discuss how engineering precision and AI can accelerate your digital agenda."
            primary={{ label: "Talk to our team", href: "/contact" }}
          />
        </FadeIn>
      </section>
    </>
  );
}

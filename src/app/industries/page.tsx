import { HeroSimple } from "@/components/sections/HeroSimple";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";

const crossMarket = [
  { slug: "retail-ecommerce", label: "Retail & E-Commerce", headline: "Platforms that move at the pace of commerce", description: "Marketplace orchestration, pricing intelligence, loyalty personalization, and payment flows — engineered for the speed and complexity of modern retail.", challenges: ["Marketplace architecture", "Loyalty & personalization", "Pricing intelligence", "Payment orchestration", "Digital supply chain"] },
  { slug: "healthcare", label: "Healthcare & Life Sciences", headline: "Digital systems for regulated health ecosystems", description: "Interoperable health platforms, patient-centric digital journeys, and responsible AI — built to meet the operational and regulatory demands of healthcare.", challenges: ["Digital health platforms", "Interoperability & data exchange", "Operational automation", "Patient digital journeys", "Responsible AI in healthcare"] },
  { slug: "energy-utilities", label: "Energy & Utilities", headline: "Intelligent infrastructure for critical operations", description: "Real-time data platforms, predictive maintenance, trading systems, and process automation — for industries where uptime is non-negotiable.", challenges: ["Critical operation systems", "Real-time data platforms", "Predictive maintenance", "Energy trading platforms", "Process automation at scale"] },
  { slug: "telecommunications", label: "Telecommunications", headline: "Modern platforms for connectivity at scale", description: "BSS/OSS modernization, self-service digital channels, billing architecture, and AI-powered operations — for telecom operators reimagining customer experience.", challenges: ["BSS/OSS platform modernization", "Self-service channels", "Data & automation", "Billing & revenue assurance", "Network intelligence"] },
  { slug: "mobility-logistics", label: "Mobility & Logistics", headline: "Orchestrating movement with software precision", description: "Operational platforms, tracking & orchestration systems, mobility marketplaces, and AI-driven efficiency — for companies that move the world.", challenges: ["Operational platforms", "Tracking & orchestration", "Mobility marketplaces", "Multi-system integration", "AI-driven efficiency"] },
];

export default function Industries() {
  return (
    <>
      <HeroSimple
        eyebrow="Industries"
        headline="Deep engineering for complex markets"
        subheadline="We apply financial-grade engineering rigor to every industry we serve — solving the problems others call impossible."
      />

      {/* Featured: Financial Services */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="el-card-lg overflow-hidden bg-black text-white p-10 md:p-14">
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
      </section>

      {/* Cross-market */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="// CROSS-MARKET"
            headline="Cross-market expertise"
            subheadline="The same engineering rigor born in financial services, applied to every complex industry we serve."
          />
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
      </section>

      <CTABanner
        headline="Operating in a complex market?"
        subheadline="Let's discuss how engineering precision and AI can accelerate your digital agenda."
        primary={{ label: "Talk to our team", href: "/contact" }}
      />
    </>
  );
}

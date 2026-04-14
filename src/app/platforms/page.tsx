import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platforms | Amplify, Lumia AI & CodeGenius — Sciensa",
  description: "Plataformas proprietárias da Sciensa: Amplify para digital banking, Lumia AI para inteligência empresarial, CodeGenius para engenharia acelerada por IA. 3× mais rápido ao mercado.",
  alternates: { canonical: "/platforms" },
  openGraph: { title: "Sciensa Platforms — Amplify, Lumia AI, CodeGenius", description: "Plataformas enterprise proprietárias que comprimem o time-to-market e amplificam a capacidade de engenharia.", url: "https://sciensa.com/platforms" },
};

import { CountUp } from "@/components/ui/CountUp";
import { HeroSimple } from "@/components/sections/HeroSimple";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StatGrid } from "@/components/sections/StatGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { tagVariant } from "@/components/ui/tagColor";

const platforms = [
  { slug: "amplify", label: "Amplify", type: "Platform / Accelerator", tagline: "Accelerator for digital finance", description: "A modular platform that accelerates digital banking and financial product launches — covering onboarding, wallet, payments, APIs, and composable financial journeys.", highlights: ["Digital onboarding & KYC", "Wallet & payments orchestration", "Open API architecture", "Composable financial modules", "Time-to-market acceleration"] },
  { slug: "lumia-ai", label: "Lumia AI", type: "AI Platform", tagline: "Intelligence layer for the enterprise", description: "An applied intelligence layer that powers copilots, internal assistants, contextual intelligence, workflow automation, and enterprise knowledge — embedded across journeys and operations.", highlights: ["Copilots & AI assistants", "Internal knowledge agents", "Contextual intelligence", "Workflow automation", "Enterprise knowledge platform"] },
  { slug: "codegenius", label: "CodeGenius", type: "Engineering Accelerator", tagline: "AI-accelerated engineering", description: "Accelerates software engineering with AI — boosting productivity, code quality, testing, refactoring, documentation, and assisted development across the engineering lifecycle.", highlights: ["Developer productivity", "Code quality & analysis", "Automated testing", "Intelligent refactoring", "Documentation generation"] },
];

const differentiators = [
  {
    title: "Born from real enterprise deployments",
    description: "Every platform originated from solving a real enterprise problem — not from a product hypothesis. Amplify was built for a tier-1 bank. Lumia AI for a large insurance operation. CodeGenius for engineering teams scaling output without scaling headcount.",
    stat: "R$1.2B+",
    statLabel: "Annual value enabled by platform clients",
    reverse: false,
    points: ["Proven at enterprise scale", "Refined across 20+ deployments", "Built on real client feedback", "No greenfield risk"],
  },
  {
    title: "Composable, not monolithic",
    description: "Our platforms are designed to be adopted incrementally. Take the modules you need, integrate with your existing stack, and scale adoption over time — without a big-bang replacement.",
    stat: "4–12 weeks",
    statLabel: "Typical time to first production module",
    reverse: true,
    points: ["Module-by-module adoption", "API-first architecture", "Cloud-agnostic deployment", "Coexists with legacy systems"],
  },
];

export default function Platforms() {
  return (
    <>
      <HeroSimple
        eyebrow="Platforms & Accelerators"
        headline="Proprietary platforms for faster impact"
        subheadline="Enterprise-grade IP that compresses time-to-market, accelerates digital transformation, and delivers differentiation from day one."
        video="https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486834/0_Circuit_Board_Technology_3840x2160_rbiidg.mp4"
      />

      {/* Stats */}
      <section className="max-w-[1336px] mx-auto px-4 3xl:px-0 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-12">
            <StatGrid stats={[
              { value: "3", label: "Proprietary platforms" },
              { value: "20+", label: "Enterprise deployments" },
              { value: "4", label: "Weeks to first module" },
              { value: "3×", label: "Faster time-to-market" },
            ]} />
          </div>
        </FadeIn>
      </section>

      {/* Why platforms alternating rows */}
      <section className="max-w-[1336px] mx-auto px-4 3xl:px-0 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
            <SectionHeader eyebrow="// WHY PROPRIETARY" headline="Built from the inside out." />
            <div className="mt-12 flex flex-col gap-0">
              {differentiators.map((diff) => (
                <div
                  key={diff.title}
                  className={`overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 py-[60px] border-b border-[#f0f0f0] last:border-0 ${diff.reverse ? "lg:[&>*:first-child]:order-last" : ""}`}
                >
                  {/* Visual */}
                  <div className="relative min-h-[220px] rounded-2xl overflow-hidden bg-white border border-[#f0f0f0] flex flex-col">
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(34,174,164,0.10) 0%, transparent 70%)" }} />
                    <div className="flex items-center gap-1.5 px-4 py-3 bg-[#fafafa] border-b border-[#f0f0f0] shrink-0">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                      <span className="ml-3 text-[11px] text-[#717171] font-mono">platform.properties</span>
                    </div>
                    <div className="flex-1 p-5 flex flex-col gap-2.5 justify-center">
                      {diff.points.map((point) => (
                        <div key={point} className="flex items-center gap-3 h-8 rounded-[6px] bg-[#f5f5f5] border border-[#e5e5e5] px-3">
                          <div className="w-4 h-4 rounded-full bg-[#22AEA4] flex items-center justify-center shrink-0">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                          <span className="text-[12px] text-[#4e4e4e]">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-10 flex flex-col justify-center gap-6">
                    <div>
                      <h3 className="text-xl font-light text-black mb-3 tracking-tight">{diff.title}</h3>
                      <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{diff.description}</p>
                    </div>
                    <div className="pt-5 border-t border-[#e5e5e5]">
                      <CountUp value={diff.stat} className="text-3xl font-light text-black tracking-tight" />
                      <span className="block text-label text-[#717171] mt-1">{diff.statLabel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Platform cards */}
      <section className="max-w-[1336px] mx-auto px-4 3xl:px-0 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
            <SectionHeader eyebrow="// ALL PLATFORMS" headline="Three platforms. One ecosystem." />
            <div className="mt-10 flex flex-col gap-4">
              {platforms.map((platform, pi) => (
                <div key={platform.slug} className="el-card-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                  <div className="p-10 flex flex-col gap-4">
                    <Badge variant={tagVariant(pi)}>{platform.type}</Badge>
                    <div>
                      <h2 className="text-2xl font-light text-black tracking-tight">{platform.label}</h2>
                      <p className="text-[15px] text-[#717171] mt-1 tracking-[0.01em]">{platform.tagline}</p>
                    </div>
                    <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{platform.description}</p>
                  </div>
                  <div className="p-10 bg-[#f5f5f5] flex flex-col justify-center">
                    <MonoLabel className="block mb-5">Capabilities</MonoLabel>
                    <ul className="space-y-3">
                      {platform.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-3 text-[15px] text-[#4e4e4e] tracking-[0.01em]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#717171] shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Why platforms 3-col */}
      <section className="max-w-[1336px] mx-auto px-4 3xl:px-0 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
            <SectionHeader eyebrow="// THE PLATFORM ADVANTAGE" headline="Why our clients choose platforms over custom-only builds." />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Faster time-to-market", description: "Pre-built modules and integrations reduce delivery timelines from months to weeks — without cutting corners on quality." },
                { title: "Battle-tested architecture", description: "Every platform is born from real enterprise deployments in regulated industries. No surprises in production." },
                { title: "Composable by design", description: "Use the modules you need — our platforms adapt to your architecture, not the other way around." },
              ].map((reason) => (
                <div key={reason.title} className="el-card p-8">
                  <h3 className="text-base font-medium text-black mb-3 tracking-tight">{reason.title}</h3>
                  <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="max-w-[1336px] mx-auto px-4 3xl:px-0 py-3 pb-6">
        <FadeIn>
          <CTABanner
            headline="Accelerate with our platforms"
            subheadline="See how our enterprise platforms can compress your roadmap and amplify your engineering capacity."
            primary={{ label: "Schedule a demo", href: "/contact" }}
          />
        </FadeIn>
      </section>
    </>
  );
}

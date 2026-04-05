import { HeroSimple } from "@/components/sections/HeroSimple";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";
import { MonoLabel } from "@/components/ui/MonoLabel";

const platforms = [
  { slug: "amplify", label: "Amplify", type: "Platform / Accelerator", tagline: "Accelerator for digital finance", description: "A modular platform that accelerates digital banking and financial product launches — covering onboarding, wallet, payments, APIs, and composable financial journeys.", highlights: ["Digital onboarding & KYC", "Wallet & payments orchestration", "Open API architecture", "Composable financial modules", "Time-to-market acceleration"] },
  { slug: "lumia-ai", label: "Lumia AI", type: "AI Platform", tagline: "Intelligence layer for the enterprise", description: "An applied intelligence layer that powers copilots, internal assistants, contextual intelligence, workflow automation, and enterprise knowledge — embedded across journeys and operations.", highlights: ["Copilots & AI assistants", "Internal knowledge agents", "Contextual intelligence", "Workflow automation", "Enterprise knowledge platform"] },
  { slug: "codegenius", label: "CodeGenius", type: "Engineering Accelerator", tagline: "AI-accelerated engineering", description: "Accelerates software engineering with AI — boosting productivity, code quality, testing, refactoring, documentation, and assisted development across the engineering lifecycle.", highlights: ["Developer productivity", "Code quality & analysis", "Automated testing", "Intelligent refactoring", "Documentation generation"] },
  { slug: "smartcollect", label: "SmartCollect", type: "AI Solution", tagline: "Intelligent collection & recovery", description: "Applied intelligence for collections, recovery, and operational efficiency — with automated prioritization, segmentation, experience optimization, and operational intelligence.", highlights: ["Automated prioritization", "Intelligent segmentation", "Customer experience optimization", "Recovery intelligence", "Operational efficiency"] },
];

export default function Platforms() {
  return (
    <>
      <HeroSimple
        eyebrow="Platforms & Accelerators"
        headline="Proprietary platforms for faster impact"
        subheadline="Enterprise-grade IP that compresses time-to-market, accelerates digital transformation, and delivers differentiation from day one."
      />

      {/* Platform cards */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col gap-4">
          {platforms.map((platform) => (
            <div
              key={platform.slug}
              className="el-card-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
            >
              {/* Left */}
              <div className="p-10 flex flex-col gap-4">
                <div>
                  <Badge variant="warm">{platform.type}</Badge>
                </div>
                <div>
                  <h2 className="text-2xl font-light text-black tracking-tight">{platform.label}</h2>
                  <p className="text-[15px] text-[#777169] mt-1 tracking-[0.01em]">{platform.tagline}</p>
                </div>
                <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{platform.description}</p>
              </div>

              {/* Right */}
              <div className="p-10 bg-[#f5f5f5] flex flex-col justify-center">
                <MonoLabel className="block mb-5">Capabilities</MonoLabel>
                <ul className="space-y-3">
                  {platform.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-[15px] text-[#4e4e4e] tracking-[0.01em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#777169] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why platforms */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="// WHY PROPRIETARY"
            headline="Why proprietary platforms?"
            subheadline="Built from real-world enterprise experience, our platforms encode proven patterns and accelerate delivery without sacrificing flexibility."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Faster time-to-market", description: "Pre-built modules and integrations reduce delivery timelines from months to weeks." },
              { title: "Battle-tested architecture", description: "Every platform is born from real enterprise deployments in regulated industries." },
              { title: "Composable by design", description: "Use the modules you need — our platforms adapt to your architecture, not the other way around." },
            ].map((reason) => (
              <div key={reason.title} className="el-card p-8">
                <h3 className="text-base font-medium text-black mb-3 tracking-tight">{reason.title}</h3>
                <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Accelerate with our platforms"
        subheadline="See how our enterprise platforms can compress your roadmap and amplify your engineering capacity."
        primary={{ label: "Schedule a demo", href: "/contact" }}
      />
    </>
  );
}

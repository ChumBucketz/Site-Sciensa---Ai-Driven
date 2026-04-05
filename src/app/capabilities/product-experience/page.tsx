import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const capabilities = [
  { title: "Product Discovery & Strategy", description: "Structured discovery for complex digital products — user research, opportunity mapping, and roadmap definition aligned with business outcomes.", items: ["User research", "Opportunity mapping", "Roadmap definition", "OKR alignment"] },
  { title: "Design Systems", description: "Scalable component libraries, design tokens, and accessibility-first systems that unify experience across products and channels.", items: ["Component libraries", "Design tokens", "Accessibility (WCAG)", "Multi-brand theming"] },
  { title: "Enterprise Front-ends", description: "Complex, high-performance React and React Native applications for digital banking, marketplace, and operational platforms.", items: ["React & Next.js", "React Native", "Micro-frontends", "Performance optimization"] },
  { title: "Digital Journeys", description: "End-to-end digital experience design — from onboarding and KYC to transaction flows and self-service support channels.", items: ["Customer onboarding", "KYC & identity", "Transaction flows", "Self-service portals"] },
  { title: "Channel Enablement", description: "Omnichannel strategy and implementation — web, mobile, WhatsApp, and partner APIs unified under a consistent experience layer.", items: ["Web & mobile", "WhatsApp & messaging", "Partner APIs", "Omnichannel orchestration"] },
  { title: "Accessibility & Performance", description: "WCAG 2.1 AA/AAA compliance, Core Web Vitals optimization, and performance budgets for enterprise digital products.", items: ["WCAG compliance", "Core Web Vitals", "Performance budgets", "Inclusive design"] },
];

const caseStudies = [
  { client: "Tier-1 Bank", title: "Digital Banking Platform", result: "Redesigned digital banking experience for 12M+ users, improving NPS by 28 points and reducing support tickets by 40%.", tags: ["Digital Journeys", "Design System"] },
  { client: "Insurance Leader", title: "Self-Service Portal", result: "Built omnichannel self-service portal handling 70% of customer requests without agent intervention.", tags: ["Channel Enablement", "Enterprise Front-end"] },
  { client: "Retail Marketplace", title: "Seller Experience Platform", result: "Redesigned seller onboarding journey, cutting time-to-first-sale from 14 days to 2 days for 3,000+ sellers.", tags: ["Product Discovery", "Digital Journeys"] },
];

export default function ProductExperience() {
  return (
    <>
      <HeroSimple
        eyebrow="Capabilities / Product & Experience Engineering"
        headline="Digital products that perform at enterprise scale"
        subheadline="Discovery for complex products, design systems, enterprise front-ends, digital journeys, and channel enablement — crafting experiences that serve business goals."
      />

      <section className="border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <StatGrid stats={[
            { value: "50+", label: "Digital products shipped" },
            { value: "28pts", label: "Avg. NPS improvement" },
            { value: "40%", label: "Reduction in support volume" },
            { value: "WCAG AA", label: "Accessibility standard" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader eyebrow="// WHAT WE BUILD" headline="Product capabilities that convert" subheadline="From discovery to delivery — products built to perform and last." />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {capabilities.map((cap) => (
            <div key={cap.title} className="el-card p-8 flex flex-col gap-4">
              <div>
                <h3 className="text-base font-medium text-black mb-2 tracking-tight">{cap.title}</h3>
                <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{cap.description}</p>
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-auto">
                {cap.items.map((item) => (
                  <li key={item} className="text-xs text-[#777169] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#777169] shrink-0" />
                    {item}
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
        headline="Ready to build experiences that perform?"
        subheadline="Talk to our product and experience engineering team about your digital challenges."
        primary={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}

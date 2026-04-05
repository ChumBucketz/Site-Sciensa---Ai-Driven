import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const modules = [
  { title: "Automated Prioritization", description: "ML models that rank delinquent accounts by recovery probability, contact propensity, and optimal timing — automatically.", items: ["Recovery probability scoring", "Contact propensity", "Optimal timing", "Portfolio segmentation"] },
  { title: "Intelligent Segmentation", description: "Behavioral clustering and risk-based segmentation that groups accounts by profile, enabling differentiated collection strategies.", items: ["Behavioral clustering", "Risk segmentation", "Profile matching", "Cohort analysis"] },
  { title: "Customer Experience Optimization", description: "Personalized collection journeys across digital channels — reducing friction, improving response rates, and protecting customer relationships.", items: ["Personalized journeys", "Multi-channel outreach", "Tone optimization", "Self-cure portals"] },
  { title: "Recovery Intelligence", description: "Negotiation engine with AI-powered settlement offer optimization, payment plan recommendation, and concession management.", items: ["Settlement optimization", "Payment plan AI", "Concession management", "Negotiation scripts"] },
  { title: "Operational Efficiency", description: "Automated contact center workflows, agent augmentation, and performance dashboards for collections teams.", items: ["Agent augmentation", "Workflow automation", "Performance dashboards", "SLA management"] },
  { title: "Regulatory Compliance", description: "Built-in compliance controls for BACEN, LGPD, and consumer protection regulation — with full audit trails for every interaction.", items: ["BACEN compliance", "LGPD controls", "Consumer protection", "Audit trails"] },
];

const caseStudies = [
  { client: "Financial Conglomerate", title: "AI Collections at Scale", result: "SmartCollect platform recovering R$1.2B/year across 8M+ delinquent accounts with 45% operational efficiency improvement.", tags: ["Automated Prioritization", "Recovery Intelligence"] },
  { client: "Digital Lender", title: "Self-cure Optimization", result: "AI-personalized self-cure journeys increased voluntary payment rate by 38% while reducing operational cost per account by 55%.", tags: ["CX Optimization", "Intelligent Segmentation"] },
  { client: "Credit Card Issuer", title: "Early Delinquency Prevention", result: "Predictive risk scoring identified at-risk customers 30 days before delinquency — reducing NPL formation by 22%.", tags: ["Automated Prioritization", "Operational Efficiency"] },
];

export default function SmartCollect() {
  return (
    <>
      <HeroSimple
        eyebrow="Platforms / SmartCollect"
        headline="Intelligent collection & recovery at scale"
        subheadline="Applied intelligence for collections, recovery, and operational efficiency — with automated prioritization, segmentation, experience optimization, and operational intelligence."
      />

      <section className="border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <StatGrid stats={[
            { value: "R$1.2B", label: "Annual recovery enabled" },
            { value: "8M+", label: "Accounts managed" },
            { value: "45%", label: "Operational efficiency gain" },
            { value: "38%", label: "Self-cure rate improvement" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader eyebrow="// PLATFORM MODULES" headline="The complete collections intelligence stack" subheadline="From early delinquency detection to regulatory-compliant recovery — end to end." />
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
        headline="Ready to transform your collections operation?"
        subheadline="See how SmartCollect can improve recovery rates and operational efficiency."
        primary={{ label: "Schedule a demo", href: "/contact" }}
        secondary={{ label: "All platforms →", href: "/platforms" }}
      />
    </>
  );
}

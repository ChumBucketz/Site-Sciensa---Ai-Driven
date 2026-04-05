import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const modules = [
  { title: "Onboarding & KYC", description: "Automated onboarding with real-time identity verification — account opening in under 5 minutes.", items: ["eKYC verification", "Biometric ID capture", "Document validation", "Real-time decisioning"] },
  { title: "Digital Accounts PF/PJ", description: "Complete accounts with balance management, statements, and enterprise-grade transactions.", items: ["Checking & savings", "Multi-product catalog", "Real-time ledger", "Account lifecycle"] },
  { title: "PIX & Payments", description: "Full PIX stack with 100% Bacen compliance — plus bulk billing and payment orchestration.", items: ["PIX instant payments", "Bulk billing", "Payment orchestration", "100% Bacen compliance"] },
  { title: "Risk & Compliance", description: "Real-time risk management with limits, anti-fraud, credit analysis, and regulatory compliance.", items: ["Anti-fraud engine", "Credit analysis", "Dynamic limits", "Regulatory reporting"] },
  { title: "Portal & Mobile", description: "White-label internet banking and native mobile apps with complete banking experience.", items: ["Responsive web portal", "iOS & Android apps", "White-label theming", "Push notifications"] },
  { title: "Open Banking & Cards", description: "OpenAPI 3.0 integration layer and full card management — virtual and physical.", items: ["Open Banking APIs", "Virtual & physical cards", "Limit management", "Ecosystem integration"] },
];

const caseStudies = [
  { client: "iFood Pago", title: "Digital Bank Launch", result: "Stood up the entire banking operation rapidly, enabling strategic account rollout for iFood Pago's top partners — from zero to live in record time.", tags: ["Digital Banking", "Platform", "Go-Live"] },
  { client: "Mid-Size Bank", title: "Core Modernization", result: "Replaced legacy core with Amplify modules, cutting operational cost by 50% and enabling new product launches in weeks instead of quarters.", tags: ["Modernization", "Cost Reduction"] },
  { client: "Financial Institution", title: "PJ Digital Account", result: "Launched a complete PJ digital account product in 8 weeks, reaching 10k+ active business accounts within the first quarter.", tags: ["PJ Accounts", "Time-to-Market"] },
];

export default function Amplify() {
  return (
    <>
      <HeroSimple
        eyebrow="Platforms / Amplify"
        headline="Accelerate your digital banking with Amplify"
        subheadline="A modular platform that compresses digital banking launches from months to weeks — covering onboarding, accounts, payments, cards, and composable financial journeys."
      />

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-12">
          <StatGrid stats={[
            { value: "10×", label: "Faster time-to-market" },
            { value: "50%", label: "Lower development cost" },
            { value: "6×", label: "Project ROI" },
            { value: "40%", label: "Higher NPS" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
          <SectionHeader eyebrow="// PLATFORM MODULES" headline="Everything you need to launch" subheadline="Pre-built, battle-tested modules for digital banking — composable and white-label." />
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
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
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

      <section className="max-w-7xl mx-auto px-6 py-3 pb-6">
        <CTABanner
          headline="Ready to accelerate your digital banking?"
          subheadline="Schedule a briefing to see how Amplify can compress your roadmap and reduce cost."
          primary={{ label: "Schedule a briefing", href: "/contact" }}
          secondary={{ label: "All platforms →", href: "/platforms" }}
        />
      </section>
    </>
  );
}

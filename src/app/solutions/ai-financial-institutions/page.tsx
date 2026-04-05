import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const modules = [
  { title: "Fraud Detection & Prevention", description: "Real-time fraud scoring with graph analytics, behavioral biometrics, and device intelligence — sub-50ms response for payment flows.", items: ["Real-time scoring (<50ms)", "Graph-based fraud networks", "Behavioral biometrics", "Device intelligence"] },
  { title: "Risk Intelligence", description: "Credit risk models, market risk analytics, and operational risk dashboards — with full explainability for regulatory review.", items: ["Credit risk models", "Market risk analytics", "Operational risk", "Explainable AI (XAI)"] },
  { title: "Credit Analysis & Scoring", description: "Alternative data credit scoring, automated underwriting, and AI-driven credit limit management for mass-market lending.", items: ["Alternative data scoring", "Automated underwriting", "Limit management", "Default prediction"] },
  { title: "AML & Compliance Automation", description: "Anti-money laundering transaction monitoring, suspicious activity reporting, and KYC/KYB workflow automation.", items: ["AML transaction monitoring", "SAR automation", "KYC/KYB workflows", "Watchlist screening"] },
  { title: "Customer Intelligence", description: "Customer lifetime value modeling, next best action, and personalization engines tuned for regulated financial interactions.", items: ["CLV modeling", "Next best action", "Personalization engine", "Churn prediction"] },
];

const caseStudies = [
  { client: "Financial Conglomerate", title: "SmartCollect AI Collections", result: "AI-driven collections platform recovering R$1.2B/year across 8M+ accounts with 45% efficiency improvement.", tags: ["AI Collections", "Predictive Analytics"] },
  { client: "Digital Payments Provider", title: "Real-time Fraud Platform", result: "Graph-based fraud detection reducing fraud losses by 60% while maintaining < 0.1% false positive rate on 2.5M daily transactions.", tags: ["Fraud Detection", "Risk Intelligence"] },
  { client: "Insurance Leader", title: "Claims Risk Intelligence", result: "ML-powered claims triage reduced fraudulent claims by 40% and cut processing time by 65% for legitimate claims.", tags: ["Risk Intelligence", "AML & Compliance"] },
];

export default function AIFinancialInstitutions() {
  return (
    <>
      <HeroSimple
        eyebrow="Solutions / AI for Financial Institutions"
        headline="AI purpose-built for regulated financial environments"
        subheadline="Fraud detection, risk intelligence, credit analysis, anti-money laundering, and compliance automation — AI tuned for the precision demands of financial services."
      />

      <section className="border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <StatGrid stats={[
            { value: "<50ms", label: "Fraud scoring latency" },
            { value: "60%", label: "Fraud loss reduction" },
            { value: "R$1.2B", label: "Annual recovery enabled" },
            { value: "40+", label: "Financial AI deployments" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader eyebrow="// BUILDING BLOCKS" headline="What we deliver" subheadline="AI with the precision and explainability that regulators require." />
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
        headline="Ready to deploy AI in your financial institution?"
        subheadline="Talk to our financial AI team about your risk, fraud, and compliance challenges."
        primary={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}

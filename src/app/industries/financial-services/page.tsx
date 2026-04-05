import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";
import { MonoLabel } from "@/components/ui/MonoLabel";

const capabilities = [
  { title: "Core Banking Modernization", description: "Decompose monolithic core systems into event-driven, API-first architectures — without disrupting daily operations or regulatory compliance.", details: ["Strangler-fig migration patterns", "Dual-run validation & reconciliation", "Legacy screen modernization", "Data migration with zero downtime"] },
  { title: "Real-Time Payments & Settlement", description: "Architect high-throughput, low-latency payment rails for PIX, instant transfers, and cross-border settlements at scale.", details: ["Sub-second transaction processing", "ISO 20022 message orchestration", "Multi-rail routing & fallback", "Real-time fraud scoring integration"] },
  { title: "AI-Driven Risk Intelligence", description: "Deploy ML models for credit risk, fraud detection, AML compliance, and operational risk — integrated into real-time decision pipelines.", details: ["Explainable AI for regulatory compliance", "Real-time scoring engines (< 50ms)", "Graph-based AML network detection", "Continuous model monitoring & drift alerts"] },
  { title: "Open Finance & Ecosystem APIs", description: "Build secure, scalable API platforms for Open Banking, consent management, and third-party ecosystem orchestration.", details: ["OAuth 2.0 / FAPI-compliant APIs", "Consent lifecycle management", "API gateway & rate limiting", "Partner developer portals"] },
  { title: "Tokenization & Digital Assets", description: "Engineer platforms for asset tokenization, custody systems, and programmable finance on distributed ledger architectures.", details: ["Security token issuance platforms", "Custody & key management (HSM)", "Smart contract audit pipelines", "Regulatory reporting integration"] },
  { title: "Compliance & Regulatory Engineering", description: "Automate regulatory reporting, build audit trails, and embed compliance checks directly into your engineering pipeline.", details: ["Automated regulatory report generation", "Immutable audit logging", "Policy-as-code enforcement", "KYC/KYB orchestration workflows"] },
];

const caseStudies = [
  { client: "Tier-1 Brazilian Bank", title: "Core Banking Decomposition", result: "70% reduction in deployment cycles while maintaining 99.99% uptime during migration of 12M+ accounts.", tags: ["Platform Engineering", "AI Engineering"] },
  { client: "Digital Payments Provider", title: "PIX Infrastructure at Scale", result: "Processed 2.5M+ daily transactions with < 200ms p99 latency and real-time fraud scoring across all payment flows.", tags: ["Real-Time Systems", "Cloud & DevSecOps"] },
  { client: "Insurance Holding Group", title: "AI-Powered Claims Intelligence", result: "Reduced claims processing time by 65% and fraud-related losses by 40% through automated triage and anomaly detection.", tags: ["AI Engineering", "Data Intelligence"] },
];

const techStack = [
  { category: "Cloud", items: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"] },
  { category: "Data & AI", items: ["Spark", "Kafka", "MLflow", "TensorFlow", "LangChain"] },
  { category: "Integration", items: ["Kong", "Apigee", "MuleSoft", "GraphQL", "gRPC"] },
  { category: "Security", items: ["Vault", "OPA", "SonarQube", "Snyk", "SIEM"] },
];

export default function FinancialServices() {
  return (
    <>
      <HeroSimple
        eyebrow="Industries / Financial Services"
        headline="Engineering trust at transaction speed"
        subheadline="From core banking modernization to real-time payments and AI-driven risk intelligence — we build the mission-critical systems that financial institutions rely on to operate, innovate, and scale."
      />

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-12">
          <StatGrid stats={[
            { value: "200+", label: "Financial services projects delivered" },
            { value: "40+", label: "Clients across banking, payments & insurance" },
            { value: "99.99%", label: "System uptime for mission-critical platforms" },
            { value: "15+", label: "Years of sector expertise" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
          <SectionHeader
            eyebrow="// WHAT WE DELIVER"
            headline="End-to-end capabilities for financial institutions"
            subheadline="Deep domain knowledge meets engineering precision — from strategy through production."
          />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <div key={cap.title} className="el-card p-8 flex flex-col gap-4">
                <div>
                  <h3 className="text-base font-medium text-black mb-2 tracking-tight">{cap.title}</h3>
                  <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{cap.description}</p>
                </div>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-auto">
                  {cap.details.map((d) => (
                    <li key={d} className="text-xs text-[#777169] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#777169] shrink-0" />
                      {d}
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
          <SectionHeader eyebrow="// PROOF POINTS" headline="Results that compound" subheadline="Selected outcomes from our work with leading financial institutions." />
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

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
          <SectionHeader eyebrow="// TECHNOLOGY STACK" headline="Battle-tested tooling" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((group) => (
              <div key={group.category} className="el-card p-6">
                <MonoLabel className="block mb-4">{group.category}</MonoLabel>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-[15px] text-[#4e4e4e] tracking-[0.01em]">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3 pb-6">
        <CTABanner
          headline="Ready to modernize your financial infrastructure?"
          subheadline="Schedule a briefing with our financial services engineering team to discuss your challenges and roadmap."
          primary={{ label: "Schedule a briefing", href: "/contact" }}
          secondary={{ label: "Other industries →", href: "/industries" }}
        />
      </section>
    </>
  );
}

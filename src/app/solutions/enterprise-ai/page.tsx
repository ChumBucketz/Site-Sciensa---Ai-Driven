import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const modules = [
  { title: "LLM-powered Copilots", description: "Domain-specific AI assistants for customer service, internal knowledge, compliance review, and operational workflows.", items: ["Customer service copilots", "Internal knowledge agents", "Compliance assistants", "Operator augmentation"] },
  { title: "Intelligent Document Processing", description: "OCR, extraction, classification, and validation pipelines for contracts, invoices, medical records, and regulatory documents.", items: ["Document extraction", "Classification & routing", "Validation pipelines", "Structured output"] },
  { title: "Workflow Automation", description: "AI-driven process automation that handles exceptions, escalates intelligently, and learns from human corrections over time.", items: ["Exception handling", "Intelligent escalation", "Human-in-the-loop", "Process learning"] },
  { title: "Predictive Analytics", description: "ML models for demand forecasting, churn prediction, anomaly detection, and operational intelligence embedded in business systems.", items: ["Demand forecasting", "Churn prediction", "Anomaly detection", "Operational insights"] },
  { title: "AI-powered Decision Support", description: "Real-time scoring engines, recommendation systems, and contextual AI that augments human decision-making at critical moments.", items: ["Real-time scoring", "Recommendation engines", "Contextual intelligence", "Explainable AI"] },
];

const caseStudies = [
  { client: "Major Insurance Company", title: "Claims AI Agent", result: "LLM-powered copilot handles 60% of claims inquiries autonomously, cutting resolution time by 60% with 94% CSAT.", tags: ["LLM Copilot", "Workflow Automation"] },
  { client: "Global Bank", title: "Document AI Platform", result: "Automated processing of 5M+ documents/month with 98% accuracy — reducing analyst effort by 85%.", tags: ["Document Processing", "Predictive Analytics"] },
  { client: "Retail Conglomerate", title: "Customer Intelligence Platform", result: "AI-driven churn prediction and recommendation engine reduced customer churn by 25% and increased cross-sell conversion by 40%.", tags: ["Predictive Analytics", "Decision Support"] },
];

export default function EnterpriseAI() {
  return (
    <>
      <HeroSimple
        eyebrow="Solutions / Enterprise AI"
        headline="AI that works inside your enterprise, not beside it"
        subheadline="Copilots, intelligent workflows, document understanding, and operational automation — enterprise AI integrated into your existing systems and processes."
      />

      <section className="border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <StatGrid stats={[
            { value: "60%", label: "Avg. process automation rate" },
            { value: "85%", label: "Manual effort reduction" },
            { value: "40+", label: "Enterprise AI deployments" },
            { value: "94%", label: "End-user satisfaction" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader eyebrow="// BUILDING BLOCKS" headline="What we deliver" subheadline="AI embedded in your operations — not bolted on." />
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
          <div className="el-card p-8 bg-[#f5f5f5] flex flex-col justify-center gap-3">
            <p className="text-xs font-medium uppercase tracking-widest text-[#777169]">Powered by</p>
            <p className="text-xl font-light text-black tracking-tight">Lumia AI Platform</p>
            <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">Enterprise AI platform with model registry, RAG orchestration, and production-grade guardrails.</p>
            <Badge variant="warm" className="w-fit">AI Platform</Badge>
          </div>
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
        headline="Ready to embed AI into your operations?"
        subheadline="Talk to our AI engineering team about your automation and intelligence challenges."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "Explore Lumia AI →", href: "/platforms/lumia-ai" }}
      />
    </>
  );
}

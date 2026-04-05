import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const modules = [
  { title: "Copilots & AI Assistants", description: "Domain-specific AI assistants pre-trained for financial services, healthcare, and enterprise workflows — deployable in days.", items: ["Domain pre-training", "RAG knowledge bases", "Multi-turn dialogue", "Role-based personas"] },
  { title: "Internal Knowledge Agents", description: "Enterprise search and knowledge retrieval agents that index internal documents, policies, and data — giving teams instant answers.", items: ["Document indexing", "Semantic search", "Policy Q&A", "Knowledge graph"] },
  { title: "Contextual Intelligence", description: "Real-time context enrichment that surfaces relevant insights, alerts, and recommendations at the moment of decision.", items: ["Context enrichment", "Real-time alerts", "Recommendation engine", "Signal fusion"] },
  { title: "Workflow Automation", description: "AI-orchestrated workflows that handle exceptions, route decisions, and learn from human feedback over time.", items: ["Exception handling", "Decision routing", "Human-in-the-loop", "Feedback learning"] },
  { title: "Enterprise Knowledge Platform", description: "Centralized knowledge management with version control, access policies, and continuous learning from enterprise interactions.", items: ["Knowledge versioning", "Access policies", "Continuous learning", "Audit logs"] },
  { title: "Model Registry & Governance", description: "Central registry for all AI models — tracking versions, performance, bias metrics, and compliance status across the enterprise.", items: ["Model versioning", "Performance tracking", "Bias monitoring", "Compliance status"] },
];

const caseStudies = [
  { client: "Major Insurance Company", title: "Claims Copilot", result: "LLM-powered claims copilot handles 60% of inquiries autonomously — cutting resolution time from 12 to 4.8 minutes.", tags: ["Copilots", "Workflow Automation"] },
  { client: "Tier-1 Bank", title: "Internal Knowledge Agent", result: "Enterprise knowledge agent serving 5,000+ employees with instant access to policies, procedures, and compliance docs — 80% query resolution rate.", tags: ["Knowledge Agent", "Contextual Intelligence"] },
  { client: "Healthcare Network", title: "Clinical Decision Support", result: "AI decision support platform improving diagnostic accuracy by 85% across 12 hospitals with full audit trail for regulatory compliance.", tags: ["Contextual Intelligence", "Model Governance"] },
];

export default function LumiaAI() {
  return (
    <>
      <HeroSimple
        eyebrow="Platforms / Lumia AI"
        headline="Intelligence layer for the enterprise"
        subheadline="An applied intelligence layer that powers copilots, internal assistants, contextual intelligence, workflow automation, and enterprise knowledge — embedded across journeys and operations."
      />

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-12">
          <StatGrid stats={[
            { value: "60%", label: "Avg. automation rate" },
            { value: "80%", label: "Knowledge query resolution" },
            { value: "85%", label: "Accuracy improvement" },
            { value: "Days", label: "Time to first copilot" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
          <SectionHeader eyebrow="// PLATFORM MODULES" headline="Every layer of enterprise AI" subheadline="From copilot to knowledge management — the full intelligence stack." />
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
          headline="Ready to embed intelligence into your enterprise?"
          subheadline="Schedule a demo to see Lumia AI in action — from copilot to knowledge management."
          primary={{ label: "Schedule a demo", href: "/contact" }}
          secondary={{ label: "All platforms →", href: "/platforms" }}
        />
      </section>
    </>
  );
}

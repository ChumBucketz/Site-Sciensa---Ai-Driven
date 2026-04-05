import { HeroSimple } from "@/components/sections/HeroSimple";
import { CategoryFilter } from "@/components/sections/CategoryFilter";
import { NewsletterForm } from "@/components/sections/NewsletterForm";

const articles = [
  { slug: "agentic-ai-enterprise", title: "Agentic AI in the enterprise: moving beyond copilots", category: "AI", type: "Article", date: "Mar 2025", read_time: "8 min", excerpt: "How leading enterprises are deploying autonomous AI agents that don't just assist — they execute. Architecture patterns, governance guardrails, and real-world lessons from production deployments." },
  { slug: "modernizing-core-banking", title: "The three patterns for modernizing core banking without stopping the engine", category: "Financial Services", type: "Whitepaper", date: "Feb 2025", read_time: "14 min", excerpt: "Strangler fig, event-driven decoupling, or parallel run? A practical guide to core modernization strategies for banks that can't afford downtime." },
  { slug: "platform-engineering-maturity", title: "Platform engineering maturity: from shared libraries to internal developer portals", category: "Platforms", type: "Article", date: "Feb 2025", read_time: "10 min", excerpt: "A maturity model for platform teams moving from ad-hoc tooling to fully self-service golden paths. Includes real metrics from teams we've helped scale." },
  { slug: "real-time-data-mesh", title: "Implementing data mesh in regulated industries", category: "Data", type: "Whitepaper", date: "Jan 2025", read_time: "12 min", excerpt: "Data mesh promises decentralized ownership, but what does that look like when compliance, lineage and auditability are non-negotiable? Lessons from financial services and healthcare." },
  { slug: "event-driven-architecture", title: "Event-driven architecture at scale: patterns that actually work", category: "Engineering", type: "Article", date: "Jan 2025", read_time: "9 min", excerpt: "Beyond Kafka basics — saga orchestration, outbox patterns, dead-letter queues, and the operational reality of running event-driven systems in production." },
  { slug: "ai-financial-services-2025", title: "State of AI in Brazilian financial services — 2025 outlook", category: "Financial Services", type: "Report", date: "Dec 2024", read_time: "16 min", excerpt: "Annual analysis of AI adoption across banking, payments, insurance and capital markets. Trends, budgets, talent gaps, and the initiatives generating real ROI." },
  { slug: "llm-governance-framework", title: "LLM governance for the enterprise: a practical framework", category: "AI", type: "Article", date: "Dec 2024", read_time: "11 min", excerpt: "Hallucination guardrails, prompt auditing, model selection criteria, and cost management. A no-hype framework for deploying LLMs responsibly at scale." },
  { slug: "cross-market-digital-transformation", title: "From financial services to everywhere: how deep engineering transfers across industries", category: "Cross-market", type: "Point of View", date: "Nov 2024", read_time: "7 min", excerpt: "The patterns that make financial services engineering hard — real-time, regulated, high-throughput — are the same patterns that define complexity in healthcare, energy and logistics." },
];

export default function Insights() {
  return (
    <>
      <HeroSimple
        eyebrow="Insights"
        headline="Thinking from the engineering floor"
        subheadline="Articles, whitepapers and reports on AI, platforms, data, engineering and digital transformation in complex industries."
      />

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <CategoryFilter
          categories={["All", "AI", "Financial Services", "Platforms", "Data", "Engineering", "Cross-market"]}
          articles={articles}
        />
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-xl">
            <h2 className="text-heading text-white mb-3">Stay ahead of the complexity curve</h2>
            <p className="text-[15px] text-white/60 mb-8 tracking-[0.01em]">
              Subscribe to our quarterly digest for original research on AI, platforms and enterprise engineering.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}

import { HeroSimple } from "@/components/sections/HeroSimple";
import { CTABanner } from "@/components/sections/CTABanner";
import { MonoLabel } from "@/components/ui/MonoLabel";

const capabilities = [
  { slug: "ai-engineering", label: "AI Engineering", headline: "Production AI systems, not science projects", description: "We design, build, and operate enterprise AI — from LLM platforms and RAG pipelines to agentic workflows and copilot experiences — integrated into your critical business systems.", subcapabilities: ["LLM platforms & orchestration", "RAG & enterprise knowledge", "Copilots & AI assistants", "Agentic workflows", "AI governance & guardrails", "Enterprise AI integration"] },
  { slug: "platform-engineering", label: "Platform Engineering", headline: "Architectures built for scale and resilience", description: "Microservices, event-driven architectures, platform modernization, and distributed systems — engineering the backbone of enterprise digital operations.", subcapabilities: ["Microservices architecture", "Event-driven systems", "Platform modernization", "Distributed systems", "Resilience & observability", "API gateway & service mesh"] },
  { slug: "data-ai", label: "Data & AI", headline: "Data platforms that power intelligent decisions", description: "From data pipelines and real-time analytics to feature stores and governance — we operationalize data as a strategic asset.", subcapabilities: ["Data platforms & lakehouses", "Real-time analytics", "Data pipelines & ETL", "Feature stores", "Data governance", "ML operationalization"] },
  { slug: "api-integration", label: "API & Integration Engineering", headline: "Connecting systems with precision", description: "Enterprise APIs, legacy integration, event-driven messaging, orchestration layers, and secure connectivity — unifying your technology ecosystem.", subcapabilities: ["Enterprise API design", "Legacy integration", "Events & messaging", "Workflow orchestration", "Secure connectivity", "API lifecycle management"] },
  { slug: "cloud-devsecops", label: "Cloud & DevSecOps", headline: "Secure, scalable, and operationally reliable", description: "Cloud foundations, CI/CD automation, security by design, infrastructure scalability, and operational reliability — engineering trust into every deployment.", subcapabilities: ["Cloud foundations & migration", "CI/CD pipelines", "Security by design", "Scalable infrastructure", "Site reliability engineering", "Cost optimization"] },
  { slug: "product-experience", label: "Product & Experience Engineering", headline: "Digital products that perform at enterprise scale", description: "Discovery for complex products, design systems, enterprise front-ends, digital journeys, and channel enablement — crafting experiences that serve business goals.", subcapabilities: ["Product discovery & strategy", "Design systems", "Enterprise front-ends", "Digital journeys", "Channel enablement", "Accessibility & performance"] },
];

export default function Capabilities() {
  return (
    <>
      <HeroSimple
        eyebrow="Capabilities"
        headline="Engineering depth across every layer"
        subheadline="Six core disciplines that cover the full technology stack — from infrastructure to experience — with the rigor of mission-critical systems."
      />

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <div key={cap.slug} className="el-card p-10 flex flex-col gap-5">
                <div>
                  <MonoLabel className="block mb-3">{cap.label}</MonoLabel>
                  <h2 className="text-xl font-light text-black mb-3 tracking-tight">{cap.headline}</h2>
                  <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{cap.description}</p>
                </div>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                  {cap.subcapabilities.map((sub) => (
                    <li key={sub} className="text-xs text-[#777169] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#777169] shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3 pb-6">
        <CTABanner
          headline="Need a specific capability?"
          subheadline="Our teams combine multiple disciplines to solve your most complex engineering challenges."
          primary={{ label: "Talk to our team", href: "/contact" }}
        />
      </section>
    </>
  );
}

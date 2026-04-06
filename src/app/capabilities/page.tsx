import { HeroSimple } from "@/components/sections/HeroSimple";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StatGrid } from "@/components/sections/StatGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const capabilities = [
  { slug: "ai-engineering", label: "AI Engineering", headline: "Production AI systems, not science projects", description: "We design, build, and operate enterprise AI — from LLM platforms and RAG pipelines to agentic workflows and copilot experiences — integrated into your critical business systems.", subcapabilities: ["LLM platforms & orchestration", "RAG & enterprise knowledge", "Copilots & AI assistants", "Agentic workflows", "AI governance & guardrails", "Enterprise AI integration"] },
  { slug: "platform-engineering", label: "Platform Engineering", headline: "Architectures built for scale and resilience", description: "Microservices, event-driven architectures, platform modernization, and distributed systems — engineering the backbone of enterprise digital operations.", subcapabilities: ["Microservices architecture", "Event-driven systems", "Platform modernization", "Distributed systems", "Resilience & observability", "API gateway & service mesh"] },
  { slug: "data-ai", label: "Data & AI", headline: "Data platforms that power intelligent decisions", description: "From data pipelines and real-time analytics to feature stores and governance — we operationalize data as a strategic asset.", subcapabilities: ["Data platforms & lakehouses", "Real-time analytics", "Data pipelines & ETL", "Feature stores", "Data governance", "ML operationalization"] },
  { slug: "api-integration", label: "API & Integration Engineering", headline: "Connecting systems with precision", description: "Enterprise APIs, legacy integration, event-driven messaging, orchestration layers, and secure connectivity — unifying your technology ecosystem.", subcapabilities: ["Enterprise API design", "Legacy integration", "Events & messaging", "Workflow orchestration", "Secure connectivity", "API lifecycle management"] },
  { slug: "cloud-devsecops", label: "Cloud & DevSecOps", headline: "Secure, scalable, and operationally reliable", description: "Cloud foundations, CI/CD automation, security by design, infrastructure scalability, and operational reliability — engineering trust into every deployment.", subcapabilities: ["Cloud foundations & migration", "CI/CD pipelines", "Security by design", "Scalable infrastructure", "Site reliability engineering", "Cost optimization"] },
  { slug: "product-experience", label: "Product & Experience Engineering", headline: "Digital products that perform at enterprise scale", description: "Discovery for complex products, design systems, enterprise front-ends, digital journeys, and channel enablement — crafting experiences that serve business goals.", subcapabilities: ["Product discovery & strategy", "Design systems", "Enterprise front-ends", "Digital journeys", "Channel enablement", "Accessibility & performance"] },
];

const pillars = [
  {
    title: "Full-stack engineering depth",
    description: "Six core disciplines covering every layer of the technology stack — from cloud infrastructure and security to AI systems and product experience. No capability gaps, no hand-offs to third parties mid-engagement.",
    stat: "6",
    statLabel: "Engineering disciplines",
    reverse: false,
    layers: [
      { label: "AI & Intelligence", color: "#22AEA4" },
      { label: "Product & Experience", color: "#5EB359" },
      { label: "Data & Analytics", color: "#22AEA4" },
      { label: "API & Integration", color: "#5EB359" },
      { label: "Platform Engineering", color: "#22AEA4" },
      { label: "Cloud & DevSecOps", color: "#5EB359" },
    ],
  },
  {
    title: "AI embedded at every layer",
    description: "Intelligence isn't a feature we bolt on — it's woven into every engagement. From LLM orchestration and RAG pipelines to intelligent workflows and ML-ops, we make AI production-ready from day one.",
    stat: "200+",
    statLabel: "AI models deployed in production",
    reverse: true,
    pipeline: ["Ingestion", "Embedding", "Retrieval", "Reasoning", "Guardrails", "Output"],
  },
  {
    title: "Enterprise-grade by design",
    description: "Every architecture decision is made against financial-services-grade standards: 99.99% uptime targets, compliance by default, security in every layer, and full observability from day one.",
    stat: "99.99%",
    statLabel: "Target platform uptime",
    reverse: false,
    checks: ["Zero-downtime deployments", "Security by design", "Compliance automation", "Full observability", "Disaster recovery", "Cost governance"],
  },
];

export default function Capabilities() {
  return (
    <>
      <HeroSimple
        eyebrow="Capabilities"
        headline="Engineering depth across every layer"
        subheadline="Six core disciplines that cover the full technology stack — from infrastructure to experience — with the rigor of mission-critical systems."
        video="https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486835/0_Technology_Futuristic_3840x2160_1_fydegq.mp4"
      />

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-12">
            <StatGrid stats={[
              { value: "6", label: "Core disciplines" },
              { value: "500+", label: "Engineers" },
              { value: "200+", label: "AI models deployed" },
              { value: "15+", label: "Years of delivery" },
            ]} />
          </div>
        </FadeIn>
      </section>

      {/* Approach pillars */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
            <SectionHeader eyebrow="// OUR APPROACH" headline="What makes our engineering different." />
            <div className="mt-12 flex flex-col gap-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className={`overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 py-[60px] border-b border-[#f0f0f0] last:border-0 ${pillar.reverse ? "lg:[&>*:first-child]:order-last" : ""}`}
                >
                  {/* Visual side */}
                  <div className="relative min-h-[240px] rounded-2xl overflow-hidden bg-white border border-[#f0f0f0] flex flex-col">
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(34,174,164,0.10) 0%, rgba(94,179,89,0.06) 40%, transparent 70%)" }} />
                    <div className="flex items-center gap-1.5 px-4 py-3 bg-[#fafafa] border-b border-[#f0f0f0] shrink-0">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                      <span className="ml-3 text-[11px] text-[#777169] font-mono">
                        {pillar.layers ? "stack.layers" : pillar.pipeline ? "ai.pipeline" : "sre.checks"}
                      </span>
                    </div>
                    <div className="flex-1 p-5 flex flex-col justify-center gap-3">
                      {pillar.layers && pillar.layers.map((layer, i) => (
                        <div key={layer.label} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full shrink-0" style={{ background: layer.color }} />
                          <div className="flex-1 h-7 rounded-[6px] flex items-center px-3" style={{ background: `${layer.color}14`, border: `1px solid ${layer.color}22` }}>
                            <span className="text-[11px] font-medium" style={{ color: layer.color }}>{layer.label}</span>
                          </div>
                          <span className="text-[10px] text-[#777169] font-mono w-4 text-right">{i + 1}</span>
                        </div>
                      ))}
                      {pillar.pipeline && (
                        <div className="flex flex-col gap-2">
                          {pillar.pipeline.map((step, i) => (
                            <div key={step} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-[#f0f0f0] flex items-center justify-center shrink-0">
                                <span className="text-[9px] text-[#777169] font-mono">{i + 1}</span>
                              </div>
                              <div className="flex-1 h-7 rounded-[6px] bg-[#f5f5f5] border border-[#e5e5e5] flex items-center px-3">
                                <span className="text-[11px] text-[#4e4e4e]">{step}</span>
                              </div>
                              {i < pillar.pipeline!.length - 1 && (
                                <span className="text-[10px] text-[#22AEA4] font-mono">→</span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      {pillar.checks && pillar.checks.map((check) => (
                        <div key={check} className="flex items-center gap-3 h-7">
                          <div className="w-4 h-4 rounded-full bg-[#22AEA4] flex items-center justify-center shrink-0">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                          <span className="text-[12px] text-[#4e4e4e]">{check}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Text side */}
                  <div className="p-10 flex flex-col justify-center gap-6">
                    <div>
                      <h3 className="text-xl font-light text-black mb-3 tracking-tight">{pillar.title}</h3>
                      <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{pillar.description}</p>
                    </div>
                    <div className="pt-5 border-t border-[#e5e5e5]">
                      <span className="text-3xl font-light text-black tracking-tight">{pillar.stat}</span>
                      <span className="block text-label text-[#777169] mt-1">{pillar.statLabel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Capability cards */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
            <SectionHeader eyebrow="// ALL CAPABILITIES" headline="Six disciplines. One team." />
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
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
        </FadeIn>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3 pb-6">
        <FadeIn>
          <CTABanner
            headline="Need a specific capability?"
            subheadline="Our teams combine multiple disciplines to solve your most complex engineering challenges."
            primary={{ label: "Talk to our team", href: "/contact" }}
          />
        </FadeIn>
      </section>
    </>
  );
}

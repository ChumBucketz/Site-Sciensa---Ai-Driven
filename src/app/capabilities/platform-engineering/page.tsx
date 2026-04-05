import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const capabilities = [
  { title: "Microservices Architecture", description: "Domain-driven decomposition, bounded contexts, and service mesh patterns for enterprise-scale distributed systems.", items: ["Domain decomposition", "Service mesh (Istio)", "API contracts", "Circuit breakers"] },
  { title: "Event-Driven Systems", description: "Kafka-powered event streaming, CQRS, and event sourcing for real-time, loosely coupled architectures.", items: ["Event streaming", "CQRS & event sourcing", "Saga orchestration", "Dead-letter queues"] },
  { title: "Platform Modernization", description: "Strangler fig migration, progressive modernization, and coexistence patterns for legacy transformation.", items: ["Strangler fig pattern", "Dual-run validation", "Legacy wrapping", "Zero-downtime migration"] },
  { title: "Resilience & Observability", description: "SLO-driven reliability engineering, distributed tracing, and intelligent alerting for production platforms.", items: ["SLO/SLA management", "Distributed tracing", "Chaos engineering", "Incident response"] },
  { title: "Internal Developer Platform", description: "Golden paths, self-service templates, and developer portals that accelerate engineering at scale.", items: ["Backstage portals", "Golden paths", "Service templates", "Developer experience"] },
  { title: "API Gateway & Service Mesh", description: "Secure API management, rate limiting, and intelligent traffic management across microservices ecosystems.", items: ["API gateway (Kong/Apigee)", "mTLS & zero trust", "Rate limiting", "Traffic management"] },
];

const caseStudies = [
  { client: "Tier-1 Brazilian Bank", title: "Core Platform Decomposition", result: "Decomposed 20-year monolith into 80+ microservices while maintaining 99.99% uptime across 12M active accounts.", tags: ["Microservices", "Modernization"] },
  { client: "Insurance Holding", title: "Internal Developer Platform", result: "Built IDP with golden paths and self-service for 400+ engineers, cutting new service onboarding from 2 weeks to 2 hours.", tags: ["IDP", "Developer Experience"] },
  { client: "Payments Fintech", title: "Event-Driven Payments Core", result: "Kafka-powered payments platform processing 2.5M daily transactions with < 50ms p99 latency.", tags: ["Event-Driven", "Real-time"] },
];

export default function PlatformEngineering() {
  return (
    <>
      <HeroSimple
        eyebrow="Capabilities / Platform Engineering"
        headline="Architectures built for scale and resilience"
        subheadline="Microservices, event-driven architectures, platform modernization, and distributed systems — engineering the backbone of enterprise digital operations."
      />

      <section className="border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <StatGrid stats={[
            { value: "80+", label: "Platforms modernized" },
            { value: "99.99%", label: "Uptime delivered" },
            { value: "10×", label: "Deployment frequency increase" },
            { value: "60%", label: "Reduction in MTTR" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader eyebrow="// WHAT WE BUILD" headline="Platform capabilities that scale" subheadline="From legacy monolith to cloud-native platform — without stopping the business." />
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
        headline="Ready to modernize your platform?"
        subheadline="Talk to our platform engineering team about your architecture challenges."
        primary={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}

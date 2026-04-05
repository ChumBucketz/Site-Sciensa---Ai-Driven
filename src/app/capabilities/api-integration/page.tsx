import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const capabilities = [
  { title: "Enterprise API Design", description: "RESTful and GraphQL API design, versioning strategies, and developer experience optimization for external and internal consumers.", items: ["REST & GraphQL", "API versioning", "OpenAPI specs", "Developer portals"] },
  { title: "Legacy Integration", description: "Adapter patterns, anti-corruption layers, and strangler fig approaches to connect modern systems with legacy mainframes and ERPs.", items: ["Mainframe integration", "ERP connectors", "Anti-corruption layer", "Data transformation"] },
  { title: "Events & Messaging", description: "Kafka, RabbitMQ, and AWS SQS/SNS integration patterns for reliable, scalable asynchronous communication across systems.", items: ["Kafka streaming", "Message brokers", "Pub/sub patterns", "Outbox pattern"] },
  { title: "Workflow Orchestration", description: "Business process automation using Temporal, Camunda, and custom orchestration engines for complex multi-step workflows.", items: ["Temporal workflows", "Camunda BPM", "Saga pattern", "Compensating transactions"] },
  { title: "Secure Connectivity", description: "OAuth 2.0, mTLS, zero-trust networking, and API security hardening for regulated industries requiring FAPI and PCI-DSS compliance.", items: ["OAuth 2.0 / OIDC", "mTLS certificates", "API security", "FAPI compliance"] },
  { title: "API Lifecycle Management", description: "API gateway configuration, rate limiting, analytics, monetization, and deprecation strategies for platform-scale API programs.", items: ["Kong / Apigee", "Rate limiting", "API analytics", "Lifecycle governance"] },
];

const caseStudies = [
  { client: "Open Finance Leader", title: "Open Banking API Platform", result: "Designed and implemented FAPI-compliant Open Banking platform handling 50M+ API calls/month across 30+ ecosystem partners.", tags: ["Enterprise API", "Open Finance"] },
  { client: "Retail Conglomerate", title: "ERP Integration Hub", result: "Built integration hub connecting 8 legacy ERPs to modern e-commerce and supply chain systems, eliminating 200+ point-to-point integrations.", tags: ["Legacy Integration", "Orchestration"] },
  { client: "Fintech Scale-up", title: "Real-time Payments Orchestration", result: "Kafka-powered orchestration layer routing 1M+ daily transactions across PIX, TED, and card rails with full idempotency guarantees.", tags: ["Events & Messaging", "Payments"] },
];

export default function APIIntegration() {
  return (
    <>
      <HeroSimple
        eyebrow="Capabilities / API & Integration Engineering"
        headline="Connecting systems with precision"
        subheadline="Enterprise APIs, legacy integration, event-driven messaging, orchestration layers, and secure connectivity — unifying your technology ecosystem."
      />

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-12">
          <StatGrid stats={[
            { value: "500M+", label: "API calls managed/month" },
            { value: "99.99%", label: "Integration uptime" },
            { value: "80+", label: "Systems integrated" },
            { value: "40%", label: "Faster integration delivery" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
          <SectionHeader eyebrow="// WHAT WE BUILD" headline="Integration capabilities that connect" subheadline="From legacy mainframes to modern microservices — every system connected." />
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
          headline="Ready to unify your technology ecosystem?"
          subheadline="Talk to our integration engineering team about your connectivity challenges."
          primary={{ label: "Start a conversation", href: "/contact" }}
        />
      </section>
    </>
  );
}

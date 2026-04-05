import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StatGrid } from "@/components/sections/StatGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { CardGrid, Card } from "@/components/sections/CardGrid";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        eyebrow="// AI-NATIVE ENGINEERING"
        headlines={[
          "We engineer intelligence into complex systems.",
          "AI-native delivery, built for output.",
          "From legacy to leading-edge tech.",
        ]}
        subheadline="AI-native engineering, cross-market execution, and proprietary platforms for the industries that can't afford to fail."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "Explore our capabilities", href: "/capabilities" }}
      />

      {/* Stats */}
      <section className="border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-label text-[#777169] mb-10">
            Trusted by leaders in complex industries
          </p>
          <StatGrid
            stats={[
              { value: "200+", label: "Engineers" },
              { value: "15+", label: "Years" },
              { value: "5", label: "Verticals" },
              { value: "99.9%", label: "Uptime" },
            ]}
          />
        </div>
      </section>

      {/* Why Sciensa */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader eyebrow="// WHY SCIENSA" headline="Forget technology services as you know them." />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Intelligence Layer",
              description: "Every solution ships with an embedded AI layer — from LLM orchestration to predictive pipelines — because intelligence shouldn't be an afterthought.",
              stat: "200+",
              statLabel: "AI models deployed",
            },
            {
              title: "Domain Expertise",
              description: "15+ years across financial services, healthcare, energy, retail, and telecom. We speak your industry's language and know its regulations.",
              stat: "15+",
              statLabel: "years of delivery",
            },
            {
              title: "AI-Native Delivery",
              description: "Cross-functional squads with AI engineers, data scientists, and domain specialists — not generic outsourcing, but purpose-built teams.",
              stat: "40+",
              statLabel: "active squads",
            },
          ].map((pillar) => (
            <div key={pillar.title} className="el-card-lg p-8 flex flex-col gap-6">
              <div>
                <h3 className="text-base font-medium text-black mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{pillar.description}</p>
              </div>
              <div className="mt-auto pt-5 border-t border-[#e5e5e5]">
                <span className="text-2xl font-light text-black tracking-tight">{pillar.stat}</span>
                <span className="block text-label text-[#777169] mt-1">{pillar.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Studios */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeader eyebrow="// INDUSTRY STUDIOS" headline="Industry Studios" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Financial Services", description: "Core banking, payments, credit platforms, open finance, and regulatory compliance at scale." },
              { title: "Healthcare & Life Sciences", description: "Clinical data intelligence, telemedicine, and LGPD/HIPAA-compliant AI solutions." },
              { title: "Energy & Mining", description: "Grid optimization, predictive maintenance, ESG analytics, and operational intelligence." },
              { title: "Retail & E-commerce", description: "Omnichannel platforms, recommendation engines, and marketplace orchestration." },
              { title: "Telecom", description: "Network analytics, billing modernization, churn prediction, and digital experience." },
            ].map((industry) => (
              <div key={industry.title} className="el-card p-8">
                <h3 className="text-base font-medium text-black mb-3 tracking-tight">{industry.title}</h3>
                <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeader
            eyebrow="// CAPABILITIES"
            headline="Full-spectrum engineering for the AI era."
            subheadline="From AI models to cloud infrastructure — every capability your enterprise needs."
          />
          <Link href="/capabilities" className="shrink-0 text-[15px] font-medium text-black hover:text-[#4e4e4e] transition-colors">
            All capabilities →
          </Link>
        </div>
        <CardGrid cols={3}>
          {[
            { title: "AI Engineering", description: "Production-grade AI systems: LLM orchestration, computer vision, predictive models, and intelligent automation.", techs: ["PyTorch", "LangChain", "Hugging Face"] },
            { title: "Data Intelligence", description: "Modern data platforms, real-time pipelines, lakehouse architectures, and self-service analytics.", techs: ["Spark", "Kafka", "Databricks"] },
            { title: "Platform Engineering", description: "Cloud-native platforms, IDP toolchains, and golden paths for developer experience at scale.", techs: ["Kubernetes", "Terraform", "ArgoCD"] },
            { title: "Product & Experience Engineering", description: "End-to-end product development — from discovery to delivery — with cross-functional squads.", techs: ["React", "TypeScript", "Next.js"] },
            { title: "API & Integration Engineering", description: "API-first strategies, event-driven microservices, domain decomposition, and orchestration layers.", techs: ["Java", "Go", "GraphQL"] },
            { title: "Cloud & DevSecOps", description: "Multi-cloud architectures, zero-trust security, FinOps, and regulatory compliance.", techs: ["AWS", "Azure", "GCP"] },
          ].map((cap) => (
            <Card key={cap.title}>
              <h3 className="text-base font-medium text-black mb-3 tracking-tight">{cap.title}</h3>
              <p className="text-[15px] text-[#4e4e4e] leading-relaxed mb-5 tracking-[0.01em]">{cap.description}</p>
              <div className="flex flex-wrap gap-2">
                {cap.techs.map((t) => (
                  <Badge key={t} variant="default">{t}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </CardGrid>
      </section>

      {/* Platform Spotlight */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionHeader eyebrow="// PLATFORMS" headline="Proprietary platforms that accelerate delivery." />
            <Link href="/platforms" className="shrink-0 text-[15px] font-medium text-black hover:text-[#4e4e4e] transition-colors">
              All platforms →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Lumia AI", tag: "AI/ML", description: "AI/ML experimentation platform with model registry, automated pipelines, and intelligent observability.", features: ["Model Registry", "AutoML Pipelines", "AI Observability"] },
              { name: "Amplify", tag: "ACCELERATION", description: "Digital acceleration platform for rapid delivery — from MVP to enterprise-grade products.", features: ["MVP Launchers", "Squad Templates", "Quality Gates"] },
              { name: "Nexus", tag: "INTEGRATION", description: "Integration & orchestration platform connecting APIs, events, and data flows across ecosystems.", features: ["API Gateway", "Event Mesh", "Flow Designer"] },
            ].map((platform) => (
              <div key={platform.name} className="el-card-lg p-8 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium text-black tracking-tight">{platform.name}</h3>
                  <Badge variant="warm">{platform.tag}</Badge>
                </div>
                <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{platform.description}</p>
                <ul className="space-y-2 mt-auto">
                  {platform.features.map((f) => (
                    <li key={f} className="text-xs text-[#777169] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#777169] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reinvention Stories */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeader eyebrow="// REINVENTION STORIES" headline="Outcomes that speak for themselves." />
          <Link href="/case-studies" className="shrink-0 text-[15px] font-medium text-black hover:text-[#4e4e4e] transition-colors">
            View all case studies →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              industry: "Financial Services",
              title: "Re-architecting a Tier-1 bank's core lending platform",
              metrics: [{ value: "40%", label: "Faster time-to-market" }, { value: "99.99%", label: "Platform uptime" }, { value: "3×", label: "Throughput improvement" }],
            },
            {
              industry: "Healthcare",
              title: "Building an AI-powered clinical decision support system",
              metrics: [{ value: "85%", label: "Diagnostic accuracy" }, { value: "60%", label: "Reduced report time" }, { value: "12", label: "Hospitals deployed" }],
            },
            {
              industry: "Energy & Mining",
              title: "Predictive maintenance platform for critical grid infrastructure",
              metrics: [{ value: "35%", label: "Fewer unplanned outages" }, { value: "2.5×", label: "ROI in year one" }, { value: "50K+", label: "Assets monitored" }],
            },
          ].map((cs) => (
            <div key={cs.title} className="el-card p-8 flex flex-col gap-5">
              <Badge variant="warm">{cs.industry}</Badge>
              <h3 className="text-base font-medium leading-snug text-black tracking-tight">{cs.title}</h3>
              <div className="grid grid-cols-3 gap-3 mt-auto pt-5 border-t border-[#e5e5e5]">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="text-xl font-light text-black tracking-tight block">{m.value}</span>
                    <span className="text-xs text-[#777169] leading-snug">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insights Preview */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionHeader eyebrow="// INSIGHTS" headline="Perspectives from the field." />
            <Link href="/insights" className="shrink-0 text-[15px] font-medium text-black hover:text-[#4e4e4e] transition-colors">
              All articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tag: "AI", title: "Why RAG Alone Isn't Enough for Enterprise AI", excerpt: "Moving beyond retrieval-augmented generation toward agent-based workflows that actually ship.", date: "Mar 2026", readTime: "6 min read" },
              { tag: "Engineering", title: "The Real Cost of Technical Debt in Financial Systems", excerpt: "A quantitative framework for measuring and prioritizing tech debt in regulated environments.", date: "Feb 2026", readTime: "8 min read" },
              { tag: "Cloud", title: "Multi-Cloud Is Not a Strategy — It's a Capability", excerpt: "How to build genuine portability without the overhead of lowest-common-denominator abstractions.", date: "Jan 2026", readTime: "5 min read" },
            ].map((article) => (
              <div key={article.title} className="el-card p-8 flex flex-col gap-4">
                <Badge variant="warm">{article.tag}</Badge>
                <h3 className="text-base font-medium leading-snug text-black tracking-tight">{article.title}</h3>
                <p className="text-[15px] text-[#4e4e4e] leading-relaxed flex-1 tracking-[0.01em]">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-[#777169]">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        eyebrow="// LET'S BUILD"
        headline="Ready to engineer your next breakthrough?"
        subheadline="From dedicated squads to accelerator programs and SaaS platforms — choose the engagement model that fits your ambition."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "Learn about us →", href: "/about" }}
      >
        <blockquote className="border-l-2 border-white/20 pl-6 mt-2">
          <p className="text-white/60 text-[15px] leading-relaxed italic max-w-xl">
            "Sciensa delivered what our internal teams couldn't in 12 months — in under 90 days. Their AI-native approach changed how we think about engineering."
          </p>
          <cite className="block mt-3 text-xs text-white/30 tracking-wide not-italic">
            — CTO, Fortune 500 Financial Services
          </cite>
        </blockquote>
      </CTABanner>
    </>
  );
}

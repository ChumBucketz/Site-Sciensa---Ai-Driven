import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const modules = [
  { title: "Legacy Assessment & Strategy", description: "Architectural audit, technical debt quantification, and modernization roadmap definition — with risk-adjusted migration scenarios.", items: ["Architecture audit", "Tech debt quantification", "Migration roadmap", "Risk assessment"] },
  { title: "Strangler Fig Pattern", description: "Proven incremental modernization using strangler fig — progressively replacing legacy functionality without disrupting operations.", items: ["Incremental replacement", "Traffic routing", "Feature parity mapping", "Rollback safety"] },
  { title: "Data Migration & Sync", description: "Zero-downtime data migration, dual-write patterns, and reconciliation frameworks for moving data from legacy to modern systems.", items: ["Zero-downtime migration", "Dual-write patterns", "Data reconciliation", "Consistency guarantees"] },
  { title: "API Wrapping & Adaptation", description: "Anti-corruption layers, legacy API facades, and translation services that let modern systems consume legacy capabilities without coupling.", items: ["Anti-corruption layers", "API facades", "Data transformation", "Protocol translation"] },
  { title: "Incremental Modernization", description: "Parallel-run validation, canary releases, and progressive cutover strategies that minimize risk across large-scale modernization programs.", items: ["Parallel-run validation", "Canary releases", "Progressive cutover", "Rollback automation"] },
];

const caseStudies = [
  { client: "Tier-1 Brazilian Bank", title: "Core Banking Decomposition", result: "70% reduction in deployment cycles while maintaining 99.99% uptime during migration of 12M+ accounts from legacy COBOL core.", tags: ["Strangler Fig", "Data Migration"] },
  { client: "Insurance Holding", title: "Policy Management Modernization", result: "Migrated 30-year-old policy management system to event-driven microservices in 18 months with zero data loss across 8M policies.", tags: ["Legacy Assessment", "Incremental Modernization"] },
  { client: "Telecom Operator", title: "BSS Platform Replacement", result: "Replaced monolithic BSS with cloud-native platform using API wrapping for legacy integration — 50% faster order-to-activation.", tags: ["API Wrapping", "Incremental Modernization"] },
];

export default function CoreModernization() {
  return (
    <>
      <HeroSimple
        eyebrow="Solutions / Core Modernization"
        headline="From legacy constraints to modern architectures"
        subheadline="Strangler patterns, data migration, API wrapping, and incremental modernization — transforming monolithic core systems without business disruption."
      />

      <section className="border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <StatGrid stats={[
            { value: "20+", label: "Core systems modernized" },
            { value: "0", label: "Data loss incidents" },
            { value: "70%", label: "Faster deployments post-migration" },
            { value: "99.99%", label: "Uptime during migration" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader eyebrow="// BUILDING BLOCKS" headline="What we deliver" subheadline="Proven patterns for modernizing systems that can't afford to stop." />
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
        headline="Ready to escape your legacy constraints?"
        subheadline="Talk to our modernization team about your core system challenges and migration roadmap."
        primary={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}

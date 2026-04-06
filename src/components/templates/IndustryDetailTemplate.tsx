import { HeroSimple } from "@/components/sections/HeroSimple";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StatGrid } from "@/components/sections/StatGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { FadeIn } from "@/components/ui/FadeIn";

export interface IndustryDetailData {
  eyebrow: string;
  headline: string;
  subheadline: string;
  video: string;
  stats: { value: string; label: string }[];
  approach: {
    sectionLabel: string;
    sectionHeadline: string;
    rows: {
      title: string;
      description: string;
      stat: string;
      statLabel: string;
      reverse: boolean;
      items: string[];
    }[];
  };
  capabilities: {
    sectionLabel: string;
    sectionHeadline: string;
    sectionSubheadline?: string;
    items: {
      title: string;
      description: string;
      details: string[];
    }[];
  };
  caseStudies: {
    client: string;
    title: string;
    result: string;
    tags: string[];
  }[];
  techStack?: {
    category: string;
    items: string[];
  }[];
  cta: {
    headline: string;
    subheadline: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
}

function ApproachVisual({ items }: { items: string[] }) {
  return (
    <div className="relative min-h-[220px] rounded-2xl overflow-hidden bg-white border border-[#f0f0f0] flex flex-col">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(34,174,164,0.10) 0%, transparent 70%)" }} />
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#fafafa] border-b border-[#f0f0f0] shrink-0">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-[#777169] font-mono">industry.approach</span>
      </div>
      <div className="flex-1 p-5 flex flex-col gap-2.5 justify-center">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 h-8 rounded-[6px] bg-[#f5f5f5] border border-[#e5e5e5] px-3">
            <div className="w-4 h-4 rounded-full bg-[#22AEA4] flex items-center justify-center shrink-0">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[12px] text-[#4e4e4e]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IndustryDetailTemplate({ data }: { data: IndustryDetailData }) {
  return (
    <>
      <HeroSimple
        eyebrow={data.eyebrow}
        headline={data.headline}
        subheadline={data.subheadline}
        video={data.video}
      />

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-12">
            <StatGrid stats={data.stats} />
          </div>
        </FadeIn>
      </section>

      {/* Approach alternating rows */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
            <SectionHeader eyebrow={data.approach.sectionLabel} headline={data.approach.sectionHeadline} />
            <div className="mt-12 flex flex-col gap-0">
              {data.approach.rows.map((row) => (
                <div
                  key={row.title}
                  className={`overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 py-[60px] border-b border-[#f0f0f0] last:border-0 ${row.reverse ? "lg:[&>*:first-child]:order-last" : ""}`}
                >
                  <ApproachVisual items={row.items} />
                  <div className="p-10 flex flex-col justify-center gap-6">
                    <div>
                      <h3 className="text-xl font-light text-black mb-3 tracking-tight">{row.title}</h3>
                      <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{row.description}</p>
                    </div>
                    <div className="pt-5 border-t border-[#e5e5e5]">
                      <span className="text-3xl font-light text-black tracking-tight">{row.stat}</span>
                      <span className="block text-label text-[#777169] mt-1">{row.statLabel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
            <SectionHeader
              eyebrow={data.capabilities.sectionLabel}
              headline={data.capabilities.sectionHeadline}
              subheadline={data.capabilities.sectionSubheadline}
            />
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
              {data.capabilities.items.map((cap) => (
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
        </FadeIn>
      </section>

      {/* Case studies */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
            <SectionHeader eyebrow="// PROOF POINTS" headline="Results that compound" />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.caseStudies.map((cs) => (
                <div key={cs.title} className="el-card p-8 flex flex-col gap-4">
                  <p className="text-xs text-[#777169] tracking-[0.01em]">{cs.client}</p>
                  <h3 className="text-base font-medium text-black tracking-tight">{cs.title}</h3>
                  <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em] flex-1">{cs.result}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cs.tags.map((tag) => <Badge key={tag} variant="brand">{tag}</Badge>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Tech stack (optional) */}
      {data.techStack && data.techStack.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
          <FadeIn>
            <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
              <SectionHeader eyebrow="// TECHNOLOGY STACK" headline="Battle-tested tooling" />
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.techStack.map((group) => (
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
          </FadeIn>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3 pb-6">
        <FadeIn>
          <CTABanner
            headline={data.cta.headline}
            subheadline={data.cta.subheadline}
            primary={data.cta.primary}
            secondary={data.cta.secondary}
          />
        </FadeIn>
      </section>
    </>
  );
}

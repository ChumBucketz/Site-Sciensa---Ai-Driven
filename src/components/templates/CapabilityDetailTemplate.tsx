import { CountUp } from "@/components/ui/CountUp";
import { HeroSplit } from "@/components/sections/HeroSplit";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

export interface CapabilityDetailData {
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
  modules: {
    sectionLabel: string;
    sectionHeadline: string;
    sectionSubheadline?: string;
    items: {
      title: string;
      description: string;
      tags: string[];
    }[];
  };
  caseStudies: {
    client: string;
    title: string;
    result: string;
    tags: string[];
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
        <span className="ml-3 text-[11px] text-[#717171] font-mono">approach.details</span>
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

export function CapabilityDetailTemplate({ data }: { data: CapabilityDetailData }) {
  return (
    <>
      <HeroSplit
        eyebrow={data.eyebrow}
        headline={data.headline}
        subheadline={data.subheadline}
        stats={data.stats}
        items={data.approach.rows[0]?.items ?? []}
        video={data.video}
      />

      {/* Approach alternating rows */}
      <section className="max-w-[1336px] mx-auto px-4 3xl:px-0 py-3">
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
                      <CountUp value={row.stat} className="text-3xl font-light text-black tracking-tight" />
                      <span className="block text-label text-[#717171] mt-1">{row.statLabel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Module cards */}
      <section className="max-w-[1336px] mx-auto px-4 3xl:px-0 py-3">
        <FadeIn>
          <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
            <SectionHeader
              eyebrow={data.modules.sectionLabel}
              headline={data.modules.sectionHeadline}
              subheadline={data.modules.sectionSubheadline}
            />
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
              {data.modules.items.map((mod) => (
                <div key={mod.title} className="el-card p-8 flex flex-col gap-4">
                  <div>
                    <h3 className="text-base font-medium text-black mb-2 tracking-tight">{mod.title}</h3>
                    <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{mod.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {mod.tags.map((tag) => <Badge key={tag} variant="default">{tag}</Badge>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="max-w-[1336px] mx-auto px-4 3xl:px-0 py-3 pb-6">
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

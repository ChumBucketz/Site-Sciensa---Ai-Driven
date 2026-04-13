import Link from "next/link";
import { getHomeInsights, getCoverUrl, getFirstTag, getReadingTime, type StrapiInsight } from "@/lib/strapi";
import { SectionHeader } from "@/components/sections/SectionHeader";

function InsightCard({ insight }: { insight: StrapiInsight }) {
  const cover = getCoverUrl(insight);
  const readTime = getReadingTime(insight.markdown);
  const tag = getFirstTag(insight);
  const date = new Date(insight.publishedAt).toLocaleDateString("en-US", {
    month: "short", year: "numeric",
  });

  return (
    <Link href={`/insights/${insight.documentId}`} className="group el-card overflow-hidden flex flex-col">
      <div className="w-full h-44 bg-[#f5f5f5] overflow-hidden shrink-0">
        {cover ? (
          <img src={cover} alt={insight.titulo_carrossel} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#22AEA4]/10 to-[#5EB359]/10" />
        )}
      </div>
      <div className="p-6 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-2">
          {tag && (
            <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#22AEA4] bg-[#22AEA4]/10 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          )}
          <span className="text-[11px] text-[#717171]">{date} · {readTime}</span>
        </div>
        <h3 className="text-base font-medium text-black tracking-tight leading-snug group-hover:text-[#22AEA4] transition-colors line-clamp-2">
          {insight.titulo_carrossel}
        </h3>
        <p className="text-[13px] text-[#4e4e4e] leading-relaxed line-clamp-2 flex-1">
          {insight.descricao_carrossel}
        </p>
        {insight.author?.nome && (
          <div className="pt-3 border-t border-[#f0f0f0] flex items-center gap-2 mt-auto">
            <div className="w-6 h-6 rounded-full bg-[#e5e5e5] flex items-center justify-center shrink-0">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
            <p className="text-[12px] text-[#717171]">{insight.author.nome}</p>
          </div>
        )}
      </div>
    </Link>
  );
}

export async function InsightsSection() {
  const insights = await getHomeInsights();
  if (insights.length === 0) return null;

  return (
    <section className="max-w-[1336px] mx-auto px-4 lg:px-0 py-3">
      <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
        <div className="flex items-end justify-between gap-6 mb-10">
          <SectionHeader eyebrow="// INSIGHTS" headline="Thinking from the engineering floor." />
          <Link href="/insights" className="shrink-0 text-[15px] font-medium text-black hover:text-[#4e4e4e] transition-colors">
            All articles →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {insights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </div>
    </section>
  );
}

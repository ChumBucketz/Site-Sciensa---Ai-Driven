"use client";

import { useState } from "react";
import Link from "next/link";
import { getCoverFromMarkdown, getReadingTime, type StrapiInsight } from "@/lib/strapi";

function InsightCard({ insight }: { insight: StrapiInsight }) {
  const cover = getCoverFromMarkdown(insight.markdown);
  const readTime = getReadingTime(insight.markdown);
  const date = new Date(insight.publishedAt).toLocaleDateString("en-US", {
    month: "short", year: "numeric",
  });

  return (
    <Link href={`/insights/${insight.id}`} className="group el-card overflow-hidden flex flex-col">
      <div className="w-full h-48 bg-[#f5f5f5] overflow-hidden shrink-0">
        {cover ? (
          <img src={cover} alt={insight.titulo_carrossel} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#22AEA4]/10 to-[#5EB359]/10" />
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2">
          {insight.tag && (
            <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#22AEA4] bg-[#22AEA4]/10 px-2 py-0.5 rounded-full">
              {insight.tag}
            </span>
          )}
          <span className="text-[11px] text-[#717171]">{date} · {readTime}</span>
        </div>
        <h3 className="text-base font-medium text-black tracking-tight leading-snug group-hover:text-[#22AEA4] transition-colors">
          {insight.titulo_carrossel}
        </h3>
        <p className="text-[14px] text-[#4e4e4e] leading-relaxed tracking-[0.01em] flex-1 line-clamp-3">
          {insight.descricao_carrossel}
        </p>
        {insight.autor_nome && (
          <div className="pt-3 border-t border-[#f0f0f0] flex items-center gap-2.5 mt-auto">
            {insight.autor_picture?.url ? (
              <img src={insight.autor_picture.url} alt={insight.autor_nome} className="w-7 h-7 rounded-full object-cover grayscale" />
            ) : (
              <div className="w-7 h-7 rounded-full bg-[#e5e5e5]" />
            )}
            <div>
              <p className="text-[12px] font-medium text-black">{insight.autor_nome}</p>
              {insight.autor_cargo && <p className="text-[11px] text-[#717171]">{insight.autor_cargo}</p>}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

interface InsightsGridProps {
  insights: StrapiInsight[];
  tags: string[];
}

export function InsightsGrid({ insights, tags }: InsightsGridProps) {
  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = insights.filter((i) => {
    const matchesTag = activeTag === "All" || i.tag === activeTag;
    const matchesQuery =
      !query ||
      i.titulo_carrossel.toLowerCase().includes(query.toLowerCase()) ||
      i.descricao_carrossel.toLowerCase().includes(query.toLowerCase());
    return matchesTag && matchesQuery;
  });

  return (
    <section className="max-w-[1336px] mx-auto px-4 lg:px-0 pt-20 pb-3">
      <div className="bg-white rounded-2xl px-5 md:px-10 py-12">

        {/* Header + search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#717171] mb-1">// INSIGHTS</p>
            <h1 className="text-2xl font-light text-black tracking-tight">Thinking from the engineering floor</h1>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full border border-[#e5e5e5] bg-[#fafafa] text-[14px] text-black placeholder:text-[#aaa] focus:outline-none focus:border-[#22AEA4] focus:ring-2 focus:ring-[#22AEA4]/20 transition-all"
            />
          </div>
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", ...tags].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all border ${
                activeTag === tag
                  ? "bg-black text-white border-black"
                  : "bg-white text-[#717171] border-[#e5e5e5] hover:border-black hover:text-black"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-[15px] text-[#717171] text-center py-20">No articles found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

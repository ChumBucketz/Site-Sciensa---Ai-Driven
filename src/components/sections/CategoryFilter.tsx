"use client";

import { useState } from "react";

interface Article {
  slug: string;
  title: string;
  category: string;
  type: string;
  date: string;
  read_time: string;
  excerpt: string;
}

interface CategoryFilterProps {
  categories: string[];
  articles: Article[];
}

export function CategoryFilter({ categories, articles }: CategoryFilterProps) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <div>
      {/* Pill tabs — hover: #f0efed (AAA with black text: 20+:1) */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-[9999px] text-[13px] font-medium transition-colors ${
              active === cat
                ? "bg-black text-white hover:bg-[#111111]"
                : "bg-[#f5f5f5] text-[#4e4e4e] hover:bg-[#e8e3de] hover:text-black shadow-[rgba(0,0,0,0.06)_0px_0px_0px_1px]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((article) => (
          <article key={article.slug} className="el-card bg-white p-7 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-widest bg-[rgba(245,242,239,0.95)] text-[#4e4e4e] px-2.5 py-1 rounded-[4px] shadow-[rgba(0,0,0,0.06)_0px_0px_0px_1px]">
                {article.type}
              </span>
              <span className="text-xs text-[#717171]">{article.category}</span>
            </div>
            <h3 className="text-base font-medium leading-snug text-black tracking-tight">
              {article.title}
            </h3>
            <p className="text-[15px] text-[#4e4e4e] leading-relaxed flex-1 tracking-[0.01em]">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-[#717171]">
              <span>{article.date}</span>
              <span>{article.read_time}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

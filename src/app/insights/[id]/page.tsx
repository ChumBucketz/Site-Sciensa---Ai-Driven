import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getInsightById, getInsights, getCoverUrl, getFirstTag, getReadingTime, stripMarkdownHeader } from "@/lib/strapi";
import { InsightsSection } from "@/components/sections/InsightsSection";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const insight = await getInsightById(id);
  if (!insight) return {};

  const cover = getCoverUrl(insight);
  const tag = getFirstTag(insight);

  return {
    title: `${insight.titulo_carrossel} | Sciensa Insights`,
    description: insight.descricao_carrossel,
    alternates: { canonical: `/insights/${id}` },
    openGraph: {
      title: insight.titulo_carrossel,
      description: insight.descricao_carrossel,
      url: `https://sciensa.com/insights/${id}`,
      type: "article",
      publishedTime: insight.publishedAt,
      authors: insight.author?.nome ? [insight.author.nome] : undefined,
      tags: tag ? [tag] : undefined,
      images: cover ? [{ url: cover, width: 1200, height: 630, alt: insight.titulo_carrossel }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: insight.titulo_carrossel,
      description: insight.descricao_carrossel,
      images: cover ? [cover] : undefined,
    },
  };
}

export async function generateStaticParams() {
  const insights = await getInsights();
  return insights.map((i) => ({ id: i.documentId }));
}

export default async function InsightPage({ params }: Props) {
  const { id } = await params;
  const insight = await getInsightById(id);
  if (!insight) notFound();

  const cover = getCoverUrl(insight);
  const readTime = getReadingTime(insight.markdown);
  const tag = getFirstTag(insight);
  const date = new Date(insight.publishedAt).toLocaleDateString("en-US", {
    day: "numeric", month: "long", year: "numeric",
  });

  return (
    <main className="max-w-[1336px] mx-auto px-4 3xl:px-0 py-3 pb-6">
      <article className="bg-white rounded-2xl overflow-hidden">
        {/* Cover image */}
        {cover && (
          <div className="w-full h-[400px] md:h-[520px] overflow-hidden">
            <img src={cover} alt={insight.titulo_carrossel} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="px-5 md:px-16 lg:px-24 py-14 max-w-[860px] mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            {tag && (
              <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#22AEA4] bg-[#22AEA4]/10 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            )}
            <span className="text-[13px] text-[#717171]">{date}</span>
            <span className="text-[#e5e5e5]">·</span>
            <span className="text-[13px] text-[#717171]">{readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-light text-black tracking-tight leading-tight mb-4">
            {insight.titulo_carrossel}
          </h1>

          {/* Lead */}
          <p className="text-lg text-[#717171] leading-relaxed mb-8">
            {insight.descricao_carrossel}
          </p>

          {/* Author */}
          {insight.author?.nome && (
            <div className="flex items-center gap-3 pb-8 mb-8 border-b border-[#f0f0f0]">
              <div className="w-10 h-10 rounded-full bg-[#e5e5e5] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-black">{insight.author.nome}</p>
              </div>
            </div>
          )}

          {/* Body */}
          <div className="prose prose-neutral max-w-none
            prose-headings:font-light prose-headings:tracking-tight
            prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
            prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-[#4e4e4e]
            prose-a:text-[#22AEA4] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-black prose-strong:font-medium
            prose-code:text-[#22AEA4] prose-code:bg-[#f5f5f5] prose-code:px-1.5 prose-code:rounded
            prose-pre:bg-[#0b0d14] prose-pre:rounded-xl
            prose-blockquote:border-l-[#22AEA4] prose-blockquote:text-[#717171]
            prose-img:rounded-xl prose-img:w-full
            prose-hr:border-[#f0f0f0]">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {stripMarkdownHeader(insight.markdown)}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      <InsightsSection />
    </main>
  );
}

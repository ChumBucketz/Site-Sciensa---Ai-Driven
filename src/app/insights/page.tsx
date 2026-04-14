import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Engineering Thinking from Sciensa",
  description: "Artigos, análises e perspectivas da equipe de engenharia da Sciensa sobre AI, platform engineering, payments, cloud e transformação digital em setores regulados.",
  alternates: { canonical: "/insights" },
  openGraph: { title: "Sciensa Insights — Engineering Thinking", description: "Perspectivas da equipe de engenharia da Sciensa sobre AI, payments e plataformas enterprise.", url: "https://sciensa.com/insights" },
};

import { getInsights, resolveUrl } from "@/lib/strapi";
import { InsightsGrid } from "@/components/sections/InsightsGrid";

export default async function Insights() {
  const insights = await getInsights();

  // Resolve image URLs server-side to avoid hydration mismatch
  // (STRAPI_URL is not available on the client)
  const resolved = insights.map((i) => ({
    ...i,
    imagem: i.imagem ? { ...i.imagem, url: resolveUrl(i.imagem.url) } : null,
  }));

  const tags = Array.from(
    new Set(resolved.flatMap((i) => i.tags.map((t) => t.tag)).filter(Boolean))
  );

  return <InsightsGrid insights={resolved} tags={tags} />;
}

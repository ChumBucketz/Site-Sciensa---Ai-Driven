import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Engineering Thinking from Sciensa",
  description: "Articles, analyses and perspectives from Sciensa's engineering team on AI, platform engineering, payments, cloud and digital transformation in regulated industries.",
  alternates: { canonical: "/insights" },
  openGraph: { title: "Sciensa Insights — Engineering Thinking", description: "Perspectives from Sciensa's engineering team on AI, payments and enterprise platforms.", url: "https://sciensa.com/insights", images: [{ url: "/image/og.png", width: 1200, height: 630 }] },
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

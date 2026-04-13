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

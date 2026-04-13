import { getInsights } from "@/lib/strapi";
import { InsightsGrid } from "@/components/sections/InsightsGrid";

export default async function Insights() {
  const insights = await getInsights();
  const tags = Array.from(new Set(insights.map((i) => i.tag).filter(Boolean) as string[]));

  return <InsightsGrid insights={insights} tags={tags} />;
}

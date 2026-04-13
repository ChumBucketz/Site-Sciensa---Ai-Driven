import { MetadataRoute } from "next";

const BASE_URL = "https://sciensa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" },
    { url: "/capabilities", priority: 0.9, changeFrequency: "monthly" },
    { url: "/capabilities/ai-engineering", priority: 0.7, changeFrequency: "monthly" },
    { url: "/capabilities/api-integration", priority: 0.7, changeFrequency: "monthly" },
    { url: "/capabilities/cloud-devsecops", priority: 0.7, changeFrequency: "monthly" },
    { url: "/capabilities/data-ai", priority: 0.7, changeFrequency: "monthly" },
    { url: "/capabilities/platform-engineering", priority: 0.7, changeFrequency: "monthly" },
    { url: "/capabilities/product-experience", priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries", priority: 0.9, changeFrequency: "monthly" },
    { url: "/industries/energy-utilities", priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/financial-services", priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/healthcare", priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/mobility-logistics", priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/retail-ecommerce", priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/telecommunications", priority: 0.7, changeFrequency: "monthly" },
    { url: "/platforms", priority: 0.9, changeFrequency: "monthly" },
    { url: "/platforms/amplify", priority: 0.7, changeFrequency: "monthly" },
    { url: "/platforms/lumia-ai", priority: 0.7, changeFrequency: "monthly" },
{ url: "/solutions", priority: 0.9, changeFrequency: "monthly" },
    { url: "/solutions/ai-financial-institutions", priority: 0.7, changeFrequency: "monthly" },
    { url: "/solutions/core-modernization", priority: 0.7, changeFrequency: "monthly" },
    { url: "/solutions/digital-banking", priority: 0.7, changeFrequency: "monthly" },
    { url: "/solutions/enterprise-ai", priority: 0.7, changeFrequency: "monthly" },
    { url: "/solutions/marketplace-orchestration", priority: 0.7, changeFrequency: "monthly" },
    { url: "/solutions/payments-modernization", priority: 0.7, changeFrequency: "monthly" },
    { url: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
    { url: "/insights", priority: 0.8, changeFrequency: "weekly" },
    { url: "/careers", priority: 0.7, changeFrequency: "weekly" },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ] as const;

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

const STRAPI_URL = process.env.STRAPI_URL ?? "";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN ?? "";

const headers: HeadersInit = STRAPI_TOKEN
  ? { Authorization: `Bearer ${STRAPI_TOKEN}` }
  : {};

export interface StrapiTag {
  id: number;
  documentId: string;
  tag: string;
}

export interface StrapiAuthor {
  id: number;
  documentId: string;
  nome: string;
  mini_bio: string | null;
}

export interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
}

export interface StrapiInsight {
  id: number;
  documentId: string;
  titulo_carrossel: string;
  descricao_carrossel: string;
  markdown: string;
  publishedAt: string;
  home: boolean;
  tags: StrapiTag[];
  imagem: StrapiImage | null;
  author: StrapiAuthor | null;
}

interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export function resolveUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${STRAPI_URL}${path}`;
}

export function getCoverUrl(insight: StrapiInsight): string | null {
  if (!insight.imagem?.url) return null;
  return resolveUrl(insight.imagem.url);
}

export function getReadingTime(markdown: string): string {
  const words = markdown.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function getFirstTag(insight: StrapiInsight): string | null {
  return insight.tags?.[0]?.tag ?? null;
}

export function stripMarkdownHeader(markdown: string): string {
  return markdown
    .replace(/^!\[.*?\]\(.*?\)\s*/m, "")   // remove first image
    .replace(/^#\s+.+\n?/m, "")             // remove first H1
    .replace(/^\*[^*\n]+\*\s*/m, "")        // remove first *italic* paragraph
    .replace(/^_[^_\n]+_\s*/m, "")          // remove first _italic_ paragraph
    .replace(/^---\s*/m, "")                // remove first hr
    .trimStart();
}

export async function getInsights(): Promise<StrapiInsight[]> {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/posts?populate=*&sort=publishedAt:desc`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const json: StrapiResponse<StrapiInsight[]> = await res.json();
    return json.data ?? [];
  } catch {
    return [];
  }
}

export async function getHomeInsights(): Promise<StrapiInsight[]> {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/posts?populate=*&filters[home][$eq]=true&sort=publishedAt:desc`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const json: StrapiResponse<StrapiInsight[]> = await res.json();
    return json.data ?? [];
  } catch {
    return [];
  }
}

export async function getInsightById(documentId: string): Promise<StrapiInsight | null> {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/posts/${documentId}?populate=*`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const json: StrapiResponse<StrapiInsight> = await res.json();
    return json.data ?? null;
  } catch {
    return null;
  }
}

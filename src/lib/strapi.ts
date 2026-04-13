const STRAPI_URL = process.env.STRAPI_URL ?? "";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN ?? "";

const headers: HeadersInit = STRAPI_TOKEN
  ? { Authorization: `Bearer ${STRAPI_TOKEN}` }
  : {};

export interface StrapiAuthorPicture {
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
  tag: string | null;
  autor_nome: string | null;
  autor_cargo: string | null;
  autor_picture: StrapiAuthorPicture | null;
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

function resolveUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${STRAPI_URL}${path}`;
}

export function getAuthorPictureUrl(insight: StrapiInsight): string | null {
  if (!insight.autor_picture?.url) return null;
  return resolveUrl(insight.autor_picture.url);
}

export function getCoverFromMarkdown(markdown: string): string | null {
  const match = markdown.match(/!\[.*?\]\((.*?)\)/);
  if (!match) return null;
  return resolveUrl(match[1]);
}

export function getReadingTime(markdown: string): string {
  const words = markdown.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export async function getInsights(): Promise<StrapiInsight[]> {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/posts?populate=autor_picture&sort=publishedAt:desc`,
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
      `${STRAPI_URL}/api/posts?populate=autor_picture&filters[home][$eq]=true&sort=publishedAt:desc`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const json: StrapiResponse<StrapiInsight[]> = await res.json();
    return json.data ?? [];
  } catch {
    return [];
  }
}

export async function getInsightById(id: string): Promise<StrapiInsight | null> {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/posts/${id}?populate=autor_picture`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const json: StrapiResponse<StrapiInsight> = await res.json();
    return json.data ?? null;
  } catch {
    return null;
  }
}

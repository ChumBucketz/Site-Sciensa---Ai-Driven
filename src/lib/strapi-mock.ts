import { type StrapiInsight } from "./strapi";

export const mockInsights: StrapiInsight[] = [
  {
    id: 1,
    documentId: "mock-1",
    titulo_carrossel: "A Ilusão da Inteligência: Por Que a Maioria das Empresas de Pagamentos no Brasil Está Usando IA Errado",
    descricao_carrossel: "E o que separa quem realmente transformou a operação de quem apenas comprou uma API de scoring.",
    markdown: `# A Ilusão da Inteligência\n\nConteúdo de exemplo.`,
    publishedAt: "2026-04-13T18:32:41.326Z",
    home: true,
    tags: [{ id: 1, documentId: "mock-tag-1", tag: "AI & Payments" }],
    imagem: { id: 1, url: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1200&q=80", alternativeText: null },
    author: { id: 1, documentId: "mock-author-1", nome: "Felipe Scaphe", mini_bio: null },
  },
];

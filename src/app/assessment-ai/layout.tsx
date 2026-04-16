import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./assessment.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-assessment-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-assessment-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://sciensa.ai/assessment-ai";

export const metadata: Metadata = {
  metadataBase: new URL("https://sciensa.ai"),
  title: "AI Enterprise Assessment: Diagnóstico de Maturidade em IA | Sciensa",
  description:
    "Descubra em qual nível de maturidade de IA sua empresa está e o que fazer para escalar. Em 8 semanas entregamos Portfolio Map, Business Case com ROI, 3 Reference Architectures e Roadmap 90/180/365 dias — prontos para execução imediata.",
  keywords: [
    "AI assessment empresarial",
    "diagnóstico de maturidade em inteligência artificial",
    "portfolio map IA",
    "estratégia de inteligência artificial para empresas",
    "AI enterprise assessment Brasil",
    "consultoria IA empresarial",
    "Sciensa",
    "roadmap de IA",
    "business case inteligência artificial",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Sciensa",
    title: "AI Enterprise Assessment: Diagnóstico de Maturidade em IA | Sciensa",
    description:
      "Descubra onde sua empresa está no mapa da IA e o que fazer para escalar. Blueprint estratégico em 8 semanas: Portfolio Map, Business Case e Roadmap prontos para o Board.",
    images: [{ url: "/image/og.png", width: 1200, height: 630, alt: "Sciensa AI Enterprise Assessment" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Enterprise Assessment | Sciensa",
    description:
      "88% das empresas já usam IA. Apenas 1 em 9 opera em produção com retorno mensurável. Descubra em qual nível sua empresa está.",
    images: ["/image/og.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function AssessmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`assessment-root ${jakarta.variable} ${jetbrainsMono.variable}`}
      style={{ fontFamily: "var(--font-assessment-sans, 'Plus Jakarta Sans', sans-serif)" }}
    >
      {children}
    </div>
  );
}

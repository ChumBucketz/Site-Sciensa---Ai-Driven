import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sciensa | AI Driven Solutions",
  description:
    "Sciensa é uma empresa de engenharia de tecnologia que projeta, constrói e opera plataformas mission-critical para banking, payments, saúde, energia e varejo na América Latina. 200+ engenheiros, plataformas proprietárias de IA e mais de 15 anos entregando sistemas de alta complexidade.",
  keywords: [
    "engenharia de software",
    "inteligência artificial",
    "plataformas de IA",
    "AI engineering",
    "platform engineering",
    "cloud DevSecOps",
    "data analytics",
    "API integration",
    "banking technology",
    "financial services technology",
    "Lumia AI",
    "Amplify",
"Latin America",
    "São Paulo",
    "enterprise software",
    "digital transformation",
    "Sciensa",
  ],
  authors: [{ name: "Sciensa", url: "https://sciensa.com" }],
  metadataBase: new URL("https://sciensa.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logos/favicon.png",
    apple: "/logos/favicon.png",
  },
  openGraph: {
    title: "Sciensa | AI Driven Solutions",
    description:
      "Engenharia de tecnologia mission-critical para banking, payments, saúde, energia e varejo. 200+ engenheiros, plataformas proprietárias de IA, 15+ anos de entrega em alta complexidade.",
    url: "https://sciensa.com",
    siteName: "Sciensa",
    images: [{ url: "/logos/Sciensa logo.png", width: 1200, height: 630, alt: "Sciensa — AI Driven Solutions" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sciensa | AI Driven Solutions",
    description:
      "Engenharia de tecnologia mission-critical para banking, payments, saúde, energia e varejo. 200+ engenheiros, plataformas proprietárias de IA.",
    images: ["/logos/Sciensa logo.png"],
    creator: "@sciensa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-F5MXK7WD1K" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F5MXK7WD1K');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#f5f5f5] text-[#222222]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

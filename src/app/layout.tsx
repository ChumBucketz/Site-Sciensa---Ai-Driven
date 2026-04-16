import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sciensa | AI-Native Engineering for Complex Industries",
  description:
    "Sciensa is a technology engineering firm that designs, builds and operates mission-critical platforms for banking, payments, healthcare, energy and retail. 200+ engineers, proprietary AI platforms, 15+ years of complex delivery.",
  keywords: [
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
    title: "Sciensa | AI-Native Engineering for Complex Industries",
    description:
      "Mission-critical technology engineering for banking, payments, healthcare, energy and retail. 200+ engineers, proprietary AI platforms, 15+ years of delivery.",
    url: "https://sciensa.com",
    siteName: "Sciensa",
    images: [{ url: "/image/og.png", width: 1200, height: 630, alt: "Sciensa — AI-Native Engineering" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sciensa | AI-Native Engineering for Complex Industries",
    description:
      "Mission-critical technology engineering for banking, payments, healthcare, energy and retail. 200+ engineers, proprietary AI platforms.",
    images: ["/image/og.png"],
    creator: "@sciensa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} h-full antialiased`}>
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
        {children}
      </body>
    </html>
  );
}

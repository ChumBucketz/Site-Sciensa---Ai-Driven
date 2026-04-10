import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sciensa | AI Driven Solutions",
  description:
    "AI-native engineering, cross-market execution, and proprietary platforms for the industries that can't afford to fail.",
  icons: {
    icon: "/logos/logo sciensa symbol.png",
    apple: "/logos/logo sciensa symbol.png",
  },
  openGraph: {
    title: "Sciensa | AI Driven Solutions",
    description:
      "AI-native engineering, cross-market execution, and proprietary platforms for the industries that can't afford to fail.",
    images: [{ url: "/logos/Sciensa logo.png", width: 1200, height: 630, alt: "Sciensa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sciensa | AI Driven Solutions",
    description:
      "AI-native engineering, cross-market execution, and proprietary platforms for the industries that can't afford to fail.",
    images: ["/logos/Sciensa logo.png"],
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
        <CookieBanner />
      </body>
    </html>
  );
}

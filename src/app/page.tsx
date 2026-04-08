import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StatGrid } from "@/components/sections/StatGrid";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { PlatformCarousel } from "@/components/sections/PlatformCarousel";
import { CTABanner } from "@/components/sections/CTABanner";
import { CapabilitiesGrid } from "@/components/sections/CapabilitiesGrid";
import { FadeIn } from "@/components/ui/FadeIn";
import { MockTerminal } from "@/components/mocks/MockTerminal";
import { MockDashboard } from "@/components/mocks/MockDashboard";
import { MockSquad } from "@/components/mocks/MockSquad";
import Image from "next/image";
import Link from "next/link";

const logos = [
  { src: "/logos/image 10.png", alt: "Genial Investimentos" },
  { src: "/logos/image 11.png", alt: "Natura" },
  { src: "/logos/image 12.png", alt: "PagNxt" },
  { src: "/logos/image 14.png", alt: "Santander" },
  { src: "/logos/image 23.png", alt: "Itaú" },
  { src: "/logos/image 24.png", alt: "PicPay" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        eyebrow="// AI-NATIVE ENGINEERING"
        headlines={[
          "We engineer intelligence into complex systems.",
          "AI-native delivery, built for output.",
          "From legacy to leading-edge tech.",
        ]}
        subheadline="AI-native engineering, cross-market execution, and proprietary platforms for the industries that can't afford to fail."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "Explore our capabilities", href: "/capabilities" }}
      />

      {/* Logo ticker */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
        <p className="text-label text-[#717171] text-center mb-6">Trusted by leaders in complex industries</p>
        <div className="overflow-hidden py-2" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)" }}>
          <div className="flex w-max animate-marquee gap-4">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-36 h-16 shrink-0 sm:w-40 sm:h-[72px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={40}
                    className="object-contain max-h-9 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
        <div className="bg-white rounded-2xl px-5 md:px-10 py-12">
          <p className="text-label text-[#717171] mb-10">
            Trusted by leaders in complex industries
          </p>
          <StatGrid
            stats={[
              { value: "200+", label: "Engineers" },
              { value: "15+", label: "Years" },
              { value: "5", label: "Verticals" },
              { value: "99.9%", label: "Uptime" },
            ]}
          />
        </div>
        </FadeIn>
      </section>

      {/* Why Sciensa */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
        <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
          <SectionHeader eyebrow="// WHY SCIENSA" headline="Forget technology services as you know them." />
          <div className="mt-12 flex flex-col gap-6">
            {[
              {
                title: "Intelligence Layer",
                description: "Every solution ships with an embedded AI layer — from LLM orchestration to predictive pipelines — because intelligence shouldn't be an afterthought.",
                stat: "200+",
                statLabel: "AI models deployed",
                reverse: false,
              },
              {
                title: "Domain Expertise",
                description: "15+ years across financial services, healthcare, energy, retail, and telecom. We speak your industry's language and know its regulations.",
                stat: "15+",
                statLabel: "years of delivery",
                reverse: true,
              },
              {
                title: "AI-Native Delivery",
                description: "Cross-functional squads with AI engineers, data scientists, and domain specialists — not generic outsourcing, but purpose-built teams.",
                stat: "40+",
                statLabel: "active squads",
                reverse: false,
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className={`overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 py-[60px] ${pillar.reverse ? "lg:[&>*:first-child]:order-last" : ""}`}
              >
                {/* Animated mock */}
                {pillar.title === "Intelligence Layer" && <MockTerminal />}
                {pillar.title === "Domain Expertise" && <MockDashboard />}
                {pillar.title === "AI-Native Delivery" && <MockSquad />}
                {/* Text side */}
                <div className="p-10 flex flex-col justify-center gap-6">
                  <div>
                    <h3 className="text-xl font-light text-black mb-3 tracking-tight">{pillar.title}</h3>
                    <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{pillar.description}</p>
                  </div>
                  <div className="pt-5 border-t border-[#e5e5e5]">
                    <span className="text-3xl font-light text-black tracking-tight">{pillar.stat}</span>
                    <span className="block text-label text-[#717171] mt-1">{pillar.statLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>
      </section>

      {/* Industry Studios */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
          <IndustriesGrid />
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
          <CapabilitiesGrid />
        </div>
      </section>

      {/* Platform Spotlight */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <FadeIn>
        <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionHeader eyebrow="// PLATFORMS" headline="Proprietary platforms that accelerate delivery." />
            <Link href="/platforms" className="shrink-0 text-[15px] font-medium text-black hover:text-[#4e4e4e] transition-colors">
              All platforms →
            </Link>
          </div>
          <PlatformCarousel />
        </div>
        </FadeIn>
      </section>


      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3 pb-6">
        <FadeIn>
        <CTABanner
          eyebrow="// LET'S BUILD"
          headline="Ready to engineer your next breakthrough?"
          subheadline="From dedicated squads to accelerator programs and SaaS platforms — choose the engagement model that fits your ambition."
          primary={{ label: "Start a conversation", href: "/contact" }}
          secondary={{ label: "Learn about us →", href: "/about" }}
        >
          <blockquote className="border-l-2 border-white/20 pl-6 mt-2">
            <p className="text-white/60 text-[15px] leading-relaxed italic max-w-xl">
              "Sciensa delivered what our internal teams couldn't in 12 months — in under 90 days. Their AI-native approach changed how we think about engineering."
            </p>
            <cite className="block mt-3 text-xs text-white/30 tracking-wide not-italic">
              — CTO, Fortune 500 Financial Services
            </cite>
          </blockquote>
        </CTABanner>
        </FadeIn>
      </section>
    </>
  );
}

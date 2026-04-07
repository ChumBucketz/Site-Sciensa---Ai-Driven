"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { tagVariant } from "@/components/ui/tagColor";
import { MockLumiaChat } from "@/components/mocks/MockLumiaChat";
import { MockAmplify } from "@/components/mocks/MockAmplify";
import { MockCodeGenius } from "@/components/mocks/MockCodeGenius";
import { MockSmartCollect } from "@/components/mocks/MockSmartCollect";

const platforms = [
  {
    name: "Lumia AI",
    tag: "AI/ML",
    description: "AI/ML experimentation platform with model registry, automated pipelines, and intelligent observability.",
    features: ["Model Registry", "AutoML Pipelines", "AI Observability"],
    logo: "/logos/Lumia logo.png",
    bg: "#e9e4ff",
    dots: "rgba(139,92,246,0.18)",
    href: "/platforms/lumia-ai",
  },
  {
    name: "Amplify",
    tag: "ACCELERATION",
    description: "Digital acceleration platform for rapid delivery — from MVP to enterprise-grade products.",
    features: ["MVP Launchers", "Squad Templates", "Quality Gates"],
    logo: "/logos/Amplify Logo.png",
    bg: "#F0FDF4",
    dots: "rgba(34,174,164,0.18)",
    href: "/platforms/amplify",
  },
  {
    name: "CodeGenius",
    tag: "ENGINEERING",
    description: "AI-accelerated engineering — boosting productivity, code quality, testing, and documentation.",
    features: ["Developer Productivity", "Automated Testing", "Code Review AI"],
    logo: "/logos/Code Genious logo.png",
    bg: "#ececfd",
    dots: "rgba(99,102,241,0.18)",
    href: "/platforms/codegenius",
  },
  {
    name: "SmartCollect",
    tag: "AI SOLUTION",
    description: "Applied intelligence for collections, recovery, and operational efficiency at scale.",
    features: ["Automated Prioritization", "Recovery Intelligence", "BACEN Compliance"],
    logo: null,
    bg: "#fef1f7",
    dots: "rgba(236,72,153,0.18)",
    href: "/platforms/smartcollect",
  },
];

export function PlatformCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? platforms.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === platforms.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full relative">

      {/* Carousel viewport */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {platforms.map((platform, pi) => (
            <div key={platform.name} className="w-full shrink-0">
              {/* Image area */}
              <div className="w-full h-[400px] md:h-[600px] relative rounded-2xl overflow-hidden">
                {/* Dot grid background — per-platform identity color */}
                <div className="absolute inset-0" style={{
                  background: platform.bg,
                  backgroundImage: `radial-gradient(circle, ${platform.dots} 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                  transition: "background 500ms ease",
                }} />

                {platform.name === "CodeGenius" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative hidden md:block w-[700px] h-[400px] rounded-[24px] overflow-hidden"
                      style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.08), 0 32px 64px rgba(0,0,0,0.12)" }}>
                      <MockCodeGenius />
                    </div>
                  </div>
                )}
                {platform.name === "Amplify" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative hidden md:block w-[700px] h-[400px] rounded-[24px] overflow-hidden"
                      style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.08), 0 32px 64px rgba(0,0,0,0.12)" }}>
                      <MockAmplify />
                    </div>
                  </div>
                )}
                {platform.name === "Lumia AI" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative hidden md:block w-[700px] h-[460px] rounded-[24px] overflow-hidden"
                      style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.08), 0 32px 64px rgba(0,0,0,0.12)" }}>
                      <MockLumiaChat />
                    </div>
                  </div>
                )}
                {platform.name === "SmartCollect" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative hidden md:block w-[700px] h-[420px] rounded-[24px] overflow-hidden"
                      style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.08), 0 32px 64px rgba(0,0,0,0.12)" }}>
                      <MockSmartCollect />
                    </div>
                  </div>
                )}
                {/* Card — absolute top-right inside image */}
                <div className="absolute top-5 right-5 w-[280px] md:w-[300px]">
                  <div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-3"
                    style={{ boxShadow: "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 12px" }}
                  >
                    <div className="flex items-center justify-between">
                      {platform.logo
                        ? <Image src={platform.logo} alt={platform.name} width={120} height={36} className="object-contain h-7 w-auto" />
                        : <h3 className="text-base font-medium text-black tracking-tight">{platform.name}</h3>
                      }
                      <Badge variant={tagVariant(pi)}>{platform.tag}</Badge>
                    </div>
                    <p className="text-[14px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{platform.description}</p>
                    <ul className="flex flex-wrap gap-x-4 gap-y-1">
                      {platform.features.map((f) => (
                        <li key={f} className="text-xs text-[#777169] flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#777169] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={platform.href}
                      className="mt-1 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white text-[13px] font-medium hover:bg-[#222] transition-colors self-start"
                    >
                      Explore {platform.name}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls — overlaid on viewport, always fixed position */}
      <div className="absolute bottom-5 right-5 flex items-center gap-3">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {platforms.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-200 ${
                i === current
                  ? "w-5 h-1.5 bg-black"
                  : "w-1.5 h-1.5 bg-black/30 hover:bg-black/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        {/* Arrows */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full bg-black hover:bg-[#222] flex items-center justify-center transition-colors focus-visible:rounded-full"
            aria-label="Previous"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full bg-black hover:bg-[#222] flex items-center justify-center transition-colors focus-visible:rounded-full"
            aria-label="Next"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}

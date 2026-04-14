"use client";

import Link from "next/link";
import { useRef, useState } from "react";

interface HeroCategoryProps {
  eyebrow: string; // e.g. "Solutions / Digital Banking"
  headline: string;
  subheadline?: string;
  video?: string;
  stats: { value: string; label: string }[];
}

const DEFAULT_VIDEO = "/Videos/cityscape.mp4";

function parseBreadcrumb(eyebrow: string) {
  const parts = eyebrow.split("/").map((p) => p.trim());
  if (parts.length < 2) return null;
  const section = parts[0];
  const href = `/${section.toLowerCase().replace(/\s+/g, "-")}`;
  return { section, href };
}

export function HeroCategory({ eyebrow, headline, subheadline, video, stats }: HeroCategoryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);
  const crumb = parseBreadcrumb(eyebrow);

  return (
    <section className="max-w-[1336px] mx-auto px-4 3xl:px-0 pt-20 pb-3">
      {/* Hero card with video */}
      <div
        ref={ref}
        onMouseMove={(e) => {
          const rect = ref.current?.getBoundingClientRect();
          if (rect) setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onMouseLeave={() => setMouse(null)}
        className="relative overflow-hidden rounded-2xl h-[360px] md:h-[420px] px-8 md:px-14"
      >
        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video ?? DEFAULT_VIDEO}
          autoPlay muted loop playsInline
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, #22AEA4 0%, #5EB359 50%, #22AEA4 100%)",
          backgroundSize: "300% 300%",
          animation: "heroGradient 8s ease infinite",
          mixBlendMode: "multiply",
        }} />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }} />

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />

        {/* Spotlight dots */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: `radial-gradient(circle 320px at ${mouse ? `${mouse.x}px ${mouse.y}px` : "-9999px -9999px"}, black 0%, transparent 70%)`,
            WebkitMaskImage: `radial-gradient(circle 320px at ${mouse ? `${mouse.x}px ${mouse.y}px` : "-9999px -9999px"}, black 0%, transparent 70%)`,
          }} />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between py-8 md:py-10 max-w-3xl">
          {/* Breadcrumb */}
          {crumb && (
            <div className="flex items-center gap-2 text-white/60 text-[12px]">
              <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.section}</Link>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-white/90">{eyebrow.split("/").pop()?.trim()}</span>
            </div>
          )}

          {/* Headline */}
          <div>
            <h1
              className="font-light text-white tracking-tight text-[1.75rem] md:text-[2.75rem]"
              style={{ lineHeight: 1.08, letterSpacing: "-0.03em" }}
            >
              {headline}
            </h1>
            {subheadline && (
              <p className="mt-3 text-[14px] text-white/70 leading-relaxed max-w-xl">{subheadline}</p>
            )}
          </div>
        </div>
      </div>

      {/* Stats strip — flows below hero */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-3 bg-white rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="flex flex-col gap-1 px-6 md:px-10 py-7 border-r border-b md:border-b-0 border-[#f0f0f0] last:border-r-0"
            style={{ borderRight: i === stats.length - 1 ? "none" : undefined }}
          >
            <span className="text-[2rem] md:text-[2.5rem] font-light text-black tracking-tight">{s.value}</span>
            <span className="text-[11px] text-[#9CA3AF] leading-snug">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

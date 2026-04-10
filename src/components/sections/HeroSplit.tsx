"use client";

import { useRef, useState } from "react";

interface HeroSplitProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  stats: { value: string; label: string }[];
  items: string[];
  video?: string;
}

const DEFAULT_VIDEO = "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7_lah9zl.mp4";

function Visual({ items }: { items: string[] }) {
  return (
    <div
      className="relative w-full h-full min-h-[300px] md:min-h-[380px] rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "rgba(255,255,255,0.10)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
      }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-white/50 font-mono">capabilities.overview</span>
      </div>
      <div className="flex-1 p-5 flex flex-col gap-2.5 justify-center">
        {items.map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-3 h-9 rounded-[8px] px-3"
            style={{
              background: i === 0 ? "rgba(34,174,164,0.25)" : "rgba(255,255,255,0.08)",
              border: i === 0 ? "1px solid rgba(34,174,164,0.4)" : "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
              style={{ background: i === 0 ? "#22AEA4" : "rgba(255,255,255,0.2)" }}
            >
              {i === 0 && (
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="text-[12px] text-white/80">{item}</span>
            {i === 0 && (
              <span className="ml-auto text-[10px] font-medium text-white bg-[rgba(34,174,164,0.3)] px-2 py-0.5 rounded-full">active</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroSplit({ eyebrow, headline, subheadline, stats, items, video }: HeroSplitProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  return (
    <section className="max-w-[1336px] mx-auto px-4 lg:px-0 pt-20 pb-3">
      <div
        ref={ref}
        onMouseMove={(e) => {
          const rect = ref.current?.getBoundingClientRect();
          if (rect) setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onMouseLeave={() => setMouse(null)}
        className="relative rounded-2xl overflow-hidden px-6 md:px-14 py-12 md:py-16 min-h-[420px] md:min-h-[480px] flex items-center"
      >
        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video ?? DEFAULT_VIDEO}
          autoPlay muted loop playsInline
        />

        {/* Gradient overlay — multiply like main hero */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, #22AEA4 0%, #5EB359 50%, #22AEA4 100%)",
          backgroundSize: "300% 300%",
          animation: "heroGradient 8s ease infinite",
          mixBlendMode: "multiply",
        }} />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }} />

        {/* Base dots */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />

        {/* Spotlight dots */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: `radial-gradient(circle 360px at ${mouse ? `${mouse.x}px ${mouse.y}px` : "-9999px -9999px"}, black 0%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(circle 360px at ${mouse ? `${mouse.x}px ${mouse.y}px` : "-9999px -9999px"}, black 0%, transparent 70%)`,
        }} />

        {/* Content */}
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/60">{eyebrow}</span>
            <h1
              className="font-light text-white tracking-tight text-[2rem] md:text-[2.75rem] lg:text-[3.25rem]"
              style={{ lineHeight: 1.08, letterSpacing: "-0.03em" }}
            >
              {headline}
            </h1>
            <p className="text-[15px] text-white/75 leading-relaxed max-w-lg">{subheadline}</p>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 pt-4 border-t border-white/20">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="text-[1.75rem] font-light text-white tracking-tight">{s.value}</span>
                  <span className="text-[11px] text-white/50 leading-snug">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual (desktop only) */}
          <div className="hidden lg:block">
            <Visual items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

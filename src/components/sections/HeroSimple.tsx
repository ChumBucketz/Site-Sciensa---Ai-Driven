"use client";

import { useRef, useState, ReactNode } from "react";

interface HeroSimpleProps {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  actions?: ReactNode;
  video?: string;
}

const DEFAULT_VIDEO = "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486815/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a_1_1_nt49o4.mp4";

export function HeroSimple({ eyebrow, headline, subheadline, actions, video }: HeroSimpleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <section className="max-w-[1336px] mx-auto px-4 3xl:px-0 pt-20 pb-3">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMouse(null)}
        className="relative overflow-hidden rounded-2xl h-[400px] md:h-[340px] px-10 md:px-16"
      >
        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video ?? DEFAULT_VIDEO}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #22AEA4 0%, #5EB359 50%, #22AEA4 100%)",
            backgroundSize: "300% 300%",
            animation: "heroGradient 8s ease infinite",
            mixBlendMode: "multiply",
          }}
        />

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />

        {/* Base dots */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Spotlight dots */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: `radial-gradient(circle 320px at ${mouse ? `${mouse.x}px ${mouse.y}px` : "-9999px -9999px"}, black 0%, transparent 70%)`,
            WebkitMaskImage: `radial-gradient(circle 320px at ${mouse ? `${mouse.x}px ${mouse.y}px` : "-9999px -9999px"}, black 0%, transparent 70%)`,
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end pb-10 md:pb-12 max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/60 mb-4">
            {eyebrow}
          </p>
          <h1
            className="font-light text-white tracking-tight text-[1.75rem] md:text-[2.5rem]"
            style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            {headline}
          </h1>
          {subheadline && (
            <p className="mt-3 text-[14px] text-white/70 leading-relaxed max-w-xl tracking-[0.01em]">
              {subheadline}
            </p>
          )}
          {actions && (
            <div className="mt-5 flex flex-wrap gap-3">{actions}</div>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface HeroProps {
  eyebrow: string;
  headlines: string[];
  subheadline: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

export function Hero({ eyebrow, headlines, subheadline, primary, secondary }: HeroProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  function handleMouseLeave() {
    setMouse(null);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % headlines.length);
        setVisible(true);
      }, 350);
    }, 3400);
    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-3">
      <div
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-2xl h-[500px] px-8 md:px-16 lg:h-[780px]"
      >
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a (1).mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Animated gradient overlay — on top of video */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #22AEA4 0%, #5EB359 50%, #22AEA4 100%)",
            backgroundSize: "300% 300%",
            animation: "heroGradient 8s ease infinite",
            opacity: 1,
          mixBlendMode: "multiply",
          }}
        />

        {/* Noise/texture overlay */}
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
            maskImage: `radial-gradient(circle 420px at ${mouse ? `${mouse.x}px ${mouse.y}px` : "-9999px -9999px"}, black 0%, transparent 70%)`,
            WebkitMaskImage: `radial-gradient(circle 420px at ${mouse ? `${mouse.x}px ${mouse.y}px` : "-9999px -9999px"}, black 0%, transparent 70%)`,
          }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 h-full">
          {/* Left — text: distribute top/bottom with justify-between */}
          <div className="flex flex-col justify-between py-10 lg:py-14 lg:pb-16">
            {/* Eyebrow — top */}
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/60">
              {eyebrow}
            </p>

            {/* Bottom block */}
            <div>
              {/* Rotating headline */}
              <div className="lg:h-[calc(1.08*3.5rem*3)]">
                <h1
                  className="font-light text-white tracking-tight text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem]"
                  style={{
                    lineHeight: 1.08,
                    letterSpacing: "-0.02em",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity 0.35s ease, transform 0.35s ease",
                  }}
                >
                  {headlines[index]}
                </h1>
              </div>

              <p className="mt-4 text-[15px] text-white/70 leading-relaxed max-w-sm tracking-[0.01em]">
                {subheadline}
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={primary.href}
                  className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-black text-[14px] font-medium tracking-[0.01em] hover:bg-white/90 transition-colors"
                >
                  {primary.label}
                </Link>
                <Link
                  href={secondary.href}
                  className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 text-white text-[14px] font-medium tracking-[0.01em] hover:bg-white/20 transition-colors"
                >
                  {secondary.label} →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

interface HeroPlatformProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  logo?: string;
  accentColor?: string;
  stats: { value: string; label: string }[];
  video?: string;
}

const DEFAULT_VIDEO = "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323_dqsbv8.mp4";

export function HeroPlatform({
  eyebrow,
  headline,
  subheadline,
  logo,
  accentColor = "#22AEA4",
  stats,
  video,
}: HeroPlatformProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pt-20 pb-3">
      <div className="relative rounded-2xl overflow-hidden px-6 md:px-14 py-14 md:py-20 flex flex-col items-center text-center">

        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video ?? DEFAULT_VIDEO}
          autoPlay muted loop playsInline
        />

        {/* Gradient overlay — accent-tinted, multiply */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(135deg, #22AEA4 0%, ${accentColor} 100%)`,
          backgroundSize: "300% 300%",
          animation: "heroGradient 8s ease infinite",
          mixBlendMode: "multiply",
        }} />

        {/* Dark veil so content reads clearly */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.32)" }} />

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

        {/* Accent glow top-center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] pointer-events-none" style={{
          background: `radial-gradient(ellipse at 50% 0%, ${accentColor}55 0%, transparent 70%)`,
        }} />

        <div className="relative flex flex-col items-center gap-6 max-w-3xl w-full">
          {/* Category badge */}
          <span
            className="text-[11px] font-medium uppercase tracking-[0.14em] px-3 py-1 rounded-full"
            style={{ color: "white", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            {eyebrow}
          </span>

          {/* Logo or platform name */}
          {logo ? (
            <Image
              src={logo}
              alt={eyebrow}
              width={220}
              height={60}
              className="object-contain h-10 md:h-14 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          ) : (
            <h1 className="text-3xl md:text-5xl font-light text-white tracking-tight" style={{ letterSpacing: "-0.03em" }}>
              {eyebrow.split("/").pop()?.trim()}
            </h1>
          )}

          {/* Headline */}
          <h2
            className="font-light text-white tracking-tight text-[1.6rem] md:text-[2.25rem] lg:text-[2.75rem]"
            style={{ lineHeight: 1.1, letterSpacing: "-0.03em" }}
          >
            {headline}
          </h2>

          <p className="text-[15px] text-white/70 leading-relaxed max-w-xl">{subheadline}</p>

          {/* Divider */}
          <div className="w-full h-px bg-white/15 mt-2" />

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full pt-2">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <span className="text-[2rem] md:text-[2.5rem] font-light text-white tracking-tight">
                  {s.value}
                </span>
                <span className="text-[11px] text-white/45 leading-snug text-center">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { ReactNode, useRef, useState } from "react";

interface CTABannerProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  children?: ReactNode;
}

export function CTABanner({
  eyebrow,
  headline,
  subheadline,
  primary = { label: "Start a conversation", href: "/contact" },
  secondary,
  children,
}: CTABannerProps) {
  const ref = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  function handleMouseLeave() {
    setMouse(null);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-black text-white rounded-2xl overflow-hidden"
    >
      {/* Base grid — always visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Spotlight grid — mask does all the work, no opacity toggle = no flash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: `radial-gradient(circle 420px at ${mouse ? `${mouse.x}px ${mouse.y}px` : "-9999px -9999px"}, black 0%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(circle 420px at ${mouse ? `${mouse.x}px ${mouse.y}px` : "-9999px -9999px"}, black 0%, transparent 70%)`,
        }}
      />

      {/* Glow dot at cursor */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "480px",
          height: "480px",
          top: (mouse?.y ?? -9999) - 240,
          left: (mouse?.x ?? -9999) - 240,
          background: "radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)",
          opacity: 0.03,
        }}
      />

      <div className="relative px-10 py-20">
        <div className="max-w-2xl">
          {eyebrow && <MonoLabel light className="block mb-5">{eyebrow}</MonoLabel>}
          <h2 className="text-heading text-white mb-5">{headline}</h2>
          {subheadline && (
            <p
              className="text-subheading mb-10"
              style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.011em" }}
            >
              {subheadline}
            </p>
          )}
          <div className="flex flex-wrap gap-3">
            <Button href={primary.href} variant="white-pill">
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
        {children && <div className="mt-14">{children}</div>}
      </div>
    </section>
  );
}

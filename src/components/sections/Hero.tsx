"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";

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
    <section className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <MonoLabel className="block mb-8">{eyebrow}</MonoLabel>

        {/* Rotating headline */}
        <div className="mb-8" style={{ minHeight: "calc(1.08 * 3.5rem * 2.2)" }}>
          <h1
            className="text-display text-black"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            {headlines[index]}
          </h1>
        </div>

        <p
          className="text-subheading max-w-xl mx-auto mb-10"
          style={{ letterSpacing: "0.011em", lineHeight: 1.6 }}
        >
          {subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href={primary.href} variant="black-pill">
            {primary.label}
          </Button>
          <Button href={secondary.href} variant="warm-stone">
            {secondary.label} →
          </Button>
        </div>
      </div>

      {/* Subtle warm divider */}
      <div className="mt-20 max-w-7xl mx-auto border-t border-[#e5e5e5]" />
    </section>
  );
}

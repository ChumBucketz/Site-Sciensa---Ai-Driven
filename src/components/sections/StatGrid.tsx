"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

interface StatGridProps {
  stats: Stat[];
  light?: boolean;
}

// Parses "200+", "99.9%", "15+", "5", "3×" etc.
// Returns { prefix: "", number: 200, suffix: "+" }
function parseValue(value: string) {
  const match = value.match(/^([^0-9]*)([0-9]+\.?[0-9]*)([^0-9]*)$/);
  if (!match) return { prefix: "", number: null, suffix: value };
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}

function useCountUp(target: number | null, duration = 1200, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || target === null) return;
    let start: number | null = null;
    const isFloat = target % 1 !== 0;

    const end = target;
    function step(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      setCount(isFloat ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    }

    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function StatItem({ stat, light }: { stat: Stat; light: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const { prefix, number, suffix } = parseValue(stat.value);
  const count = useCountUp(number, 1400, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const displayed =
    number !== null
      ? `${prefix}${number % 1 !== 0 ? count.toFixed(1) : count}${suffix}`
      : stat.value;

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <span
        className="font-light tracking-tight tabular-nums"
        style={{
          fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
          color: light ? "#ffffff" : "#000000",
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
        }}
      >
        {displayed}
      </span>
      <span
        className="text-label"
        style={{ color: light ? "rgba(255,255,255,0.4)" : "#717171" }}
      >
        {stat.label}
      </span>
    </div>
  );
}

export function StatGrid({ stats, light = false }: StatGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} light={light} />
      ))}
    </div>
  );
}

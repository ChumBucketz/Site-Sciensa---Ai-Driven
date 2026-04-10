"use client";

import { useEffect, useRef, useState } from "react";

// Parses "200+", "99.9%", "3×", "6" → { prefix, number, suffix }
function parse(value: string) {
  const m = value.match(/^([^0-9]*)([0-9]+\.?[0-9]*)([^0-9]*)$/);
  if (!m) return { prefix: "", number: null, suffix: value };
  return { prefix: m[1], number: parseFloat(m[2]), suffix: m[3] };
}

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

export function CountUp({ value, className = "", duration = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const { prefix, number, suffix } = parse(value);

  // Trigger on scroll into view (once)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Count-up animation
  useEffect(() => {
    if (!active || number === null) return;
    const isFloat = number % 1 !== 0;
    let start: number | null = null;

    function step(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const cur = eased * number!;
      setCount(isFloat ? Math.round(cur * 10) / 10 : Math.floor(cur));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(number!);
    }

    requestAnimationFrame(step);
  }, [active, number, duration]);

  const displayed =
    number !== null
      ? `${prefix}${number % 1 !== 0 ? count.toFixed(1) : count}${suffix}`
      : value;

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {displayed}
    </span>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { tagStyle } from "@/components/ui/tagColor";

const industries = [
  { label: "Financial Services", value: 94, color: "#22AEA4" },
  { label: "Healthcare", value: 87, color: "#5EB359" },
  { label: "Energy & Utilities", value: 79, color: "#22AEA4" },
  { label: "Telecom", value: 83, color: "#5EB359" },
  { label: "Retail", value: 71, color: "#22AEA4" },
];

const badges = ["LGPD", "HIPAA", "SOX", "PCI-DSS", "ISO 27001"];
const LOOP_AT = 4000;

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return inView;
}

export function MockDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<HTMLElement>);
  // Single boolean — CSS transitions handle the animation
  const [animated, setAnimated] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // Small delay so CSS transition runs after mount
    const t0 = setTimeout(() => setAnimated(true), 80);
    const t1 = setTimeout(() => {
      setAnimated(false);
      setKey((k) => k + 1);
    }, LOOP_AT);
    return () => { clearTimeout(t0); clearTimeout(t1); };
  }, [inView, key]);

  return (
    <div ref={ref} className="relative min-h-[260px] lg:min-h-[320px] rounded-2xl overflow-hidden bg-white border border-[#f0f0f0] flex flex-col">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(34,174,164,0.14) 0%, rgba(177,238,81,0.07) 40%, transparent 70%)" }} />
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#fafafa] border-b border-[#f0f0f0] shrink-0">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-[#777169] font-mono">compliance.dashboard</span>
      </div>

      <div className="flex-1 p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-medium text-black">Compliance Coverage</p>
          <p className="text-[11px] text-[#777169]">15+ yrs · 5 verticals</p>
        </div>

        <div className="flex flex-col gap-3 flex-1 justify-center" key={key}>
          {industries.map((ind, i) => (
            <div key={ind.label} className="flex items-center gap-3">
              <span className="text-[11px] text-[#4e4e4e] w-32 shrink-0">{ind.label}</span>
              <div className="flex-1 h-1.5 bg-[#f0f0f0] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: animated ? "100%" : "0%",
                    background: ind.color,
                    transition: `width 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms`,
                  }}
                />
              </div>
              <span className="text-[11px] font-medium text-[#4e4e4e] w-8 text-right">100%</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#f0f0f0]">
          {badges.map((b, bi) => (
            <span key={b} className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={tagStyle(bi)}>{b}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

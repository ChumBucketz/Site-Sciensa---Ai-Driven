"use client";

import { useEffect, useRef, useState } from "react";

const lines = [
  { text: "import { LLMOrchestrator } from '@sciensa/ai'", color: "#22AEA4" },
  { text: "import { PredictivePipeline } from '@sciensa/pipelines'", color: "#22AEA4" },
  { text: "", color: "transparent" },
  { text: "const ai = new LLMOrchestrator({", color: "#c084fc" },
  { text: "  model: 'gpt-4-turbo',", color: "#e2e8f0" },
  { text: "  pipeline: PredictivePipeline.create(),", color: "#e2e8f0" },
  { text: "  embedded: true,", color: "#e2e8f0" },
  { text: "})", color: "#c084fc" },
  { text: "await ai.deploy() // → production", color: "#94a3b8" },
];

const SUCCESS_AT = 4500;
const LOOP_AT = 6500;

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

export function MockTerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<HTMLElement>);
  const [key, setKey] = useState(0);
  const [shown, setShown] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const t0 = setTimeout(() => setShown(true), 80);
    const t1 = setTimeout(() => setShowSuccess(true), SUCCESS_AT);
    const t2 = setTimeout(() => {
      setShown(false);
      setShowSuccess(false);
      // Wait for fade out, then reset key to remount lines
      setTimeout(() => setKey((k) => k + 1), 400);
    }, LOOP_AT);

    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, [inView, key]);

  return (
    <div ref={ref} className="relative min-h-[260px] lg:min-h-[320px] rounded-2xl overflow-hidden bg-[#0e0e0e] flex flex-col">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 100% 100%, rgba(34,174,164,0.22) 0%, rgba(177,238,81,0.10) 40%, transparent 70%)" }} />
      {/* Mac bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1a1a1a] border-b border-white/5 shrink-0">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-white/30 font-mono">ai-layer.ts</span>
      </div>

      <div className="flex-1 p-5 font-mono text-[12px] leading-[1.9] relative overflow-hidden">
        {/* Lines — CSS transition staggered by index */}
        <div key={key} className="flex flex-col">
          {lines.map((line, i) => (
            <div
              key={i}
              className="flex gap-3"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(5px)",
                transition: `opacity 0.3s ease ${i * 180}ms, transform 0.3s ease ${i * 180}ms`,
              }}
            >
              <span className="text-white/15 select-none w-4 shrink-0 text-right">{i + 1}</span>
              <span style={{ color: line.color }}>{line.text || "\u00A0"}</span>
            </div>
          ))}
        </div>

        {/* Success overlay */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none"
          style={{
            background: "rgba(14,14,14,0.92)",
            backdropFilter: "blur(4px)",
            opacity: showSuccess ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          <div className="w-10 h-10 rounded-full bg-[#22AEA4]/15 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10l4.5 4.5L16 6" stroke="#22AEA4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-[13px] font-mono text-[#22AEA4]">AI layer embedded — production ready</p>
          <p className="text-[11px] font-mono text-white/30">deployed in 1.2s</p>
        </div>
      </div>
    </div>
  );
}

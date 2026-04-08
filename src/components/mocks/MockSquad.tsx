"use client";

import { useEffect, useRef, useState } from "react";

const roles = [
  { role: "AI Engineer", avatar: "AE", color: "#22AEA4", task: "Building LLM pipeline", active: true },
  { role: "Data Scientist", avatar: "DS", color: "#5EB359", task: "Training predictive model", active: true },
  { role: "Domain Expert", avatar: "DE", color: "#6366f1", task: "Validating compliance rules", active: true },
  { role: "Platform Eng.", avatar: "PE", color: "#f59e0b", task: "Deploying infrastructure", active: false },
];

const updates = [
  { msg: "Model v2.1 deployed to staging", time: "just now", icon: "✦" },
  { msg: "Compliance validation passed", time: "2m ago", icon: "✓" },
  { msg: "Pipeline throughput +40%", time: "5m ago", icon: "↑" },
];

const LOOP_AT = 5000;

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

export function MockSquad() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<HTMLElement>);
  const [key, setKey] = useState(0);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t0 = setTimeout(() => setShown(true), 80);
    const t1 = setTimeout(() => {
      setShown(false);
      setKey((k) => k + 1);
    }, LOOP_AT);
    return () => { clearTimeout(t0); clearTimeout(t1); };
  }, [inView, key]);

  return (
    <div ref={ref} className="relative min-h-[260px] lg:min-h-[320px] rounded-2xl overflow-hidden bg-white border border-[#f0f0f0] flex flex-col">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 100% 100%, rgba(34,174,164,0.14) 0%, rgba(177,238,81,0.07) 40%, transparent 70%)" }} />
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#fafafa] border-b border-[#f0f0f0] shrink-0">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-[#717171] font-mono">squad.live</span>
        <span className="ml-auto flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
          <span className="text-[10px] text-[#717171]">live</span>
        </span>
      </div>

      <div className="flex-1 p-5 flex flex-col gap-4" key={key}>
        <p className="text-[12px] font-medium text-black">Active Squad · Project Phoenix</p>

        <div className="grid grid-cols-2 gap-2">
          {roles.map((r, i) => (
            <div
              key={r.role}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#fafafa] border border-[#f0f0f0]"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(6px)",
                transition: `opacity 0.3s ease ${i * 120}ms, transform 0.3s ease ${i * 120}ms`,
              }}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0" style={{ background: r.color }}>
                {r.avatar}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-medium text-black truncate">{r.role}</p>
                <p className="text-[10px] text-[#717171] truncate">{r.task}</p>
              </div>
              <span className="ml-auto w-1.5 h-1.5 rounded-full shrink-0" style={{ background: r.active ? "#28c840" : "#e5e5e5" }} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1.5 pt-3 border-t border-[#f0f0f0]">
          {updates.map((u, i) => (
            <div
              key={u.msg}
              className="flex items-center gap-2"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(4px)",
                transition: `opacity 0.3s ease ${600 + i * 150}ms, transform 0.3s ease ${600 + i * 150}ms`,
              }}
            >
              <span className="text-[#22AEA4] text-[11px] shrink-0">{u.icon}</span>
              <span className="text-[11px] text-[#4e4e4e] flex-1">{u.msg}</span>
              <span className="text-[10px] text-[#717171] shrink-0">{u.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

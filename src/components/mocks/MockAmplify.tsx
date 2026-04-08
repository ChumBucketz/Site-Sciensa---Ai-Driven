"use client";

import { useEffect, useRef, useState } from "react";

const phases = [
  { label: "Discovery", duration: "1 week", tasks: ["Stakeholder interviews", "Requirements mapping", "Tech audit"] },
  { label: "Architecture", duration: "1 week", tasks: ["System design", "Stack definition", "Golden path setup"] },
  { label: "MVP Build", duration: "2 weeks", tasks: ["Squad templates", "Core features", "CI/CD pipeline"] },
  { label: "Quality Gates", duration: "3 days", tasks: ["Automated tests", "Security scan", "Performance check"] },
  { label: "Staging", duration: "2 days", tasks: ["E2E validation", "Load testing", "Stakeholder demo"] },
  { label: "Launch", duration: "1 day", tasks: ["Blue/green deploy", "Monitoring live", "Rollback ready"] },
];

const SCROLL_DURATION = 6000;
const LOOP_AT = SCROLL_DURATION + 1500;

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return inView;
}

export function MockAmplify() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<HTMLElement>);
  const [key, setKey] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    if (!inView) return;
    setActivePhase(0);
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft = 0;

    const start = performance.now();
    const maxScroll = track.scrollWidth - track.clientWidth;
    let raf: number;

    function animate(now: number) {
      const t = Math.min((now - start) / SCROLL_DURATION, 1);
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      if (track) track.scrollLeft = eased * maxScroll;
      setActivePhase(Math.min(Math.floor(t * phases.length), phases.length - 1));
      if (t < 1) raf = requestAnimationFrame(animate);
    }

    raf = requestAnimationFrame(animate);
    const loop = setTimeout(() => { cancelAnimationFrame(raf); setKey((k) => k + 1); }, LOOP_AT);
    return () => { cancelAnimationFrame(raf); clearTimeout(loop); };
  }, [inView, key]);

  return (
    <div ref={ref} className="w-full h-full flex flex-col bg-white relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-[#f0f0f0] shrink-0">
        <div className="w-8 h-8 rounded-full bg-[#f0fdf4] flex items-center justify-center shrink-0">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#22AEA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-[13px] font-medium text-black">Amplify</p>
          <p className="text-[10px] text-[rgb(58, 179, 181)]">Digital acceleration platform</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#f0fdf4] text-[#22AEA4] border border-[#bbf7d0]">3× faster delivery</span>
        </div>
      </div>

      {/* Project info */}
      <div className="px-5 pt-3.5 pb-3 shrink-0 flex items-center justify-between border-b border-[#f5f5f5]">
        <div>
          <p className="text-[12px] font-medium text-black">Project Phoenix — Digital Banking MVP</p>
          <p className="text-[11px] text-[rgb(58, 179, 181)] mt-0.5">6 phases · 5.5 weeks · Squad of 8</p>
        </div>
        <div className="flex items-center gap-1">
          {phases.map((_, i) => (
            <div key={i} className="h-1 rounded-full transition-all duration-300"
              style={{ width: i === activePhase ? "16px" : "5px", background: i <= activePhase ? "#22AEA4" : "#e5e5e5" }} />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div ref={trackRef} key={key} className="flex-1 overflow-x-auto overflow-y-hidden px-4 py-4 flex gap-3 items-stretch" style={{ scrollbarWidth: "none" }}>
        {phases.map((phase, i) => {
          const isDone = i < activePhase;
          const isActive = i === activePhase;
          const isUpcoming = i > activePhase;

          return (
            <div key={phase.label} className="flex flex-col shrink-0 w-[150px]"
              style={{ opacity: isUpcoming ? 0.45 : 1, transition: "opacity 0.4s ease" }}>
              <div className="flex-1 rounded-xl p-3.5 flex flex-col gap-2"
                style={{
                  background: isActive ? "#f0fdf4" : isDone ? "#fafafa" : "#fafafa",
                  border: isActive ? "1px solid #bbf7d0" : "1px solid #f0f0f0",
                  transition: "all 0.4s ease",
                }}>
                {/* Status */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full shrink-0"
                    style={{
                      background: isDone || isActive ? "#22AEA4" : "#d1d5db",
                      boxShadow: isActive ? "0 0 6px rgba(34,174,164,0.5)" : "none",
                    }} />
                  <span className="text-[11px] font-medium text-[#1a1a1a]">{phase.label}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-1.5">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#aaa" strokeWidth="2"/>
                    <path d="M12 7v5l3 3" stroke="#aaa" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[10px] text-[rgb(58, 179, 181)]">{phase.duration}</span>
                  {isDone && <span className="ml-auto text-[9px] font-medium text-[#22AEA4]">Done</span>}
                  {isActive && <span className="ml-auto text-[9px] font-medium text-[#22AEA4] animate-pulse">Live</span>}
                </div>

                {/* Tasks */}
                <div className="flex flex-col gap-1 mt-0.5">
                  {phase.tasks.map((task) => (
                    <div key={task} className="flex items-start gap-1.5">
                      {isDone ? (
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none" className="mt-[2px] shrink-0">
                          <path d="M2 6l3 3 5-5" stroke="#22AEA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-[3px] bg-[#e5e5e5]" />
                      )}
                      <span className="text-[10px] text-[rgb(58, 179, 181)] leading-tight">{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center mt-1.5">
                <span className="text-[9px] text-[#ccc] font-medium tracking-widest">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

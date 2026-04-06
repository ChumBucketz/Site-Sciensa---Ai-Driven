"use client";

import { useEffect, useRef, useState } from "react";

const accounts = [
  { id: "ACC-0041", name: "Empresa Delta Ltda", amount: "R$ 84.200", days: 47, score: 91, prob: 88 },
  { id: "ACC-0089", name: "João Ferreira ME", amount: "R$ 12.500", days: 123, score: 62, prob: 54 },
  { id: "ACC-0113", name: "Varejo Norte S.A.", amount: "R$ 231.000", days: 18, score: 97, prob: 95 },
  { id: "ACC-0057", name: "Tech Soluções Ltda", amount: "R$ 38.750", days: 76, score: 74, prob: 71 },
  { id: "ACC-0202", name: "Maria Costa EPP", amount: "R$ 9.100", days: 210, score: 38, prob: 29 },
];

const STAGGER = 900;
const LOOP_AT = 7500;

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

function scoreColor(score: number) {
  if (score >= 85) return { bar: "#ec4899", text: "#9d1557" };
  if (score >= 65) return { bar: "#f97316", text: "#9a3412" };
  return { bar: "#fbbf24", text: "#92400e" };
}

export function MockSmartCollect() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<HTMLElement>);
  const [revealed, setRevealed] = useState<number[]>([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!inView) return;
    setRevealed([]);

    const timers: ReturnType<typeof setTimeout>[] = [];

    accounts.forEach((_, i) => {
      timers.push(setTimeout(() => {
        setRevealed(prev => [...prev, i]);
      }, 400 + i * STAGGER));
    });

    timers.push(setTimeout(() => {
      setRevealed([]);
      setKey(k => k + 1);
    }, LOOP_AT));

    return () => timers.forEach(clearTimeout);
  }, [inView, key]);

  const totalRecovery = revealed.length > 0
    ? accounts.slice(0, revealed.length).reduce((sum, a) => {
        const val = parseFloat(a.amount.replace("R$ ", "").replace(".", "").replace(",", "."));
        return sum + val * (a.prob / 100);
      }, 0)
    : 0;

  return (
    <div ref={ref} className="w-full h-full flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-[#f0f0f0] shrink-0">
        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "linear-gradient(135deg, #fce7f3, #fed7aa)" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#c2185b" strokeWidth="1.6" opacity="0.6"/>
            <path d="M8 12l3 3 5-5" stroke="#c2185b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-[13px] font-medium text-black">SmartCollect</p>
          <p className="text-[10px] text-[#777169]">AI collections engine</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{ background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.2)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899] animate-pulse" />
            <span className="text-[10px] font-medium text-[#9d1557]">Scoring live</span>
          </div>
        </div>
      </div>

      {/* Summary bar */}
      <div className="px-5 py-2.5 border-b border-[#f5f5f5] shrink-0 flex items-center gap-6">
        <div>
          <p className="text-[10px] text-[#aaa] uppercase tracking-wider">Accounts</p>
          <p className="text-[13px] font-medium text-black">{accounts.length} total</p>
        </div>
        <div>
          <p className="text-[10px] text-[#aaa] uppercase tracking-wider">Scored</p>
          <p className="text-[13px] font-medium text-black">{revealed.length} / {accounts.length}</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-[10px] text-[#aaa] uppercase tracking-wider">Est. recovery</p>
          <p className="text-[13px] font-medium"
            style={{ color: totalRecovery > 0 ? "#ec4899" : "#ccc", transition: "color 0.4s ease" }}>
            {totalRecovery > 0
              ? `R$ ${Math.round(totalRecovery).toLocaleString("pt-BR")}`
              : "—"}
          </p>
        </div>
      </div>

      {/* Account list */}
      <div key={key} className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2" style={{ scrollbarWidth: "none" }}>
        {accounts.map((acc, i) => {
          const isRevealed = revealed.includes(i);
          const colors = scoreColor(acc.score);

          return (
            <div key={acc.id}
              className="rounded-xl px-4 py-3 flex flex-col gap-2 bg-white"
              style={{
                border: isRevealed ? "1px solid rgba(236,72,153,0.15)" : "1px solid #f0f0f0",
                opacity: isRevealed ? 1 : 0.4,
                transition: "opacity 0.5s ease, border 0.5s ease",
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] font-medium text-[#1a1a1a] leading-tight">{acc.name}</p>
                  <p className="text-[10px] text-[#aaa] mt-0.5">{acc.id} · {acc.days}d overdue</p>
                </div>
                <div className="text-right">
                  <p className="text-[12px] font-medium text-[#1a1a1a]">{acc.amount}</p>
                  {isRevealed ? (
                    <p className="text-[10px] font-medium mt-0.5" style={{ color: colors.text }}>
                      {acc.prob}% recovery
                    </p>
                  ) : (
                    <p className="text-[10px] text-[#ddd] mt-0.5">scoring…</p>
                  )}
                </div>
              </div>

              {/* Score bar */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 rounded-full bg-[#f0f0f0] overflow-hidden">
                  <div className="h-full rounded-full"
                    style={{
                      width: isRevealed ? `${acc.score}%` : "0%",
                      background: `linear-gradient(90deg, ${colors.bar}99, ${colors.bar})`,
                      transition: "width 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </div>
                <span className="text-[10px] font-medium w-6 text-right shrink-0"
                  style={{ color: isRevealed ? colors.text : "#ccc", transition: "color 0.4s ease" }}>
                  {isRevealed ? acc.score : "—"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

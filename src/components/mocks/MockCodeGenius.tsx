"use client";

import { useEffect, useRef, useState } from "react";

const avatars = [
  { id: "A", name: "Ana", color: "#22AEA4" },
  { id: "R", name: "Rafael", color: "#5EB359" },
  { id: "C", name: "Carla", color: "#b1ee51" },
];

const initialColumns = [
  {
    label: "Backlog",
    cards: [
      { id: 1, title: "Auth module refactor", tags: ["backend"], assigned: null },
      { id: 2, title: "Design system tokens", tags: ["frontend"], assigned: null },
    ],
  },
  {
    label: "In Progress",
    cards: [
      { id: 3, title: "AI code review pipeline", tags: ["AI", "backend"], assigned: null },
      { id: 4, title: "Test coverage +80%", tags: ["QA"], assigned: null },
    ],
  },
  {
    label: "Review",
    cards: [
      { id: 5, title: "API rate limiting", tags: ["backend"], assigned: null },
    ],
  },
  {
    label: "Done",
    cards: [
      { id: 6, title: "CI/CD pipeline setup", tags: ["DevOps"], assigned: null },
      { id: 7, title: "Docs autogeneration", tags: ["AI"], assigned: null },
    ],
  },
];

const assignments = [
  { cardId: 3, avatar: avatars[0] },
  { cardId: 1, avatar: avatars[1] },
  { cardId: 5, avatar: avatars[2] },
  { cardId: 4, avatar: avatars[0] },
  { cardId: 2, avatar: avatars[1] },
  { cardId: 7, avatar: avatars[2] },
];

const LOOP_AT = 8000;

type Column = typeof initialColumns[0];

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

const tagColor: Record<string, { bg: string; text: string }> = {
  AI:       { bg: "rgba(177,238,81,0.18)",  text: "#4a7a10" },
  backend:  { bg: "rgba(34,174,164,0.12)",  text: "#0e6b66" },
  frontend: { bg: "rgba(99,102,241,0.12)",  text: "#4338ca" },
  QA:       { bg: "rgba(245,158,11,0.12)",  text: "#92400e" },
  DevOps:   { bg: "rgba(239,68,68,0.10)",   text: "#991b1b" },
};

export function MockCodeGenius() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<HTMLElement>);
  const [columns, setColumns] = useState<Column[]>(initialColumns.map(col => ({
    ...col, cards: col.cards.map(c => ({ ...c }))
  })));
  const [key, setKey] = useState(0);
  const [justAssigned, setJustAssigned] = useState<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    setColumns(initialColumns.map(col => ({ ...col, cards: col.cards.map(c => ({ ...c, assigned: null })) })));

    const timers: ReturnType<typeof setTimeout>[] = [];

    assignments.forEach((a, i) => {
      timers.push(setTimeout(() => {
        setJustAssigned(a.cardId);
        setColumns(prev => prev.map(col => ({
          ...col,
          cards: col.cards.map(card =>
            card.id === a.cardId ? { ...card, assigned: a.avatar } : card
          ),
        })));
        setTimeout(() => setJustAssigned(null), 600);
      }, 800 + i * 1000));
    });

    timers.push(setTimeout(() => {
      setKey(k => k + 1);
    }, LOOP_AT));

    return () => timers.forEach(clearTimeout);
  }, [inView, key]);

  return (
    <div ref={ref} className="w-full h-full flex flex-col relative overflow-hidden bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-[#f0f0f0] shrink-0">
        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "linear-gradient(135deg, #d4f5a0, #a8e6b0)" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3m8 0h3a2 2 0 002-2v-3" stroke="#2d6a1e" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 9l2 2 4-4" stroke="#2d6a1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-[13px] font-medium text-black">CodeGenius</p>
          <p className="text-[10px] text-[#777169]">AI-native sprint board</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          {avatars.map((a) => (
            <div key={a.id} className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold -ml-1 first:ml-0"
              style={{ background: a.color, color: "#fff", border: "1.5px solid rgba(255,255,255,0.9)" }}>
              {a.id}
            </div>
          ))}
          <span className="ml-2 text-[10px] text-[#aaa]">squad</span>
        </div>
      </div>

      {/* Kanban columns */}
      <div key={key} className="flex-1 overflow-x-auto overflow-y-hidden px-4 py-4 flex gap-3 bg-[#fafafa]" style={{ scrollbarWidth: "none" }}>
        {columns.map((col) => (
          <div key={col.label} className="flex flex-col shrink-0 w-[155px]">
            {/* Column header */}
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[11px] font-medium text-[#999] uppercase tracking-wider">{col.label}</span>
              <span className="text-[10px] text-[#ccc]">{col.cards.length}</span>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-2">
              {col.cards.map((card) => {
                const isNew = justAssigned === card.id;
                return (
                  <div
                    key={card.id}
                    className="rounded-xl p-3 flex flex-col gap-2 relative bg-white"
                    style={{
                      border: isNew ? "1px solid #bbf7d0" : "1px solid #f0f0f0",
                      boxShadow: isNew ? "0 0 0 3px rgba(34,174,164,0.08)" : "none",
                      transition: "border 0.4s ease, box-shadow 0.4s ease",
                    }}
                  >
                    <p className="text-[11px] text-[#1a1a1a] leading-snug">{card.title}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {card.tags.map(t => (
                        <span key={t} className="text-[9px] font-medium px-1.5 py-0.5 rounded"
                          style={{
                            background: tagColor[t]?.bg ?? "rgba(0,0,0,0.05)",
                            color: tagColor[t]?.text ?? "#555",
                          }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Avatar assignment */}
                    <div className="flex items-center justify-between mt-0.5">
                      <div
                        className="flex items-center gap-1.5 transition-all duration-400"
                        style={{ opacity: card.assigned ? 1 : 0.25 }}
                      >
                        {card.assigned ? (
                          <>
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
                              style={{
                                background: card.assigned.color,
                                color: "#fff",
                                boxShadow: isNew ? `0 0 6px ${card.assigned.color}66` : "none",
                                transition: "box-shadow 0.4s ease",
                              }}
                            >
                              {card.assigned.id}
                            </div>
                            <span className="text-[9px] text-[#999]">{card.assigned.name}</span>
                          </>
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-dashed border-[#ddd]" />
                        )}
                      </div>

                      {card.tags.includes("AI") && (
                        <span className="text-[8px] font-medium px-1.5 py-0.5 rounded-full"
                          style={{ background: "rgba(177,238,81,0.18)", color: "#4a7a10", border: "1px solid rgba(177,238,81,0.4)" }}>
                          AI ✦
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

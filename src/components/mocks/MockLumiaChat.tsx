"use client";

import { useEffect, useRef, useState } from "react";

const messages = [
  { from: "user", text: "Hi! I'd like to transfer $2,500 to my savings account.", delay: 400 },
  { from: "lumia", text: "Sure, I can help with that. What's the destination account or routing details?", delay: 1400 },
  { from: "user", text: "Account: 987654321 — Routing: 021000021", delay: 2600 },
  { from: "lumia", text: "Found the account. Here's a summary:\n• Amount: $2,500.00\n• Destination: Chase Savings ···4321\n• Type: Instant transfer\n\nWould you like to confirm?", delay: 3600 },
  { from: "user", text: "Yes, confirm!", delay: 5200 },
  { from: "lumia", text: "✓ Transfer completed successfully! A confirmation has been sent to your email.", delay: 6000, success: true },
];

const LOOP_AT = 9000;

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

export function MockLumiaChat() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<HTMLElement>);
  const [visible, setVisible] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [visible, typing]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const block = (e: Event) => e.preventDefault();
    el.addEventListener("wheel", block, { passive: false });
    el.addEventListener("touchmove", block, { passive: false });
    return () => {
      el.removeEventListener("wheel", block);
      el.removeEventListener("touchmove", block);
    };
  }, []);

  useEffect(() => {
    if (!inView) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    messages.forEach((msg, i) => {
      if (msg.from === "lumia") timers.push(setTimeout(() => setTyping(true), msg.delay - 600));
      timers.push(setTimeout(() => { setTyping(false); setVisible((prev) => [...prev, i]); }, msg.delay));
    });
    timers.push(setTimeout(() => { setVisible([]); setTyping(false); setKey((k) => k + 1); }, LOOP_AT));
    return () => timers.forEach(clearTimeout);
  }, [inView, key]);

  return (
    <div ref={ref} className="w-full h-full flex flex-col relative overflow-hidden bg-[#fafafa]">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3.5 bg-white border-b border-[#f0f0f0] shrink-0">
        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-[#f0eeff]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4" fill="#8b5cf6" opacity="0.8"/>
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
          </svg>
        </div>
        <div>
          <p className="text-[13px] font-medium text-black">Lumia AI</p>
          <p className="text-[10px] text-[#777169]">Intelligent banking assistant</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
          <span className="text-[10px] text-[#777169]">online</span>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} key={key} className="flex-1 overflow-y-scroll px-4 py-4 flex flex-col gap-2.5" style={{ scrollbarWidth: "none" }}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {messages.map((msg, i) => {
          const show = visible.includes(i);
          if (!show) return null;
          const isUser = msg.from === "user";
          return (
            <div key={i} className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              style={{ opacity: 1, transform: "translateY(0)", animation: "fadeSlideIn 0.3s ease" }}>
              <div
                className="max-w-[78%] px-3.5 py-2.5 text-[12px] leading-relaxed whitespace-pre-line"
                style={{
                  borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: isUser ? "#e9e4ff" : "white",
                  color: "#1a1a1a",
                  border: isUser ? "none" : "1px solid #f0f0f0",
                  ...("success" in msg && msg.success ? { background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#166534" } : {}),
                }}
              >
                {msg.text}
              </div>
            </div>
          );
        })}

        {typing && (
          <div className="flex justify-start">
            <div className="px-3.5 py-3 rounded-2xl rounded-bl-[4px] flex items-center gap-1 bg-white border border-[#f0f0f0]">
              {[0, 1, 2].map((i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#c4b5fd]"
                  style={{ animation: `bounce 1s ease infinite ${i * 0.15}s` }} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-4 pb-4 pt-2 shrink-0 bg-white border-t border-[#f0f0f0]">
        <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-full px-4 py-2.5">
          <span className="text-[12px] text-[#aaa] flex-1">Write a message...</span>
          <div className="w-6 h-6 rounded-full bg-[#e9e4ff] flex items-center justify-center shrink-0">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
              <path d="M2 8L14 8M14 8L9 3M14 8L9 13" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

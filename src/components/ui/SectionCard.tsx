"use client";

import { useRef, useState, ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export function SectionCard({ children, className = "" }: SectionCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  function handleMouseLeave() {
    setMouse(null);
  }

  const pos = mouse ? `${mouse.x}px ${mouse.y}px` : "-9999px -9999px";

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative bg-white rounded-2xl overflow-hidden ${className}`}
    >
      {/* Base dots — always visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Spotlight dots — revealed by mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.22) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: `radial-gradient(circle 380px at ${pos}, black 0%, transparent 65%)`,
          WebkitMaskImage: `radial-gradient(circle 380px at ${pos}, black 0%, transparent 65%)`,
        }}
      />

      {/* Content — sits above dots */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

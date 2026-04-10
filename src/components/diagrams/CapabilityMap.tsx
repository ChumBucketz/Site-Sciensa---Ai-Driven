"use client";

import React, { useState } from "react";

// ── Layout ────────────────────────────────────────────────────────────────────
const W = 700, H = 360;
const CX = 350, CY = 180;
const RX = 205, RY = 118; // elliptical orbit (wide, flat)
const R_HUB = 42;
const NW = 148, NH = 52; // node pill

// ── Data ─────────────────────────────────────────────────────────────────────
const CAPS = [
  { id: "ai",       label: "AI Engineering",    sub: "LLMs · RAG · Agents",   angle: -90, c1: "#C4B5FD", c2: "#7C3AED" },
  { id: "platform", label: "Platform Eng.",     sub: "Scale · Resilience",    angle: -30, c1: "#93C5FD", c2: "#1D4ED8" },
  { id: "data",     label: "Data & AI",         sub: "Pipelines · Analytics", angle:  30, c1: "#6EE7B7", c2: "#059669" },
  { id: "api",      label: "API & Integration", sub: "APIs · Events",         angle:  90, c1: "#FCD34D", c2: "#B45309" },
  { id: "cloud",    label: "Cloud & DevSecOps", sub: "Security · SRE",        angle: 150, c1: "#FCA5A5", c2: "#B91C1C" },
  { id: "product",  label: "Product & UX",      sub: "Design · Frontend",     angle: 210, c1: "#F9A8D4", c2: "#9D174D" },
] as const;

// ── Icons (24×24 coordinate space, will be scaled) ───────────────────────────
const ICONS: Record<string, React.ReactNode> = {
  ai: (
    <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.5 2.4-7.4L2 9.6h7.6z" fill="currentColor" />
  ),
  platform: (
    <>
      <rect x="2" y="3" width="20" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="2" y="14" width="20" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18.5" cy="7" r="1.3" fill="currentColor" />
      <circle cx="18.5" cy="17.5" r="1.3" fill="currentColor" />
    </>
  ),
  data: (
    <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  ),
  api: (
    <path
      d="M21 7.5H3M3 7.5l4.5-4M3 7.5l4.5 4M3 16.5h18M21 16.5l-4.5-4M21 16.5l-4.5 4"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    />
  ),
  cloud: (
    <path
      d="M12 22s-8-4.5-8-10.5V5l8-3 8 3v6.5c0 6-8 10.5-8 10.5z"
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"
    />
  ),
  product: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
};

const ICO_S = 13 / 24; // icon scale (24→13px)

function orbPos(angle: number) {
  const a = (angle * Math.PI) / 180;
  return { x: CX + RX * Math.cos(a), y: CY + RY * Math.sin(a) };
}

// ── Component ─────────────────────────────────────────────────────────────────
export function CapabilityMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className="rounded-2xl overflow-hidden border"
      style={{ background: "#0b0d14", borderColor: "rgba(255,255,255,0.08)" }}
    >
      <style>{`
        @keyframes cmap-flow  { to { stroke-dashoffset: -24; } }
        @keyframes cmap-pulse { 0%{transform:scale(1);opacity:.5} 100%{transform:scale(1.8);opacity:0} }
      `}</style>

      {/* Window chrome ─── dark */}
      <div
        className="flex items-center gap-1.5 px-4 py-3 border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span
          className="ml-3 text-[11px] font-mono"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          sciensa.capabilities
        </span>
      </div>

      {/* SVG diagram */}
      <div className="p-3 md:p-6">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
          <defs>
            {/* BG radial */}
            <radialGradient id="cmap-bg" cx="50%" cy="50%" r="52%">
              <stop offset="0%" stopColor="#161926" />
              <stop offset="100%" stopColor="#0b0d14" />
            </radialGradient>

            {/* Node gradients */}
            {CAPS.map((c) => (
              <radialGradient key={c.id} id={`cmap-ng-${c.id}`} cx="28%" cy="28%" r="78%">
                <stop offset="0%" stopColor={c.c1} />
                <stop offset="100%" stopColor={c.c2} />
              </radialGradient>
            ))}

            {/* Hub gradient */}
            <radialGradient id="cmap-hub" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#2a2c4e" />
              <stop offset="100%" stopColor="#0e0f1e" />
            </radialGradient>

          </defs>

          {/* ── Background ─────────────────────────────────────────────────── */}
          <rect width={W} height={H} fill="url(#cmap-bg)" rx="14" />

          {/* ── Decorative rings (elliptical, static) ───────────────────────── */}
          <ellipse cx={CX} cy={CY} rx={RX + 34} ry={RY + 32}
            fill="none" stroke="rgba(255,255,255,0.055)" strokeWidth="1" strokeDasharray="2 10" />
          <ellipse cx={CX} cy={CY} rx={RX + 50} ry={RY + 46}
            fill="none" stroke="rgba(255,255,255,0.028)" strokeWidth="1" strokeDasharray="4 18" />

          {/* Orbit guide */}
          <ellipse cx={CX} cy={CY} rx={RX} ry={RY}
            fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

          {/* ── Spokes ──────────────────────────────────────────────────────── */}
          {CAPS.map((c, i) => {
            const { x, y } = orbPos(c.angle);
            const on  = active === c.id;
            const off = active !== null && !on;
            return (
              <g key={`spoke-${c.id}`}>
                {/* Wide glow layer */}
                <line x1={CX} y1={CY} x2={x} y2={y}
                  stroke={c.c1} strokeWidth={on ? 6 : 2}
                  opacity={on ? 0.22 : off ? 0.01 : 0.07}
                  style={{ transition: "all .4s" }}
                />
                {/* Animated dash */}
                <line x1={CX} y1={CY} x2={x} y2={y}
                  stroke={c.c1} strokeWidth={on ? 1.5 : 1}
                  strokeDasharray="6 6"
                  opacity={on ? 1 : off ? 0.04 : 0.3}
                  style={{
                    animation: `cmap-flow ${1.6 + i * 0.2}s linear infinite`,
                    transition: "opacity .4s, stroke-width .4s",
                  }}
                />
              </g>
            );
          })}

          {/* ── Hub pulse rings ─────────────────────────────────────────────── */}
          {[0, 1].map((k) => (
            <circle
              key={k}
              cx={CX} cy={CY} r={R_HUB + 8}
              fill="none" stroke="rgba(139,130,255,0.5)" strokeWidth="1.5"
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                animation: `cmap-pulse 3s ease-out ${k * 1.5}s infinite`,
              }}
            />
          ))}

          {/* ── Hub ─────────────────────────────────────────────────────────── */}
          <circle cx={CX} cy={CY} r={R_HUB} fill="url(#cmap-hub)" />
          <circle cx={CX} cy={CY} r={R_HUB}
            fill="none" stroke="rgba(139,130,255,0.4)" strokeWidth="1.5" />
          <text x={CX} y={CY - 5} textAnchor="middle"
            fontSize="12" fontWeight="700" fill="white"
            fontFamily="system-ui,-apple-system,sans-serif" letterSpacing=".1em">
            SCIENSA
          </text>
          <text x={CX} y={CY + 12} textAnchor="middle"
            fontSize="8.5" fill="rgba(255,255,255,0.28)"
            fontFamily="ui-monospace,monospace">
            platform
          </text>

          {/* ── Nodes ───────────────────────────────────────────────────────── */}
          {CAPS.map((c) => {
            const { x, y } = orbPos(c.angle);
            const on  = active === c.id;
            const off = active !== null && !on;
            const px  = x - NW / 2;
            const py  = y - NH / 2;

            return (
              <g
                key={c.id}
                onMouseEnter={() => setActive(c.id)}
                onMouseLeave={() => setActive(null)}
                style={{ cursor: "default" }}
              >
                {/* Outer glow halo */}
                <rect x={px - 8} y={py - 8} width={NW + 16} height={NH + 16} rx={22}
                  fill={c.c1}
                  opacity={on ? 0.22 : 0}
                  style={{ transition: "opacity .4s" }}
                />

                {/* Opaque occluder — hides spoke beneath the node */}
                <rect x={px} y={py} width={NW} height={NH} rx={14} fill="#0b0d14" />

                {/* Pill fill */}
                <rect x={px} y={py} width={NW} height={NH} rx={14}
                  fill={`url(#cmap-ng-${c.id})`}
                  opacity={on ? 0.45 : off ? 0.04 : 0.18}
                  style={{ transition: "opacity .4s" }}
                />

                {/* Pill border */}
                <rect x={px} y={py} width={NW} height={NH} rx={14}
                  fill="none"
                  stroke={c.c1}
                  strokeWidth={on ? 1.5 : 1}
                  opacity={on ? 1 : off ? 0.08 : 0.45}
                  style={{ transition: "all .4s" }}
                />

                {/* Left color accent strip */}
                <rect x={px + 1} y={py + 9} width={2.5} height={NH - 18} rx={2}
                  fill={`url(#cmap-ng-${c.id})`}
                  opacity={on ? 1 : off ? 0.15 : 0.65}
                  style={{ transition: "opacity .4s" }}
                />

                {/* Icon halo */}
                <circle cx={px + 20} cy={y} r={12}
                  fill={c.c1}
                  opacity={on ? 0.35 : off ? 0.05 : 0.14}
                  style={{ transition: "opacity .4s" }}
                />

                {/* Icon */}
                <g
                  transform={`translate(${px + 20 - 6.5},${y - 6.5}) scale(${ICO_S})`}
                  color={c.c1}
                >
                  {ICONS[c.id]}
                </g>

                {/* Labels */}
                <text
                  x={px + 36} y={y - 5}
                  fontSize="10.5" fontWeight="600" fill={c.c1}
                  fontFamily="ui-monospace,monospace"
                  opacity={on ? 1 : off ? 0.15 : 0.85}
                  style={{ transition: "opacity .4s" }}
                >
                  {c.label}
                </text>
                <text
                  x={px + 36} y={y + 11}
                  fontSize="8.5" fill="rgba(255,255,255,0.38)"
                  fontFamily="system-ui,-apple-system,sans-serif"
                  opacity={on ? 1 : off ? 0.1 : 0.7}
                  style={{ transition: "opacity .4s" }}
                >
                  {c.sub}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

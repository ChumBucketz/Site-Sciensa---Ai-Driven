"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import {
  BrainCircuit, Layers, Database, Plug, Cloud, Sparkles,
  Landmark, CreditCard, Bot, Network, Cpu,
  BadgeDollarSign, ShoppingCart, HeartPulse, Zap, Radio, Truck,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const platformItems = [
  { label: "Amplify", description: "AI-powered delivery acceleration.", href: "/platforms/amplify", gradient: "linear-gradient(135deg, #22AEA4 0%, #5EB359 100%)", symbol: "/logos/Amplify.png" },
  { label: "Lumia AI", description: "Enterprise LLM orchestration.", href: "/platforms/lumia-ai", gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)", symbol: "/logos/Lumia.png" },
  // { label: "CodeGenius", description: "AI-native code generation at scale.", href: "/platforms/codegenius", gradient: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)", symbol: "/logos/Code Genious.png" },
  { label: "Nextdue", description: "Intelligent collections lifecycle.", href: "/platforms/nextdue", gradient: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)", symbol: "/logos/nextdue symbol.png" },
];

const megaMenus = [
  {
    label: "Capabilities", href: "/capabilities",
    columns: [
      { title: "Engineering", links: [
        { label: "AI Engineering", href: "/capabilities/ai-engineering", icon: BrainCircuit },
        { label: "Platform Engineering", href: "/capabilities/platform-engineering", icon: Layers },
        { label: "API & Integration", href: "/capabilities/api-integration", icon: Plug },
        { label: "Cloud & DevSecOps", href: "/capabilities/cloud-devsecops", icon: Cloud },
      ]},
      { title: "Product & Data", links: [
        { label: "Data & AI", href: "/capabilities/data-ai", icon: Database },
        { label: "Product & Experience", href: "/capabilities/product-experience", icon: Sparkles },
      ]},
    ],
  },
  {
    label: "Solutions", href: "/solutions",
    columns: [
      { title: "Financial", links: [
        { label: "Digital Banking", href: "/solutions/digital-banking", icon: Landmark },
        { label: "Payments Modernization", href: "/solutions/payments-modernization", icon: CreditCard },
        { label: "AI for Financial Institutions", href: "/solutions/ai-financial-institutions", icon: BadgeDollarSign },
        { label: "Core Modernization", href: "/solutions/core-modernization", icon: Cpu },
      ]},
      { title: "Enterprise", links: [
        { label: "Enterprise AI", href: "/solutions/enterprise-ai", icon: Bot },
        { label: "Marketplace & Orchestration", href: "/solutions/marketplace-orchestration", icon: Network },
      ]},
    ],
  },
  {
    label: "Industries", href: "/industries",
    columns: [
      { title: "Finance & Commerce", links: [
        { label: "Financial Services", href: "/industries/financial-services", icon: BadgeDollarSign },
        { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce", icon: ShoppingCart },
      ]},
      { title: "Infrastructure & Health", links: [
        { label: "Healthcare & Life Sciences", href: "/industries/healthcare", icon: HeartPulse },
        { label: "Energy & Utilities", href: "/industries/energy-utilities", icon: Zap },
        { label: "Telecommunications", href: "/industries/telecommunications", icon: Radio },
        { label: "Mobility & Logistics", href: "/industries/mobility-logistics", icon: Truck },
      ]},
    ],
  },
];

// ─── Dropdown card shell ───────────────────────────────────────────────────────

function DropdownCard({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <div
      className="absolute top-[calc(100%+6px)] right-0 z-50 pointer-events-none"
      style={{
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0px)" : "translateY(-6px)",
        transition: "opacity 150ms ease, transform 150ms ease",
        pointerEvents: open ? "auto" : "none",
      }}
    >
      <div
        className="rounded-2xl bg-white p-5 min-w-[260px]"
        style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.07), 0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)" }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Platform dropdown ─────────────────────────────────────────────────────────

function PlatformDropdown({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <DropdownCard open={open}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#9CA3AF]">Platforms</span>
        <Link href="/platforms" onClick={onClose} className="text-[12px] font-medium text-[#4e4e4e] hover:text-black transition-colors whitespace-nowrap">
          Learn more →
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-2" style={{ minWidth: 480 }}>
        {platformItems.map((p) => (
          <Link key={p.href} href={p.href} onClick={onClose}
            className="group flex flex-col rounded-xl overflow-hidden hover:bg-[#f5f5f5] transition-colors"
          >
            {/* Preview card */}
            <div className="h-24 w-full relative overflow-hidden rounded-xl mb-2.5 flex items-center justify-center" style={{ background: p.gradient }}>
              <div className="absolute inset-0 opacity-[0.15]" style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }} />
              <div className="relative w-10 h-10 rounded-full flex items-center justify-center">
                {p.symbol
                  ? <Image src={p.symbol} alt={p.label} width={48} height={48} className="object-contain brightness-0 invert" />
                  : <span className="text-white font-bold text-sm">{p.label[0]}</span>
                }
              </div>
            </div>
            <div className="px-1 pb-2">
              <p className="text-[13px] font-medium text-black leading-tight tracking-tight">{p.label}</p>
              <p className="text-[11px] text-[#9CA3AF] leading-snug mt-0.5">{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </DropdownCard>
  );
}

// ─── Column dropdown ───────────────────────────────────────────────────────────

function ColumnDropdown({
  open, onClose, columns, href, label,
}: {
  open: boolean; onClose: () => void;
  columns: typeof megaMenus[0]["columns"];
  href: string; label: string;
}) {
  return (
    <DropdownCard open={open}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#9CA3AF]">{label}</span>
        <Link href={href} onClick={onClose} className="text-[12px] font-medium text-[#4e4e4e] hover:text-black transition-colors">
          All →
        </Link>
      </div>
      <div className="flex">
        {columns.map((col, ci) => (
          <div key={col.title} className={`flex flex-col ${ci > 0 ? "border-l border-[#F3F4F6] ml-4 pl-4" : ""}`}>
            <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#9CA3AF] mb-2 px-2 whitespace-nowrap">{col.title}</p>
            <ul className="space-y-0.5">
              {col.links.map((link) => {
                const Icon = "icon" in link ? link.icon : null;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[#f5f5f5] transition-colors group whitespace-nowrap"
                    >
                      {Icon && <Icon size={13} className="shrink-0 text-[#D1D5DB] group-hover:text-[#6B7280] transition-colors" />}
                      <span className="text-[13px] text-[#374151] group-hover:text-black transition-colors tracking-tight">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </DropdownCard>
  );
}

// ─── Nav item with dropdown ────────────────────────────────────────────────────

function NavDropdown({
  label, activeMenu, setActiveMenu, hoverTimer, children,
}: {
  label: string;
  activeMenu: string | null;
  setActiveMenu: (v: string | null) => void;
  hoverTimer: React.RefObject<ReturnType<typeof setTimeout> | null>;
  children: (open: boolean, close: () => void) => React.ReactNode;
}) {
  const open = activeMenu === label;

  function enter() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setActiveMenu(label);
  }
  function leave() {
    hoverTimer.current = setTimeout(() => setActiveMenu(null), 120);
  }
  function keepOpen() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  }

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        onClick={() => setActiveMenu(open ? null : label)}
        className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-[4px] transition-colors tracking-[0.01em] cursor-pointer ${open ? "text-black bg-[#f5f5f5]" : "text-[#4e4e4e] hover:text-black hover:bg-[#f5f5f5]"}`}
      >
        {label}
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className={`shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`}>
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div onMouseEnter={keepOpen} onMouseLeave={leave}>
        {children(open, () => setActiveMenu(null))}
      </div>
    </div>
  );
}

// ─── Mobile accordion ──────────────────────────────────────────────────────────

function MobileAccordion({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#f0f0f0]">
      <button
        className="flex items-center justify-between w-full px-3 py-3.5 text-[15px] font-medium text-[#4e4e4e]"
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && <div className="pb-3">{children}</div>}
    </div>
  );
}

// ─── Header ────────────────────────────────────────────────────────────────────

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMounted, setMobileMounted] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [mobileContent, setMobileContent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 12); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleMobile() {
    if (mobileMounted) {
      setMobileContent(false);
      t1.current = setTimeout(() => {
        setMobileExpanded(false);
        t2.current = setTimeout(() => setMobileMounted(false), 240);
      }, 160);
    } else {
      setMobileMounted(true);
      requestAnimationFrame(() => {
        setMobileExpanded(true);
        t1.current = setTimeout(() => setMobileContent(true), 200);
      });
    }
  }

  const closeAll = useCallback(() => {
    setActiveMenu(null);
    setMobileContent(false);
    setTimeout(() => {
      setMobileExpanded(false);
      setTimeout(() => setMobileMounted(false), 240);
    }, 160);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* ── Navbar ── */}
      <header
        className="transition-all duration-300"
        style={{
          background: scrolled ? "rgba(245,245,245,0.88)" : "rgba(245,245,245,0.82)",
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.05)" : "none",
        }}
      >
        <div className="max-w-[1336px] mx-auto px-4 lg:px-0 h-14 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="shrink-0 hover:opacity-80 transition-opacity" onClick={closeAll}>
            <Image src="/logos/Logo Sciensa.svg" alt="Sciensa" width={156} height={42} className="h-[55px] w-auto" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 ml-auto">
            <Link href="/about" className="px-3 py-2 text-[13px] font-medium text-[#4e4e4e] hover:text-black rounded-[4px] transition-colors tracking-[0.01em]">
              About
            </Link>

            {megaMenus.map((menu) => (
              <NavDropdown key={menu.label} label={menu.label} activeMenu={activeMenu} setActiveMenu={setActiveMenu} hoverTimer={hoverTimer}>
                {(open, close) => (
                  <ColumnDropdown open={open} onClose={() => { close(); closeAll(); }} columns={menu.columns} href={menu.href} label={menu.label} />
                )}
              </NavDropdown>
            ))}

            <NavDropdown label="Platforms" activeMenu={activeMenu} setActiveMenu={setActiveMenu} hoverTimer={hoverTimer}>
              {(open, close) => (
                <PlatformDropdown open={open} onClose={() => { close(); closeAll(); }} />
              )}
            </NavDropdown>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center shrink-0 ml-4">
            <Button href="/contact" variant="black-pill">Contact us</Button>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 text-black" onClick={toggleMobile} aria-label="Toggle menu">
            {mobileMounted ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      {mobileMounted && (
        <div
          className="md:hidden overflow-hidden"
          style={{
            background: "rgba(245,245,245,0.95)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            maxHeight: mobileExpanded ? "80vh" : "0px",
            transition: "max-height 240ms cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div style={{ opacity: mobileContent ? 1 : 0, transition: "opacity 160ms ease", overflowY: "auto", maxHeight: "80vh" }}>
            <div className="px-4 py-2">
              <Link href="/about" className="block px-3 py-3.5 text-[15px] font-medium text-[#4e4e4e] border-b border-[#f0f0f0]" onClick={closeAll}>About</Link>

              {megaMenus.map((menu) => (
                <MobileAccordion key={menu.label} label={menu.label}>
                  {menu.columns.map((col) => (
                    <div key={col.title} className="mt-2">
                      <p className="px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9CA3AF]">{col.title}</p>
                      {col.links.map((link) => {
                        const Icon = "icon" in link ? link.icon : null;
                        return (
                          <Link key={link.href} href={link.href} onClick={closeAll}
                            className="flex items-center gap-2.5 px-3 py-2.5 text-[15px] text-[#4e4e4e] hover:text-black rounded-[6px] hover:bg-[#f0f0f0] transition-colors"
                          >
                            {Icon && <Icon size={15} className="shrink-0 text-[#D1D5DB]" />}
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                  <Link href={menu.href} onClick={closeAll} className="block px-3 mt-3 text-[13px] font-medium text-[#22AEA4]">
                    All {menu.label.toLowerCase()} →
                  </Link>
                </MobileAccordion>
              ))}

              <MobileAccordion label="Platforms">
                <div className="space-y-1 pt-1">
                  {platformItems.map((p) => (
                    <Link key={p.href} href={p.href} onClick={closeAll}
                      className="flex items-center gap-3 px-3 py-2 rounded-[8px] hover:bg-[#f0f0f0] transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center overflow-hidden" style={{ background: p.gradient }}>
                        {p.symbol
                          ? <Image src={p.symbol} alt={p.label} width={20} height={20} className="object-contain" />
                          : <span className="text-white font-bold text-xs">{p.label[0]}</span>
                        }
                      </div>
                      <div>
                        <p className="text-[14px] font-medium text-black">{p.label}</p>
                        <p className="text-[12px] text-[#9CA3AF] leading-snug">{p.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </MobileAccordion>

              <div className="pt-3 pb-4">
                <Link href="/contact" onClick={closeAll}
                  className="block px-4 py-3 text-[15px] font-medium text-white bg-black rounded-full text-center hover:bg-[#111] transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

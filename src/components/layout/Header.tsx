"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import {
  BrainCircuit, Layers, Database, Plug, Cloud, Sparkles,
  Landmark, CreditCard, Bot, ShoppingBag, Network, Cpu,
  BadgeDollarSign, ShoppingCart, HeartPulse, Zap, Radio, Truck,
} from "lucide-react";

// ─── Menu data ────────────────────────────────────────────────────────────────

const platformItems = [
  {
    label: "Amplify",
    description: "AI-powered delivery acceleration platform.",
    href: "/platforms/amplify",
    gradient: "linear-gradient(135deg, #22AEA4 0%, #5EB359 100%)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Lumia AI",
    description: "Enterprise LLM orchestration and agent framework.",
    href: "/platforms/lumia-ai",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4" fill="white" opacity="0.9"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    label: "CodeGenius",
    description: "AI-native code generation and review at scale.",
    href: "/platforms/codegenius",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3m8 0h3a2 2 0 002-2v-3" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.8"/>
        <path d="M9 9l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "SmartCollect",
    description: "Intelligent collections and credit lifecycle management.",
    href: "/platforms/smartcollect",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="white" strokeWidth="1.6" opacity="0.5"/>
        <path d="M12 6v6l4 2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 14s1 2 4 2 4-2 4-2" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const megaMenus = [
  {
    label: "Capabilities",
    href: "/capabilities",
    columns: [
      {
        title: "Engineering",
        links: [
          { label: "AI Engineering", href: "/capabilities/ai-engineering", icon: BrainCircuit },
          { label: "Platform Engineering", href: "/capabilities/platform-engineering", icon: Layers },
          { label: "API & Integration", href: "/capabilities/api-integration", icon: Plug },
          { label: "Cloud & DevSecOps", href: "/capabilities/cloud-devsecops", icon: Cloud },
        ],
      },
      {
        title: "Product & Data",
        links: [
          { label: "Data & AI", href: "/capabilities/data-ai", icon: Database },
          { label: "Product & Experience", href: "/capabilities/product-experience", icon: Sparkles },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    columns: [
      {
        title: "Financial",
        links: [
          { label: "Digital Banking", href: "/solutions/digital-banking", icon: Landmark },
          { label: "Payments Modernization", href: "/solutions/payments-modernization", icon: CreditCard },
          { label: "AI for Financial Institutions", href: "/solutions/ai-financial-institutions", icon: BadgeDollarSign },
          { label: "Core Modernization", href: "/solutions/core-modernization", icon: Cpu },
        ],
      },
      {
        title: "Enterprise",
        links: [
          { label: "Enterprise AI", href: "/solutions/enterprise-ai", icon: Bot },
          { label: "Marketplace & Orchestration", href: "/solutions/marketplace-orchestration", icon: Network },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    columns: [
      {
        title: "Finance & Commerce",
        links: [
          { label: "Financial Services", href: "/industries/financial-services", icon: BadgeDollarSign, primary: true },
          { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce", icon: ShoppingCart },
        ],
      },
      {
        title: "Infrastructure & Health",
        links: [
          { label: "Healthcare & Life Sciences", href: "/industries/healthcare", icon: HeartPulse },
          { label: "Energy & Utilities", href: "/industries/energy-utilities", icon: Zap },
          { label: "Telecommunications", href: "/industries/telecommunications", icon: Radio },
          { label: "Mobility & Logistics", href: "/industries/mobility-logistics", icon: Truck },
        ],
      },
    ],
  },
];

// ─── Desktop: Platform mega menu ──────────────────────────────────────────────

function PlatformMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="py-6 px-8">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#777169]">Platforms</span>
        <Link href="/platforms" className="text-[13px] font-medium text-[#4e4e4e] hover:text-black transition-colors" onClick={onClose}>
          All platforms →
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {platformItems.map((p) => (
          <Link key={p.href} href={p.href} onClick={onClose}
            className="group p-2 rounded-xl hover:bg-white transition-colors"
          >
            <div
              className="h-28 w-full rounded-lg mb-3 relative overflow-hidden flex items-center justify-center"
              style={{ background: p.gradient }}
            >
              {/* Dots grid */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              {/* Icon */}
              <div className="relative flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(4px)" }}>
                  {p.icon}
                </div>
                <span className="text-[11px] font-medium text-white/80 tracking-wide">{p.label}</span>
              </div>
            </div>
            <p className="text-[14px] font-medium text-black group-hover:text-[#22AEA4] transition-colors tracking-tight">{p.label}</p>
            <p className="text-[12px] text-[#777169] leading-snug mt-0.5">{p.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── Desktop: Column mega menu ────────────────────────────────────────────────

function ColumnMegaMenu({
  columns,
  href,
  label,
  onClose,
}: {
  columns: typeof megaMenus[0]["columns"];
  href: string;
  label: string;
  onClose: () => void;
}) {
  return (
    <div className="py-6 px-8">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#777169]">{label}</span>
        <Link href={href} className="text-[13px] font-medium text-[#4e4e4e] hover:text-black transition-colors" onClick={onClose}>
          All {label.toLowerCase()} →
        </Link>
      </div>
      <div className={`grid gap-8`} style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#777169] mb-3">{col.title}</p>
            <ul className="space-y-1">
              {col.links.map((link) => {
                const Icon = "icon" in link ? link.icon : null;
                const isPrimary = "primary" in link && link.primary;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-[8px] hover:bg-[#f5f5f5] transition-colors group"
                    >
                      {Icon && (
                        <Icon size={15} className={`shrink-0 transition-colors ${isPrimary ? "text-[#22AEA4]" : "text-[#bbb] group-hover:text-[#4e4e4e]"}`} />
                      )}
                      <span className={`text-[14px] tracking-[0.01em] transition-colors ${isPrimary ? "font-medium text-black" : "text-[#4e4e4e] group-hover:text-black"}`}>
                        {link.label}
                      </span>
                      {isPrimary && (
                        <span className="text-[9px] font-medium uppercase tracking-widest text-[#22AEA4] ml-auto">Primary</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Desktop nav item with mega menu ──────────────────────────────────────────

function NavItem({
  label,
  href,
  open,
  onEnter,
  onLeave,
}: {
  label: string;
  href: string;
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <Link
        href={href}
        className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-[4px] transition-colors tracking-[0.01em] ${open ? "text-black bg-[#f5f5f5]" : "text-[#4e4e4e] hover:text-black hover:bg-[#f5f5f5]"}`}
      >
        {label}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`}>
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}

// ─── Mobile accordion ─────────────────────────────────────────────────────────

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

// ─── Header ───────────────────────────────────────────────────────────────────

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openMenu(key: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(key);
  }

  function closeMenu() {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 80);
  }

  function closeAll() {
    setActiveMenu(null);
    setMobileOpen(false);
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(245,245,245,0.90)" : "rgba(245,245,245,1)",
        backdropFilter: scrolled ? "blur(40px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(40px) saturate(180%)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.05)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="shrink-0 hover:opacity-80 transition-opacity" onClick={closeAll}>
          <Image src="/logos/Sciensa logo.png" alt="Sciensa" width={120} height={32} className="h-7 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center ml-auto">
          <Link href="/about" className="px-3 py-2 text-[13px] font-medium text-[#4e4e4e] hover:text-black rounded-[4px] hover:bg-[#f5f5f5] transition-colors tracking-[0.01em]">
            About
          </Link>

          {megaMenus.map((menu) => (
            <NavItem
              key={menu.href}
              label={menu.label}
              href={menu.href}
              open={activeMenu === menu.label}
              onEnter={() => openMenu(menu.label)}
              onLeave={closeMenu}
            />
          ))}

          <NavItem
            label="Platforms"
            href="/platforms"
            open={activeMenu === "Platforms"}
            onEnter={() => openMenu("Platforms")}
            onLeave={closeMenu}
          />

          <Link href="/insights" className="px-3 py-2 text-[13px] font-medium text-[#4e4e4e] hover:text-black rounded-[4px] hover:bg-[#f5f5f5] transition-colors tracking-[0.01em]">
            Insights
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0 ml-4">
          <Link href="/case-studies" className="text-[13px] font-medium text-[#777169] hover:text-black transition-colors tracking-[0.01em]">
            Case studies
          </Link>
          <Button href="/contact" variant="black-pill">Contact us</Button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 text-black" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? (
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

      {/* ── Desktop mega menu panel ── */}
      {activeMenu && (
        <div
          className="hidden md:block absolute top-full left-0 right-0"
          style={{
            background: scrolled ? "rgba(245,245,245,0.90)" : "rgba(245,245,245,1)",
            backdropFilter: scrolled ? "blur(40px) saturate(180%)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(40px) saturate(180%)" : "none",
            boxShadow: "0 1px 0 rgba(0,0,0,0.06), rgba(0,0,0,0.04) 0px 8px 24px, rgba(0,0,0,0.04) 0px 2px 6px",
          }}
          onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
          onMouseLeave={closeMenu}
        >
          <div className="max-w-7xl mx-auto">
            {activeMenu === "Platforms" && (
              <PlatformMegaMenu onClose={closeAll} />
            )}
            {megaMenus.map((menu) =>
              activeMenu === menu.label ? (
                <ColumnMegaMenu key={menu.label} columns={menu.columns} href={menu.href} label={menu.label} onClose={closeAll} />
              ) : null
            )}
          </div>
        </div>
      )}

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden max-h-[80vh] overflow-y-auto"
          style={{
            background: scrolled ? "rgba(245,245,245,0.90)" : "rgba(245,245,245,1)",
            backdropFilter: scrolled ? "blur(40px) saturate(180%)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(40px) saturate(180%)" : "none",
          }}
        >
          <div className="px-4 py-2">
            <Link href="/about" className="block px-3 py-3.5 text-[15px] font-medium text-[#4e4e4e] border-b border-[#f0f0f0]" onClick={closeAll}>About</Link>

            {megaMenus.map((menu) => (
              <MobileAccordion key={menu.label} label={menu.label}>
                {menu.columns.map((col) => (
                  <div key={col.title} className="mt-2">
                    <p className="px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-[#777169]">{col.title}</p>
                    {col.links.map((link) => {
                      const Icon = "icon" in link ? link.icon : null;
                      return (
                        <Link key={link.href} href={link.href} onClick={closeAll}
                          className="flex items-center gap-2.5 px-3 py-2.5 text-[15px] text-[#4e4e4e] hover:text-black rounded-[6px] hover:bg-[#f5f5f5] transition-colors"
                        >
                          {Icon && <Icon size={15} className="shrink-0 text-[#bbb]" />}
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                ))}
                <Link href={menu.href} onClick={closeAll} className="block px-3 mt-3 text-[13px] font-medium text-[#22AEA4] hover:underline">
                  All {menu.label.toLowerCase()} →
                </Link>
              </MobileAccordion>
            ))}

            <MobileAccordion label="Platforms">
              <div className="space-y-2 pt-1">
                {platformItems.map((p) => (
                  <Link key={p.href} href={p.href} onClick={closeAll} className="flex items-center gap-3 px-3 py-2 rounded-[8px] hover:bg-[#f5f5f5] transition-colors">
                    <div className="w-10 h-10 rounded-lg shrink-0" style={{ background: p.gradient }} />
                    <div>
                      <p className="text-[14px] font-medium text-black">{p.label}</p>
                      <p className="text-[12px] text-[#777169] leading-snug">{p.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </MobileAccordion>

            <Link href="/insights" className="block px-3 py-3.5 text-[15px] font-medium text-[#4e4e4e] border-b border-[#f0f0f0]" onClick={closeAll}>Insights</Link>
            <Link href="/case-studies" className="block px-3 py-3.5 text-[15px] font-medium text-[#4e4e4e] border-b border-[#f0f0f0]" onClick={closeAll}>Case studies</Link>

            <div className="pt-3 pb-4">
              <Link href="/contact" onClick={closeAll}
                className="block px-4 py-3 text-[15px] font-medium text-white bg-black rounded-full text-center hover:bg-[#111] transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";

const dropdownMenus = [
  {
    label: "Capabilities",
    href: "/capabilities",
    items: [
      { label: "AI Engineering", href: "/capabilities/ai-engineering" },
      { label: "Platform Engineering", href: "/capabilities/platform-engineering" },
      { label: "Data & AI", href: "/capabilities/data-ai" },
      { label: "API & Integration", href: "/capabilities/api-integration" },
      { label: "Cloud & DevSecOps", href: "/capabilities/cloud-devsecops" },
      { label: "Product & Experience", href: "/capabilities/product-experience" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Digital Banking", href: "/solutions/digital-banking" },
      { label: "Payments Modernization", href: "/solutions/payments-modernization" },
      { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
      { label: "AI for Financial Institutions", href: "/solutions/ai-financial-institutions" },
      { label: "Marketplace & Orchestration", href: "/solutions/marketplace-orchestration" },
      { label: "Core Modernization", href: "/solutions/core-modernization" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    items: [
      { label: "Financial Services", href: "/industries/financial-services", primary: true },
      { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
      { label: "Healthcare & Life Sciences", href: "/industries/healthcare" },
      { label: "Energy & Utilities", href: "/industries/energy-utilities" },
      { label: "Telecommunications", href: "/industries/telecommunications" },
      { label: "Mobility & Logistics", href: "/industries/mobility-logistics" },
    ],
  },
  {
    label: "Platforms",
    href: "/platforms",
    items: [
      { label: "Amplify", href: "/platforms/amplify" },
      { label: "Lumia AI", href: "/platforms/lumia-ai" },
      { label: "CodeGenius", href: "/platforms/codegenius" },
      { label: "SmartCollect", href: "/platforms/smartcollect" },
    ],
  },
];

const simpleLinks = [
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

function NavDropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { label: string; href: string; primary?: boolean }[];
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 80);
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className="flex items-center gap-1 px-3.5 py-2 text-[15px] font-medium text-[#4e4e4e] hover:text-black rounded-[4px] hover:bg-[#f5f5f5] transition-colors tracking-[0.01em]"
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-60 p-1.5 bg-white rounded-[12px] z-50"
          style={{
            boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 4px 8px, rgba(0,0,0,0.04) 0px 8px 16px",
          }}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between px-4 py-2.5 rounded-[6px] hover:bg-[#f5f5f5] transition-colors group"
            >
              <span
                className={`text-[14px] tracking-[0.01em] transition-colors ${
                  item.primary
                    ? "font-medium text-black"
                    : "text-[#4e4e4e] group-hover:text-black"
                }`}
              >
                {item.label}
              </span>
              {item.primary && (
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#777169]">
                  Primary
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-black font-semibold text-base tracking-tight shrink-0 hover:opacity-70 transition-opacity"
        >
          Sciensa
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          {/* About */}
          <Link
            href="/about"
            className="px-3.5 py-2 text-[15px] font-medium text-[#4e4e4e] hover:text-black rounded-[4px] hover:bg-[#f5f5f5] transition-colors tracking-[0.01em]"
          >
            About
          </Link>

          {dropdownMenus.map((menu) => (
            <NavDropdown key={menu.href} {...menu} />
          ))}

          <Link
            href="/insights"
            className="px-3.5 py-2 text-[15px] font-medium text-[#4e4e4e] hover:text-black rounded-[4px] hover:bg-[#f5f5f5] transition-colors tracking-[0.01em]"
          >
            Insights
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <Link
            href="/case-studies"
            className="text-[15px] font-medium text-[#777169] hover:text-black transition-colors tracking-[0.01em]"
          >
            Case studies
          </Link>
          <Button href="/contact" variant="black-pill">
            Contact us
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[rgba(0,0,0,0.05)] bg-white px-6 py-4 flex flex-col gap-1">
          <Link href="/about" className="px-3 py-2.5 text-[15px] font-medium text-[#4e4e4e] hover:text-black rounded-[6px] hover:bg-[#f5f5f5] transition-colors" onClick={() => setMobileOpen(false)}>About</Link>
          <p className="px-3 pt-3 pb-1 text-[11px] font-medium uppercase tracking-widest text-[#777169]">Capabilities</p>
          {dropdownMenus[0].items.map(i => <Link key={i.href} href={i.href} className="px-3 py-2.5 text-[15px] text-[#4e4e4e] hover:text-black rounded-[6px] hover:bg-[#f5f5f5] transition-colors" onClick={() => setMobileOpen(false)}>{i.label}</Link>)}
          <p className="px-3 pt-3 pb-1 text-[11px] font-medium uppercase tracking-widest text-[#777169]">Solutions</p>
          {dropdownMenus[1].items.map(i => <Link key={i.href} href={i.href} className="px-3 py-2.5 text-[15px] text-[#4e4e4e] hover:text-black rounded-[6px] hover:bg-[#f5f5f5] transition-colors" onClick={() => setMobileOpen(false)}>{i.label}</Link>)}
          <p className="px-3 pt-3 pb-1 text-[11px] font-medium uppercase tracking-widest text-[#777169]">Industries</p>
          {dropdownMenus[2].items.map(i => <Link key={i.href} href={i.href} className={`px-3 py-2.5 text-[15px] rounded-[6px] hover:bg-[#f5f5f5] transition-colors ${i.primary ? "font-medium text-black" : "text-[#4e4e4e] hover:text-black"}`} onClick={() => setMobileOpen(false)}>{i.label}</Link>)}
          <p className="px-3 pt-3 pb-1 text-[11px] font-medium uppercase tracking-widest text-[#777169]">Platforms</p>
          {dropdownMenus[3].items.map(i => <Link key={i.href} href={i.href} className="px-3 py-2.5 text-[15px] text-[#4e4e4e] hover:text-black rounded-[6px] hover:bg-[#f5f5f5] transition-colors" onClick={() => setMobileOpen(false)}>{i.label}</Link>)}
          <div className="pt-3 border-t border-[#e5e5e5] mt-2 flex flex-col gap-1">
            <Link href="/insights" className="px-3 py-2.5 text-[15px] font-medium text-[#4e4e4e] hover:text-black rounded-[6px] hover:bg-[#f5f5f5] transition-colors" onClick={() => setMobileOpen(false)}>Insights</Link>
            <Link href="/case-studies" className="px-3 py-2.5 text-[15px] font-medium text-[#4e4e4e] hover:text-black rounded-[6px] hover:bg-[#f5f5f5] transition-colors" onClick={() => setMobileOpen(false)}>Case studies</Link>
            <Link href="/contact" className="mt-2 px-4 py-2.5 text-[15px] font-medium text-white bg-black rounded-[9999px] text-center hover:bg-[#111111] transition-colors" onClick={() => setMobileOpen(false)}>Contact us</Link>
          </div>
        </div>
      )}
    </header>
  );
}

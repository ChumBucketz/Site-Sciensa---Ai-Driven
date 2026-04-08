"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { tagStyle } from "@/components/ui/tagColor";
import {
  BadgeDollarSign, ShoppingCart, HeartPulse, Zap, Radio, Truck,
} from "lucide-react";

const filters = ["All", "Finance", "Health & Energy", "Tech & Logistics"] as const;
type Filter = typeof filters[number];

const industries = [
  {
    title: "Financial Services",
    description: "Core banking, payments, credit platforms, open finance, and regulatory compliance at scale.",
    href: "/industries/financial-services",
    filter: "Finance" as Filter,
    icon: BadgeDollarSign,
    color: "#22AEA4",
    tags: ["Open Finance", "Payments", "Core Banking", "Compliance"],
  },
  {
    title: "Retail & E-Commerce",
    description: "Omnichannel platforms, recommendation engines, and marketplace orchestration.",
    href: "/industries/retail-ecommerce",
    filter: "Finance" as Filter,
    icon: ShoppingCart,
    color: "#5EB359",
    tags: ["Omnichannel", "Recommendations", "Marketplace"],
  },
  {
    title: "Healthcare & Life Sciences",
    description: "Clinical data intelligence, telemedicine, and LGPD/HIPAA-compliant AI solutions.",
    href: "/industries/healthcare",
    filter: "Health & Energy" as Filter,
    icon: HeartPulse,
    color: "#6366f1",
    tags: ["Clinical AI", "Telemedicine", "HIPAA", "LGPD"],
  },
  {
    title: "Energy & Utilities",
    description: "Grid optimization, predictive maintenance, ESG analytics, and operational intelligence.",
    href: "/industries/energy-utilities",
    filter: "Health & Energy" as Filter,
    icon: Zap,
    color: "#f59e0b",
    tags: ["Grid Ops", "Predictive Maintenance", "ESG"],
  },
  {
    title: "Telecommunications",
    description: "Network analytics, billing modernization, churn prediction, and digital experience.",
    href: "/industries/telecommunications",
    filter: "Tech & Logistics" as Filter,
    icon: Radio,
    color: "#22AEA4",
    tags: ["Network Analytics", "Billing", "Churn AI"],
  },
  {
    title: "Mobility & Logistics",
    description: "Fleet intelligence, route optimization, real-time tracking, and supply chain visibility.",
    href: "/industries/mobility-logistics",
    filter: "Tech & Logistics" as Filter,
    icon: Truck,
    color: "#5EB359",
    tags: ["Fleet AI", "Route Optimization", "Supply Chain"],
  },
];

export function IndustriesGrid() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = active === "All" ? industries : industries.filter((i) => i.filter === active);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-start">

      {/* Left — cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <FadeIn key={ind.title} delay={i * 60} className="h-full">
              <Link
                href={ind.href}
                className="group el-card bg-white p-6 flex flex-col h-full hover:shadow-lg transition-shadow"
              >
                <h3 className="text-[15px] font-medium text-black mb-2 tracking-tight group-hover:text-[#22AEA4] transition-colors">
                  {ind.title}
                </h3>
                <p className="text-[14px] text-[#4e4e4e] leading-relaxed tracking-[0.01em] flex-1">
                  {ind.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-[#f0f0f0]">
                  {ind.tags.map((t, ti) => (
                    <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={tagStyle(ti)}>
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </FadeIn>
          );
        })}
      </div>

      {/* Right — sticky text + filters */}
      <div className="lg:sticky lg:top-24">
        <FadeIn>
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#717171] mb-4">// INDUSTRY STUDIOS</p>
          <h2 className="text-heading text-black mb-4" style={{ maxWidth: "22ch" }}>
            Deep expertise across the industries that matter.
          </h2>
          <p className="text-[15px] text-[#4e4e4e] leading-relaxed mb-8 max-w-xs tracking-[0.01em]">
            Vertical studios with domain specialists, regulatory knowledge, and purpose-built solutions.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-colors tracking-[0.01em] ${
                  active === f
                    ? "bg-black text-white"
                    : "bg-white text-[#4e4e4e] hover:text-black border border-[#e5e5e5] hover:border-[#ccc]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <Link href="/industries" className="text-[14px] font-medium text-black hover:text-[#4e4e4e] transition-colors">
            All industries →
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}

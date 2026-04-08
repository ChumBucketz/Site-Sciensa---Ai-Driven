"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/sections/SectionHeader";

const industries = [
  {
    title: "Financial Services",
    description: "Core banking, payments, credit platforms, open finance, and regulatory compliance at scale.",
    href: "/industries/financial-services",
    bg: "bg-[#e5e3df]",
  },
  {
    title: "Retail & E-commerce",
    description: "Omnichannel platforms, recommendation engines, and marketplace orchestration.",
    href: "/industries/retail-ecommerce",
    bg: "bg-[#dfe3e0]",
  },
  {
    title: "Healthcare & Life Sciences",
    description: "Clinical data intelligence, telemedicine, and LGPD/HIPAA-compliant AI solutions.",
    href: "/industries/healthcare",
    bg: "bg-[#e3dfdf]",
  },
  {
    title: "Telecommunications",
    description: "Network analytics, billing modernization, churn prediction, and digital experience.",
    href: "/industries/telecommunications",
    bg: "bg-[#dfe0e3]",
  },
  {
    title: "Energy & Utilities",
    description: "Grid optimization, predictive maintenance, ESG analytics, and operational intelligence.",
    href: "/industries/energy-utilities",
    bg: "bg-[#e3e3df]",
  },
];

export function IndustryStudios() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <SectionHeader eyebrow="// INDUSTRY STUDIOS" headline="Industry Studios" />

      {/* Mobile: image on top, list below */}
      <div className="mt-6 lg:hidden">
        <div className="relative h-[200px] rounded-2xl overflow-hidden mb-4">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className={`absolute inset-0 ${ind.bg} transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {industries.map((ind, i) => (
            <button
              key={ind.title}
              onClick={() => setActive(i)}
              className={`text-left w-full px-4 py-3 rounded-xl transition-colors duration-200 ${
                i === active ? "el-card" : "hover:bg-white/60"
              }`}
            >
              <p className={`text-[15px] font-medium tracking-tight ${
                i === active ? "text-black" : "text-[#4e4e4e]"
              }`}>
                {ind.title}
              </p>
              <p className="text-[13px] text-[rgb(58, 179, 181)] leading-relaxed tracking-[0.01em] mt-0.5">
                {ind.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: fixed-height side-by-side */}
      <div className="mt-8 hidden lg:grid lg:grid-cols-[1fr_1fr] lg:h-[420px] gap-4">

        {/* List — left */}
        <div className="flex flex-col justify-between h-full gap-2">
          {industries.map((ind, i) => (
            <button
              key={ind.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setActive(i)}
              className={`text-left w-full px-5 py-4 rounded-2xl transition-colors duration-200 flex-1 flex flex-col justify-center ${
                i === active ? "el-card" : hovered === i ? "bg-white/60" : ""
              }`}
            >
              <p className={`text-[15px] font-medium tracking-tight transition-colors duration-200 ${
                i === active ? "text-black" : "text-[#4e4e4e]"
              }`}>
                {ind.title}
              </p>
              <p className="text-[13px] text-[rgb(58, 179, 181)] leading-relaxed tracking-[0.01em] mt-1">
                {ind.description}
              </p>
            </button>
          ))}
        </div>

        {/* Image — right, full height */}
        <div className="relative h-full rounded-2xl overflow-hidden">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className={`absolute inset-0 ${ind.bg} transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

      </div>
    </>
  );
}

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "warm" | "brand";
}

export function Badge({ children, className = "", variant = "default" }: BadgeProps) {
  const base = "inline-flex self-start w-fit items-center text-[10px] font-medium uppercase tracking-widest px-2 py-0.5 rounded-[4px]";
  const variants = {
    default: "bg-[#f5f5f5] text-[#4e4e4e]",
    outline: "border border-[#e5e5e5] text-[#4e4e4e]",
    warm:    "bg-[rgba(245,242,239,0.95)] text-[#4e4e4e] shadow-[rgba(0,0,0,0.06)_0px_0px_0px_1px]",
    brand:   "text-white",
  };

  return (
    <span
      className={`${base} ${variants[variant]} ${className}`}
      style={variant === "brand" ? { background: "rgb(58, 179, 181)" } : undefined}
    >
      {children}
    </span>
  );
}

import { ReactNode } from "react";

interface MonoLabelProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export function MonoLabel({ children, className = "", light = false }: MonoLabelProps) {
  return (
    <span
      className={`text-label ${light ? "text-white/50" : "text-[#777169]"} ${className}`}
    >
      {children}
    </span>
  );
}

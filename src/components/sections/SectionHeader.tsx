import { MonoLabel } from "@/components/ui/MonoLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  light?: boolean;
  align?: "left" | "center";
  action?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  light = false,
  align = "left",
  action,
}: SectionHeaderProps) {
  const center = align === "center" ? "text-center" : "";

  return (
    <div className={`flex flex-col gap-3 ${center}`}>
      {eyebrow && (
        <FadeIn delay={0}>
          <MonoLabel light={light}>{eyebrow}</MonoLabel>
        </FadeIn>
      )}
      <FadeIn delay={80}>
        <h2
          className="text-heading"
          style={{
            color: light ? "#ffffff" : "#000000",
            maxWidth: "32ch",
          }}
        >
          {headline}
        </h2>
      </FadeIn>
      {subheadline && (
        <FadeIn delay={160}>
          <p
            className="text-subheading"
            style={{
              color: light ? "rgba(255,255,255,0.6)" : "#4e4e4e",
              maxWidth: "52ch",
            }}
          >
            {subheadline}
          </p>
        </FadeIn>
      )}
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}

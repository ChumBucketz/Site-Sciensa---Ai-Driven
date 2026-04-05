import { MonoLabel } from "@/components/ui/MonoLabel";
import { ReactNode } from "react";

interface HeroSimpleProps {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  actions?: ReactNode;
}

export function HeroSimple({ eyebrow, headline, subheadline, actions }: HeroSimpleProps) {
  return (
    <section className="pt-28 pb-16 px-6 border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto">
        <MonoLabel className="block mb-5">{eyebrow}</MonoLabel>
        <h1 className="text-heading text-black" style={{ maxWidth: "22ch" }}>
          {headline}
        </h1>
        {subheadline && (
          <p className="text-subheading mt-5 max-w-2xl">{subheadline}</p>
        )}
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}

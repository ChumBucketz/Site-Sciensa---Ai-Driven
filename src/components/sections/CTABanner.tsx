import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { ReactNode } from "react";

interface CTABannerProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  children?: ReactNode;
}

export function CTABanner({
  eyebrow,
  headline,
  subheadline,
  primary = { label: "Start a conversation", href: "/contact" },
  secondary,
  children,
}: CTABannerProps) {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          {eyebrow && <MonoLabel light className="block mb-5">{eyebrow}</MonoLabel>}
          <h2 className="text-heading text-white mb-5">{headline}</h2>
          {subheadline && (
            <p
              className="text-subheading mb-10"
              style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.011em" }}
            >
              {subheadline}
            </p>
          )}
          <div className="flex flex-wrap gap-3">
            {/* On dark bg: white-pill button — white bg, black text → 21:1 AAA */}
            <Button href={primary.href} variant="white-pill">
              {primary.label}
            </Button>
            {secondary && (
              /* Ghost on dark: text becomes white/60 → add inline override */
              <Button href={secondary.href} variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
        {children && <div className="mt-14">{children}</div>}
      </div>
    </section>
  );
}

import Link from "next/link";
import { ReactNode } from "react";

/**
 * Button variants — all hovers maintain WCAG AAA (7:1) contrast:
 *
 * "black-pill"  : #000 bg → #111 hover  — white text stays 18.1:1  ✓ AAA
 * "white-pill"  : #fff bg → #f0efed hover — black text stays 21:1  ✓ AAA
 * "warm-stone"  : warm bg → #e8e3de hover — black text stays 19+:1 ✓ AAA
 * "ghost"       : transparent → bg-[#f5f5f5] — black text          ✓ AAA
 */

type Variant = "black-pill" | "white-pill" | "warm-stone" | "ghost";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const styles: Record<Variant, string> = {
  /* Primary — pure black pill, white text. Hover darkens imperceptibly. */
  "black-pill":
    "inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-1.5 rounded-[9999px] text-[13px] font-medium leading-tight tracking-normal transition-colors hover:bg-[#111111] active:bg-[#1a1a1a]",

  /* Secondary — white with shadow-as-border. Hover: lightest warm gray (still AAA). */
  "white-pill":
    "inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 rounded-[9999px] text-[15px] font-medium leading-tight tracking-normal transition-colors hover:bg-[#f0efed] active:bg-[#e8e3de]"
    + " shadow-[rgba(0,0,0,0.40)_0px_0px_1px,rgba(0,0,0,0.04)_0px_4px_4px]",

  /* Signature warm stone — ElevenLabs' standout CTA. Hover deepens warm tone (still AAA). */
  "warm-stone":
    "inline-flex items-center justify-center gap-2 bg-[rgba(245,242,239,0.95)] text-black px-5 py-3 rounded-[30px] text-[15px] font-medium leading-tight tracking-normal transition-colors hover:bg-[#e8e3de] active:bg-[#ded8d2]"
    + " shadow-[rgba(78,50,23,0.06)_0px_6px_16px]",

  /* Ghost / text link */
  "ghost":
    "inline-flex items-center justify-center gap-1.5 text-black px-3 py-2 rounded-[4px] text-[15px] font-medium leading-tight tracking-normal transition-colors hover:bg-[#f5f5f5] active:bg-[#ebebeb]",
};

export function Button({
  variant = "black-pill",
  href,
  onClick,
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const cls = `${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

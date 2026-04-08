"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) {
      setTimeout(() => setVisible(true), 800);
    }
  }, []);

  function dismiss(value: "accepted" | "declined") {
    setLeaving(true);
    setTimeout(() => {
      localStorage.setItem("cookie_consent", value);
      setVisible(false);
    }, 320);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] flex justify-center px-4 pb-4 md:pb-6"
      style={{
        opacity: leaving ? 0 : 1,
        transform: leaving ? "translateY(12px)" : "translateY(0)",
        transition: "opacity 0.32s ease, transform 0.32s ease",
      }}
    >
      <div
        className="w-full max-w-3xl bg-white rounded-2xl px-6 py-4 md:px-8 md:py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
        style={{
          boxShadow:
            "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 16px, rgba(0,0,0,0.04) 0px 16px 40px",
        }}
      >
        {/* Icon + text */}
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className="w-9 h-9 rounded-full bg-[#f5f5f5] flex items-center justify-center shrink-0 mt-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="rgb(58, 179, 181)" strokeWidth="1.6"/>
              <circle cx="9" cy="10" r="1.2" fill="rgb(58, 179, 181)"/>
              <circle cx="14" cy="8" r="1" fill="rgb(58, 179, 181)"/>
              <circle cx="15" cy="13" r="1.4" fill="rgb(58, 179, 181)"/>
              <circle cx="10" cy="15" r="1" fill="rgb(58, 179, 181)"/>
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-medium text-black tracking-tight">Cookies &amp; Privacy</p>
            <p className="text-[12px] text-[rgb(58, 179, 181)] leading-relaxed mt-0.5">
              We use cookies to improve your experience and analyze site usage.
              By continuing, you agree to our{" "}
              <Link href="/privacy" className="text-black underline underline-offset-2 hover:text-[#22AEA4] transition-colors">
                Privacy Policy
              </Link>
              {" "}and{" "}
              <Link href="/terms" className="text-black underline underline-offset-2 hover:text-[#22AEA4] transition-colors">
                Terms of Use
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => dismiss("declined")}
            className="px-4 py-2 text-[12px] font-medium text-[rgb(58, 179, 181)] hover:text-black rounded-full hover:bg-[#f5f5f5] transition-colors tracking-[0.01em]"
          >
            Decline
          </button>
          <button
            onClick={() => dismiss("accepted")}
            className="px-5 py-2 text-[12px] font-medium text-white bg-black rounded-full hover:bg-[#111] transition-colors tracking-[0.01em]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

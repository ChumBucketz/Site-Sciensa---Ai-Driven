"use client";

export function NewsletterForm() {
  return (
    <form className="flex gap-2.5 max-w-md" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 bg-white/10 border border-white/20 rounded-[9999px] px-5 py-2.5 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
      />
      {/* White-pill on dark bg — white bg, black text → 21:1 AAA. Hover #f0efed → still AAA */}
      <button
        type="submit"
        className="bg-white text-black px-5 py-2.5 rounded-[9999px] text-[15px] font-medium hover:bg-[#f0efed] active:bg-[#e8e3de] transition-colors shrink-0 shadow-[rgba(0,0,0,0.4)_0px_0px_1px,rgba(0,0,0,0.04)_0px_4px_4px]"
      >
        Subscribe
      </button>
    </form>
  );
}

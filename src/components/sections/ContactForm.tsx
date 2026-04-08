"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const inquiryTypes = [
  "New project inquiry",
  "Partnership opportunity",
  "Media & press",
  "Careers",
  "General question",
];

const inputCls =
  "w-full border border-[#e5e5e5] rounded-[8px] px-4 py-2.5 text-[15px] bg-white text-black placeholder:text-[rgb(58, 179, 181)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black/20 transition-colors";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-10">
        <p className="text-xl font-light text-black">Message sent.</p>
        <p className="text-[#4e4e4e] mt-2 text-[15px] tracking-[0.01em]">
          We'll get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Company" name="company" />
      </div>

      <div>
        <label className="block text-label text-[rgb(58, 179, 181)] mb-1.5">Inquiry type</label>
        <select name="inquiry" className={inputCls}>
          {inquiryTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-label text-[rgb(58, 179, 181)] mb-1.5">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us about your challenge or project..."
          className={`${inputCls} resize-none`}
        />
      </div>

      <Button type="submit" variant="black-pill">
        Send message
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-label text-[rgb(58, 179, 181)] mb-1.5">{label}</label>
      <input name={name} type={type} required={required} className={
        "w-full border border-[#e5e5e5] rounded-[8px] px-4 py-2.5 text-[15px] bg-white text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black/20 transition-colors"
      } />
    </div>
  );
}

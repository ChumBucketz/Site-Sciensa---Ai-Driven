"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { PhoneInput } from "@/components/ui/PhoneInput";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputCls =
  "w-full border rounded-[8px] px-4 py-2.5 text-[15px] bg-white text-black placeholder:text-[#717171] focus:outline-none focus:ring-1 transition-colors";
const validCls   = "border-[#e5e5e5] focus:border-black focus:ring-black/20";
const invalidCls = "border-red-400 focus:border-red-500 focus:ring-red-200";

type Status = "idle" | "loading" | "success" | "error";

type Errors = Partial<Record<"name" | "email" | "phone" | "company" | "message", string>>;

export function ContactForm() {
  const [status, setStatus]   = useState<Status>("idle");
  const [phone, setPhone]     = useState("");
  const [errors, setErrors]   = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<string, boolean>>>({});
  const formRef = useRef<HTMLFormElement>(null);

  function validate(fd: FormData, phoneVal: string): Errors {
    const e: Errors = {};
    if (!fd.get("name"))                      e.name    = "Name is required.";
    if (!fd.get("email"))                     e.email   = "Email is required.";
    else if (!EMAIL_RE.test(fd.get("email") as string)) e.email = "Enter a valid email address.";
    if (!phoneVal || phoneVal.length < 7)     e.phone   = "Phone is required.";
    if (!fd.get("company"))                   e.company = "Company is required.";
    if (!fd.get("message"))                   e.message = "Message is required.";
    return e;
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    const fd   = new FormData(formRef.current);
    const errs = validate(fd, phone);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setTouched({ name: true, email: true, phone: true, company: true, message: true });
      return;
    }

    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name:    fd.get("name")    as string,
        email:   fd.get("email")  as string,
        phone,
        company: fd.get("company") as string,
        message: fd.get("message") as string,
      }),
    });

    setStatus(res.ok ? "success" : "error");
  }

  function blurField(field: string, fd: FormData) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(fd, phone));
  }

  if (status === "success") {
    return (
      <div className="py-10 flex flex-col gap-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(34,174,164,0.1)" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="rgb(34,174,164)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-xl font-light text-black tracking-tight">Thank you for reaching out.</p>
          <p className="text-[#4e4e4e] mt-2 text-[15px] tracking-[0.01em] leading-relaxed">
            Your message has been received. Our team will get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  const err = (field: keyof Errors) =>
    touched[field] && errors[field] ? errors[field] : undefined;

  const cls = (field: keyof Errors) =>
    `${inputCls} ${err(field) ? invalidCls : validCls}`;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Name */}
        <Field label="Name" name="name" error={err("name")}
          inputCls={cls("name")}
          onBlur={(fd) => blurField("name", fd)} />

        {/* Email */}
        <div>
          <label className="block text-label text-[#717171] mb-1.5">Email</label>
          <input
            name="email"
            type="email"
            required
            className={cls("email")}
            onBlur={() => {
              if (!formRef.current) return;
              blurField("email", new FormData(formRef.current));
            }}
          />
          {err("email") && <p className="mt-1 text-[12px] text-red-500">{err("email")}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-label text-[#717171] mb-1.5">Phone</label>
          <PhoneInput
            value={phone}
            onChange={(v) => {
              setPhone(v);
              if (touched.phone && formRef.current)
                setErrors(validate(new FormData(formRef.current), v));
            }}
            name="phone"
            invalid={!!err("phone")}
          />
          {err("phone") && <p className="mt-1 text-[12px] text-red-500">{err("phone")}</p>}
        </div>

        {/* Company */}
        <Field label="Company" name="company" error={err("company")}
          inputCls={cls("company")}
          onBlur={(fd) => blurField("company", fd)} />

      </div>

      {/* Message */}
      <div>
        <label className="block text-label text-[#717171] mb-1.5">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us about your challenge or project..."
          className={`${cls("message")} resize-none`}
          onBlur={() => {
            if (!formRef.current) return;
            blurField("message", new FormData(formRef.current));
          }}
        />
        {err("message") && <p className="mt-1 text-[12px] text-red-500">{err("message")}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again or email us at contato@sciensa.com.
        </p>
      )}

      <Button type="submit" variant="black-pill" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  inputCls: cls,
  onBlur,
}: {
  label: string;
  name: string;
  error?: string;
  inputCls: string;
  onBlur: (fd: FormData) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <label className="block text-label text-[#717171] mb-1.5">{label}</label>
      <input
        ref={ref}
        name={name}
        required
        className={cls}
        onBlur={(e) => {
          const form = e.currentTarget.closest("form");
          if (form) onBlur(new FormData(form));
        }}
      />
      {error && <p className="mt-1 text-[12px] text-red-500">{error}</p>}
    </div>
  );
}

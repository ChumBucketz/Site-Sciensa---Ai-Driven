import { HeroSimple } from "@/components/sections/HeroSimple";
import { ContactForm } from "@/components/sections/ContactForm";
import { MonoLabel } from "@/components/ui/MonoLabel";

export default function Contact() {
  return (
    <>
      <HeroSimple
        eyebrow="Contact"
        headline="Let's start a conversation"
        subheadline="Whether you're planning a new platform, exploring AI, or just want to talk engineering — we'd love to hear from you."        video="https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486156/0_Abstract_Background_3840x2160_eu366r.mp4"
      />

      <section className="max-w-[1336px] mx-auto px-4 3xl:px-0 py-3 pb-6">
        <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-light text-black mb-8 tracking-tight">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <MonoLabel className="block mb-4">Office</MonoLabel>
                <p className="text-base font-medium text-black tracking-tight">
                  São Paulo, <span className="text-[#717171] font-normal">Brazil</span>
                </p>
                <p className="text-[15px] text-[#4e4e4e] mt-1 tracking-[0.01em]">
                  Alameda Campinas, 802, Conjunto 122 — Jardim Paulista
                </p>
                <p className="text-[14px] text-[#717171] mt-0.5">São Paulo – SP, 01404-200</p>
              </div>

              {/* Google Maps embed */}
              <div className="overflow-hidden rounded-2xl border border-[#e5e5e5]" style={{ height: 300, position: "relative" }}>
                <iframe
                  title="Sciensa Office"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Alameda+Campinas,+802,+Jardim+Paulista,+S%C3%A3o+Paulo+SP+01404-200&output=embed&z=16"
                />
              </div>

              <div className="el-card p-6">
                <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">
                  We typically respond within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

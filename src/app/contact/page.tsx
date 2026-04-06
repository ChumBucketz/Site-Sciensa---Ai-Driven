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

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3 pb-6">
        <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-light text-black mb-8 tracking-tight">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <MonoLabel className="block mb-3">Email</MonoLabel>
                <a
                  href="mailto:hello@sciensa.com"
                  className="text-base font-medium text-black hover:text-[#4e4e4e] transition-colors"
                >
                  hello@sciensa.com
                </a>
              </div>

              <div>
                <MonoLabel className="block mb-5">Offices</MonoLabel>
                <div className="space-y-6">
                  {[
                    { city: "São Paulo", country: "Brazil", address: "Av. Paulista 1000, 12° andar — Bela Vista" },
                    { city: "Remote", country: "Global", address: "Distributed team across Latin America, US & Europe" },
                  ].map((office) => (
                    <div key={office.city}>
                      <p className="text-base font-medium text-black tracking-tight">
                        {office.city}, <span className="text-[#777169] font-normal">{office.country}</span>
                      </p>
                      <p className="text-[15px] text-[#4e4e4e] mt-1 tracking-[0.01em]">{office.address}</p>
                    </div>
                  ))}
                </div>
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

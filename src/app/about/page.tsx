import { HeroSimple } from "@/components/sections/HeroSimple";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StatGrid } from "@/components/sections/StatGrid";
import { CTABanner } from "@/components/sections/CTABanner";

const timeline = [
  { year: "2014", event: "Founded in São Paulo as a boutique consultancy for financial services technology." },
  { year: "2016", event: "Expanded platform engineering practice; first enterprise banking client." },
  { year: "2018", event: "Launched Data & AI practice; opened second office." },
  { year: "2020", event: "200+ engineers; established partnerships with AWS, Google Cloud and Azure." },
  { year: "2022", event: "Launched Amplify and Nextdue platforms; entered healthcare and retail verticals." },
  { year: "2024", event: "500+ engineers; launched Lumia AI and CodeGenius platforms; expanded to 6 industries." },
];

const values = [
  { title: "Engineering excellence", description: "We believe that world-class engineering is the foundation of every great product. No shortcuts." },
  { title: "Ownership mindset", description: "We act like co-founders, not contractors. Every decision is made with the client's long-term success in mind." },
  { title: "Relentless curiosity", description: "We study every new technology with rigor, adopt what works, and share what we learn openly." },
  { title: "Build for scale", description: "Everything we design is meant to handle 10× what it handles today. Architecture first, features second." },
];

const leadership = [
  { name: "CEO & Co-Founder", role: "Strategy & Vision" },
  { name: "CTO & Co-Founder", role: "Engineering & Architecture" },
  { name: "VP Engineering", role: "Delivery & Excellence" },
  { name: "VP AI & Data", role: "AI Engineering & Data Science" },
  { name: "Head of Platforms", role: "Product Platforms" },
  { name: "Head of Sales", role: "Growth & Partnerships" },
];

export default function About() {
  return (
    <>
      <HeroSimple
        eyebrow="About Sciensa"
        headline="Engineering what matters most"
        subheadline="Sciensa is a technology engineering firm that designs, builds and operates mission-critical platforms for the most demanding industries in Latin America and beyond."        video="https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486819/0_Abstract_Art_Abstract_Background_3840x2160_1_yxjqpf.mp4"
      />

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="bg-white rounded-2xl px-5 md:px-10 py-12">
          <StatGrid stats={[
            { value: "500+", label: "Engineers" },
            { value: "10+", label: "Years" },
            { value: "120+", label: "Enterprise clients" },
            { value: "6", label: "Industries" },
          ]} />
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-heading text-black mb-8">Our story</h2>
              <div className="space-y-5 text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">
                <p>
                  We started in 2014 with a simple thesis: the hardest technology problems in Latin
                  America are in financial services, and solving them requires deep engineering — not
                  offshore staffing.
                </p>
                <p>
                  Today, over 500 engineers work across banking, payments, insurance, retail,
                  healthcare and energy — building the platforms that run critical infrastructure for
                  millions of users. We invest in proprietary platforms, publish research, and share
                  what we learn with the community.
                </p>
              </div>
            </div>
            <div>
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-5 pb-8 relative">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 rounded-full border border-[#e5e5e5] flex items-center justify-center bg-white z-10">
                      <div className="w-2 h-2 rounded-full bg-black" />
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-[#e5e5e5] mt-1" />
                    )}
                  </div>
                  <div className="pt-1 pb-2">
                    <span className="text-label text-[rgb(58, 179, 181)] block mb-1">{item.year}</span>
                    <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
          <SectionHeader eyebrow="// VALUES" headline="What drives us" subheadline="Four principles that shape how we build, hire, and operate." />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="el-card p-8">
                <h3 className="text-base font-medium text-black mb-3 tracking-tight">{v.title}</h3>
                <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
          <SectionHeader eyebrow="// TEAM" headline="Leadership" subheadline="A senior team of engineers, architects and operators." />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leadership.map((member) => (
              <div key={member.name} className="el-card p-8 flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] mb-2" />
                <span className="text-base font-medium text-black tracking-tight">{member.name}</span>
                <span className="text-[15px] text-[rgb(58, 179, 181)] tracking-[0.01em]">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-3 pb-6">
        <CTABanner
          headline="Want to be part of the team?"
          subheadline="We're always looking for engineers who care about craft. See open positions or send us a note."
          primary={{ label: "View open positions", href: "/careers" }}
          secondary={{ label: "Contact us →", href: "/contact" }}
        />
      </section>
    </>
  );
}

import { HeroSimple } from "@/components/sections/HeroSimple";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StatGrid } from "@/components/sections/StatGrid";
import { CTABanner } from "@/components/sections/CTABanner";

const timeline = [
  {
    year: "2014",
    event: "Founded in São Paulo as a boutique consultancy for financial services technology.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M9 21V7l6-4v18M9 11H6a1 1 0 0 0-1 1v9M15 21V11h3a1 1 0 0 1 1 1v9"/>
      </svg>
    ),
  },
  {
    year: "2016",
    event: "Expanded platform engineering practice; first enterprise banking client.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v4M10 14h4"/>
      </svg>
    ),
  },
  {
    year: "2018",
    event: "Launched Data & AI practice; opened second office.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11h1a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-1a1 1 0 0 1 1-1h1V9.5A4 4 0 0 1 8 6a4 4 0 0 1 4-4z"/>
        <path d="M9 21h6M10 17v4M14 17v4"/>
      </svg>
    ),
  },
  {
    year: "2020",
    event: "200+ engineers; established partnerships with AWS, Google Cloud and Azure.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 0 1 0 9z"/>
      </svg>
    ),
  },
  {
    year: "2022",
    event: "Launched Amplify and Nextdue platforms; entered healthcare and retail verticals.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    year: "2024",
    event: "500+ engineers; launched Lumia AI and CodeGenius platforms; expanded to 6 industries.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
  },
];

const values = [
  { title: "Engineering excellence", description: "We believe that world-class engineering is the foundation of every great product. No shortcuts." },
  { title: "Ownership mindset", description: "We act like co-founders, not contractors. Every decision is made with the client's long-term success in mind." },
  { title: "Relentless curiosity", description: "We study every new technology with rigor, adopt what works, and share what we learn openly." },
  { title: "Build for scale", description: "Everything we design is meant to handle 10× what it handles today. Architecture first, features second." },
];

const leadership = [
  { name: "Bruno Mancini",  role: "CEO", fullRole: "Chief Executive Officer",  photo: "/avatar/bruno-mancini.jfif"  },
  { name: "Felipe Scaphe",  role: "CVO", fullRole: "Chief Vision Officer",      photo: "/avatar/felipe-scaphe.jfif"  },
  { name: "Bruno Mizrahi",  role: "CPO", fullRole: "Chief Product Officer",     photo: "/avatar/bruno-mizrahi.jfif"  },
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
      <section className="max-w-[1336px] mx-auto px-4 lg:px-0 py-3">
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
      <section className="max-w-[1336px] mx-auto px-4 lg:px-0 py-3">
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

              {/* Vimeo embed */}
              <div className="mt-8 rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <iframe
                  src="https://player.vimeo.com/video/418384212?autoplay=0&title=0&byline=0&portrait=0"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div>
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-5 relative h-[115px] group">
                  {/* Connector column */}
                  <div className="relative shrink-0 flex flex-col items-center" style={{ width: 36 }}>
                    <div className="w-9 h-9 rounded-full border border-[#e5e5e5] flex items-center justify-center bg-white z-10 text-black relative transition-all duration-300 group-hover:border-[#22AEA4]/50 group-hover:text-[#22AEA4] group-hover:bg-[#22AEA4]/[0.06] group-hover:shadow-[0_0_16px_4px_rgba(34,174,164,0.22)]">
                      {item.icon}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="absolute top-9 bottom-0 w-px bg-[#e5e5e5]" />
                    )}
                  </div>
                  <div className="pt-1.5 pb-2">
                    <span className="text-label text-[#717171] block mb-1">{item.year}</span>
                    <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-[1336px] mx-auto px-4 lg:px-0 py-3">
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
      <section className="max-w-[1336px] mx-auto px-4 lg:px-0 py-3">
        <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
          <SectionHeader eyebrow="// TEAM" headline="Leadership" subheadline="Founders, builders and visionaries who shape what Sciensa is — and what it becomes." />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {leadership.map((member) => (
              <div key={member.name} className="el-card p-8 flex flex-col items-center text-center gap-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover object-top border border-[#e5e5e5] grayscale"
                />
                <div>
                  <p className="text-base font-medium text-black tracking-tight">{member.name}</p>
                  <p className="text-[13px] text-[#717171] mt-0.5 tracking-[0.01em]">{member.fullRole}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1336px] mx-auto px-4 lg:px-0 py-3 pb-6">
        <CTABanner
          headline="Want to be part of the team?"
          subheadline="We're always looking for engineers who care about craft. See open positions or send us a note."
          primary={{ label: "Contact us →", href: "/contact" }}
        />
      </section>
    </>
  );
}

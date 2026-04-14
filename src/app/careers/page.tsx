import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Sciensa | Join Our Engineering Team",
  description: "Work at Sciensa — a technology engineering firm with 200+ engineers. Open roles in AI Engineering, Platform Engineering, Cloud DevSecOps and more. São Paulo and remote.",
  alternates: { canonical: "/careers" },
  openGraph: { title: "Careers at Sciensa", description: "Join 200+ engineers building mission-critical platforms for the most demanding industries.", url: "https://sciensa.com/careers", images: [{ url: "/image/og.png", width: 1200, height: 630 }] },
};

import { HeroSimple } from "@/components/sections/HeroSimple";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { JobFilter } from "@/components/sections/JobFilter";

const benefits = [
  { title: "Competitive compensation", description: "Above-market salaries + profit sharing" },
  { title: "Remote-first culture", description: "Work from anywhere in Brazil; hybrid options in SP" },
  { title: "Learning budget", description: "R$5,000/year for courses, conferences, and books" },
  { title: "Premium health", description: "Full medical & dental for you + dependents" },
  { title: "Flexible PTO", description: "Take what you need, plus mandatory 2-week recharge" },
  { title: "Equipment", description: "MacBook Pro + monitor + standing desk shipped to you" },
];

const jobs = [
  { title: "Senior Backend Engineer", department: "Engineering", location: "São Paulo · Remote", type: "Full-time", description: "Design and build high-throughput distributed systems for financial services clients. Experience with event-driven architectures and Kotlin/Go preferred." },
  { title: "Staff Platform Engineer", department: "Engineering", location: "São Paulo · Hybrid", type: "Full-time", description: "Lead the internal developer platform initiative — golden paths, service templates, and CI/CD automation for 200+ engineers." },
  { title: "AI/ML Engineer", department: "AI & Data", location: "Remote", type: "Full-time", description: "Build and deploy production LLM pipelines, RAG systems, and agent frameworks for enterprise clients in banking and insurance." },
  { title: "Data Engineer", department: "AI & Data", location: "São Paulo · Remote", type: "Full-time", description: "Design real-time and batch data pipelines using Spark, Flink, and modern lakehouse architectures. Experience with financial data strongly preferred." },
  { title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time", description: "Build complex, performant UIs for digital banking and marketplace platforms. React, TypeScript, and a strong eye for UX." },
  { title: "Product Manager — AI Platforms", department: "Product", location: "São Paulo · Hybrid", type: "Full-time", description: "Own the roadmap for Lumia AI and CodeGenius. Work closely with engineering and customer-facing teams to drive adoption and product-market fit." },
  { title: "Technical Recruiter", department: "People & Ops", location: "São Paulo", type: "Full-time", description: "Source and recruit top-tier engineering talent. You'll partner with hiring managers to build world-class teams across backend, AI, data, and platform engineering." },
];

export default function Careers() {
  return (
    <>
      <HeroSimple
        eyebrow="Careers"
        headline="Build what actually runs"
        subheadline="Join 200+ engineers building mission-critical platforms for financial services, healthcare, retail and more."        video="https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486834/0_Circuit_Board_Technology_3840x2160_rbiidg.mp4"
      />

      <section className="max-w-[1336px] mx-auto px-4 3xl:px-0 py-3">
        <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
          <SectionHeader eyebrow="// WHY SCIENSA" headline="Why engineers choose Sciensa" subheadline="Hard problems, real impact, and a culture that invests in your growth." />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="el-card p-8">
                <h3 className="text-base font-medium text-black mb-2 tracking-tight">{b.title}</h3>
                <p className="text-[15px] text-[#4e4e4e] tracking-[0.01em]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1336px] mx-auto px-4 3xl:px-0 py-3">
        <div className="bg-white rounded-2xl px-5 md:px-10 py-16">
          <SectionHeader eyebrow="// OPEN POSITIONS" headline="Open positions" />
          <div className="mt-10">
            <JobFilter
              departments={["All", "Engineering", "AI & Data", "Product", "People & Ops"]}
              jobs={jobs}
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1336px] mx-auto px-4 3xl:px-0 py-3 pb-6">
        <CTABanner
          headline="Don't see your role? Reach out anyway."
          subheadline="We're always interested in meeting exceptional engineers, architects and leaders. Send us a note."
          primary={{ label: "Get in touch", href: "/contact" }}
        />
      </section>
    </>
  );
}

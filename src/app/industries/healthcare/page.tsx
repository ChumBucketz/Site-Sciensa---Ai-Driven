import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const capabilities = [
  { title: "Digital Health Platforms", description: "Telemedicine, patient portals, and digital health journeys built on FHIR standards with LGPD and HIPAA compliance at the core.", details: ["Telemedicine platforms", "Patient portals", "FHIR compliance", "LGPD/HIPAA controls"] },
  { title: "Interoperability & Data Exchange", description: "HL7 FHIR APIs, EHR integration, and health information exchange platforms connecting care settings across hospital networks.", details: ["HL7 FHIR APIs", "EHR integration (Epic, TASY)", "HIE platforms", "Real-time data sync"] },
  { title: "Operational Automation", description: "Clinical workflow automation, scheduling intelligence, bed management, and administrative process optimization for care providers.", details: ["Clinical workflow automation", "Scheduling intelligence", "Bed management", "Administrative automation"] },
  { title: "Patient Digital Journeys", description: "Personalized digital patient experiences — from scheduling and pre-care instructions to post-discharge follow-up and remote monitoring.", details: ["Digital scheduling", "Pre-care instructions", "Post-discharge follow-up", "Remote monitoring"] },
  { title: "Responsible AI in Healthcare", description: "Clinical decision support, predictive risk scoring, and AI-driven diagnostics with full auditability, bias testing, and regulatory guardrails.", details: ["Clinical decision support", "Predictive risk scoring", "AI diagnostics", "Bias & fairness testing"] },
];

const caseStudies = [
  { client: "Healthcare Network", title: "Unified Health Data Platform", result: "FHIR-compliant data platform connecting 200+ hospitals, syncing 50M+ records with < 500ms query latency.", tags: ["Interoperability", "Data Exchange"] },
  { client: "Hospital Group", title: "AI Clinical Decision Support", result: "AI-powered clinical decision support deployed across 12 hospitals, improving diagnostic accuracy by 85% and cutting report time by 60%.", tags: ["Responsible AI", "Clinical Workflows"] },
  { client: "Health Insurance", title: "Digital Member Platform", result: "End-to-end digital member experience — authorization, benefits, and telehealth — increasing digital adoption by 70% in 12 months.", tags: ["Digital Journeys", "Operational Automation"] },
];

export default function Healthcare() {
  return (
    <>
      <HeroSimple
        eyebrow="Industries / Healthcare & Life Sciences"
        headline="Digital systems for regulated health ecosystems"
        subheadline="Interoperable health platforms, patient-centric digital journeys, and responsible AI — built to meet the operational and regulatory demands of healthcare."
      />

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-12">
          <StatGrid stats={[
            { value: "200+", label: "Hospitals connected" },
            { value: "50M+", label: "Patient records synced" },
            { value: "85%", label: "Diagnostic accuracy improvement" },
            { value: "FHIR R4", label: "Interoperability standard" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
          <SectionHeader eyebrow="// WHAT WE DELIVER" headline="Engineering for health" subheadline="From EHR integration to AI diagnostics — built for regulated care environments." />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <div key={cap.title} className="el-card p-8 flex flex-col gap-4">
                <div>
                  <h3 className="text-base font-medium text-black mb-2 tracking-tight">{cap.title}</h3>
                  <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{cap.description}</p>
                </div>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-auto">
                  {cap.details.map((d) => (
                    <li key={d} className="text-xs text-[#777169] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#777169] shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
          <SectionHeader eyebrow="// PROOF POINTS" headline="Results from the field" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="el-card p-8 flex flex-col gap-4">
                <p className="text-xs text-[#777169] tracking-[0.01em]">{cs.client}</p>
                <h3 className="text-base font-medium text-black tracking-tight">{cs.title}</h3>
                <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em] flex-1">{cs.result}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cs.tags.map((tag) => <Badge key={tag} variant="default">{tag}</Badge>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3 pb-6">
        <CTABanner
          headline="Ready to modernize your health platform?"
          subheadline="Talk to our healthcare engineering team about your digital health challenges."
          primary={{ label: "Start a conversation", href: "/contact" }}
          secondary={{ label: "All industries →", href: "/industries" }}
        />
      </section>
    </>
  );
}

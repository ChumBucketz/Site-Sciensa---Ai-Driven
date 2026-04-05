import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const capabilities = [
  { title: "BSS/OSS Platform Modernization", description: "Decompose legacy BSS/OSS stacks into cloud-native, API-first architectures — reducing time-to-market for new products and services.", details: ["BSS decomposition", "OSS modernization", "Product catalog migration", "Order management"] },
  { title: "Self-service Digital Channels", description: "Web and mobile customer portals for account management, billing, support, and upsell — reducing call center volume and improving CX.", details: ["Customer portals", "Mobile apps", "Omnichannel CX", "Self-care journeys"] },
  { title: "Data & Automation", description: "Network analytics, customer intelligence, and AI-powered operations — from churn prediction to proactive fault management.", details: ["Churn prediction", "Network analytics", "AI-powered ops", "Proactive maintenance"] },
  { title: "Billing & Revenue Assurance", description: "Rating, charging, and billing modernization for convergent services — with revenue leakage detection and automated reconciliation.", details: ["Convergent billing", "Revenue assurance", "Leakage detection", "Automated reconciliation"] },
  { title: "Network Intelligence", description: "Real-time network performance monitoring, capacity planning, and AI-driven anomaly detection for telecom infrastructure.", details: ["Performance monitoring", "Capacity planning", "Anomaly detection", "SLA management"] },
];

const caseStudies = [
  { client: "Tier-1 Telecom Operator", title: "BSS Platform Replacement", result: "Replaced legacy BSS with cloud-native platform using API wrapping — reducing order-to-activation time by 50% and infrastructure costs by 40%.", tags: ["BSS/OSS Modernization", "Digital Channels"] },
  { client: "Regional Carrier", title: "Customer Self-service Platform", result: "Digital self-service portal handling 70% of customer requests without agent interaction — NPS improved by 22 points in 6 months.", tags: ["Self-service Channels", "Digital CX"] },
  { client: "Mobile Operator", title: "AI Churn Intelligence", result: "ML churn prediction model with personalized retention offers reduced voluntary churn by 28% in the postpaid segment.", tags: ["Data & Automation", "Network Intelligence"] },
];

export default function Telecommunications() {
  return (
    <>
      <HeroSimple
        eyebrow="Industries / Telecommunications"
        headline="Modern platforms for connectivity at scale"
        subheadline="BSS/OSS modernization, self-service digital channels, billing architecture, and AI-powered operations — for telecom operators reimagining customer experience."
      />

      <section className="border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <StatGrid stats={[
            { value: "50%", label: "Faster order-to-activation" },
            { value: "70%", label: "Self-service containment" },
            { value: "28%", label: "Churn reduction" },
            { value: "40%", label: "Infrastructure cost reduction" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader eyebrow="// WHAT WE DELIVER" headline="Engineering for connectivity" subheadline="From BSS modernization to AI-driven operations — full-stack telecom engineering." />
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
      </section>

      <section className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 py-24">
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

      <CTABanner
        headline="Ready to modernize your telecom stack?"
        subheadline="Talk to our team about your BSS/OSS modernization and digital channel challenges."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "All industries →", href: "/industries" }}
      />
    </>
  );
}

import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const modules = [
  { title: "Account Lifecycle Management", description: "End-to-end account opening, maintenance, and closure — supporting PF and PJ accounts with regulatory compliance built in.", items: ["Account opening flows", "KYC/CDD management", "Account maintenance", "Closure & portability"] },
  { title: "Digital Onboarding & KYC", description: "Automated onboarding with biometric identity verification, document validation, and real-time credit decisioning in under 5 minutes.", items: ["eKYC & biometrics", "Document validation", "Credit pre-approval", "Real-time decisioning"] },
  { title: "Card & Wallet Management", description: "Virtual and physical card issuance, spending controls, limits management, and mobile wallet integration.", items: ["Virtual card issuance", "Physical card lifecycle", "Spending controls", "Apple/Google Pay"] },
  { title: "Self-service Channels", description: "Web and mobile banking with responsive design, accessibility compliance, and feature parity across all channels.", items: ["Internet banking", "Mobile banking (iOS/Android)", "Accessibility (WCAG AA)", "Push notifications"] },
  { title: "Notification & Engagement", description: "Personalized multi-channel notification engine — push, SMS, email, and WhatsApp — for transactional and marketing communications.", items: ["Multi-channel delivery", "Personalization engine", "Notification templates", "Delivery analytics"] },
];

const caseStudies = [
  { client: "Top-5 Brazilian Bank", title: "Next-gen Digital Banking Platform", result: "Built cloud-native digital banking platform for 12M+ users with 99.99% uptime and 40× weekly deployment frequency.", tags: ["Account Lifecycle", "Self-service Channels"] },
  { client: "Digital Neobank", title: "Zero-to-Live in 8 Weeks", result: "Full digital banking stack from scratch — onboarding, accounts, PIX, and cards — live in 8 weeks via Amplify platform.", tags: ["Digital Onboarding", "Card Management"] },
  { client: "Regional Bank", title: "Mobile-first Transformation", result: "Redesigned mobile banking app achieving 4.8★ App Store rating and 60% increase in digital adoption within 6 months.", tags: ["Self-service Channels", "Engagement"] },
];

export default function DigitalBanking() {
  return (
    <>
      <HeroSimple
        eyebrow="Solutions / Digital Banking"
        headline="Modern banking architectures for digital-first institutions"
        subheadline="End-to-end digital banking platforms — from account opening and KYC to card management and self-service channels — built on event-driven, API-first architectures."
      />

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-12">
          <StatGrid stats={[
            { value: "12M+", label: "Users on platforms we built" },
            { value: "8 wks", label: "Fastest go-live with Amplify" },
            { value: "99.99%", label: "Platform uptime" },
            { value: "40×", label: "Deployment frequency" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
          <SectionHeader eyebrow="// BUILDING BLOCKS" headline="What we deliver" subheadline="A complete digital banking stack, modular and composable." />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {modules.map((mod) => (
              <div key={mod.title} className="el-card p-8 flex flex-col gap-4">
                <div>
                  <h3 className="text-base font-medium text-black mb-2 tracking-tight">{mod.title}</h3>
                  <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{mod.description}</p>
                </div>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-auto">
                  {mod.items.map((item) => (
                    <li key={item} className="text-xs text-[#777169] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#777169] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="el-card p-8 bg-[#f5f5f5] flex flex-col justify-center gap-3">
              <p className="text-xs font-medium uppercase tracking-widest text-[#777169]">Powered by</p>
              <p className="text-xl font-light text-black tracking-tight">Amplify Platform</p>
              <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">Compress your digital banking roadmap from months to weeks with pre-built, battle-tested modules.</p>
              <Badge variant="warm" className="w-fit">Platform / Accelerator</Badge>
            </div>
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
          headline="Ready to build your digital banking platform?"
          subheadline="Talk to our team about your digital banking roadmap and how we can accelerate delivery."
          primary={{ label: "Start a conversation", href: "/contact" }}
          secondary={{ label: "Explore Amplify →", href: "/platforms/amplify" }}
        />
      </section>
    </>
  );
}

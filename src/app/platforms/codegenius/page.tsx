import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const modules = [
  { title: "Developer Productivity", description: "AI-powered code completion, inline suggestions, and context-aware assistance that keeps engineers in flow.", items: ["Code completion", "Inline suggestions", "Context awareness", "IDE integration"] },
  { title: "Code Quality & Analysis", description: "Static analysis, code smell detection, complexity scoring, and architectural debt identification — automated in CI/CD.", items: ["Static analysis", "Complexity scoring", "Debt tracking", "Quality gates"] },
  { title: "Automated Testing", description: "AI-generated unit tests, edge case discovery, and test coverage expansion — reducing manual test writing by up to 70%.", items: ["Unit test generation", "Edge case discovery", "Coverage expansion", "Test maintenance"] },
  { title: "Intelligent Refactoring", description: "Automated refactoring suggestions, legacy code modernization, and pattern standardization across large codebases.", items: ["Refactoring suggestions", "Legacy modernization", "Pattern standardization", "Safe transformations"] },
  { title: "Documentation Generation", description: "Automatic inline documentation, API spec generation, and architecture diagrams kept in sync with code changes.", items: ["Inline docs", "API spec generation", "Architecture diagrams", "Changelog automation"] },
  { title: "Code Review Assistance", description: "AI-assisted code review that flags security issues, performance anti-patterns, and coding standard violations before human review.", items: ["Security scanning", "Performance flags", "Standard enforcement", "Review automation"] },
];

const caseStudies = [
  { client: "Platform Engineering Team", title: "Developer Productivity Program", result: "CodeGenius deployed to 200+ engineers, delivering 35% reduction in review cycle time and 40% increase in test coverage.", tags: ["Developer Productivity", "Automated Testing"] },
  { client: "Financial Institution", title: "Legacy Code Modernization", result: "AI-assisted refactoring of 500K+ lines of legacy Java code — 60% reduction in code complexity and zero regression incidents.", tags: ["Intelligent Refactoring", "Code Quality"] },
  { client: "SaaS Scale-up", title: "Documentation Automation", result: "Automated API documentation for 300+ endpoints, cutting documentation effort by 80% and improving developer onboarding by 3×.", tags: ["Documentation Generation", "Code Review"] },
];

export default function CodeGenius() {
  return (
    <>
      <HeroSimple
        eyebrow="Platforms / CodeGenius"
        headline="AI-accelerated engineering for serious teams"
        subheadline="Accelerates software engineering with AI — boosting productivity, code quality, testing, refactoring, documentation, and assisted development across the engineering lifecycle."
      />

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-12">
          <StatGrid stats={[
            { value: "35%", label: "Faster review cycles" },
            { value: "40%", label: "Higher test coverage" },
            { value: "60%", label: "Reduction in code complexity" },
            { value: "80%", label: "Less documentation effort" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl px-10 py-16">
          <SectionHeader eyebrow="// PLATFORM MODULES" headline="The full engineering lifecycle, accelerated" subheadline="From first keystroke to production — AI embedded at every step." />
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
          headline="Ready to accelerate your engineering team?"
          subheadline="See CodeGenius in action — book a demo with our engineering team."
          primary={{ label: "Book a demo", href: "/contact" }}
          secondary={{ label: "All platforms →", href: "/platforms" }}
        />
      </section>
    </>
  );
}

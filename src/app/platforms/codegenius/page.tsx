import { PlatformDetailTemplate, type PlatformDetailData } from "@/components/templates/PlatformDetailTemplate";

const data: PlatformDetailData = {
  eyebrow: "Platforms / CodeGenius",
  headline: "AI-accelerated engineering for serious teams",
  subheadline: "Accelerates software engineering with AI — boosting productivity, code quality, testing, refactoring, documentation, and assisted development across the engineering lifecycle.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486834/0_Circuit_Board_Technology_3840x2160_rbiidg.mp4",
  stats: [
    { value: "35%", label: "Faster review cycles" },
    { value: "40%", label: "Higher test coverage" },
    { value: "60%", label: "Reduction in code complexity" },
    { value: "80%", label: "Less documentation effort" },
  ],
  approach: {
    sectionLabel: "// WHY CODEGENIUS",
    sectionHeadline: "AI that makes engineers faster, not replaceable.",
    rows: [
      {
        title: "Context-aware, not generic suggestions",
        description: "Generic AI code completion gives you suggestions that don't understand your architecture, patterns, or conventions. CodeGenius indexes your codebase and learns your team's patterns — suggestions that fit, not just compile.",
        stat: "35%",
        statLabel: "Reduction in code review cycle time",
        reverse: false,
        items: ["Codebase indexing & learning", "Architecture pattern recognition", "Team convention enforcement", "IDE-native integration (VS Code, JetBrains)"],
      },
      {
        title: "Quality gates that don't slow you down",
        description: "The best time to catch a bug is before it's written. CodeGenius integrates with your CI/CD pipeline to run automated quality checks, test generation, and security scanning without adding friction to the developer experience.",
        stat: "75%",
        statLabel: "Security issues caught before production",
        reverse: true,
        items: ["CI/CD pipeline integration", "Automated unit test generation", "Security vulnerability scanning", "Performance anti-pattern detection"],
      },
    ],
  },
  modules: {
    sectionLabel: "// PLATFORM MODULES",
    sectionHeadline: "The full engineering lifecycle, accelerated",
    sectionSubheadline: "From first keystroke to production — AI embedded at every step.",
    items: [
      { title: "Developer Productivity", description: "AI-powered code completion, inline suggestions, and context-aware assistance that keeps engineers in flow.", tags: ["Code Completion", "Inline Suggestions", "IDE Integration"] },
      { title: "Code Quality & Analysis", description: "Static analysis, code smell detection, complexity scoring, and architectural debt identification — automated in CI/CD.", tags: ["Static Analysis", "Complexity Scoring", "Quality Gates"] },
      { title: "Automated Testing", description: "AI-generated unit tests, edge case discovery, and test coverage expansion — reducing manual test writing by up to 70%.", tags: ["Unit Test Generation", "Edge Cases", "Coverage"] },
      { title: "Intelligent Refactoring", description: "Automated refactoring suggestions, legacy code modernization, and pattern standardization across large codebases.", tags: ["Refactoring", "Legacy Modernization", "Pattern Standards"] },
      { title: "Documentation Generation", description: "Automatic inline documentation, API spec generation, and architecture diagrams kept in sync with code changes.", tags: ["Inline Docs", "API Specs", "Architecture Diagrams"] },
      { title: "Code Review Assistance", description: "AI-assisted code review that flags security issues, performance anti-patterns, and coding standard violations before human review.", tags: ["Security Scanning", "Performance Flags", "Review Automation"] },
    ],
  },
  caseStudies: [
    { client: "Platform Engineering Team", title: "Developer Productivity Program", result: "CodeGenius deployed to 200+ engineers, delivering 35% reduction in review cycle time and 40% increase in test coverage.", tags: ["Developer Productivity", "Automated Testing"] },
    { client: "Financial Institution", title: "Legacy Code Modernization", result: "AI-assisted refactoring of 500K+ lines of legacy Java code — 60% reduction in code complexity and zero regression incidents.", tags: ["Intelligent Refactoring", "Code Quality"] },
    { client: "SaaS Scale-up", title: "Documentation Automation", result: "Automated API documentation for 300+ endpoints, cutting documentation effort by 80% and improving developer onboarding by 3×.", tags: ["Documentation Generation", "Code Review"] },
  ],
  cta: {
    headline: "Ready to accelerate your engineering team?",
    subheadline: "See CodeGenius in action — book a demo with our engineering team.",
    primary: { label: "Book a demo", href: "/contact" },
    secondary: { label: "All platforms →", href: "/platforms" },
  },
};

export default function CodeGenius() {
  return <PlatformDetailTemplate data={data} />;
}

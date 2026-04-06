import { CapabilityDetailTemplate, type CapabilityDetailData } from "@/components/templates/CapabilityDetailTemplate";

const data: CapabilityDetailData = {
  eyebrow: "Capabilities / Product & Experience Engineering",
  headline: "Digital products that perform at enterprise scale",
  subheadline: "Discovery for complex products, design systems, enterprise front-ends, digital journeys, and channel enablement — crafting experiences that serve business goals.",
  video: "/Videos/0_Technology_Futuristic_3840x2160.mp4",
  stats: [
    { value: "50+", label: "Digital products shipped" },
    { value: "28pts", label: "Avg. NPS improvement" },
    { value: "40%", label: "Reduction in support volume" },
    { value: "WCAG AA", label: "Accessibility standard met" },
  ],
  approach: {
    sectionLabel: "// OUR APPROACH",
    sectionHeadline: "Products built to perform and last.",
    rows: [
      {
        title: "Discovery before delivery",
        description: "Complex enterprise products fail when teams skip discovery. We run structured product discovery — user research, systems analysis, and opportunity mapping — before writing a single line of production code.",
        stat: "2–3 weeks",
        statLabel: "Discovery sprint that shapes months of delivery",
        reverse: false,
        items: ["User research & interviews", "Jobs-to-be-done mapping", "Opportunity assessment", "Roadmap OKR alignment"],
      },
      {
        title: "Design systems that scale",
        description: "Without a design system, every team reinvents the same components with slightly different bugs. We build scalable, accessible component libraries that unify experience across teams, products, and channels.",
        stat: "60%",
        statLabel: "Reduction in front-end development time with design system",
        reverse: true,
        items: ["Figma design tokens", "React component library", "Accessibility (WCAG AA)", "Multi-brand theming"],
      },
      {
        title: "Enterprise front-ends, not just websites",
        description: "Our front-end engineers build complex, data-intensive applications — digital banking dashboards, marketplace management portals, clinical decision support UIs — where performance and reliability are non-negotiable.",
        stat: "12M+",
        statLabel: "Users on enterprise front-ends we've built",
        reverse: false,
        items: ["React & Next.js", "Micro-frontend architecture", "Core Web Vitals optimization", "Real-time data handling"],
      },
    ],
  },
  modules: {
    sectionLabel: "// WHAT WE BUILD",
    sectionHeadline: "Product capabilities that convert",
    sectionSubheadline: "From discovery to delivery — products built to perform and last.",
    items: [
      { title: "Product Discovery & Strategy", description: "Structured discovery for complex digital products — user research, opportunity mapping, and roadmap definition aligned with business outcomes.", tags: ["Discovery", "User Research", "Roadmap"] },
      { title: "Design Systems", description: "Scalable component libraries, design tokens, and accessibility-first systems that unify experience across products and channels.", tags: ["Design Tokens", "Components", "WCAG"] },
      { title: "Enterprise Front-ends", description: "Complex, high-performance React and React Native applications for digital banking, marketplace, and operational platforms.", tags: ["React", "Next.js", "React Native"] },
      { title: "Digital Journeys", description: "End-to-end digital experience design — from onboarding and KYC to transaction flows and self-service support channels.", tags: ["Onboarding", "KYC", "Self-service"] },
      { title: "Channel Enablement", description: "Omnichannel strategy and implementation — web, mobile, WhatsApp, and partner APIs unified under a consistent experience layer.", tags: ["Omnichannel", "WhatsApp", "Partner APIs"] },
      { title: "Accessibility & Performance", description: "WCAG 2.1 AA/AAA compliance, Core Web Vitals optimization, and performance budgets for enterprise digital products.", tags: ["WCAG", "Core Web Vitals", "Performance"] },
    ],
  },
  caseStudies: [
    { client: "Tier-1 Bank", title: "Digital Banking Platform", result: "Redesigned digital banking experience for 12M+ users, improving NPS by 28 points and reducing support tickets by 40%.", tags: ["Digital Journeys", "Design System"] },
    { client: "Insurance Leader", title: "Self-Service Portal", result: "Built omnichannel self-service portal handling 70% of customer requests without agent intervention.", tags: ["Channel Enablement", "Enterprise Front-end"] },
    { client: "Retail Marketplace", title: "Seller Experience Platform", result: "Redesigned seller onboarding journey, cutting time-to-first-sale from 14 days to 2 days for 3,000+ sellers.", tags: ["Product Discovery", "Digital Journeys"] },
  ],
  cta: {
    headline: "Ready to build experiences that perform?",
    subheadline: "Talk to our product and experience engineering team about your digital challenges.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "All capabilities →", href: "/capabilities" },
  },
};

export default function ProductExperience() {
  return <CapabilityDetailTemplate data={data} />;
}

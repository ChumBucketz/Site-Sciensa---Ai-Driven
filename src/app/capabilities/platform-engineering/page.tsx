import { CapabilityDetailTemplate, type CapabilityDetailData } from "@/components/templates/CapabilityDetailTemplate";

const data: CapabilityDetailData = {
  eyebrow: "Capabilities / Platform Engineering",
  headline: "Architectures built for scale and resilience",
  subheadline: "Microservices, event-driven architectures, platform modernization, and distributed systems — engineering the backbone of enterprise digital operations.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486835/0_Technology_Futuristic_3840x2160_1_fydegq.mp4",
  stats: [
    { value: "80+", label: "Platforms modernized" },
    { value: "99.99%", label: "Uptime delivered" },
    { value: "10×", label: "Deployment frequency increase" },
    { value: "60%", label: "Reduction in MTTR" },
  ],
  approach: {
    sectionLabel: "// OUR APPROACH",
    sectionHeadline: "Platforms designed for the long run.",
    rows: [
      {
        title: "Event-driven by default",
        description: "The hardest enterprise systems — payments, banking cores, supply chains — all run on events. We design event-driven architectures from the start, not as a retrofit, using Kafka, CQRS, and saga orchestration patterns.",
        stat: "15K+",
        statLabel: "TPS on event-driven platforms we've built",
        reverse: false,
        items: ["Kafka & event streaming", "CQRS / Event sourcing", "Saga orchestration patterns", "Dead-letter queue handling"],
      },
      {
        title: "Modernization without disruption",
        description: "We use the strangler fig pattern and incremental migration strategies to modernize legacy monoliths without stopping the business. Zero big-bang rewrites — just controlled, validated evolution.",
        stat: "0",
        statLabel: "Business disruptions in our migrations",
        reverse: true,
        items: ["Strangler fig pattern", "Dual-run validation", "API wrapping & adaptation", "Incremental database migration"],
      },
      {
        title: "Operational excellence built in",
        description: "We treat observability, reliability, and cost governance as first-class requirements — not afterthoughts. Every platform ships with SLOs, dashboards, and runbooks from day one.",
        stat: "40×",
        statLabel: "Deployment frequency increase on avg.",
        reverse: false,
        items: ["SLO definition & tracking", "Distributed tracing (OpenTelemetry)", "Automated runbooks", "Cost attribution & governance"],
      },
    ],
  },
  modules: {
    sectionLabel: "// WHAT WE BUILD",
    sectionHeadline: "Platform capabilities that scale",
    sectionSubheadline: "From legacy monolith to cloud-native platform — without stopping the business.",
    items: [
      { title: "Microservices Architecture", description: "Domain-driven decomposition, bounded contexts, and service mesh patterns for enterprise-scale distributed systems.", tags: ["DDD", "Service Mesh", "API Contracts"] },
      { title: "Event-Driven Systems", description: "Kafka-powered event streaming, CQRS, and event sourcing for real-time, loosely coupled architectures.", tags: ["Kafka", "CQRS", "Event Sourcing"] },
      { title: "Platform Modernization", description: "Strangler fig migration, progressive modernization, and coexistence patterns for legacy transformation.", tags: ["Migration", "Strangler Fig", "Zero Downtime"] },
      { title: "Resilience & Observability", description: "SLO-driven reliability engineering, distributed tracing, and intelligent alerting for production platforms.", tags: ["SRE", "Tracing", "Chaos Engineering"] },
      { title: "Internal Developer Platform", description: "Golden paths, self-service templates, and developer portals that accelerate engineering at scale.", tags: ["IDP", "Backstage", "Developer Experience"] },
      { title: "API Gateway & Service Mesh", description: "Secure API management, rate limiting, and intelligent traffic management across microservices ecosystems.", tags: ["Kong", "Apigee", "Zero Trust"] },
    ],
  },
  caseStudies: [
    { client: "Tier-1 Brazilian Bank", title: "Core Platform Decomposition", result: "Decomposed 20-year monolith into 80+ microservices while maintaining 99.99% uptime across 12M active accounts.", tags: ["Microservices", "Modernization"] },
    { client: "Insurance Holding", title: "Internal Developer Platform", result: "Built IDP with golden paths for 400+ engineers, cutting new service onboarding from 2 weeks to 2 hours.", tags: ["IDP", "Developer Experience"] },
    { client: "Payments Fintech", title: "Event-Driven Payments Core", result: "Kafka-powered payments platform processing 2.5M daily transactions with < 50ms p99 latency.", tags: ["Event-Driven", "Real-time"] },
  ],
  cta: {
    headline: "Need a platform that scales?",
    subheadline: "Talk to our platform engineering team about your architecture challenges.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "All capabilities →", href: "/capabilities" },
  },
};

export default function PlatformEngineering() {
  return <CapabilityDetailTemplate data={data} />;
}

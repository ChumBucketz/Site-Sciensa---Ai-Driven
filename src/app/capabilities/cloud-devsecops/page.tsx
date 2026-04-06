import { CapabilityDetailTemplate, type CapabilityDetailData } from "@/components/templates/CapabilityDetailTemplate";

const data: CapabilityDetailData = {
  eyebrow: "Capabilities / Cloud & DevSecOps",
  headline: "Secure, scalable, and operationally reliable",
  subheadline: "Cloud foundations, CI/CD automation, security by design, infrastructure scalability, and operational reliability — engineering trust into every deployment.",
  video: "/Videos/0_Technology_Futuristic_3840x2160.mp4",
  stats: [
    { value: "99.99%", label: "Uptime delivered" },
    { value: "60%", label: "Avg. infra cost reduction" },
    { value: "10×", label: "Deployment frequency increase" },
    { value: "75%", label: "Fewer production vulnerabilities" },
  ],
  approach: {
    sectionLabel: "// OUR APPROACH",
    sectionHeadline: "Security and reliability aren't afterthoughts.",
    rows: [
      {
        title: "Shift-left security",
        description: "Security issues found in production are 100× more expensive to fix. We embed SAST, DAST, secrets scanning, and policy-as-code into every CI/CD pipeline — so security is automated, not manual.",
        stat: "75%",
        statLabel: "Reduction in production security vulnerabilities",
        reverse: false,
        items: ["SAST/DAST in every pipeline", "Secrets scanning (GitLeaks)", "Policy as code (OPA)", "Zero-trust networking"],
      },
      {
        title: "Cloud foundations that last",
        description: "A cloud migration without a proper landing zone is just moving problems to a different provider. We design multi-account AWS, Azure, and GCP landing zones with FinOps and compliance built in from day one.",
        stat: "60%",
        statLabel: "Average infrastructure cost reduction",
        reverse: true,
        items: ["Multi-account landing zones", "FinOps framework", "Cost tagging & attribution", "Reserved capacity planning"],
      },
      {
        title: "SRE discipline for the hardest systems",
        description: "We apply Google's SRE principles to financial-grade systems — error budgets, SLOs, chaos engineering, and blameless post-mortems — building the operational discipline to keep mission-critical platforms running.",
        stat: "4 min",
        statLabel: "Average MTTR on platforms we operate",
        reverse: false,
        items: ["SLO/error budget management", "Chaos engineering (Chaos Monkey)", "Blameless post-mortems", "On-call runbooks & escalation"],
      },
    ],
  },
  modules: {
    sectionLabel: "// WHAT WE BUILD",
    sectionHeadline: "Cloud & security capabilities that hold",
    sectionSubheadline: "From landing zones to SRE — every layer hardened and observable.",
    items: [
      { title: "Cloud Foundations & Migration", description: "Multi-cloud architectures, landing zone design, and zero-disruption migration strategies for AWS, Azure, and GCP.", tags: ["AWS", "Azure", "GCP", "Landing Zones"] },
      { title: "CI/CD Pipelines", description: "Automated build, test, and deployment pipelines with quality gates, blue-green deployments, and rollback automation.", tags: ["GitOps", "ArgoCD", "Blue-green"] },
      { title: "Security by Design", description: "Shift-left security, SAST/DAST integration, secrets management, and zero-trust network architectures.", tags: ["SAST/DAST", "Vault", "Zero Trust"] },
      { title: "Scalable Infrastructure", description: "Kubernetes-based container orchestration, auto-scaling, and infrastructure-as-code for reliable, repeatable environments.", tags: ["Kubernetes", "Terraform", "Auto-scaling"] },
      { title: "Site Reliability Engineering", description: "SLO-driven reliability engineering, observability stacks, on-call runbooks, and chaos engineering for mission-critical systems.", tags: ["SRE", "Observability", "Chaos Engineering"] },
      { title: "Cost Optimization", description: "FinOps practices, rightsizing, reserved capacity planning, and cloud waste elimination for enterprise-scale infrastructure.", tags: ["FinOps", "Rightsizing", "Cost Governance"] },
    ],
  },
  caseStudies: [
    { client: "Digital Bank", title: "Cloud-native Core Banking", result: "Migrated core banking to AWS with zero-downtime, achieving 99.99% uptime and 60% infrastructure cost reduction.", tags: ["Cloud Migration", "FinOps"] },
    { client: "Insurance Group", title: "DevSecOps Transformation", result: "Embedded security into CI/CD pipelines across 30+ teams, cutting security vulnerabilities in production by 75%.", tags: ["DevSecOps", "CI/CD"] },
    { client: "Energy Company", title: "Kubernetes Platform", result: "Built multi-cloud Kubernetes platform supporting 200+ microservices with self-service deployment for 150+ engineers.", tags: ["SRE", "Kubernetes"] },
  ],
  cta: {
    headline: "Ready to build on a reliable foundation?",
    subheadline: "Talk to our cloud and DevSecOps team about your infrastructure and security challenges.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "All capabilities →", href: "/capabilities" },
  },
};

export default function CloudDevSecOps() {
  return <CapabilityDetailTemplate data={data} />;
}

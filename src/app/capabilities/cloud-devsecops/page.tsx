import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const capabilities = [
  { title: "Cloud Foundations & Migration", description: "Multi-cloud architectures, landing zone design, and zero-disruption migration strategies for AWS, Azure, and GCP.", items: ["Landing zones", "Multi-cloud strategy", "Cloud migration", "FinOps & cost control"] },
  { title: "CI/CD Pipelines", description: "Automated build, test, and deployment pipelines with quality gates, blue-green deployments, and rollback automation.", items: ["GitOps (ArgoCD)", "Pipeline as code", "Quality gates", "Blue-green deploys"] },
  { title: "Security by Design", description: "Shift-left security, SAST/DAST integration, secrets management, and zero-trust network architectures for regulated environments.", items: ["SAST/DAST scanning", "Secrets management (Vault)", "Zero-trust networking", "Policy as code (OPA)"] },
  { title: "Scalable Infrastructure", description: "Kubernetes-based container orchestration, auto-scaling, and infrastructure-as-code for reliable, repeatable environments.", items: ["Kubernetes (EKS/AKS/GKE)", "Terraform/Pulumi", "Auto-scaling", "Disaster recovery"] },
  { title: "Site Reliability Engineering", description: "SLO-driven reliability engineering, observability stacks, on-call runbooks, and chaos engineering for mission-critical systems.", items: ["SLO/SLA management", "Observability stacks", "Chaos engineering", "Incident runbooks"] },
  { title: "Cost Optimization", description: "FinOps practices, rightsizing, reserved capacity planning, and cloud waste elimination for enterprise-scale infrastructure.", items: ["FinOps frameworks", "Resource rightsizing", "Reserved instances", "Waste elimination"] },
];

const caseStudies = [
  { client: "Digital Bank", title: "Cloud-native Core Banking", result: "Migrated core banking to AWS with zero-downtime, achieving 99.99% uptime and 60% infrastructure cost reduction.", tags: ["Cloud Migration", "FinOps"] },
  { client: "Insurance Group", title: "DevSecOps Transformation", result: "Embedded security into CI/CD pipelines across 30+ teams, cutting security vulnerabilities in production by 75%.", tags: ["DevSecOps", "CI/CD"] },
  { client: "Energy Company", title: "Kubernetes Platform", result: "Built multi-cloud Kubernetes platform supporting 200+ microservices with self-service deployment for 150+ engineers.", tags: ["SRE", "Kubernetes"] },
];

export default function CloudDevSecOps() {
  return (
    <>
      <HeroSimple
        eyebrow="Capabilities / Cloud & DevSecOps"
        headline="Secure, scalable, and operationally reliable"
        subheadline="Cloud foundations, CI/CD automation, security by design, infrastructure scalability, and operational reliability — engineering trust into every deployment."
      />

      <section className="border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <StatGrid stats={[
            { value: "99.99%", label: "Uptime delivered" },
            { value: "60%", label: "Avg. infrastructure cost reduction" },
            { value: "10×", label: "Deployment frequency increase" },
            { value: "75%", label: "Fewer production vulnerabilities" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader eyebrow="// WHAT WE BUILD" headline="Cloud & security capabilities that hold" subheadline="From landing zones to SRE — every layer hardened and observable." />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {capabilities.map((cap) => (
            <div key={cap.title} className="el-card p-8 flex flex-col gap-4">
              <div>
                <h3 className="text-base font-medium text-black mb-2 tracking-tight">{cap.title}</h3>
                <p className="text-[15px] text-[#4e4e4e] leading-relaxed tracking-[0.01em]">{cap.description}</p>
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-auto">
                {cap.items.map((item) => (
                  <li key={item} className="text-xs text-[#777169] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#777169] shrink-0" />
                    {item}
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
        headline="Ready to build on a reliable foundation?"
        subheadline="Talk to our cloud and DevSecOps team about your infrastructure and security challenges."
        primary={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}

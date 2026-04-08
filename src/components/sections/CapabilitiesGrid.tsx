"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const categories = ["All", "Engineering", "Data & Product", "Cloud"] as const;
type Category = typeof categories[number];

const capabilities = [
  {
    title: "AI Engineering",
    description: "Production-grade AI systems: LLM orchestration, computer vision, predictive models, and intelligent automation.",
    href: "/capabilities/ai-engineering",
    category: "Engineering" as Category,
    techs: [
      { name: "PyTorch", logo: "/Logos techonolgies/pytorch-logo.png" },
      { name: "LangChain", logo: "/Logos techonolgies/langchain.png" },
      { name: "Hugging Face", logo: "/Logos techonolgies/Hugging Face.png" },
    ],
  },
  {
    title: "Data Intelligence",
    description: "Modern data platforms, real-time pipelines, lakehouse architectures, and self-service analytics.",
    href: "/capabilities/data-ai",
    category: "Data & Product" as Category,
    techs: [
      { name: "Spark", logo: "/Logos techonolgies/spark.png" },
      { name: "Kafka", logo: "/Logos techonolgies/kafka.png" },
      { name: "Databricks", logo: "/Logos techonolgies/databricks.png" },
    ],
  },
  {
    title: "Platform Engineering",
    description: "Cloud-native platforms, IDP toolchains, and golden paths for developer experience at scale.",
    href: "/capabilities/platform-engineering",
    category: "Engineering" as Category,
    techs: [
      { name: "Kubernetes", logo: "/Logos techonolgies/Kubernetes_logo_without_workmark.svg.png" },
      { name: "Terraform", logo: "/Logos techonolgies/Terraform.png" },
      { name: "ArgoCD", logo: "/Logos techonolgies/argo.png" },
    ],
  },
  {
    title: "Product & Experience",
    description: "End-to-end product development — from discovery to delivery — with cross-functional squads.",
    href: "/capabilities/product-experience",
    category: "Data & Product" as Category,
    techs: [
      { name: "React", logo: "/Logos techonolgies/react.png" },
      { name: "TypeScript", logo: "/Logos techonolgies/Typescript.svg.png" },
      { name: "Next.js", logo: "/Logos techonolgies/images.png" },
    ],
  },
  {
    title: "API & Integration",
    description: "API-first strategies, event-driven microservices, domain decomposition, and orchestration layers.",
    href: "/capabilities/api-integration",
    category: "Engineering" as Category,
    techs: [
      { name: "Java", logo: "/Logos techonolgies/java.png" },
      { name: "Go", logo: "/Logos techonolgies/go.png" },
      { name: "GraphQL", logo: "/Logos techonolgies/GraphQL_Logo.svg.png" },
    ],
  },
  {
    title: "Cloud & DevSecOps",
    description: "Multi-cloud architectures, zero-trust security, FinOps, and regulatory compliance.",
    href: "/capabilities/cloud-devsecops",
    category: "Cloud" as Category,
    techs: [
      { name: "AWS", logo: "/Logos techonolgies/aws.png" },
      { name: "Azure", logo: "/Logos techonolgies/Microsoft_Azure.svg.png" },
      { name: "GCP", logo: "/Logos techonolgies/google-cloud.png" },
    ],
  },
];

export function CapabilitiesGrid() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? capabilities : capabilities.filter((c) => c.category === active);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
      {/* Left — sticky text + filters */}
      <div className="lg:sticky lg:top-24">
        <FadeIn>
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#717171] mb-4">// CAPABILITIES</p>
          <h2 className="text-heading text-black mb-4" style={{ maxWidth: "22ch" }}>
            Full-spectrum engineering for the AI era.
          </h2>
          <p className="text-[15px] text-[#4e4e4e] leading-relaxed mb-8 max-w-xs tracking-[0.01em]">
            From AI models to cloud infrastructure — every capability your enterprise needs.
          </p>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={120}>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-colors tracking-[0.01em] ${
                  active === cat
                    ? "bg-black text-white"
                    : "bg-white text-[#4e4e4e] hover:text-black border border-[#e5e5e5] hover:border-[#ccc]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <Link href="/capabilities" className="text-[14px] font-medium text-black hover:text-[#4e4e4e] transition-colors">
            All capabilities →
          </Link>
        </FadeIn>
      </div>

      {/* Right — cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map((cap, i) => (
          <FadeIn key={cap.title} delay={i * 60} className="h-full">
            <Link
              href={cap.href}
              className="group el-card bg-white p-6 flex flex-col h-full hover:shadow-lg transition-shadow"
            >
              {/* Icons on top */}
              <div className="flex items-center gap-2.5 mb-5">
                {cap.techs.map((t) => (
                  <div key={t.name} className="w-8 h-8 shrink-0 flex items-center justify-center">
                    <Image src={t.logo} alt={t.name} width={32} height={32} className="object-contain w-full h-full" />
                  </div>
                ))}
              </div>

              <h3 className="text-[15px] font-medium text-black mb-2 tracking-tight group-hover:text-[#22AEA4] transition-colors">
                {cap.title}
              </h3>
              <p className="text-[14px] text-[#4e4e4e] leading-relaxed tracking-[0.01em] flex-1">
                {cap.description}
              </p>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

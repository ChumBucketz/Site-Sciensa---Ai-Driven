import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const capabilities = [
  { title: "Data Platforms & Lakehouses", description: "Modern data architectures on Databricks, Snowflake, and Delta Lake — unifying batch and streaming workloads.", items: ["Lakehouse architecture", "Data mesh design", "Multi-cloud data", "Data contracts"] },
  { title: "Real-time Analytics", description: "Sub-second analytics pipelines with Kafka, Flink, and Apache Spark Structured Streaming for operational intelligence.", items: ["Streaming pipelines", "Apache Flink", "Real-time dashboards", "Event-driven analytics"] },
  { title: "Data Pipelines & ETL/ELT", description: "Reliable, observable data pipelines with dbt, Airflow, and modern orchestration patterns for regulated environments.", items: ["dbt transformations", "Airflow orchestration", "Data quality gates", "Lineage tracking"] },
  { title: "Feature Stores & ML Data", description: "Centralized feature engineering, online/offline serving, and data versioning to accelerate ML model development.", items: ["Feature registry", "Online/offline serving", "Data versioning", "Point-in-time joins"] },
  { title: "Data Governance", description: "Metadata management, data cataloging, lineage, and access control for regulatory compliance in financial services and healthcare.", items: ["Data cataloging", "Lineage & provenance", "Access policies", "LGPD/HIPAA compliance"] },
  { title: "ML Operationalization", description: "End-to-end MLOps — model registry, CI/CD for ML, drift monitoring, and automated retraining pipelines.", items: ["Model registry (MLflow)", "ML CI/CD", "Drift monitoring", "Auto-retraining"] },
];

const caseStudies = [
  { client: "Brazilian Bank", title: "Real-time Credit Risk Platform", result: "Built a real-time credit scoring platform processing 500K daily decisions at < 100ms latency with full regulatory auditability.", tags: ["Real-time Analytics", "ML Ops"] },
  { client: "Healthcare Network", title: "Unified Patient Data Platform", result: "Consolidated EHR data from 200+ hospitals into a FHIR-compliant lakehouse enabling real-time clinical decision support.", tags: ["Data Platform", "Governance"] },
  { client: "Retail Conglomerate", title: "Demand Intelligence Platform", result: "Central feature store and demand forecasting platform cut inventory waste by 30% and improved forecast accuracy by 45%.", tags: ["Feature Store", "ML Ops"] },
];

export default function DataAI() {
  return (
    <>
      <HeroSimple
        eyebrow="Capabilities / Data & AI"
        headline="Data platforms that power intelligent decisions"
        subheadline="From data pipelines and real-time analytics to feature stores and governance — we operationalize data as a strategic asset."
      />

      <section className="border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <StatGrid stats={[
            { value: "200+", label: "Data pipelines in production" },
            { value: "10TB+", label: "Data processed daily" },
            { value: "50+", label: "ML models operationalized" },
            { value: "99.9%", label: "Pipeline reliability" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader eyebrow="// WHAT WE BUILD" headline="Data capabilities that compound" subheadline="From raw data to production intelligence — end to end." />
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
        headline="Ready to turn data into a competitive edge?"
        subheadline="Talk to our data engineering team about your platform and analytics challenges."
        primary={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}

import { CapabilityDetailTemplate, type CapabilityDetailData } from "@/components/templates/CapabilityDetailTemplate";

const data: CapabilityDetailData = {
  eyebrow: "Capabilities / Data & AI",
  headline: "Data platforms that power intelligent decisions",
  subheadline: "From data pipelines and real-time analytics to feature stores and governance — we operationalize data as a strategic asset.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486835/0_Technology_Futuristic_3840x2160_1_fydegq.mp4",
  stats: [
    { value: "200+", label: "Data pipelines in production" },
    { value: "10TB+", label: "Data processed daily" },
    { value: "50+", label: "ML models operationalized" },
    { value: "99.9%", label: "Pipeline reliability" },
  ],
  approach: {
    sectionLabel: "// OUR APPROACH",
    sectionHeadline: "Data that compounds over time.",
    rows: [
      {
        title: "Lakehouse architecture at scale",
        description: "We build modern data architectures on Databricks, Snowflake, and Delta Lake that unify batch and streaming workloads — giving you one consistent platform for analytics, ML, and operational intelligence.",
        stat: "10TB+",
        statLabel: "Data processed daily across client platforms",
        reverse: false,
        items: ["Databricks & Delta Lake", "Snowflake architecture", "Data mesh design", "Multi-cloud data strategy"],
      },
      {
        title: "Governance built for regulated industries",
        description: "In financial services and healthcare, data governance isn't optional. We embed LGPD, HIPAA, and SOX compliance into the data platform itself — lineage, access control, and audit trails from day one.",
        stat: "100%",
        statLabel: "Regulatory compliance across all data products",
        reverse: true,
        items: ["LGPD & HIPAA compliance", "Data lineage & provenance", "Access policies & RBAC", "Automated audit trails"],
      },
      {
        title: "ML in production, not just notebooks",
        description: "We bridge the gap between data science and engineering — building ML pipelines, feature stores, and model monitoring systems that keep models performing in the real world, not just on test sets.",
        stat: "50+",
        statLabel: "ML models in production operations",
        reverse: false,
        items: ["MLflow model registry", "Feature store (online/offline)", "Drift detection & alerting", "Automated retraining pipelines"],
      },
    ],
  },
  modules: {
    sectionLabel: "// WHAT WE BUILD",
    sectionHeadline: "Data capabilities that compound",
    sectionSubheadline: "From raw data to production intelligence — end to end.",
    items: [
      { title: "Data Platforms & Lakehouses", description: "Modern data architectures on Databricks, Snowflake, and Delta Lake — unifying batch and streaming workloads.", tags: ["Databricks", "Snowflake", "Delta Lake"] },
      { title: "Real-time Analytics", description: "Sub-second analytics pipelines with Kafka, Flink, and Spark Streaming for operational intelligence.", tags: ["Kafka", "Flink", "Real-time"] },
      { title: "Data Pipelines & ETL/ELT", description: "Reliable, observable data pipelines with dbt, Airflow, and modern orchestration patterns for regulated environments.", tags: ["dbt", "Airflow", "Data Quality"] },
      { title: "Feature Stores & ML Data", description: "Centralized feature engineering, online/offline serving, and data versioning to accelerate ML model development.", tags: ["Feature Store", "ML Data", "Versioning"] },
      { title: "Data Governance", description: "Metadata management, data cataloging, lineage, and access control for regulatory compliance in financial services and healthcare.", tags: ["Governance", "LGPD", "HIPAA"] },
      { title: "ML Operationalization", description: "End-to-end MLOps — model registry, CI/CD for ML, drift monitoring, and automated retraining pipelines.", tags: ["MLOps", "MLflow", "CI/CD for ML"] },
    ],
  },
  caseStudies: [
    { client: "Brazilian Bank", title: "Real-time Credit Risk Platform", result: "Built a real-time credit scoring platform processing 500K daily decisions at < 100ms latency with full regulatory auditability.", tags: ["Real-time Analytics", "MLOps"] },
    { client: "Healthcare Network", title: "Unified Patient Data Platform", result: "Consolidated EHR data from 200+ hospitals into a FHIR-compliant lakehouse enabling real-time clinical decision support.", tags: ["Data Platform", "Governance"] },
    { client: "Retail Conglomerate", title: "Demand Intelligence Platform", result: "Central feature store and demand forecasting platform cut inventory waste by 30% and improved forecast accuracy by 45%.", tags: ["Feature Store", "MLOps"] },
  ],
  cta: {
    headline: "Ready to turn data into a competitive edge?",
    subheadline: "Talk to our data engineering team about your platform and analytics challenges.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "All capabilities →", href: "/capabilities" },
  },
};

export default function DataAI() {
  return <CapabilityDetailTemplate data={data} />;
}

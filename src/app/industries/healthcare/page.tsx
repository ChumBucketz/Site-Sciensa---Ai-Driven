import { IndustryDetailTemplate, type IndustryDetailData } from "@/components/templates/IndustryDetailTemplate";

const data: IndustryDetailData = {
  eyebrow: "Industries / Healthcare & Life Sciences",
  headline: "Digital systems for regulated health ecosystems",
  subheadline: "Interoperable health platforms, patient-centric digital journeys, and responsible AI — built to meet the operational and regulatory demands of healthcare.",
  video: "https://res.cloudinary.com/dshrkq1up/video/upload/q_auto/f_auto/v1775486140/7020046_Tunnel_Hexagon_1920x1080_ajcc34.mp4",
  stats: [
    { value: "200+", label: "Hospitals connected" },
    { value: "50M+", label: "Patient records synced" },
    { value: "85%", label: "Diagnostic accuracy improvement" },
    { value: "FHIR R4", label: "Interoperability standard" },
  ],
  approach: {
    sectionLabel: "// OUR EDGE",
    sectionHeadline: "Health engineering where stakes are highest.",
    rows: [
      {
        title: "FHIR-native from the start",
        description: "Healthcare interoperability requires FHIR R4 compliance — not as an export format, but as the native data model. We design health platforms that speak FHIR natively, enabling real-time data exchange across any care setting.",
        stat: "50M+",
        statLabel: "Patient records synced via FHIR platforms we've built",
        reverse: false,
        items: ["FHIR R4 native data model", "HL7 to FHIR transformation", "EHR integration (Epic, TASY)", "Real-time clinical data exchange"],
      },
      {
        title: "Responsible AI for clinical environments",
        description: "AI in healthcare has zero tolerance for hallucination or unexplained decisions. We build clinical AI systems with explainability, bias testing, and clinician-in-the-loop design as mandatory requirements — not nice-to-haves.",
        stat: "85%",
        statLabel: "Diagnostic accuracy improvement in clinical AI deployments",
        reverse: true,
        items: ["Clinical AI explainability", "Bias detection & testing", "Clinician-in-the-loop design", "Regulatory audit trails"],
      },
    ],
  },
  capabilities: {
    sectionLabel: "// WHAT WE DELIVER",
    sectionHeadline: "Engineering for health",
    sectionSubheadline: "From EHR integration to AI diagnostics — built for regulated care environments.",
    items: [
      { title: "Digital Health Platforms", description: "Telemedicine, patient portals, and digital health journeys built on FHIR standards with LGPD and HIPAA compliance at the core.", details: ["Telemedicine platforms", "Patient portals", "FHIR compliance", "LGPD/HIPAA controls"] },
      { title: "Interoperability & Data Exchange", description: "HL7 FHIR APIs, EHR integration, and health information exchange platforms connecting care settings across hospital networks.", details: ["HL7 FHIR APIs", "EHR integration (Epic, TASY)", "HIE platforms", "Real-time data sync"] },
      { title: "Operational Automation", description: "Clinical workflow automation, scheduling intelligence, bed management, and administrative process optimization for care providers.", details: ["Clinical workflow automation", "Scheduling intelligence", "Bed management", "Administrative automation"] },
      { title: "Patient Digital Journeys", description: "Personalized digital patient experiences — from scheduling and pre-care to post-discharge follow-up and remote monitoring.", details: ["Digital scheduling", "Pre-care instructions", "Post-discharge follow-up", "Remote monitoring"] },
      { title: "Responsible AI in Healthcare", description: "Clinical decision support, predictive risk scoring, and AI-driven diagnostics with full auditability, bias testing, and regulatory guardrails.", details: ["Clinical decision support", "Predictive risk scoring", "AI diagnostics", "Bias & fairness testing"] },
    ],
  },
  caseStudies: [
    { client: "Healthcare Network", title: "Unified Health Data Platform", result: "FHIR-compliant data platform connecting 200+ hospitals, syncing 50M+ records with < 500ms query latency.", tags: ["Interoperability", "Data Exchange"] },
    { client: "Hospital Group", title: "AI Clinical Decision Support", result: "AI-powered clinical decision support deployed across 12 hospitals, improving diagnostic accuracy by 85% and cutting report time by 60%.", tags: ["Responsible AI", "Clinical Workflows"] },
    { client: "Health Insurance", title: "Digital Member Platform", result: "End-to-end digital member experience — authorization, benefits, and telehealth — increasing digital adoption by 70% in 12 months.", tags: ["Digital Journeys", "Operational Automation"] },
  ],
  cta: {
    headline: "Ready to modernize your health platform?",
    subheadline: "Talk to our healthcare engineering team about your digital health challenges.",
    primary: { label: "Start a conversation", href: "/contact" },
    secondary: { label: "All industries →", href: "/industries" },
  },
};

export default function Healthcare() {
  return <IndustryDetailTemplate data={data} />;
}

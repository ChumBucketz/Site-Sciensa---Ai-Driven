import { HeroSimple } from "@/components/sections/HeroSimple";
import { StatGrid } from "@/components/sections/StatGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

const capabilities = [
  { title: "LLM & Generative AI", description: "Fine-tuned models, RAG architectures, and AI agents that integrate with your enterprise systems.", items: ["Custom fine-tuning", "RAG pipelines", "AI agents & copilots", "Prompt engineering"] },
  { title: "Computer Vision", description: "Image classification, object detection, and video analytics for manufacturing, retail, and healthcare.", items: ["Quality inspection", "Document processing", "Video analytics", "OCR & extraction"] },
  { title: "MLOps & Model Operations", description: "End-to-end ML pipelines, model monitoring, and automated retraining for production AI.", items: ["ML pipelines", "Model monitoring", "A/B testing", "Feature stores"] },
  { title: "NLP & Conversational AI", description: "Intelligent chatbots, document understanding, and sentiment analysis at scale.", items: ["Document understanding", "Chatbots & assistants", "Sentiment analysis", "Multi-language NLP"] },
  { title: "Real-time AI Inference", description: "Low-latency inference pipelines for fraud detection, recommendations, and dynamic pricing.", items: ["Edge inference", "Streaming ML", "Real-time scoring", "GPU optimization"] },
  { title: "Responsible AI", description: "Bias detection, explainability, and governance frameworks that meet regulatory requirements.", items: ["Bias detection", "Model explainability", "AI governance", "Regulatory compliance"] },
];

const caseStudies = [
  { client: "Global Bank", title: "Document AI Platform", result: "Automated processing of 5M+ documents/month with 98% accuracy, reducing manual effort by 85%.", tags: ["Computer Vision", "NLP"] },
  { client: "Retail Chain", title: "Demand Forecasting", result: "ML-powered demand prediction improved inventory accuracy by 40%, reducing waste by $12M annually.", tags: ["MLOps", "Real-time AI"] },
  { client: "Insurance Leader", title: "Claims AI Agent", result: "GenAI agent handles 60% of claims inquiries autonomously with 94% customer satisfaction.", tags: ["LLM", "Conversational AI"] },
];

export default function AIEngineering() {
  return (
    <>
      <HeroSimple
        eyebrow="Capabilities / AI Engineering"
        headline="Applied AI engineering for the enterprise"
        subheadline="We design, build, and operationalize AI systems that create measurable business value — from computer vision to generative AI agents."
      />

      <section className="border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <StatGrid stats={[
            { value: "150+", label: "AI models in production" },
            { value: "85%", label: "Accuracy improvement avg." },
            { value: "40+", label: "Enterprise AI deployments" },
            { value: "10×", label: "Faster model iteration" },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader eyebrow="// WHAT WE BUILD" headline="AI capabilities that ship" subheadline="Production AI — not proof-of-concepts." />
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
        headline="Ready to put AI to work?"
        subheadline="Schedule a briefing with our AI engineering team."
        primary={{ label: "Schedule a briefing", href: "/contact" }}
      />
    </>
  );
}

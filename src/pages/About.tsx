import ContentPageLayout from "@/components/landing/ContentPageLayout";

const About = () => {
  return (
    <ContentPageLayout
      eyebrow="About"
      title="A brief introduction to QA Pro and how it helps modern teams."
      description="QA Pro helps product, QA, and engineering teams manage testing, track progress, and improve release confidence from one clear workspace."
      highlights={[
        "A simple overview of what QA Pro does and who it is for.",
        "A shared system for planning, execution, bug tracking, and release readiness.",
        "Clear visibility for QA teams, developers, managers, and stakeholders.",
        "A focused platform built to reduce QA confusion and manual coordination.",
      ]}
      metrics={[
        { value: "1", label: "Clear purpose", detail: "Keep QA work structured, visible, and easier to manage." },
        { value: "4", label: "Main user groups", detail: "QA, development, product, and leadership stay aligned." },
        { value: "100%", label: "Quality focus", detail: "The platform is built around testing clarity and release confidence." },
      ]}
      pillarsEyebrow="Brief About"
      pillarsTitle="What QA Pro is and why teams use it."
      pillarsDescription="This page should quickly explain the platform, the problem it solves, and the value it brings to software teams."
      pillars={[
        { title: "What it does", description: "QA Pro centralizes testing activity, progress tracking, and release visibility." },
        { title: "Who it helps", description: "It supports QA engineers, leads, developers, and decision-makers in one flow." },
        { title: "Why it matters", description: "Teams get fewer blind spots, clearer ownership, and stronger release control." },
        { title: "How it feels", description: "The experience stays practical, simple, and easy to adopt in day-to-day work." },
      ]}
      processEyebrow="Page Flow"
      processTitle="What this page should communicate in a few quick steps."
      processSteps={[
        { title: "Introduce the platform", description: "Start with a short explanation of QA Pro and its purpose." },
        { title: "Show the value", description: "Explain how the platform improves visibility, workflow, and release quality." },
        { title: "Guide the next step", description: "Encourage teams to contact you or request a demo after reading." },
      ]}
      faqEyebrow="FAQs"
      faqTitle="Questions teams usually ask about QA Pro."
      faqs={[
        { question: "What makes QA Pro different?", answer: "It stays focused on QA operations instead of becoming a generic workspace with too many disconnected features." },
        { question: "Who is the product for?", answer: "It is for teams that want cleaner planning, execution visibility, and stronger release readiness." },
        { question: "Is the platform only for dedicated QA teams?", answer: "No. It supports mixed ownership models where engineering, product, and QA all contribute to release quality." },
      ]}
      ctaTitle="Learn the platform quickly, then move to the next step."
      ctaDescription="If the overview fits your team, the next step is a quick discussion or product walkthrough."
      primaryActionLabel="Talk to Our Team"
      primaryActionTo="/contact-us"
    />
  );
};

export default About;

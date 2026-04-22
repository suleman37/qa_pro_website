import ContentPageLayout from "@/components/landing/ContentPageLayout";

const Industries = () => {
  return (
    <ContentPageLayout
      eyebrow="Industries"
      title="A brief look at the industries where QA Pro fits best."
      description="This page should quickly show which industries benefit most from structured QA workflows, release visibility, and role-based coordination."
      highlights={[
        "SaaS teams that need faster regression coverage without adding process overhead.",
        "Fintech and banking products that require traceable quality checks and release approvals.",
        "Healthcare and compliance-heavy platforms where audit-ready evidence matters.",
        "Enterprise product organizations managing multiple squads, environments, and QA owners.",
      ]}
      metrics={[
        { value: "4", label: "Core verticals", detail: "Built for SaaS, fintech, healthcare, and enterprise delivery models." },
        { value: "24/7", label: "Release visibility", detail: "Centralized reporting keeps delivery, QA, and leadership aligned." },
        { value: "1", label: "Shared system", detail: "Planning, execution, and sign-off live in one consistent workflow." },
      ]}
      pillarsEyebrow="Industry Brief"
      pillarsTitle="Where QA Pro works best and what each team needs."
      pillarsDescription="The content should keep the explanation short while still showing how QA Pro adapts to different delivery environments."
      pillars={[
        { title: "SaaS teams", description: "Move quickly with lean release cycles, recurring regressions, and cross-functional ownership." },
        { title: "Fintech products", description: "Support audit trails, approval checkpoints, and better defect prioritization around customer trust." },
        { title: "Healthcare systems", description: "Handle evidence, repeatability, and compliance-sensitive release workflows with more control." },
        { title: "Enterprise delivery", description: "Coordinate multiple squads, environments, and reporting lines without fragmented status updates." },
      ]}
      processEyebrow="Page Flow"
      processTitle="How to explain industry fit in a simple way."
      processSteps={[
        { title: "Map the delivery model", description: "Define release cadence, environments, team roles, and risk checkpoints for the business domain." },
        { title: "Standardize execution", description: "Create one repeatable process for planning, tracking, evidence, and defect follow-up." },
        { title: "Operationalize visibility", description: "Give stakeholders a live view of QA progress, blockers, ownership, and release confidence." },
      ]}
      faqEyebrow="FAQs"
      faqTitle="Common questions from teams evaluating QA Pro for their industry."
      faqs={[
        { question: "Can this work for highly regulated teams?", answer: "Yes. The structure supports stronger traceability, documented progress, and clearer release accountability." },
        { question: "Is it only for large enterprises?", answer: "No. Smaller SaaS teams can use the same workflow discipline without adding enterprise-level overhead." },
        { question: "Do industries need separate setups?", answer: "The foundation stays consistent while content, checkpoints, and reporting adapt to the team's operating context." },
      ]}
      ctaTitle="Choose a QA system that fits your delivery pressure."
      ctaDescription="If your team operates in a high-risk or high-speed environment, QA Pro gives you a cleaner structure for release readiness and execution visibility."
    />
  );
};

export default Industries;

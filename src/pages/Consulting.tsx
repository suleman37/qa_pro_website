import ContentPageLayout from "@/components/landing/ContentPageLayout";

const Consulting = () => {
  return (
    <ContentPageLayout
      eyebrow="Consulting"
      title="Consulting support for QA strategy, workflows, and execution discipline."
      description="QA Pro consulting helps teams tighten test operations, reduce release friction, and implement a quality process that scales with delivery speed."
      highlights={[
        "Audit existing QA processes, handoffs, and release readiness checkpoints.",
        "Design role-based workflows for testers, developers, product managers, and leadership.",
        "Standardize reporting, triage, and quality metrics across squads or business units.",
        "Create a practical rollout plan that improves quality without slowing delivery.",
      ]}
      metrics={[
        { value: "3", label: "Core consulting lanes", detail: "Process audit, workflow design, and rollout planning." },
        { value: "1", label: "Operating model", detail: "Create a QA structure your teams can repeat across releases." },
        { value: "0", label: "Unnecessary overhead", detail: "The goal is practical execution, not adding ceremony that slows teams down." },
      ]}
      pillarsEyebrow="Consulting Focus"
      pillarsTitle="Consulting is aimed at execution quality, not theoretical process decks."
      pillarsDescription="The work stays close to your actual delivery cycle so teams can improve planning, triage, ownership, and release confidence in a usable way."
      pillars={[
        { title: "Workflow audit", description: "Review how QA work moves today, where handoffs break, and where release risk becomes unclear." },
        { title: "Role design", description: "Clarify responsibilities between QA, engineering, product, and stakeholders." },
        { title: "Reporting model", description: "Define simple, repeatable reporting that helps decisions instead of creating noise." },
        { title: "Rollout guidance", description: "Turn the target process into a change plan teams can actually adopt." },
      ]}
      processEyebrow="Engagement Model"
      processTitle="A consulting structure designed for practical implementation."
      processSteps={[
        { title: "Assess the current state", description: "Understand your existing QA cycle, release habits, and operational gaps." },
        { title: "Design the target workflow", description: "Create the future-state process with roles, checkpoints, and communication rules." },
        { title: "Support adoption", description: "Translate the model into rollout steps your teams can apply without disrupting delivery." },
      ]}
      faqEyebrow="FAQs"
      faqTitle="Questions teams ask before starting consulting."
      faqs={[
        { question: "Is consulting useful if we already have a QA team?", answer: "Yes. The focus is often on improving coordination, visibility, and consistency across that team." },
        { question: "Does consulting require using QA Pro?", answer: "The consulting work is aligned with QA Pro, but the core value is building a stronger operating model for quality." },
        { question: "Can this help multi-team organizations?", answer: "Yes. Standardization across squads is one of the main reasons teams request support." },
      ]}
      ctaTitle="Fix the process gaps before they become release problems."
      ctaDescription="If your team needs stronger QA discipline, clearer ownership, and more reliable release flow, consulting is the fastest structured starting point."
      primaryActionLabel="Book a Discovery Call"
      primaryActionTo="/contact-us"
    />
  );
};

export default Consulting;

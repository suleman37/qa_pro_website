import ContentPageLayout from "@/components/landing/ContentPageLayout";

const Consulting = () => {
  return (
    <ContentPageLayout
      eyebrow="Consulting"
      title="A brief consulting page for QA strategy, workflow, and process support."
      description="This page should clearly explain how consulting helps teams improve QA operations, team coordination, and release discipline."
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
      pillarsEyebrow="Consulting Brief"
      pillarsTitle="What the consulting service helps teams improve."
      pillarsDescription="The explanation should stay short, practical, and focused on real workflow problems instead of heavy process language."
      pillars={[
        { title: "Workflow audit", description: "Review how QA work moves today, where handoffs break, and where release risk becomes unclear." },
        { title: "Role design", description: "Clarify responsibilities between QA, engineering, product, and stakeholders." },
        { title: "Reporting model", description: "Define simple, repeatable reporting that helps decisions instead of creating noise." },
        { title: "Rollout guidance", description: "Turn the target process into a change plan teams can actually adopt." },
      ]}
      processEyebrow="Working Steps"
      processTitle="How the consulting process should be explained simply."
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

import ContentPageLayout from "@/components/landing/ContentPageLayout";

const FreeDemo = () => {
  return (
    <ContentPageLayout
      eyebrow="Get a Free Demo"
      title="See how QA Pro manages planning, execution, and release visibility in one place."
      description="This page gives prospects a dedicated route from the navbar to explore the product and request a walkthrough tailored to their QA process."
      highlights={[
        "A focused product walkthrough based on your current release and testing workflow.",
        "Examples of dashboards, role-based access, and execution tracking relevant to your team.",
        "A clear view of how the platform improves status visibility and QA coordination.",
        "A low-friction next step for internal evaluation, stakeholder review, and adoption.",
      ]}
      metrics={[
        { value: "1", label: "Focused walkthrough", detail: "The demo stays tied to your QA process instead of showing irrelevant screens." },
        { value: "3", label: "Key areas covered", detail: "Planning, execution tracking, and release visibility." },
        { value: "Fast", label: "Evaluation path", detail: "Get a practical view of product fit without unnecessary back and forth." },
      ]}
      pillarsEyebrow="Demo Value"
      pillarsTitle="The best demo is the one that maps directly to your team's workflow."
      pillarsDescription="The walkthrough is designed to show how QA Pro fits planning, execution, reporting, and release confidence for the kind of team you run today."
      pillars={[
        { title: "Relevant screens", description: "See the parts of the platform that matter to your team instead of a generic product tour." },
        { title: "Role-based flow", description: "Understand how QA, engineering, and leadership use the platform differently." },
        { title: "Operational clarity", description: "Review how status, blockers, and release confidence become easier to manage." },
        { title: "Adoption view", description: "Leave with a better sense of rollout effort and internal stakeholder fit." },
      ]}
      processEyebrow="Demo Flow"
      processTitle="What the free demo is structured to show."
      processSteps={[
        { title: "Understand your setup", description: "Start with your current testing model, tools, and release pain points." },
        { title: "Walk through the platform", description: "See how QA Pro handles planning, execution visibility, ownership, and reporting." },
        { title: "Confirm next steps", description: "Decide whether to continue with evaluation, rollout planning, or a deeper discussion." },
      ]}
      faqEyebrow="FAQs"
      faqTitle="Questions teams ask before booking a demo."
      faqs={[
        { question: "Is the demo generic?", answer: "No. The conversation is more useful when it is tied to your team's workflow and current challenges." },
        { question: "Can multiple stakeholders join?", answer: "Yes. Product, engineering, QA, and leadership can all join if that helps evaluation." },
        { question: "What should we prepare?", answer: "A short summary of your current QA process, release cadence, and main blockers is enough." },
      ]}
      ctaTitle="Book a walkthrough that is relevant to your QA workflow."
      ctaDescription="If you want to see the platform with your own delivery model in mind, the free demo is the right next step."
      primaryActionLabel="Contact Us"
      primaryActionTo="/contact-us"
    />
  );
};

export default FreeDemo;

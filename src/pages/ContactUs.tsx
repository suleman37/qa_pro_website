import ContentPageLayout from "@/components/landing/ContentPageLayout";

const ContactUs = () => {
  return (
    <ContentPageLayout
      eyebrow="Contact Us"
      title="Start a conversation about your QA process and release goals."
      description="Whether you want a walkthrough, pricing discussion, or implementation guidance, this page gives your team a clear path to connect and move forward."
      highlights={[
        "Discuss your current QA bottlenecks, tooling, and reporting requirements.",
        "Review team size, workflows, and the rollout approach that fits your organization.",
        "See how QA Pro can support release planning, execution tracking, and stakeholder visibility.",
        "Move from evaluation to a clear next step without disrupting your existing workflow.",
      ]}
      metrics={[
        { value: "30m", label: "Discovery call", detail: "Enough time to understand your workflow, blockers, and delivery goals." },
        { value: "3", label: "Common outcomes", detail: "Demo request, consulting fit, or rollout discussion based on your needs." },
        { value: "1", label: "Clear next step", detail: "Every conversation should end with a defined direction, not vague follow-up." },
      ]}
      pillarsEyebrow="What To Share"
      pillarsTitle="The better the context, the more useful the conversation."
      pillarsDescription="You do not need a perfect brief. A few concrete details about your current QA process are enough to make the discussion productive."
      pillars={[
        { title: "Current workflow", description: "Explain how your team plans testing, tracks execution, and manages release readiness today." },
        { title: "Key blockers", description: "Share where things slow down, get missed, or create too much manual coordination." },
        { title: "Team structure", description: "Outline who owns QA work across engineering, product, and testing roles." },
        { title: "Evaluation goal", description: "Tell us whether you need a demo, consulting support, or a product fit discussion." },
      ]}
      processEyebrow="Conversation Flow"
      processTitle="What usually happens after you reach out."
      processSteps={[
        { title: "Context review", description: "We start by understanding the release model, tooling, and the QA pain points you want to solve." },
        { title: "Fit discussion", description: "We identify whether the right next step is a product demo, workflow consultation, or implementation conversation." },
        { title: "Action plan", description: "You leave with a clear next move instead of a generic follow-up thread." },
      ]}
      faqEyebrow="FAQs"
      faqTitle="What teams usually ask before contacting us."
      faqs={[
        { question: "Do I need full requirements before reaching out?", answer: "No. A rough summary of your current process and challenges is enough to start." },
        { question: "Can I ask about both demo and consulting?", answer: "Yes. The discussion can cover product fit and process support in the same call." },
        { question: "Is this only for sales conversations?", answer: "No. The goal is to understand fit and recommend the right path based on your situation." },
      ]}
      ctaTitle="Start with the problem your team needs to solve."
      ctaDescription="If you want to reduce QA friction, improve release confidence, or evaluate the platform, this is the right place to begin."
    />
  );
};

export default ContactUs;

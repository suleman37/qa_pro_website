import ContentPageLayout from "@/components/landing/ContentPageLayout";

const FreeDemo = () => {
  return (
    <ContentPageLayout
      eyebrow="Get a Free Demo"
      title="A simple demo page with clear onboarding steps for new teams."
      description="This page should help visitors request a walkthrough and understand the onboarding path from first demo to team setup."
      highlights={[
        "A quick way to book a free product walkthrough.",
        "A clear explanation of what users will see in the demo.",
        "A simple onboarding journey after the first conversation.",
        "A low-friction path from interest to setup.",
      ]}
      metrics={[
        { value: "1", label: "Free demo", detail: "A focused walkthrough should show the product in a simple and relevant way." },
        { value: "3", label: "Main onboarding steps", detail: "Demo, setup discussion, and team onboarding." },
        { value: "Fast", label: "Start process", detail: "Users should understand the next step immediately after booking." },
      ]}
      pillarsEyebrow="Demo Brief"
      pillarsTitle="What this page should show before onboarding starts."
      pillarsDescription="The content should quickly explain the demo purpose, what is included, and how the onboarding flow continues after it."
      pillars={[
        { title: "What users see", description: "The page should explain the dashboards, workflows, and visibility shown in the demo." },
        { title: "Who should join", description: "Visitors should know they can invite QA, product, and engineering stakeholders." },
        { title: "What happens next", description: "The page should connect the demo to setup and onboarding clearly." },
        { title: "Why it helps", description: "Users should understand how the walkthrough supports decision-making and adoption." },
      ]}
      processEyebrow="Onboarding Steps"
      processTitle="Simple onboarding steps after a user requests the free demo."
      processSteps={[
        { title: "Book the demo", description: "The visitor requests a walkthrough and shares basic team details." },
        { title: "Review the workflow", description: "The team sees how QA Pro fits their testing, reporting, and release process." },
        { title: "Start onboarding", description: "If the fit is right, the next step moves into setup and onboarding planning." },
      ]}
      faqEyebrow="FAQs"
      faqTitle="Questions teams ask before booking a demo."
      faqs={[
        { question: "Is the demo generic?", answer: "No. The conversation is more useful when it is tied to your team's workflow and current challenges." },
        { question: "Can multiple stakeholders join?", answer: "Yes. Product, engineering, QA, and leadership can all join if that helps evaluation." },
        { question: "What should we prepare?", answer: "A short summary of your current QA process, release cadence, and main blockers is enough." },
      ]}
      ctaTitle="Use this page to connect the demo request with onboarding."
      ctaDescription="The free demo page should not stop at interest. It should clearly guide users into the next onboarding step."
      primaryActionLabel="Contact Us"
      primaryActionTo="/contact-us"
    />
  );
};

export default FreeDemo;

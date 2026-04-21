import ContentPageLayout from "@/components/landing/ContentPageLayout";

const About = () => {
  return (
    <ContentPageLayout
      eyebrow="About"
      title="A focused QA platform for modern product and engineering teams."
      description="QA Pro is designed to simplify testing operations, reduce coordination gaps, and give teams one clear system for planning, tracking, and validating release quality."
      highlights={[
        "A single workspace for QA leads, testers, developers, and stakeholders.",
        "Structured flows for planning, execution, defect follow-up, and release readiness.",
        "Clear reporting that helps teams act on risks instead of hunting for status updates.",
        "A product direction centered on practical quality operations, not feature noise.",
      ]}
      metrics={[
        { value: "1", label: "Focused mission", detail: "Build a practical operating system for quality assurance teams." },
        { value: "4", label: "Core user groups", detail: "QA leads, testers, developers, and decision-makers work from the same view." },
        { value: "100%", label: "Operational clarity", detail: "The product is shaped around visibility, accountability, and release confidence." },
      ]}
      pillarsEyebrow="What We Believe"
      pillarsTitle="QA Pro is built around disciplined execution, not dashboard noise."
      pillarsDescription="The product direction is intentionally narrow: reduce confusion, improve accountability, and make quality operations easier to run every day."
      pillars={[
        { title: "Operational clarity", description: "Teams need one place to understand progress, blockers, risk, and ownership." },
        { title: "Useful structure", description: "The workflow should guide execution without forcing heavy process for the sake of process." },
        { title: "Cross-team alignment", description: "QA, engineering, product, and leadership should work from the same release picture." },
        { title: "Practical adoption", description: "A quality platform should improve habits quickly and fit into real delivery cycles." },
      ]}
      processEyebrow="Our Approach"
      processTitle="How QA Pro turns product philosophy into working process."
      processSteps={[
        { title: "Simplify the flow", description: "Remove scattered updates and replace them with one clear sequence for planning, execution, and review." },
        { title: "Strengthen accountability", description: "Make it obvious who owns each stage, which blockers matter, and what still needs validation." },
        { title: "Improve release decisions", description: "Give stakeholders better context before sign-off, not just raw activity metrics." },
      ]}
      faqEyebrow="FAQs"
      faqTitle="Questions teams usually ask about QA Pro."
      faqs={[
        { question: "What makes QA Pro different?", answer: "It stays focused on QA operations instead of becoming a generic workspace with too many disconnected features." },
        { question: "Who is the product for?", answer: "It is for teams that want cleaner planning, execution visibility, and stronger release readiness." },
        { question: "Is the platform only for dedicated QA teams?", answer: "No. It supports mixed ownership models where engineering, product, and QA all contribute to release quality." },
      ]}
      ctaTitle="See the product philosophy in a working workflow."
      ctaDescription="If the direction matches how your team thinks about quality, the next step is a practical walkthrough focused on your release process."
      primaryActionLabel="Talk to Our Team"
      primaryActionTo="/contact-us"
    />
  );
};

export default About;

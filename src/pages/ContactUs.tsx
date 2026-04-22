import ContentPageLayout from "@/components/landing/ContentPageLayout";

const ContactUs = () => {
  return (
    <ContentPageLayout
      eyebrow="Contact Us"
      title="Use the contact form to tell us about your team and QA needs."
      description="This page should make it easy for visitors to fill out a simple form, share their requirements, and get a clear response."
      highlights={[
        "A simple contact form for name, email, company, and message.",
        "A clear space to explain current QA problems or product questions.",
        "An easy way to request a demo, consultation, or pricing discussion.",
        "A short path from inquiry to the right next step.",
      ]}
      metrics={[
        { value: "1", label: "Contact form", detail: "One clear form should capture the main user details and requirement." },
        { value: "3", label: "Typical goals", detail: "Demo request, support question, or implementation discussion." },
        { value: "24h", label: "Fast follow-up", detail: "The page should set the expectation of a timely response." },
      ]}
      pillarsEyebrow="Contact Form"
      pillarsTitle="What the contact page should help users submit."
      pillarsDescription="The form does not need to be long. It just needs the right fields so users can explain what they need."
      pillars={[
        { title: "Basic details", description: "Collect name, email, company, and role so the response is contextual." },
        { title: "Requirement summary", description: "Let users explain their challenge, workflow, or reason for reaching out." },
        { title: "Request type", description: "Allow them to mention whether they want a demo, support, or consulting." },
        { title: "Next action", description: "Guide the submission toward a clear follow-up instead of a dead-end form." },
      ]}
      processEyebrow="Form Flow"
      processTitle="What happens after the user submits the contact form."
      processSteps={[
        { title: "Submit the form", description: "The user shares their contact details and a short message about their need." },
        { title: "Review the request", description: "The team checks whether the right follow-up is a demo, support reply, or consultation." },
        { title: "Respond with next steps", description: "The user receives a clear reply with the most relevant next action." },
      ]}
      faqEyebrow="FAQs"
      faqTitle="What teams usually ask before contacting us."
      faqs={[
        { question: "Do I need full requirements before reaching out?", answer: "No. A rough summary of your current process and challenges is enough to start." },
        { question: "Can I ask about both demo and consulting?", answer: "Yes. The discussion can cover product fit and process support in the same call." },
        { question: "Is this only for sales conversations?", answer: "No. The goal is to understand fit and recommend the right path based on your situation." },
      ]}
      ctaTitle="Keep the contact page simple, clear, and action-focused."
      ctaDescription="The main goal of this page is to help users send the right details through a short and useful form."
    />
  );
};

export default ContactUs;

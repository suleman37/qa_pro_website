import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";

interface ContentMetric {
  value: string;
  label: string;
  detail: string;
}

interface ContentCard {
  title: string;
  description: string;
}

interface ContentFaq {
  question: string;
  answer: string;
}

interface ContentPageLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  metrics: ContentMetric[];
  pillarsEyebrow: string;
  pillarsTitle: string;
  pillarsDescription: string;
  pillars: ContentCard[];
  processEyebrow: string;
  processTitle: string;
  processSteps: ContentCard[];
  faqEyebrow: string;
  faqTitle: string;
  faqs: ContentFaq[];
  ctaTitle: string;
  ctaDescription: string;
  primaryActionLabel?: string;
  primaryActionTo?: string;
}

const ContentPageLayout = ({
  eyebrow,
  title,
  description,
  highlights,
  metrics,
  pillarsEyebrow,
  pillarsTitle,
  pillarsDescription,
  pillars,
  processEyebrow,
  processTitle,
  processSteps,
  faqEyebrow,
  faqTitle,
  faqs,
  ctaTitle,
  ctaDescription,
  primaryActionLabel = "Get a free demo",
  primaryActionTo = "/free-demo",
}: ContentPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora blur-3xl opacity-70 dark:opacity-60" />
        <div className="pattern-grid mix-blend-soft-light dark:mix-blend-screen" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-16">
        <section className="container">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="rounded-3xl border border-border/60 bg-card/85 p-8 shadow-elevated backdrop-blur-xl md:p-10">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                {eyebrow}
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to={primaryActionTo}>
                    {primaryActionLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            </div>

            <div className="gradient-card rounded-3xl border border-border/60 p-8 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                What You Get
              </p>
              <div className="mt-6 space-y-4">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/70 px-4 py-4 shadow-soft"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-border/60 bg-card/80 p-7 shadow-soft backdrop-blur-xl"
              >
                <p className="text-4xl font-display font-bold text-primary">{metric.value}</p>
                <p className="mt-3 text-lg font-semibold">{metric.label}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{metric.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container py-20">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              {pillarsEyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">{pillarsTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{pillarsDescription}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-border/60 bg-card/85 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">
                  {pillar.title.slice(0, 1)}
                </div>
                <h3 className="mt-5 text-xl font-display font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container py-20">
          <div className="rounded-[1.5rem] border border-border/60 bg-secondary/35 p-8 md:p-10">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                {processEyebrow}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">{processTitle}</h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-border/60 bg-card/85 p-7 shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-cta text-lg font-bold text-primary-foreground shadow-soft">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-display font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-20">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              {faqEyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">{faqTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-border/60 bg-card/85 p-7 shadow-soft"
              >
                <h3 className="text-lg font-display font-semibold">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container py-20">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border/60 gradient-cta p-8 text-primary-foreground shadow-elevated md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(0_0%_100%_/_0.16),transparent_40%),radial-gradient(circle_at_bottom_right,hsl(0_0%_100%_/_0.12),transparent_35%)]" />
            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground/80">
                  Next Step
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">{ctaTitle}</h2>
                <p className="mt-4 text-base leading-7 text-primary-foreground/85">{ctaDescription}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link to={primaryActionTo}>
                    {primaryActionLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link to="/contact-us">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContentPageLayout;

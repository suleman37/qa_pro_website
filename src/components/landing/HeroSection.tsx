import { Button } from "@/components/ui/button";
import { Activity, ArrowRight, Play, ShieldCheck } from "lucide-react";
import portfolioImage from "@/assets/My-Portfolio.webp";

const heroMetrics = [
  { label: "Automation runs", value: "240", detail: "+18% vs last sprint", fill: "82%", tone: "primary" },
  { label: "Escaped defects", value: "0", detail: "4 releases in a row", fill: "96%", tone: "accent" },
  { label: "Review SLAs", value: "12m", detail: "avg. triage time", fill: "70%", tone: "primary" }
];

const checklistItems = [
  { title: "Critical paths validated", status: "Completed", tone: "primary" },
  { title: "Regressions queued", status: "In progress", tone: "accent" },
  { title: "Security sign-off", status: "Waiting", tone: "muted" }
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 flex min-h-[calc(100svh-5rem)] flex-col justify-center pt-32 pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,36rem)] lg:gap-16">
          <div className="order-2 relative mx-auto w-full max-w-lg animate-slide-up lg:order-2 lg:mx-0 lg:max-w-2xl" style={{ animationDelay: '0.1s' }}>
            <div className="glass-card overflow-hidden rounded-[2rem] border border-border/60 bg-card/80 p-3 shadow-elevated">
              <img
                src={portfolioImage}
                alt="QA Pro portfolio preview"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>

          <div className="order-1 max-w-4xl lg:order-1">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-primary animate-slide-up" style={{ animationDelay: '0.05s' }}>
              Header
            </span>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-6 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-foreground">QA Pro – Smart</span>
              <br />
              <span className="text-gradient">Quality Assurance</span>
              <br />
              <span className="text-foreground">for Modern Teams</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Simplify your QA workflows with role-based dashboards, real-time insights, and seamless collaboration. Built for teams that value quality.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Request Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 relative animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card rounded-2xl shadow-elevated p-4 md:p-6 border border-border/60 bg-card/85">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/60">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center shadow-soft border border-border/70">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Release readiness</p>
                  <p className="font-semibold text-lg">Release Candidate · Sprint 14</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">Live data</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-semibold border border-border/60">CI connected</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="md:col-span-2 space-y-6">
                <div className="grid sm:grid-cols-3 gap-4">
                  {heroMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl border border-border/60 bg-secondary/60 p-4 shadow-soft">
                      <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">{metric.label}</div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold">{metric.value}</p>
                        <span className="text-xs text-muted-foreground">{metric.detail}</span>
                      </div>
                      <div className="mt-3 h-1.5 rounded-full bg-background/80 overflow-hidden">
                        <div
                          className={`h-full ${metric.tone === "accent" ? "gradient-accent" : "gradient-cta"}`}
                          style={{ width: metric.fill }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-border/60 bg-secondary/60 p-4 shadow-soft">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 font-semibold text-sm">
                      <Activity className="w-4 h-4 text-primary" />
                      Execution timeline
                    </div>
                    <span className="text-xs text-muted-foreground">Updated 2 min ago</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Regression suite", value: "74%" },
                      { label: "Exploratory tests", value: "58%" },
                      { label: "Accessibility", value: "88%" }
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-muted-foreground">{item.label}</span>
                          <span className="font-semibold">{item.value}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-background/80 overflow-hidden">
                          <div className="h-full gradient-cta" style={{ width: item.value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-border/60 bg-secondary/70 p-4 shadow-soft">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-sm">Release checklist</span>
                  </div>
                  <ul className="space-y-3">
                    {checklistItems.map((item) => (
                      <li key={item.title} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">{item.title}</p>
                          <p className="text-xs text-muted-foreground">Ownership routed</p>
                        </div>
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            item.tone === "primary"
                              ? "bg-primary/10 text-primary"
                              : item.tone === "accent"
                                ? "bg-accent/10 text-accent"
                                : "bg-background/70 text-muted-foreground"
                          }`}
                        >
                          {item.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Confidence</span>
                    <span className="font-semibold text-primary">High · 94%</span>
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-card p-4 shadow-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Play className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-sm">Status briefing</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Share a quick walkthrough with stakeholders before go-live.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-[72%] gradient-accent" />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">72%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Floating elements */}
          <div className="absolute -left-4 top-1/4 glass-card rounded-xl p-4 shadow-card animate-float hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold">✓</span>
              </div>
              <div>
                <p className="font-medium text-sm">Tests Passed</p>
                <p className="text-accent font-bold">98.5%</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 top-1/3 glass-card rounded-xl p-4 shadow-card animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">⚡</span>
              </div>
              <div>
                <p className="font-medium text-sm">Faster Releases</p>
                <p className="text-primary font-bold">3x Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

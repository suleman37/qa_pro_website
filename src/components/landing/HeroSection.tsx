import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Trusted by 500+ Teams Worldwide
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">QA Pro – Smart</span>
            <br />
            <span className="text-gradient">Quality Assurance</span>
            <br />
            <span className="text-foreground">for Modern Teams</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Simplify your QA workflows with role-based dashboards, real-time insights, and seamless collaboration. Built for teams that value quality.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5" />
              Request Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-10 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-muted-foreground mb-6">Trusted by innovative teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              {['TechCorp', 'InnovateLabs', 'DevStudio', 'CloudBase', 'NextGen'].map((company) => (
                <span key={company} className="font-display font-semibold text-lg text-muted-foreground">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 relative animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card rounded-2xl shadow-elevated p-2 max-w-5xl mx-auto">
            <div className="bg-secondary/50 rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl gradient-cta flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Play className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground">Dashboard Preview</p>
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

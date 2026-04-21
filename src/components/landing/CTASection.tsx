import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 gradient-cta" />
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Start your free trial today
              </div>
              
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your QA Process?
              </h2>
              
              <p className="text-primary-foreground/80 text-lg max-w-2xl mb-10">
                Join 500+ teams already using QA Pro to ship better products faster. 
                No credit card required for your 14-day free trial.
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button 
                  size="xl" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated font-semibold"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="xl"
                  className="text-primary-foreground hover:bg-primary-foreground/10 border-2 border-primary-foreground/30"
                >
                  Schedule a Demo
                </Button>
              </div>
              
              <p className="text-primary-foreground/60 text-sm mt-8">
                No credit card required • Free 14-day trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

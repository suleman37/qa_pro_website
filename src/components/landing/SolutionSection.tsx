import { CheckCircle2, Sparkles } from "lucide-react";

const solutions = [
  "Centralized test management with real-time collaboration",
  "Role-based dashboards tailored to each team member",
  "Automated reporting and progress tracking",
  "Seamless integration with your existing dev tools",
  "Enterprise-grade security and scalability"
];

const SolutionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <div>
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              The Solution
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              QA Pro Makes Quality{" "}
              <span className="text-gradient">Simple & Scalable</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A unified platform that brings clarity to your QA processes, empowers every team member with the right tools, and scales with your growing needs.
            </p>

            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-8 shadow-elevated">
              <div className="space-y-6">
                {/* Stats cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-primary">98%</p>
                    <p className="text-sm text-muted-foreground mt-1">Test Coverage</p>
                  </div>
                  <div className="bg-accent/5 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-accent">60%</p>
                    <p className="text-sm text-muted-foreground mt-1">Time Saved</p>
                  </div>
                </div>
                
                {/* Progress bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Sprint Progress</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-[85%] gradient-cta rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Bug Resolution</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-[92%] gradient-accent rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Team avatars */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 border-2 border-card flex items-center justify-center text-xs text-primary-foreground font-medium"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">+12 team members active</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

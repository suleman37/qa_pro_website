import { Building2, Users, Settings2, LineChart } from "lucide-react";

const steps = [
  {
    icon: Building2,
    step: "01",
    title: "Create Your Workspace",
    description: "Set up your organization in seconds. Customize settings to match your workflow."
  },
  {
    icon: Users,
    step: "02",
    title: "Invite & Assign Roles",
    description: "Add team members and assign appropriate roles with predefined permissions."
  },
  {
    icon: Settings2,
    step: "03",
    title: "Manage QA Processes",
    description: "Create test plans, execute tests, and track bugs with powerful tools."
  },
  {
    icon: LineChart,
    step: "04",
    title: "Track & Improve",
    description: "Monitor performance metrics and continuously improve your QA efficiency."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Get Started in{" "}
            <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From signup to streamlined QA in minutes. No complex setup required.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="relative"
              >
                {/* Step card */}
                <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 text-center group hover:-translate-y-1">
                  {/* Step number */}
                  <div className="relative z-10 mx-auto mb-6">
                    <div className="w-16 h-16 rounded-2xl gradient-cta flex items-center justify-center shadow-card group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-soft">
                      {step.step}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

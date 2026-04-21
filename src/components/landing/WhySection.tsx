import { Sparkles, Shield, TrendingUp, Users } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Simple",
    description: "Intuitive interface that your team will actually enjoy using. No training manual required.",
    stat: "5 min",
    statLabel: "average onboarding"
  },
  {
    icon: Shield,
    title: "Secure",
    description: "SOC 2 Type II compliant with enterprise-grade encryption and access controls.",
    stat: "99.9%",
    statLabel: "uptime SLA"
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    description: "From 5-person startups to 5000+ enterprises. Grows seamlessly with your needs.",
    stat: "10x",
    statLabel: "team capacity"
  },
  {
    icon: Users,
    title: "Team-First",
    description: "Built for collaboration. Every feature designed with team dynamics in mind.",
    stat: "500+",
    statLabel: "happy teams"
  }
];

const WhySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why QA Pro</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Built for Teams That{" "}
            <span className="text-gradient">Value Quality</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We've obsessed over every detail so you can focus on what matters: shipping great products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-accent/30 h-full relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{reason.description}</p>
                  
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-3xl font-bold text-gradient">{reason.stat}</p>
                    <p className="text-sm text-muted-foreground">{reason.statLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

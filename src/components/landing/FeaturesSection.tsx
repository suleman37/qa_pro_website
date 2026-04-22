import { Lock, BarChart, Target, Server, Zap, UserCheck } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Role-Based Access Control",
    description: "Granular permissions ensure each user sees only what they need. Secure, compliant, and efficient."
  },
  {
    icon: BarChart,
    title: "Real-Time Reporting",
    description: "Live dashboards with actionable insights. Track progress, identify bottlenecks, and make data-driven decisions."
  },
  {
    icon: Target,
    title: "Centralized QA Management",
    description: "All your test cases, results, and documentation in one place. No more scattered spreadsheets."
  },
  {
    icon: Server,
    title: "Secure & Scalable",
    description: "Enterprise-grade security with SOC 2 compliance. Scales from startups to Fortune 500 companies."
  },
  {
    icon: Zap,
    title: "Easy Onboarding",
    description: "Get your team up and running in minutes, not days. Intuitive interface with guided setup."
  },
  {
    icon: UserCheck,
    title: "Team Collaboration",
    description: "Built-in communication tools, @mentions, and notifications keep everyone aligned and informed."
  }
];

const achievements = [
  { value: "98%", label: "Test Coverage" },
  { value: "60%", label: "Time Saved" },
  { value: "240+", label: "Automation Runs" }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Key Features & Achievements</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Key Features & Achievements
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to streamline your QA workflows and boost team productivity.
          </p>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.label}
              className="rounded-2xl border border-border/50 bg-card/80 p-6 shadow-soft"
            >
              <p className="text-3xl font-bold text-primary">{achievement.value}</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{achievement.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 hover:border-primary/20 h-full">
                <div className="w-14 h-14 rounded-2xl gradient-cta flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

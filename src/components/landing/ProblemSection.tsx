import { AlertTriangle, Eye, Users, Clock } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Manual Tracking Chaos",
    description: "Spreadsheets and emails lead to missed bugs and delayed releases."
  },
  {
    icon: Eye,
    title: "Poor Visibility",
    description: "No clear overview of testing progress, bottlenecks, or team performance."
  },
  {
    icon: Users,
    title: "Role Confusion",
    description: "Unclear responsibilities cause duplicate work and gaps in coverage."
  },
  {
    icon: Clock,
    title: "Delayed Feedback",
    description: "Slow communication between QA and dev teams impacts sprint velocity."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Challenge</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            QA Shouldn't Be This Hard
          </h2>
          <p className="text-lg text-muted-foreground">
            Growing teams struggle with outdated QA processes that slow down delivery and compromise quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={problem.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 hover:border-destructive/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

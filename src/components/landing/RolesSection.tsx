import { Shield, BarChart3, Users, Settings, Crown } from "lucide-react";

const roles = [
  {
    icon: Crown,
    title: "Admin",
    description: "Full system control, user management, and organizational settings",
    color: "primary"
  },
  {
    icon: Users,
    title: "Project Manager",
    description: "Project oversight, team assignment, and progress monitoring",
    color: "accent"
  },
  {
    icon: BarChart3,
    title: "QA Lead",
    description: "Test planning, resource allocation, and quality metrics",
    color: "primary"
  },
  {
    icon: Shield,
    title: "QA Engineer",
    description: "Test execution, bug reporting, and case management",
    color: "accent"
  },
  {
    icon: Settings,
    title: "Developer",
    description: "Bug fixes, test feedback, and integration workflows",
    color: "primary"
  }
];

const RolesSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Role-Based Access</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            5 Unique Dashboards for{" "}
            <span className="text-gradient">Every Role</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Each team member gets a personalized dashboard with the tools, permissions, and insights they need to excel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {roles.map((role, index) => (
            <div 
              key={role.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/30 text-center relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${role.color === 'primary' ? 'from-primary/5' : 'from-accent/5'} to-transparent`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${role.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <role.icon className={`w-7 h-7 ${role.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{role.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{role.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual dashboard preview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 bg-secondary/50 rounded-xl p-4 space-y-3">
                <div className="h-4 bg-primary/20 rounded w-1/3" />
                <div className="h-24 bg-primary/10 rounded-lg" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-12 bg-accent/10 rounded" />
                  <div className="h-12 bg-accent/10 rounded" />
                  <div className="h-12 bg-accent/10 rounded" />
                </div>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
                <div className="h-4 bg-primary/20 rounded w-2/3" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 bg-primary/10 rounded" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;

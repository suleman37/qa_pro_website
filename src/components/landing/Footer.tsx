import { Shield } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "Changelog", "Documentation"],
    Company: ["About", "Blog", "Careers", "Press", "Partners"],
    Resources: ["Help Center", "Community", "Webinars", "Templates", "API"],
    Legal: ["Privacy", "Terms", "Security", "Cookies", "GDPR"]
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-card to-accent/5 text-foreground border-t border-border">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute -top-16 left-10 w-64 h-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-20 right-10 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="container relative z-10 py-16">
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-cta flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">Flowchx</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Digitize quality assurance with live production data, critical control point monitoring, and dashboards built for faster decisions.
            </p>
            <div className="flex items-center gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card/80 border border-border/60 flex items-center justify-center hover:border-foreground/50 hover:shadow-card transition-all text-sm font-medium text-foreground"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold mb-4 text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Flowchx. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

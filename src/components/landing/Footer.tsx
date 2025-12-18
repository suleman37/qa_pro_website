import { Shield } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "Changelog", "Documentation"],
    Company: ["About", "Blog", "Careers", "Press", "Partners"],
    Resources: ["Help Center", "Community", "Webinars", "Templates", "API"],
    Legal: ["Privacy", "Terms", "Security", "Cookies", "GDPR"]
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-cta flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-background">QA Pro</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-6 max-w-xs">
              Smart Quality Assurance platform for modern teams. Simplify workflows, boost productivity, ship better products.
            </p>
            <div className="flex items-center gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors text-sm font-medium"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold mb-4 text-background">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-background/60 text-sm hover:text-background transition-colors"
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
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">
            © 2024 QA Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-background/40 text-sm flex items-center gap-2">
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

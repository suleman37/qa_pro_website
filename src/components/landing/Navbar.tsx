import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import ThemeToggle from "./ThemeToggle";
import { Shield, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Industries", to: "/industries" },
    { label: "About", to: "/about" },
    { label: "Contact Us", to: "/contact-us" },
    { label: "Consulting", to: "/consulting" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-2xl shadow-soft border-b border-border/70"
          : "bg-background/40 backdrop-blur-xl"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-cta flex items-center justify-center shadow-soft">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">QA Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                activeClassName="text-foreground"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="hero" size="sm">
              <Link to="/free-demo">Get a free demo</Link>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-xl bg-card border border-border/60 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">Appearance</p>
                  <p className="text-xs text-muted-foreground">Light / Dark</p>
                </div>
                <ThemeToggle />
              </div>
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  activeClassName="text-foreground"
                >
                  {link.label}
                </NavLink>
              ))}
              <Button asChild variant="hero" className="mt-2 w-full">
                <Link to="/free-demo">Get a free demo</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

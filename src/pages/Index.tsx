import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import RolesSection from "@/components/landing/RolesSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhySection from "@/components/landing/WhySection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora blur-3xl opacity-70 dark:opacity-60" />
        <div className="pattern-grid mix-blend-soft-light dark:mix-blend-screen" />
      </div>
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <RolesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WhySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

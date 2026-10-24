import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { SolutionSpectrum } from "@/components/SolutionSpectrum";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    document.title = "Arissoft Solutions | IT Solutions & Software Development in Hyderabad";
  }, []);
  return <div className="min-h-screen bg-white antialiased">
      <Navigation />
      <Hero />
      <ExperienceSection />
      <IndustriesSection />
      <SolutionSpectrum />
      <Services />
      <Footer />
      <ScrollToTopButton />
    </div>;
};
export default Index;
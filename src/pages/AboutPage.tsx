import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import aboutBg from "@/assets/about-bg.jpg";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutPage = () => {
  const aboutAnimation = useScrollAnimation();
  
  useEffect(() => {
    document.title = "About Us | Arissoft Solutions - IT Company in Hyderabad";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <PageHeader 
          title="About Arissoft Solutions"
          subtitle="Leading IT solutions provider dedicated to digital transformation and innovation"
          breadcrumb="About Us"
          backgroundImage={aboutBg}
        />
        <div 
          ref={aboutAnimation.ref}
          className={`transition-all duration-1000 ${
            aboutAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <About />
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AboutPage;

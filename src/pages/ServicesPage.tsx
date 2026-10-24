import { Navigation } from "@/components/Navigation";
import { ServicesDetailed } from "@/components/ServicesDetailed";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import servicesBg from "@/assets/services-bg.jpg";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesPage = () => {
  const servicesAnimation = useScrollAnimation();
  
  useEffect(() => {
    document.title = "Our Services | Arissoft Solutions - Web Development & Cloud Services";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <PageHeader 
          title="Our Services"
          subtitle="Comprehensive IT solutions tailored to your business needs"
          breadcrumb="Services"
          backgroundImage={servicesBg}
        />
        <div 
          ref={servicesAnimation.ref}
          className={`transition-all duration-1000 ${
            servicesAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <ServicesDetailed />
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ServicesPage;

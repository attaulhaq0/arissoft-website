import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import contactBg from "@/assets/contact-bg.jpg";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactPage = () => {
  const contactAnimation = useScrollAnimation();
  
  useEffect(() => {
    document.title = "Contact Us | Arissoft Solutions - Get in Touch";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <PageHeader 
          title="Get in Touch"
          subtitle="Let's discuss how we can help transform your business with innovative IT solutions"
          breadcrumb="Contact Us"
          backgroundImage={contactBg}
        />
        <div 
          ref={contactAnimation.ref}
          className={`transition-all duration-1000 ${
            contactAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <Contact />
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ContactPage;

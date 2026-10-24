import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import partnershipBg from "@/assets/partnership-bg.jpg";

export const CTASection = () => {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={partnershipBg} 
              alt="Business partnership" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
          </div>
          
          <div className="relative z-10 p-8 lg:p-12 text-center">
            <h3 
              className="font-lato mb-3 tracking-tight text-xl sm:text-2xl lg:text-[32px]"
              style={{ 
                fontWeight: 600,
                color: 'rgb(255, 255, 255)',
                lineHeight: '1.3',
              }}
            >
              Your Success is Our Mission
            </h3>
            <p className="text-secondary-foreground/80 text-sm lg:text-base leading-relaxed max-w-xl mx-auto mb-6">
              Building lasting partnerships through innovation, dedication, and exceptional results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  size="lg" 
                  className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Card } from "@/components/ui/card";
import { Building2, Users, Award, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import statClientsSolid from "@/assets/stat-clients-solid.jpg";
import statProjectsSolid from "@/assets/stat-projects-solid.jpg";
import statSatisfactionSolid from "@/assets/stat-satisfaction-solid.jpg";
import statYearsSolid from "@/assets/stat-years-solid.jpg";

export const Clients = () => {
  const stats = [
    { label: "Active Clients", value: "50+", icon: Users, image: statClientsSolid },
    { label: "Projects Completed", value: "100+", icon: Award, image: statProjectsSolid },
    { label: "Client Satisfaction", value: "100%", icon: Building2, image: statSatisfactionSolid },
    { label: "Years Active", value: "2+", icon: Calendar, image: statYearsSolid },
  ];

  return (
    <section id="clients" className="py-10 lg:py-12 bg-accent/20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 lg:mb-10">
          <h2 
            className="font-lato mb-3 tracking-tight text-2xl sm:text-3xl lg:text-[40px]"
            style={{ 
              fontWeight: 600,
              color: 'rgb(45, 45, 67)',
              lineHeight: '1.3',
            }}
          >
            Trusted by <span className="text-primary">Growing Businesses</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Delivering exceptional IT solutions across industries
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {stats.map((stat, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                <Card
                  className="relative h-56 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={stat.image} 
                      alt={stat.label} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-secondary/20" />
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col items-center justify-end p-5 text-center">
                    <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center mb-2 shadow-lg">
                      <stat.icon className="text-primary-foreground" size={22} />
                    </div>
                    <div className="text-3xl font-bold text-primary-foreground mb-1 tracking-tight">{stat.value}</div>
                    <div className="text-primary-foreground/80 font-medium text-xs uppercase tracking-wide">{stat.label}</div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
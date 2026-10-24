import { ParticlesBackground } from "./ParticlesBackground";
import { useEffect } from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  backgroundImage: string;
}

// Preload image immediately
const preloadImage = (src: string) => {
  const img = new Image();
  img.fetchPriority = "high";
  img.src = src;
};

export const PageHeader = ({
  title,
  subtitle,
  breadcrumb,
  backgroundImage
}: PageHeaderProps) => {
  // Preload background image on mount
  useEffect(() => {
    preloadImage(backgroundImage);
  }, [backgroundImage]);

  return <div className="relative h-[250px] sm:h-[300px] lg:h-[380px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Priority Loading */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${backgroundImage})`
    }}>
        <img 
          src={backgroundImage} 
          alt="" 
          className="hidden" 
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/85 to-secondary/95" />
      </div>
      
      {/* Particles */}
      <div className="absolute inset-0 opacity-40">
        <ParticlesBackground />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h1 
          className="font-lato text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-3 sm:mb-4 animate-fade-in leading-tight px-2" 
          style={{
            animationDelay: '0.1s',
            color: 'rgb(255, 255, 255)',
          }}
        >
          {title}
        </h1>
        <p 
          className="font-lato text-base lg:text-lg text-white/80 max-w-2xl mx-auto animate-fade-in leading-relaxed" 
          style={{
            animationDelay: '0.2s'
          }}
        >
          {subtitle}
        </p>
      </div>
      
      
      {/* Bottom gradient fade for seamless transition */}
      
    </div>;
};
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import galleryMobile from "@/assets/gallery-mobile.jpg";
import gallerySap from "@/assets/gallery-sap.jpg";
import galleryInnovation from "@/assets/gallery-innovation.jpg";
import galleryIot from "@/assets/gallery-iot.jpg";

export const SolutionSpectrum = () => {
  const galleryImages = [
    { src: galleryMobile, alt: "Mobile Development" },
    { src: gallerySap, alt: "SAP Solutions" },
    { src: galleryInnovation, alt: "Innovation" },
    { src: galleryIot, alt: "IoT Solutions" },
  ];

  // Duplicate for seamless loop
  const allImages = [...galleryImages, ...galleryImages];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // When we reach the end of original set, reset seamlessly
        if (next >= galleryImages.length) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(0);
            setTimeout(() => {
              setIsTransitioning(true);
            }, 50);
          }, 800);
          return next;
        }
        return next;
      });
    }, 3500); // Slower speed - 3.5 seconds per slide

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Each image takes 12.5% of the 200% width container (1/8), scroll one at a time
  const translateX = currentIndex * 12.5;

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-10 sm:mb-16 lg:mb-20 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Large faded "C" background letter */}
          <div className="absolute -left-8 -top-16 text-[200px] font-bold text-primary/5 leading-none pointer-events-none select-none">
            C
          </div>
          
          <span className="relative inline-block font-semibold text-sm uppercase tracking-wider z-10">
            <span className="relative z-10" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>OUR SOLUTION SPECTRUM</span>
            {/* Highlighter underline effect - matching hero section */}
            <motion.span 
              className="absolute left-0 right-0 bottom-0 h-[0.3em] -z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: 0.2,
                ease: "easeOut"
              }}
              style={{
                backgroundColor: 'rgba(0, 230, 64, 0.35)',
                borderRadius: '2px',
                transformOrigin: 'left',
              }}
            />
          </span>
          <h2 
            className="relative z-10 font-lato max-w-4xl text-xl sm:text-2xl lg:text-[40px]"
            style={{ 
              lineHeight: '1.4', 
              marginTop: '20px', 
              fontWeight: 600, 
              color: 'rgb(45, 45, 67)', 
              padding: '0px' 
            }}
          >
            Create a culture of innovation.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Design new ecosystems, new business models
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            and new revenue streams through providing
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            a richer consumer experience
          </h2>
        </motion.div>
      </div>

      {/* Portfolio Slider - Desktop */}
      <div className="container mx-auto px-6 lg:px-8 mt-8 hidden md:block">
        <div className="overflow-hidden">
          <div 
            className="flex"
            style={{ 
              transform: `translateX(-${translateX}%)`,
              transition: isTransitioning ? '1.4s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              width: '200%',
            }}
          >
            {allImages.map((image, index) => (
              <div 
                key={`${image.alt}-${index}`}
                className="flex-shrink-0 px-2"
                style={{ width: '12.5%' }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-[220px] object-cover transition-all duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Slider - Single image at a time with swipe */}
      <div className="container mx-auto px-4 mt-8 md:hidden">
        <div className="overflow-hidden">
          <div 
            className="flex"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? '0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            }}
          >
            {allImages.map((image, index) => (
              <div 
                key={`mobile-${image.alt}-${index}`}
                className="flex-shrink-0 w-full px-2"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile dots indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex % galleryImages.length === index
                  ? "bg-primary w-6"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

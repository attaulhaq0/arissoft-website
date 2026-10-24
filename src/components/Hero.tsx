import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroDigitalGlobe from "@/assets/hero-digital-globe.jpg";
import heroBusinessWorkspace from "@/assets/hero-business-workspace.jpg";
import heroWeb from "@/assets/hero-web.jpg";
import navWaveBg from "@/assets/nav-wave-bg.png";

// Preload all hero images immediately
const heroImages = [heroDigitalGlobe, heroBusinessWorkspace, heroWeb];
heroImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

interface Slide {
  subtitle: string;
  titleLines: string[];
  image: string;
}

export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displaySlide, setDisplaySlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cylinderComplete, setCylinderComplete] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload hero images and show loader until ready
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = heroImages.length;
    
    heroImages.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
  }, []);
  

  const slides: Slide[] = [
    {
      subtitle: "",
      titleLines: [
        "When It Comes To",
        "Digital Transformation,",
        "We Offer You",
        'The Real "Deal"',
      ],
      image: heroDigitalGlobe,
    },
    {
      subtitle: "We're Awesome",
      titleLines: [
        "Digital Agency",
        "That Help You To",
        "Go Ahead",
      ],
      image: heroBusinessWorkspace,
    },
    {
      subtitle: "Expert Solutions",
      titleLines: [
        "Transform Your",
        "Business With",
        "Technology",
      ],
      image: heroWeb,
    },
  ];

  const SLIDE_DURATION = 6000;
  const ANIMATION_DURATION = 1200; // Slower transitions

  const changeSlide = useCallback(
    (newIndex: number) => {
      if (isAnimating || newIndex === activeSlide) return;
      setIsAnimating(true);
      setActiveSlide(newIndex);
      setTimeout(() => {
        setDisplaySlide(newIndex);
      }, ANIMATION_DURATION / 3);
      setTimeout(() => {
        setIsAnimating(false);
      }, ANIMATION_DURATION);
    },
    [isAnimating, activeSlide]
  );

  const nextSlide = useCallback(() => {
    const next = (activeSlide + 1) % slides.length;
    changeSlide(next);
  }, [activeSlide, slides.length, changeSlide]);

  const prevSlide = useCallback(() => {
    const prev = (activeSlide - 1 + slides.length) % slides.length;
    changeSlide(prev);
  }, [activeSlide, slides.length, changeSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [nextSlide, isAnimating]);

  // Trigger cylinder animation completion - content reveals after cylinders animate
  useEffect(() => {
    const timer = setTimeout(() => {
      setCylinderComplete(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  // Show preloader while images are loading
  if (!imagesLoaded) {
    return (
      <section id="home" className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated loader */}
          <div className="relative w-16 h-16">
            <motion.div
              className="absolute inset-0 border-4 border-primary/20 rounded-full"
            />
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <motion.p 
            className="text-muted-foreground text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading...
          </motion.p>
        </motion.div>
      </section>
    );
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wave Background Image - Behind nav bar to hero headline - HIDDEN ON MOBILE */}
      <motion.div
        className="absolute top-0 left-0 w-[70%] h-[500px] pointer-events-none hidden lg:block"
        style={{ zIndex: 0 }}
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isAnimating ? [0, -30, 0] : 0,
          opacity: isAnimating ? [1, 0.7, 1] : 1,
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <motion.img
          src={navWaveBg}
          alt=""
          className="w-full h-full object-cover object-left-top"
          animate={{
            scale: isAnimating ? [1, 1.03, 1] : 1,
          }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </motion.div>

      {/* Grey Image Cylinder Shapes - Top Right - HIDDEN ON MOBILE */}
      <motion.div
        className="absolute pointer-events-none overflow-hidden hidden lg:block"
        style={{ right: '-40px', top: '-40px', zIndex: 2 }}
      >
        {/* First Cylinder - with image texture */}
        <motion.div
          className="absolute overflow-hidden"
          style={{
            width: '400px',
            height: '140px',
            borderRadius: '70px',
            transformOrigin: 'right center',
            rotate: '-18deg',
          }}
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
          animate={{ 
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut" 
          }}
        >
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, rgba(180, 185, 195, 0.4) 0%, rgba(200, 205, 215, 0.2) 50%, rgba(160, 170, 180, 0.35) 100%)',
              backdropFilter: 'blur(4px)',
            }}
          />
        </motion.div>

        {/* Second Cylinder - with image texture */}
        <motion.div
          className="absolute overflow-hidden"
          style={{
            width: '340px',
            height: '115px',
            borderRadius: '58px',
            top: '100px',
            left: '-40px',
            transformOrigin: 'right center',
            rotate: '-10deg',
          }}
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
          animate={{ 
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1
          }}
          transition={{ 
            duration: 0.8, 
            delay: 0.15,
            ease: "easeOut" 
          }}
        >
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(145deg, rgba(170, 175, 190, 0.35) 0%, rgba(190, 195, 210, 0.18) 50%, rgba(150, 160, 175, 0.3) 100%)',
              backdropFilter: 'blur(3px)',
            }}
          />
        </motion.div>

        {/* Third Cylinder - with image texture */}
        <motion.div
          className="absolute overflow-hidden"
          style={{
            width: '280px',
            height: '90px',
            borderRadius: '45px',
            top: '195px',
            left: '-100px',
            transformOrigin: 'right center',
            rotate: '-25deg',
          }}
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
          animate={{ 
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1
          }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            ease: "easeOut" 
          }}
        >
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(155deg, rgba(160, 168, 185, 0.3) 0%, rgba(180, 188, 205, 0.15) 50%, rgba(145, 155, 170, 0.28) 100%)',
              backdropFilter: 'blur(2px)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Top Green Blob - behind navigation, fades with slide transitions - HIDDEN ON MOBILE */}
      <motion.div 
        className="absolute top-0 right-0 w-[80%] lg:w-[70%] h-[400px] overflow-visible pointer-events-none hidden lg:block"
        style={{ zIndex: 0 }}
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ 
          opacity: cylinderComplete ? (isAnimating ? 0 : 1) : 0, 
          y: 0,
          scale: cylinderComplete ? (isAnimating ? 0.95 : 1) : 0.9
        }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.svg
          viewBox="0 0 800 500"
          className="absolute -top-32 -right-32 w-full h-auto"
          preserveAspectRatio="xMaxYMin slice"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M400,-80 Q700,-20 780,150 Q860,320 750,480 Q640,640 400,580 Q160,520 100,350 Q40,180 180,50 Q320,-60 400,-80 Z"
            fill="rgba(0, 230, 64, 0.18)"
          />
        </motion.svg>
      </motion.div>

      {/* Floating Animated Decorations - appear after cylinder animation */}
      <AnimatePresence>
        {cylinderComplete && (
          <>
            {/* Green X - top center area - HIDDEN ON MOBILE */}
            <motion.div 
              className="absolute top-32 left-[42%] lg:left-[40%] z-10 pointer-events-none hidden lg:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: isAnimating ? 0 : 1,
                scale: isAnimating ? 0.5 : 1,
                y: [0, -12, 0],
                rotate: [0, 15, 0]
              }}
              transition={{ 
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
            >
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
                <line x1="8" y1="8" x2="37" y2="37" stroke="#00E640" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="37" y1="8" x2="8" y2="37" stroke="#00E640" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* Purple Diamond - bottom left area */}
            <motion.div 
              className="absolute bottom-40 left-[35%] z-10 pointer-events-none hidden lg:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: isAnimating ? 0 : 1,
                scale: isAnimating ? 0.5 : 1,
                y: [0, 15, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                opacity: { duration: 0.4, delay: 0.1 },
                scale: { duration: 0.4, delay: 0.1 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.3 },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.3 }
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect
                  x="6"
                  y="6"
                  width="20"
                  height="20"
                  stroke="#A855F7"
                  strokeWidth="2"
                  fill="none"
                  transform="rotate(45 16 16)"
                />
              </svg>
            </motion.div>

            {/* Yellow/Orange Circle - bottom center-right */}
            <motion.div 
              className="absolute bottom-32 right-[28%] z-10 pointer-events-none hidden lg:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: isAnimating ? 0 : 1,
                scale: isAnimating ? 0.5 : [1, 1.08, 1],
                y: [0, -10, 0]
              }}
              transition={{ 
                opacity: { duration: 0.4, delay: 0.2 },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.9 }
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle
                  cx="14"
                  cy="14"
                  r="10"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </motion.div>

          </>
        )}
      </AnimatePresence>


      {/* Main Content Container */}
      <div className="container mx-auto px-6 sm:px-6 lg:px-20 relative z-10 pt-28 pb-12 lg:pt-0 lg:pb-0 lg:h-screen flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Content - Typography - Centered on mobile */}
          <div className="space-y-4 sm:space-y-4 max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
            {/* Pre-title / Subtitle */}
            <AnimatePresence>
              {cylinderComplete && slides[displaySlide].subtitle && (
                <motion.div
                  key={`subtitle-${displaySlide}`}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: isAnimating ? 0 : 1, y: isAnimating ? -15 : 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                >
                  <span 
                    className="text-base lg:text-lg tracking-wide"
                    style={{ color: '#888888' }}
                  >
                    {slides[displaySlide].subtitle}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Headline with Highlighter Effect on EVERY line */}
            <AnimatePresence>
              {cylinderComplete && (
                <div className="space-y-2 lg:space-y-3">
                  {slides[displaySlide].titleLines.map((line, lineIdx) => (
                    <motion.h1
                      key={`${displaySlide}-${lineIdx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: isAnimating ? 0 : 1, 
                        y: isAnimating ? 20 : 0 
                      }}
                      transition={{ 
                        duration: 1, 
                        delay: lineIdx * 0.1,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="font-lato tracking-tight block text-[28px] sm:text-4xl lg:text-4xl xl:text-[58px]"
                      style={{
                        lineHeight: '1.2',
                        fontWeight: 600,
                        color: 'rgb(45, 45, 67)',
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      <span className="relative inline-block">
                        <span className="relative z-10">{line}</span>
                        {/* Highlighter marker effect - on EVERY line */}
                        <motion.span 
                          className="absolute left-0 bottom-0 h-[0.15em] -z-0"
                          initial={{ scaleX: 0, width: 0 }}
                          animate={{ 
                            scaleX: isAnimating ? 0 : 1,
                            width: isAnimating ? 0 : '100%'
                          }}
                          transition={{ 
                            duration: 0.4, 
                            delay: lineIdx * 0.1 + 0.2,
                            ease: "easeOut"
                          }}
                          style={{
                            backgroundColor: 'rgba(0, 230, 64, 0.5)',
                            borderRadius: '1px',
                            transformOrigin: 'left',
                          }}
                        />
                      </span>
                    </motion.h1>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column - Image with Organic Blob Shape - HIDDEN ON MOBILE */}
          <AnimatePresence>
            {cylinderComplete && (
              <motion.div 
                className="relative h-[520px] order-1 lg:order-2 hidden lg:block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >

                {/* Image Container with Organic Blob Mask + Breathing Animation */}
                <motion.div 
                  className="absolute inset-0"
                  animate={{ scale: [1, 1.015, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {slides.map((slide, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: index === activeSlide ? 1 : 0,
                        zIndex: index === activeSlide ? 2 : 1,
                      }}
                      transition={{ 
                        duration: 1.2, 
                        ease: [0.4, 0, 0.2, 1]
                      }}
                    >
                      <img
                        src={slide.image}
                        alt="Digital transformation workspace"
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows - minimal, no background, at corners */}
      <motion.button
        onClick={prevSlide}
        disabled={isAnimating}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 text-primary hover:text-primary/80 transition-colors disabled:opacity-50"
        style={{ transformOrigin: 'center center' }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} strokeWidth={2} />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        disabled={isAnimating}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 text-primary hover:text-primary/80 transition-colors disabled:opacity-50"
        style={{ transformOrigin: 'center center' }}
        aria-label="Next slide"
      >
        <ChevronRight size={40} strokeWidth={2} />
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            disabled={isAnimating}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === activeSlide
                ? "bg-primary scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

import { useState, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

// Global image cache - images start loading immediately when imported
const imageCache = new Map<string, boolean>();
const loadingImages = new Map<string, Promise<void>>();

const loadImage = (src: string): Promise<void> => {
  if (imageCache.get(src)) return Promise.resolve();
  
  if (loadingImages.has(src)) {
    return loadingImages.get(src)!;
  }
  
  const promise = new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => {
      imageCache.set(src, true);
      loadingImages.delete(src);
      resolve();
    };
    img.onerror = () => {
      loadingImages.delete(src);
      resolve();
    };
    img.src = src;
  });
  
  loadingImages.set(src, promise);
  return promise;
};

export const LazyImage = ({ src, alt, className = "" }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(imageCache.get(src) || false);

  // Start loading immediately
  useEffect(() => {
    if (!isLoaded) {
      loadImage(src).then(() => setIsLoaded(true));
    }
  }, [src, isLoaded]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Shimmer loading skeleton */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] animate-shimmer transition-opacity duration-200 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => {
          imageCache.set(src, true);
          setIsLoaded(true);
        }}
        loading="eager"
        decoding="sync"
        fetchPriority="high"
      />
    </div>
  );
};

// Preload multiple images at once
export const preloadImages = (srcs: string[]) => {
  return Promise.all(srcs.map(loadImage));
};

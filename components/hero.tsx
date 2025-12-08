'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  '/images/hero/car1.jpg',
  '/images/hero/car2.jpg',
  '/images/hero/team1.jpg',
  '/images/hero/team2.jpg',
  '/images/hero/event1.jpg',
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 15 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi) {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Fixed Background Image */}
      <div className="fixed top-0 left-0 w-full pointer-events-none" style={{
        backgroundImage: `url(/bg.png)`,
        backgroundAttachment: 'fixed',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        zIndex: 0,
        height: '100vh',
      }}></div>

      {/* Carousel Background */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background z-10"></div>
        <div className="embla h-full w-full" ref={emblaRef}>
          <div className="embla__container h-full">
            {carouselImages.map((src, index) => (
              <div key={index} className="embla__slide h-full flex-[0_0_100%] min-w-0">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
          TEAM ETA
        </h1>
        <p className="text-xl sm:text-2xl text-primary font-semibold mb-6 drop-shadow-md tracking-wider">
          #madovermiles
        </p>
        <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-md">
          Team ETA, a passionate group of undergraduate engineers from K. J. Somaiya School of Engineering, proudly represented India at the Shell Eco-Marathon (SEM) 2024, held at the Mandalika International Street Circuit, Lombok, Indonesia. At SEM 2024, Team ETA competed in the Prototype – Gasoline category, showcasing a highly efficient vehicle with optimized aerodynamics, structural design, and drivetrain performance.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/our-garage">
            <Button
              className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
              size="lg"
            >
              Our Garage
            </Button>
          </Link>
          <Link href="/fuel-our-mission">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-bold shadow-lg backdrop-blur-sm"
              size="lg"
            >
              Partner With Us
            </Button>
          </Link>
        </div>

        {/* Carousel Navigation */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button 
            onClick={scrollPrev}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === selectedIndex ? 'bg-teal-400 w-8' : 'bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={scrollNext}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Add these styles for the carousel
const styles = `
  .embla {
    overflow: hidden;
    height: 100%;
  }
  .embla__container {
    display: flex;
    height: 100%;
  }
  .embla__slide {
    position: relative;
    flex: 0 0 100%;
    min-width: 0;
  }
`;

// Add the styles to the document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}

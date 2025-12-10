'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  '/bg.png',
  '/triton.png',
  '/arya.png',
  '/yugant.png',
  '/j14.png',
  '/jugaad.png',
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
    <section className="relative w-full overflow-hidden">
      {/* Carousel */}
      <div
        className="embla w-full aspect-[16/9] md:aspect-[16/9] lg:aspect-auto lg:h-screen relative overflow-hidden"
        ref={emblaRef}
      >
        <div className="embla__container flex h-full">
          {carouselImages.map((src, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 h-full">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <div className="max-w-4xl mx-auto text-center px-4 pointer-events-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
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
                className="border-primary text-primary hover:bg-gray-100 font-bold shadow-lg"
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
              className="p-2 rounded-full bg-white hover:bg-white text-black transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === selectedIndex ? 'bg-teal-400 w-8' : 'bg-white'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="p-2 rounded-full bg-white hover:bg-white text-black transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

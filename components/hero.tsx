'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';

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
<<<<<<< HEAD
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
=======
    // Note: removed min-h-screen so mobile doesn't force full viewport height
    <section className="pt-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* 
          Important: The wrapper controls aspect ratio.
          On small screens we force 16:9. On larger screens we let it expand to a nice height.
        */}
        <div className="w-full max-w-[2000px]">
          <div
            // aspect-[16/9] keeps mobile height proportional
            // md:aspect-[21/9] or md:h-[60vh] can be used to change sizes on larger screens
            className="embla w-full aspect-[16/9] md:aspect-[21/9] lg:h-[80vh] relative overflow-hidden"
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
                      backgroundSize: 'cover', // ensures cropping without distortion
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </div>
              ))}
            </div>
>>>>>>> 4d2ad126bb83bfa97a9cb8252ebe22a9474e8a6c
          </div>

          {/* dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background z-10 pointer-events-none" />
        </div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
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
      </div>
    </section>
  );
}
<<<<<<< HEAD

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
=======
>>>>>>> 4d2ad126bb83bfa97a9cb8252ebe22a9474e8a6c

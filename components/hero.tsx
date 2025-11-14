import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="min-h-screen bg-white pt-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-1/4 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
          TEAM ETA
        </h1>
        <p className="text-xl sm:text-2xl text-teal-600 font-semibold mb-6">
          #madovermiles
        </p>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Team ETA, a passionate group of undergraduate engineers from K. J. Somaiya School of Engineering, proudly represented India at the Shell Eco-Marathon (SEM) 2024, held at the Mandalika International Street Circuit, Lombok, Indonesia. At SEM 2024, Team ETA competed in the Prototype – Gasoline category, showcasing a highly efficient vehicle with optimized aerodynamics, structural design, and drivetrain performance.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/our-garage">
            <Button
              className="bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
              size="lg"
            >
              Our Garage
            </Button>
          </Link>
          <Link href="/fuel-our-mission">
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-600/10 font-semibold"
              size="lg"
            >
              Partner With Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

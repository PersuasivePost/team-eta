'use client'

import { useState } from 'react'
import Footer from '@/components/footer'

interface CarData {
  year: number
  name: string
  description: string
}

const cars: CarData[] = [
  {
    year: 2019,
    name: 'MAHIL',
    description: 'THE UNACCOUNTABLE EFFORTS PUT ALL OVER THE YEARS BY EVERY TEAM MEMBER FINALLY PAID OFF IN 2019 WHEN WE INTRODUCED OUR BEST EVER-\'MAHIL\'. THIS PROTOTYPE SECURED THE FIRST RANK IN SHELL ECO-MARATHON, INDIA 2019 BY KNOCKING AN UNBELIEVABLE MILEAGE OF 270 KMPL. ALSO, THE FIRST PROTOTYPE WHICH COMPLETED ITS TECHNICAL INSPECTION AMONG EVERY OTHER TEAMS AND WON THE SAFETY AWARD. ALL THESE RECORDS HAVE NOW SET UP A BENCHMARK WHICH INSPIRES US TO MANUFACTURE NEW FUEL EFFICIENT VEHICLES.'
  },
  {
    year: 2017,
    name: 'TRITON',
    description: 'TEAM ETA\'S FIRST EVER CARBON FIBRE MONOCOQUE STRUCTURED BODY WAS INTRODUCED IN 2017 AND THIS PROTOTYPE WAS NAMED \'TRITON\'. THIS PERFECTLY ENGINEERED AUTOMOBILE VEHICLE BECAME THE FIRST INDIAN PROTOTYPE TO PARTICIPATE IN SHELL ECO MARATHON ASIA 2017, SINGAPORE.'
  },
  {
    year: 2015,
    name: 'ARYA',
    description: 'THE FIRST PROTOTYPE OF TEAM ETA HAVING A CARBON FIBER SHELL WHICH WAS USED TO IMPROVE ITS AERODYNAMICS, STRENGTH AND RIGIDITY. THIS PROTOTYPE HAS PARTICIPATED IN THE SHELL ECO MARATHON ASIA 2015 WHICH WAS HELD IN PHILIPPINES. IT WAS RANKED 5TH IN ASIA BY REACHING AN ASTONISHING MILEAGE OF 153 KMPL.'
  },
  {
    year: 2019,
    name: 'YUGANT',
    description: '\'Yugant\' may represent the end of gasoline-powered cars and the dawn of Eco-friendly transportation. It represents the transition to renewable energy which may stimulate development, innovation, and sustainability. It also implies longevity, durability, and the end of an era and the start of a sustainable one. From the research phase to getting YUGANT on track, every team member imagined, coordinated, and constantly battled until the perfect result was achieved.'
  },
  {
    year: 2014,
    name: 'J-14',
    description: 'The successor of the \'13 prototype J-14 with not just an improved design but with a glass fiber body shell along with the saffron -white - green aesthetic design representing the Indian tricolor was the highlight of the prototype.'
  },
  {
    year: 2013,
    name: 'JUGAD',
    description: 'JUGAAD, was the first prototype built by Team ETA. Participated in Shell Eco Marathon Asia 2013, Malaysia this sheet metal prototype was designed with sheer determination and innovation and hence named, Jugaad.'
  }
]

export default function OurGaragePage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-balance">
            INSIDE THE <span className="text-teal-600">GARAGE</span>
          </h1>
          <p className="text-xl text-gray-600">Our Fleet of Prototypes</p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {cars.map((car, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
              {/* Image Placeholder */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden border border-gray-200 hover:border-teal-600/50 transition-colors shadow-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-600 text-lg font-semibold mb-2">{car.name}</p>
                      <p className="text-teal-600 text-sm">Photo Coming Soon</p>
                    </div>
                  </div>
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl md:text-5xl font-bold text-teal-600">{car.year}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{car.name}</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {car.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline connector */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-600/50 via-teal-600/20 to-transparent transform -translate-x-1/2 mt-32" style={{ height: '100%' }} />
      </div>

      <Footer />
    </main>
  )
}

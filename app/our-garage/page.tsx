'use client'

import Footer from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Trophy, Zap } from 'lucide-react'

interface CarData {
  year: number
  name: string
  description: string
  achievements?: string[]
}

const cars: CarData[] = [
  {
    year: 2019,
    name: 'MAHIL',
    description: 'The unaccountable efforts put all over the years by every team member finally paid off in 2019 when we introduced our best ever-\'MAHIL\'. This prototype secured the first rank in Shell Eco-Marathon, India 2019 by knocking an unbelievable mileage of 270 kmpl. Also, the first prototype which completed its technical inspection among every other teams and won the safety award.',
    achievements: ['1st Rank SEM India 2019', '270 kmpl Mileage', 'Safety Award Winner']
  },
  {
    year: 2019,
    name: 'YUGANT',
    description: '\'Yugant\' may represent the end of gasoline-powered cars and the dawn of Eco-friendly transportation. It represents the transition to renewable energy which may stimulate development, innovation, and sustainability. It also implies longevity, durability, and the end of an era and the start of a sustainable one.',
    achievements: ['Sustainable Design', 'Innovation Focus']
  },
  {
    year: 2017,
    name: 'TRITON',
    description: 'Team ETA\'s first ever carbon fibre monocoque structured body was introduced in 2017 and this prototype was named \'TRITON\'. This perfectly engineered automobile vehicle became the first Indian prototype to participate in Shell Eco Marathon Asia 2017, Singapore.',
    achievements: ['Carbon Fibre Monocoque', 'SEM Asia 2017 Participant']
  },
  {
    year: 2015,
    name: 'ARYA',
    description: 'The first prototype of Team ETA having a carbon fiber shell which was used to improve its aerodynamics, strength and rigidity. This prototype has participated in the Shell Eco Marathon Asia 2015 which was held in Philippines. It was ranked 5th in Asia by reaching an astonishing mileage of 153 kmpl.',
    achievements: ['Ranked 5th in Asia', '153 kmpl Mileage', 'Carbon Fiber Shell']
  },
  {
    year: 2014,
    name: 'J-14',
    description: 'The successor of the \'13 prototype J-14 with not just an improved design but with a glass fiber body shell along with the saffron-white-green aesthetic design representing the Indian tricolor was the highlight of the prototype.',
    achievements: ['Glass Fiber Body', 'Tricolor Aesthetic']
  },
  {
    year: 2013,
    name: 'JUGAD',
    description: 'JUGAAD, was the first prototype built by Team ETA. Participated in Shell Eco Marathon Asia 2013, Malaysia this sheet metal prototype was designed with sheer determination and innovation and hence named, Jugaad.',
    achievements: ['First Prototype', 'SEM Asia 2013 Participant']
  }
]

export default function OurGaragePage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-0 relative overflow-hidden flex flex-col">
      {/* Tech Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow w-full">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            INSIDE THE <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">GARAGE</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of innovation, engineering excellence, and our journey towards sustainable mobility.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mb-24">
          {/* Vertical Line - Center on Desktop, Left on Mobile */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 lg:-translate-x-1/2"></div>

          <div className="space-y-16 lg:space-y-24">
            {cars.map((car, index) => (
              <div key={index} className="relative flex flex-col lg:flex-row items-center w-full group">
                
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full transform -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(0,255,255,0.5)] top-0 lg:top-1/2 lg:-translate-y-1/2">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Image Section */}
                <div className={`w-full lg:w-1/2 pl-12 lg:pl-0 mb-8 lg:mb-0 ${
                    index % 2 === 0 
                    ? 'lg:order-1 lg:pr-16' // Even: Image Left
                    : 'lg:order-2 lg:pl-16' // Odd: Image Right
                }`}>
                    <div className="relative aspect-video bg-muted rounded-lg overflow-hidden border-2 border-primary/20 shadow-lg group-hover:border-primary/50 transition-all">
                        {/* Image Content */}
                        <img
                            src={`/${car.name === 'JUGAD' ? 'jugaad' : car.name.toLowerCase().replace('-', '')}.${['triton', 'arya', 'yugant', 'j-14', 'jugad'].includes(car.name.toLowerCase()) ? 'png' : 'jpg'}`}
                            alt={car.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="text-lg font-bold bg-background/80 backdrop-blur text-primary border-primary/20">
                                {car.year}
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className={`w-full lg:w-1/2 pl-12 lg:pl-0 ${
                    index % 2 === 0 
                    ? 'lg:order-2 lg:pl-16' // Even: Text Right
                    : 'lg:order-1 lg:pr-16' // Odd: Text Left
                }`}>
                    <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                                    {car.name}
                                </h2>
                                <Zap className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            
                            <p className="text-muted-foreground leading-relaxed text-sm mb-6 text-justify">
                                {car.description}
                            </p>

                            {car.achievements && (
                                <div className="flex flex-wrap gap-2">
                                    {car.achievements.map((achievement, i) => (
                                    <Badge key={i} variant="outline" className="border-primary/30 text-xs py-1">
                                        {achievement}
                                    </Badge>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

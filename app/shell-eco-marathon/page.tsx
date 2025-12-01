'use client'

import Footer from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Trophy, Zap, Award, Flag, Target, Globe, Flame, Leaf, Wind } from 'lucide-react'

interface Achievement {
  title: string
  year: string
  event: string
  description: string
  icon: any
}

const achievements: Achievement[] = [
  {
    title: 'Bonus Challenge',
    year: '2021',
    event: 'Virtual Event',
    description: 'First in Asia, Regional Winners of Road To 2050 - Bonus Challenge',
    icon: Trophy
  },
  {
    title: 'Virtual Technical Inspection',
    year: '2021',
    event: 'Virtual Event',
    description: 'First in Asia, Regional Winners of Virtual Technical Inspection',
    icon: Award
  },
  {
    title: 'Pitch The Future',
    year: '2020',
    event: 'Virtual Event',
    description: 'First in Asia, Regional Winners of Electric Vehicle Battery Charging Challenge',
    icon: Zap
  },
  {
    title: 'CO2 Emissions',
    year: '2020',
    event: 'Virtual Event',
    description: 'Top 5 in Tracking and Reducing CO2 emissions from Vehicles in Pitch The Future',
    icon: Target
  },
  {
    title: 'Mahil',
    year: '2019',
    event: 'Shell Eco-Marathon',
    description: 'First in India, with a fuel efficiency of 270 kmpl of gasoline',
    icon: Trophy
  },
  {
    title: 'Safety Award',
    year: '2019',
    event: 'Shell Eco-Marathon',
    description: 'Off-Track Safety Awards Winner for the safety precautions and behaviour of Team Members',
    icon: Award
  },
  {
    title: 'Carbon Fibre Monocoque',
    year: '2017',
    event: 'Shell Eco-Marathon',
    description: 'First ever student team from India to manufacture a carbon fibre monocoque body',
    icon: Zap
  },
  {
    title: 'Vacuum Infusion',
    year: '2017',
    event: 'Shell Eco-Marathon',
    description: 'Mastered the process of Vacuum Infusion Technique for manufacturing FRP Bodies',
    icon: Zap
  },
  {
    title: 'Dog Clutch Mechanism',
    year: '2017',
    event: 'Shell Eco-Marathon',
    description: 'Successful Implementation of Dog Clutch Mechanism for Improved Coasting Abilities',
    icon: Zap
  },
  {
    title: 'Technical Inspection',
    year: '2017',
    event: 'Shell Eco-Marathon',
    description: 'First team from India to complete all technical inspection in a single attempt',
    icon: Flag
  },
  {
    title: 'Arya',
    year: '2015',
    event: 'Shell Eco-Marathon',
    description: 'First in India and 5th in Asia, with a fuel efficiency of 153 kmpl of gasoline',
    icon: Trophy
  }
]

export default function ShellEcoMarathonPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance tracking-tight">
            THE CHALLENGE: <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">SHELL ECO-MARATHON</span>
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-8 tracking-wide">THIRST FOR INNOVATIONS</p>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Content Section with Two Columns */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Description */}
            <div className="flex flex-col space-y-10">
              
              {/* Intro Block */}
              <div className="relative pl-6 border-l-2 border-primary/30">
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" /> Global Innovation
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The <span className="text-foreground font-semibold">Shell Eco-marathon</span> is a premier global competition challenging student teams to design, build, and drive the most energy-efficient vehicles. Held across Europe, the Americas, and Asia.
                </p>
              </div>

              {/* Categories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-card/30 border-primary/10 hover:border-primary/40 transition-colors group">
                  <CardContent className="p-5">
                    <Flame className="w-8 h-8 text-orange-500 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-foreground text-lg mb-1">Internal Combustion</h4>
                    <p className="text-sm text-muted-foreground">Petrol, diesel, ethanol, & natural gas.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/30 border-primary/10 hover:border-primary/40 transition-colors group">
                  <CardContent className="p-5">
                    <Zap className="w-8 h-8 text-yellow-400 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-foreground text-lg mb-1">Electric Mobility</h4>
                    <p className="text-sm text-muted-foreground">Hydrogen fuel cells & Li-ion batteries.</p>
                  </CardContent>
                </Card>
              </div>

              {/* Sustainability Block */}
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-500" /> Sustainable Future
                </h3>
                <p className="text-muted-foreground">
                  Pushing the boundaries of engineering to create the most fuel-efficient vehicles possible, inspiring next-generation sustainable transportation solutions.
                </p>
              </div>
            </div>

            {/* Right Column - Vehicle Type Card */}
            <div className="lg:sticky lg:top-24">
              <Card className="w-full bg-card border-primary/20 shadow-[0_0_40px_-10px_rgba(var(--primary),0.15)] overflow-hidden relative group">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -ml-12 -mb-12"></div>
                
                <CardHeader className="relative z-10 pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="border-primary/50 text-primary tracking-widest text-xs font-bold px-3 py-1">
                      VEHICLE CLASS
                    </Badge>
                    <Wind className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                  <CardTitle className="text-4xl font-black text-foreground tracking-tight uppercase italic">
                    PROTOTYPE
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Futuristic, streamlined vehicles where the primary design consideration is reducing drag and maximizing efficiency.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Streamlined Aerodynamics</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Lightweight Construction</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Maximum Fuel Efficiency</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                    <span className="text-xs font-mono text-muted-foreground">CATEGORY SPECS</span>
                    <p className="text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                      <Zap className="w-4 h-4" /> Maximum Innovation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              OUR <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">ACHIEVEMENTS</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              A legacy of winning, innovating, and breaking records on the global stage.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full"></div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(var(--primary),0.2)] group">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-primary/30 text-primary font-mono">
                      {achievement.year}
                    </Badge>
                    <achievement.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    {achievement.event}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

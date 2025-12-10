import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Wind, Zap } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-black text-foreground tracking-tight">
            WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">#MadOverMiles</span>
          </h2>
        </div>

        <Card className="bg-card border-primary/20 shadow-2xl relative overflow-hidden group">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary/30 rounded-tl-3xl -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary/30 rounded-br-3xl translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

            <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light text-justify">
                            <strong className="text-foreground font-semibold">Team ETA</strong> is the official super mileage student team of <span className="text-primary font-medium">K J Somaiya School of Engineering</span>. We strive to bring awareness toward sustainability and eco-friendly transportation through competitive motorsports.
                        </p>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light text-justify">
                            Our mission is to design and build fuel-efficient vehicles that challenge the conventional approach to automotive engineering. We believe that with the perfect combination of <span className="text-foreground font-medium">aerodynamics</span>, <span className="text-foreground font-medium">lightweight materials</span>, and <span className="text-foreground font-medium">innovative drivetrain solutions</span>, we can achieve extraordinary fuel efficiency.
                        </p>
                    </div>

                    {/* Side Icons/Stats */}
                    <div className="hidden md:flex flex-col gap-8 pl-8 border-l border-border/50">
                        <div className="flex flex-col items-center text-center group/icon">
                            <div className="p-4 rounded-full bg-primary/10 mb-2 group-hover/icon:bg-primary/20 transition-colors ring-1 ring-primary/20">
                                <Leaf className="w-6 h-6 text-green-500" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Eco-Friendly</span>
                        </div>
                        <div className="flex flex-col items-center text-center group/icon">
                            <div className="p-4 rounded-full bg-primary/10 mb-2 group-hover/icon:bg-primary/20 transition-colors ring-1 ring-primary/20">
                                <Wind className="w-6 h-6 text-blue-400" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Aerodynamics</span>
                        </div>
                        <div className="flex flex-col items-center text-center group/icon">
                            <div className="p-4 rounded-full bg-primary/10 mb-2 group-hover/icon:bg-primary/20 transition-colors ring-1 ring-primary/20">
                                <Zap className="w-6 h-6 text-yellow-400" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Efficiency</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  )
}

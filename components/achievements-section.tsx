import { Card, CardContent } from "@/components/ui/card"
import { Users, Car, Trophy, Flag, Globe } from "lucide-react"

const achievements = [
  { number: '23', label: 'TEAM MEMBERS', icon: Users, color: "text-blue-400" },
  { number: '6', label: 'CARS DESIGNED', icon: Car, color: "text-cyan-400" },
  { number: '6', label: 'AWARDS WON', icon: Trophy, color: "text-yellow-400" },
  { number: '1', label: 'NATIONAL EVENT WON', icon: Flag, color: "text-orange-400" },
  { number: '1', label: 'INTERNATIONAL EVENT WON', icon: Globe, color: "text-green-400" },
]

export default function AchievementsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
       {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.3)] group overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full relative">
                 {/* Large background icon */}
                 <div className={`absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 rotate-12`}>
                    <achievement.icon className="w-32 h-32" />
                 </div>
                 
                <div className={`mb-4 p-3 rounded-full bg-background/50 ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                </div>
                
                <div className="text-4xl sm:text-5xl font-black text-foreground mb-2 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-blue-600 transition-all">
                  {achievement.number}
                </div>
                <p className="text-[10px] sm:text-xs font-bold tracking-widest text-muted-foreground uppercase group-hover:text-primary transition-colors">
                  {achievement.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

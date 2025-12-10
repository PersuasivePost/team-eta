import { GraduationCap } from "lucide-react"

export default function InstitutionSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden border-t border-border/50">
       {/* Abstract Background */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
       
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            {/* Image Area */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center bg-transparent">
                <img src="/kjsce.png" alt="K.J. Somaiya College of Engineering" className="max-w-sm md:max-w-md object-contain" />
            </div>

            {/* Text Area */}
            <div className="text-center md:text-left space-y-8 flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                    <GraduationCap className="w-4 h-4" />
                    <span>Our Home Base</span>
                </div>
                
                <div className="space-y-2">
                    <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-none uppercase">
                        K.J. Somaiya
                    </h2>
                    <h3 className="text-2xl md:text-4xl font-bold text-muted-foreground tracking-tight uppercase">
                        College of Engineering
                    </h3>
                </div>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto md:mx-0">
                    Fostering innovation and engineering excellence. Providing the world-class infrastructure, mentorship, and platform for <strong className="text-foreground">Team ETA</strong> to push the boundaries of efficiency and sustainability.
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}

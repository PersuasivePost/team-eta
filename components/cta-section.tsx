import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, Lightbulb, Rocket } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Top Separator Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      


      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl sm:text-7xl font-black text-foreground mb-8 tracking-tighter">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-600 animate-gradient">Save The Future</span> Together.
        </h2>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto font-light leading-relaxed">
          Innovation needs fuel. Whether it's expertise, resources, or sponsorship, your support drives us further towards a sustainable tomorrow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
            {[
                { icon: Lightbulb, title: "Share Ideas", desc: "Mentor our engineers with your industry expertise.", color: "text-yellow-400" },
                { icon: Rocket, title: "Sponsor Us", desc: "Power our next prototype with financial support.", color: "text-blue-400" },
                { icon: Heart, title: "Donate", desc: "Contribute resources to help us build better.", color: "text-red-400" }
            ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-card border border-primary/20 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1">
                    <div className={`p-3 rounded-xl bg-background w-fit mb-4 ring-1 ring-border group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-base text-muted-foreground">{item.desc}</p>
                </div>
            ))}
        </div>

        <Link href="/fuel-our-mission">
          <Button
            size="lg"
            className="h-16 px-10 text-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full shadow-[0_0_40px_-10px_rgba(var(--primary),0.6)] hover:shadow-[0_0_60px_-10px_rgba(var(--primary),0.8)] transition-all hover:scale-105 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
                Fuel Our Mission
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            {/* Button Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          </Button>
        </Link>
      </div>
    </section>
  )
}

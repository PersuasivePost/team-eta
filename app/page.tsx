import Hero from '@/components/hero'
import AboutSection from '@/components/about-section'
import AchievementsSection from '@/components/achievements-section'
import InstitutionSection from '@/components/institution-section'
import CtaSection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <AboutSection />
      <AchievementsSection />
      <InstitutionSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

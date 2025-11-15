'use client'
import Footer from '@/components/footer'
import { Check, X } from 'lucide-react'
import React, { useCallback, useState, useRef } from 'react' // Added React and useCallback
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  BarChart,
  Users,
  Megaphone, // Better icon
  Newspaper,
  Globe,
  Play,
  Pause,
} from 'lucide-react'

// --- 1. Data for Key Benefits Carousel ---
const benefits = [
  {
    icon: <Briefcase className="w-8 h-8 text-teal-600" />,
    title: 'Corporate Social Responsibility',
    description: "As our project is a 'Green Project', this counts as a CSR activity for your organisation.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-teal-600" />,
    title: 'Exhibitions and Events',
    description: 'Publicity in Technical Exhibitions, College Events, and at the Shell Eco Marathon.',
  },
  {
    icon: <Users className="w-8 h-8 text-teal-600" />,
    title: 'Recruitment & Seminars',
    description: 'Opportunity to hold Exhibitions, Seminars, and Recruitment drives at KJSCE.',
  },
  {
    icon: <Megaphone className="w-8 h-8 text-teal-600" />,
    title: 'Social Media Publicity',
    description: 'Extensive publicity through our social media outlets (Facebook, Instagram, Twitter).',
  },
  {
    icon: <Newspaper className="w-8 h-8 text-teal-600" />,
    title: 'Local Media Coverage',
    description: 'Publicity through live broadcasts and coverage on local & National Newspapers.',
  },
  {
    icon: <Globe className="w-8 h-8 text-teal-600" />,
    title: 'Help Us Save the World',
    description: 'Contribute towards a greener, cleaner, and more sustainable future for generations.',
  },
]

// --- 2. The Key Benefits Carousel Component ---
function KeyBenefitsCarousel() {
  // use a ref for the autoplay plugin so we can toggle play/pause
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true, playOnInit: true })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [autoplayPlugin.current]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [isPlaying, setIsPlaying] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  // toggle autoplay (play or stop)
  const toggleAutoplay = useCallback(() => {
    if (!autoplayPlugin.current) return
    if (isPlaying) {
      autoplayPlugin.current.stop()
      setIsPlaying(false)
    } else {
      autoplayPlugin.current.play()
      setIsPlaying(true)
    }
  }, [isPlaying])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // update selected index and scroll snaps when embla is ready
  React.useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', () => setScrollSnaps(emblaApi.scrollSnapList()))

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Unlock Your Impact</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Partnering with us gives your organisation visibility, talent access, and a measurable sustainability impact.
            </p>
          </div>
          <div className="flex-shrink-0 mt-4 md:mt-0 flex items-center gap-3">
            <button
              className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-700 shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={scrollPrev}
              aria-label="Previous benefit"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-700 shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={scrollNext}
              aria-label="Next benefit"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-700 shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={toggleAutoplay}
              aria-label={isPlaying ? 'Pause autoplay' : 'Play autoplay'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {benefits.map((benefit, index) => (
              <div
                className={`flex-grow-0 flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-3 transition-transform duration-300 ${
                  selectedIndex === index ? 'md:scale-105 lg:scale-110 z-20' : 'md:scale-95 lg:scale-100'
                }`}
                key={index}
              >
                <div className={`flex flex-col h-full bg-white rounded-xl p-8 transition-shadow duration-300 ${
                  selectedIndex === index ? 'shadow-2xl' : 'shadow-lg'
                }`}>
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-lg bg-teal-50 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700 text-base">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination / dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to benefit ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${
                  selectedIndex === i ? 'bg-teal-600 scale-110' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// --- 3. CLEANER DATA STRUCTURE: Tiers ---
const sponsorshipTiers = [
  { id: 'TITLE', name: 'TITLE', gradient: 'from-purple-600 to-blue-600' },
  { id: 'GOLD', name: 'GOLD', gradient: 'from-yellow-600 to-orange-500' },
  { id: 'SILVER', name: 'SILVER', gradient: 'from-gray-400 to-gray-500' },
  { id: 'BRONZE', name: 'BRONZE', gradient: 'from-orange-700 to-red-700' },
]

// --- 4. MAINTAINABLE DATA STRUCTURE: Perks ---
const perkData = [
  { name: 'Local Invites', tiers: { TITLE: true, GOLD: true, SILVER: true, BRONZE: true } },
  { name: 'International Invite', tiers: { TITLE: true, GOLD: false, SILVER: false, BRONZE: false } },
  { name: '200x200 px logo on Website', tiers: { TITLE: true, GOLD: true, SILVER: false, BRONZE: false } },
  { name: '160x160 px logo on Website home page', tiers: { TITLE: true, GOLD: false, SILVER: false, BRONZE: false } },
  { name: '100x100 px logo on Website home Page', tiers: { TITLE: false, GOLD: true, SILVER: false, BRONZE: false } },
  { name: '100x100 px logo on Website', tiers: { TITLE: false, GOLD: false, SILVER: true, BRONZE: true } },
  { name: '3"x3" logo on printed materials', tiers: { TITLE: true, GOLD: true, SILVER: true, BRONZE: true } },
  { name: '500x300 px logo on facebook', tiers: { TITLE: true, GOLD: false, SILVER: false, BRONZE: false } },
  { name: 'Acknowledgement on instagram', tiers: { TITLE: true, GOLD: true, SILVER: true, BRONZE: true } },
  { name: '6"x6" logo on shirts', tiers: { TITLE: true, GOLD: false, SILVER: false, BRONZE: false } },
  { name: '4"x4" logo on shirts', tiers: { TITLE: false, GOLD: true, SILVER: false, BRONZE: false } },
  { name: '3"x3" logo on shirts', tiers: { TITLE: false, GOLD: false, SILVER: true, BRONZE: false } },
  { name: '2"x2" logo on shirts', tiers: { TITLE: false, GOLD: false, SILVER: false, BRONZE: true } },
  { name: 'Logo on luggage', tiers: { TITLE: true, GOLD: true, SILVER: false, BRONZE: false } },
  { name: "Sponsor's choice of colour for driver's suit", tiers: { TITLE: true, GOLD: false, SILVER: false, BRONZE: false } },
  { name: '8"x8" logo on driver\'s suit', tiers: { TITLE: true, GOLD: false, SILVER: false, BRONZE: false } },
  { name: 'Special Recognition on team Campaigns', tiers: { TITLE: true, GOLD: true, SILVER: true, BRONZE: true } },
  { name: '20"x20" logo on standees', tiers: { TITLE: true, GOLD: false, SILVER: false, BRONZE: false } },
  { name: '10"x10" logo on standees', tiers: { TITLE: false, GOLD: true, SILVER: false, BRONZE: false } },
  { name: '5"x5" logo on standees', tiers: { TITLE: false, GOLD: false, SILVER: true, BRONZE: false } },
  { name: '3"x3" logo on standees', tiers: { TITLE: false, GOLD: false, SILVER: false, BRONZE: true } },
  { name: '7"x7" logo on car', tiers: { TITLE: true, GOLD: false, SILVER: false, BRONZE: false } },
  { name: '5"x5" logo on car', tiers: { TITLE: false, GOLD: true, SILVER: false, BRONZE: false } },
  { name: '3"x3" logo on car', tiers: { TITLE: false, GOLD: false, SILVER: true, BRONZE: false } },
  { name: '2"x2" logo on car', tiers: { TITLE: false, GOLD: false, SILVER: false, BRONZE: true } },
]

// --- 5. The Main Page Component ---
export default function OurPartners() {
  const [expandedTier, setExpandedTier] = useState<string>('TITLE')

  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Header */}
      <section className="pt-16 pb-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-transparent to-blue-500/20 blur-3xl rounded-full" />
            <div className="relative">
              <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-4 text-balance">
                JOIN THE PADDOCK
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 text-balance">
                Reasons to Partner With Us
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === THIS IS THE NEW CAROUSEL SECTION === */}
      <KeyBenefitsCarousel />

      {/* Partnership Tiers */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Partnership Tiers</h2>
          
          <div className="mb-8 flex flex-wrap gap-3">
            {sponsorshipTiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setExpandedTier(tier.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  expandedTier === tier.id
                    ? `bg-gradient-to-r ${tier.gradient} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tier.name}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">PERKS</th>
                  {sponsorshipTiers.map((tier) => (
                    <th key={tier.id} className={`px-6 py-4 text-center text-sm font-bold ${
                      expandedTier === tier.id 
                        ? 'bg-gray-100 text-teal-600' 
                        : 'text-gray-600'
                    }`}>
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {perkData.map((perk, idx) => (
                  <tr
                    key={perk.name}
                    className={`border-b border-gray-200 transition-colors hover:bg-gray-50 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-gray-700">{perk.name}</td>
                    {sponsorshipTiers.map((tier) => (
                      <td
                        key={`${tier.id}-${perk.name}`}
                        className={`px-6 py-4 text-center ${
                          expandedTier === tier.id ? 'bg-gray-100/50' : ''
                        }`}
                      >
                        {perk.tiers[tier.id as keyof typeof perk.tiers] ? (
                          <Check className="w-5 h-5 text-teal-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Logo Wall */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">For Those Who Want To Change The World</h2>
          <p className="text-gray-600 mb-12 text-lg">Join our partners in driving sustainable innovation</p>

          {sponsorshipTiers.map((tier, tierIdx) => (
            <div key={tier.id} className="mb-16">
              <h3 className={`text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${tier.gradient}`}>
                {tier.name === 'TITLE' ? 'TITLE PARTNERS' : `${tier.name} PARTNERS`}
              </h3>
              <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 rounded-xl border border-gray-200 ${
                tierIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              } shadow-md`}>
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="aspect-square bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center hover:border-teal-600/50 transition-colors cursor-pointer group"
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2 opacity-30 group-hover:opacity-100 transition-opacity">📦</div>
                      <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">Logo Placeholder</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 lg:px-12 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-200 p-12 text-center shadow-md">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 blur-2xl" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Join the Paddock?</h3>
              <p className="text-gray-700 mb-8 text-lg">Partner with Team ETA and be part of the sustainable racing revolution</p>
              <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
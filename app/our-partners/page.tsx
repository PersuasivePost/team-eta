'use client'
import Footer from '@/components/footer'
import Link from 'next/link'
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

// --- 5. Partners Showcase Component (New) ---
function PartnersShowcase() {
  const titlePartners = [
    { image: '/godrej.jpg', name: 'Godrej' },
    { image: '/notion.jpg', name: 'Notion' },
    { image: '/sw.jpg', name: 'SolidWorks' },
    { image: '/tniacl.jpg', name: 'New India Insurance' },
    { image: '/hpcl.jpg', name: 'Hindustan Petroleum' },
  ]

  const goldSilverPartners = [
    { image: '/ansys.jpg', name: 'Ansys' },
    { image: '/jsm.jpg', name: 'JSM' },
    { image: '/mechemco.jpg', name: 'Mechemco' },
    { image: '/nbc.jpg', name: 'NBC' },
    { image: '/rtpl.jpg', name: 'Royal Thermoset' },
    { image: '/s.jpg', name: 'Siddhautovation' },
    { image: '/spl.jpg', name: 'Supreme Petrochem' },
    { image: '/vis.jpg', name: 'Vashi Integrated Solutions' },
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powering innovation and sustainability together.
          </p>
        </div>

        {/* TITLE PARTNERS */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-600" />
            <h3 className="text-sm font-bold tracking-[0.2em] text-purple-600 uppercase">Title Partners</h3>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-600" />
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {titlePartners.map((partner) => (
              <div key={partner.name} className="flex items-center gap-8 p-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-purple-200">
                <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-white to-slate-100 rounded-xl flex items-center justify-center border border-slate-200 shadow-lg">
                  <img src={partner.image} alt={partner.name} className="w-28 h-28 object-contain" />
                </div>
                <div className="flex-grow">
                  <p className="text-3xl font-black text-gray-900 tracking-tight">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GOLD & SILVER PARTNERS */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-500" />
            <h3 className="text-sm font-bold tracking-[0.2em] text-yellow-600 uppercase">Gold & Silver Partners</h3>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {goldSilverPartners.map((partner) => (
              <div key={partner.name} className="flex items-center gap-6 p-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-yellow-200">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-white to-slate-100 rounded-lg flex items-center justify-center border border-slate-200 shadow-md">
                  <img src={partner.image} alt={partner.name} className="w-20 h-20 object-contain" />
                </div>
                <div className="flex-grow">
                  <p className="text-xl font-bold text-gray-900">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

// --- 6. The Main Page Component ---
export default function OurPartners() {
  // const [expandedTier, setExpandedTier] = useState<string>('TITLE') // COMMENTED OUT - Partnership Tiers section removed

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

      {/* Key Benefits Carousel */}
      <KeyBenefitsCarousel />

      {/* NEW: Partners Showcase (Moved Above Tiers) */}
      <PartnersShowcase />

      {/* PARTNERSHIP TIERS SECTION - COMMENTED OUT
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Partnership Tiers</h2>
            <p className="text-gray-600">Choose the level of engagement that suits your organization.</p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {sponsorshipTiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setExpandedTier(tier.id)}
                className={`px-6 py-3 rounded-full font-bold tracking-wide transition-all duration-300 ${
                  expandedTier === tier.id
                    ? `bg-gradient-to-r ${tier.gradient} text-white shadow-lg scale-105`
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                {tier.name}
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50/80 border-b border-gray-200">
                    <th className="px-6 py-5 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">PERKS</th>
                    {sponsorshipTiers.map((tier) => (
                      <th key={tier.id} className={`px-6 py-5 text-center text-sm font-black tracking-widest ${
                        expandedTier === tier.id
                          ? 'bg-gray-100 text-teal-600'
                          : 'text-gray-400'
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
                      className={`border-b border-gray-100 transition-colors hover:bg-blue-50/30 ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">{perk.name}</td>
                      {sponsorshipTiers.map((tier) => (
                        <td
                          key={`${tier.id}-${perk.name}`}
                          className={`px-6 py-4 text-center ${
                            expandedTier === tier.id ? 'bg-blue-50/50' : ''
                          }`}
                        >
                          {perk.tiers[tier.id as keyof typeof perk.tiers] ? (
                            <div className="flex justify-center">
                              <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                                <Check className="w-4 h-4 text-teal-600" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center opacity-20">
                              <X className="w-4 h-4 text-gray-400" />
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gray-900 text-white p-12 md:p-20 text-center shadow-2xl">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10 space-y-8">
              <h3 className="text-4xl md:text-6xl font-black tracking-tight">Ready to Join the Paddock?</h3>
              <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
                Partner with Team ETA and become a driving force in the sustainable racing revolution. Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button className="px-10 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto">
                  Download Brochure
                </button>
                <Link href="/contact" className="px-10 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all w-full sm:w-auto flex items-center justify-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

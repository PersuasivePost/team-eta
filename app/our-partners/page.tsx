 'use client'
import Footer from '@/components/footer'
import { Check } from 'lucide-react'
import { useState } from 'react'

export default function OurPartners() {
  const [expandedTier, setExpandedTier] = useState<string | null>(null)

  const benefits = [
    {
      title: 'Social Media Publicity',
      description: 'Publicity through social media outlets and digital channels to reach a global audience.',
      icon: '📱',
    },
    {
      title: 'Exhibitions and Events',
      description: 'Publicity through campaigns in Technical Exhibitions and major industry events.',
      icon: '🏆',
    },
    {
      title: 'Local Media',
      description: 'Publicity through live broadcast and coverage on local and National Newspapers.',
      icon: '📺',
    },
    {
      title: 'Help Us Save the World',
      description: 'Contribute towards a greener, cleaner and a more sustainable future.',
      icon: '🌍',
    },
    {
      title: 'Corporate Social Responsibility',
      description: 'As our project can be considered as a "Green Project" aligned with CSR goals.',
      icon: '♻️',
    },
    {
      title: 'Exhibitions & Seminars',
      description: 'Conduct exhibitions, seminars or recruitment drives with your brand presence.',
      icon: '🎓',
    },
  ]

  const perks = [
    'Local Invites',
    '200x200 px logo on Website',
    '160x160 px logo on Website home page',
    '3"x3" logo on printed materials',
    '500x300 px logo on facebook',
    'Acknowledgement on instagram',
    '6"x6" logo on shirts',
    'Logo on luggage',
    "Sponsor's choice of colour for driver's suit",
    '8"x8" logo on driver\'s suit',
    'Special Recognition on team Campaigns',
    '20"x20" logo on standees',
    '7"x7" logo on car',
    'Logo on social media',
  ]

  const tierData = {
    TITLE: [true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    GOLD: [true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    SILVER: [true, true, false, true, true, true, true, false, false, true, true, true, true, true],
    BRONZE: [true, false, false, false, true, false, false, false, false, false, true, true, false, true],
  }

  const tierColors = {
    TITLE: 'from-purple-600 to-blue-600',
    GOLD: 'from-yellow-600 to-orange-500',
    SILVER: 'from-gray-400 to-gray-500',
    BRONZE: 'from-orange-700 to-red-700',
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      
      {/* Header */}
      <section className="pt-16 pb-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20 blur-3xl rounded-full" />
            <div className="relative">
              <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4 text-balance">
                JOIN THE PADDOCK
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 text-balance">
                Reasons to Partner With Us
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-white">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 p-6 cursor-pointer"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-white">Partnership Tiers</h2>
          
          {/* Tier Tabs */}
          <div className="mb-8 flex flex-wrap gap-3">
            {Object.keys(tierData).map((tier) => (
              <button
                key={tier}
                onClick={() => setExpandedTier(tier)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  expandedTier === tier || (!expandedTier && tier === 'TITLE')
                    ? `bg-gradient-to-r ${tierColors[tier as keyof typeof tierColors]} text-white shadow-lg`
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">PERKS</th>
                  {Object.keys(tierData).map((tier) => (
                    <th key={tier} className={`px-6 py-4 text-center text-sm font-bold ${
                      (expandedTier === tier || (!expandedTier && tier === 'TITLE')) 
                        ? 'bg-gray-800/50 text-cyan-400' 
                        : 'text-gray-400'
                    }`}>
                      {tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {perks.map((perk, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-800 transition-colors hover:bg-gray-900/50 ${
                      idx % 2 === 0 ? 'bg-gray-900/20' : 'bg-gray-800/10'
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-gray-300">{perk}</td>
                    {Object.keys(tierData).map((tier) => (
                      <td
                        key={`${tier}-${idx}`}
                        className={`px-6 py-4 text-center ${
                          (expandedTier === tier || (!expandedTier && tier === 'TITLE'))
                            ? 'bg-gray-800/30'
                            : ''
                        }`}
                      >
                        {tierData[tier as keyof typeof tierData][idx] && (
                          <Check className="w-5 h-5 text-cyan-400 mx-auto" />
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
          <h2 className="text-4xl font-bold mb-4 text-white">For Those Who Want To Change The World</h2>
          <p className="text-gray-400 mb-12 text-lg">Join our partners in driving sustainable innovation</p>

          {/* Logo Walls for each tier */}
          {Object.keys(tierData).map((tier, tierIdx) => (
            <div key={tier} className="mb-16">
              <h3 className={`text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${tierColors[tier as keyof typeof tierColors]}`}>
                {tier === 'TITLE' ? 'TITLE PARTNERS' : `${tier} PARTNERS`}
              </h3>
              <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 rounded-xl border border-gray-800 ${
                tierIdx % 2 === 0 ? 'bg-gray-900/20' : 'bg-gray-800/10'
              }`}>
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 flex items-center justify-center hover:border-cyan-500/50 transition-colors cursor-pointer group"
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2 opacity-30 group-hover:opacity-100 transition-opacity">📦</div>
                      <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">Logo Placeholder</p>
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
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-cyan-500/30 p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-2xl" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Join the Paddock?</h3>
              <p className="text-gray-300 mb-8 text-lg">Partner with Team ETA and be part of the sustainable racing revolution</p>
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all transform hover:scale-105">
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

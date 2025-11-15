 'use client'
import Footer from '@/components/footer'
import { Check, X } from 'lucide-react'
import { useState } from 'react'

export default function OurPartners() {
  const [expandedTier, setExpandedTier] = useState<string | null>(null)

  const benefits = [
    {
      title: 'Social Media Publicity',
      description: 'Publicity through social media outlets and digital channels to reach a global audience.',
    },
    {
      title: 'Exhibitions and Events',
      description: 'Publicity through campaigns in Technical Exhibitions and major industry events.',
    },
    {
      title: 'Local Media',
      description: 'Publicity through live broadcast and coverage on local and National Newspapers.',
    },
    {
      title: 'Help Us Save the World',
      description: 'Contribute towards a greener, cleaner and a more sustainable future.',
    },
    {
      title: 'Corporate Social Responsibility',
      description: 'As our project can be considered as a "Green Project" aligned with CSR goals.',
    },
    {
      title: 'Exhibitions & Seminars',
      description: 'Conduct exhibitions, seminars or recruitment drives with your brand presence.',
    },
  ]

  const perks = [
    'Local Invites',
    'International Invite',
    '200x200 px logo on Website',
    '160x160 px logo on Website home page',
    '100x100 px logo on Website home Page',
    '100x100 px logo on Website',
    '3"x3" logo on printed materials',
    '500x300 px logo on facebook',
    'Acknowledgement on instagram',
    '6"x6" logo on shirts',
    '4"x4" logo on shirts',
    '3"x3" logo on shirts',
    '2"x2" logo on shirts',
    'Logo on luggage',
    "Sponsor's choice of colour for driver's suit",
    '8"x8" logo on driver\'s suit',
    'Special Recognition on team Campaigns',
    '20"x20" logo on standees',
    '10"x10" logo on standees',
    '5"x5" logo on standees',
    '3"x3" logo on standees',
    '7"x7" logo on car',
    '5"x5" logo on car',
    '3"x3" logo on car',
    '2"x2" logo on car',
  ]

  const tierData = {
    // TITLE partners (top tier)
    TITLE: [
      /* Local Invites */ true,
      /* International Invite */ true,
      /* 200x200 website */ true,
      /* 160x160 home page */ true,
      /* 100x100 home page */ false,
      /* 100x100 website */ false,
      /* 3x3 printed */ true,
      /* 500x300 facebook */ true,
      /* instagram ack */ true,
      /* 6x6 shirts */ true,
      /* 4x4 shirts */ false,
      /* 3x3 shirts */ false,
      /* 2x2 shirts */ false,
      /* luggage */ true,
      /* sponsor colour */ true,
      /* 8x8 drivers suit */ true,
      /* special recognition */ true,
      /* 20x20 standees */ true,
      /* 10x10 standees */ false,
      /* 5x5 standees */ false,
      /* 3x3 standees */ false,
      /* 7x7 car */ true,
      /* 5x5 car */ false,
      /* 3x3 car */ false,
      /* 2x2 car */ false,
    ],
    GOLD: [
      /* Local Invites */ true,
      /* International Invite */ false,
      /* 200x200 website */ true,
      /* 160x160 home page */ false,
      /* 100x100 home page */ true,
      /* 100x100 website */ false,
      /* 3x3 printed */ true,
      /* 500x300 facebook */ false,
      /* instagram ack */ true,
      /* 6x6 shirts */ false,
      /* 4x4 shirts */ true,
      /* 3x3 shirts */ false,
      /* 2x2 shirts */ false,
      /* luggage */ true,
      /* sponsor colour */ false,
      /* 8x8 drivers suit */ false,
      /* special recognition */ true,
      /* 20x20 standees */ false,
      /* 10x10 standees */ true,
      /* 5x5 standees */ false,
      /* 3x3 standees */ false,
      /* 7x7 car */ false,
      /* 5x5 car */ true,
      /* 3x3 car */ false,
      /* 2x2 car */ false,
    ],
    SILVER: [
      /* Local Invites */ true,
      /* International Invite */ false,
      /* 200x200 website */ false,
      /* 160x160 home page */ false,
      /* 100x100 home page */ false,
      /* 100x100 website */ true,
      /* 3x3 printed */ true,
      /* 500x300 facebook */ false,
      /* instagram ack */ true,
      /* 6x6 shirts */ false,
      /* 4x4 shirts */ false,
      /* 3x3 shirts */ true,
      /* 2x2 shirts */ false,
      /* luggage */ false,
      /* sponsor colour */ false,
      /* 8x8 drivers suit */ false,
      /* special recognition */ true,
      /* 20x20 standees */ false,
      /* 10x10 standees */ false,
      /* 5x5 standees */ true,
      /* 3x3 standees */ false,
      /* 7x7 car */ false,
      /* 5x5 car */ false,
      /* 3x3 car */ true,
      /* 2x2 car */ false,
    ],
    BRONZE: [
      /* Local Invites */ true,
      /* International Invite */ false,
      /* 200x200 website */ false,
      /* 160x160 home page */ false,
      /* 100x100 home page */ false,
      /* 100x100 website */ true,
      /* 3x3 printed */ true,
      /* 500x300 facebook */ false,
      /* instagram ack */ true,
      /* 6x6 shirts */ false,
      /* 4x4 shirts */ false,
      /* 3x3 shirts */ false,
      /* 2x2 shirts */ true,
      /* luggage */ false,
      /* sponsor colour */ false,
      /* 8x8 drivers suit */ false,
      /* special recognition */ true,
      /* 20x20 standees */ false,
      /* 10x10 standees */ false,
      /* 5x5 standees */ false,
      /* 3x3 standees */ true,
      /* 7x7 car */ false,
      /* 5x5 car */ false,
      /* 3x3 car */ false,
      /* 2x2 car */ true,
    ],
  }

  const tierColors = {
    TITLE: 'from-purple-600 to-blue-600',
    GOLD: 'from-yellow-600 to-orange-500',
    SILVER: 'from-gray-400 to-gray-500',
    BRONZE: 'from-orange-700 to-red-700',
  }

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

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-teal-600/50 transition-all duration-500 p-6 cursor-pointer shadow-md"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-teal-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Partnership Tiers</h2>
          
          {/* Tier Tabs */}
          <div className="mb-8 flex flex-wrap gap-3">
            {Object.keys(tierData).map((tier) => (
              <button
                key={tier}
                onClick={() => setExpandedTier(tier)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  expandedTier === tier || (!expandedTier && tier === 'TITLE')
                    ? `bg-gradient-to-r ${tierColors[tier as keyof typeof tierColors]} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">PERKS</th>
                  {Object.keys(tierData).map((tier) => (
                    <th key={tier} className={`px-6 py-4 text-center text-sm font-bold ${
                      (expandedTier === tier || (!expandedTier && tier === 'TITLE')) 
                        ? 'bg-gray-100 text-teal-600' 
                        : 'text-gray-600'
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
                    className={`border-b border-gray-200 transition-colors hover:bg-gray-50 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-gray-700">{perk}</td>
                    {Object.keys(tierData).map((tier) => (
                      <td
                        key={`${tier}-${idx}`}
                        className={`px-6 py-4 text-center ${
                          (expandedTier === tier || (!expandedTier && tier === 'TITLE'))
                            ? 'bg-gray-100/50'
                            : ''
                        }`}
                      >
                        {tierData[tier as keyof typeof tierData][idx] ? (
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

          {/* Logo Walls for each tier */}
          {Object.keys(tierData).map((tier, tierIdx) => (
            <div key={tier} className="mb-16">
              <h3 className={`text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${tierColors[tier as keyof typeof tierColors]}`}>
                {tier === 'TITLE' ? 'TITLE PARTNERS' : `${tier} PARTNERS`}
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

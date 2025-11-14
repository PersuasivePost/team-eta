'use client'

import { useState } from 'react'
import Footer from '@/components/footer'
import { ChevronRight, Heart, Zap, Users, Target } from 'lucide-react'

interface BudgetItem {
  label: string
  percentage: number
  amount: string
  description: string
  color: string
}

const budgetData: BudgetItem[] = [
  {
    label: 'Research & Development',
    percentage: 35,
    amount: '$35,000',
    description: 'Advanced aerodynamics and efficiency optimization',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    label: 'Manufacturing & Materials',
    percentage: 30,
    amount: '$30,000',
    description: 'Lightweight composites and precision components',
    color: 'from-blue-500 to-purple-500',
  },
  {
    label: 'Logistics & Transportation',
    percentage: 20,
    amount: '$20,000',
    description: 'Competition travel and equipment transport',
    color: 'from-purple-500 to-pink-500',
  },
  {
    label: 'Testing & Validation',
    percentage: 15,
    amount: '$15,000',
    description: 'Track testing and performance validation',
    color: 'from-pink-500 to-red-500',
  },
]

export default function FuelOurMission() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const totalBudget = 100000

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">

      {/* Hero Section */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                FUEL OUR MISSION
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 font-light">
              Help Us Cross the Finish Line
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-xl p-8 sm:p-12 backdrop-blur-sm">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-3">
                <Zap className="text-cyan-400" size={32} />
                So Good, So Far!
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Team Eta, a dedicated group of students from KJSCE, Mumbai, is embarking on an ambitious endeavor to design and construct a high-efficiency vehicle for the prestigious Shell Eco-Marathon competition. With a proven track record in sustainable automotive development, including notable achievements such as Mahil in 2019 and Arya in 2015, the team is poised to excel once again.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Recognizing the importance of securing funding for their project, Team Eta has outlined specific areas where support is needed, ranging from logistics to research and development. To achieve our goals, we propose launching a crowdfunding campaign to engage with our community and wider audience, aiming not only to raise necessary funds but also to raise awareness about our project's significance. With a clear plan and unwavering determination, Team Eta is optimistic about the potential of crowdfunding to propel our project forward and make a meaningful impact in the Shell Eco-Marathon 2024.
              </p>
            </div>
          </div>

          {/* Interactive Budget Breakdown */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 flex items-center gap-3">
              <Target className="text-cyan-400" size={32} />
              Thinking, Where Your Money Goes?
            </h2>

            {/* Visual Breakdown */}
            <div className="mb-12">
              <div className="flex h-20 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                {budgetData.map((item, index) => (
                  <div
                    key={index}
                    className={`relative group transition-all duration-300 cursor-pointer ${
                      hoveredIndex === null || hoveredIndex === index ? 'opacity-100' : 'opacity-60'
                    }`}
                    style={{ width: `${item.percentage}%` }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className={`w-full h-full bg-gradient-to-r ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                    {item.percentage >= 15 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{item.percentage}%</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {budgetData.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                    hoveredIndex === index
                      ? 'bg-gray-900 border-cyan-400 shadow-lg shadow-cyan-400/20'
                      : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{item.label}</h3>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.amount}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  <div className="mt-4 w-full bg-gray-800 rounded-full h-1.5">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-8 rounded-lg text-center">
              <Heart className="text-red-500 mx-auto mb-3" size={28} />
              <p className="text-4xl font-bold text-cyan-400 mb-2">1000+</p>
              <p className="text-gray-400">Supporters</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-8 rounded-lg text-center">
              <Users className="text-blue-500 mx-auto mb-3" size={28} />
              <p className="text-4xl font-bold text-cyan-400 mb-2">50+</p>
              <p className="text-gray-400">Team Members</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-8 rounded-lg text-center">
              <Zap className="text-yellow-500 mx-auto mb-3" size={28} />
              <p className="text-4xl font-bold text-cyan-400 mb-2">6</p>
              <p className="text-gray-400">Prototypes Built</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-b from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12 backdrop-blur-sm">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Make Impact?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Every contribution brings us closer to victory at the Shell Eco-Marathon. Join our mission to build the future of sustainable mobility.
              </p>
              <a
                href="https://forms.google.com/your-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/50 group"
              >
                CONTRIBUTE NOW
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

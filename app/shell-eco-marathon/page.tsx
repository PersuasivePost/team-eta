'use client'

import { useState } from 'react'

interface Achievement {
  title: string
  year: string
  event: string
  description: string
}

const achievements: Achievement[] = [
  {
    title: 'Bonus Challenge',
    year: '2021',
    event: 'Virtual Event',
    description: 'First in Asia, Regional Winners of Road To 2050 - Bonus Challenge'
  },
  {
    title: 'Virtual Technical Inspection',
    year: '2021',
    event: 'Virtual Event',
    description: 'First in Asia, Regional Winners of Virtual Technical Inspection'
  },
  {
    title: 'PTF',
    year: '2020',
    event: 'Virtual Event',
    description: 'First in Asia, Regional Winners of Electric Vehicle Battery Charging Challenge in the Pitch The Future Competition'
  },
  {
    title: 'PTF',
    year: '2020',
    event: 'Virtual Event',
    description: 'In the Top 5 of Tracking and Reducing CO2 emissions from Vehicles in the Pitch The Future Competition'
  },
  {
    title: 'Mahil',
    year: '2019',
    event: 'Shell Eco-Marathon',
    description: 'First in India, with a fuel efficiency of 270 kmpl of gasoline'
  },
  {
    title: 'Mahil',
    year: '2019',
    event: 'Shell Eco-Marathon',
    description: 'Off-Track Safety Awards Winner for the safety precautions and behaviour of Team Members'
  },
  {
    title: 'Triton',
    year: '2017',
    event: 'Shell Eco-Marathon',
    description: 'First ever student team from India to manufacture a carbon fibre monocoque body'
  },
  {
    title: 'Triton',
    year: '2017',
    event: 'Shell Eco-Marathon',
    description: 'Mastered the process of Vacuum Infusion Technique for manufacturing FRP Bodies'
  },
  {
    title: 'Triton',
    year: '2017',
    event: 'Shell Eco-Marathon',
    description: 'Successful Implementation of Dog Clutch Mechanism for Improved Coasting Abilities'
  },
  {
    title: 'Triton',
    year: '2017',
    event: 'Shell Eco-Marathon',
    description: 'First team from India to complete all technical inspection in a single attempt'
  },
  {
    title: 'Arya',
    year: '2015',
    event: 'Shell Eco-Marathon',
    description: 'First in India and 5th in Asia, with a fuel efficiency of 153 kmpl of gasoline'
  }
]

export default function ShellEcoMarathonPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-balance">
            THE CHALLENGE: <span className="text-cyan-400">SHELL ECO-MARATHON</span>
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-8">THIRST FOR INNOVATIONS</p>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Content Section with Two Columns */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Description */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The Shell Eco-marathon is an annual competition sponsored by Shell, in which participants build special vehicles to achieve the highest possible fuel efficiency. The Eco-Marathon is held around the world with events in Europe, America and Asia. The Competition is divided into two categories. Each of the two categories are subdivided according to fuel sources. They include Internal Combustion (Petrol, diesel, liquid fuel made from natural gas and ethanol) and Electric (Hydrogen fuel cells and lithium based batteries) categories.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                This prestigious global competition drives innovation in vehicle design, efficiency, and sustainability. Teams from around the world push the boundaries of engineering to create the most fuel-efficient vehicles possible, inspiring next-generation sustainable transportation solutions.
              </p>
            </div>

            {/* Right Column - Vehicle Type Card */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-400/30 rounded-lg p-8 hover:border-cyan-400/60 transition-all duration-300">
                <h3 className="text-3xl font-bold text-cyan-400 mb-6">PROTOTYPE</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  This vehicle type has the potential to reach record breaking energy efficiency in this category. Working within the rules, teams will consider size and weight, and how to make it as streamlined and aerodynamic as possible.
                </p>
                <div className="mt-6 pt-6 border-t border-cyan-400/20">
                  <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Maximum Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
              OUR <span className="text-cyan-400">ACHIEVEMENTS</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-transparent mx-auto"></div>
          </div>

          {/* Achievements Timeline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/40 border border-gray-700/50 hover:border-cyan-400/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-800/60">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-cyan-400 font-bold text-lg">{achievement.year}</span>
                      <div className="hidden md:block w-1 h-1 bg-cyan-400/50 rounded-full"></div>
                      <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                    </div>
                    <span className="text-sm text-cyan-400/70 uppercase tracking-wider">{achievement.event}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

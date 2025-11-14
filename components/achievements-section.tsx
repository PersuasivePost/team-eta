const achievements = [
  { number: '23', label: 'TEAM MEMBERS' },
  { number: '6', label: 'CARS DESIGNED' },
  { number: '6', label: 'AWARDS WON' },
  { number: '1', label: 'NATIONAL EVENT WON' },
  { number: '1', label: 'INTERNATIONAL EVENT WON' },
]

export default function AchievementsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 hover:border-cyan-400/50 transition-all"
            >
              <div className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2">
                {achievement.number}
              </div>
              <p className="text-gray-300 text-sm sm:text-base font-semibold">
                {achievement.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const achievements = [
  { number: '23', label: 'TEAM MEMBERS' },
  { number: '6', label: 'CARS DESIGNED' },
  { number: '6', label: 'AWARDS WON' },
  { number: '1', label: 'NATIONAL EVENT WON' },
  { number: '1', label: 'INTERNATIONAL EVENT WON' },
]

export default function AchievementsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card shadow-md border border-border hover:border-primary/50 transition-all"
            >
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                {achievement.number}
              </div>
              <p className="text-muted-foreground text-sm sm:text-base font-semibold">
                {achievement.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Head from 'next/head'
import Footer from '@/components/footer'

export const metadata = {
  title: 'The Pit Crew - Team ETA',
  description: 'Meet the engineers behind the mileage',
}

const teams = [
  {
    name: 'Engine & Drivetrain Crew',
    members: [
      { name: 'Suhail Shanavas', role: 'Head of Powertrain' },
      { name: 'Soham Kotikar', role: 'Member of Powertrain' },
      { name: 'Krrish Shetty', role: 'Member of Powertrain' },
    ],
  },
  {
    name: 'Aero & Body Crew',
    members: [
      { name: 'Ira Naidu', role: 'Head of Bodyworks' },
      { name: 'Manas Patil', role: 'Member of Bodyworks' },
      { name: 'Rajat Tamboli', role: 'Member of Bodyworks' },
    ],
  },
  {
    name: 'Electronics & Data Crew',
    members: [
      { name: 'Krishna Mallawat', role: 'Technical Co-ordinator & Head of Electronics' },
      { name: 'Atharva Dalvi', role: 'Member of Electronics' },
      { name: 'Shefali Govind', role: 'Member of Electronics' },
      { name: 'Aditya Chaugala', role: 'Member of Electronics' },
      { name: 'Avanti Biswas', role: 'Member of Electronics' },
      { name: 'Krishna Gupta', role: 'Member of Electronics' },
      { name: 'Sukrut Patil', role: 'Member of Electronics' },
      { name: 'Shreya Singh', role: 'Member of Electronics' },
      { name: 'Saish Pawaskar', role: 'Member of Electronics' },
    ],
  },
  {
    name: 'Chassis & Dynamics Crew',
    members: [
      { name: 'Ranbeer Raja', role: 'Member of Vehicle Dynamics' },
      { name: 'Atharva Nikumbh', role: 'Member of Vehicle Dynamics' },
      { name: 'Sanjiv Ravindran', role: 'Member of Vehicle Dynamics' },
    ],
  },
  {
    name: 'Autonomous Systems Crew',
    members: [
      { name: 'Divyam Kakani', role: 'Co-Head of Autonomous department' },
      { name: 'Aditi Sambrekar', role: 'Co-Head of Autonomous department' },
      { name: 'Ashvatth Joshi', role: 'Member of Autonomous department' },
      { name: 'Samiksha Sharma', role: 'Member of Autonomous department' },
      { name: 'Aaryan Sharma', role: 'Member of Autonomous department' },
      { name: 'Vinayak Pai', role: 'Member of Autonomous department' },
    ],
  },
  {
    name: 'Marketing & Partnerships Crew',
    members: [
      { name: 'Daksh Khedekar', role: 'Head of Marketing' },
      { name: 'Antariksh Kalantari', role: 'Member of Marketing' },
      { name: 'Dhruv Desai', role: 'Member of Marketing' },
      { name: 'Jahnavi Singh', role: 'Member of Marketing' },
      { name: 'Prateeksha Kini', role: 'Member of Marketing' },
    ],
  },
]

export default function PitCrewPage() {
  return (
    <main className="bg-white text-gray-900 pt-24">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">
            <span className="text-teal-600">THE</span> PIT CREW
          </h1>
          <p className="text-xl text-teal-600 mb-6">Meet the engineers behind the mileage.</p>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            It all started in 2013, when a group of students from K.J. Somaiya College of Engineering felt the need to use their technical knowledge and management skills to develop and innovate technology for the benefit of mankind...
          </p>
        </div>

        {/* Faculty Advisor */}
        <div className="mb-16">
          <div className="flex justify-center">
            <div className="bg-white border border-teal-600/30 rounded-lg p-8 w-full sm:w-96 text-center hover:border-teal-600 transition-colors shadow-md">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-teal-600 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">AN</span>
              </div>
              <h3 className="text-2xl font-bold text-teal-600 mb-2">Ajay Gangrade</h3>
              <p className="text-gray-600">Faculty Advisor</p>
            </div>
          </div>
        </div>

        {/* Team Manager */}
        <div className="mb-16">
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-teal-400/20 to-blue-500/20 border border-teal-600/50 rounded-lg p-10 w-full sm:w-96 text-center shadow-md">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-teal-600 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">ON</span>
              </div>
              <h3 className="text-3xl font-bold text-teal-600 mb-2">Om Nisalkar</h3>
              <p className="text-gray-700 text-lg">Team Manager and Head of Drivetrain</p>
            </div>
          </div>
        </div>

        {/* Crew Sections */}
        {teams.map((team) => (
          <div key={team.name} className="mb-16">
            <h2 className="text-3xl font-bold text-teal-600 mb-8">{team.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {team.members.map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:border-teal-600/50 hover:bg-gray-50 transition-all duration-300 shadow-md"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-600/20 to-blue-500/20 rounded-full flex items-center justify-center border border-teal-600/30">
                    <span className="text-sm font-bold text-teal-600">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .substring(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  )
}

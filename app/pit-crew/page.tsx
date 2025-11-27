import Head from 'next/head'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Linkedin, Mail } from 'lucide-react'

export const metadata = {
  title: 'The Pit Crew - Team ETA',
  description: 'Meet the engineers behind the mileage',
}

const teamData = {
  core: {
    title: 'Core Team',
    members: [
      { 
        name: 'Mohd Suhail Shanavas', 
        role: 'Team Manager', 
        dept: 'Core',
        email: null,
        linkedin: null,
        isHead: true
      },
      { 
        name: 'Avanti Biswas', 
        role: 'Team Admin', 
        dept: 'Core',
        email: 'avanti.biswas@somaiya.edu',
        linkedin: 'https://www.linkedin.com/in/avanti-biswas-a13387278',
        isHead: true
      },
      { 
        name: 'Shubham Mishra', 
        role: 'Technical Coordinator', 
        dept: 'Core',
        email: 'shubham.mishra@somaiya.edu',
        linkedin: null,
        isHead: true
      }
    ]
  },
  teamMembers: {
    electronics: {
      title: 'Electronics Team',
      members: [
        { 
          name: 'Avanti Biswas', 
          role: 'Head', 
          dept: 'Electronics',
          email: 'avanti.biswas@somaiya.edu',
          linkedin: 'https://www.linkedin.com/in/avanti-biswas-a13387278',
          isHead: true
        },
        { 
          name: 'Shefali Govind', 
          role: 'Head', 
          dept: 'Electronics',
          email: 'shefali.govind@somaiya.edu',
          linkedin: 'http://www.linkedin.com/in/shefali-govind-123578273',
          isHead: true
        },
        { name: 'Aditya Chaugala', role: 'Member', dept: 'Electronics', email: 'aditya.chaugala@somaiya.edu', linkedin: 'http://www.linkedin.com/in/aditya-chaugala-683032321' },
        { name: 'Sukrut Patil', role: 'Member', dept: 'Electronics', email: 'sukrut.patil@somaiya.edu', linkedin: 'www.linkedin.com/in/sukrut-patil-78915a359' },
        { name: 'Jaanavee Tendulkar', role: 'Member', dept: 'Electronics', email: 'jaanavee.t@somaiya.edu', linkedin: 'https://www.linkedin.com/in/jaanavee-tendulkar-43684b312' },
        { name: 'Shivakshi Mishra', role: 'Member', dept: 'Electronics', email: 'shivakshi.m@somaiya.edu', linkedin: 'https://www.linkedin.com/in/shivakshi-mishra-710734391' },
        { name: 'Gargi Pawar', role: 'Member', dept: 'Electronics', email: null, linkedin: null },
        { name: 'Shubhra Sawant', role: 'Member', dept: 'Electronics', email: 'shubhra11@somaiya.edu', linkedin: 'https://www.linkedin.com/in/shubhra-sawant-451a1b382' },
        { name: 'Yash Garg', role: 'Member', dept: 'Electronics', email: 'yash.garg@somaiya.edu', linkedin: 'linkedin.com/in/yash-garg-7a3945383' },
        { name: 'Derrick Lewis', role: 'Member', dept: 'Electronics', email: 'derrick.l@somaiya.edu', linkedin: 'www.linkedin.com/in/derrick-lewis-264890375' },
        { name: 'Aryan Choudhary', role: 'Member', dept: 'Electronics', email: 'aryan.choudhary@somaiya.edu', linkedin: 'www.linkedin.com/in/aryan-choudhary-5827b8239' },
        { name: 'Devesh Kumar', role: 'Member', dept: 'Electronics', email: 'surendra.k@somaiya.edu', linkedin: 'https://www.linkedin.com/in/devesh-k-maurya' },
        { name: 'Adwait Parwekar', role: 'Member', dept: 'Electronics', email: 'adwait.parwekar@somaiya.edu', linkedin: 'https://www.linkedin.com/in/adwait-parwekar-540bb5395' }
      ]
    },
    vehicleDynamics: {
      title: 'Vehicle Dynamics Team',
      members: [
        { 
          name: 'Shubham Mishra', 
          role: 'Head', 
          dept: 'Vehicle Dynamics',
          email: 'shubham.mishra@somaiya.edu',
          linkedin: null,
          isHead: true
        },
        { name: 'Neev Keswani', role: 'Member', dept: 'Vehicle Dynamics', email: 'neev.keswani@somaiya.edu', linkedin: 'https://www.linkedin.com/in/neev-keswani-930169399' },
        { name: 'Manthan Belekar', role: 'Member', dept: 'Vehicle Dynamics', email: 'manthan.belekar@somaiya.edu', linkedin: 'https://www.linkedin.com/in/manthan-belekar-787a73310/' },
        { name: 'Rajat Tamboli', role: 'Member', dept: 'Vehicle Dynamics', email: 'rajat.tamboli@somaiya.edu', linkedin: 'https://www.linkedin.com/in/rajat-tamboli' },
        { name: 'Aditya Jawalkar', role: 'Member', dept: 'Vehicle Dynamics', email: 'aditya.jawalkar@somaiya.edu', linkedin: 'https://www.linkedin.com/in/aditya-jawalkar-76b230361/' },
        { name: 'Sanvi Raut', role: 'Member', dept: 'Vehicle Dynamics', email: 'sanvi.raut@somaiya.edu', linkedin: 'https://www.linkedin.com/in/SanviRaut' }
      ]
    },
    bodyworks: {
      title: 'Bodyworks Team',
      members: [
        { name: 'Aryan Dere', role: 'Head', dept: 'Bodyworks', email: 'aryan.dere@somaiya.edu', linkedin: null },
        { name: 'Yadnesh Kadam', role: 'Member', dept: 'Bodyworks', email: 'yadnesh.ak@somaiya.edu', linkedin: 'www.linkedin.com/in/yadneshkadam' },
        { name: 'Shreehari Karandikar', role: 'Member', dept: 'Bodyworks', email: 'shreehari.k@somaiya.edu', linkedin: 'https://www.linkedin.com/in/shreehari-karandikar-aa66a325b' },
        { name: 'Deepansh Mehra', role: 'Member', dept: 'Bodyworks', email: 'deepansh.mehra@somaiya.edu', linkedin: 'https://www.linkedin.com/in/deepansh-mehra-1a3513325/' }
      ]
    },
    autonomous: {
      title: 'Autonomous Team',
      members: [
        { 
          name: 'Ashvatth Joshi', 
          role: 'Head', 
          dept: 'Autonomous',
          email: 'ashvatth.j@somaiya.edu',
          linkedin: 'https://www.linkedin.com/in/ashvatth-joshi/',
          isHead: true
        },
        { 
          name: 'Samiksha Sharma', 
          role: 'Head', 
          dept: 'Autonomous',
          email: 'samiksha.sharma@somaiya.edu',
          linkedin: 'https://www.linkedin.com/in/samiksha-sharma2026',
          isHead: true
        },
        { name: 'Keshav Mallawat', role: 'Member', dept: 'Autonomous', email: 'keshav.mallawat@somaiya.edu', linkedin: 'https://www.linkedin.com/in/keshav-mallawat' },
        { name: 'Kritarth Shankar', role: 'Member', dept: 'Autonomous', email: 'kritarth.s@somaiya.edu', linkedin: 'https://www.linkedin.com/in/0ptr' },
        { name: 'Gandharva Ugale', role: 'Member', dept: 'Autonomous', email: 'gandharva.u@somaiya.edu', linkedin: 'https://www.linkedin.com/in/gandharvaugale/' },
        { name: 'Aswin Nambiar', role: 'Member', dept: 'Autonomous', email: 'aswin.nambiar@somaiya.edu', linkedin: 'www.linkedin.com/in/aswin-nambiar-67479b301' },
        { name: 'Ashish Kumar', role: 'Member', dept: 'Autonomous', email: 'ashish19@somaiya.edu', linkedin: 'https://www.linkedin.com/in/ashish-kumar-sentiashish/' },
        { name: 'Bhoumik Sangle', role: 'Member', dept: 'Autonomous', email: 'bhoumik.s@somaiya.edu', linkedin: null }
      ]
    },
    marketing: {
      title: 'Marketing Team',
      members: [
        { name: 'Tanishq Dhawrani', role: 'Head', dept: 'Marketing', email: 'tanishq.dhawrani@somaiya.edu', linkedin: 'https://www.linkedin.com/in/tanishqdhawrani' },
        { name: 'Aryan Gaikwad', role: 'Member', dept: 'Marketing', email: 'asg3@somaiya.edu', linkedin: 'https://www.linkedin.com/in/aryan-gaikwad-14a752328' },
        { name: 'Aayush Sawant', role: 'Member', dept: 'Marketing', email: 'as44@somaiya.edu', linkedin: 'https://www.linkedin.com/in/aayush-sawant' },
        { name: 'Ahinsa Bothra', role: 'Member', dept: 'Marketing', email: 'ahinsa.b@somaiya.edu', linkedin: 'https://www.linkedin.com/in/ahinsa-bothra' },
        { name: 'YUVRAJ MARWAHA', role: 'Member', dept: 'Marketing', email: 'yuvraj.marwaha@somaiya.edu', linkedin: 'https://www.linkedin.com/in/yuvraj-marwaha-323218328/' }
      ]
    },
    drivetrain: {
      title: 'Drivetrain Team',
      members: [
        { 
          name: 'Sidharth Sankar', 
          role: 'Head', 
          dept: 'Drivetrain',
          email: 'sidharth.sankar@somaiya.edu',
          linkedin: 'https://www.linkedin.com/in/sidharth-sankar-a07b04321',
          isHead: true
        },
        { 
          name: 'Sanat Phulkar', 
          role: 'Head', 
          dept: 'Drivetrain',
          email: 'sanat.phulkar@somiaya.edu',
          linkedin: 'www.linkedin.com/in/sanat-phulkar',
          isHead: true
        },
        { name: 'Eshaan Manamkeri', role: 'Member', dept: 'Drivetrain', email: 'eshaan.m@somaiya.edu', linkedin: null }
      ]
    }
  }
}

const formatName = (name) => {
  return name.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
};

const renderMemberCard = (member) => {
  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div
      key={member.name}
      className={`bg-white border rounded-lg p-6 hover:bg-gray-50 transition-all duration-300 shadow-md relative ${
        member.isHead 
          ? 'border-2 border-teal-500 hover:border-teal-600' 
          : 'border-gray-200 hover:border-teal-600/50'
      }`}
    >
      {member.isHead && (
        <div className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          Head
        </div>
      )}
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-600/20 to-blue-500/20 rounded-full flex items-center justify-center border border-teal-600/30">
        <span className="text-sm font-bold text-teal-600">
          {initials}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">
        {formatName(member.name)}
      </h3>
      <p className="text-gray-600 text-sm text-center mb-3">
        {member.role}
      </p>
      
      <div className="flex justify-center space-x-3 mt-3">
        {member.email && (
          <a 
            href={`mailto:${member.email}`} 
            className="text-gray-500 hover:text-teal-600 transition-colors"
            aria-label={`Email ${member.name}`}
          >
            <Mail className="w-4 h-4" />
          </a>
        )}
        {member.linkedin && (
          <a 
            href={member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#0A66C2] transition-colors"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default function PitCrewPage() {
  return (
    <main className="bg-white text-gray-900 pt-24">
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

        {/* Core Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-teal-600 mb-8">{teamData.core.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {teamData.core.members.map(member => renderMemberCard(member))}
          </div>
        </div>

        {/* Team Members */}
        {Object.values(teamData.teamMembers).map((team) => (
          <div key={team.title} className="mb-16">
            <h2 className="text-3xl font-bold text-teal-600 mb-8">{team.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {team.members.map(member => renderMemberCard(member))}
            </div>
          </div>
        ))}

        {/* Alumni Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-teal-600 mb-8 text-center">Our Alumni</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[/* Alumni Names */].map((name, idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors">
                  <div className="text-gray-800 font-medium">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  )
}

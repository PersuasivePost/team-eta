'use client'

import { useState } from 'react'
import Footer from '@/components/footer'
import { Mail, MapPin, Phone, Globe } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ fullName: '', email: '', subject: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactItems = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'K. J. Somaiya College of Engineering, Vidyanagar, Vidyavihar (East), Mumbai-400077, Maharashtra, India',
      delay: 'delay-100',
    },
    {
      icon: Phone,
      title: 'Team Manager',
      details: 'Ronak Gandhi: +91 8356008453',
      delay: 'delay-200',
    },
    {
      icon: Phone,
      title: 'Marketing',
      details: 'Daksh Khedekar: +91 9960584599',
      delay: 'delay-300',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'eta.engg@somaiya.edu',
      delay: 'delay-400',
    },
    {
      icon: Globe,
      title: 'Website',
      details: 'www.teameta.in',
      delay: 'delay-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 text-balance">
            CONNECT WITH THE
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
              CREW
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's Talk About the Future of Mobility
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                  <span className="h-1 w-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {contactItems.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div
                        key={index}
                        className={`animate-fade-in ${item.delay} transform transition-all duration-500 hover:translate-x-2 group cursor-pointer`}
                      >
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg text-white transform group-hover:scale-110 transition-transform duration-300">
                              <IconComponent size={20} />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-white font-semibold mb-1 text-sm uppercase tracking-wider">
                              {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {item.details}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
            <form
              onSubmit={handleSubmit}
              className="relative bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8 space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <span className="h-1 w-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
                Get In Touch
              </h2>

              {/* Full Name */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-300">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all duration-300 focus:shadow-lg focus:shadow-cyan-500/20"
                    required
                  />
                  {focusedField === 'fullName' && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 pointer-events-none animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all duration-300 focus:shadow-lg focus:shadow-cyan-500/20"
                    required
                  />
                  {focusedField === 'email' && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 pointer-events-none animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all duration-300 focus:shadow-lg focus:shadow-cyan-500/20"
                    required
                  />
                  {focusedField === 'subject' && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 pointer-events-none animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us more..."
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all duration-300 focus:shadow-lg focus:shadow-cyan-500/20 resize-none"
                    required
                  />
                  {focusedField === 'message' && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 pointer-events-none animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full relative group mt-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white text-center transform group-hover:scale-105 transition-transform duration-300">
                  {isSubmitted ? 'Message Sent! 🚀' : 'Send Message'}
                </div>
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-900/30 border border-green-500/50 rounded-lg animate-fade-in">
                  <p className="text-green-400 text-sm">
                    Thanks for reaching out! We'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

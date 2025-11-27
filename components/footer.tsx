import Link from 'next/link'
import { Linkedin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Mission */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">TEAM ETA</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Building fuel-efficient vehicles that challenge conventional automotive engineering and inspire eco-conscious innovation.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-garage" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Our Garage
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pit-crew" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Pit Crew
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/our-partners" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link href="/fuel-our-mission" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Fuel Our Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/team-eta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/team_eta_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#E1306C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://x.com/Team_ETA?s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  aria-hidden="true" 
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/weareeta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {currentYear} Team ETA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

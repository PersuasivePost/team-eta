'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shell Eco Marathon', href: '/shell-eco-marathon' },
  { label: 'Our Garage', href: '/our-garage' },
  { label: 'Blog', href: '/blog' },
  { label: 'Our Partners', href: '/our-partners' },
  { label: 'Fuel Our Mission', href: '/fuel-our-mission' },
  { label: 'Pit Crew', href: '/pit-crew' },
  { label: 'Alumni', href: '/alumni' }, // updated Alumni link to /alumni route
  { label: 'Contact', href: '/contact' }, // Updated Contact link from '#' to '/contact' route
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (href: string) => {
    // avoid reading location during server render to prevent hydration mismatch
    if (!mounted || !pathname) return false
    return pathname === href
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
            TEAM ETA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

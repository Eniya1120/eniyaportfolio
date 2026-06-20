'use client'

import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Internship', href: '#internship' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const mobileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      // Active section detection
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on outside click
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    if (mobileOpen) document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-[rgba(0,212,255,0.18)] shadow-[0_4px_20px_rgba(0,212,255,0.08)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="font-[Orbitron] font-bold text-base tracking-widest gradient-text focus:outline-none"
            aria-label="Go to top"
          >
            ENIYA<span className="neon-text">_</span>A
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-4" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link focus:outline-none px-2 xl:px-3 text-[11px] xl:text-xs 2xl:text-sm ${
                  activeSection === link.href.replace('#', '') ? 'active' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none group"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-[#00d4ff] transition-transform origin-center duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#00d4ff] transition-opacity duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#00d4ff] transition-transform origin-center duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileRef}
        className={`lg:hidden glass border-t border-[rgba(0,212,255,0.18)] overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-3" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`nav-link text-left py-1 focus:outline-none ${
                activeSection === link.href.replace('#', '') ? 'active' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

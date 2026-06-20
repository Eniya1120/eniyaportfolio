'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const TYPED_STRINGS = [
  'Artificial Intelligence Enthusiast',
  'Data Science Learner',
  'Future AI Engineer',
  'Web Developer',
  'Machine Learning Explorer',
  'Prompt Engineer',
]

function useTyped(strings: string[]) {
  const [display, setDisplay] = useState('')
  const [strIndex, setStrIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[strIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => setCharIndex((c) => c + 1), 55)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex((c) => c - 1), 28)
      } else {
        setDeleting(false)
        setStrIndex((s) => (s + 1) % strings.length)
      }
    }
    setDisplay(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, deleting, strIndex])

  return display
}

// Floating AI-themed icon labels around the profile
const FLOAT_ICONS = [
  { label: 'AI', top: '5%',  left: '-18%', delay: '0s',    dur: '4s',  color: '#00d4ff' },
  { label: 'ML', top: '60%', left: '-22%', delay: '-1.5s', dur: '5s',  color: '#a855f7' },
  { label: 'DS', top: '10%', left: '105%', delay: '-2.5s', dur: '6s',  color: '#00d4ff' },
  { label: 'PY', top: '65%', left: '108%', delay: '-0.8s', dur: '4.5s',color: '#a855f7' },
]

export default function Hero() {
  const typed = useTyped(TYPED_STRINGS)
  const ringRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Subtle tilt on mouse move
  useEffect(() => {
    const el = ringRef.current
    if (!el) return
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (window.innerWidth / 2)
      const dy = (e.clientY - cy) / (window.innerHeight / 2)
      el.style.transform = `rotateY(${dx * 10}deg) rotateX(${-dy * 10}deg)`
    }
    const reset = () => { el.style.transform = '' }
    window.addEventListener('mousemove', handle)
    window.addEventListener('mouseleave', reset)
    return () => {
      window.removeEventListener('mousemove', handle)
      window.removeEventListener('mouseleave', reset)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center grid-bg pt-16 overflow-hidden"
    >
      {/* Radial ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,212,255,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-40 h-40 pointer-events-none" aria-hidden="true">
        <div className="absolute top-6 left-0 w-16 h-px bg-gradient-to-r from-[#00d4ff] to-transparent" style={{ animation: 'expand-line 3s ease-in-out infinite' }} />
        <div className="absolute top-0 left-6 w-px h-16 bg-gradient-to-b from-[#00d4ff] to-transparent" style={{ animation: 'expand-line 3s ease-in-out infinite' }} />
      </div>
      <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none" aria-hidden="true">
        <div className="absolute top-6 right-0 w-16 h-px bg-gradient-to-l from-[#a855f7] to-transparent" style={{ animation: 'expand-line 3s ease-in-out infinite 0.5s' }} />
        <div className="absolute top-0 right-6 w-px h-16 bg-gradient-to-b from-[#a855f7] to-transparent" style={{ animation: 'expand-line 3s ease-in-out infinite 0.5s' }} />
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-6 left-0 w-16 h-px bg-gradient-to-r from-[#a855f7] to-transparent" style={{ animation: 'expand-line 3s ease-in-out infinite 1s' }} />
        <div className="absolute bottom-0 left-6 w-px h-16 bg-gradient-to-t from-[#a855f7] to-transparent" style={{ animation: 'expand-line 3s ease-in-out infinite 1s' }} />
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-6 right-0 w-16 h-px bg-gradient-to-l from-[#00d4ff] to-transparent" style={{ animation: 'expand-line 3s ease-in-out infinite 1.5s' }} />
        <div className="absolute bottom-0 right-6 w-px h-16 bg-gradient-to-t from-[#00d4ff] to-transparent" style={{ animation: 'expand-line 3s ease-in-out infinite 1.5s' }} />
      </div>

      {/* Animated hex grid dots */}
      {mounted && [
        { top: '20%', left: '5%',  size: 3, delay: '0s'    },
        { top: '45%', left: '2%',  size: 4, delay: '0.8s'  },
        { top: '75%', left: '8%',  size: 3, delay: '1.6s'  },
        { top: '15%', left: '92%', size: 4, delay: '0.4s'  },
        { top: '55%', left: '95%', size: 3, delay: '1.2s'  },
        { top: '80%', left: '90%', size: 4, delay: '2.0s'  },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: dot.top, left: dot.left,
            width: dot.size, height: dot.size,
            background: i % 2 === 0 ? '#00d4ff' : '#a855f7',
            animation: `star-twinkle 3s ease-in-out infinite`,
            animationDelay: dot.delay,
            boxShadow: `0 0 6px ${i % 2 === 0 ? '#00d4ff' : '#a855f7'}`,
          }}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* LEFT — text content */}
        <div
          className="flex-1 text-center lg:text-left order-2 lg:order-1"
          style={{ animation: 'slide-in-bottom 0.9s ease both' }}
        >
          {/* Hello World line with sweeping underline */}
          <div className="relative inline-block mb-4">
            <p
              className="neon-text font-[Orbitron] text-xs tracking-[0.3em] uppercase animate-neon-flicker"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              &lt; Hello World /&gt;
            </p>
            <div
              className="absolute bottom-0 left-0 h-px w-full"
              style={{
                background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
                animation: 'data-sweep 3s ease-in-out infinite',
              }}
              aria-hidden="true"
            />
          </div>

          <h1
            className="font-[Orbitron] font-black text-balance leading-none mb-4"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              animation: 'slide-in-bottom 1.0s ease both',
            }}
          >
            <span className="gradient-text animate-shimmer">ENIYA A</span>
          </h1>

          <p
            className="font-[Orbitron] font-semibold neon-text-purple text-balance mb-1"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 'clamp(0.75rem, 1.8vw, 1rem)',
              letterSpacing: '0.1em',
              animation: 'slide-in-bottom 1.1s ease both',
            }}
          >
            B.Tech Artificial Intelligence and Data Science (AI&amp;DS)
          </p>
          <p
            className="text-[#94a3b8] text-sm tracking-widest mb-8"
            style={{ fontFamily: "'Inter', sans-serif", animation: 'slide-in-bottom 1.2s ease both' }}
          >
            Bannari Amman Institute of Technology
          </p>

          {/* Typed text */}
          <div
            className="flex items-center justify-center lg:justify-start gap-2 mb-10 h-10 overflow-hidden"
            aria-live="polite"
            aria-label="Typing animation"
            style={{ animation: 'slide-in-bottom 1.3s ease both' }}
          >
            <span
              className="neon-text text-sm font-mono animate-neon-flicker"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {'> '}
            </span>
            <span
              className="text-[#e2eaf7] font-[JetBrains_Mono] text-sm tracking-wide animate-glow-wave"
              style={{ fontFamily: "'JetBrains Mono', monospace", minWidth: '1ch' }}
            >
              {typed}
            </span>
            <span className="typed-cursor" aria-hidden="true" />
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            style={{ animation: 'slide-in-bottom 1.4s ease both' }}
          >
            <a href="#contact" className="btn-neon-solid btn-pulse">
              Contact Me
            </a>
            <a href="#projects" className="btn-neon">
              View Projects
            </a>
          </div>

          {/* Social Icons */}
          <div
            className="flex gap-4 justify-center lg:justify-start flex-wrap"
            style={{ animation: 'slide-in-bottom 1.5s ease both' }}
          >
            {[
              {
                href: 'https://www.linkedin.com/in/eniya-a-8157a1355/',
                label: 'LinkedIn profile',
                external: true,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                href: 'https://github.com/Eniya1120',
                label: 'GitHub profile',
                external: true,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ),
              },
              {
                href: 'mailto:eniya1120@gmail.com',
                label: 'Send email',
                external: false,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
              },
              {
                href: 'tel:7339197734',
                label: 'Call Eniya',
                external: false,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.25 1.14 2 2 0 012.25 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="social-icon"
                aria-label={item.label}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — profile image */}
        <div
          className="flex-shrink-0 order-1 lg:order-2 flex items-center justify-center"
          style={{ animation: 'slide-in-bottom 0.8s ease both' }}
        >
          <div
            ref={ringRef}
            className="relative"
            style={{ perspective: '800px', transition: 'transform 0.3s ease' }}
          >
            {/* Floating AI-themed chips */}
            {FLOAT_ICONS.map((chip) => (
              <div
                key={chip.label}
                className="absolute pointer-events-none z-10 glass px-2 py-1 rounded-lg text-[10px] font-bold font-mono"
                style={{
                  top: chip.top,
                  left: chip.left,
                  color: chip.color,
                  border: `1px solid ${chip.color}40`,
                  boxShadow: `0 0 8px ${chip.color}60`,
                  animation: `float ${chip.dur} ease-in-out infinite`,
                  animationDelay: chip.delay,
                  fontFamily: "'JetBrains Mono', monospace",
                  whiteSpace: 'nowrap',
                }}
                aria-hidden="true"
              >
                {chip.label}
              </div>
            ))}

            {/* Rotating outer ring */}
            <div
              className="absolute inset-0 rounded-full animate-rotate-ring pointer-events-none"
              style={{
                background: 'conic-gradient(from 0deg, #00d4ff, #a855f7, #00d4ff)',
                padding: '2px',
                borderRadius: '50%',
                width: 'calc(100% + 16px)',
                height: 'calc(100% + 16px)',
                top: '-8px',
                left: '-8px',
                WebkitMaskImage: 'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
                maskImage: 'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
              }}
              aria-hidden="true"
            />

            {/* Second ring (slow reverse) */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                width: 'calc(100% + 36px)',
                height: 'calc(100% + 36px)',
                top: '-18px',
                left: '-18px',
                borderRadius: '50%',
                animation: 'rotate-ring 20s linear infinite reverse',
                borderTopColor: '#a855f7',
                borderRightColor: 'transparent',
                borderBottomColor: '#00d4ff',
                borderLeftColor: 'transparent',
                borderWidth: '1px',
                borderStyle: 'solid',
              }}
              aria-hidden="true"
            />

            {/* Third outer ring (dashed, slow) */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                border: '1px dashed rgba(168,85,247,0.25)',
                width: 'calc(100% + 64px)',
                height: 'calc(100% + 64px)',
                top: '-32px',
                left: '-32px',
                animation: 'rotate-ring 35s linear infinite',
              }}
              aria-hidden="true"
            />

            {/* Fourth outermost ring with ping ripple */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                border: '1px solid rgba(0,212,255,0.1)',
                width: 'calc(100% + 100px)',
                height: 'calc(100% + 100px)',
                top: '-50px',
                left: '-50px',
                animation: 'rotate-ring 55s linear infinite reverse',
              }}
              aria-hidden="true"
            />

            {/* Orbiting dots */}
            {([
              { delay: '0s',     size: 8, color: '#00d4ff', shadow: '0 0 10px #00d4ff, 0 0 20px rgba(0,212,255,0.5)', duration: '7s',  radius: 148 },
              { delay: '-1.75s', size: 6, color: '#a855f7', shadow: '0 0 10px #a855f7, 0 0 20px rgba(168,85,247,0.5)', duration: '7s', radius: 148 },
              { delay: '-3.5s',  size: 5, color: '#00d4ff', shadow: '0 0 8px #00d4ff',  duration: '7s',  radius: 148 },
              { delay: '-5.25s', size: 7, color: '#a855f7', shadow: '0 0 8px #a855f7',  duration: '7s',  radius: 148 },
              { delay: '-1s',    size: 5, color: '#22d3ee', shadow: '0 0 8px #22d3ee',  duration: '11s', radius: 172 },
              { delay: '-5s',    size: 4, color: '#60a5fa', shadow: '0 0 6px #60a5fa',  duration: '11s', radius: 172 },
            ] as const).map((dot, i) => (
              <div
                key={i}
                className="absolute pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  width: 0,
                  height: 0,
                  transformOrigin: '0 0',
                  animation: `orbit-spin ${dot.duration} linear infinite`,
                  animationDelay: dot.delay,
                }}
                aria-hidden="true"
              >
                <div
                  style={{
                    position: 'absolute',
                    top: `-${dot.radius}px`,
                    left: `-${dot.size / 2}px`,
                    width: `${dot.size}px`,
                    height: `${dot.size}px`,
                    borderRadius: '50%',
                    background: dot.color,
                    boxShadow: dot.shadow,
                  }}
                />
              </div>
            ))}

            {/* Profile image */}
            <div
              className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden animate-pulse-neon"
              style={{
                border: '2px solid rgba(0,212,255,0.5)',
                boxShadow: '0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(0,212,255,0.1), inset 0 0 20px rgba(0,212,255,0.05)',
              }}
            >
              <Image
                src="/images/profile.png"
                alt="ENIYA A — AI & Data Science Student"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 224px, 288px"
              />
              {/* Scan line effect */}
              <div
                className="absolute left-0 right-0 h-px bg-[rgba(0,212,255,0.5)]"
                style={{
                  animation: 'scan-line 3s linear infinite',
                  boxShadow: '0 0 10px #00d4ff, 0 0 20px rgba(0,212,255,0.3)',
                  zIndex: 2,
                }}
                aria-hidden="true"
              />
              {/* Holographic overlay shimmer */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.05) 0%, transparent 50%, rgba(168,85,247,0.05) 100%)',
                  animation: 'hologram-shift 6s ease-in-out infinite',
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-3 -right-4 glass neon-border px-3 py-1.5 text-xs font-[Orbitron] neon-text animate-float"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.65rem', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}
            >
              AI &amp; DS Student
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60" aria-hidden="true">
        <span className="text-[#94a3b8] text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll</span>
        <div className="scroll-arrow-group flex flex-col items-center gap-0.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 10,
                height: 10,
                borderRight: '2px solid #00d4ff',
                borderBottom: '2px solid #00d4ff',
                transform: 'rotate(45deg)',
                animation: 'scroll-chevron 1.5s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`,
                boxShadow: '2px 2px 4px rgba(0,212,255,0.4)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

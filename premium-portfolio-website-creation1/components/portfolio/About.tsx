'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  target: number
  suffix?: string
  label: string
  color?: 'cyan' | 'purple'
}

function AnimatedCounter({ target, suffix = '+', label, color = 'cyan' }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span
        className={`font-[Orbitron] font-black leading-none ${color === 'cyan' ? 'neon-text' : 'neon-text-purple'}`}
        style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
      >
        {count}{suffix}
      </span>
      <span className="text-[#94a3b8] text-xs tracking-widest uppercase text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
        {label}
      </span>
    </div>
  )
}

const TAGS = ['AI Enthusiast', 'ML Explorer', 'Problem Solver', 'Innovator', 'Data Scientist', 'Coder']

export default function About() {
  return (
    <section id="about" className="relative pt-24 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient glow blobs */}
      <div
        className="absolute left-1/4 top-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute right-10 bottom-10 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <p className="neon-text text-xs tracking-[0.3em] uppercase mb-3 font-[Orbitron]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Get to know me
          </p>
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="section-line mx-auto mt-3" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* LEFT — text */}
          <div className="flex-1 reveal-left">
            <div className="glass glass-hover neon-border p-8 rounded-2xl relative overflow-hidden">
              {/* Animated data-sweep line */}
              <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
                  animation: 'data-sweep 4s ease-in-out infinite',
                }}
                aria-hidden="true"
              />

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden" aria-hidden="true">
                <div className="absolute top-0 right-0 w-px h-16 bg-gradient-to-b from-[#00d4ff] to-transparent" />
                <div className="absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-[#00d4ff] to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden" aria-hidden="true">
                <div className="absolute bottom-0 left-0 w-px h-16 bg-gradient-to-t from-[#a855f7] to-transparent" />
                <div className="absolute bottom-0 left-0 w-16 h-px bg-gradient-to-r from-[#a855f7] to-transparent" />
              </div>

              <p
                className="neon-text text-xs tracking-[0.25em] uppercase mb-4 font-[Orbitron] animate-neon-flicker"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                 About
              </p>
              <p className="text-[#e2eaf7] leading-relaxed mb-5" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.8' }}>
                I am <span className="neon-text font-semibold animate-glow-pulse">ENIYA A</span>, currently pursuing my 3rd year B.Tech in
                Artificial Intelligence and Data Science at{' '}
                <span className="text-[#a855f7] font-medium">Bannari Amman Institute of Technology</span>.
              </p>
              <p className="text-[#94a3b8] leading-relaxed mb-5" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.8' }}>
                I am passionate about Artificial Intelligence, Machine Learning, Data Science, and Modern Software
                Development. I enjoy building innovative solutions, exploring emerging technologies, and solving
                real-world problems through AI-driven applications.
              </p>
              <p className="text-[#94a3b8] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.8' }}>
                My goal is to become a skilled{' '}
                <span className="gradient-text font-semibold">AI Engineer</span> and contribute to impactful
                technological advancements.
              </p>

              {/* Animated tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {TAGS.map((tag, i) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full border border-[rgba(0,212,255,0.25)] text-[#94a3b8] bg-[rgba(0,212,255,0.04)] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-300 cursor-default"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      animation: `fade-up-in 0.5s ease both`,
                      animationDelay: `${0.1 + i * 0.07}s`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — stats */}
          <div className="flex-shrink-0 reveal-right">
            <div className="grid grid-cols-2 gap-6">
              {[
                { target: 3, suffix: 'rd', label: 'Year B.Tech', color: 'cyan' as const },
                { target: 11, suffix: '+', label: 'Achievements', color: 'purple' as const },
                { target: 2, suffix: '+', label: 'Projects Built', color: 'purple' as const },
                { target: 1, suffix: '+', label: 'Internship', color: 'cyan' as const },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="glass glass-hover neon-border rounded-2xl p-6 flex flex-col items-center gap-2 min-w-[130px] relative overflow-hidden"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Ripple ping on corner */}
                  <div
                    className="absolute top-2 right-2 w-2 h-2 rounded-full"
                    style={{
                      background: stat.color === 'cyan' ? '#00d4ff' : '#a855f7',
                      animation: 'ping-expand 2s ease-out infinite',
                      animationDelay: `${i * 0.5}s`,
                    }}
                    aria-hidden="true"
                  />
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} label={stat.label} color={stat.color} />
                </div>
              ))}
            </div>

            {/* Info rows */}
            <div className="glass neon-border rounded-2xl p-6 mt-6 space-y-4 relative overflow-hidden">
              <div
                className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent, #a855f7, transparent)',
                  animation: 'data-sweep 5s ease-in-out infinite 2s',
                }}
                aria-hidden="true"
              />
              {[
                { label: 'Degree', value: 'B.Tech AI & DS' },
                { label: 'College', value: 'Bannari Amman Institute of Technology' },
                { label: 'Year', value: '3rd Year (2024–2028)' },
                { label: 'Email', value: 'eniyaashok2006@gmail.com' },
                { label: 'Phone', value: '+91 7339197734' },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className="flex gap-3 items-start"
                  style={{ animation: `fade-up-in 0.5s ease both`, animationDelay: `${0.05 + i * 0.08}s` }}
                >
                  <span className="neon-text text-xs mt-0.5 flex-shrink-0" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    ▸
                  </span>
                  <div>
                    <span className="text-[#94a3b8] text-xs uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {row.label}
                    </span>
                    <p className="text-[#e2eaf7] text-sm mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {row.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

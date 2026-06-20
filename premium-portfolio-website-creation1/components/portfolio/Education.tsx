'use client'

import { useEffect, useRef, useState } from 'react'

const ITEMS = [
  {
    degree: 'Bachelor of Technology (AI & DS)',
    years: '2024 – 2028',
    school: 'Bannari Amman Institute of Technology',
    detail: 'Specialization in Artificial Intelligence and Data Science',
    current: true,
  },
  {
    degree: 'Higher Secondary (HSC)',
    years: '2023 – 2024',
    school: 'Kongu Matric Hr. Sec. School',
    detail: 'Percentage: 93.5%',
    current: false,
  },
  {
    degree: 'Secondary School (SSLC)',
    years: '2021 – 2022',
    school: 'Kongu Matric Hr. Sec. School',
    detail: 'Percentage: 91%',
    current: false,
  },
]

function TimelineItem({ item, index }: { item: typeof ITEMS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 180)
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-40px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      {/* Animated timeline dot with ping */}
      <div className="absolute -left-5 top-5" aria-hidden="true">
        <div
          className="timeline-dot"
          style={{
            boxShadow: item.current
              ? '0 0 16px #00d4ff, 0 0 32px rgba(0,212,255,0.5)'
              : '0 0 10px #a855f7, 0 0 20px rgba(168,85,247,0.4)',
            background: item.current ? '#00d4ff' : '#a855f7',
          }}
        />
        {/* Ripple ping on current */}
        {item.current && (
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'rgba(0,212,255,0.3)',
              animation: 'ping-expand 2s ease-out infinite',
            }}
            aria-hidden="true"
          />
        )}
      </div>

      <div
        className={`glass glass-hover rounded-2xl p-6 ml-4 relative overflow-hidden ${item.current ? 'neon-border' : 'neon-border-purple'}`}
      >
        {/* Animated sweep line on top */}
        {item.current && (
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
              animation: 'data-sweep 4s ease-in-out infinite',
            }}
            aria-hidden="true"
          />
        )}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <h3
            className={`font-[Orbitron] font-bold text-balance ${item.current ? 'gradient-text animate-shimmer' : 'text-[#e2eaf7]'}`}
            style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
          >
            {item.degree}
          </h3>
          <span
            className={`text-xs px-3 py-1 rounded-full border flex-shrink-0 ${
              item.current
                ? 'border-[rgba(0,212,255,0.4)] text-[#00d4ff] bg-[rgba(0,212,255,0.06)]'
                : 'border-[rgba(168,85,247,0.4)] text-[#a855f7] bg-[rgba(168,85,247,0.06)]'
            }`}
            style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '0.1em' }}
          >
            {item.years}
          </span>
        </div>

        <p className="text-[#94a3b8] text-sm mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
          {item.school}
        </p>
        <p
          className={`text-xs font-semibold ${item.current ? 'neon-text' : 'neon-text-purple'}`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {item.detail}
        </p>

        {item.current && (
          <span
            className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#00d4ff]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span
              className="w-2 h-2 rounded-full bg-[#00d4ff] flex-shrink-0"
              style={{ animation: 'ping-expand 2s ease-out infinite' }}
              aria-hidden="true"
            />
            Currently Enrolled
          </span>
        )}
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className="relative pt-0 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute right-0 top-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute left-0 bottom-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <p className="neon-text text-xs tracking-[0.3em] uppercase mb-3 font-[Orbitron]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Academic journey
          </p>
          <h2 className="section-title gradient-text">Education</h2>
          <div className="section-line mx-auto mt-3" />
        </div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Animated vertical line */}
          <div
            className="timeline-line absolute left-3 top-2 bottom-4"
            style={{ animation: 'timeline-grow 1.5s ease forwards' }}
            aria-hidden="true"
          />

          <div className="space-y-10">
            {ITEMS.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

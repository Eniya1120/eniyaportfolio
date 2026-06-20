'use client'

import { useEffect, useRef, useState } from 'react'

const ACHIEVEMENTS = [
  {
    title: '3rd Place — National Level Hackathon',
    detail: 'AI-Powered Learning Platform for Deaf and Mute Students',
    date: 'Oct 2025',
    type: 'award',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    detail: 'Oracle Cloud Infrastructure Certification',
    date: '2025',
    type: 'cert',
  },
  {
    title: 'TN Skills 2025 — Cleared Level 1',
    detail: 'Participated and cleared Level 1 in TN Skills 2025',
    date: '2025',
    type: 'competition',
  },
  {
    title: 'EY Techathon 6.0 — Round 1',
    detail: 'Participated and cleared Round 1 of EY Techathon 6.0',
    date: '2025',
    type: 'competition',
  },
  {
    title: "INNOFEST'26 Poster Designing — RVSTCC",
    detail: 'Participated in Poster Designing Event at RVSTCC',
    date: '2026',
    type: 'competition',
  },
  {
    title: 'IEEE Xplore Online Training / Webinar',
    detail: 'Participated in IEEE Xplore Online Training/Webinar',
    date: '2025',
    type: 'training',
  },
  {
    title: 'AI Fundamentals — IBM SkillsBuild via Cisco',
    detail: 'Completed AI Fundamentals with IBM SkillsBuild through Cisco Networking Academy',
    date: '2025',
    type: 'cert',
  },
  {
    title: 'Winner — Leadership Activity at BIT',
    detail: 'Winner of Leadership Activity at Bannari Amman Institute of Technology',
    date: '2025',
    type: 'award',
  },
  {
    title: 'HP Power Lab 2.0 — Round 1 Assessment',
    detail: 'Participated in HP Power Lab 2.0 Round 1 Assessment',
    date: '2025',
    type: 'competition',
  },
  {
    title: 'Ethical Hacker Course — Cisco Networking Academy',
    detail: 'Completed Ethical Hacker Course through Cisco Networking Academy',
    date: '2025',
    type: 'cert',
  },
  {
    title: 'HTML Essentials — Cisco Networking Academy',
    detail: 'Completed HTML Essentials through Cisco Networking Academy',
    date: '2025',
    type: 'cert',
  },
]

const TYPE_COLORS: Record<string, { border: string; text: string; bg: string; label: string; glow: string }> = {
  award:       { border: 'rgba(0,212,255,0.45)',   text: '#00d4ff', bg: 'rgba(0,212,255,0.06)',   label: 'Award',       glow: '0 0 16px rgba(0,212,255,0.3)' },
  cert:        { border: 'rgba(168,85,247,0.45)',  text: '#a855f7', bg: 'rgba(168,85,247,0.06)',  label: 'Certification',glow: '0 0 16px rgba(168,85,247,0.3)' },
  competition: { border: 'rgba(96,165,250,0.45)',  text: '#60a5fa', bg: 'rgba(96,165,250,0.06)',  label: 'Competition',  glow: '0 0 16px rgba(96,165,250,0.3)' },
  training:    { border: 'rgba(34,211,238,0.45)',  text: '#22d3ee', bg: 'rgba(34,211,238,0.06)',  label: 'Training',     glow: '0 0 16px rgba(34,211,238,0.3)' },
}

const TYPE_ICONS: Record<string, string> = {
  award: '★',
  cert: '◈',
  competition: '◆',
  training: '▲',
}

function AchievementCard({ item, index }: { item: typeof ACHIEVEMENTS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), (index % 3) * 100)
          io.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [index])

  const style = TYPE_COLORS[item.type]

  return (
    <div
      ref={ref}
      className="glass glass-hover rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden cursor-default group"
      style={{
        border: `1px solid ${style.border}`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.94)',
        transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s, border-color 0.3s',
      }}
    >
      {/* Hover glow top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${style.text}, transparent)` }}
        aria-hidden="true"
      />

      <div className="flex items-start gap-3">
        {/* Animated icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
          style={{
            background: style.bg,
            border: `1px solid ${style.border}`,
            color: style.text,
            animation: `trophy-bounce 3s ease-in-out infinite`,
            animationDelay: `${index * 0.25}s`,
            boxShadow: visible ? style.glow : 'none',
          }}
          aria-hidden="true"
        >
          {TYPE_ICONS[item.type]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: style.bg,
                border: `1px solid ${style.border}`,
                color: style.text,
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '0.6rem',
                letterSpacing: '0.08em',
              }}
            >
              {style.label}
            </span>
            <span className="text-[#4a5a70] text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              {item.date}
            </span>
          </div>
          <h3
            className="text-[#e2eaf7] font-semibold text-sm leading-snug text-balance"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {item.title}
          </h3>
        </div>
      </div>
      <p className="text-[#94a3b8] text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
        {item.detail}
      </p>
    </div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute left-1/3 top-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <p className="neon-text text-xs tracking-[0.3em] uppercase mb-3 font-[Orbitron]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Milestones
          </p>
          <h2 className="section-title gradient-text">Achievements</h2>
          <div className="section-line mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((item, i) => (
            <AchievementCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'

interface Skill {
  name: string
  level: number
}

interface Category {
  title: string
  icon: string
  color: 'cyan' | 'purple'
  skills: Skill[]
}

const CATEGORIES: Category[] = [
  {
    title: 'Programming',
    icon: '</>',
    color: 'cyan',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C Programming', level: 75 },
      { name: 'Java', level: 70 },
    ],
  },
  {
    title: 'Frontend',
    icon: '[ ]',
    color: 'purple',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 82 },
      { name: 'React', level: 68 },
    ],
  },
  {
    title: 'AI & Data Science',
    icon: '{ }',
    color: 'cyan',
    skills: [
      { name: 'Artificial Intelligence', level: 78 },
      { name: 'Machine Learning', level: 72 },
      { name: 'Data Science Basics', level: 75 },
    ],
  },
  {
    title: 'Development',
    icon: '##',
    color: 'purple',
    skills: [
      { name: 'Web Development', level: 80 },
      { name: 'Problem Solving', level: 88 },
      { name: 'Prompt Engineering', level: 85 },
    ],
  },
]

function SkillBar({ name, level, color }: { name: string; level: number; color: 'cyan' | 'purple' }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          io.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const fillColor =
    color === 'cyan'
      ? 'linear-gradient(90deg, #00d4ff, #22d3ee)'
      : 'linear-gradient(90deg, #a855f7, #7c3aed)'
  const glowColor = color === 'cyan' ? 'rgba(0,212,255,0.5)' : 'rgba(168,85,247,0.5)'

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[#e2eaf7] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          {name}
        </span>
        <span
          className={`text-xs font-semibold ${color === 'cyan' ? 'neon-text' : 'neon-text-purple'}`}
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: animated ? `${level}%` : '0%',
            background: fillColor,
            boxShadow: animated ? `0 0 8px ${glowColor}` : 'none',
          }}
        />
      </div>
    </div>
  )
}

function SkillCard({ cat, index }: { cat: Category; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120)
          io.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className={`glass glass-hover rounded-2xl p-6 relative overflow-hidden group ${cat.color === 'cyan' ? 'neon-border' : 'neon-border-purple'}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.92)',
        transition: 'opacity 0.65s ease, transform 0.65s ease',
      }}
    >
      {/* Top sweep on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: `linear-gradient(90deg, transparent, ${cat.color === 'cyan' ? '#00d4ff' : '#a855f7'}, transparent)`,
        }}
        aria-hidden="true"
      />

      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className={`text-base font-bold font-mono ${cat.color === 'cyan' ? 'neon-text animate-neon-flicker' : 'neon-text-purple'}`}
          aria-hidden="true"
        >
          {cat.icon}
        </span>
        <h3
          className="font-[Orbitron] font-bold text-sm tracking-wider text-[#e2eaf7]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {cat.title}
        </h3>
      </div>

      {/* Skill bars */}
      <div>
        {cat.skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} color={cat.color} />
        ))}
      </div>
    </div>
  )
}

const TECH_BADGES = [
  'Python', 'Java', 'C', 'HTML5', 'CSS3', 'React', 'JavaScript',
  'Machine Learning', 'AI', 'Data Science', 'Bootstrap', 'Git',
  'Prompt Engineering', 'LLMs',
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute left-0 top-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <p className="neon-text text-xs tracking-[0.3em] uppercase mb-3 font-[Orbitron]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            What I know
          </p>
          <h2 className="section-title gradient-text">Skills</h2>
          <div className="section-line mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>

        {/* Tech badges row with staggered entrance */}
        <div className="mt-12 reveal">
          <p className="text-center text-[#94a3b8] text-xs tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Technologies &amp; Tools
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_BADGES.map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-xs rounded-full border border-[rgba(0,212,255,0.2)] text-[#94a3b8] bg-[rgba(0,212,255,0.04)] hover:border-[#00d4ff] hover:text-[#00d4ff] hover:bg-[rgba(0,212,255,0.08)] hover:shadow-[0_0_12px_rgba(0,212,255,0.3)] transition-all duration-200 cursor-default"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  animation: `fade-up-in 0.5s ease both`,
                  animationDelay: `${0.05 + i * 0.06}s`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

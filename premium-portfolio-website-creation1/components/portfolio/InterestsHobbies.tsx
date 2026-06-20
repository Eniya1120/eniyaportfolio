const INTERESTS = [
  {
    label: 'Artificial Intelligence',
    desc: 'Building intelligent systems that learn and adapt',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
        <circle cx="7.5" cy="14.5" r="1.5" /><circle cx="16.5" cy="14.5" r="1.5" />
      </svg>
    ),
  },
  {
    label: 'Machine Learning',
    desc: 'Training models to uncover patterns and insights',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    label: 'Data Analysis',
    desc: 'Transforming raw data into actionable insights',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="2" /><path d="M7 10v4m5-6v10m5-8v4" />
      </svg>
    ),
  },
  {
    label: 'Data Science',
    desc: 'Extracting knowledge from complex datasets',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: 'Web Development',
    desc: 'Building responsive and modern web experiences',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: 'New Technologies',
    desc: 'Staying ahead of the tech curve and innovating',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
]

const HOBBIES = [
  {
    label: 'Drawing',
    desc: 'Expressing creativity through art',
    color: 'cyan',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    label: 'Throw Ball',
    desc: 'Team sport and competitive spirit',
    color: 'purple',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M4.93 4.93c4.08 4.08 10.16 4.08 14.24 0" /><path d="M4.93 19.07c4.08-4.08 10.16-4.08 14.24 0" /><line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    label: 'Gardening',
    desc: 'Nurturing growth and connecting with nature',
    color: 'cyan',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22V12M12 12C12 7 7 2 2 2c0 5 3 8.5 6 10.5" /><path d="M12 12c0-5 5-10 10-10-1 5-4 8.5-10 10.5" />
      </svg>
    ),
  },
  {
    label: 'Badminton',
    desc: 'Agility, focus, and competitive fun',
    color: 'purple',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6.5 6.5l11 11" /><path d="M6.5 17.5l11-11" /><circle cx="12" cy="5" r="2" />
      </svg>
    ),
  },
]

export default function InterestsHobbies() {
  return (
    <>
      {/* Interests */}
      <section id="interests" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div
          className="absolute left-0 bottom-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="neon-text text-xs tracking-[0.3em] uppercase mb-3 font-[Orbitron]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              What drives me
            </p>
            <h2 className="section-title gradient-text">Interests</h2>
            <div className="section-line mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INTERESTS.map((item, i) => (
              <div
                key={item.label}
                className="glass glass-hover neon-border rounded-2xl p-6 flex gap-4 items-start reveal"
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-[#00d4ff]"
                  style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    className="text-[#e2eaf7] font-semibold mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section id="hobbies" className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="neon-text text-xs tracking-[0.3em] uppercase mb-3 font-[Orbitron]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Beyond the screen
            </p>
            <h2 className="section-title gradient-text">Hobbies</h2>
            <div className="section-line mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {HOBBIES.map((item, i) => (
              <div
                key={item.label}
                className={`glass glass-hover rounded-2xl p-6 flex flex-col items-center gap-4 text-center reveal ${
                  item.color === 'cyan' ? 'neon-border' : 'neon-border-purple'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center animate-float ${
                    item.color === 'cyan' ? 'text-[#00d4ff]' : 'text-[#a855f7]'
                  }`}
                  style={{
                    background: item.color === 'cyan' ? 'rgba(0,212,255,0.08)' : 'rgba(168,85,247,0.08)',
                    border: item.color === 'cyan' ? '1px solid rgba(0,212,255,0.2)' : '1px solid rgba(168,85,247,0.2)',
                    animationDelay: `${i * 0.5}s`,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    className={`font-[Orbitron] font-bold text-sm ${item.color === 'cyan' ? 'text-[#e2eaf7]' : 'text-[#e2eaf7]'}`}
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-[#94a3b8] text-xs mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

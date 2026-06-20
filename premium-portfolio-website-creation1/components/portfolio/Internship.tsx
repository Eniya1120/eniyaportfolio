export default function Internship() {
  const skills = [
    'Large Language Models (LLMs)',
    'Prompt Engineering',
    'AI Automation',
    'Real-Time AI Projects',
    'Research & Innovation',
  ]

  return (
    <section id="internship" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute right-1/4 top-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <p className="neon-text text-xs tracking-[0.3em] uppercase mb-3 font-[Orbitron]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Work Experience
          </p>
          <h2 className="section-title gradient-text">Internship</h2>
          <div className="section-line mx-auto mt-3" />
        </div>

        {/* Card */}
        <div className="glass glass-hover neon-border rounded-2xl overflow-hidden reveal">
          {/* Top banner */}
          <div
            className="h-1.5 w-full"
            style={{ background: 'linear-gradient(90deg, #00d4ff, #a855f7, #00d4ff)' }}
            aria-hidden="true"
          />

          <div className="p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
              <div>
                <span
                  className="neon-text text-xs tracking-[0.3em] uppercase block mb-2"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  // internship
                </span>
                <h3
                  className="gradient-text font-[Orbitron] font-black text-balance"
                  style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
                >
                  Generative AI Research &amp; Innovation Intern
                </h3>
                <div className="flex items-center gap-3 mt-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold neon-text"
                    style={{
                      background: 'rgba(0,212,255,0.08)',
                      border: '1px solid rgba(0,212,255,0.3)',
                      fontFamily: "'Orbitron', sans-serif",
                    }}
                    aria-hidden="true"
                  >
                    NS
                  </div>
                  <div>
                    <p
                      className="text-[#e2eaf7] font-semibold text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Novus Solutions
                    </p>
                    <p className="text-[#94a3b8] text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Generative AI Division
                    </p>
                  </div>
                </div>
              </div>

              <span
                className="self-start text-xs px-4 py-2 rounded-full border border-[rgba(0,212,255,0.35)] text-[#00d4ff] bg-[rgba(0,212,255,0.06)] whitespace-nowrap"
                style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '0.06em' }}
              >
                Completed
              </span>
            </div>

            <p className="text-[#94a3b8] leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.8' }}>
              Successfully completed a Generative AI Research &amp; Innovation Internship at Novus Solutions, gaining
              practical hands-on experience in cutting-edge AI technologies. Worked on real-time AI projects, explored
              advanced LLM capabilities, and contributed to research and innovation initiatives.
            </p>

            {/* Skills gained */}
            <div>
              <p
                className="text-[#e2eaf7] text-xs uppercase tracking-widest mb-4 font-semibold"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Key Skills Gained
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, i) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
                    style={{
                      background: 'rgba(0,212,255,0.04)',
                      border: '1px solid rgba(0,212,255,0.15)',
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#00d4ff', boxShadow: '0 0 6px #00d4ff' }}
                      aria-hidden="true"
                    />
                    <span className="text-[#e2eaf7] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

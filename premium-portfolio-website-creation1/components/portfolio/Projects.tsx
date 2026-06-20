const PROJECTS = [
  {
    id: 1,
    title: 'AI-Powered Learning Platform for Deaf and Mute Students',
    subtitle: 'Inclusive AI Education',
    description:
      'Developed an inclusive AI platform using Indian Sign Language (ISL) to make learning accessible for deaf and mute students. Built real-time translation systems and interactive dashboards for students, teachers, and parents.',
    features: [
      'Text-to-Sign Translation',
      'Speech-to-Sign Translation',
      '3D Animated Avatars',
      'Real-Time Chat',
      'Student Dashboard',
      'Teacher Dashboard',
      'Parent Dashboard',
    ],
    tech: ['AI', 'Machine Learning', 'ISL Processing', 'Web Development'],
    color: 'cyan' as const,
    badge: '3rd Place — National Hackathon',
    number: '01',
  },
  {
    id: 2,
    title: 'Portfolio Development',
    subtitle: 'Single Page Application',
    description:
      'Created a responsive Single Page Application portfolio website showcasing projects, skills, and achievements with modern design principles and smooth UX.',
    features: [
      'Smooth Navigation',
      'Fast Performance',
      'Modern UI/UX',
      'Responsive Design',
    ],
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    color: 'purple' as const,
    badge: 'Personal Project',
    number: '02',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute right-0 bottom-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <p className="neon-text text-xs tracking-[0.3em] uppercase mb-3 font-[Orbitron]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            What I&apos;ve built
          </p>
          <h2 className="section-title gradient-text">Projects</h2>
          <div className="section-line mx-auto mt-3" />
        </div>

        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className={`glass glass-hover rounded-2xl overflow-hidden reveal ${project.color === 'cyan' ? 'neon-border' : 'neon-border-purple'}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Number accent */}
                <div
                  className={`flex-shrink-0 flex items-center justify-center px-8 py-10 lg:py-0 ${
                    project.color === 'cyan'
                      ? 'bg-[rgba(0,212,255,0.04)] border-b lg:border-b-0 lg:border-r border-[rgba(0,212,255,0.12)]'
                      : 'bg-[rgba(168,85,247,0.04)] border-b lg:border-b-0 lg:border-r border-[rgba(168,85,247,0.12)]'
                  }`}
                >
                  <span
                    className={`font-[Orbitron] font-black select-none ${project.color === 'cyan' ? 'gradient-text' : 'gradient-text-reverse'}`}
                    style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1, opacity: 0.4 }}
                    aria-hidden="true"
                  >
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <div className="flex flex-wrap gap-3 items-start justify-between mb-4">
                    <div>
                      <span
                        className={`text-xs tracking-widest uppercase mb-2 block ${project.color === 'cyan' ? 'neon-text' : 'neon-text-purple'}`}
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                      >
                        {project.subtitle}
                      </span>
                      <h3
                        className="text-[#e2eaf7] font-[Orbitron] font-bold text-balance"
                        style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full flex-shrink-0 ${
                        project.color === 'cyan'
                          ? 'border border-[rgba(0,212,255,0.35)] text-[#00d4ff] bg-[rgba(0,212,255,0.07)]'
                          : 'border border-[rgba(168,85,247,0.35)] text-[#a855f7] bg-[rgba(168,85,247,0.07)]'
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  <p className="text-[#94a3b8] mb-5 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.7' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Features */}
                    <div className="flex-1">
                      <p className="text-[#e2eaf7] text-xs uppercase tracking-widest mb-3 font-semibold" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        Features
                      </p>
                      <ul className="space-y-1.5">
                        {project.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-[#94a3b8] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <span className={project.color === 'cyan' ? 'neon-text' : 'neon-text-purple'} aria-hidden="true">▸</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech */}
                    <div>
                      <p className="text-[#e2eaf7] text-xs uppercase tracking-widest mb-3 font-semibold" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className={`px-3 py-1 rounded text-xs ${
                              project.color === 'cyan'
                                ? 'border border-[rgba(0,212,255,0.25)] text-[#00d4ff] bg-[rgba(0,212,255,0.05)]'
                                : 'border border-[rgba(168,85,247,0.25)] text-[#a855f7] bg-[rgba(168,85,247,0.05)]'
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

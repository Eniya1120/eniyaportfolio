import About from '@/components/portfolio/About'
import Achievements from '@/components/portfolio/Achievements'
import ClientEffects from '@/components/portfolio/ClientEffects'
import Contact from '@/components/portfolio/Contact'
import Education from '@/components/portfolio/Education'
import Footer from '@/components/portfolio/Footer'
import Hero from '@/components/portfolio/Hero'
import InterestsHobbies from '@/components/portfolio/InterestsHobbies'
import Internship from '@/components/portfolio/Internship'
import Navbar from '@/components/portfolio/Navbar'
import ParticleCanvas from '@/components/portfolio/ParticleCanvas'
import Projects from '@/components/portfolio/Projects'
import Skills from '@/components/portfolio/Skills'

export default function Page() {
  return (
    <div className="relative min-h-screen" style={{ background: '#050a14' }}>
      {/* Global particle background */}
      <ParticleCanvas />

      {/* Scroll progress + cursor + loading */}
      <ClientEffects />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Internship />
        <InterestsHobbies />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

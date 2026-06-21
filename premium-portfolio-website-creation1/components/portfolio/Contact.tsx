'use client'

import { FormEvent, useState } from 'react'

const CONTACT_CARDS = [
  {
    label: 'Phone',
    value: '+91 7339197734',
    href: 'tel:7339197734',
    color: 'cyan',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.25 1.14 2 2 0 012.25 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'eniya1120@gmail.com',
    href: 'mailto:eniya1120@gmail.com',
    color: 'purple',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'eniya-a-8157a1355',
    href: 'https://www.linkedin.com/in/eniya-a-8157a1355/',
    color: 'cyan',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'Eniya1120',
    href: 'https://github.com/Eniya1120',
    color: 'purple',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', college: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch('https://formsubmit.co/ajax/eniya1120@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          college: form.college,
          message: form.message,
          _subject: `Portfolio Contact from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setSubmitted(true)
        setForm({ name: '', email: '', phone: '', college: '', message: '' })
      } else {
        throw new Error('FormSubmit returned failure')
      }
    } catch {
      // Graceful fallback — open pre-filled email client
      const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCollege: ${form.college}\n\nMessage:\n${form.message}`
      )
      window.location.href = `mailto:eniya1120@gmail.com?subject=${subject}&body=${body}`
      setSubmitted(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 80%, rgba(0,212,255,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <p className="neon-text text-xs tracking-[0.3em] uppercase mb-3 font-[Orbitron]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Get in touch
          </p>
          <h2 className="section-title gradient-text">Contact ENIYA A</h2>
          <div className="section-line mx-auto mt-3" />
          <p className="text-[#94a3b8] mt-5 max-w-md mx-auto text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            I&apos;m always open to new opportunities, collaborations, and conversations. Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT — contact cards */}
          <div className="lg:w-80 flex flex-col gap-5 reveal-left">
            {CONTACT_CARDS.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`glass glass-hover rounded-2xl p-5 flex items-center gap-4 no-underline ${
                  card.color === 'cyan' ? 'neon-border' : 'neon-border-purple'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    card.color === 'cyan' ? 'text-[#00d4ff]' : 'text-[#a855f7]'
                  }`}
                  style={{
                    background: card.color === 'cyan' ? 'rgba(0,212,255,0.08)' : 'rgba(168,85,247,0.08)',
                    border: card.color === 'cyan' ? '1px solid rgba(0,212,255,0.2)' : '1px solid rgba(168,85,247,0.2)',
                  }}
                >
                  {card.icon}
                </div>
                <div className="min-w-0">
                  <p
                    className={`text-xs uppercase tracking-widest mb-0.5 ${card.color === 'cyan' ? 'neon-text' : 'neon-text-purple'}`}
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {card.label}
                  </p>
                  <p className="text-[#e2eaf7] text-sm truncate" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {card.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Availability badge */}
            <div className="glass neon-border rounded-2xl p-5 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full bg-[#00d4ff] flex-shrink-0"
                  style={{ animation: 'pulse-neon 2s infinite' }}
                  aria-hidden="true"
                />
                <span className="neon-text text-xs tracking-widest uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  Available for
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Internships', 'Collaborations', 'Projects', 'Learning'].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2 py-1 rounded border border-[rgba(0,212,255,0.2)] text-[#94a3b8] bg-[rgba(0,212,255,0.04)]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="flex-1 reveal-right">
            <div className="glass neon-border rounded-2xl p-8 h-full">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-6 py-12">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(0,212,255,0.1)', border: '2px solid #00d4ff', boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}
                    aria-hidden="true"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="gradient-text font-[Orbitron] font-bold text-xl mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                      Message Sent!
                    </h3>
                    <p className="text-[#94a3b8] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Your message has been sent directly to eniya1120@gmail.com. I&apos;ll get back to you soon!
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-neon text-sm"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <p
                    className="neon-text text-xs tracking-[0.25em] uppercase mb-6"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    // send message
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-[#94a3b8] text-xs uppercase tracking-widest mb-1.5" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="form-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-[#94a3b8] text-xs uppercase tracking-widest mb-1.5" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="form-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-[#94a3b8] text-xs uppercase tracking-widest mb-1.5" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 xxxxxxxxxx"
                        className="form-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-college" className="block text-[#94a3b8] text-xs uppercase tracking-widest mb-1.5" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        College / Organization
                      </label>
                      <input
                        id="contact-college"
                        name="college"
                        type="text"
                        value={form.college}
                        onChange={handleChange}
                        placeholder="Your institution"
                        className="form-field"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="contact-message" className="block text-[#94a3b8] text-xs uppercase tracking-widest mb-1.5" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      className="form-field resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-neon-solid w-full justify-center" disabled={sending}>
                    {sending ? 'Opening email...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

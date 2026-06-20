'use client'

import { useEffect, useRef, useState } from 'react'

/* Scroll progress bar + custom cursor + loading screen */
export default function ClientEffects() {
  const [loadingDone, setLoadingDone] = useState(false)
  const [progress, setProgress] = useState(0)
  const cursorDot = useRef<HTMLDivElement>(null)
  const cursorRing = useRef<HTMLDivElement>(null)

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => setLoadingDone(true), 2400)
    return () => clearTimeout(timer)
  }, [])

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop / (el.scrollHeight - el.clientHeight)
      setProgress(scrolled * 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Custom cursor
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorDot.current) {
        cursorDot.current.style.left = `${e.clientX}px`
        cursorDot.current.style.top = `${e.clientY}px`
      }
      if (cursorRing.current) {
        cursorRing.current.style.left = `${e.clientX}px`
        cursorRing.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  // Scroll reveal via IntersectionObserver
  useEffect(() => {
    if (!loadingDone) return
    const observe = (selector: string) => {
      const els = document.querySelectorAll(selector)
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.12 }
      )
      els.forEach((el) => io.observe(el))
      return io
    }
    const ios = [
      observe('.reveal'),
      observe('.reveal-left'),
      observe('.reveal-right'),
    ]
    return () => ios.forEach((io) => io.disconnect())
  }, [loadingDone])

  return (
    <>
      {/* Loading screen */}
      <div className={`loading-screen${loadingDone ? ' hidden' : ''}`} aria-hidden="true">
        <p
          className="section-title gradient-text text-2xl tracking-widest"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          ENIYA A
        </p>
        <p className="text-[#94a3b8] text-xs tracking-[0.3em] mt-2 uppercase">
          AI &amp; Data Science
        </p>
        <div className="loading-bar-track">
          <div className="loading-bar-fill" />
        </div>
      </div>

      {/* Scroll progress */}
      <div
        id="scroll-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      {/* Custom cursor (desktop only) */}
      <div ref={cursorDot} className="cursor-dot hidden md:block" aria-hidden="true" />
      <div ref={cursorRing} className="cursor-ring hidden md:block" aria-hidden="true" />
    </>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ENIYA A | AI & Data Science Portfolio',
  description:
    'Portfolio of ENIYA A — B.Tech AI & Data Science student at Bannari Amman Institute of Technology. Passionate about Artificial Intelligence, Machine Learning, and modern software development.',
  keywords: [
    'ENIYA A',
    'AI Engineer',
    'Data Science',
    'Machine Learning',
    'Bannari Amman Institute of Technology',
    'Portfolio',
    'Artificial Intelligence',
  ],
  authors: [{ name: 'ENIYA A' }],
  openGraph: {
    title: 'ENIYA A | AI & Data Science Portfolio',
    description:
      'Explore the portfolio of ENIYA A — B.Tech AI & Data Science student passionate about AI, ML, and innovative tech.',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/images/profile.png', width: 800, height: 800, alt: 'ENIYA A' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENIYA A | AI & Data Science Portfolio',
    description: 'Portfolio of ENIYA A — B.Tech AI & Data Science student.',
    images: ['/images/profile.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#00d4ff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-[#050a14]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import BrowserFrame from '@/components/shared/BrowserFrame'

const slides = [
  { tab: 'Distribution',  name: 'FMCG Distribution CRM', image: '/screens/fmcg-crm.webp',          demo: 'https://fmcg-pro-crm.vercel.app/login', host: 'fmcg-pro-crm.vercel.app' },
  { tab: 'Textile',       name: 'Textile Pro CRM',       image: '/screens/textile-pro-crm.webp',   demo: 'https://textile-pro-crm.vercel.app',     host: 'textile-pro-crm.vercel.app' },
  { tab: 'Education',     name: 'Academy+',              image: '/screens/academy-plus.webp',      demo: 'https://academyplus.app',                host: 'academyplus.app' },
  { tab: 'Car rental',    name: 'Cars OS',               image: '/screens/cars-os.webp',           demo: 'https://cars-os-six.vercel.app/demo',    host: 'cars-os-six.vercel.app/demo' },
  { tab: 'Trading',       name: 'Trade OS',              image: '/screens/trade-os.webp',          demo: 'https://sims-demo-neon.vercel.app',      host: 'sims-demo-neon.vercel.app' },
]

const INTERVAL_MS = 4500

export default function HeroShowcase() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused])

  const current = slides[active]

  return (
    <div
      className="hero-showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      style={{ position: 'relative', width: '100%' }}
    >
      <div aria-hidden="true" style={{
        position: 'absolute', inset: '-12% -8%', pointerEvents: 'none',
        background: 'radial-gradient(closest-side, rgba(123,94,167,0.35), transparent 70%), radial-gradient(closest-side at 80% 85%, rgba(245,197,24,0.16), transparent 70%)',
      }} />

      <div className="hero-tilt" style={{ position: 'relative' }}>
        <BrowserFrame url={current.host}>
          {slides.map((s, i) => (
            <Image
              key={s.name}
              src={s.image}
              alt={`${s.name} dashboard`}
              fill
              priority={i === 0}
              sizes="(max-width: 768px) 92vw, 560px"
              style={{
                objectFit: 'cover', objectPosition: 'top',
                opacity: i === active ? 1 : 0, transition: 'opacity 0.7s ease',
              }}
            />
          ))}
        </BrowserFrame>
      </div>

      <div role="tablist" aria-label="Example systems" style={{ position: 'relative', display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '1.1rem' }}>
        {slides.map((s, i) => (
          <button
            key={s.name}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.74rem', fontWeight: 600, cursor: 'pointer',
              padding: '0.38rem 0.8rem', borderRadius: 999,
              color:           i === active ? '#09091a' : '#9d99b8',
              backgroundColor: i === active ? '#f5c518' : 'rgba(255,255,255,0.05)',
              border:          `1px solid ${i === active ? '#f5c518' : 'rgba(255,255,255,0.1)'}`,
              transition: 'all 0.2s ease',
            }}
          >
            {s.tab}
          </button>
        ))}
      </div>

      <a
        href={current.demo}
        target="_blank"
        rel="noopener noreferrer"
        data-track="demo_click"
        style={{
          position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.9rem',
          fontFamily: 'var(--font-inter)', fontSize: '0.88rem', fontWeight: 700, color: '#f5c518', textDecoration: 'none',
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
        Try the live {current.name} demo →
        <span style={{ fontWeight: 400, fontSize: '0.74rem', color: '#9d99b8' }}>no sign-up needed</span>
      </a>

      <style>{`
        .hero-tilt { transform: perspective(1600px) rotateY(-7deg) rotateX(2deg); transition: transform 0.5s ease; }
        .hero-showcase:hover .hero-tilt { transform: none; }
        @media (max-width: 768px) { .hero-tilt { transform: none; } }
      `}</style>
    </div>
  )
}

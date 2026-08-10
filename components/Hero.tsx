'use client'

import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import Link from 'next/link'

type RibbonItem = {
  accent:   string
  initials: string
  name:     string
  subtitle: string
  badge:    string
  href:     string
  external?: boolean
}

const ribbonItems: RibbonItem[] = [
  {
    accent:   '#f5c518',
    initials: 'TX',
    name:     'Tikkit X',
    subtitle: 'Event platform · Pakistan',
    badge:    'Offline QR',
    href:     'https://tikkitx.com',
    external: true,
  },
  {
    accent:   '#0d9488',
    initials: 'TO',
    name:     'Trade OS',
    subtitle: 'Trading & logistics ERP · Pakistan',
    badge:    'Hash-Chained Audit',
    href:     '/products/trade-os',
  },
  {
    accent:   '#7b5ea7',
    initials: '4x',
    name:     'Studio Overview',
    subtitle: '4 products · UK + PK · AI-first',
    badge:    'Government bids',
    href:     '/products',
  },
]

const RIBBON_ITEM_H  = 116
const RIBBON_GAP     = 20
const RIBBON_PITCH   = RIBBON_ITEM_H + RIBBON_GAP
const PER_ITEM_S      = 3
const RIBBON_TOTAL_S  = ribbonItems.length * PER_ITEM_S

// Shared rhythmic stop points: scroll eases in, briefly holds on each item, then
// eases to the next — a "departures board" rhythm instead of a flat linear crawl.
const ribbonStops = (() => {
  const n = ribbonItems.length
  const segPct = 100 / n
  const holdHalf = 4
  const stops: { pct: number; y: number }[] = [{ pct: 0, y: 0 }]
  for (let k = 1; k <= n; k++) {
    const y = -(k * RIBBON_PITCH)
    const enterPct = k * segPct - holdHalf
    const holdPct  = k === n ? 100 : k * segPct + holdHalf
    stops.push({ pct: enterPct, y })
    stops.push({ pct: holdPct, y })
  }
  return stops
})()

const ribbonScrollKeyframes = `@keyframes ribbonScroll {
  ${ribbonStops.map((s) => `${s.pct}% { transform: translateY(${s.y}px); }`).join('\n  ')}
}`

export default function Hero() {
  const ref     = useRef<HTMLDivElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    el.querySelectorAll('.reveal').forEach((r) => obs.observe(r))
    return () => obs.disconnect()
  }, [])

  // Highlights whichever ribbon card is actually closest to the mask's vertical
  // centre right now — polled directly off live geometry so it always matches what
  // is visually centred, regardless of the scroll animation's timing.
  useEffect(() => {
    const root = maskRef.current
    if (!root) return
    const tick = () => {
      const items = root.querySelectorAll<HTMLElement>('.ribbon-item')
      if (!items.length) return
      const rootRect = root.getBoundingClientRect()
      const rootCenter = rootRect.top + rootRect.height / 2
      let closest: HTMLElement | null = null
      let closestDist = Infinity
      items.forEach((item) => {
        const r = item.getBoundingClientRect()
        const dist = Math.abs((r.top + r.height / 2) - rootCenter)
        if (dist < closestDist) {
          closestDist = dist
          closest = item
        }
      })
      items.forEach((item) => item.classList.toggle('is-centered', item === closest))
    }
    tick()
    const interval = setInterval(tick, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position:       'relative',
        minHeight:      '100vh',
        display:        'flex',
        alignItems:     'center',
        backgroundColor:'#09091a',
        overflow:       'hidden',
        paddingTop:     '68px',
      }}
    >
      {/* Glow effects */}
      <div style={{
        position:   'absolute', top: '-10%', right: '-5%',
        width:      'clamp(300px, 50vw, 600px)', height: 'clamp(300px, 50vw, 600px)',
        borderRadius: '50%',   pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(123,94,167,0.18) 0%, transparent 70%)',
        zIndex:     0,
      }} />
      <div style={{
        position:   'absolute', bottom: '-10%', left: '-5%',
        width:      'clamp(250px, 40vw, 500px)', height: 'clamp(250px, 40vw, 500px)',
        borderRadius: '50%',   pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(245,197,24,0.1) 0%, transparent 70%)',
        zIndex:     0,
      }} />

      <div style={{
        position:  'relative', zIndex: 1,
        maxWidth:  '1200px',   margin: '0 auto',
        padding:   '5rem 1.5rem',
        display:   'grid',
        gridTemplateColumns: '1fr 1fr',
        gap:       '4rem',
        alignItems:'center',
        width:     '100%',
      }}
      className="hero-grid"
      >
        {/* Left column */}
        <div>
          {/* Eyebrow pill */}
          <div className="reveal" style={{
            display:         'inline-flex',
            alignItems:      'center',
            gap:             '0.5rem',
            border:          '1px solid rgba(245,197,24,0.25)',
            borderRadius:    '999px',
            padding:         '0.35rem 0.9rem',
            marginBottom:    '2rem',
            backgroundColor: 'rgba(245,197,24,0.06)',
          }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              backgroundColor: '#f5c518',
              boxShadow: '0 0 8px #f5c518',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily:   'var(--font-inter)',
              fontSize:     '0.78rem',
              fontWeight:   500,
              color:        '#f5c518',
              letterSpacing:'0.06em',
            }}>
              Web · App · AI Solutions
            </span>
          </div>

          {/* H1 */}
          <h1 className="reveal reveal-delay-1" style={{
            fontFamily:  'var(--font-inter)',
            fontWeight:  800,
            fontSize:    'clamp(2.6rem, 5.5vw, 4.2rem)',
            lineHeight:  1.08,
            marginBottom:'1.5rem',
            letterSpacing:'-0.03em',
          }}>
            <span style={{ color: '#eceaf5', display: 'block' }}>Deploying</span>
            <span style={{ color: '#f5c518', display: 'block' }}>Intelligence</span>
            <span style={{ color: '#eceaf5', display: 'block' }}>at Scale.</span>
          </h1>

          {/* Subheading */}
          <p className="reveal reveal-delay-2" style={{
            fontFamily:  'var(--font-inter)',
            fontWeight:  300,
            fontSize:    '1.1rem',
            lineHeight:  1.75,
            color:       '#9d99b8',
            maxWidth:    '520px',
            marginBottom:'2.5rem',
          }}>
            Building mission-critical digital systems for regulated markets. Two Bit Digital engineers
            end-to-end SaaS platforms and secure infrastructure for enterprises and government bodies
            across the UK, US, Australia, and Pakistan.
          </p>

          {/* CTAs */}
          <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#services"
              style={{
                fontFamily:      'var(--font-inter)',
                fontWeight:      700,
                fontSize:        '0.85rem',
                letterSpacing:   '0.04em',
                textTransform:   'uppercase',
                color:           '#09091a',
                backgroundColor: '#f5c518',
                padding:         '0.8rem 1.75rem',
                borderRadius:    '7px',
                textDecoration:  'none',
                transition:      'background-color 0.25s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#c9a012')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#f5c518')}
            >
              Explore Services
            </a>
            <a
              href="#portfolio"
              style={{
                fontFamily:      'var(--font-inter)',
                fontWeight:      700,
                fontSize:        '0.85rem',
                letterSpacing:   '0.04em',
                textTransform:   'uppercase',
                color:           '#eceaf5',
                backgroundColor: 'transparent',
                border:          '1px solid rgba(255,255,255,0.15)',
                padding:         '0.8rem 1.75rem',
                borderRadius:    '7px',
                textDecoration:  'none',
                transition:      'border-color 0.25s ease, color 0.25s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.target as HTMLElement
                el.style.borderColor = 'rgba(245,197,24,0.4)'
                el.style.color       = '#f5c518'
              }}
              onMouseLeave={(e) => {
                const el = e.target as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.15)'
                el.style.color       = '#eceaf5'
              }}
            >
              View Our Products
            </a>
          </div>
        </div>

        {/* Right column — endless vertical ribbon of individual cards */}
        <div className="reveal reveal-delay-2 hero-cards" style={{ position: 'relative' }}>
          <div style={{ padding: '0 0.25rem 1.25rem' }}>
            <span style={{ fontFamily:'var(--font-inter)', fontSize:'0.7rem', color:'#5e5a7a', letterSpacing:'0.08em', textTransform:'uppercase' }}>
              Live Deployments
            </span>
          </div>

          <div
            ref={maskRef}
            className="ribbon-mask"
            style={{ height: `${RIBBON_PITCH * 2.7 + 20}px`, overflow: 'hidden', position: 'relative' }}
          >
            <div className="ribbon-track" style={{ display: 'flex', flexDirection: 'column', gap: `${RIBBON_GAP}px`, padding: '10px 16px' }}>
              {[...ribbonItems, ...ribbonItems].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="ribbon-item"
                  style={{
                    height: `${RIBBON_ITEM_H}px`, flexShrink: 0, boxSizing: 'border-box',
                    padding: '1.1rem 1.4rem',
                    backgroundColor: '#11112b',
                    border: `1px solid ${item.accent}30`,
                    borderRadius: '20px',
                    boxShadow: `0 8px 24px rgba(0,0,0,0.25), 0 0 28px ${item.accent}14`,
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    textDecoration: 'none', color: 'inherit',
                    ['--ribbon-accent' as string]: item.accent,
                    ['--ribbon-glow' as string]: `${item.accent}55`,
                  } as CSSProperties}
                >
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '14px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: `${item.accent}18`, border: `1px solid ${item.accent}30`,
                  }}>
                    <span style={{ fontFamily:'var(--font-inter)', fontWeight:800, fontSize:'0.8rem', color: item.accent }}>
                      {item.initials}
                    </span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <p style={{ fontFamily:'var(--font-inter)', fontWeight:700, fontSize:'0.98rem', color:'#eceaf5', margin:0 }}>
                        {item.name}
                      </p>
                      <span style={{
                        fontFamily: 'var(--font-inter)', fontSize: '0.6rem', fontWeight: 500,
                        color: '#09091a', backgroundColor: '#4ade80',
                        padding: '0.1rem 0.4rem', borderRadius: '999px', flexShrink: 0,
                      }}>● Live</span>
                    </div>
                    <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.78rem', color:'#9d99b8', margin:'0 0 0.4rem' }}>
                      {item.subtitle}
                    </p>
                    <span style={{
                      fontFamily:'var(--font-inter)', fontSize:'0.65rem', fontWeight:500,
                      backgroundColor:`${item.accent}18`, color:item.accent,
                      padding:'0.15rem 0.5rem', borderRadius:'999px',
                    }}>
                      {item.badge}
                    </span>
                  </div>
                  <span className="ribbon-arrow" style={{ fontSize: '0.9rem', color: item.accent, flexShrink: 0, opacity: 0 }}>
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
        ${ribbonScrollKeyframes}
        .ribbon-track {
          animation: ribbonScroll ${RIBBON_TOTAL_S}s ease-in-out infinite;
        }
        .ribbon-item {
          transform: scale(0.97);
          filter: brightness(0.8) saturate(0.85);
          transition: transform 0.4s ease, filter 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .ribbon-item.is-centered {
          transform: scale(1.04);
          filter: brightness(1.18) saturate(1.2);
          border-color: var(--ribbon-accent);
          box-shadow: 0 10px 30px rgba(0,0,0,0.35), 0 0 40px var(--ribbon-glow);
        }
        .ribbon-item:hover {
          border-color: var(--ribbon-accent);
        }
        .ribbon-item:hover .ribbon-arrow {
          opacity: 1;
        }
        .ribbon-mask:hover .ribbon-track {
          animation-play-state: paused;
        }
        .ribbon-mask {
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%);
        }
        @media (max-width: 768px) {
          .hero-grid        { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .hero-cards       { display: none !important; }
        }
      `}</style>
    </section>
  )
}

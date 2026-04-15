'use client'

import { useEffect, useRef } from 'react'

const badges = [
  'Web Portals',
  'Citizen-Facing Apps',
  'AI Procurement Tools',
  'Data Management Systems',
  'Compliant Architecture',
  'Public Sector RFPs',
]

export default function Government() {
  const ref = useRef<HTMLElement>(null)

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

  return (
    <section
      ref={ref}
      id="government"
      style={{
        backgroundColor: '#09091a',
        borderTop:       '1px solid rgba(255,255,255,0.06)',
        padding:         '6rem 0',
        position:        'relative',
        zIndex:          1,
      }}
    >
      <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 1.5rem' }}>
        <div style={{
          backgroundColor: '#11112b',
          border:          '1px solid rgba(255,255,255,0.06)',
          borderRadius:    '22px',
          padding:         'clamp(2rem, 4vw, 3.5rem)',
          display:         'grid',
          gridTemplateColumns:'1fr auto',
          gap:             '3rem',
          alignItems:      'center',
        }}
        className="gov-grid"
        >
          {/* Left */}
          <div>
            <div className="reveal section-label">Public Sector</div>
            <h2 className="reveal reveal-delay-1" style={{
              fontFamily:   'var(--font-syne)',
              fontWeight:   800,
              fontSize:     'clamp(1.8rem, 3.5vw, 2.6rem)',
              color:        '#eceaf5',
              margin:       '0 0 1.25rem',
              letterSpacing:'-0.02em',
            }}>
              Bidding on Public Sector Contracts?
            </h2>
            <p className="reveal reveal-delay-2" style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 300,
              fontSize:   '1rem',
              color:      '#9d99b8',
              lineHeight: 1.8,
              maxWidth:   '560px',
              margin:     '0 0 2rem',
            }}>
              Two Bit Digital is actively positioned to bid on government and civil tenders for web,
              app, and AI solutions. We bring enterprise-grade engineering, full compliance awareness,
              and a proven delivery record to every procurement process.
            </p>
            <div className="reveal reveal-delay-3" style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
              {badges.map((b) => (
                <span key={b} style={{
                  fontFamily:      'var(--font-dm-sans)',
                  fontSize:        '0.78rem',
                  fontWeight:      500,
                  color:           '#f5c518',
                  backgroundColor: 'rgba(245,197,24,0.08)',
                  border:          '1px solid rgba(245,197,24,0.2)',
                  padding:         '0.35rem 0.8rem',
                  borderRadius:    '999px',
                }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="reveal reveal-delay-2" style={{ textAlign:'center', minWidth:'160px' }}>
            <div style={{
              backgroundColor: '#16163a',
              border:          '1px solid rgba(245,197,24,0.15)',
              borderRadius:    '14px',
              padding:         '1.5rem 1.75rem',
              marginBottom:    '1.25rem',
            }}>
              <p style={{ fontFamily:'var(--font-syne)', fontWeight:800, fontSize:'2.2rem', color:'#f5c518', margin:0 }}>🇬🇧</p>
              <p style={{ fontFamily:'var(--font-syne)', fontWeight:700, fontSize:'1rem', color:'#eceaf5', margin:'0.5rem 0 0.25rem' }}>UK</p>
              <p style={{ fontFamily:'var(--font-dm-sans)', fontSize:'0.75rem', color:'#9d99b8', margin:0 }}>Registered Entity</p>
            </div>
            <a
              href="#contact"
              style={{
                display:         'block',
                fontFamily:      'var(--font-syne)',
                fontWeight:      700,
                fontSize:        '0.82rem',
                letterSpacing:   '0.04em',
                textTransform:   'uppercase',
                color:           '#09091a',
                backgroundColor: '#f5c518',
                padding:         '0.75rem 1.5rem',
                borderRadius:    '7px',
                textDecoration:  'none',
                transition:      'background-color 0.25s ease',
                whiteSpace:      'nowrap',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#c9a012')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#f5c518')}
            >
              Discuss a Tender →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gov-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

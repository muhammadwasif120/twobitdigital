'use client'

import { useEffect, useRef } from 'react'

const products = [
  {
    initials: 'TX',
    gradient: 'linear-gradient(135deg, #f5c518 0%, #c9a012 100%)',
    name:     'Tikkit X',
    sector:   'Event Technology · Pakistan',
    status:   { label: 'Live', color: '#4ade80', bg: 'rgba(74,222,128,0.12)' },
    domain:   'tikkitx.com',
    desc:     'Mobile-first event ticketing and management platform. Offline-capable cryptographic QR verification (HMAC-SHA256/HKDF), CNIC identity validation, multi-vertical theming, and a unified attendee dashboard.',
    href:     'https://tikkitx.com',
  },
  {
    initials: 'AV',
    gradient: 'linear-gradient(135deg, #7b5ea7 0%, #5b3f87 100%)',
    name:     'Averon Legal Systems',
    sector:   'Legal Tech · United Kingdom',
    status:   { label: 'Beta · CPR Part 47/36', color: '#a48bcf', bg: 'rgba(164,139,207,0.12)' },
    domain:   'averonlegal.com',
    desc:     'CPR Part 47 and Part 36 case management SaaS for UK law firms and costs lawyers. Role-specific dashboards for partners, supervisors, and fee earners. Co-founded with a qualified costs lawyer.',
    href:     '#',
  },
  {
    initials: 'TC',
    gradient: 'linear-gradient(135deg, #16163a 0%, #0d0d22 100%)',
    name:     'Terra Core',
    sector:   'Document Intelligence · Multi-vertical',
    status:   { label: 'In Development', color: '#9d99b8', bg: 'rgba(157,153,184,0.1)' },
    domain:   null,
    desc:     'Compliance-first document intelligence and storage engine. Zero-knowledge AES-256 encryption, cryptographically chained audit logs, and secure document streaming for RegTech verticals.',
    href:     '#',
  },
]

export default function Portfolio() {
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
      id="portfolio"
      style={{
        backgroundColor: '#0d0d22',
        borderTop:       '1px solid rgba(255,255,255,0.06)',
        padding:         '6rem 0',
        position:        'relative',
        zIndex:          1,
      }}
    >
      <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
          <div className="reveal section-label" style={{ justifyContent:'center' }}>In-House Products</div>
          <h2 className="reveal reveal-delay-1" style={{
            fontFamily:   'var(--font-syne)',
            fontWeight:   800,
            fontSize:     'clamp(1.9rem, 4vw, 2.8rem)',
            color:        '#eceaf5',
            margin:       '0 0 1rem',
            letterSpacing:'-0.02em',
          }}>
            Built By Us.{' '}
            <span style={{ color: '#f5c518' }}>Owned By Us.</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 300,
            fontSize:   '1.05rem',
            color:      '#9d99b8',
            maxWidth:   '540px',
            margin:     '0 auto',
            lineHeight: 1.75,
          }}>
            We don&apos;t just build for clients — we build for ourselves. These platforms are proof of
            our architecture, engineering depth, and product instincts.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap:                 '1.25rem',
        }}
        className="portfolio-grid"
        >
          {products.map((p, i) => (
            <div
              key={p.name}
              className="reveal"
              style={{
                backgroundColor: '#11112b',
                border:          '1px solid rgba(255,255,255,0.06)',
                borderRadius:    '14px',
                padding:         '1.75rem',
                display:         'flex',
                flexDirection:   'column',
                gap:             '1rem',
                transition:      'border-color 0.28s ease, transform 0.28s ease, box-shadow 0.28s ease',
                transitionDelay: `${i * 0.08}s`,
                position:        'relative',
                cursor:          p.href !== '#' ? 'pointer' : 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(245,197,24,0.22)'
                el.style.transform   = 'translateY(-6px)'
                el.style.boxShadow   = '0 20px 60px rgba(0,0,0,0.4)'
                const arrow = el.querySelector('.portfolio-arrow') as HTMLElement
                if (arrow) {
                  arrow.style.borderColor     = '#f5c518'
                  arrow.style.color           = '#f5c518'
                  arrow.style.transform       = 'rotate(45deg)'
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.06)'
                el.style.transform   = 'translateY(0)'
                el.style.boxShadow   = 'none'
                const arrow = el.querySelector('.portfolio-arrow') as HTMLElement
                if (arrow) {
                  arrow.style.borderColor     = 'rgba(255,255,255,0.12)'
                  arrow.style.color           = '#5e5a7a'
                  arrow.style.transform       = 'rotate(0deg)'
                }
              }}
            >
              {/* Logo box */}
              <div style={{
                width:        '52px',
                height:       '52px',
                borderRadius: '12px',
                background:   p.gradient,
                display:      'flex',
                alignItems:   'center',
                justifyContent:'center',
                fontFamily:   'var(--font-syne)',
                fontWeight:   800,
                fontSize:     '1rem',
                color:        p.initials === 'TC' ? '#9d99b8' : '#09091a',
                border:       '1px solid rgba(255,255,255,0.1)',
                flexShrink:   0,
              }}>
                {p.initials}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'0.4rem' }}>
                  <h3 style={{
                    fontFamily:   'var(--font-syne)',
                    fontWeight:   700,
                    fontSize:     '1.15rem',
                    color:        '#eceaf5',
                    margin:       0,
                    letterSpacing:'-0.01em',
                  }}>
                    {p.name}
                  </h3>
                  <span
                    className="portfolio-arrow"
                    style={{
                      width:       '28px',
                      height:      '28px',
                      border:      '1px solid rgba(255,255,255,0.12)',
                      borderRadius:'6px',
                      display:     'flex',
                      alignItems:  'center',
                      justifyContent:'center',
                      fontSize:    '0.8rem',
                      color:       '#5e5a7a',
                      transition:  'all 0.28s ease',
                      flexShrink:  0,
                    }}
                  >
                    ↗
                  </span>
                </div>

                <p style={{ fontFamily:'var(--font-dm-sans)', fontSize:'0.75rem', color:'#5e5a7a', margin:'0 0 0.75rem' }}>
                  {p.sector}
                </p>

                <p style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 300,
                  fontSize:   '0.85rem',
                  color:      '#9d99b8',
                  lineHeight: 1.7,
                  margin:     0,
                }}>
                  {p.desc}
                </p>
              </div>

              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', borderTop:'1px solid rgba(255,255,255,0.05)', paddingTop:'0.85rem' }}>
                <span style={{
                  fontFamily:      'var(--font-dm-sans)',
                  fontSize:        '0.7rem',
                  fontWeight:      500,
                  color:           p.status.color,
                  backgroundColor: p.status.bg,
                  padding:         '0.2rem 0.6rem',
                  borderRadius:    '999px',
                }}>
                  ● {p.status.label}
                </span>
                {p.domain && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily:     'var(--font-dm-sans)',
                      fontSize:       '0.72rem',
                      color:          '#5e5a7a',
                      textDecoration: 'none',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {p.domain}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .portfolio-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

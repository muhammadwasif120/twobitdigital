'use client'

import { useEffect, useRef } from 'react'

const products = [
  {
    initials: 'A+',
    gradient: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)',
    name:     'Academy+',
    sector:   'School & Academy CRM · Education',
    status:   { label: 'Live demo', color: '#4ade80', bg: 'rgba(74,222,128,0.12)' },
    domain:   'academyplus.app',
    desc:     'Students, attendance, fees and receipts, exams, timetable and teacher pay for schools and tuition academies. Multi-branch with role-based logins.',
    href:     '/crms',
  },
  {
    initials: 'FM',
    gradient: 'linear-gradient(135deg, #fb7185 0%, #e11d48 100%)',
    name:     'FMCG Distribution CRM',
    sector:   'Distribution · Consumer Goods',
    status:   { label: 'Live demo', color: '#4ade80', bg: 'rgba(74,222,128,0.12)' },
    domain:   null,
    desc:     'Invoicing, bookers and commissions, batch and expiry stock, dispatch, receivables and P&L, with a customer ordering portal.',
    href:     '/crms',
  },
  {
    initials: 'TP',
    gradient: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
    name:     'Textile Pro CRM',
    sector:   'Textile & Garment Export',
    status:   { label: 'Live demo', color: '#4ade80', bg: 'rgba(74,222,128,0.12)' },
    domain:   null,
    desc:     'Production planning, purchasing, warehouse, export documents, cheques and order traceability in one system.',
    href:     '/crms',
  },
  {
    initials: 'CO',
    gradient: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
    name:     'Cars OS',
    sector:   'Car Rental & Fleet',
    status:   { label: 'Live demo', color: '#4ade80', bg: 'rgba(74,222,128,0.12)' },
    domain:   null,
    desc:     'Rental agreements with handover and return, billing runs, payments and costs. Works offline, with a mobile app.',
    href:     '/crms',
  },
  {
    initials: 'TX',
    gradient: 'linear-gradient(135deg, #f5c518 0%, #c9a012 100%)',
    name:     'Tikkit X',
    sector:   'Event Ticketing · Pakistan',
    status:   { label: 'Live', color: '#4ade80', bg: 'rgba(74,222,128,0.12)' },
    domain:   'tikkitx.com',
    desc:     'Event ticketing and management with offline-capable QR verification, organiser, venue and artist portals, and a guest app.',
    href:     'https://tikkitx.com',
  },
  {
    initials: 'TO',
    gradient: 'linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)',
    name:     'Trade OS',
    sector:   'Commodity Trading & Export ERP',
    status:   { label: 'Live', color: '#4ade80', bg: 'rgba(74,222,128,0.12)' },
    domain:   null,
    desc:     'Contracts, stock, brokers, claims, account ageing and FX cover for trading and export houses.',
    href:     '/products/trade-os',
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
          <div className="reveal section-label" style={{ justifyContent:'center' }}>What We&apos;ve Built</div>
          <h2 className="reveal reveal-delay-1" style={{
            fontFamily:   'var(--font-inter)',
            fontWeight:   800,
            fontSize:     'clamp(1.9rem, 4vw, 2.8rem)',
            color:        '#eceaf5',
            margin:       '0 0 1rem',
            letterSpacing:'-0.02em',
          }}>
            Software we&apos;ve already built.{' '}
            <span style={{ color: '#f5c518' }}>Ready to make yours.</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 300,
            fontSize:   '1.05rem',
            color:      '#9d99b8',
            maxWidth:   '600px',
            margin:     '0 auto',
            lineHeight: 1.75,
          }}>
            Working CRMs, ERPs and apps you can see running today. Pick the one closest to your business and we tailor it to fit.
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
                  arrow.style.transform       = 'scale(1.15)'
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
                  arrow.style.transform       = 'scale(1)'
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
                fontFamily:   'var(--font-inter)',
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
                    fontFamily:   'var(--font-inter)',
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

                <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.75rem', color:'#9d99b8', margin:'0 0 0.75rem' }}>
                  {p.sector}
                </p>

                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                  fontSize:   '0.95rem',
                  color:      '#c4c1d8',
                  lineHeight: 1.7,
                  margin:     0,
                }}>
                  {p.desc}
                </p>
              </div>

              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', borderTop:'1px solid rgba(255,255,255,0.05)', paddingTop:'0.85rem' }}>
                <span style={{
                  fontFamily:      'var(--font-inter)',
                  fontSize:        '0.7rem',
                  fontWeight:      500,
                  color:           p.status.color,
                  backgroundColor: p.status.bg,
                  padding:         '0.2rem 0.6rem',
                  borderRadius:    '999px',
                }}>
                  ● {p.status.label}
                </span>
                <a
                  href={p.href}
                  {...(p.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  style={{ fontFamily:'var(--font-inter)', fontSize:'0.82rem', fontWeight:600, color:'#f5c518', textDecoration:'none' }}
                >
                  {p.href.startsWith('http') ? 'Visit site →' : 'View details →'}
                </a>
                </div>
            </div>
          ))}
        </div>

        <div style={{ display:'flex', gap:'0.75rem', justifyContent:'center', flexWrap:'wrap', marginTop:'2.5rem' }}>
          <a href="/crms" style={{ fontFamily:'var(--font-inter)', fontWeight:700, fontSize:'0.9rem', backgroundColor:'#f5c518', color:'#09091a', padding:'0.7rem 1.3rem', borderRadius:'8px', textDecoration:'none' }}>
            View all CRMs →
          </a>
          <a href="/sites" style={{ fontFamily:'var(--font-inter)', fontWeight:600, fontSize:'0.9rem', border:'1px solid rgba(255,255,255,0.15)', color:'#eceaf5', padding:'0.7rem 1.3rem', borderRadius:'8px', textDecoration:'none' }}>
            See websites we&apos;ve built
          </a>
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

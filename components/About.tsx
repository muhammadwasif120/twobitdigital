'use client'

import { useEffect, useRef } from 'react'

const footprint = [
  { stat: 'UK',  desc: 'HQ & Legal' },
  { stat: 'PK',  desc: 'Dev Operations' },
  { stat: 'US',  desc: 'Enterprise' },
  { stat: 'AUS', desc: 'Deployment' },
]

const techPills = ['Next.js', 'TypeScript', 'Supabase', 'React Native', 'Vercel', 'AWS', 'OpenAI / Claude', 'Tailwind CSS']

export default function About() {
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
      id="about"
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
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:                 '4rem',
          alignItems:          'start',
        }}
        className="about-grid"
        >
          {/* Left column */}
          <div>
            <div className="reveal section-label">Who We Are</div>
            <h2 className="reveal reveal-delay-1" style={{
              fontFamily:   'var(--font-inter)',
              fontWeight:   800,
              fontSize:     'clamp(2rem, 4vw, 3rem)',
              lineHeight:   1.1,
              color:        '#eceaf5',
              marginBottom: '1.75rem',
              letterSpacing:'-0.03em',
            }}>
              Led by Engineering &amp;{' '}
              <span style={{ color: '#f5c518' }}>Product Vision.</span>
            </h2>

            <div className="reveal reveal-delay-2" style={{ display:'flex', flexDirection:'column', gap:'1.1rem', marginBottom:'2.5rem' }}>
              {[
                "Headquartered in the UK with core development operations anchored in Karachi, Pakistan, Two Bit Digital is led by Founder & CEO Muhammad Wasif. We bridge the gap between complex architectural engineering and intuitive product design.",
                "Because we actively develop, fund, and scale our own proprietary platforms — like the offline-capable architecture of Tikkit X and the zero-knowledge security models of Terra Core — we don't just build software for our clients. We build with the exact same rigour, commercial awareness, and technological foresight.",
                "With high-security capabilities and native AI integration, our systems are battle-tested and compliant across major global jurisdictions.",
              ].map((para, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  fontSize:   '1rem',
                  lineHeight: 1.8,
                  color:      '#9d99b8',
                  margin:     0,
                }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Founder card */}
            <div style={{
              backgroundColor: '#11112b',
              border:          '1px solid rgba(245,197,24,0.12)',
              borderRadius:    '12px',
              padding:         '1.1rem 1.25rem',
              marginBottom:    '1.75rem',
              display:         'flex',
              alignItems:      'center',
              gap:             '1rem',
            }}>
              <div style={{
                width:           '40px',
                height:          '40px',
                borderRadius:    '50%',
                backgroundColor: '#16163a',
                border:          '1px solid rgba(245,197,24,0.2)',
                display:         'flex',
                alignItems:      'center',
                justifyContent:  'center',
                fontFamily:      'var(--font-inter)',
                fontWeight:      700,
                fontSize:        '0.85rem',
                color:           '#f5c518',
                flexShrink:      0,
              }}>
                MW
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily:'var(--font-inter)', fontWeight:600, fontSize:'0.88rem', color:'#eceaf5', margin:'0 0 0.15rem' }}>
                  Muhammad Wasif
                </p>
                <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.75rem', color:'#5e5a7a', margin:'0 0 0.35rem' }}>
                  Founder &amp; CEO · Two Bit Digital
                </p>
                <a href="mailto:mwasif@twobitdigital.com" style={{
                  fontFamily:     'var(--font-inter)',
                  fontSize:       '0.75rem',
                  color:          '#f5c518',
                  textDecoration: 'none',
                  display:        'block',
                  marginBottom:   '0.25rem',
                }}>
                  mwasif@twobitdigital.com
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammadwasiftbd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily:     'var(--font-inter)',
                    fontSize:       '0.72rem',
                    color:          '#9d99b8',
                    textDecoration: 'none',
                  }}
                >
                  LinkedIn ↗
                </a>
              </div>
              <span style={{ fontFamily:'var(--font-inter)', fontSize:'0.68rem', color:'#5e5a7a', whiteSpace:'nowrap' }}>
                Global Ops
              </span>
            </div>

            <a
              className="reveal reveal-delay-3"
              href="#contact"
              style={{
                display:        'inline-flex',
                alignItems:     'center',
                gap:            '0.4rem',
                fontFamily:     'var(--font-inter)',
                fontWeight:     600,
                fontSize:       '0.85rem',
                letterSpacing:  '0.04em',
                textTransform:  'uppercase',
                color:          '#f5c518',
                textDecoration: 'none',
                borderBottom:   '1px solid rgba(245,197,24,0.3)',
                paddingBottom:  '2px',
                transition:     'border-color 0.2s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.borderColor = '#f5c518')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(245,197,24,0.3)')}
            >
              Work With Us →
            </a>
          </div>

          {/* Right column — global footprint + tech stack */}
          <div className="reveal reveal-delay-1">
            <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.7rem', fontWeight:600, color:'#5e5a7a', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'0.85rem' }}>
              Global Footprint
            </p>
            <div style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1fr',
              gap:                 '1rem',
              marginBottom:        '1rem',
            }}>
              {footprint.map((item) => (
                <div
                  key={item.stat}
                  style={{
                    backgroundColor: '#11112b',
                    border:          '1px solid rgba(255,255,255,0.06)',
                    borderRadius:    '14px',
                    padding:         '1.25rem',
                    transition:      'border-color 0.28s ease, transform 0.28s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(245,197,24,0.28)'
                    el.style.transform   = 'translateY(-4px)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(255,255,255,0.06)'
                    el.style.transform   = 'translateY(0)'
                  }}
                >
                  <p style={{ fontFamily:'var(--font-inter)', fontWeight:800, fontSize:'1.6rem', color:'#f5c518', margin:'0 0 0.35rem', letterSpacing:'-0.02em' }}>
                    {item.stat}
                  </p>
                  <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.8rem', color:'#9d99b8', margin:0, lineHeight:1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech stack card */}
            <div style={{
              backgroundColor: '#11112b',
              border:          '1px solid rgba(255,255,255,0.06)',
              borderRadius:    '14px',
              padding:         '1.25rem',
            }}>
              <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.7rem', fontWeight:600, color:'#5e5a7a', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'0.85rem' }}>
                Our Technology Stack
              </p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                {techPills.map((pill) => (
                  <span key={pill} style={{
                    fontFamily:      'var(--font-inter)',
                    fontSize:        '0.75rem',
                    fontWeight:      500,
                    color:           '#a48bcf',
                    backgroundColor: 'rgba(123,94,167,0.12)',
                    border:          '1px solid rgba(164,139,207,0.15)',
                    padding:         '0.3rem 0.7rem',
                    borderRadius:    '999px',
                  }}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}

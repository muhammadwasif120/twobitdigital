'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

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
        width:      '600px',    height: '600px',
        borderRadius: '50%',   pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(123,94,167,0.18) 0%, transparent 70%)',
        zIndex:     0,
      }} />
      <div style={{
        position:   'absolute', bottom: '-10%', left: '-5%',
        width:      '500px',    height: '500px',
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
              fontFamily:   'var(--font-dm-sans)',
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
            fontFamily:  'var(--font-syne)',
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
            fontFamily:  'var(--font-dm-sans)',
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
                fontFamily:      'var(--font-syne)',
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
                fontFamily:      'var(--font-syne)',
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

        {/* Right column — visual cards */}
        <div className="reveal reveal-delay-2 hero-cards" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Top card — tilted */}
          <div style={{
            backgroundColor: '#11112b',
            border:          '1px solid rgba(255,255,255,0.08)',
            borderRadius:    '14px',
            padding:         '1.25rem 1.5rem',
            transform:       'rotate(-1.5deg)',
            position:        'relative',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <span style={{ fontFamily:'var(--font-dm-sans)', fontSize:'0.7rem', color:'#5e5a7a', letterSpacing:'0.08em', textTransform:'uppercase' }}>
                Active Deployment
              </span>
              <span style={{
                fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', fontWeight: 500,
                color: '#09091a', backgroundColor: '#4ade80',
                padding: '0.15rem 0.5rem', borderRadius: '999px',
              }}>● Live</span>
            </div>
            <p style={{ fontFamily:'var(--font-syne)', fontWeight:700, fontSize:'1.25rem', color:'#eceaf5', margin:'0 0 0.25rem' }}>
              Tikkit X
            </p>
            <p style={{ fontFamily:'var(--font-dm-sans)', fontSize:'0.82rem', color:'#9d99b8', margin:'0 0 1rem' }}>
              Event platform · Pakistan · Production
            </p>
            <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap' }}>
              {[
                { label:'Live',        bg:'rgba(74,222,128,0.12)', color:'#4ade80' },
                { label:'CNIC Verify', bg:'rgba(164,139,207,0.15)', color:'#a48bcf' },
                { label:'Offline QR',  bg:'rgba(245,197,24,0.12)', color:'#f5c518' },
              ].map((tag) => (
                <span key={tag.label} style={{
                  fontFamily:'var(--font-dm-sans)', fontSize:'0.68rem', fontWeight:500,
                  backgroundColor:tag.bg, color:tag.color,
                  padding:'0.2rem 0.6rem', borderRadius:'999px',
                }}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom card */}
          <div style={{
            backgroundColor: '#11112b',
            border:          '1px solid rgba(255,255,255,0.08)',
            borderRadius:    '14px',
            padding:         '1.25rem 1.5rem',
          }}>
            <p style={{ fontFamily:'var(--font-dm-sans)', fontSize:'0.7rem', color:'#5e5a7a', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'0.5rem' }}>
              Studio Overview
            </p>
            <p style={{ fontFamily:'var(--font-dm-sans)', fontSize:'0.92rem', color:'#9d99b8', marginBottom:'1.25rem', lineHeight:1.6 }}>
              Three in-house SaaS products. Government bids. One studio.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.75rem' }}>
              {[
                { stat:'3',      label:'Products' },
                { stat:'UK+PK',  label:'Markets' },
                { stat:'AI',     label:'First' },
              ].map((item) => (
                <div key={item.stat} style={{
                  backgroundColor: '#16163a',
                  borderRadius:    '8px',
                  padding:         '0.6rem 0.5rem',
                  textAlign:       'center',
                }}>
                  <p style={{ fontFamily:'var(--font-syne)', fontWeight:800, fontSize:'1.1rem', color:'#f5c518', margin:0 }}>
                    {item.stat}
                  </p>
                  <p style={{ fontFamily:'var(--font-dm-sans)', fontSize:'0.65rem', color:'#5e5a7a', margin:0 }}>
                    {item.label}
                  </p>
                </div>
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
        @media (max-width: 768px) {
          .hero-grid        { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .hero-cards       { display: none !important; }
        }
      `}</style>
    </section>
  )
}

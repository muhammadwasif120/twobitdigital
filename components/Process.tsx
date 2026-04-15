'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    num:   '01',
    title: 'Discovery',
    desc:  'We map your requirements, audience, and constraints in full before anything is designed. No assumptions — just a clear problem statement.',
  },
  {
    num:   '02',
    title: 'Architecture',
    desc:  'System design, stack selection, and a documented technical roadmap. Every structural decision is made deliberately before a line of code is written.',
  },
  {
    num:   '03',
    title: 'Build',
    desc:  'Iterative, milestone-driven delivery. Production-grade from day one — type-safe, tested, and reviewable at every stage of development.',
  },
  {
    num:   '04',
    title: 'Deploy & Support',
    desc:  "CI/CD pipelines, observability dashboards, and ongoing support. We don\u2019t hand over the keys and disappear.",
  },
]

export default function Process() {
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
      id="process"
      style={{
        backgroundColor: '#09091a',
        borderTop:       '1px solid rgba(255,255,255,0.06)',
        padding:         '6rem 0',
        position:        'relative',
        zIndex:          1,
      }}
    >
      <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
          <div className="reveal section-label" style={{ justifyContent:'center' }}>How We Work</div>
          <h2 className="reveal reveal-delay-1" style={{
            fontFamily:   'var(--font-syne)',
            fontWeight:   800,
            fontSize:     'clamp(1.9rem, 4vw, 2.8rem)',
            color:        '#eceaf5',
            margin:       '0 0 1rem',
            letterSpacing:'-0.02em',
          }}>
            From Brief to Production.
          </h2>
          <p className="reveal reveal-delay-2" style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 300,
            fontSize:   '1.05rem',
            color:      '#9d99b8',
            maxWidth:   '520px',
            margin:     '0 auto',
            lineHeight: 1.75,
          }}>
            A clear, documented process from day one. No black-box development — you know what&apos;s
            being built, when, and why.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap:                 '1.25rem',
        }}
        className="process-grid"
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal"
              style={{
                backgroundColor: '#11112b',
                border:          '1px solid rgba(255,255,255,0.06)',
                borderRadius:    '14px',
                padding:         '1.75rem',
                transition:      'border-color 0.28s ease, transform 0.28s ease',
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={(e) => {
                const el  = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(245,197,24,0.28)'
                el.style.transform   = 'translateY(-4px)'
                const circle = el.querySelector('.step-circle') as HTMLElement
                if (circle) {
                  circle.style.backgroundColor = 'rgba(245,197,24,0.12)'
                  circle.style.borderColor     = '#f5c518'
                  circle.style.color           = '#f5c518'
                }
              }}
              onMouseLeave={(e) => {
                const el  = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.06)'
                el.style.transform   = 'translateY(0)'
                const circle = el.querySelector('.step-circle') as HTMLElement
                if (circle) {
                  circle.style.backgroundColor = '#16163a'
                  circle.style.borderColor     = 'rgba(255,255,255,0.08)'
                  circle.style.color           = '#9d99b8'
                }
              }}
            >
              {/* Step circle */}
              <div
                className="step-circle"
                style={{
                  width:           '44px',
                  height:          '44px',
                  borderRadius:    '50%',
                  backgroundColor: '#16163a',
                  border:          '1px solid rgba(255,255,255,0.08)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  fontFamily:      'var(--font-syne)',
                  fontWeight:      700,
                  fontSize:        '0.8rem',
                  color:           '#9d99b8',
                  marginBottom:    '1.25rem',
                  transition:      'all 0.28s ease',
                }}
              >
                {step.num}
              </div>

              <h3 style={{
                fontFamily:   'var(--font-syne)',
                fontWeight:   700,
                fontSize:     '1rem',
                color:        '#eceaf5',
                margin:       '0 0 0.75rem',
                letterSpacing:'-0.01em',
              }}>
                {step.num} — {step.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 300,
                fontSize:   '0.875rem',
                color:      '#9d99b8',
                lineHeight: 1.75,
                margin:     0,
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    id: 1,
    title: 'Web & App Development',
    desc: 'Full-stack web and mobile applications built with modern frameworks. Type-safe, scalable, and optimised for performance from day one.',
    chips: ['Next.js 14+', 'TypeScript', 'React Native', 'Supabase'],
    wide: false,
  },
  {
    id: 2,
    title: 'AI Integration & Automation',
    desc: 'Embed intelligence into your product or workflow. LLM-powered pipelines, document processing, AI assistants, and smart automation at scale.',
    chips: ['LLM APIs', 'RAG Systems', 'Agent Workflows', 'NLP'],
    wide: false,
  },
  {
    id: 3,
    title: 'SaaS Platform Build',
    desc: 'Multi-tenant SaaS architecture from the ground up. Auth, billing, RBAC, analytics — production-grade and built to scale.',
    chips: ['Multi-tenant', 'RBAC', 'Billing', 'Analytics'],
    wide: false,
  },
  {
    id: 4,
    title: 'Compliance & RegTech',
    desc: 'Purpose-built software for regulated industries. CPR-compliant legal case management, document intelligence platforms, and cryptographically secured audit-trail systems — built for compliance-first environments.',
    chips: ['Legal Tech', 'RegTech', 'Audit Trails', 'AES-256 Encryption', 'Zero-Knowledge'],
    wide: true,
  },
  {
    id: 5,
    title: 'UX & Digital Design',
    desc: 'Interfaces users actually enjoy using. From design systems to interactive prototypes — clean, intuitive, and on-brand from the first screen.',
    chips: ['UI/UX', 'Design Systems', 'Figma', 'Prototyping'],
    wide: false,
  },
  {
    id: 6,
    title: 'Cloud & Infrastructure',
    desc: 'Scalable, resilient cloud deployments. CI/CD pipelines, serverless architecture, managed databases, and monitoring — built for uptime.',
    chips: ['AWS', 'Vercel', 'CI/CD', 'Observability'],
    wide: false,
  },
]

export default function Services() {
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
      id="services"
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
          <div className="reveal section-label" style={{ justifyContent:'center' }}>What We Do</div>
          <h2 className="reveal reveal-delay-1" style={{
            fontFamily:   'var(--font-inter)',
            fontWeight:   800,
            fontSize:     'clamp(1.9rem, 4vw, 2.8rem)',
            color:        '#eceaf5',
            margin:       '0 0 1rem',
            letterSpacing:'-0.02em',
          }}>
            End-to-End Digital Engineering
          </h2>
          <p className="reveal reveal-delay-2" style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 300,
            fontSize:   '1.05rem',
            color:      '#9d99b8',
            maxWidth:   '580px',
            margin:     '0 auto',
            lineHeight: 1.75,
          }}>
            From concept to cloud — we handle architecture, design, build, and deployment.
            No handoffs to third parties. One studio, full ownership.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap:                 '1.25rem',
        }}
        className="services-grid"
        >
          {services.map((s, i) => (
            <div
              key={s.id}
              className="reveal"
              style={{
                gridColumn:      s.wide ? 'span 2' : 'span 1',
                backgroundColor: '#11112b',
                border:          '1px solid rgba(255,255,255,0.06)',
                borderRadius:    '14px',
                padding:         '1.75rem',
                transition:      'border-color 0.28s ease, transform 0.28s ease',
                transitionDelay: `${i * 0.06}s`,
                position:        'relative',
                overflow:        'hidden',
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
              <h3 style={{
                fontFamily:   'var(--font-inter)',
                fontWeight:   700,
                fontSize:     '1.05rem',
                color:        '#eceaf5',
                margin:       '0 0 0.75rem',
                letterSpacing:'-0.01em',
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize:   '0.88rem',
                color:      '#9d99b8',
                lineHeight: 1.75,
                margin:     '0 0 1.25rem',
              }}>
                {s.desc}
              </p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem' }}>
                {s.chips.map((chip) => (
                  <span key={chip} style={{
                    fontFamily:      'var(--font-inter)',
                    fontSize:        '0.7rem',
                    fontWeight:      500,
                    color:           '#9d99b8',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border:          '1px solid rgba(255,255,255,0.07)',
                    padding:         '0.2rem 0.55rem',
                    borderRadius:    '999px',
                  }}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .services-grid > div[style*="span 2"] { grid-column: span 2 !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .services-grid > div[style*="span 2"] { grid-column: span 1 !important; }
        }
      ` }} />
    </section>
  )
}

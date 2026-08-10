'use client'

import { useEffect, useRef } from 'react'

const values = [
  {
    icon:  '⚙',
    title: 'Engineering Over Sales',
    desc:  'Every decision at Two Bit Digital begins with a technical question, not a revenue one. We ship architecture that holds, not demos that close. Our clients stay because the systems work — not because of account management.',
  },
  {
    icon:  '🔒',
    title: 'Compliance by Default',
    desc:  'Regulated industries cannot bolt compliance onto legacy code. We design for audit trails, data residency, and access control from day one — serving clients across GDPR, FCA, SRA, and SEC jurisdictions without retrofitting.',
  },
  {
    icon:  '📦',
    title: 'Product Thinking',
    desc:  "We don't build websites. We build products. Because we fund and operate Tikkit X, Trade OS, Averon Legal Systems, and Terra Core ourselves, we approach every client engagement with the same commercial rigour we apply to our own balance sheet.",
  },
  {
    icon:  '🤝',
    title: 'Long-term Partnership',
    desc:  'The best digital infrastructure is built over years, not sprints. We onboard clients selectively, assign senior engineers from day one, and operate as a dedicated technical partner — not a rotating contractor pool.',
  },
]

const footprint = [
  {
    flag:   '🇬🇧',
    market: 'United Kingdom',
    role:   'HQ & Legal Entity',
    detail: 'Registered in England & Wales · Co. #14710072 · Regulated by HMRC',
  },
  {
    flag:   '🇵🇰',
    market: 'Pakistan',
    role:   'Engineering Operations',
    detail: 'Core development studio · SECP registered · CUIN 0250598',
  },
  {
    flag:   '🇺🇸',
    market: 'United States',
    role:   'Enterprise Clients',
    detail: 'Serving US enterprise, fintech, and legaltech clients · Remote delivery',
  },
  {
    flag:   '🇦🇺',
    market: 'Australia',
    role:   'Deployment & Delivery',
    detail: 'Active deployment and managed service delivery across ANZ region',
  },
]

const credentials = [
  {
    label:  'UN Vendor',
    value:  '#1177996',
    detail: 'United Nations Global Marketplace registered supplier',
    href:   null as string | null,
  },
  {
    label:  'D&B D-U-N-S',
    value:  '77-532-7428',
    detail: 'Dun & Bradstreet globally verified business identity',
    href:   null as string | null,
  },
  {
    label:  'Companies House',
    value:  '#14710072',
    detail: 'Registered in England & Wales — view official filing',
    href:   'https://find-and-update.company-information.service.gov.uk/company/14710072',
  },
  {
    label:  'SECP CUIN',
    value:  '0250598',
    detail: 'Securities & Exchange Commission of Pakistan registration',
    href:   null as string | null,
  },
]

const story = [
  "Two Bit Digital was founded on a single conviction: that the software powering regulated industries — legal firms, government agencies, financial institutions, healthcare networks — deserves the same architectural rigour that big-tech platforms apply to their consumer products. For too long, regulated markets have been under-served by vendors who prioritise sales cycles over system integrity.",
  "We are an engineering-led studio, not a sales-led consultancy. That distinction matters enormously in practice. It means our senior engineers are involved in scoping from day one. It means we decline projects where we cannot guarantee quality delivery. It means the same principals who write the architecture review the code in production. There are no bait-and-switch handoffs to junior teams after the contract is signed.",
  "What separates us further is that we own and operate our own products. Tikkit X, our offline-capable event management platform, was built to withstand the connectivity demands of large-scale outdoor events in markets with unreliable infrastructure. Trade OS is a multi-module commodity trading and logistics ERP with a cryptographically chained, tamper-evident audit trail, refined inside a live trading operation and now available to license. Terra Core, currently in development, applies zero-knowledge security architecture to data residency challenges in regulated sectors. Averon Legal Systems is redesigning the brief-to-billing workflow for law firms in the UK and Pakistan. We build these products with our own capital, which means we carry commercial risk — and that sharpens every technical decision we make for clients.",
  "Operating across the UK, United States, Australia, and Pakistan gives us genuine multi-jurisdictional fluency. We understand UK data protection obligations, US enterprise procurement requirements, AUS deployment standards, and the regulatory landscape of Pakistan's emerging digital economy. We do not outsource that knowledge to compliance consultants — it is embedded in how we design systems from the first architecture diagram.",
]

export default function AboutContent() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.06 }
    )
    el.querySelectorAll('.reveal').forEach((r) => obs.observe(r))
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref}>

      {/* ── Founder ──────────────────────────────────────────────── */}
      <section style={{
        backgroundColor: '#0d0d22',
        borderBottom:    '1px solid rgba(255,255,255,0.06)',
        padding:         '6rem 0',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1.5fr',
              gap:                 '4rem',
              alignItems:          'center',
            }}
            className="founder-grid"
          >
            {/* Founder card */}
            <div className="reveal">
              <div style={{
                backgroundColor: '#11112b',
                border:          '1px solid rgba(245,197,24,0.18)',
                borderRadius:    '18px',
                padding:         '2.5rem',
                display:         'flex',
                flexDirection:   'column',
                alignItems:      'center',
                textAlign:       'center',
                gap:             '1.25rem',
              }}>
                {/* Avatar monogram */}
                <div style={{
                  width:           '88px',
                  height:          '88px',
                  borderRadius:    '50%',
                  backgroundColor: '#16163a',
                  border:          '2px solid rgba(245,197,24,0.3)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  fontFamily:      'var(--font-inter)',
                  fontWeight:      700,
                  fontSize:        '1.6rem',
                  color:           '#f5c518',
                  letterSpacing:   '-0.02em',
                  flexShrink:      0,
                }}>
                  MW
                </div>

                <div>
                  <h2 style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '1.25rem',
                    color:         '#eceaf5',
                    margin:        '0 0 0.25rem',
                    letterSpacing: '-0.02em',
                  }}>
                    Muhammad Wasif
                  </h2>
                  <p style={{
                    fontFamily:    'var(--font-inter)',
                    fontSize:      '0.82rem',
                    color:         '#5e5a7a',
                    margin:        '0 0 0.85rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}>
                    Founder &amp; CEO · Two Bit Digital
                  </p>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '0.25rem' }}>
                    {['SaaS Architecture', 'AI Engineering', 'RegTech'].map((tag) => (
                      <span key={tag} style={{
                        fontFamily:      'var(--font-inter)',
                        fontSize:        '0.68rem',
                        fontWeight:      500,
                        color:           '#a48bcf',
                        backgroundColor: 'rgba(123,94,167,0.14)',
                        border:          '1px solid rgba(164,139,207,0.15)',
                        padding:         '0.25rem 0.65rem',
                        borderRadius:    '999px',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LinkedIn CTA — prominent */}
                <a
                  href="https://www.linkedin.com/in/muhammadwasiftbd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:         'inline-flex',
                    alignItems:      'center',
                    gap:             '0.5rem',
                    fontFamily:      'var(--font-inter)',
                    fontWeight:      700,
                    fontSize:        '0.82rem',
                    letterSpacing:   '0.03em',
                    color:           '#ffffff',
                    backgroundColor: '#0a66c2',
                    padding:         '0.75rem 1.5rem',
                    borderRadius:    '8px',
                    textDecoration:  'none',
                    transition:      'background-color 0.2s ease, transform 0.2s ease',
                    width:           '100%',
                    justifyContent:  'center',
                    boxSizing:       'border-box',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = '#004182'
                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = '#0a66c2'
                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>

                <a
                  href="mailto:mwasif@twobitdigital.com"
                  style={{
                    fontFamily:     'var(--font-inter)',
                    fontSize:       '0.78rem',
                    color:          '#f5c518',
                    textDecoration: 'none',
                    opacity:        0.8,
                    transition:     'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.8')}
                >
                  mwasif@twobitdigital.com
                </a>
              </div>
            </div>

            {/* Founder bio */}
            <div className="reveal reveal-delay-1">
              <div className="section-label" style={{ marginBottom: '1rem' }}>Founder &amp; CEO</div>
              <h2 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(1.6rem, 3.5vw, 2.4rem)',
                color:         '#eceaf5',
                margin:        '0 0 1.75rem',
                letterSpacing: '-0.025em',
                lineHeight:    1.15,
              }}>
                Built by an engineer who ships{' '}
                <span style={{ color: '#f5c518' }}>real products.</span>
              </h2>

              {[
                "Muhammad Wasif founded Two Bit Digital after years of observing a critical gap in the market: enterprises and governments needed enterprise-grade digital systems, but most vendors lacked the engineering depth to deliver them — and the ones that did rarely understood regulated industries.",
                "With a computer science foundation and a career spanning full-stack architecture, AI integration, and compliance-heavy product design, Wasif has led the development of systems that operate at scale under strict regulatory constraints. He personally architected the offline-first synchronisation layer in Tikkit X, enabling the platform to operate reliably at large outdoor events in markets with degraded connectivity — a problem most SaaS platforms ignore entirely.",
                "He is currently leading the development of Terra Core, a platform designed around zero-knowledge security architecture for data residency challenges in regulated industries — a technically demanding area that requires deep cryptographic literacy alongside product thinking.",
                "Wasif operates across the UK, Pakistan, US, and Australian markets with direct commercial and technical accountability across all four jurisdictions. He is the principal engineering voice in every engagement Two Bit Digital takes on.",
              ].map((para, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  fontSize:   '1rem',
                  color:      '#9d99b8',
                  lineHeight: 1.85,
                  margin:     '0 0 1.1rem',
                }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Company Story ─────────────────────────────────────────── */}
      <section style={{
        backgroundColor: '#09091a',
        borderBottom:    '1px solid rgba(255,255,255,0.06)',
        padding:         '6rem 0',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: '300px 1fr',
              gap:                 '5rem',
              alignItems:          'start',
            }}
            className="story-grid"
          >
            <div className="reveal story-sticky">
              <div className="section-label">Our Story</div>
              <h2 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(1.8rem, 3vw, 2.5rem)',
                color:         '#eceaf5',
                margin:        '0.75rem 0 1.25rem',
                letterSpacing: '-0.03em',
                lineHeight:    1.12,
              }}>
                Why Two Bit Digital exists.
              </h2>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize:   '0.9rem',
                color:      '#5e5a7a',
                lineHeight: 1.75,
                margin:     0,
              }}>
                Engineering-led. Compliance-first. Commercially accountable. Operating across four markets.
              </p>
            </div>

            <div className="reveal reveal-delay-1">
              {story.map((para, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  fontSize:   '1.05rem',
                  color:      '#9d99b8',
                  lineHeight: 1.9,
                  margin:     '0 0 1.5rem',
                }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Footprint ──────────────────────────────────────── */}
      <section style={{
        backgroundColor: '#0d0d22',
        borderBottom:    '1px solid rgba(255,255,255,0.06)',
        padding:         '6rem 0',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="reveal section-label" style={{ justifyContent: 'center' }}>Global Footprint</div>
            <h2 className="reveal reveal-delay-1" style={{
              fontFamily:    'var(--font-inter)',
              fontWeight:    800,
              fontSize:      'clamp(1.8rem, 4vw, 2.8rem)',
              color:         '#eceaf5',
              margin:        '0 0 1rem',
              letterSpacing: '-0.025em',
            }}>
              Four markets. One standard.
            </h2>
            <p className="reveal reveal-delay-2" style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize:   '1.05rem',
              color:      '#9d99b8',
              maxWidth:   '560px',
              margin:     '0 auto',
              lineHeight: 1.75,
            }}>
              We operate with genuine jurisdiction fluency — not remote delivery with disclaimers.
              Every market we serve has a functional presence and a compliance mandate.
            </p>
          </div>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap:                 '1.25rem',
            }}
            className="footprint-grid"
          >
            {footprint.map((item, i) => (
              <div
                key={item.market}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  backgroundColor: '#11112b',
                  border:          '1px solid rgba(255,255,255,0.06)',
                  borderRadius:    '16px',
                  padding:         '2rem 1.5rem',
                  transition:      'border-color 0.28s ease, transform 0.28s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(245,197,24,0.25)'
                  el.style.transform   = 'translateY(-5px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(255,255,255,0.06)'
                  el.style.transform   = 'translateY(0)'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.flag}</div>
                <h3 style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    700,
                  fontSize:      '1rem',
                  color:         '#eceaf5',
                  margin:        '0 0 0.3rem',
                  letterSpacing: '-0.01em',
                }}>
                  {item.market}
                </h3>
                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontSize:      '0.72rem',
                  fontWeight:    600,
                  color:         '#f5c518',
                  margin:        '0 0 0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}>
                  {item.role}
                </p>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  fontSize:   '0.82rem',
                  color:      '#5e5a7a',
                  lineHeight: 1.65,
                  margin:     0,
                }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credentials Strip ─────────────────────────────────────── */}
      <section style={{
        backgroundColor: '#09091a',
        borderBottom:    '1px solid rgba(255,255,255,0.06)',
        padding:         '5rem 0',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <div className="reveal section-label" style={{ justifyContent: 'center' }}>Verified Credentials</div>
            <h2 className="reveal reveal-delay-1" style={{
              fontFamily:    'var(--font-inter)',
              fontWeight:    800,
              fontSize:      'clamp(1.6rem, 3.5vw, 2.4rem)',
              color:         '#eceaf5',
              margin:        '0 0 0.75rem',
              letterSpacing: '-0.025em',
            }}>
              Globally registered. Independently verified.
            </h2>
            <p className="reveal reveal-delay-2" style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize:   '1rem',
              color:      '#9d99b8',
              maxWidth:   '500px',
              margin:     '0 auto',
              lineHeight: 1.75,
            }}>
              Our credentials are public record across four independent registries spanning three continents.
            </p>
          </div>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap:                 '1rem',
            }}
            className="cred-grid"
          >
            {credentials.map((cred, i) => (
              <div
                key={cred.label}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  backgroundColor: '#11112b',
                  border:          '1px solid rgba(255,255,255,0.06)',
                  borderRadius:    '12px',
                  padding:         '1.5rem',
                }}
              >
                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontSize:      '0.68rem',
                  fontWeight:    600,
                  color:         '#5e5a7a',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  margin:        '0 0 0.5rem',
                }}>
                  {cred.label}
                </p>

                {cred.href ? (
                  <a
                    href={cred.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily:     'var(--font-inter)',
                      fontWeight:     700,
                      fontSize:       '1.1rem',
                      color:          '#f5c518',
                      textDecoration: 'none',
                      display:        'block',
                      marginBottom:   '0.5rem',
                      letterSpacing:  '-0.01em',
                      transition:     'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#c9a012')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#f5c518')}
                  >
                    {cred.value} ↗
                  </a>
                ) : (
                  <p style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '1.1rem',
                    color:         '#eceaf5',
                    margin:        '0 0 0.5rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {cred.value}
                  </p>
                )}

                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  fontSize:   '0.78rem',
                  color:      '#5e5a7a',
                  lineHeight: 1.6,
                  margin:     0,
                }}>
                  {cred.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────────── */}
      <section style={{
        backgroundColor: '#0d0d22',
        borderBottom:    '1px solid rgba(255,255,255,0.06)',
        padding:         '6rem 0',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="reveal section-label" style={{ justifyContent: 'center' }}>How We Operate</div>
            <h2 className="reveal reveal-delay-1" style={{
              fontFamily:    'var(--font-inter)',
              fontWeight:    800,
              fontSize:      'clamp(1.8rem, 4vw, 2.8rem)',
              color:         '#eceaf5',
              margin:        '0 0 1rem',
              letterSpacing: '-0.025em',
            }}>
              Principles that shape every engagement.
            </h2>
            <p className="reveal reveal-delay-2" style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize:   '1.05rem',
              color:      '#9d99b8',
              maxWidth:   '520px',
              margin:     '0 auto',
              lineHeight: 1.75,
            }}>
              These are not marketing values. They are the operational constraints we impose on ourselves
              before we accept a single client engagement.
            </p>
          </div>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap:                 '1.5rem',
            }}
            className="values-grid"
          >
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  backgroundColor: '#11112b',
                  border:          '1px solid rgba(255,255,255,0.06)',
                  borderRadius:    '16px',
                  padding:         '2rem',
                  display:         'flex',
                  gap:             '1.25rem',
                  alignItems:      'flex-start',
                  transition:      'border-color 0.28s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,197,24,0.2)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <div style={{
                  width:           '48px',
                  height:          '48px',
                  borderRadius:    '12px',
                  backgroundColor: 'rgba(245,197,24,0.08)',
                  border:          '1px solid rgba(245,197,24,0.15)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  fontSize:        '1.35rem',
                  flexShrink:      0,
                }}>
                  {v.icon}
                </div>
                <div>
                  <h3 style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '1rem',
                    color:         '#eceaf5',
                    margin:        '0 0 0.6rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {v.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize:   '0.9rem',
                    color:      '#9d99b8',
                    lineHeight: 1.8,
                    margin:     0,
                  }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .founder-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .footprint-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .cred-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .footprint-grid { grid-template-columns: 1fr !important; }
          .cred-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 720px) {
          .values-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) {
          .story-sticky { position: sticky; top: 6rem; }
        }
      `}</style>
    </div>
  )
}

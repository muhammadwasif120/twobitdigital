import type { Metadata }  from 'next'
import Link               from 'next/link'
import Nav                from '@/components/Nav'
import Footer             from '@/components/Footer'
import Breadcrumb         from '@/components/shared/Breadcrumb'
import CTABanner          from '@/components/shared/CTABanner'
import { caseStudies }    from '@/lib/case-studies'

export const metadata: Metadata = {
  title:       'Case Studies | Software Development & AI Projects — Two Bit Digital',
  description: 'Anonymised case studies from Two Bit Digital — real engineering outcomes across legal tech, government, financial services, and emerging markets. Architecture, delivery timelines, and measurable results.',
  alternates: {
    canonical: 'https://twobitdigital.com/work',
  },
  openGraph: {
    title:       'Case Studies | Software Development & AI Projects — Two Bit Digital',
    description: 'Real outcomes from real engagements across legal tech, government, financial services, and emerging markets. Client names are anonymised — the engineering is not.',
    url:         'https://twobitdigital.com/work',
    type:        'website',
  },
  twitter: {
    title:       'Case Studies — Two Bit Digital',
    description: 'Anonymised engineering case studies: legal tech, government portals, AI document intelligence, event technology, compliance systems.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type':    'CollectionPage',
  '@id':      'https://twobitdigital.com/work',
  url:        'https://twobitdigital.com/work',
  name:       'Case Studies — Two Bit Digital',
  description:'Anonymised case studies from Two Bit Digital covering SaaS platforms, AI systems, government portals, and compliance engineering.',
  inLanguage: 'en-GB',
  isPartOf:   { '@id': 'https://twobitdigital.com' },
}

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section style={{
          background:    'linear-gradient(180deg, #09091a 0%, #0d0d22 100%)',
          paddingTop:    '9rem',
          paddingBottom: '5rem',
          borderBottom:  '1px solid rgba(255,255,255,0.06)',
          position:      'relative',
          overflow:      'hidden',
        }}>
          <div style={{
            position:     'absolute',
            top:          '-100px',
            left:         '50%',
            transform:    'translateX(-50%)',
            width:        '900px',
            height:       '500px',
            borderRadius: '50%',
            pointerEvents:'none',
            background:   'radial-gradient(circle, rgba(245,197,24,0.05) 0%, transparent 65%)',
          }} />

          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
            position: 'relative',
            zIndex:   1,
          }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Work' }]} />

            <div style={{ maxWidth: '760px', marginTop: '1.5rem' }}>
              <div className="section-label">Case Studies</div>
              <h1 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(2.4rem, 5.5vw, 4rem)',
                lineHeight:    1.08,
                color:         '#eceaf5',
                margin:        '0.75rem 0 1.5rem',
                letterSpacing: '-0.03em',
              }}>
                Problems Solved.{' '}
                <span style={{ color: '#f5c518' }}>Systems Built.</span>
              </h1>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize:   'clamp(1rem, 2vw, 1.175rem)',
                color:      '#9d99b8',
                lineHeight: 1.85,
                margin:     0,
                maxWidth:   '640px',
              }}>
                Real outcomes from real engagements across legal tech, government, financial services,
                and emerging markets. Client names are anonymised — the engineering is not.
              </p>
            </div>

            {/* Stat strip */}
            <div style={{
              display:    'flex',
              gap:        '2.5rem',
              marginTop:  '3.5rem',
              flexWrap:   'wrap',
            }}>
              {[
                { value: `${caseStudies.length}`, label: 'Published engagements' },
                { value: '5',  label: 'Sectors covered' },
                { value: '4',  label: 'Global markets' },
                { value: '100%', label: 'Delivery rate' },
              ].map((s) => (
                <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    800,
                    fontSize:      '1.75rem',
                    color:         '#f5c518',
                    letterSpacing: '-0.03em',
                    lineHeight:    1,
                  }}>
                    {s.value}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontSize:   '0.8rem',
                    color:      '#5e5a7a',
                    letterSpacing: '0.02em',
                  }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case Studies List ─────────────────────────────────────── */}
        <section style={{
          maxWidth:  '1200px',
          margin:    '0 auto',
          padding:   '5rem 1.5rem',
          display:   'flex',
          flexDirection: 'column',
          gap:       '2.5rem',
        }}>
          {caseStudies.map((study, idx) => (
            <article
              key={study.slug}
              style={{
                backgroundColor: '#11112b',
                borderRadius:    '12px',
                borderLeft:      `3px solid ${study.color}`,
                overflow:        'hidden',
                position:        'relative',
              }}
            >
              {/* Subtle colour wash behind icon area */}
              <div style={{
                position:   'absolute',
                top:        0,
                left:       0,
                width:      '300px',
                height:     '100%',
                background: `radial-gradient(ellipse at 0% 50%, ${study.color}09 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{ padding: 'clamp(2rem, 4vw, 3rem)', position: 'relative', zIndex: 1 }}>

                {/* ── Top meta row ── */}
                <div style={{
                  display:    'flex',
                  alignItems: 'flex-start',
                  gap:        '1.25rem',
                  marginBottom: '2rem',
                  flexWrap:   'wrap',
                }}>
                  {/* Icon */}
                  <div style={{
                    width:          '52px',
                    height:         '52px',
                    borderRadius:   '10px',
                    backgroundColor:`${study.color}18`,
                    border:         `1px solid ${study.color}30`,
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    fontSize:       '1.5rem',
                    flexShrink:     0,
                  }}>
                    {study.icon}
                  </div>

                  {/* Pills + number */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                      {/* Index */}
                      <span style={{
                        fontFamily:    'var(--font-inter)',
                        fontWeight:    800,
                        fontSize:      '0.7rem',
                        letterSpacing: '0.08em',
                        color:         study.color,
                        opacity:       0.7,
                      }}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      {/* Sector pill */}
                      <span style={{
                        fontFamily:      'var(--font-inter)',
                        fontWeight:      600,
                        fontSize:        '0.72rem',
                        letterSpacing:   '0.04em',
                        textTransform:   'uppercase',
                        color:           study.color,
                        backgroundColor: `${study.color}18`,
                        border:          `1px solid ${study.color}30`,
                        padding:         '0.3rem 0.75rem',
                        borderRadius:    '999px',
                        whiteSpace:      'nowrap',
                      }}>
                        {study.sector}
                      </span>

                      {/* Region pill */}
                      <span style={{
                        fontFamily:      'var(--font-inter)',
                        fontWeight:      500,
                        fontSize:        '0.72rem',
                        letterSpacing:   '0.02em',
                        color:           '#9d99b8',
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border:          '1px solid rgba(255,255,255,0.08)',
                        padding:         '0.3rem 0.75rem',
                        borderRadius:    '999px',
                        whiteSpace:      'nowrap',
                      }}>
                        {study.region}
                      </span>

                      {/* Service link */}
                      <Link
                        href={`/services/${study.serviceSlug}`}
                        style={{
                          fontFamily:      'var(--font-inter)',
                          fontWeight:      500,
                          fontSize:        '0.72rem',
                          letterSpacing:   '0.02em',
                          color:           '#9d99b8',
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          border:          '1px solid rgba(255,255,255,0.06)',
                          padding:         '0.3rem 0.75rem',
                          borderRadius:    '999px',
                          whiteSpace:      'nowrap',
                          textDecoration:  'none',
                          transition:      'color 0.2s ease, border-color 0.2s ease',
                        }}
                      >
                        {study.service} ↗
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── Headline ── */}
                <h2 style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    800,
                  fontSize:      'clamp(1.3rem, 2.5vw, 1.75rem)',
                  color:         '#eceaf5',
                  lineHeight:    1.25,
                  letterSpacing: '-0.02em',
                  margin:        '0 0 2.25rem',
                  maxWidth:      '780px',
                }}>
                  {study.headline}
                </h2>

                {/* ── Challenge + Solution ── */}
                <div style={{
                  display:             'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap:                 '2rem',
                  marginBottom:        '2.5rem',
                }}
                className="cs-two-col"
                >
                  <div>
                    <h3 style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    700,
                      fontSize:      '0.75rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color:         '#5e5a7a',
                      margin:        '0 0 0.875rem',
                    }}>
                      The Challenge
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 300,
                      fontSize:   '0.95rem',
                      color:      '#9d99b8',
                      lineHeight: 1.85,
                      margin:     0,
                    }}>
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    700,
                      fontSize:      '0.75rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color:         '#5e5a7a',
                      margin:        '0 0 0.875rem',
                    }}>
                      The Solution
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 300,
                      fontSize:   '0.95rem',
                      color:      '#9d99b8',
                      lineHeight: 1.85,
                      margin:     0,
                    }}>
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* ── Outcomes grid ── */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '0.75rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color:         '#5e5a7a',
                    margin:        '0 0 1.25rem',
                  }}>
                    Outcomes
                  </h3>
                  <div style={{
                    display:             'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap:                 '1rem',
                  }}
                  className="cs-outcomes"
                  >
                    {study.outcomes.map((o) => (
                      <div
                        key={o.metric}
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          border:          '1px solid rgba(255,255,255,0.07)',
                          borderRadius:    '8px',
                          padding:         '1.25rem',
                          display:         'flex',
                          flexDirection:   'column',
                          gap:             '0.4rem',
                        }}
                      >
                        <span style={{
                          fontFamily:    'var(--font-inter)',
                          fontWeight:    800,
                          fontSize:      'clamp(1.25rem, 2.5vw, 1.6rem)',
                          color:         '#f5c518',
                          letterSpacing: '-0.02em',
                          lineHeight:    1.1,
                        }}>
                          {o.value}
                        </span>
                        <span style={{
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 400,
                          fontSize:   '0.78rem',
                          color:      '#5e5a7a',
                          lineHeight: 1.5,
                        }}>
                          {o.metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Bottom row: tech + badges ── */}
                <div style={{
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'space-between',
                  flexWrap:       'wrap',
                  gap:            '1rem',
                  paddingTop:     '1.5rem',
                  borderTop:      '1px solid rgba(255,255,255,0.06)',
                }}>
                  {/* Tech stack */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    600,
                      fontSize:      '0.7rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color:         '#5e5a7a',
                      marginRight:   '0.25rem',
                    }}>
                      Stack:
                    </span>
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily:      'var(--font-inter)',
                          fontWeight:      500,
                          fontSize:        '0.72rem',
                          color:           '#9d99b8',
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          border:          '1px solid rgba(255,255,255,0.07)',
                          padding:         '0.25rem 0.6rem',
                          borderRadius:    '5px',
                          whiteSpace:      'nowrap',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Duration + team size */}
                  <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
                    <div style={{
                      display:         'flex',
                      alignItems:      'center',
                      gap:             '0.4rem',
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border:          '1px solid rgba(255,255,255,0.07)',
                      borderRadius:    '6px',
                      padding:         '0.35rem 0.8rem',
                    }}>
                      <span style={{ fontSize: '0.8rem' }}>⏱</span>
                      <span style={{
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 500,
                        fontSize:   '0.78rem',
                        color:      '#9d99b8',
                      }}>
                        {study.duration}
                      </span>
                    </div>
                    <div style={{
                      display:         'flex',
                      alignItems:      'center',
                      gap:             '0.4rem',
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border:          '1px solid rgba(255,255,255,0.07)',
                      borderRadius:    '6px',
                      padding:         '0.35rem 0.8rem',
                    }}>
                      <span style={{ fontSize: '0.8rem' }}>👥</span>
                      <span style={{
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 500,
                        fontSize:   '0.78rem',
                        color:      '#9d99b8',
                      }}>
                        {study.teamSize}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* ── Editorial callout ─────────────────────────────────────── */}
        <section style={{
          borderTop:    '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background:   'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)',
          padding:      '5rem 0',
        }}>
          <div style={{
            maxWidth:  '760px',
            margin:    '0 auto',
            padding:   '0 1.5rem',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily:    'var(--font-inter)',
              fontWeight:    300,
              fontSize:      'clamp(1.1rem, 2.5vw, 1.5rem)',
              color:         '#eceaf5',
              lineHeight:    1.65,
              margin:        '0 0 1rem',
              letterSpacing: '-0.01em',
            }}>
              Every engagement starts with a brief.{' '}
              <span style={{ color: '#9d99b8' }}>Ours always do too.</span>
            </p>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize:   '0.95rem',
              color:      '#5e5a7a',
              lineHeight: 1.8,
              margin:     0,
            }}>
              We ask about constraints, not just requirements. We ask about what keeps you up at night,
              not just what you want to ship. That discipline is what turns requirements into systems
              that outlast the projects they were born from.
            </p>
          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────────────────────── */}
        <CTABanner
          heading="Tell Us Your Challenge."
          subtext="Every case study above started with a conversation. Bring your problem — we will work out whether we are the right team to solve it."
          ctaLabel="Start a Conversation"
          ctaHref="/contact"
        />

      </main>
      <Footer />

      <style>{`
        @media (max-width: 800px) {
          .cs-two-col { grid-template-columns: 1fr !important; }
          .cs-outcomes { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .cs-outcomes { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  )
}

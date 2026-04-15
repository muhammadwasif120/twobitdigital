'use client'

import { useEffect, useRef } from 'react'

const contactItems = [
  {
    label: 'General Enquiries',
    value: 'mwasif@twobitdigital.com',
    href:  'mailto:mwasif@twobitdigital.com',
    desc:  'Reach the Founder & CEO directly',
  },
  {
    label: 'New Projects & Sales',
    value: 'sales@twobitdigital.com',
    href:  'mailto:sales@twobitdigital.com',
    desc:  'For project briefs and commercial enquiries',
  },
  {
    label: 'LinkedIn',
    value: 'Two Bit Digital',
    href:  'https://linkedin.com/company/twobitdigital',
    desc:  'Follow company updates and announcements',
  },
  {
    label: 'Founder — LinkedIn',
    value: 'Muhammad Wasif',
    href:  'https://www.linkedin.com/in/muhammadwasiftbd/',
    desc:  'Connect directly with the Founder & CEO',
  },
]

const offices = [
  {
    flag:     '🇬🇧',
    market:   'United Kingdom',
    role:     'HQ & Legal Entity',
    lines:    ['Registered in England & Wales', 'Company No. 14710072', 'VAT registered'],
  },
  {
    flag:     '🇵🇰',
    market:   'Pakistan',
    role:     'Engineering Operations',
    lines:    ['Core development studio', 'SECP CUIN 0250598', 'Karachi — remote-first'],
  },
  {
    flag:     '🇺🇸',
    market:   'United States',
    role:     'Enterprise Clients',
    lines:    ['Remote delivery', 'US enterprise & fintech focus', 'EST / PST timezone coverage'],
  },
  {
    flag:     '🇦🇺',
    market:   'Australia',
    role:     'Deployment & Delivery',
    lines:    ['Managed service delivery', 'ANZ-region timezone support', 'AEST coverage'],
  },
]

export default function ContactDetails() {
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

      {/* ── Contact Details Card ───────────────────────────────────── */}
      <section style={{
        backgroundColor: '#09091a',
        borderTop:       '1px solid rgba(255,255,255,0.06)',
        borderBottom:    '1px solid rgba(255,255,255,0.06)',
        padding:         '5rem 0',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="reveal section-label" style={{ justifyContent: 'center' }}>Direct Contact</div>
            <h2 className="reveal reveal-delay-1" style={{
              fontFamily:    'var(--font-inter)',
              fontWeight:    800,
              fontSize:      'clamp(1.7rem, 3.5vw, 2.5rem)',
              color:         '#eceaf5',
              margin:        '0 0 0.75rem',
              letterSpacing: '-0.025em',
            }}>
              Reach us directly.
            </h2>
            <p className="reveal reveal-delay-2" style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize:   '1rem',
              color:      '#9d99b8',
              maxWidth:   '480px',
              margin:     '0 auto',
              lineHeight: 1.75,
            }}>
              Prefer a direct line? Every contact below is monitored by a principal — not a support queue.
            </p>
          </div>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap:                 '1rem',
            }}
            className="contact-cards-grid"
          >
            {contactItems.map((item, i) => (
              <div
                key={item.label}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  backgroundColor: '#11112b',
                  border:          '1px solid rgba(255,255,255,0.06)',
                  borderRadius:    '14px',
                  padding:         '1.5rem',
                  transition:      'border-color 0.28s ease, transform 0.28s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(245,197,24,0.22)'
                  el.style.transform   = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(255,255,255,0.06)'
                  el.style.transform   = 'translateY(0)'
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
                  {item.label}
                </p>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    fontFamily:     'var(--font-inter)',
                    fontWeight:     600,
                    fontSize:       '0.88rem',
                    color:          '#f5c518',
                    textDecoration: 'none',
                    display:        'block',
                    marginBottom:   '0.5rem',
                    wordBreak:      'break-all',
                    transition:     'color 0.2s ease',
                    lineHeight:     1.4,
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#c9a012')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#f5c518')}
                >
                  {item.value}
                </a>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  fontSize:   '0.78rem',
                  color:      '#5e5a7a',
                  lineHeight: 1.6,
                  margin:     0,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Response promise strip */}
          <div className="reveal" style={{
            marginTop:       '2.5rem',
            backgroundColor: '#11112b',
            border:          '1px solid rgba(245,197,24,0.12)',
            borderRadius:    '12px',
            padding:         '1.25rem 1.75rem',
            display:         'flex',
            alignItems:      'center',
            gap:             '1rem',
            flexWrap:        'wrap',
          }}>
            <div style={{
              width:           '36px',
              height:          '36px',
              borderRadius:    '50%',
              backgroundColor: 'rgba(245,197,24,0.08)',
              border:          '1px solid rgba(245,197,24,0.2)',
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              flexShrink:      0,
              fontSize:        '1rem',
            }}>
              ⏱
            </div>
            <div>
              <p style={{
                fontFamily:  'var(--font-inter)',
                fontWeight:  600,
                fontSize:    '0.9rem',
                color:       '#eceaf5',
                margin:      '0 0 0.2rem',
                letterSpacing: '-0.01em',
              }}>
                Priority response within one business day
              </p>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize:   '0.82rem',
                color:      '#5e5a7a',
                margin:     0,
                lineHeight: 1.6,
              }}>
                All inbound briefs are reviewed by a senior principal. We do not use automated screening
                for new project enquiries. You will hear from a real engineer within 24 hours on business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Offices Strip ──────────────────────────────────── */}
      <section style={{
        backgroundColor: '#0d0d22',
        borderBottom:    '1px solid rgba(255,255,255,0.06)',
        padding:         '5rem 0',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ marginBottom: '2.75rem' }}>
            <div className="reveal section-label">Global Offices</div>
            <h2 className="reveal reveal-delay-1" style={{
              fontFamily:    'var(--font-inter)',
              fontWeight:    800,
              fontSize:      'clamp(1.6rem, 3.5vw, 2.3rem)',
              color:         '#eceaf5',
              margin:        '0.5rem 0 0.5rem',
              letterSpacing: '-0.025em',
            }}>
              We operate where our clients operate.
            </h2>
            <p className="reveal reveal-delay-2" style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize:   '1rem',
              color:      '#9d99b8',
              maxWidth:   '520px',
              lineHeight: 1.75,
              margin:     0,
            }}>
              Four jurisdictions. Coordinated delivery. No proxy accounts or undisclosed outsourcing.
            </p>
          </div>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap:                 '1.25rem',
            }}
            className="offices-grid"
          >
            {offices.map((o, i) => (
              <div
                key={o.market}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  backgroundColor: '#11112b',
                  border:          '1px solid rgba(255,255,255,0.06)',
                  borderRadius:    '16px',
                  padding:         '1.75rem 1.5rem',
                  transition:      'border-color 0.28s ease, transform 0.28s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(245,197,24,0.22)'
                  el.style.transform   = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(255,255,255,0.06)'
                  el.style.transform   = 'translateY(0)'
                }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '0.85rem' }}>{o.flag}</div>
                <h3 style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    700,
                  fontSize:      '1rem',
                  color:         '#eceaf5',
                  margin:        '0 0 0.25rem',
                  letterSpacing: '-0.01em',
                }}>
                  {o.market}
                </h3>
                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontSize:      '0.7rem',
                  fontWeight:    600,
                  color:         '#f5c518',
                  margin:        '0 0 1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}>
                  {o.role}
                </p>
                <ul style={{
                  listStyle:  'none',
                  padding:    0,
                  margin:     0,
                  display:    'flex',
                  flexDirection:'column',
                  gap:        '0.4rem',
                }}>
                  {o.lines.map((line) => (
                    <li key={line} style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 300,
                      fontSize:   '0.8rem',
                      color:      '#5e5a7a',
                      lineHeight: 1.5,
                      display:    'flex',
                      alignItems: 'flex-start',
                      gap:        '0.4rem',
                    }}>
                      <span style={{ color: '#f5c518', fontSize: '0.6rem', marginTop: '0.3rem', flexShrink: 0 }}>▸</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .offices-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .contact-cards-grid { grid-template-columns: 1fr !important; }
          .offices-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

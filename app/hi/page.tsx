import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Muhammad Wasif — Founder, Two Bit Digital',
  description:
    "Hi — I'm Muhammad Wasif, founder of Two Bit Digital. We build AI-integrated software, event technology, and legal tech for regulated markets across the UK, US, Australia, and Pakistan.",
  robots: { index: false, follow: false }, // personal card page — not for search indexing
  openGraph: {
    title: 'Muhammad Wasif — Founder, Two Bit Digital',
    description: 'AI-integrated software, event tech, and legal tech for regulated markets.',
    url: 'https://twobitdigital.com/hi',
    type: 'profile',
  },
}

const GOLD   = '#f5c518'
const PURPLE = '#09091a'

const builds = [
  {
    emoji: '🤖',
    title: 'AI & Custom Software',
    desc:  'Bespoke platforms with AI workflows, RAG pipelines, and automation built in — not bolted on.',
    href:  '/services/ai-integration',
    color: '#7c6df0',
  },
  {
    emoji: '🎟️',
    title: 'Event Technology',
    desc:  'Tikkit X — mobile-first ticketing for Pakistan. Offline QR, JazzCash/EasyPaisa, live in production.',
    href:  '/products/tikkit-x',
    color: GOLD,
  },
  {
    emoji: '⚖️',
    title: 'Legal Technology',
    desc:  'Law firm websites, client portals, case management, and CPR compliance SaaS for UK and Pakistan.',
    href:  '/law-firm-websites-pakistan',
    color: '#34A853',
  },
]

const quickLinks = [
  { label: 'See our work',                href: '/work',                      external: false },
  { label: 'Law firm websites — Pakistan', href: '/law-firm-websites-pakistan', external: false },
  { label: 'Google Cloud Partner',         href: '/partners/google-cloud',     external: false },
  { label: 'Get in touch',                 href: '/contact',                   external: false },
  { label: 'LinkedIn',                     href: 'https://www.linkedin.com/company/twobitdigital', external: true },
]

const partners = [
  { name: 'Google Cloud', label: 'Partner Advantage', color: '#4285F4', dots: ['#4285F4','#EA4335','#FBBC05','#34A853'], href: '/partners/google-cloud' },
  { name: 'Meta',         label: 'Tech Provider',     color: '#0082FB', dots: ['#0082FB'], href: '/partners/meta' },
  { name: 'Supabase',     label: 'Tech Partner',      color: '#3ECF8E', dots: ['#3ECF8E'], href: '/partners/supabase' },
]

export default function HiPage() {
  return (
    <main style={{
      backgroundColor: PURPLE,
      minHeight:       '100vh',
      fontFamily:      'var(--font-inter)',
      paddingBottom:   '4rem',
    }}>

      {/* ── Back link ─────────────────────────────────────────────── */}
      <div style={{
        maxWidth: '480px',
        margin:   '0 auto',
        padding:  '1.25rem 1.5rem 0',
      }}>
        <Link href="/" style={{
          display:        'inline-flex',
          alignItems:     'center',
          gap:            '0.4rem',
          fontFamily:     'var(--font-inter)',
          fontWeight:     500,
          fontSize:       '0.75rem',
          color:          '#3a3860',
          textDecoration: 'none',
          letterSpacing:  '0.02em',
        }}>
          ← twobitdigital.com
        </Link>
      </div>

      {/* ── Hero / Personal intro ──────────────────────────────────── */}
      <section style={{
        maxWidth: '480px',
        margin:   '0 auto',
        padding:  '2.5rem 1.5rem 0',
      }}>

        {/* Avatar */}
        <div style={{
          width:           '72px',
          height:          '72px',
          borderRadius:    '50%',
          background:      `linear-gradient(135deg, ${GOLD}cc 0%, #b8860b 100%)`,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          marginBottom:    '1.5rem',
          boxShadow:       `0 0 0 4px ${GOLD}18, 0 0 32px ${GOLD}20`,
        }}>
          <span style={{
            fontFamily:    'var(--font-inter)',
            fontWeight:    800,
            fontSize:      '1.4rem',
            color:         '#09091a',
            letterSpacing: '-0.03em',
          }}>
            MW
          </span>
        </div>

        {/* Scan context */}
        <p style={{
          fontFamily:    'var(--font-inter)',
          fontWeight:    400,
          fontSize:      '0.72rem',
          color:         '#3a3860',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          margin:        '0 0 0.75rem',
        }}>
          You scanned my business card
        </p>

        {/* Name */}
        <h1 style={{
          fontFamily:    'var(--font-inter)',
          fontWeight:    800,
          fontSize:      'clamp(2rem, 8vw, 2.8rem)',
          color:         '#eceaf5',
          margin:        '0 0 0.35rem',
          letterSpacing: '-0.04em',
          lineHeight:    1.05,
        }}>
          Hi, I&apos;m Muhammad Wasif.
        </h1>

        {/* Role */}
        <p style={{
          fontFamily:    'var(--font-inter)',
          fontWeight:    500,
          fontSize:      '1rem',
          color:         GOLD,
          margin:        '0 0 1.75rem',
          letterSpacing: '-0.01em',
        }}>
          Founder & CEO, Two Bit Digital
        </p>

        {/* Bio */}
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 300,
          fontSize:   '1rem',
          color:      '#9d99b8',
          lineHeight: 1.8,
          margin:     '0 0 1rem',
        }}>
          I build software for regulated markets — AI-integrated platforms, legal technology,
          and event infrastructure. The studio is UK-registered, engineering runs out of Karachi,
          and we have clients across the UK, US, Australia, and Pakistan.
        </p>

        <p style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 300,
          fontSize:   '1rem',
          color:      '#9d99b8',
          lineHeight: 1.8,
          margin:     0,
        }}>
          We&apos;re a Google Cloud Partner, verified Meta Tech Provider, and UN-registered vendor.
          We build our own products too — Tikkit X is live, Averon Legal Systems is in beta,
          and Terra Core is in development.
        </p>
      </section>

      {/* ── Divider ───────────────────────────────────────────────── */}
      <div style={{
        maxWidth:       '480px',
        margin:         '2.5rem auto',
        padding:        '0 1.5rem',
      }}>
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }} />
      </div>

      {/* ── What we build ─────────────────────────────────────────── */}
      <section style={{
        maxWidth: '480px',
        margin:   '0 auto',
        padding:  '0 1.5rem',
      }}>
        <p style={{
          fontFamily:    'var(--font-inter)',
          fontWeight:    600,
          fontSize:      '0.65rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color:         '#3a3860',
          margin:        '0 0 1.25rem',
        }}>
          What we build
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {builds.map((b) => (
            <Link key={b.title} href={b.href} style={{
              display:         'flex',
              alignItems:      'flex-start',
              gap:             '1rem',
              backgroundColor: '#0d0d22',
              border:          '1px solid rgba(255,255,255,0.06)',
              borderRadius:    '12px',
              padding:         '1.1rem 1.25rem',
              textDecoration:  'none',
              transition:      'border-color 0.2s',
            }}>
              <span style={{ fontSize: '1.3rem', marginTop: '1px', flexShrink: 0 }}>
                {b.emoji}
              </span>
              <div>
                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    700,
                  fontSize:      '0.9rem',
                  color:         '#eceaf5',
                  margin:        '0 0 0.3rem',
                  letterSpacing: '-0.01em',
                }}>
                  {b.title}
                </p>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  fontSize:   '0.82rem',
                  color:      '#9d99b8',
                  lineHeight: 1.65,
                  margin:     0,
                }}>
                  {b.desc}
                </p>
              </div>
              <span style={{
                marginLeft:  'auto',
                color:       b.color,
                fontSize:    '1rem',
                flexShrink:  0,
                marginTop:   '1px',
                opacity:     0.7,
              }}>
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────── */}
      <div style={{
        maxWidth: '480px',
        margin:   '2.5rem auto',
        padding:  '0 1.5rem',
      }}>
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }} />
      </div>

      {/* ── Quick links ───────────────────────────────────────────── */}
      <section style={{
        maxWidth: '480px',
        margin:   '0 auto',
        padding:  '0 1.5rem',
      }}>
        <p style={{
          fontFamily:    'var(--font-inter)',
          fontWeight:    600,
          fontSize:      '0.65rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color:         '#3a3860',
          margin:        '0 0 1.25rem',
        }}>
          Explore
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {quickLinks.map((l) => {
            const linkStyle = {
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'space-between',
              backgroundColor: '#0d0d22',
              border:          '1px solid rgba(255,255,255,0.06)',
              borderRadius:    '10px',
              padding:         '1rem 1.25rem',
              textDecoration:  'none',
              color:           '#eceaf5',
              fontFamily:      'var(--font-inter)',
              fontWeight:      500 as const,
              fontSize:        '0.9rem',
              letterSpacing:   '-0.01em',
            }
            const arrow = (
              <span style={{ color: '#3a3860', fontSize: '0.85rem' }}>
                {l.external ? '↗' : '→'}
              </span>
            )
            return l.external ? (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                {l.label}{arrow}
              </a>
            ) : (
              <Link key={l.label} href={l.href} style={linkStyle}>
                {l.label}{arrow}
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────── */}
      <div style={{
        maxWidth: '480px',
        margin:   '2.5rem auto',
        padding:  '0 1.5rem',
      }}>
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }} />
      </div>

      {/* ── Partners ──────────────────────────────────────────────── */}
      <section style={{
        maxWidth: '480px',
        margin:   '0 auto',
        padding:  '0 1.5rem',
      }}>
        <p style={{
          fontFamily:    'var(--font-inter)',
          fontWeight:    600,
          fontSize:      '0.65rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color:         '#3a3860',
          margin:        '0 0 1.25rem',
        }}>
          Technology Partnerships
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {partners.map((p) => (
            <Link key={p.name} href={p.href} style={{
              display:         'flex',
              alignItems:      'center',
              gap:             '0.85rem',
              backgroundColor: '#0d0d22',
              border:          '1px solid rgba(255,255,255,0.06)',
              borderRadius:    '10px',
              padding:         '0.85rem 1.25rem',
              textDecoration:  'none',
            }}>
              {/* Colour dots */}
              <div style={{ display: 'flex', gap: '3px', flexShrink: 0 }}>
                {p.dots.map((c, i) => (
                  <div key={i} style={{
                    width:           p.dots.length > 1 ? '7px' : '10px',
                    height:          p.dots.length > 1 ? '7px' : '10px',
                    borderRadius:    '50%',
                    backgroundColor: c,
                  }} />
                ))}
              </div>

              <div style={{ flex: 1 }}>
                <span style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    600,
                  fontSize:      '0.85rem',
                  color:         '#eceaf5',
                  letterSpacing: '-0.01em',
                }}>
                  {p.name}
                </span>
                <span style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  fontSize:   '0.75rem',
                  color:      '#5e5a7a',
                  marginLeft: '0.5rem',
                }}>
                  {p.label}
                </span>
              </div>

              <div style={{
                backgroundColor: `${p.color}14`,
                border:          `1px solid ${p.color}30`,
                borderRadius:    '4px',
                padding:         '0.15rem 0.5rem',
              }}>
                <span style={{
                  fontFamily:   'var(--font-inter)',
                  fontWeight:   600,
                  fontSize:     '0.62rem',
                  color:        p.color,
                  letterSpacing:'0.04em',
                }}>
                  ✓ Verified
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────── */}
      <div style={{
        maxWidth: '480px',
        margin:   '2.5rem auto',
        padding:  '0 1.5rem',
      }}>
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }} />
      </div>

      {/* ── Credentials strip ─────────────────────────────────────── */}
      <section style={{
        maxWidth: '480px',
        margin:   '0 auto',
        padding:  '0 1.5rem',
      }}>
        <div style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:                 '0.5rem',
        }}>
          {[
            { label: 'UN Vendor',      value: '#1177996'   },
            { label: 'D&B D-U-N-S®',  value: '77-532-7428' },
            { label: 'UK Co. No.',     value: '14710072'   },
            { label: 'SECP (PK)',      value: '0250598'    },
          ].map((c) => (
            <div key={c.label} style={{
              backgroundColor: '#0d0d22',
              border:          '1px solid rgba(255,255,255,0.06)',
              borderRadius:    '8px',
              padding:         '0.75rem 1rem',
            }}>
              <p style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    600,
                fontSize:      '0.62rem',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color:         '#3a3860',
                margin:        '0 0 0.2rem',
              }}>
                {c.label}
              </p>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                fontSize:   '0.78rem',
                color:      '#9d99b8',
                margin:     0,
              }}>
                {c.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section style={{
        maxWidth: '480px',
        margin:   '2.5rem auto 0',
        padding:  '0 1.5rem',
      }}>
        <div style={{
          background:   `linear-gradient(135deg, #0d0d22 0%, #11112b 100%)`,
          border:       `1px solid ${GOLD}25`,
          borderRadius: '16px',
          padding:      '2rem',
          textAlign:    'center',
        }}>
          <p style={{
            fontFamily:    'var(--font-inter)',
            fontWeight:    800,
            fontSize:      '1.3rem',
            color:         '#eceaf5',
            margin:        '0 0 0.5rem',
            letterSpacing: '-0.03em',
          }}>
            Let&apos;s talk.
          </p>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 300,
            fontSize:   '0.875rem',
            color:      '#9d99b8',
            lineHeight: 1.7,
            margin:     '0 0 1.5rem',
          }}>
            If you&apos;ve got a project in mind — or just want to understand what we do —
            drop me a line.
          </p>

          <Link href="/contact" style={{
            display:         'block',
            backgroundColor: GOLD,
            color:           '#09091a',
            fontFamily:      'var(--font-inter)',
            fontWeight:      700,
            fontSize:        '0.95rem',
            padding:         '0.95rem 1.5rem',
            borderRadius:    '10px',
            textDecoration:  'none',
            letterSpacing:   '-0.01em',
            marginBottom:    '0.75rem',
          }}>
            Start a conversation →
          </Link>

          <a href="mailto:sales@twobitdigital.com" style={{
            display:        'block',
            color:          '#5e5a7a',
            fontFamily:     'var(--font-inter)',
            fontWeight:     400,
            fontSize:       '0.8rem',
            textDecoration: 'none',
            letterSpacing:  '0.01em',
          }}>
            sales@twobitdigital.com
          </a>
        </div>
      </section>

      {/* ── Footer note ───────────────────────────────────────────── */}
      <div style={{
        maxWidth:  '480px',
        margin:    '2.5rem auto 0',
        padding:   '0 1.5rem',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 300,
          fontSize:   '0.72rem',
          color:      '#2a2848',
          lineHeight: 1.6,
        }}>
          Two Bit Digital Ltd · Companies House #14710072
          <br />
          UK · US · Australia · Pakistan
        </p>
      </div>

    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'Media Kit | Two Bit Digital — Brand Assets & Press Resources',
  description:
    'Official brand assets, logo variants, colour palette, and typography guidelines for Two Bit Digital Ltd. For press, partnership, and integration listing use.',
  alternates: { canonical: 'https://twobitdigital.com/media-kit' },
  openGraph: {
    title: 'Media Kit | Two Bit Digital',
    description:
      'Official brand assets, logos, colour palette, and typography guidelines for Two Bit Digital Ltd.',
    url: 'https://twobitdigital.com/media-kit',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

// ── Shared style atoms ──────────────────────────────────────────────────────

const h2Style = {
  fontFamily:    'var(--font-inter)',
  fontWeight:    800 as const,
  fontSize:      'clamp(1.6rem, 3vw, 2.2rem)',
  color:         '#eceaf5',
  margin:        '0 0 0.75rem',
  letterSpacing: '-0.03em',
  lineHeight:    1.15,
}

const sectionLabelStyle = {
  fontFamily:    'var(--font-inter)',
  fontWeight:    600 as const,
  fontSize:      '0.68rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color:         '#f5c518',
  marginBottom:  '0.6rem',
  display:       'block' as const,
}

const bodyStyle = {
  fontFamily: 'var(--font-inter)',
  fontWeight: 300 as const,
  fontSize:   '0.95rem',
  color:      '#9d99b8',
  lineHeight: 1.85,
  margin:     '0 0 0',
}

const cardStyle = {
  backgroundColor: '#11112b',
  border:          '1px solid rgba(255,255,255,0.06)',
  borderRadius:    '14px',
  overflow:        'hidden' as const,
}

// ── Colour palette ──────────────────────────────────────────────────────────

const palette = [
  {
    name:  'Navy',
    hex:   '#080E1C',
    rgb:   'RGB 8, 14, 28',
    role:  'Primary background',
    light: false,
  },
  {
    name:  'Gold',
    hex:   '#F5C518',
    rgb:   'RGB 245, 197, 24',
    role:  'Brand accent · CTAs · highlights',
    light: true,
  },
  {
    name:  'Purple',
    hex:   '#7B5EA7',
    rgb:   'RGB 123, 94, 167',
    role:  'Secondary accent',
    light: false,
  },
  {
    name:  'Purple Light',
    hex:   '#9B7EC8',
    rgb:   'RGB 155, 126, 200',
    role:  'Body text on dark',
    light: false,
  },
  {
    name:  'Off White',
    hex:   '#F0F4FF',
    rgb:   'RGB 240, 244, 255',
    role:  'Headings · primary text',
    light: true,
  },
]

// ── Logo variants ───────────────────────────────────────────────────────────

const logos = [
  {
    name:    'Primary — Dark Background',
    desc:    'Use on dark or navy backgrounds. This is the canonical logo variant.',
    bg:      '#09091a',
    border:  '1px solid rgba(255,255,255,0.08)',
    file:    '/media/logo-dark.svg',
    textOne: '#eceaf5',
    textTwo: '#f5c518',
  },
  {
    name:    'Light Background',
    desc:    'Use on white or very light grey backgrounds only.',
    bg:      '#f8f8f8',
    border:  '1px solid rgba(0,0,0,0.06)',
    file:    '/media/logo-light.svg',
    textOne: '#080E1C',
    textTwo: '#c49a0a',
  },
  {
    name:    'Gold Background',
    desc:    'Use on brand-gold (#F5C518) promotional materials.',
    bg:      '#F5C518',
    border:  '1px solid rgba(0,0,0,0.06)',
    file:    '/media/logo-gold.svg',
    textOne: '#080E1C',
    textTwo: '#080E1C',
  },
]

const productLogos = [
  {
    name:    'Tikkit X',
    desc:    'Event ticketing & management platform for Pakistan.',
    bg:      '#09091a',
    border:  '1px solid rgba(255,255,255,0.08)',
    file:    '/media/tikkit-logo.svg',
    textOne: '#eceaf5',
    textTwo: '#f5c518',
  },
  {
    name:    'Averon Legal Systems',
    desc:    'CPR Part 47/36 case management SaaS for UK law firms.',
    bg:      '#09091a',
    border:  '1px solid rgba(255,255,255,0.08)',
    file:    '/media/averon-logo.svg',
    textOne: '#eceaf5',
    textTwo: '#9B7EC8',
  },
]

// ── Page ────────────────────────────────────────────────────────────────────

export default function MediaKitPage() {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section style={{
          background:    'linear-gradient(180deg, #09091a 0%, #0d0d22 100%)',
          paddingTop:    '9rem',
          paddingBottom: '4rem',
          borderBottom:  '1px solid rgba(255,255,255,0.06)',
          position:      'relative',
          overflow:      'hidden',
        }}>
          <div style={{
            position:     'absolute',
            top:          '-80px',
            left:         '50%',
            transform:    'translateX(-50%)',
            width:        '800px',
            height:       '400px',
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
            <Breadcrumb crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Media Kit' },
            ]} />

            <div style={{ maxWidth: '780px', marginTop: '2rem' }}>
              <span style={sectionLabelStyle}>Press &amp; Partners</span>
              <h1 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(2.2rem, 5vw, 3.5rem)',
                lineHeight:    1.08,
                color:         '#eceaf5',
                margin:        '0 0 1.5rem',
                letterSpacing: '-0.03em',
              }}>
                Two Bit Digital{' '}
                <span style={{ color: '#f5c518' }}>Media Kit</span>
              </h1>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize:   'clamp(1rem, 2vw, 1.15rem)',
                color:      '#9d99b8',
                lineHeight: 1.8,
                margin:     '0 0 2.5rem',
                maxWidth:   '620px',
              }}>
                Official brand assets, logo variants, colour palette, and typography guidelines
                for use in press coverage, partnership listings, and integration directories.
                Please read the usage guidelines before use.
              </p>

              {/* Quick-download bar */}
              <div style={{
                display:         'inline-flex',
                alignItems:      'center',
                gap:             '0.6rem',
                backgroundColor: 'rgba(245,197,24,0.06)',
                border:          '1px solid rgba(245,197,24,0.18)',
                borderRadius:    '8px',
                padding:         '0.85rem 1.25rem',
              }}>
                <span style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize:   '0.82rem',
                  color:      '#9d99b8',
                  fontWeight: 300,
                }}>
                  For partnership or press enquiries:
                </span>
                <a href="mailto:sales@twobitdigital.com" style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    600,
                  fontSize:      '0.82rem',
                  color:         '#f5c518',
                  textDecoration:'none',
                }}>
                  sales@twobitdigital.com ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Studio Info ───────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#0d0d22', padding: '5rem 0' }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <span style={sectionLabelStyle}>About the Studio</span>
            <h2 style={{ ...h2Style, marginBottom: '2.5rem' }}>Company overview</h2>

            <div className="info-grid" style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1fr',
              gap:                 '1.5rem',
              alignItems:          'start',
            }}>
              {/* Info table */}
              <div style={cardStyle}>
                {[
                  { label: 'Full Legal Name',  value: 'Two Bit Digital Ltd' },
                  { label: 'Studio Type',      value: 'SaaS Development & AI Engineering Studio' },
                  { label: 'Website',          value: 'twobitdigital.com', href: 'https://twobitdigital.com' },
                  { label: 'Founder & CEO',    value: 'Muhammad Wasif', href: 'https://www.linkedin.com/in/muhammadwasiftbd/' },
                  { label: 'Registered In',    value: 'England and Wales · Co. No. 14710072' },
                  { label: 'UN Vendor No.',    value: '1177996' },
                  { label: 'D&B D-U-N-S',      value: '77-532-7428' },
                  { label: 'Markets',          value: 'UK · US · Australia · Pakistan' },
                ].map((row, i, arr) => (
                  <div key={row.label} style={{
                    display:       'flex',
                    gap:           '1rem',
                    padding:       '1rem 1.5rem',
                    borderBottom:  i < arr.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    alignItems:    'baseline',
                  }}>
                    <span style={{
                      fontFamily:    'var(--font-inter)',
                      fontSize:      '0.72rem',
                      fontWeight:    600,
                      letterSpacing: '0.04em',
                      color:         '#5e5a7a',
                      textTransform: 'uppercase',
                      whiteSpace:    'nowrap',
                      minWidth:      '130px',
                      flexShrink:    0,
                    }}>
                      {row.label}
                    </span>
                    {row.href ? (
                      <a href={row.href} target="_blank" rel="noopener noreferrer" style={{
                        fontFamily:    'var(--font-inter)',
                        fontSize:      '0.875rem',
                        fontWeight:    500,
                        color:         '#f5c518',
                        textDecoration:'none',
                      }}>
                        {row.value} ↗
                      </a>
                    ) : (
                      <span style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize:   '0.875rem',
                        fontWeight: 400,
                        color:      '#eceaf5',
                      }}>
                        {row.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* One-liner + products */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{
                  ...cardStyle,
                  padding: '1.75rem',
                }}>
                  <p style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    600,
                    fontSize:      '0.68rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color:         '#f5c518',
                    margin:        '0 0 0.85rem',
                  }}>
                    Approved One-Liner
                  </p>
                  <p style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    400,
                    fontSize:      '1rem',
                    color:         '#eceaf5',
                    lineHeight:    1.7,
                    margin:        0,
                    letterSpacing: '-0.01em',
                  }}>
                    &ldquo;Two Bit Digital is a SaaS development studio specialising in multi-tenant
                    web applications, AI-powered workflows, and product engineering — building
                    Tikkit X, Averon Legal Systems, and Terra Core.&rdquo;
                  </p>
                </div>

                <div style={{ ...cardStyle, padding: '1.75rem' }}>
                  <p style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    600,
                    fontSize:      '0.68rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color:         '#f5c518',
                    margin:        '0 0 1rem',
                  }}>
                    In-House Products
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      { name: 'Tikkit X',              status: 'Live',   desc: 'Event ticketing & management · Pakistan' },
                      { name: 'Averon Legal Systems',  status: 'Beta',   desc: 'CPR Part 47/36 case management · UK law firms' },
                      { name: 'Terra Core',            status: 'Dev',    desc: 'Zero-knowledge document intelligence' },
                    ].map((p) => (
                      <div key={p.name} style={{
                        display:   'flex',
                        gap:       '0.75rem',
                        alignItems:'center',
                      }}>
                        <span style={{
                          fontFamily:      'var(--font-inter)',
                          fontSize:        '0.65rem',
                          fontWeight:      600,
                          color:           p.status === 'Live' ? '#3ECF8E' : p.status === 'Beta' ? '#f5c518' : '#9d99b8',
                          backgroundColor: p.status === 'Live' ? '#3ECF8E18' : p.status === 'Beta' ? 'rgba(245,197,24,0.1)' : 'rgba(157,153,184,0.1)',
                          border:          `1px solid ${p.status === 'Live' ? '#3ECF8E30' : p.status === 'Beta' ? 'rgba(245,197,24,0.25)' : 'rgba(157,153,184,0.2)'}`,
                          borderRadius:    '4px',
                          padding:         '0.2rem 0.5rem',
                          whiteSpace:      'nowrap',
                          letterSpacing:   '0.04em',
                          minWidth:        '40px',
                          textAlign:       'center',
                        }}>
                          {p.status}
                        </span>
                        <div>
                          <span style={{
                            fontFamily: 'var(--font-inter)',
                            fontWeight: 600,
                            fontSize:   '0.875rem',
                            color:      '#eceaf5',
                          }}>
                            {p.name}
                          </span>
                          <span style={{
                            fontFamily: 'var(--font-inter)',
                            fontWeight: 300,
                            fontSize:   '0.78rem',
                            color:      '#5e5a7a',
                            marginLeft: '0.5rem',
                          }}>
                            {p.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Logos — Studio ────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          padding:         '5rem 0',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <span style={sectionLabelStyle}>Logos</span>
            <h2 style={{ ...h2Style, marginBottom: '0.5rem' }}>Studio wordmark</h2>
            <p style={{ ...bodyStyle, marginBottom: '3rem', maxWidth: '560px' }}>
              Three approved background variants. Always use the correct variant for the
              background colour — never place the dark variant on a light background.
            </p>

            <div className="logo-grid" style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap:                 '1.25rem',
              marginBottom:        '1rem',
            }}>
              {logos.map((logo) => (
                <div key={logo.name} style={cardStyle}>
                  {/* Preview */}
                  <div style={{
                    backgroundColor: logo.bg,
                    border:          logo.border,
                    borderRadius:    '10px 10px 0 0',
                    padding:         '3rem 2rem',
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                  }}>
                    {/* Wordmark — exact nav treatment */}
                    <div style={{
                      fontFamily:  'var(--font-inter)',
                      fontWeight:  700,
                      fontSize:    '1.3rem',
                      display:     'flex',
                      gap:         '0.3rem',
                    }}>
                      <span style={{ color: logo.textOne, letterSpacing: '-0.03em' }}>Two Bit</span>
                      <span style={{ color: logo.textTwo, letterSpacing: '-0.03em' }}>Digital</span>
                    </div>
                  </div>
                  {/* Info + download */}
                  <div style={{ padding: '1.25rem 1.5rem' }}>
                    <p style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    600,
                      fontSize:      '0.85rem',
                      color:         '#eceaf5',
                      margin:        '0 0 0.35rem',
                      letterSpacing: '-0.01em',
                    }}>
                      {logo.name}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize:   '0.78rem',
                      color:      '#5e5a7a',
                      fontWeight: 300,
                      margin:     '0 0 1rem',
                      lineHeight: 1.6,
                    }}>
                      {logo.desc}
                    </p>
                    <a
                      href={logo.file}
                      download
                      style={{
                        display:         'inline-flex',
                        alignItems:      'center',
                        gap:             '0.4rem',
                        fontFamily:      'var(--font-inter)',
                        fontWeight:      600,
                        fontSize:        '0.78rem',
                        color:           '#f5c518',
                        textDecoration:  'none',
                        backgroundColor: 'rgba(245,197,24,0.07)',
                        border:          '1px solid rgba(245,197,24,0.2)',
                        borderRadius:    '6px',
                        padding:         '0.45rem 0.85rem',
                      }}
                    >
                      ↓ Download SVG
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Logos — Products ──────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
          padding:         '5rem 0',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <span style={sectionLabelStyle}>Product Marks</span>
            <h2 style={{ ...h2Style, marginBottom: '0.5rem' }}>Product wordmarks</h2>
            <p style={{ ...bodyStyle, marginBottom: '3rem', maxWidth: '560px' }}>
              Individual wordmarks for Tikkit X and Averon Legal Systems. Use only in the context
              of referring to those specific products.
            </p>

            <div className="product-logo-grid" style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1fr',
              gap:                 '1.25rem',
            }}>
              {productLogos.map((logo) => (
                <div key={logo.name} style={cardStyle}>
                  <div style={{
                    backgroundColor: logo.bg,
                    border:          logo.border,
                    borderRadius:    '10px 10px 0 0',
                    padding:         '3rem 2rem',
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                  }}>
                    <div style={{
                      fontFamily:  'var(--font-inter)',
                      fontWeight:  800,
                      fontSize:    '1.4rem',
                      display:     'flex',
                      gap:         '0.25rem',
                      letterSpacing:'-0.02em',
                    }}>
                      <span style={{ color: logo.textOne }}>{logo.name.split(' ')[0]}</span>
                      {logo.name.split(' ').slice(1).length > 0 && (
                        <span style={{ color: logo.textTwo }}>
                          {' '}{logo.name.split(' ').slice(1).join(' ')}
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={{ padding: '1.25rem 1.5rem' }}>
                    <p style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    600,
                      fontSize:      '0.85rem',
                      color:         '#eceaf5',
                      margin:        '0 0 0.35rem',
                      letterSpacing: '-0.01em',
                    }}>
                      {logo.name}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize:   '0.78rem',
                      color:      '#5e5a7a',
                      fontWeight: 300,
                      margin:     '0 0 1rem',
                      lineHeight: 1.6,
                    }}>
                      {logo.desc}
                    </p>
                    <a
                      href={logo.file}
                      download
                      style={{
                        display:         'inline-flex',
                        alignItems:      'center',
                        gap:             '0.4rem',
                        fontFamily:      'var(--font-inter)',
                        fontWeight:      600,
                        fontSize:        '0.78rem',
                        color:           '#f5c518',
                        textDecoration:  'none',
                        backgroundColor: 'rgba(245,197,24,0.07)',
                        border:          '1px solid rgba(245,197,24,0.2)',
                        borderRadius:    '6px',
                        padding:         '0.45rem 0.85rem',
                      }}
                    >
                      ↓ Download SVG
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Colour Palette ────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          padding:         '5rem 0',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <span style={sectionLabelStyle}>Colour Palette</span>
            <h2 style={{ ...h2Style, marginBottom: '0.5rem' }}>Brand colours</h2>
            <p style={{ ...bodyStyle, marginBottom: '3rem', maxWidth: '560px' }}>
              The complete Two Bit Digital colour system. Always use exact hex values —
              do not approximate.
            </p>

            <div className="palette-grid" style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap:                 '1rem',
            }}>
              {palette.map((c) => (
                <div key={c.hex} style={cardStyle}>
                  {/* Swatch */}
                  <div style={{
                    backgroundColor: c.hex,
                    height:          '110px',
                    borderRadius:    '10px 10px 0 0',
                  }} />
                  {/* Info */}
                  <div style={{ padding: '1.1rem 1.15rem' }}>
                    <p style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    700,
                      fontSize:      '0.9rem',
                      color:         '#eceaf5',
                      margin:        '0 0 0.2rem',
                      letterSpacing: '-0.01em',
                    }}>
                      {c.name}
                    </p>
                    <p style={{
                      fontFamily:      'var(--font-inter)',
                      fontWeight:      500,
                      fontSize:        '0.78rem',
                      color:           '#f5c518',
                      margin:          '0 0 0.35rem',
                      fontVariantNumeric: 'tabular-nums',
                      letterSpacing:   '0.01em',
                    }}>
                      {c.hex}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize:   '0.7rem',
                      color:      '#5e5a7a',
                      fontWeight: 300,
                      margin:     '0 0 0.3rem',
                    }}>
                      {c.rgb}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize:   '0.72rem',
                      color:      '#9d99b8',
                      fontWeight: 300,
                      margin:     0,
                      lineHeight: 1.5,
                    }}>
                      {c.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Typography ────────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
          padding:         '5rem 0',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <span style={sectionLabelStyle}>Typography</span>
            <h2 style={{ ...h2Style, marginBottom: '0.5rem' }}>Type system</h2>
            <p style={{ ...bodyStyle, marginBottom: '3rem', maxWidth: '560px' }}>
              Two Bit Digital uses a single typeface across all brand contexts. Do not
              substitute or pair with other fonts.
            </p>

            <div style={cardStyle}>
              <div style={{ padding: '2.5rem' }}>
                {/* Specimen */}
                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    800,
                  fontSize:      'clamp(2.5rem, 6vw, 4.5rem)',
                  color:         '#eceaf5',
                  letterSpacing: '-0.04em',
                  lineHeight:    1,
                  margin:        '0 0 0.25rem',
                }}>
                  Inter
                </p>
                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    300,
                  fontSize:      '1.1rem',
                  color:         '#5e5a7a',
                  letterSpacing: '-0.01em',
                  margin:        '0 0 2.5rem',
                }}>
                  The only typeface used across twobitdigital.com
                </p>

                {/* Weights in use */}
                <div style={{
                  display:             'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap:                 '1.5rem',
                  borderTop:           '1px solid rgba(255,255,255,0.06)',
                  paddingTop:          '2rem',
                  marginBottom:        '2.5rem',
                }}
                className="weight-grid"
                >
                  {[
                    { weight: 300, label: 'Light',     sample: 'Body copy, supporting text', usage: 'Long-form text' },
                    { weight: 400, label: 'Regular',   sample: 'Standard interface text',    usage: 'Default UI' },
                    { weight: 500, label: 'Medium',    sample: 'Navigation items',           usage: 'Nav · Labels' },
                    { weight: 700, label: 'Bold',      sample: 'Card headings',              usage: 'Sub-headings' },
                    { weight: 800, label: 'ExtraBold', sample: 'Page headings',              usage: 'H1 · H2 · Brand' },
                  ].map((w) => (
                    <div key={w.weight}>
                      <p style={{
                        fontFamily:    'var(--font-inter)',
                        fontWeight:    w.weight,
                        fontSize:      '1.5rem',
                        color:         '#eceaf5',
                        letterSpacing: '-0.02em',
                        margin:        '0 0 0.3rem',
                        lineHeight:    1,
                      }}>
                        Aa
                      </p>
                      <p style={{
                        fontFamily:    'var(--font-inter)',
                        fontWeight:    600,
                        fontSize:      '0.7rem',
                        color:         '#f5c518',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        margin:        '0 0 0.25rem',
                      }}>
                        {w.weight} · {w.label}
                      </p>
                      <p style={{
                        fontFamily: 'var(--font-inter)',
                        fontWeight: w.weight,
                        fontSize:   '0.78rem',
                        color:      '#9d99b8',
                        margin:     '0 0 0.2rem',
                        lineHeight: 1.5,
                      }}>
                        {w.sample}
                      </p>
                      <p style={{
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 300,
                        fontSize:   '0.7rem',
                        color:      '#5e5a7a',
                        margin:     0,
                      }}>
                        {w.usage}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Scale */}
                <div style={{
                  borderTop:  '1px solid rgba(255,255,255,0.06)',
                  paddingTop: '2rem',
                }}>
                  <p style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    600,
                    fontSize:      '0.68rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color:         '#5e5a7a',
                    margin:        '0 0 1.5rem',
                  }}>
                    Type Scale (desktop)
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {[
                      { role: 'H1',   size: '3.6rem / 57.6px', weight: 800 },
                      { role: 'H2',   size: '2.4rem / 38.4px', weight: 800 },
                      { role: 'H3',   size: '1.1rem / 17.6px', weight: 700 },
                      { role: 'Body', size: '1rem / 16px',     weight: 300 },
                      { role: 'Small','size': '0.875rem / 14px', weight: 300 },
                      { role: 'Label', size: '0.7rem / 11.2px', weight: 600 },
                    ].map((t) => (
                      <div key={t.role} style={{
                        display:     'flex',
                        alignItems:  'center',
                        gap:         '1.5rem',
                      }}>
                        <span style={{
                          fontFamily:  'var(--font-inter)',
                          fontWeight:  600,
                          fontSize:    '0.7rem',
                          color:       '#5e5a7a',
                          letterSpacing:'0.04em',
                          width:        '40px',
                          flexShrink:   0,
                          textTransform:'uppercase',
                        }}>
                          {t.role}
                        </span>
                        <span style={{
                          fontFamily: 'var(--font-inter)',
                          fontWeight: t.weight,
                          fontSize:   '0.875rem',
                          color:      '#eceaf5',
                          flex:        1,
                        }}>
                          The quick brown fox — Inter {t.weight}
                        </span>
                        <span style={{
                          fontFamily:      'var(--font-inter)',
                          fontWeight:      300,
                          fontSize:        '0.72rem',
                          color:           '#5e5a7a',
                          whiteSpace:      'nowrap',
                          fontVariantNumeric:'tabular-nums',
                        }}>
                          {t.size}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Usage Guidelines ──────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          padding:         '5rem 0',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <span style={sectionLabelStyle}>Guidelines</span>
            <h2 style={{ ...h2Style, marginBottom: '0.5rem' }}>Usage rules</h2>
            <p style={{ ...bodyStyle, marginBottom: '3rem', maxWidth: '560px' }}>
              These guidelines ensure consistent, respectful use of the Two Bit Digital brand.
              For exceptions or bespoke use cases, contact us directly.
            </p>

            <div className="guidelines-grid" style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1fr',
              gap:                 '1.25rem',
            }}>
              {/* Do */}
              <div style={{
                ...cardStyle,
                borderColor: 'rgba(62,207,142,0.2)',
                padding:     '2rem',
              }}>
                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    700,
                  fontSize:      '0.85rem',
                  color:         '#3ECF8E',
                  margin:        '0 0 1.25rem',
                  letterSpacing: '0.02em',
                }}>
                  ✓ Do
                </p>
                <ul style={{
                  listStyle:    'none',
                  padding:      0,
                  margin:       0,
                  display:      'flex',
                  flexDirection:'column',
                  gap:          '0.85rem',
                }}>
                  {[
                    'Use the correct logo variant for the background colour',
                    'Maintain clear space equal to the height of the "T" in "Two" on all sides',
                    'Use the full name "Two Bit Digital" on first reference in any document',
                    'Use exact hex values for brand colours — never approximate',
                    'Use Inter at the correct weights as specified in this guide',
                    'Credit Two Bit Digital Ltd when reproducing case studies or testimonials',
                    'Link the wordmark to twobitdigital.com when used in digital contexts',
                  ].map((item) => (
                    <li key={item} style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 300,
                      fontSize:   '0.875rem',
                      color:      '#9d99b8',
                      lineHeight: 1.65,
                      display:    'flex',
                      gap:        '0.6rem',
                    }}>
                      <span style={{ color: '#3ECF8E', flexShrink: 0, fontWeight: 600 }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don't */}
              <div style={{
                ...cardStyle,
                borderColor: 'rgba(255,100,100,0.15)',
                padding:     '2rem',
              }}>
                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    700,
                  fontSize:      '0.85rem',
                  color:         '#ff6464',
                  margin:        '0 0 1.25rem',
                  letterSpacing: '0.02em',
                }}>
                  ✕ Don&apos;t
                </p>
                <ul style={{
                  listStyle:    'none',
                  padding:      0,
                  margin:       0,
                  display:      'flex',
                  flexDirection:'column',
                  gap:          '0.85rem',
                }}>
                  {[
                    'Abbreviate to "TBD" — this is not an approved short form',
                    'Use the wordmark on an unapproved background colour',
                    'Stretch, distort, rotate, or apply effects to the wordmark',
                    'Reproduce the wordmark in any colour other than the three approved variants',
                    'Use outdated or self-modified versions of the logo',
                    'Imply endorsement or partnership without written approval',
                    'Place the wordmark at a size where it is not clearly legible',
                  ].map((item) => (
                    <li key={item} style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 300,
                      fontSize:   '0.875rem',
                      color:      '#9d99b8',
                      lineHeight: 1.65,
                      display:    'flex',
                      gap:        '0.6rem',
                    }}>
                      <span style={{ color: '#ff6464', flexShrink: 0, fontWeight: 600 }}>−</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
          padding:         '5rem 0',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth:  '1200px',
            margin:    '0 auto',
            padding:   '0 1.5rem',
            textAlign: 'center',
          }}>
            <h2 style={{ ...h2Style, textAlign: 'center', marginBottom: '0.75rem' }}>
              Press &amp; partnership enquiries
            </h2>
            <p style={{
              ...bodyStyle,
              textAlign: 'center',
              maxWidth:  '500px',
              margin:    '0 auto 2.5rem',
            }}>
              For press coverage, partnership listings, integration directories, or any
              approved brand use — reach out directly.
            </p>

            <div style={{
              display:        'flex',
              gap:            '1rem',
              justifyContent: 'center',
              flexWrap:       'wrap',
            }}>
              <a href="mailto:sales@twobitdigital.com" style={{
                display:         'inline-block',
                backgroundColor: '#f5c518',
                color:           '#09091a',
                fontFamily:      'var(--font-inter)',
                fontWeight:      700,
                fontSize:        '0.9rem',
                padding:         '0.9rem 2rem',
                borderRadius:    '8px',
                textDecoration:  'none',
                letterSpacing:   '-0.01em',
              }}>
                sales@twobitdigital.com
              </a>
              <Link href="/" style={{
                display:       'inline-block',
                color:         '#9d99b8',
                fontFamily:    'var(--font-inter)',
                fontWeight:    500,
                fontSize:      '0.9rem',
                padding:       '0.9rem 2rem',
                borderRadius:  '8px',
                textDecoration:'none',
                border:        '1px solid rgba(255,255,255,0.1)',
              }}>
                twobitdigital.com →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 1100px) {
          .palette-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .logo-grid            { grid-template-columns: 1fr !important; }
          .info-grid            { grid-template-columns: 1fr !important; }
          .product-logo-grid    { grid-template-columns: 1fr !important; }
          .guidelines-grid      { grid-template-columns: 1fr !important; }
          .weight-grid          { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .palette-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .weight-grid  { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  )
}

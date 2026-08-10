import type { Metadata } from 'next'
import Link              from 'next/link'
import Nav               from '@/components/Nav'
import Footer            from '@/components/Footer'
import Breadcrumb        from '@/components/shared/Breadcrumb'
import CTABanner         from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title:       'In-House Products | Tikkit X, Trade OS, Averon Legal, Terra Core — Two Bit Digital',
  description: 'Four in-house products built and owned by Two Bit Digital: Tikkit X (event ticketing & management software Pakistan), Trade OS (commodity trading & logistics ERP), Averon Legal Systems (CPR Part 47 compliance SaaS UK), and Terra Core (document intelligence engine).',
  keywords: [
    'Tikkit X',
    'event ticketing software Pakistan',
    'event management software Pakistan',
    'online event booking Pakistan',
    'JazzCash ticketing',
    'EasyPaisa event tickets',
    'Trade OS',
    'commodity trading software',
    'trading and logistics ERP',
    'agri-commodity ERP Pakistan',
    'Averon Legal Systems',
    'CPR Part 47 compliance software',
    'legal costs management software UK',
    'Terra Core document intelligence',
    'AI document processing',
    'in-house SaaS products',
  ],
  alternates: {
    canonical: 'https://www.twobitdigital.com/products',
  },
  openGraph: {
    title:       'In-House Products | Tikkit X, Trade OS, Averon Legal, Terra Core — Two Bit Digital',
    description: 'Products we have designed, engineered, and own outright. Tikkit X for Pakistan event tech, Trade OS for commodity trading & logistics, Averon for UK legal compliance, Terra Core for document intelligence.',
    url:         'https://www.twobitdigital.com/products',
    type:        'website',
  },
  twitter: {
    title:       'In-House Products — Two Bit Digital',
    description: 'Tikkit X (Pakistan event ticketing), Trade OS (commodity trading & logistics ERP), Averon Legal Systems (CPR Part 47 UK), and Terra Core. Four products built and owned by Two Bit Digital.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type':    'CollectionPage',
  '@id':      'https://www.twobitdigital.com/products',
  url:        'https://www.twobitdigital.com/products',
  name:       'In-House Products — Two Bit Digital',
  description:'Products designed, engineered, and owned by Two Bit Digital Ltd.',
  inLanguage: 'en-GB',
  isPartOf:   { '@id': 'https://www.twobitdigital.com' },
}

const products = [
  {
    slug:        'tikkit-x',
    name:        'Tikkit X',
    tagline:     'Mobile-first event ticketing with offline cryptographic verification.',
    status:      'Live',
    statusColor: '#4ade80',
    sector:      'Event Technology · Pakistan',
    href:        'https://tikkitx.com',
    detailsHref: undefined as string | undefined,
    gradient:    'linear-gradient(135deg, #f5c518 0%, #c9a012 100%)',
    initials:    'TX',
    ambientGlow: 'rgba(245,197,24,0.06)',
    shadowColor: 'rgba(245,197,24,0.2)',
    initialsColor: '#09091a',
    description: "Tikkit X is a mobile-first event ticketing and management platform built for markets with unreliable internet connectivity. It solves a real problem that Western ticketing platforms ignore entirely: what happens when the scanner can't reach the server at the venue gate. Our answer was an offline-capable cryptographic QR verification engine using HMAC-SHA256 and HKDF — every ticket is mathematically verifiable without a network request. Built for Pakistan's event industry, Tikkit X also includes CNIC identity validation, multi-vertical theming for concerts, conferences, and sports events, a unified attendee dashboard, and a real-time organiser analytics portal. It is the only platform in its market that treats fraud prevention as a cryptographic problem rather than a connectivity problem.",
    features: [
      'Offline HMAC-SHA256/HKDF cryptographic QR verification',
      'CNIC national identity validation at check-in',
      'Multi-vertical theming (concerts, conferences, sports)',
      'Real-time organiser analytics and reporting portal',
      'Unified attendee dashboard with purchase history',
    ],
    tech: ['Next.js', 'React Native', 'TypeScript', 'Supabase', 'HMAC-SHA256', 'HKDF', 'Vercel'],
  },
  {
    slug:        'trade-os',
    name:        'Trade OS',
    tagline:     'Commodity trading & logistics ERP with a cryptographically tamper-evident audit trail.',
    status:      'Live',
    statusColor: '#4ade80',
    sector:      'Commodity Trading & Logistics · Pakistan',
    href:        '#',
    detailsHref: '/products/trade-os',
    gradient:    'linear-gradient(135deg, #0d9488 0%, #0f5f58 100%)',
    initials:    'TO',
    ambientGlow: 'rgba(13,148,136,0.07)',
    shadowColor: 'rgba(13,148,136,0.25)',
    initialsColor: '#09091a',
    description: "Trade OS is a full-stack trading and logistics ERP built for commodity trading and export businesses running purchase, milling, warehousing, and international delivery on spreadsheets, WhatsApp threads, and paper ledgers. It unifies the entire trade lifecycle — contracts, purchase orders, lot and milling traceability, warehouse and bag stock, vessel-tracked delivery orders, broker and trader ledgers, and multi-currency accounts receivable/payable — into one system of record. Every ledger-affecting action writes to a cryptographically hash-chained, append-only audit log enforced at the database level via row-level security, so the business can produce a tamper-evident record on demand. Refined inside a live commodity trading operation across 20+ interconnected modules, Trade OS is now available to license to other trading and logistics companies.",
    features: [
      'Cryptographically hash-chained, append-only audit log enforced via database-level RLS',
      '20+ integrated modules spanning trading, contracts, milling, warehousing, and finance',
      'Multi-currency ledger system with automatic currency-mismatch guards',
      'Vessel-tracked delivery orders with real-time stock reconciliation',
      'Broker, trader, and client ledgers with full audit-trail traceability',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Row-Level Security', 'HMAC-SHA256', 'Vercel'],
  },
  {
    slug:        'averon-legal',
    name:        'Averon Legal Systems',
    tagline:     'CPR Part 47 and Part 36 case management SaaS for UK costs lawyers.',
    status:      'Beta',
    statusColor: '#a48bcf',
    sector:      'Legal Technology · United Kingdom',
    href:        '#',
    detailsHref: undefined as string | undefined,
    gradient:    'linear-gradient(135deg, #7b5ea7 0%, #5b3f87 100%)',
    initials:    'AV',
    ambientGlow: 'rgba(123,94,167,0.07)',
    shadowColor: 'rgba(123,94,167,0.25)',
    initialsColor: '#09091a',
    description: "Averon Legal Systems is a compliance-first SaaS platform purpose-built for UK costs lawyers and legal costs professionals managing matters under CPR Part 47 and Part 36. Before Averon, the workflow was Excel, email, and memory — a professional liability risk disguised as a process. Averon replaces that with role-specific dashboards for partners, supervisors, and fee earners; a matter lifecycle engine built around CPR procedural timelines; automated deadline alerting with configurable advance warnings; structured document management; and a client-facing portal for status transparency. The architecture is multi-tenant from the ground up, built on Next.js, TypeScript, Supabase, and Stripe, with every data boundary enforced at the database level — not just in application logic.",
    features: [
      'CPR Part 47 and Part 36 compliant matter workflows',
      'Role-based dashboards for partners, supervisors, and fee earners',
      'Matter lifecycle tracking aligned to CPR procedural timelines',
      'Automated deadline alerting with configurable advance windows',
      'Structured document management with client portal access',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Resend', 'Vercel'],
  },
  {
    slug:        'terra-core',
    name:        'Terra Core',
    tagline:     'Compliance-first document intelligence and zero-knowledge storage engine.',
    status:      'In Development',
    statusColor: '#9d99b8',
    sector:      'Document Intelligence · Multi-vertical',
    href:        '#',
    detailsHref: undefined as string | undefined,
    gradient:    'linear-gradient(135deg, #2a2a4a 0%, #16163a 100%)',
    initials:    'TC',
    ambientGlow: 'rgba(96,165,250,0.05)',
    shadowColor: 'rgba(22,22,58,0.4)',
    initialsColor: '#9d99b8',
    description: "Terra Core is a document intelligence and storage engine designed for organisations that cannot afford to treat document security as an afterthought. It provides AES-256 zero-knowledge encryption so that documents are mathematically inaccessible to anyone without the correct key — including the infrastructure layer. Every action on every document is recorded in a cryptographically chained audit log, making retroactive tampering detectable without external verification. Terra Core also includes AI-powered document classification, secure streaming for large files, and a compliance framework that maps to UK GDPR, FCA data handling requirements, and multi-jurisdiction regulatory environments. It is being built as the underlying document layer for Averon Legal Systems and as a standalone product for regulated industries that process sensitive documentation at scale.",
    features: [
      'AES-256 zero-knowledge encryption at rest and in transit',
      'Cryptographically chained audit logs with tamper detection',
      'AI-powered document classification and metadata extraction',
      'Secure document streaming for large file handling',
      'Multi-jurisdiction compliance mapping (UK GDPR, FCA, and beyond)',
    ],
    tech: ['TypeScript', 'AES-256', 'HMAC-SHA256', 'PostgreSQL', 'AWS KMS', 'AWS S3', 'Node.js'],
  },
] as const

const whyBuildOwnSection = [
  {
    title:   'Real-World Constraints',
    body:    'When we build our own products, we face the same decisions our clients face: what to cut to hit a deadline, how to architect for scale without over-engineering v1, how to balance compliance requirements against development velocity. We do not theorise about these trade-offs. We make them.',
    accent:  '#f5c518',
  },
  {
    title:   'Architecture Proof',
    body:    'Our products are living case studies. Tikkit X proves we can build for connectivity-constrained markets. Trade OS proves we can architect multi-module ERPs with database-enforced, tamper-evident audit trails. Averon proves we understand compliance-heavy workflow SaaS. Terra Core proves we take cryptographic security seriously enough to implement it from scratch. Every client engagement benefits from that accumulated depth.',
    accent:  '#7b5ea7',
  },
  {
    title:   'Long-Term Thinking',
    body:    'We invest in ideas we believe in on timescales that client engagements do not allow. That mindset — building for durability rather than delivery — is exactly what we bring to client work. A studio that only builds what it is paid to build is a studio that stops thinking the moment the contract ends.',
    accent:  '#60a5fa',
  },
] as const

export default function ProductsPage() {
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
            background:   'radial-gradient(circle, rgba(123,94,167,0.07) 0%, transparent 65%)',
          }} />

          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
            position: 'relative',
            zIndex:   1,
          }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Products' }]} />

            <div style={{ maxWidth: '780px', marginTop: '1.5rem' }}>
              <div className="section-label">Built By Us</div>
              <h1 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(2.4rem, 5.5vw, 4rem)',
                lineHeight:    1.08,
                color:         '#eceaf5',
                margin:        '0.75rem 0 1.5rem',
                letterSpacing: '-0.03em',
              }}>
                We Don&apos;t Just{' '}
                <span style={{ color: '#f5c518' }}>Build for Clients.</span>
              </h1>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize:   'clamp(1rem, 2vw, 1.175rem)',
                color:      '#9d99b8',
                lineHeight: 1.85,
                margin:     0,
                maxWidth:   '660px',
              }}>
                These are the products we have designed, engineered, and own outright. They are proof
                of our architecture instincts, engineering depth, and product judgement — built under
                the same constraints our clients face.
              </p>
            </div>
          </div>
        </section>

        {/* ── Products ──────────────────────────────────────────────── */}
        <section style={{
          maxWidth:      '1200px',
          margin:        '0 auto',
          padding:       '5rem 1.5rem',
          display:       'flex',
          flexDirection: 'column',
          gap:           '2.5rem',
        }}>
          {products.map((product) => (
            <article
              key={product.slug}
              style={{
                backgroundColor: '#11112b',
                borderRadius:    '14px',
                border:          '1px solid rgba(255,255,255,0.07)',
                overflow:        'hidden',
                position:        'relative',
              }}
            >
              {/* Ambient glow from gradient colour */}
              <div style={{
                position:      'absolute',
                top:           '-60px',
                right:         '-60px',
                width:         '400px',
                height:        '400px',
                borderRadius:  '50%',
                pointerEvents: 'none',
                background:    `radial-gradient(circle, ${product.ambientGlow} 0%, transparent 70%)`,
              }} />

              <div style={{ padding: 'clamp(2rem, 4vw, 3rem)', position: 'relative', zIndex: 1 }}>

                {/* ── Header row ── */}
                <div style={{
                  display:    'flex',
                  gap:        '1.5rem',
                  alignItems: 'flex-start',
                  marginBottom: '2rem',
                  flexWrap:   'wrap',
                }}>
                  {/* Logo box */}
                  <div style={{
                    width:          '64px',
                    height:         '64px',
                    borderRadius:   '14px',
                    background:     product.gradient,
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    flexShrink:     0,
                    boxShadow:      `0 8px 24px ${product.shadowColor}`,
                  }}>
                    <span style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    800,
                      fontSize:      '1.1rem',
                      color:         product.initialsColor,
                      letterSpacing: '-0.03em',
                    }}>
                      {product.initials}
                    </span>
                  </div>

                  {/* Name + meta */}
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display:    'flex',
                      alignItems: 'center',
                      gap:        '0.75rem',
                      flexWrap:   'wrap',
                      marginBottom: '0.4rem',
                    }}>
                      <h2 style={{
                        fontFamily:    'var(--font-inter)',
                        fontWeight:    800,
                        fontSize:      'clamp(1.35rem, 2.5vw, 1.65rem)',
                        color:         '#eceaf5',
                        letterSpacing: '-0.025em',
                        margin:        0,
                        lineHeight:    1.2,
                      }}>
                        {product.name}
                      </h2>

                      {/* Status badge */}
                      <span style={{
                        display:         'inline-flex',
                        alignItems:      'center',
                        gap:             '0.4rem',
                        fontFamily:      'var(--font-inter)',
                        fontWeight:      600,
                        fontSize:        '0.7rem',
                        letterSpacing:   '0.06em',
                        textTransform:   'uppercase',
                        color:           product.statusColor,
                        backgroundColor: `${product.statusColor}18`,
                        border:          `1px solid ${product.statusColor}30`,
                        padding:         '0.3rem 0.75rem',
                        borderRadius:    '999px',
                        whiteSpace:      'nowrap',
                      }}>
                        <span style={{
                          width:           '5px',
                          height:          '5px',
                          borderRadius:    '50%',
                          backgroundColor: product.statusColor,
                          flexShrink:      0,
                        }} />
                        {product.status}
                      </span>
                    </div>

                    <p style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    400,
                      fontSize:      '0.9rem',
                      color:         '#5e5a7a',
                      letterSpacing: '0.01em',
                      margin:        '0 0 0.35rem',
                    }}>
                      {product.sector}
                    </p>

                    <p style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 400,
                      fontSize:   '0.95rem',
                      color:      '#9d99b8',
                      margin:     0,
                      fontStyle:  'italic',
                    }}>
                      {product.tagline}
                    </p>
                  </div>
                </div>

                {/* ── Description ── */}
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  fontSize:   '0.975rem',
                  color:      '#9d99b8',
                  lineHeight: 1.9,
                  margin:     '0 0 2.25rem',
                  maxWidth:   '840px',
                }}>
                  {product.description}
                </p>

                {/* ── Features + Tech ── */}
                <div style={{
                  display:             'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap:                 '2rem',
                  marginBottom:        '2.25rem',
                }}
                className="prod-two-col"
                >
                  {/* Feature list */}
                  <div>
                    <h3 style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    700,
                      fontSize:      '0.75rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color:         '#5e5a7a',
                      margin:        '0 0 1rem',
                    }}>
                      Key Capabilities
                    </h3>
                    <ul style={{
                      listStyle: 'none',
                      padding:   0,
                      margin:    0,
                      display:   'flex',
                      flexDirection: 'column',
                      gap:       '0.65rem',
                    }}>
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          style={{
                            display:    'flex',
                            gap:        '0.65rem',
                            alignItems: 'flex-start',
                          }}
                        >
                          <span style={{
                            fontFamily:  'var(--font-inter)',
                            fontWeight:  700,
                            fontSize:    '0.85rem',
                            color:       '#f5c518',
                            lineHeight:  1.6,
                            flexShrink:  0,
                          }}>
                            ✓
                          </span>
                          <span style={{
                            fontFamily: 'var(--font-inter)',
                            fontWeight: 400,
                            fontSize:   '0.88rem',
                            color:      '#9d99b8',
                            lineHeight: 1.65,
                          }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h3 style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    700,
                      fontSize:      '0.75rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color:         '#5e5a7a',
                      margin:        '0 0 1rem',
                    }}>
                      Technology Stack
                    </h3>
                    <div style={{
                      display:  'flex',
                      flexWrap: 'wrap',
                      gap:      '0.5rem',
                    }}>
                      {product.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily:      'var(--font-inter)',
                            fontWeight:      500,
                            fontSize:        '0.78rem',
                            color:           '#9d99b8',
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            border:          '1px solid rgba(255,255,255,0.08)',
                            padding:         '0.35rem 0.75rem',
                            borderRadius:    '6px',
                            whiteSpace:      'nowrap',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── CTA ── */}
                <div style={{
                  display:     'flex',
                  alignItems:  'center',
                  gap:         '1rem',
                  flexWrap:    'wrap',
                  paddingTop:  '1.75rem',
                  borderTop:   '1px solid rgba(255,255,255,0.06)',
                }}>
                  {product.href !== '#' ? (
                    <Link
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display:         'inline-flex',
                        alignItems:      'center',
                        gap:             '0.5rem',
                        fontFamily:      'var(--font-inter)',
                        fontWeight:      700,
                        fontSize:        '0.85rem',
                        letterSpacing:   '0.02em',
                        color:           '#09091a',
                        backgroundColor: '#f5c518',
                        padding:         '0.75rem 1.75rem',
                        borderRadius:    '7px',
                        textDecoration:  'none',
                        transition:      'background-color 0.2s ease, transform 0.2s ease',
                      }}
                    >
                      Visit Product →
                    </Link>
                  ) : (
                    <Link
                      href="/contact"
                      style={{
                        display:         'inline-flex',
                        alignItems:      'center',
                        gap:             '0.5rem',
                        fontFamily:      'var(--font-inter)',
                        fontWeight:      600,
                        fontSize:        '0.82rem',
                        letterSpacing:   '0.04em',
                        textTransform:   'uppercase',
                        color:           '#9d99b8',
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border:          '1px solid rgba(255,255,255,0.07)',
                        padding:         '0.7rem 1.5rem',
                        borderRadius:    '7px',
                        textDecoration:  'none',
                      }}>
                      <span style={{
                        width:           '6px',
                        height:          '6px',
                        borderRadius:    '50%',
                        backgroundColor: product.statusColor,
                        flexShrink:      0,
                      }} />
                      {product.status === 'In Development' ? 'In Development' : 'Enquire About Licensing →'}
                    </Link>
                  )}
                  {product.detailsHref && (
                    <Link
                      href={product.detailsHref}
                      style={{
                        display:        'inline-flex',
                        alignItems:     'center',
                        gap:            '0.4rem',
                        fontFamily:     'var(--font-inter)',
                        fontWeight:     600,
                        fontSize:       '0.82rem',
                        letterSpacing:  '0.02em',
                        color:          '#9d99b8',
                        textDecoration: 'none',
                      }}
                    >
                      View Full Capabilities →
                    </Link>
                  )}
                </div>

              </div>
            </article>
          ))}
        </section>

        {/* ── Why We Build Our Own Products ────────────────────────── */}
        <section style={{
          background:   'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)',
          borderTop:    '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding:      '6rem 0',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>
                Our Philosophy
              </div>
              <h2 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(1.75rem, 4vw, 2.6rem)',
                color:         '#eceaf5',
                letterSpacing: '-0.025em',
                lineHeight:    1.2,
                margin:        '0.75rem 0 1rem',
              }}>
                Why We Build Our Own Products
              </h2>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize:   '1rem',
                color:      '#9d99b8',
                lineHeight: 1.8,
                maxWidth:   '580px',
                margin:     '0 auto',
              }}>
                A studio that only executes briefs is a studio that stops thinking. We build our own
                products because the act of building keeps us honest.
              </p>
            </div>

            <div style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap:                 '1.5rem',
            }}
            className="why-grid"
            >
              {whyBuildOwnSection.map((item) => (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: '#11112b',
                    border:          '1px solid rgba(255,255,255,0.07)',
                    borderRadius:    '12px',
                    padding:         '2rem',
                    position:        'relative',
                    overflow:        'hidden',
                  }}
                >
                  <div style={{
                    position:      'absolute',
                    top:           0,
                    left:          0,
                    right:         0,
                    height:        '2px',
                    background:    `linear-gradient(90deg, ${item.accent} 0%, transparent 100%)`,
                  }} />
                  <h3 style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '1rem',
                    color:         '#eceaf5',
                    letterSpacing: '-0.01em',
                    margin:        '0 0 0.875rem',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize:   '0.9rem',
                    color:      '#9d99b8',
                    lineHeight: 1.85,
                    margin:     0,
                  }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────────────────────── */}
        <CTABanner
          heading="Have a product idea? We know what it takes to build one."
          subtext="We have shipped production software across four markets, two regulatory frameworks, and four product verticals. If you have an idea that needs serious engineering behind it, bring it to us."
          ctaLabel="Tell Us About It"
          ctaHref="/contact"
        />

      </main>
      <Footer />

      <style>{`
        @media (max-width: 800px) {
          .prod-two-col { grid-template-columns: 1fr !important; }
          .why-grid     { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 801px) and (max-width: 1000px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  )
}

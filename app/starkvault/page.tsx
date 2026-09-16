import type { Metadata } from 'next'
import Link       from 'next/link'
import Nav        from '@/components/Nav'
import Footer     from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import CTABanner  from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title:       'StarkVault — Document Vault, Expiry Tracking & Secure Share · Two Bit Digital',
  description: 'StarkVault tracks your passports, visas, licences, domains, cards, and subscriptions — with 5-stage expiry alerts, encrypted document storage, and secure time-limited sharing. Built by Two Bit Digital.',
  keywords: [
    'StarkVault',
    'document vault',
    'expiry tracking',
    'passport expiry reminder',
    'visa renewal tracker',
    'domain renewal reminder',
    'secure document sharing',
    'subscription tracking',
    'card expiry tracker',
    'Two Bit Digital',
  ],
  alternates: { canonical: 'https://twobitdigital.com/starkvault' },
  openGraph: {
    title:       'StarkVault — Never Miss a Renewal',
    description: 'Encrypted document vault with 5-stage expiry alerts, subscription and card tracking, and forensically watermarked secure sharing. Free to start.',
    url:         'https://twobitdigital.com/starkvault',
    type:        'website',
  },
  twitter: {
    title:       'StarkVault — Two Bit Digital',
    description: 'Document vault, expiry tracking, and secure document sharing. Never miss a passport, visa, domain, or licence renewal.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type':    'SoftwareApplication',
  name:       'StarkVault',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web, iOS, Android',
  url:        'https://starkvault.tech',
  description: 'Document vault, expiry tracking, and secure document sharing — tracks passports, visas, domains, cards, and subscriptions with 5-stage renewal alerts.',
  offers: {
    '@type':    'Offer',
    price:      '0',
    priceCurrency: 'USD',
    description: 'Free forever plan available. Plus plan from $3.99/month.',
  },
  brand: { '@type': 'Organization', name: 'Two Bit Digital' },
}

const metrics = [
  { label: 'Expiry alert stages',  value: '5' },
  { label: 'Alert thresholds',    value: '90 / 60 / 30 / 14 / 7 days' },
  { label: 'Platforms',           value: 'Web · iOS · Android' },
  { label: 'Document categories', value: '6+' },
  { label: 'Share link control',  value: 'Kill switch on every view' },
  { label: 'Status',              value: 'Live' },
]

const capabilities = [
  {
    title: 'Document Vault',
    color: '#6366f1',
    items: [
      'Upload passports, licences, contracts, IDs, and any sensitive document from your phone camera, photo library, or a file picker — on web and mobile',
      'All documents encrypted at rest and in transit; access scoped to your account at the database layer via row-level security',
      'Organised by category: Identity, Immigration, Vehicle, Finance, Property, Medical, and more',
      'One account syncs instantly across web, iPhone, and Android — add on mobile, view on desktop',
    ],
  },
  {
    title: 'Expiry Vault',
    color: '#8b5cf6',
    items: [
      'Add anything with a date: a visa, a driving licence, a domain name, a lease, a professional certification — and StarkVault escalates as the date approaches',
      '5-stage alert system at 90, 60, 30, 14, and 7 days — each threshold independently toggleable',
      'Alerts delivered by email digest and native push notification on iOS and Android',
      'Each threshold fires once and only once — no repeat noise for a date you have already seen',
    ],
  },
  {
    title: 'Money Map',
    color: '#06b6d4',
    items: [
      'Record a payment card by nickname, last 4 digits, and expiry — a full card number is never requested or stored',
      'Link subscriptions to the card that pays for them, so you can see exactly which services are at risk when a card expires',
      'At-risk detection flags subscriptions whose next charge date falls after the linked card\'s expiry',
      'Full picture of monthly outgoings grouped by card, without connecting any bank account or financial credential',
    ],
  },
  {
    title: 'Secure Share',
    color: '#10b981',
    items: [
      'Create a time-limited link to a single document — a passport scan, a signed contract, an ID — instead of emailing a file you lose track of',
      'Forensic watermark burned server-side into every shared PDF: recipient email, timestamp, and share ID embedded into the file itself',
      'Every view logged: when it was opened and from where, giving you a complete access record',
      'Kill switch revokes access instantly, enforced on every single document view — not just at link creation',
    ],
  },
]

const techPillars = [
  {
    label: 'Encrypted in transit',
    detail: 'Every connection uses HTTPS/TLS on all platforms, no exceptions.',
  },
  {
    label: 'Encrypted at rest',
    detail: 'Documents encrypted at rest by our storage layer — standard server-side encryption.',
  },
  {
    label: 'Row-level access control',
    detail: 'Every database query scoped to your account at the DB layer, not just the UI.',
  },
  {
    label: 'No analytics SDKs',
    detail: 'No behavioural profiling, no tracking pixels, no third-party analytics.',
  },
  {
    label: 'Forensic watermarking',
    detail: 'PDF watermarks burned server-side — not a UI overlay that a screenshot can strip.',
  },
  {
    label: 'Biometric app lock',
    detail: 'Face ID and fingerprint lock on the iOS and Android apps.',
  },
]

const ACCENT = '#6366f1'

export default function StarkVaultPage() {
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
          {/* Ambient glow */}
          <div style={{
            position:      'absolute',
            top:           '-80px',
            left:          '50%',
            transform:     'translateX(-50%)',
            width:         '900px',
            height:        '500px',
            borderRadius:  '50%',
            pointerEvents: 'none',
            background:    'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)',
          }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            <Breadcrumb crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'StarkVault' },
            ]} />

            <div style={{ maxWidth: '820px', marginTop: '1.5rem' }}>
              {/* Logo + name row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width:          '72px',
                  height:         '72px',
                  borderRadius:   '16px',
                  background:     'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  flexShrink:     0,
                  boxShadow:      '0 8px 32px rgba(99,102,241,0.35)',
                }}>
                  <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '1.2rem', color: '#fff', letterSpacing: '-0.03em' }}>SV</span>
                </div>
                <div>
                  <div className="section-label">In-House Product · Live</div>
                  <h1 style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    800,
                    fontSize:      'clamp(2.2rem, 5vw, 3.5rem)',
                    lineHeight:    1.08,
                    color:         '#eceaf5',
                    margin:        '0.2rem 0 0',
                    letterSpacing: '-0.03em',
                  }}>
                    StarkVault
                  </h1>
                </div>
              </div>

              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize:   'clamp(1rem, 2vw, 1.2rem)',
                color:      '#9d99b8',
                lineHeight: 1.85,
                margin:     '0 0 2rem',
                maxWidth:   '680px',
              }}>
                Every passport, visa, licence, domain, card, and subscription — tracked in one vault,
                with five-stage expiry alerts so a renewal date never catches you off guard.
                Encrypted document storage, forensic secure sharing, and a complete view of
                what you own and when it expires.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  href="https://www.starkvault.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:         'inline-flex',
                    alignItems:      'center',
                    gap:             '0.5rem',
                    fontFamily:      'var(--font-inter)',
                    fontWeight:      700,
                    fontSize:        '0.9rem',
                    color:           '#fff',
                    backgroundColor: ACCENT,
                    padding:         '0.85rem 2rem',
                    borderRadius:    '8px',
                    textDecoration:  'none',
                    letterSpacing:   '0.01em',
                    boxShadow:       '0 4px 16px rgba(99,102,241,0.3)',
                  }}
                >
                  Visit StarkVault →
                </Link>
                <Link
                  href="https://www.starkvault.tech/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:         'inline-flex',
                    alignItems:      'center',
                    gap:             '0.5rem',
                    fontFamily:      'var(--font-inter)',
                    fontWeight:      600,
                    fontSize:        '0.88rem',
                    color:           '#9d99b8',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border:          '1px solid rgba(255,255,255,0.08)',
                    padding:         '0.85rem 1.75rem',
                    borderRadius:    '8px',
                    textDecoration:  'none',
                  }}
                >
                  Get started free
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Metrics strip ─────────────────────────────────────────── */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#0d0d22' }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
            display:  'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
          }}
          className="sv-metrics"
          >
            {metrics.map((m, i) => (
              <div
                key={m.label}
                style={{
                  padding:     '2rem 1.25rem',
                  borderRight: i < metrics.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  textAlign:   'center',
                }}
              >
                <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1rem, 2vw, 1.4rem)', color: '#eceaf5', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '0.4rem' }}>
                  {m.value}
                </div>
                <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '0.72rem', color: '#5e5a7a', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Capabilities ──────────────────────────────────────────── */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Core Features</div>
            <h2 style={{
              fontFamily:    'var(--font-inter)',
              fontWeight:    800,
              fontSize:      'clamp(1.75rem, 4vw, 2.6rem)',
              color:         '#eceaf5',
              letterSpacing: '-0.025em',
              lineHeight:    1.2,
              margin:        '0.75rem 0 1rem',
            }}>
              Four modules. One vault.
            </h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1rem', color: '#9d99b8', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto' }}>
              Everything StarkVault does is built around one principle: keep you in control of the documents
              and dates that matter, without ever asking for more than it needs.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {capabilities.map((cap, idx) => (
              <div
                key={cap.title}
                style={{
                  backgroundColor: '#11112b',
                  borderRadius:    '14px',
                  border:          '1px solid rgba(255,255,255,0.07)',
                  overflow:        'hidden',
                  position:        'relative',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top:      0,
                  left:     0,
                  right:    0,
                  height:   '2px',
                  background: `linear-gradient(90deg, ${cap.color} 0%, transparent 60%)`,
                }} />
                <div style={{
                  position:      'absolute',
                  top:           '-60px',
                  right:         '-60px',
                  width:         '360px',
                  height:        '360px',
                  borderRadius:  '50%',
                  pointerEvents: 'none',
                  background:    `radial-gradient(circle, ${cap.color}10 0%, transparent 70%)`,
                }} />

                <div style={{ padding: 'clamp(2rem, 4vw, 3rem)', position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
                    <div style={{
                      width:          '42px',
                      height:         '42px',
                      borderRadius:   '10px',
                      backgroundColor:`${cap.color}20`,
                      border:         `1px solid ${cap.color}40`,
                      display:        'flex',
                      alignItems:     'center',
                      justifyContent: 'center',
                      flexShrink:     0,
                    }}>
                      <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '0.75rem', color: cap.color, letterSpacing: '0.02em' }}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    700,
                      fontSize:      'clamp(1.1rem, 2.5vw, 1.35rem)',
                      color:         '#eceaf5',
                      letterSpacing: '-0.02em',
                      margin:        0,
                    }}>
                      {cap.title}
                    </h3>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    {cap.items.map((item) => (
                      <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.85rem', color: cap.color, lineHeight: 1.7, flexShrink: 0 }}>✓</span>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.75 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Security ──────────────────────────────────────────────── */}
        <section style={{
          background:   'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)',
          borderTop:    '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding:      '6rem 0',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Security</div>
              <h2 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(1.75rem, 4vw, 2.4rem)',
                color:         '#eceaf5',
                letterSpacing: '-0.025em',
                lineHeight:    1.2,
                margin:        '0.75rem 0 1rem',
              }}>
                What protects your documents, stated plainly.
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1rem', color: '#9d99b8', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto' }}>
                We would rather tell you exactly how this works than let you assume something stronger.
                No overstatement — just what is actually in place.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="sv-security-grid">
              {techPillars.map((p) => (
                <div
                  key={p.label}
                  style={{
                    backgroundColor: '#11112b',
                    border:          '1px solid rgba(255,255,255,0.07)',
                    borderRadius:    '12px',
                    padding:         '1.75rem 2rem',
                  }}
                >
                  <div style={{
                    display:         'inline-flex',
                    alignItems:      'center',
                    gap:             '0.4rem',
                    fontFamily:      'var(--font-inter)',
                    fontWeight:      600,
                    fontSize:        '0.72rem',
                    letterSpacing:   '0.07em',
                    textTransform:   'uppercase',
                    color:           ACCENT,
                    backgroundColor: `${ACCENT}14`,
                    border:          `1px solid ${ACCENT}30`,
                    padding:         '0.3rem 0.75rem',
                    borderRadius:    '999px',
                    marginBottom:    '0.875rem',
                  }}>
                    {p.label}
                  </div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.9rem', color: '#9d99b8', lineHeight: 1.75, margin: 0 }}>
                    {p.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Honest caveat */}
            <div style={{
              marginTop:       '2rem',
              backgroundColor: 'rgba(99,102,241,0.05)',
              border:          '1px solid rgba(99,102,241,0.15)',
              borderRadius:    '10px',
              padding:         '1.25rem 2rem',
            }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.8, margin: 0 }}>
                <strong style={{ color: '#eceaf5' }}>Not zero-knowledge:</strong>{' '}
                StarkVault uses standard server-side encryption, not end-to-end zero-knowledge encryption.
                Our systems can read a document in order to generate a watermark when you create a share link.
                We do not access your documents except for this specific technical function.
                If your use case requires true zero-knowledge encryption, Terra Core — our document intelligence
                engine currently in development — is designed for that.
              </p>
            </div>
          </div>
        </section>

        {/* ── Plans ─────────────────────────────────────────────────── */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Pricing</div>
            <h2 style={{
              fontFamily:    'var(--font-inter)',
              fontWeight:    800,
              fontSize:      'clamp(1.75rem, 4vw, 2.4rem)',
              color:         '#eceaf5',
              letterSpacing: '-0.025em',
              lineHeight:    1.2,
              margin:        '0.75rem 0 1rem',
            }}>
              Free to start.
            </h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1rem', color: '#9d99b8', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto' }}>
              The Free plan covers personal use. Plus unlocks unlimited everything for less than a coffee a month.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '760px', margin: '0 auto' }} className="sv-plans-grid">
            {/* Free */}
            <div style={{ backgroundColor: '#11112b', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', marginBottom: '0.5rem' }}>Free</div>
              <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '2rem', color: '#eceaf5', letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>$0</div>
              <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: '#5e5a7a', marginBottom: '1.75rem' }}>Forever</div>
              {['10 documents', '2 payment cards', '5 expiry watches', '1 secure share link', 'Email + push alerts', 'Web, iOS & Android'].map((f) => (
                <div key={f} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#4ade80', lineHeight: 1.6, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.6 }}>{f}</span>
                </div>
              ))}
              <Link
                href="https://www.starkvault.tech/signup"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:         'block',
                  textAlign:       'center',
                  marginTop:       '1.75rem',
                  fontFamily:      'var(--font-inter)',
                  fontWeight:      600,
                  fontSize:        '0.85rem',
                  color:           '#9d99b8',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border:          '1px solid rgba(255,255,255,0.08)',
                  padding:         '0.75rem',
                  borderRadius:    '8px',
                  textDecoration:  'none',
                }}
              >
                Get started free
              </Link>
            </div>

            {/* Plus */}
            <div style={{
              backgroundColor: '#11112b',
              border:          `1px solid ${ACCENT}40`,
              borderRadius:    '14px',
              padding:         '2rem',
              position:        'relative',
              overflow:        'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${ACCENT} 0%, transparent 70%)` }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a' }}>Plus</div>
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: ACCENT, backgroundColor: `${ACCENT}18`, border: `1px solid ${ACCENT}30`, padding: '0.2rem 0.6rem', borderRadius: '999px' }}>~40% off annual</span>
              </div>
              <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '2rem', color: '#eceaf5', letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>$3.99<span style={{ fontWeight: 300, fontSize: '1rem', color: '#5e5a7a' }}>/mo</span></div>
              <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: '#5e5a7a', marginBottom: '1.75rem' }}>or $29/year ($2.42/mo)</div>
              {['Unlimited documents', 'Unlimited cards', 'Unlimited expiry watches', 'Unlimited share links', 'Email + push alerts', 'Web, iOS & Android'].map((f) => (
                <div key={f} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.85rem', color: ACCENT, lineHeight: 1.6, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.6 }}>{f}</span>
                </div>
              ))}
              <Link
                href="https://www.starkvault.tech/signup"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:         'block',
                  textAlign:       'center',
                  marginTop:       '1.75rem',
                  fontFamily:      'var(--font-inter)',
                  fontWeight:      700,
                  fontSize:        '0.85rem',
                  color:           '#fff',
                  backgroundColor: ACCENT,
                  padding:         '0.75rem',
                  borderRadius:    '8px',
                  textDecoration:  'none',
                  boxShadow:       '0 4px 12px rgba(99,102,241,0.25)',
                }}
              >
                Upgrade to Plus →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Tech stack ────────────────────────────────────────────── */}
        <section style={{
          background:   'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)',
          borderTop:    '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding:      '4rem 0',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <div>
                <div className="section-label">Technology Stack</div>
                <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1.1rem', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.015em' }}>
                  Built on the same stack as the rest of our portfolio.
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Next.js', 'React Native', 'TypeScript', 'Supabase', 'PostgreSQL', 'Row-Level Security', 'Resend', 'Vercel'].map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily:      'var(--font-inter)',
                      fontWeight:      500,
                      fontSize:        '0.8rem',
                      color:           '#9d99b8',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border:          '1px solid rgba(255,255,255,0.08)',
                      padding:         '0.35rem 0.85rem',
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
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <CTABanner
          heading="Start tracking your renewals today — it takes under a minute."
          subtext="Free plan, no credit card required. Web, iPhone, and Android. Your first expiry watch is one tap away."
          ctaLabel="Visit StarkVault"
          ctaHref="https://www.starkvault.tech"
          ctaExternal
        />

      </main>
      <Footer />

      <style>{`
        @media (max-width: 700px) {
          .sv-metrics        { grid-template-columns: repeat(2, 1fr) !important; }
          .sv-security-grid  { grid-template-columns: 1fr !important; }
          .sv-plans-grid     { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 701px) and (max-width: 1000px) {
          .sv-metrics        { grid-template-columns: repeat(3, 1fr) !important; }
          .sv-security-grid  { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  )
}

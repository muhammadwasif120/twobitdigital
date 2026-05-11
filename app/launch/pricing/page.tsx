import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'MVP Development Pricing UK · Two Bit Digital',
  description: 'Transparent, fixed-price MVP development. No hourly rates, no surprises. Three packages from £1,500 to £12,500. See exactly what you get.',
  keywords: ['mvp development cost uk', 'saas mvp price', 'mvp development pricing', 'fixed price mvp development', 'saas development cost uk'],
  alternates: { canonical: 'https://www.twobitdigital.com/launch/pricing' },
  openGraph: {
    title: 'MVP Development Pricing UK · Two Bit Digital',
    description: 'Fixed-price MVP development packages from £1,500. No surprises. See the full breakdown.',
    url: 'https://www.twobitdigital.com/launch/pricing',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'MVP Development Pricing — Two Bit Digital',
  url: 'https://www.twobitdigital.com/launch/pricing',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.twobitdigital.com' },
      { '@type': 'ListItem', position: 2, name: 'Launch', item: 'https://www.twobitdigital.com/launch' },
      { '@type': 'ListItem', position: 3, name: 'Pricing', item: 'https://www.twobitdigital.com/launch/pricing' },
    ],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why fixed price for MVP development?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fixed price forces scope discipline — which is exactly what an MVP needs. Hourly billing incentivises slow work. Fixed price incentivises us to build efficiently and ship on time. You know exactly what you are spending before we start.' },
    },
    {
      '@type': 'Question',
      name: 'What does the Scope Session cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Scope Session is free. You book a call, we map your idea, and you leave with a clear feature list. You only pay when you are ready to build.' },
    },
    {
      '@type': 'Question',
      name: 'What if the scope changes mid-build?',
      acceptedAnswer: { '@type': 'Answer', text: 'Scope is locked on Day 1 with a signed spec document. Any additions after that are quoted separately. This protects your timeline and your budget. Scope creep is the number one reason MVPs ship late and over-budget.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer payment plans?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. For the Build and Launch packages we split into two payments: 50% at project start, 50% on Day 10 handover. For Validate, full payment is required upfront.' },
    },
  ],
}

const packages = [
  {
    name: 'Validate',
    price: '£1,500',
    color: '#1D9E75',
    tagline: 'Test the idea before you build the product.',
    ideal: 'Pre-seed founders. Idea validation. Investor decks.',
    includes: [
      'Scope session — feature list and user flow map',
      'Clickable prototype (Figma or web-based)',
      'Technical architecture document',
      'Database schema design',
      'Build estimate for full MVP',
    ],
    notIncluded: 'No working code. No deployed application.',
    cta: 'Start with Validate',
    featured: false,
  },
  {
    name: 'Build',
    price: '£7,500',
    color: '#7F77DD',
    tagline: 'A production SaaS. Live in 10 working days.',
    ideal: 'Seed-stage founders. First product. Ready to ship.',
    includes: [
      'Everything in Validate',
      'Working web application on your domain',
      'User authentication (email, magic link, or OAuth)',
      'Core feature set — as defined in scope',
      'Responsive UI — mobile and desktop',
      'Admin panel or dashboard',
      'Deployed on Vercel with CI/CD',
      'Complete GitHub repository — transferred to you',
      'All deployment credentials',
      'Codebase documentation',
      '30-day post-launch bug support',
    ],
    notIncluded: null,
    cta: 'Book a Scope Session',
    featured: true,
  },
  {
    name: 'Launch',
    price: '£12,500',
    color: '#f5c518',
    tagline: 'Build + payments, email, and growth foundations.',
    ideal: 'Founders ready for paying users from day one.',
    includes: [
      'Everything in Build',
      'Stripe subscription billing or one-time payments',
      'Transactional email (Resend or SendGrid)',
      'Onboarding email sequence',
      'SEO-optimised marketing landing page',
      'Analytics integration (Posthog or GA4)',
      'Priority scheduling — next available slot',
      '60-day post-launch bug support',
    ],
    notIncluded: null,
    cta: 'Book a Scope Session',
    featured: false,
  },
]

const comparison = [
  { attribute: 'Timeline', validate: '3–5 days', build: '10 days', launch: '12–14 days', freelancer: '2–6 months', agency: '3–9 months', inhouse: '6–18 months' },
  { attribute: 'Fixed price', validate: '✓', build: '✓', launch: '✓', freelancer: '✗ (usually hourly)', agency: '✗ (retainer)', inhouse: '✗ (salary burn)' },
  { attribute: 'Production-grade code', validate: '–', build: '✓', launch: '✓', freelancer: 'Variable', agency: '✓ usually', inhouse: '✓ eventually' },
  { attribute: 'Full ownership', validate: '–', build: '✓', launch: '✓', freelancer: 'Negotiable', agency: 'Often locked', inhouse: '✓' },
  { attribute: 'Post-launch support', validate: '–', build: '30 days', launch: '60 days', freelancer: 'None by default', agency: 'Paid retainer', inhouse: 'Yes (salary)' },
  { attribute: 'UK-registered entity', validate: '✓', build: '✓', launch: '✓', freelancer: 'Rarely', agency: 'Sometimes', inhouse: '–' },
]

const pricingFaqs = [
  { q: 'Why fixed price for MVP development?', a: 'Fixed price forces scope discipline — which is exactly what an MVP needs. Hourly billing incentivises slow work. Fixed price incentivises us to build efficiently and ship on time. You know exactly what you are spending before we start.' },
  { q: 'What does the Scope Session cost?', a: 'The Scope Session is free. You book a call, we map your idea, and you leave with a clear feature list. You only pay when you are ready to build.' },
  { q: 'What if the scope changes mid-build?', a: 'Scope is locked on Day 1 with a signed spec document. Any additions after that are quoted separately. This protects your timeline and your budget. Scope creep is the number one reason MVPs ship late and over-budget.' },
  { q: 'Do you offer payment plans?', a: 'Yes. For the Build and Launch packages we split into two payments: 50% at project start, 50% on Day 10 handover. For Validate, full payment is required upfront.' },
  { q: 'Can I upgrade from Validate to Build?', a: 'Yes. If you start with a Validate package and decide to proceed, the £1,500 is deducted from the Build or Launch price.' },
]

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>
        <div style={{ backgroundColor: '#09091a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Launch', href: '/launch' }, { label: 'Pricing' }]} />
          </div>
        </div>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)', padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="section-label">Pricing</div>
            <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#eceaf5', margin: '0.75rem 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: '760px' }}>
              Transparent pricing. No surprises.
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', color: '#9d99b8', lineHeight: 1.8, maxWidth: '620px', margin: 0 }}>
              Fixed-price packages. You know what you are paying before we start. No hourly rates. No retainers. No hidden costs.
            </p>
          </div>
        </section>

        {/* Packages */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  style={{
                    backgroundColor: pkg.featured ? '#0d0d22' : '#0a0a1e',
                    border: `1px solid ${pkg.featured ? pkg.color : 'rgba(255,255,255,0.07)'}`,
                    borderTop: `3px solid ${pkg.color}`,
                    borderRadius: '12px',
                    padding: '2rem',
                    position: 'relative',
                  }}
                >
                  {pkg.featured && (
                    <div style={{ position: 'absolute', top: '-1px', right: '1.5rem', backgroundColor: '#7F77DD', color: '#fff', fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.3rem 0.8rem', borderRadius: '0 0 6px 6px' }}>
                      Most popular
                    </div>
                  )}
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: pkg.color, marginBottom: '0.5rem' }}>{pkg.name}</div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '2.5rem', color: '#eceaf5', letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>{pkg.price}</div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '0.875rem', color: '#9d99b8', marginBottom: '0.5rem', lineHeight: 1.6 }}>{pkg.tagline}</p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: '#5e5a7a', marginBottom: '1.5rem', lineHeight: 1.6 }}>Ideal for: {pkg.ideal}</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', marginBottom: '0.75rem' }}>Includes</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {pkg.includes.map((item) => (
                        <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                          <span style={{ color: pkg.color, fontWeight: 700, flexShrink: 0, fontSize: '0.85rem' }}>✓</span>
                          <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: '#9d99b8', lineHeight: 1.6 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    {pkg.notIncluded && (
                      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: '#3d3a56', marginTop: '0.75rem', lineHeight: 1.6 }}>{pkg.notIncluded}</p>
                    )}
                  </div>
                  <Link
                    href="/contact"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      padding: '0.85rem 1.5rem',
                      borderRadius: '8px',
                      color: pkg.featured ? '#09091a' : pkg.color,
                      backgroundColor: pkg.featured ? pkg.color : 'transparent',
                      border: pkg.featured ? 'none' : `1px solid ${pkg.color}`,
                    }}
                  >
                    {pkg.cta} →
                  </Link>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: '#3d3a56', textAlign: 'center', marginTop: '1.5rem' }}>
              All prices exclude VAT. Payment 50/50: project start and Day 10 handover (Build & Launch). Validate paid in full upfront.
            </p>
          </div>
        </section>

        {/* Custom / Enterprise */}
        <section style={{ backgroundColor: '#0d0d22', padding: '3rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">Custom scope</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#eceaf5', margin: '0.5rem 0 0.75rem', letterSpacing: '-0.02em' }}>Building something larger?</h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.75, margin: 0 }}>
                If your project needs a multi-tenant platform, a complex data model, third-party hardware integrations, or a dedicated team for an extended engagement — book a discovery call. We scope and price custom builds on a case-by-case basis.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#09091a', backgroundColor: '#7F77DD', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none' }}>
                Book a Discovery Call →
              </Link>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: '#5e5a7a', textAlign: 'center', margin: 0 }}>No commitment. We will tell you what it costs before you decide.</p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Why us</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>
                How we compare.
              </h2>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}></th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1D9E75', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Validate</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7F77DD', borderBottom: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(127,119,221,0.05)' }}>Build</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#f5c518', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Launch</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Freelancer</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>UK Agency</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>In-house</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.attribute} style={{ backgroundColor: i % 2 === 0 ? '#0d0d22' : 'transparent' }}>
                      <td style={{ padding: '0.9rem 1rem', fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: 600, color: '#eceaf5', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.attribute}</td>
                      <td style={{ padding: '0.9rem 1rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontSize: '0.82rem', color: '#1D9E75', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.validate}</td>
                      <td style={{ padding: '0.9rem 1rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontSize: '0.82rem', color: '#7F77DD', borderBottom: '1px solid rgba(255,255,255,0.04)', backgroundColor: 'rgba(127,119,221,0.04)' }}>{row.build}</td>
                      <td style={{ padding: '0.9rem 1rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontSize: '0.82rem', color: '#f5c518', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.launch}</td>
                      <td style={{ padding: '0.9rem 1rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontSize: '0.82rem', color: '#5e5a7a', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.freelancer}</td>
                      <td style={{ padding: '0.9rem 1rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontSize: '0.82rem', color: '#5e5a7a', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.agency}</td>
                      <td style={{ padding: '0.9rem 1rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontSize: '0.82rem', color: '#5e5a7a', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.inhouse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ backgroundColor: '#0d0d22', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Pricing FAQ</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>
                Questions about cost and payment.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
              {pricingFaqs.map((faq, i) => (
                <details key={faq.q} style={{ backgroundColor: i % 2 === 0 ? '#0d0d22' : '#09091a' }}>
                  <summary style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.95rem', color: '#eceaf5', padding: '1.25rem 1.5rem', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none' }}>
                    {faq.q}
                    <span style={{ color: '#7F77DD', fontSize: '1.2rem', flexShrink: 0, marginLeft: '1rem' }}>+</span>
                  </summary>
                  <div style={{ padding: '0 1.5rem 1.25rem' }}>
                    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.9rem', color: '#9d99b8', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <Link href="/launch/faq" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: 600, color: '#7F77DD', textDecoration: 'none' }}>
                More questions answered →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #11112b 0%, #16163a 100%)', padding: '5rem 0' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Start with a free Scope Session.</h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.05rem', color: '#9d99b8', lineHeight: 1.75, margin: '0 0 2rem' }}>No commitment. We map your idea, define the feature set, and tell you exactly what it will cost — before you spend a penny.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#09091a', backgroundColor: '#7F77DD', padding: '1rem 2.25rem', borderRadius: '8px', textDecoration: 'none' }}>
                Book a Scope Session →
              </Link>
              <Link href="/launch/what-ships" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: '#9d99b8', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', padding: '1rem 2rem', borderRadius: '8px' }}>
                See full deliverables
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

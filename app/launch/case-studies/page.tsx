import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'MVP Case Studies · Two Bit Digital',
  description: 'Real SaaS products built by Two Bit Digital. Tikkit X — event tech for Pakistan. Averon Legal Systems — compliance SaaS for UK costs lawyers.',
  keywords: ['saas mvp case study', 'mvp development examples', 'saas development uk case study', 'mvp development portfolio'],
  alternates: { canonical: 'https://www.twobitdigital.com/launch/case-studies' },
  openGraph: {
    title: 'MVP Case Studies · Two Bit Digital',
    description: 'Tikkit X and Averon Legal Systems — two production SaaS products built by Two Bit Digital.',
    url: 'https://www.twobitdigital.com/launch/case-studies',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'MVP Case Studies — Two Bit Digital',
  url: 'https://www.twobitdigital.com/launch/case-studies',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.twobitdigital.com' },
      { '@type': 'ListItem', position: 2, name: 'Launch', item: 'https://www.twobitdigital.com/launch' },
      { '@type': 'ListItem', position: 3, name: 'Case Studies', item: 'https://www.twobitdigital.com/launch/case-studies' },
    ],
  },
}

const caseStudies = [
  {
    slug: 'tikkit-x',
    name: 'Tikkit X',
    category: 'Event Technology · Pakistan',
    color: '#7F77DD',
    tagline: 'Mobile-first event ticketing with offline QR verification for Pakistan\'s unconnected venues.',
    problem: 'Pakistan\'s event venues lack reliable internet. Standard QR ticketing systems require a connection — causing queues, gate crashes, and fraud.',
    solution: 'Offline-first HMAC-SHA256 QR verification. JazzCash and EasyPaisa payment integration. Freemium model. Works without internet at the gate.',
    outcome: 'Live on the App Store. Processing real-money transactions at Pakistani events.',
    metrics: [
      { label: 'Payment methods', value: 'JazzCash + EasyPaisa' },
      { label: 'Verification', value: 'Offline HMAC-SHA256' },
      { label: 'Platform', value: 'iOS + Android + Web' },
      { label: 'Model', value: 'Freemium' },
    ],
    stack: ['Next.js', 'React Native', 'Supabase', 'TypeScript'],
    href: '/launch/case-studies/tikkit-x',
  },
  {
    slug: 'averon-legal',
    name: 'Averon Legal Systems',
    category: 'Legal Technology · United Kingdom',
    color: '#1D9E75',
    tagline: 'CPR Part 47 and Part 36 compliance SaaS for UK costs lawyers — deadline engine, multi-tenant, client portal.',
    problem: 'UK costs lawyers track Part 47 detailed assessment deadlines in spreadsheets. One missed deadline can invalidate a costs claim worth tens of thousands of pounds.',
    solution: 'Multi-tenant SaaS with an automated deadline calculation engine for CPR Part 47 and Part 36 procedures. Client portal. Row-level security throughout.',
    outcome: 'In beta with UK costs law firms. Replacing Excel-based deadline tracking.',
    metrics: [
      { label: 'Compliance framework', value: 'CPR Part 47 + 36' },
      { label: 'Architecture', value: 'Multi-tenant + RLS' },
      { label: 'Client access', value: 'Dedicated portal' },
      { label: 'Status', value: 'Beta' },
    ],
    stack: ['Next.js', 'Supabase', 'TypeScript', 'Vercel'],
    href: '/launch/case-studies/averon-legal',
  },
]

export default function CaseStudiesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>
        <div style={{ backgroundColor: '#09091a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Launch', href: '/launch' }, { label: 'Case Studies' }]} />
          </div>
        </div>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)', padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="section-label">Proof of work</div>
            <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#eceaf5', margin: '0.75rem 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: '760px' }}>
              We build these products ourselves. That is how we know what works.
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', color: '#9d99b8', lineHeight: 1.8, maxWidth: '620px', margin: 0 }}>
              Two Bit Digital is not just an agency. We build and operate in-house SaaS products. Every lesson we have learned building our own software is applied to yours.
            </p>
          </div>
        </section>

        {/* Case study cards */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {caseStudies.map((cs) => (
              <div key={cs.slug} style={{ backgroundColor: '#0d0d22', border: '1px solid rgba(255,255,255,0.07)', borderTop: `3px solid ${cs.color}`, borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                  {/* Left */}
                  <div>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: cs.color, marginBottom: '0.5rem' }}>{cs.category}</div>
                    <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>{cs.name}</h2>
                    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.75, margin: '0 0 2rem' }}>{cs.tagline}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', marginBottom: '0.3rem' }}>The problem</div>
                        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.7, margin: 0 }}>{cs.problem}</p>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', marginBottom: '0.3rem' }}>The solution</div>
                        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.7, margin: 0 }}>{cs.solution}</p>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', marginBottom: '0.3rem' }}>The outcome</div>
                        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: cs.color, lineHeight: 1.7, margin: 0, fontWeight: 500 }}>{cs.outcome}</p>
                      </div>
                    </div>
                    <Link href={cs.href} style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.825rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: cs.color, textDecoration: 'none', border: `1px solid ${cs.color}`, padding: '0.75rem 1.5rem', borderRadius: '8px' }}>
                      Read full case study →
                    </Link>
                  </div>
                  {/* Right — metrics */}
                  <div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                      {cs.metrics.map((m) => (
                        <div key={m.label} style={{ backgroundColor: '#09091a', padding: '1.25rem' }}>
                          <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', marginBottom: '0.4rem' }}>{m.label}</div>
                          <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.85rem', color: '#eceaf5' }}>{m.value}</div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', marginBottom: '0.6rem' }}>Stack</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {cs.stack.map((s) => (
                          <span key={s} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 500, color: '#9d99b8', backgroundColor: '#11112b', border: '1px solid rgba(255,255,255,0.06)', padding: '0.25rem 0.6rem', borderRadius: '999px' }}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #11112b 0%, #16163a 100%)', padding: '5rem 0' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Ready to build yours?</h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.05rem', color: '#9d99b8', lineHeight: 1.75, margin: '0 0 2rem' }}>Book a scope session. We will map your idea and tell you exactly what ships.</p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#09091a', backgroundColor: '#7F77DD', padding: '1rem 2.25rem', borderRadius: '8px', textDecoration: 'none' }}>
              Book a Scope Session →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

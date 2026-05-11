import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: "What's Included in Your MVP Build · Two Bit Digital",
  description: 'No vague deliverables. Here is exactly what you receive when Two Bit Digital builds your SaaS MVP — product, technical, and ownership spec.',
  keywords: ['what does MVP development include', 'SaaS MVP deliverables', 'MVP development spec', 'what ships in SaaS MVP', 'MVP development UK'],
  alternates: { canonical: 'https://www.twobitdigital.com/launch/what-ships' },
  openGraph: {
    title: "What's Included in Your MVP Build · Two Bit Digital",
    description: 'Exact deliverable spec for a Two Bit Digital SaaS MVP build. Product, technical, ownership.',
    url: 'https://www.twobitdigital.com/launch/what-ships',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "What's Included in Your MVP Build — Two Bit Digital",
  url: 'https://www.twobitdigital.com/launch/what-ships',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.twobitdigital.com' },
      { '@type': 'ListItem', position: 2, name: 'Launch', item: 'https://www.twobitdigital.com/launch' },
      { '@type': 'ListItem', position: 3, name: 'What Ships', item: 'https://www.twobitdigital.com/launch/what-ships' },
    ],
  },
}

const deliverables = [
  {
    category: 'Product',
    color: '#7F77DD',
    items: [
      { title: 'Working web application on your domain', desc: 'Live, real URL. Real users can sign up from day one.' },
      { title: 'User authentication', desc: 'Email/password, magic link, or OAuth (Google, GitHub) — scoped in Day 1.' },
      { title: 'Core feature set', desc: 'The exact feature list agreed in the scope session. No more, no less.' },
      { title: 'Responsive UI', desc: 'Mobile and desktop. Consistent, production-quality design throughout.' },
      { title: 'Admin panel or dashboard', desc: 'Organiser-side, operator-side, or internal tooling — as scoped.' },
    ],
  },
  {
    category: 'Technical',
    color: '#1D9E75',
    items: [
      { title: 'Next.js 14 App Router + TypeScript', desc: 'Type-safe, fast, SEO-optimised. The right foundation for a SaaS product.' },
      { title: 'Supabase — PostgreSQL with RLS', desc: 'Row-level security from day one. Your data is isolated correctly.' },
      { title: 'Deployed on Vercel', desc: '99.9% uptime. Global CDN. Zero-config CI/CD from the GitHub repository.' },
      { title: 'Tailwind CSS', desc: 'Clean, maintainable styling. Easy for any developer to pick up.' },
      { title: 'Stripe (if in scope)', desc: 'Subscription billing, one-time payments, webhooks — production-grade.' },
      { title: 'Email integration (if in scope)', desc: 'Resend or SendGrid. Transactional emails, onboarding sequences.' },
    ],
  },
  {
    category: 'Ownership',
    color: '#f5c518',
    items: [
      { title: 'Complete GitHub repository', desc: 'Private repo transferred to your account. Full source history. No lock-in.' },
      { title: 'All deployment credentials', desc: 'Vercel, Supabase, domain registrar. Every login. Nothing held back.' },
      { title: 'Codebase documentation', desc: 'README with architecture overview, environment setup, and deployment notes.' },
      { title: '30-day post-launch support', desc: 'Bug fixes only. If something breaks in the first 30 days, we fix it.' },
    ],
  },
]

const notIncluded = [
  { item: 'iOS / Android native apps', reason: 'A web app is faster, cheaper, and investor-sufficient at MVP stage. Most investors expect a link, not an App Store submission.' },
  { item: 'AI/ML model training', reason: 'We integrate existing APIs (OpenAI, Anthropic, Replicate) — that\'s what a funded MVP needs. Custom model training is post-product-market-fit work.' },
  { item: 'Content creation or copywriting', reason: 'You know your users better than we do. We build the platform; you fill it with the messaging that converts.' },
  { item: 'Ongoing maintenance retainer', reason: 'Not included by default — but available. Speak to us after launch if you want a monthly engineering retainer.' },
]

const stackRationale = [
  { tech: 'Next.js 14', why: 'App Router gives you server components, streaming, and file-based routing out of the box. It\'s the standard for production SaaS in 2025. SEO-friendly, fast, and every competent React developer knows it.' },
  { tech: 'TypeScript', why: 'Type safety catches bugs before they reach production. For a funded startup, a runtime error in front of an investor is catastrophic. TypeScript prevents that class of problem.' },
  { tech: 'Supabase', why: 'Postgres with row-level security, real-time subscriptions, and auth built in. Open source. You can self-host when you grow. No vendor lock-in at the infrastructure level.' },
  { tech: 'Vercel', why: 'Zero-config deployments from GitHub. Preview environments for every pull request. Edge network. 99.9% uptime. It just works — and you spend no time on DevOps.' },
  { tech: 'Tailwind CSS', why: 'Utility-first CSS that any developer can read and modify. No proprietary component library that becomes a dependency. The resulting CSS bundle is small and fast.' },
]

export default function WhatShipsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>
        <div style={{ backgroundColor: '#09091a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Launch', href: '/launch' }, { label: 'What Ships' }]} />
          </div>
        </div>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)', padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="section-label">Deliverables</div>
            <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#eceaf5', margin: '0.75rem 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: '760px' }}>
              No vague deliverables. Here&apos;s exactly what you receive.
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', color: '#9d99b8', lineHeight: 1.8, maxWidth: '620px', margin: 0 }}>
              Three categories: what you get as a product, what it runs on technically, and what you own at the end. All of it. No ambiguity.
            </p>
          </div>
        </section>

        {/* Deliverables */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {deliverables.map((cat) => (
              <div key={cat.category}>
                <div style={{ marginBottom: '2rem' }}>
                  <div className="section-label">{cat.category}</div>
                  <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>{cat.category} deliverables</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                  {cat.items.map((item) => (
                    <div key={item.title} style={{ backgroundColor: '#0d0d22', border: '1px solid rgba(255,255,255,0.07)', borderLeft: `3px solid ${cat.color}`, borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
                      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                        <span style={{ color: cat.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem', color: '#eceaf5' }}>{item.title}</span>
                      </div>
                      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: '#9d99b8', lineHeight: 1.7, margin: '0 0 0 1.35rem' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack rationale */}
        <section style={{ backgroundColor: '#0d0d22', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Why this stack</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>
                Every technology choice is deliberate.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
              {stackRationale.map((s, i) => (
                <div key={s.tech} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', backgroundColor: i % 2 === 0 ? '#0d0d22' : '#09091a' }}>
                  <div style={{ padding: '1.25rem 1.5rem', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.95rem', color: '#7F77DD' }}>{s.tech}</span>
                  </div>
                  <div style={{ padding: '1.25rem 1.5rem' }}>
                    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.75, margin: 0 }}>{s.why}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1rem' }}>
              <Link href="/launch/tech-stack" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: 600, color: '#7F77DD', textDecoration: 'none' }}>
                Full tech stack deep-dive →
              </Link>
            </div>
          </div>
        </section>

        {/* Not included */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Scope discipline</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0.5rem 0 0.5rem', letterSpacing: '-0.02em' }}>What&apos;s not included — and why.</h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.75, maxWidth: '600px' }}>
                Scope discipline is why we can ship in 10 days. Every exclusion is a deliberate choice that makes your MVP better, not worse.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {notIncluded.map((item) => (
                <div key={item.item} style={{ backgroundColor: '#0d0d22', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1.5rem', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '1.5rem', alignItems: 'start' }}>
                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                    <span style={{ color: '#3d3a56', fontWeight: 700 }}>✗</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', color: '#5e5a7a' }}>{item.item}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.7, margin: 0 }}>{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #11112b 0%, #16163a 100%)', padding: '5rem 0' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Ready to see what we can build for you?</h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.05rem', color: '#9d99b8', lineHeight: 1.75, margin: '0 0 2rem' }}>Book a scope session. We will tell you exactly what ships — before you commit to anything.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#09091a', backgroundColor: '#7F77DD', padding: '1rem 2.25rem', borderRadius: '8px', textDecoration: 'none' }}>
                Book a Scope Session →
              </Link>
              <Link href="/launch/pricing" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: '#9d99b8', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', padding: '1rem 2rem', borderRadius: '8px' }}>
                View pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

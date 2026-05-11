import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'How MVP Development Works · Two Bit Digital',
  description: 'Day-by-day: how Two Bit Digital builds your SaaS MVP in 10 working days. Scope to launch. No surprises. See the full process.',
  keywords: ['MVP development process UK', 'how does MVP development work', 'SaaS MVP timeline', 'MVP development steps', 'MVP development process'],
  alternates: { canonical: 'https://www.twobitdigital.com/launch/how-it-works' },
  openGraph: {
    title: 'How MVP Development Works · Two Bit Digital',
    description: 'Day-by-day: how Two Bit Digital builds your SaaS MVP in 10 working days.',
    url: 'https://www.twobitdigital.com/launch/how-it-works',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'How MVP Development Works — Two Bit Digital',
  url: 'https://www.twobitdigital.com/launch/how-it-works',
  description: 'Day-by-day breakdown of how Two Bit Digital delivers a production SaaS MVP in 10 working days.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.twobitdigital.com' },
      { '@type': 'ListItem', position: 2, name: 'Launch', item: 'https://www.twobitdigital.com/launch' },
      { '@type': 'ListItem', position: 3, name: 'How It Works', item: 'https://www.twobitdigital.com/launch/how-it-works' },
    ],
  },
}

const days = [
  { range: 'Day 1', label: 'Scope Session', color: '#7F77DD', detail: 'We spend one focused session with you mapping the core user flow. One problem. One solution. We define exactly what ships and what doesn\'t. You leave Day 1 with a signed-off spec document — the exact feature set, the tech stack, the launch URL. No ambiguity. No feature creep.' },
  { range: 'Day 2', label: 'Architecture & Setup', color: '#7F77DD', detail: 'We set up the project structure, configure the Supabase database schema, and establish the deployment pipeline. Every environment is production-grade from day one — no "we\'ll sort the infrastructure later" shortcut.' },
  { range: 'Days 3–4', label: 'Core Build', color: '#7F77DD', detail: 'The core user flow goes in. Authentication, the primary database model, and the main UI. By end of Day 4 you receive a live preview link — a real URL, not a screenshot — so you can see exactly where we are.' },
  { range: 'Days 5–7', label: 'Feature Build', color: '#7F77DD', detail: 'Secondary features, integrations (Stripe, Resend, third-party APIs), and the admin or organiser-side functionality are built. Mobile responsiveness is handled in parallel — not left to the end.' },
  { range: 'Day 8', label: 'QA & Polish', color: '#7F77DD', detail: 'Full quality assurance pass. Edge cases, error handling, loading states, empty states. We find the bugs before you do. The UI gets its final polish pass to ensure consistency across all screens.' },
  { range: 'Day 9', label: 'Review Round', color: '#7F77DD', detail: 'You review the complete product on the live preview URL. You give us structured feedback — what needs changing within scope. We make the agreed refinements. One structured round. No back-and-forth spirals.' },
  { range: 'Day 10', label: 'Launch', color: '#1D9E75', detail: 'We deploy to production on Vercel with your custom domain connected. The GitHub repository is transferred to your account — with full source code, documentation, and all deployment credentials. You own everything from this moment.' },
]

const fromYou = [
  'Your idea explained clearly (a paragraph is fine)',
  'The primary problem you\'re solving and who has it',
  'Any existing designs or wireframes (not required)',
  'Your domain name or preferred URL',
  'Access to your preferred email address for deployment credentials',
]

const youReceive = [
  'Fully working web application on your domain',
  'User authentication (email, magic link, or OAuth)',
  'Core feature set as defined in scope session',
  'Responsive UI — mobile and desktop',
  'Admin panel or dashboard as scoped',
  'Complete GitHub repository — private, transferred to you',
  'All deployment credentials (Vercel, Supabase, domain)',
  'Codebase documentation',
  '30-day post-launch support window (bugs only)',
]

export default function HowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>
        <div style={{ backgroundColor: '#09091a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Launch', href: '/launch' }, { label: 'How It Works' }]} />
          </div>
        </div>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)', padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="section-label">The process</div>
            <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#eceaf5', margin: '0.75rem 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: '760px' }}>
              From idea to live in 10 working days. Here&apos;s exactly how.
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', color: '#9d99b8', lineHeight: 1.8, maxWidth: '640px', margin: '0 0 2rem' }}>
              No vague timelines. No moving goalposts. Every day has a defined output. You know exactly what we are building — because you approved the spec on Day 1.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#09091a', backgroundColor: '#7F77DD', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none' }}>
                Book a Scope Session →
              </Link>
              <Link href="/launch/pricing" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.875rem', color: '#9d99b8', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', padding: '0.9rem 2rem', borderRadius: '8px' }}>
                View pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Day-by-day */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem' }}>
              <div className="section-label">Day by day</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>The 10-day breakdown.</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
              {days.map((day, i) => (
                <div key={day.range} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', backgroundColor: i % 2 === 0 ? '#0d0d22' : '#09091a' }}>
                  <div style={{ padding: '1.5rem', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: day.color, marginBottom: '0.35rem' }}>{day.range}</div>
                    <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.95rem', color: '#eceaf5' }}>{day.label}</div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.9rem', color: '#9d99b8', lineHeight: 1.75, margin: 0 }}>{day.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we need from you / What you receive */}
        <section style={{ backgroundColor: '#0d0d22', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <div className="section-label">Your role</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#eceaf5', margin: '0.5rem 0 1.5rem', letterSpacing: '-0.02em' }}>What we need from you.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {fromYou.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#7F77DD', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>→</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: '#9d99b8', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: '#5e5a7a', marginTop: '1.5rem', lineHeight: 1.75 }}>
                You do not need a technical background. You do not need to know what stack you want. You need to know your users and their problem.
              </p>
            </div>
            <div>
              <div className="section-label">The handover</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#eceaf5', margin: '0.5rem 0 1.5rem', letterSpacing: '-0.02em' }}>What you receive on Day 10.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {youReceive.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#1D9E75', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: '#9d99b8', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/launch/what-ships" style={{ display: 'inline-block', marginTop: '1.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: 600, color: '#7F77DD', textDecoration: 'none' }}>
                Full deliverable spec →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #11112b 0%, #16163a 100%)', padding: '5rem 0' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Ready to start the clock?</h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.05rem', color: '#9d99b8', lineHeight: 1.75, margin: '0 0 2rem' }}>Day 1 is a scope session. Book it and we will map exactly what ships.</p>
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

import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'Tikkit X Case Study — Event Tech for Pakistan · Two Bit Digital',
  description: 'How Two Bit Digital built Tikkit X: offline-first event ticketing and QR verification for Pakistan\'s unconnected venues. JazzCash, EasyPaisa, HMAC-SHA256.',
  keywords: ['event ticketing saas case study', 'offline qr ticketing', 'pakistan event tech', 'saas mvp case study', 'react native mvp'],
  alternates: { canonical: 'https://www.twobitdigital.com/launch/case-studies/tikkit-x' },
  openGraph: {
    title: 'Tikkit X Case Study — Event Tech for Pakistan · Two Bit Digital',
    description: 'Offline-first event ticketing with HMAC-SHA256 QR verification. Built in-house by Two Bit Digital.',
    url: 'https://www.twobitdigital.com/launch/case-studies/tikkit-x',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Tikkit X Case Study — Two Bit Digital',
  url: 'https://www.twobitdigital.com/launch/case-studies/tikkit-x',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.twobitdigital.com' },
      { '@type': 'ListItem', position: 2, name: 'Launch', item: 'https://www.twobitdigital.com/launch' },
      { '@type': 'ListItem', position: 3, name: 'Case Studies', item: 'https://www.twobitdigital.com/launch/case-studies' },
      { '@type': 'ListItem', position: 4, name: 'Tikkit X', item: 'https://www.twobitdigital.com/launch/case-studies/tikkit-x' },
    ],
  },
}

const timeline = [
  { phase: 'Week 1', label: 'Foundation', detail: 'Database schema design for multi-organiser architecture. Supabase RLS policies. Expo + React Native project structure. Authentication flow with Supabase Auth.' },
  { phase: 'Week 2', label: 'Core ticketing', detail: 'Event creation flow. Ticket tier configuration. QR generation with HMAC-SHA256 signing. Organiser dashboard for event management.' },
  { phase: 'Week 3', label: 'Payments', detail: 'JazzCash and EasyPaisa integration via payment gateway APIs. Webhook handling for payment confirmation. Ticket issuance on payment success.' },
  { phase: 'Week 4', label: 'Offline verification', detail: 'Gate scanner app with offline-first QR verification. Local HMAC validation without internet connection. Sync mechanism when connectivity restores.' },
  { phase: 'Week 5–6', label: 'Polish + launch', detail: 'App Store and Google Play submission. Marketing website. Freemium tier configuration. Production monitoring. First event processed.' },
]

const technicalDecisions = [
  {
    decision: 'HMAC-SHA256 offline verification',
    why: 'Pakistani venues — particularly outdoor events, private halls, and stadium gates — have unreliable 4G coverage. Standard cloud-lookup QR verification fails under load when the network drops. HMAC-SHA256 embeds a cryptographic signature in the QR code that can be validated locally without a network call. The gate scanner app pre-caches the event\'s secret key and validates every ticket cryptographically, offline. This eliminates gate queues caused by network timeouts.',
  },
  {
    decision: 'JazzCash and EasyPaisa (not Stripe)',
    why: 'Pakistan\'s two dominant mobile money platforms cover 80%+ of the addressable market for events. Credit card penetration in Pakistan is low — mobile wallet penetration is high. Building for Stripe would have been technically easier but commercially wrong. We integrated both payment gateways via their respective APIs and unified them behind a single internal payment interface.',
  },
  {
    decision: 'React Native (not web-only)',
    why: 'The gate scanner use case requires a native mobile experience. A web app running in a browser cannot reliably access the camera, process QR codes at speed, or function offline in the way required. The organiser dashboard and attendee ticket wallet were also built as native screens, providing a consistent experience across the full product.',
  },
  {
    decision: 'Freemium model with per-ticket fees',
    why: 'Charging organisers a monthly SaaS fee creates friction for first-time event organisers who may only run one event. A freemium model with per-ticket transaction fees aligns our revenue with our customers\' success. As they sell more tickets, we earn more. This removes the upfront commitment barrier and accelerates adoption.',
  },
  {
    decision: 'Multi-organiser Supabase schema',
    why: 'From day one, the data model supports multiple independent event organisers in the same database, isolated by Row-Level Security. This is not a feature added after launch — it is designed into the schema. A single-tenant design would have required a breaking migration to support the business model at scale.',
  },
]

const metrics = [
  { label: 'Verification method', value: 'HMAC-SHA256' },
  { label: 'Works offline', value: 'Yes — gate scanner' },
  { label: 'Payment methods', value: 'JazzCash + EasyPaisa' },
  { label: 'Platform', value: 'iOS, Android, Web' },
  { label: 'Business model', value: 'Freemium + per-ticket' },
  { label: 'Architecture', value: 'Multi-organiser' },
  { label: 'Database', value: 'Supabase (PostgreSQL + RLS)' },
  { label: 'Status', value: 'Live' },
]

export default function TikkitXCaseStudyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>
        <div style={{ backgroundColor: '#09091a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Launch', href: '/launch' }, { label: 'Case Studies', href: '/launch/case-studies' }, { label: 'Tikkit X' }]} />
          </div>
        </div>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)', padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div className="section-label" style={{ margin: 0 }}>Case study</div>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7F77DD' }}>Event Technology · Pakistan</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#eceaf5', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: '760px' }}>
              Tikkit X — offline-first event ticketing for Pakistan.
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', color: '#9d99b8', lineHeight: 1.8, maxWidth: '640px', margin: '0 0 2rem' }}>
              Pakistan&apos;s venues don&apos;t have reliable internet. Standard ticketing systems fail at the gate. We built the offline-first alternative — with cryptographic QR verification and local payment methods.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://tikkitx.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#09091a', backgroundColor: '#7F77DD', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none' }}>
                Visit Tikkit X ↗
              </a>
              <Link href="/launch/case-studies" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.875rem', color: '#9d99b8', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', padding: '0.9rem 2rem', borderRadius: '8px' }}>
                ← All case studies
              </Link>
            </div>
          </div>
        </section>

        {/* Metrics bar */}
        <section style={{ backgroundColor: '#0d0d22', padding: '2.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '10px', overflow: 'hidden' }}>
              {metrics.map((m) => (
                <div key={m.label} style={{ backgroundColor: '#0d0d22', padding: '1.25rem' }}>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', marginBottom: '0.35rem' }}>{m.label}</div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', color: '#eceaf5' }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem + Solution */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <div className="section-label">The problem</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#eceaf5', margin: '0.5rem 0 1.25rem', letterSpacing: '-0.02em' }}>Pakistan&apos;s venues don&apos;t have reliable internet.</h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.8, margin: '0 0 1rem' }}>
                Standard digital ticketing assumes a cloud connection at the gate. For events in Pakistan — outdoor festivals, private halls, stadium entrances — that assumption is wrong. Network congestion when 5,000 people arrive simultaneously makes cloud-lookup QR verification unreliable.
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.8, margin: 0 }}>
                The existing alternatives: paper tickets (easily forged), WhatsApp-based lists (unscalable), or international platforms with no local payment support and high foreign exchange fees.
              </p>
            </div>
            <div>
              <div className="section-label">The solution</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#eceaf5', margin: '0.5rem 0 1.25rem', letterSpacing: '-0.02em' }}>Cryptographic verification. No internet required.</h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.8, margin: '0 0 1rem' }}>
                Each Tikkit X QR code contains an HMAC-SHA256 signature generated at ticket issuance. The gate scanner validates this signature locally — no network call required. If the signature is valid and the ticket has not been scanned before, entry is granted.
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.8, margin: 0 }}>
                JazzCash and EasyPaisa integration means attendees pay with the wallets they already have. No credit card required. No foreign exchange fees. Funds settle in Pakistani rupees to the organiser.
              </p>
            </div>
          </div>
        </section>

        {/* Technical decisions */}
        <section style={{ backgroundColor: '#0d0d22', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Engineering decisions</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>
                Why we made the choices we made.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {technicalDecisions.map((d) => (
                <div key={d.decision} style={{ backgroundColor: '#09091a', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '3px solid #7F77DD', borderRadius: '8px', padding: '1.5rem 2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1rem', color: '#eceaf5', margin: '0 0 0.6rem', letterSpacing: '-0.01em' }}>{d.decision}</h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.8, margin: 0 }}>{d.why}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Build timeline */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Build timeline</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>Six weeks from concept to App Store.</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
              {timeline.map((t, i) => (
                <div key={t.phase} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', backgroundColor: i % 2 === 0 ? '#0d0d22' : '#09091a' }}>
                  <div style={{ padding: '1.5rem', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#7F77DD', marginBottom: '0.35rem' }}>{t.phase}</div>
                    <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.95rem', color: '#eceaf5' }}>{t.label}</div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.75, margin: 0 }}>{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section style={{ backgroundColor: '#0d0d22', padding: '3rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', marginBottom: '0.6rem' }}>Stack</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Next.js 14', 'React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel', 'JazzCash API', 'EasyPaisa API', 'HMAC-SHA256'].map((s) => (
                  <span key={s} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 500, color: '#9d99b8', backgroundColor: '#11112b', border: '1px solid rgba(255,255,255,0.06)', padding: '0.3rem 0.7rem', borderRadius: '999px' }}>{s}</span>
                ))}
              </div>
            </div>
            <a href="https://tikkitx.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#7F77DD', textDecoration: 'none', border: '1px solid #7F77DD', padding: '0.75rem 1.5rem', borderRadius: '8px', whiteSpace: 'nowrap' }}>
              Visit tikkitx.com ↗
            </a>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #11112b 0%, #16163a 100%)', padding: '5rem 0' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Ready to build your SaaS?</h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.05rem', color: '#9d99b8', lineHeight: 1.75, margin: '0 0 2rem' }}>We apply the same engineering discipline to every build. Book a scope session and we will map exactly what ships for your product.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#09091a', backgroundColor: '#7F77DD', padding: '1rem 2.25rem', borderRadius: '8px', textDecoration: 'none' }}>
                Book a Scope Session →
              </Link>
              <Link href="/launch/case-studies/averon-legal" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: '#9d99b8', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', padding: '1rem 2rem', borderRadius: '8px' }}>
                Next case study →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'MVP Development UK · Two Bit Digital',
  description: 'Production SaaS in 10 working days. Real code, live on Vercel, source on GitHub. UK-registered MVP studio. Book your scope session today.',
  keywords: [
    'MVP development UK',
    'SaaS MVP development',
    'MVP development company UK',
    'startup MVP development',
    'SaaS development company UK',
    'investor ready SaaS',
    'build SaaS product UK',
    'MVP studio UK',
    'next.js SaaS development',
    'SaaS MVP studio',
  ],
  alternates: { canonical: 'https://www.twobitdigital.com/launch' },
  openGraph: {
    title: 'MVP Development UK · Two Bit Digital',
    description: 'Production SaaS in 10 working days. Real code, live on Vercel, source on GitHub. UK-registered MVP studio.',
    url: 'https://www.twobitdigital.com/launch',
    type: 'website',
  },
  twitter: {
    title: 'MVP Development UK · Two Bit Digital',
    description: 'Your SaaS. Live in 10 days. Real code, live deployment, you own everything.',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'MVP Development UK',
  description: 'Production SaaS in 10 working days. Real auth, real database, real payments. Live on Vercel, source on GitHub.',
  url: 'https://www.twobitdigital.com/launch',
  provider: {
    '@type': 'Organization',
    name: 'Two Bit Digital Ltd',
    url: 'https://www.twobitdigital.com',
    '@id': 'https://www.twobitdigital.com/#organization',
  },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'SaaS MVP Development',
  offers: [
    { '@type': 'Offer', name: 'Validate', price: '1500', priceCurrency: 'GBP', description: 'Landing page with waitlist, Stripe pre-sell, email capture. 48-hour delivery.' },
    { '@type': 'Offer', name: 'Build', price: '7500', priceCurrency: 'GBP', description: 'Full MVP. Auth, database, core features. GitHub + Vercel. 10 working days.' },
    { '@type': 'Offer', name: 'Launch', price: '12500', priceCurrency: 'GBP', description: 'Build + 30-day post-launch iteration sprint. Investor demo prep included.' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you really build a real SaaS in 10 days?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — with one condition: a clearly scoped core. The 10-day timeline works when you and we agree on exactly what ships. If scope is unclear at Day 1, we do a paid Scope Session first (£250, refunded against any build package). Look at Tikkit X and Averon Legal — these are production systems, not demos.' },
    },
    {
      '@type': 'Question',
      name: 'Do I own the code?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. 100%. The GitHub repository is transferred to you at launch. We retain no IP. No licensing fees. No lock-in. The codebase is yours forever.' },
    },
    {
      '@type': 'Question',
      name: 'What if I don\'t have a technical background?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our best clients are non-technical founders. You don\'t need to understand the code — you need to understand your users. We handle the rest and explain every decision in plain English.' },
    },
    {
      '@type': 'Question',
      name: 'How is this different from hiring a freelancer?',
      acceptedAnswer: { '@type': 'Answer', text: 'A freelancer is one person. We are a coordinated team with product, design, and engineering under one process. We have built production SaaS before — including our own products. A freelancer may be cheaper upfront, but the second you hit a problem they cannot solve alone, you are stuck.' },
    },
    {
      '@type': 'Question',
      name: 'What if my idea needs AI?',
      acceptedAnswer: { '@type': 'Answer', text: 'We integrate AI APIs (OpenAI, Anthropic, Replicate, etc.) as part of our standard builds. We do not train custom models at MVP stage — that is expensive and unnecessary. We ship AI-powered features using existing APIs. We are also a Meta Technology Partner, which means social and advertising integrations are native.' },
    },
  ],
}

const antiPitch = [
  { them: 'A Figma file you can\'t deploy', us: 'Live software on a real URL' },
  { them: '"Clickable prototypes"', us: 'Working auth, real database, real API' },
  { them: '3–6 month timelines', us: '10 working days' },
  { them: 'Hourly billing with no ceiling', us: 'Fixed-scope, fixed-price packages' },
  { them: 'Code you never see', us: 'GitHub repo — you own everything' },
  { them: 'A junior team learning on your budget', us: 'The team that built Tikkit X and Averon Legal' },
]

const steps = [
  { day: 'Day 1', title: 'Scope', desc: 'One focused session. We map the core user flow, define exactly what ships, and lock the spec. No feature creep. No ambiguity.' },
  { day: 'Days 2–8', title: 'Build', desc: 'Our team builds the core product. Next.js frontend, Supabase backend, auth, database, payments. You get a live preview on Day 4.' },
  { day: 'Day 9', title: 'Review', desc: 'You review the live product. We take structured feedback and make refinements. One round. No spiral.' },
  { day: 'Day 10', title: 'Launch', desc: 'We deploy to production with your custom domain. GitHub repo transferred. Documentation included. You own everything.' },
]

const packages = [
  {
    name: 'Validate',
    price: '£1,500',
    delivery: '48 hours',
    tag: 'Test before you build',
    color: '#1D9E75',
    items: ['Landing page with waitlist', 'Stripe payment capture (pre-sell)', 'Email capture + automation', 'Analytics setup (PostHog)', 'Deployed on Vercel, domain connected'],
    featured: false,
  },
  {
    name: 'Build',
    price: '£7,500',
    delivery: '10 working days',
    tag: 'The full MVP',
    color: '#7F77DD',
    items: ['Full scope session (Day 1)', 'Auth + database + core features', 'Payment integration if required', 'Mobile-responsive UI', 'GitHub source + Vercel deployment'],
    featured: true,
  },
  {
    name: 'Launch',
    price: '£12,500',
    delivery: '6 weeks',
    tag: 'Build + 30 days iteration',
    color: '#f5c518',
    items: ['Everything in Build', '30-day post-launch sprint', 'One additional feature cycle', 'Investor demo prep call', 'Priority Slack support channel'],
    featured: false,
  },
]

const faqs = [
  { q: 'Can you really build a real SaaS in 10 days?', a: 'Yes — with one condition: a clearly scoped core. The 10-day timeline works when you and we agree on exactly what ships. If scope is unclear at Day 1, we do a paid Scope Session first (£250, refunded against any build package). Look at Tikkit X and Averon Legal — these are production systems, not demos.' },
  { q: 'Do I own the code?', a: '100%. The GitHub repository is transferred to you at launch. We retain no IP. No licensing fees. No lock-in.' },
  { q: 'What if I don\'t have a technical background?', a: 'Our best clients are non-technical founders. You don\'t need to understand the code — you need to understand your users. We handle the rest and explain every decision in plain English.' },
  { q: 'How is this different from hiring a freelancer?', a: 'A freelancer is one person. We are a coordinated team with product, design, and engineering under one process. We have built production SaaS before — including our own products Tikkit X and Averon Legal.' },
  { q: 'What if my idea needs AI?', a: 'We integrate AI APIs (OpenAI, Anthropic, Replicate) as part of our standard builds. We ship AI-powered features using existing APIs. We are also a Meta Technology Partner — social and advertising integrations are native.' },
]

export default function LaunchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)',
          padding: '8rem 0 5rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '500px', borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(127,119,221,0.08) 0%, transparent 65%)' }} />
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            {/* Credentials */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {['UK Registered · Co. #14710072', 'UN Vendor · #1177996', 'Meta Technology Partner'].map((c) => (
                <span key={c} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.04em', color: '#9d99b8', backgroundColor: '#11112b', border: '1px solid rgba(255,255,255,0.08)', padding: '0.3rem 0.8rem', borderRadius: '999px' }}>{c}</span>
              ))}
            </div>
            <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2.4rem, 6vw, 4rem)', color: '#eceaf5', margin: '0 0 1.25rem', letterSpacing: '-0.04em', lineHeight: 1.1, maxWidth: '800px' }}>
              Your SaaS.<br />
              <span style={{ color: '#7F77DD' }}>Live in 10 days.</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#9d99b8', lineHeight: 1.8, maxWidth: '640px', margin: '0 0 2rem' }}>
              Not a wireframe. Not a clickable prototype. A working, deployed product — real auth, real database, real payments — ready for your first users and your next investor meeting.
            </p>
            {/* Stack badges */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {['Next.js 14', 'Supabase', 'Vercel', 'TypeScript', 'Tailwind CSS'].map((s) => (
                <span key={s} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', fontWeight: 600, color: '#7F77DD', backgroundColor: 'rgba(127,119,221,0.12)', border: '1px solid rgba(127,119,221,0.25)', padding: '0.35rem 0.9rem', borderRadius: '6px' }}>{s}</span>
              ))}
            </div>
            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#09091a', backgroundColor: '#7F77DD', padding: '1rem 2.25rem', borderRadius: '8px', textDecoration: 'none' }}>
                Start Your Build →
              </Link>
              <Link href="/launch/what-ships" style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.9rem', color: '#9d99b8', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '2px' }}>
                See what ships →
              </Link>
            </div>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '0.85rem', color: '#5e5a7a', margin: 0 }}>
              From the studio that built Tikkit X and Averon Legal.
            </p>
          </div>
        </section>

        {/* ── Anti-pitch ────────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#0d0d22', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem' }}>
              <div className="section-label">The difference</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>
                Not all studios ship the same thing.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ padding: '1rem 1.5rem', backgroundColor: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5e5a7a' }}>Other agencies give you</span>
              </div>
              <div style={{ padding: '1rem 1.5rem', backgroundColor: 'rgba(127,119,221,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7F77DD' }}>Two Bit Digital gives you</span>
              </div>
              {antiPitch.map((row, i) => (
                <>
                  <div key={`a${i}`} style={{ padding: '1rem 1.5rem', borderBottom: i < antiPitch.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: '#3d3a56', fontWeight: 700, flexShrink: 0 }}>✗</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: '#5e5a7a' }}>{row.them}</span>
                  </div>
                  <div key={`b${i}`} style={{ padding: '1rem 1.5rem', borderBottom: i < antiPitch.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', borderLeft: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(127,119,221,0.03)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: '#7F77DD', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', fontWeight: 500, color: '#eceaf5' }}>{row.us}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>

        {/* ── What ships (condensed) ────────────────────────────────── */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div className="section-label">Deliverables</div>
                <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>What you receive on Day 10.</h2>
              </div>
              <Link href="/launch/what-ships" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: 600, color: '#7F77DD', textDecoration: 'none', whiteSpace: 'nowrap' }}>Full spec →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '⚙️', title: 'Real Code', desc: 'Next.js 14, TypeScript, Supabase, Vercel. Production code that runs in the real world — not a demo environment.' },
                { icon: '🚀', title: 'Live Deployment', desc: 'Deployed to Vercel with your custom domain. Live on Day 10. Real users can sign up from minute one.' },
                { icon: '🔑', title: 'You Own It', desc: 'GitHub repository transferred to you. All credentials handed over. No lock-in. No licensing. Yours forever.' },
              ].map((item) => (
                <div key={item.title} style={{ backgroundColor: '#0d0d22', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '2rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1.15rem', color: '#eceaf5', margin: '0 0 0.75rem' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.9rem', color: '#9d99b8', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#0d0d22', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div className="section-label">The process</div>
                <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>Scope to launch in 10 days.</h2>
              </div>
              <Link href="/launch/how-it-works" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: 600, color: '#7F77DD', textDecoration: 'none', whiteSpace: 'nowrap' }}>Full process →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {steps.map((s, i) => (
                <div key={s.title} style={{ backgroundColor: '#09091a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '1.75rem', position: 'relative' }}>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7F77DD', marginBottom: '0.5rem' }}>Step {i + 1} · {s.day}</div>
                  <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1.1rem', color: '#eceaf5', margin: '0 0 0.75rem' }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ───────────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div className="section-label">Pricing</div>
                <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>Transparent pricing. No surprises.</h2>
              </div>
              <Link href="/launch/pricing" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: 600, color: '#7F77DD', textDecoration: 'none', whiteSpace: 'nowrap' }}>Full pricing detail →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', alignItems: 'start' }}>
              {packages.map((p) => (
                <div key={p.name} style={{ backgroundColor: '#0d0d22', border: p.featured ? `2px solid ${p.color}` : '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '2rem', position: 'relative' }}>
                  {p.featured && (
                    <div style={{ position: 'absolute', top: '-1px', right: '1.5rem', backgroundColor: p.color, color: '#09091a', fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '0.3rem 0.9rem', borderRadius: '0 0 8px 8px' }}>Recommended</div>
                  )}
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: p.color, marginBottom: '0.5rem' }}>{p.tag}</div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '2rem', color: '#eceaf5', marginBottom: '0.25rem' }}>{p.price}</div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1.15rem', color: '#eceaf5', marginBottom: '0.25rem' }}>{p.name}</div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: '#5e5a7a', marginBottom: '1.5rem' }}>Delivery: {p.delivery}</div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {p.items.map((item) => (
                      <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                        <span style={{ color: p.color, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                        <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#9d99b8' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" style={{ display: 'block', marginTop: '1.75rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: p.featured ? '#09091a' : '#eceaf5', backgroundColor: p.featured ? p.color : 'transparent', border: `1px solid ${p.featured ? p.color : 'rgba(255,255,255,0.12)'}`, padding: '0.75rem 1.5rem', borderRadius: '7px', textDecoration: 'none' }}>
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case studies ─────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#0d0d22', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div className="section-label">Proof</div>
                <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>We build our own products too.</h2>
              </div>
              <Link href="/launch/case-studies" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: 600, color: '#7F77DD', textDecoration: 'none', whiteSpace: 'nowrap' }}>All case studies →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {[
                { title: 'Tikkit X', sub: 'Event ticketing platform · Pakistan', desc: 'Cryptographic offline QR verification, JazzCash/EasyPaisa payments, multi-tenant architecture. Built and shipped. Live in market.', tags: ['Next.js', 'Supabase', 'React Native', 'HMAC-SHA256'], href: '/launch/case-studies/tikkit-x', color: '#f5c518' },
                { title: 'Averon Legal Systems', sub: 'CPR Part 47 compliance SaaS · UK', desc: 'Role-specific dashboards, Part 36 deadline tracking, immutable audit logging. Built for UK costs lawyers. Live on averonlegal.com.', tags: ['Next.js', 'Supabase', 'TypeScript', 'RLS'], href: '/launch/case-studies/averon-legal', color: '#7F77DD' },
              ].map((cs) => (
                <Link key={cs.title} href={cs.href} style={{ display: 'block', backgroundColor: '#09091a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '2rem', textDecoration: 'none' }}>
                  <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1.15rem', color: '#eceaf5', margin: '0 0 0.25rem' }}>{cs.title}</h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 500, color: cs.color, margin: '0 0 1rem', letterSpacing: '0.03em' }}>{cs.sub}</p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.9rem', color: '#9d99b8', lineHeight: 1.75, margin: '0 0 1.25rem' }}>{cs.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {cs.tags.map((tag) => (
                      <span key={tag} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', color: cs.color, backgroundColor: `${cs.color}12`, border: `1px solid ${cs.color}28`, padding: '0.25rem 0.6rem', borderRadius: '4px' }}>{tag}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Credentials bar ──────────────────────────────────────── */}
        <section style={{ backgroundColor: '#09091a', padding: '3rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', justifyContent: 'center' }}>
            {[
              { label: 'UK Registered', value: 'Companies House #14710072' },
              { label: 'UN Vendor', value: '#1177996' },
              { label: 'D&B D-U-N-S', value: '77-532-7428' },
              { label: 'Meta Technology Partner', value: 'Social & ads ready' },
            ].map((c) => (
              <div key={c.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#3d3a56', marginBottom: '0.3rem' }}>{c.label}</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: 500, color: '#6b6880' }}>{c.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#0d0d22', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem' }}>
              <div className="section-label">FAQ</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)', color: '#eceaf5', margin: '0.5rem 0 0.5rem', letterSpacing: '-0.02em' }}>Common questions.</h2>
              <Link href="/launch/faq" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: 500, color: '#7F77DD', textDecoration: 'none' }}>See all FAQs →</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((item) => (
                <details key={item.q} style={{ backgroundColor: '#09091a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', overflow: 'hidden' }}>
                  <summary style={{ padding: '1.25rem 1.5rem', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.95rem', color: '#eceaf5', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    {item.q}
                    <span style={{ color: '#7F77DD', flexShrink: 0, fontSize: '1.1rem' }}>+</span>
                  </summary>
                  <div style={{ padding: '0 1.5rem 1.25rem', fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.9rem', color: '#9d99b8', lineHeight: 1.75 }}>
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────── */}
        <section style={{ background: 'linear-gradient(135deg, #11112b 0%, #16163a 100%)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(127,119,221,0.08) 0%, transparent 70%)' }} />
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              Ready to build?
            </h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.05rem', color: '#9d99b8', lineHeight: 1.75, margin: '0 0 2.5rem' }}>
              Send us your idea. We will scope it, price it, and tell you exactly what ships in 10 days. No obligation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#09091a', backgroundColor: '#7F77DD', padding: '1rem 2.25rem', borderRadius: '8px', textDecoration: 'none' }}>
                Start Your Build →
              </Link>
              <Link href="/launch/pricing" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#eceaf5', border: '1px solid rgba(255,255,255,0.15)', padding: '1rem 2.25rem', borderRadius: '8px', textDecoration: 'none' }}>
                View Pricing
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

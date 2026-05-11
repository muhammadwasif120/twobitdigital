import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'Tech Stack for SaaS MVPs · Two Bit Digital',
  description: 'Why we build every SaaS MVP on Next.js, Supabase, Vercel, and TypeScript. A deliberate stack chosen for speed, ownership, and scalability.',
  keywords: ['next.js saas development', 'supabase mvp', 'next.js supabase saas', 'saas tech stack 2025', 'vercel saas deployment'],
  alternates: { canonical: 'https://www.twobitdigital.com/launch/tech-stack' },
  openGraph: {
    title: 'Tech Stack for SaaS MVPs · Two Bit Digital',
    description: 'The deliberate stack behind every Two Bit Digital MVP: Next.js, Supabase, Vercel, TypeScript, Tailwind.',
    url: 'https://www.twobitdigital.com/launch/tech-stack',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SaaS MVP Tech Stack — Two Bit Digital',
  url: 'https://www.twobitdigital.com/launch/tech-stack',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.twobitdigital.com' },
      { '@type': 'ListItem', position: 2, name: 'Launch', item: 'https://www.twobitdigital.com/launch' },
      { '@type': 'ListItem', position: 3, name: 'Tech Stack', item: 'https://www.twobitdigital.com/launch/tech-stack' },
    ],
  },
}

const stackItems = [
  {
    tech: 'Next.js 14',
    category: 'Framework',
    color: '#7F77DD',
    tagline: 'The standard for production SaaS in 2025.',
    detail: `Next.js 14 with the App Router gives you server-side rendering, static generation, server components, and file-based routing — all in one framework. The result is a fast, SEO-optimised application that any competent React developer can pick up immediately.

We use the App Router specifically because it enables React Server Components, which means less JavaScript shipped to the browser, faster initial page loads, and direct database access in server components without an intermediate API layer.

Every senior React developer hiring in 2025 knows Next.js. This means when you bring on your first engineer, they can read and extend the codebase from day one.`,
    tradeoffs: 'Next.js ties you to Vercel for the smoothest deployment experience — though it runs on any Node.js host. We consider this an acceptable trade-off given Vercel\'s reliability.',
    alternatives: 'Remix (also excellent, smaller ecosystem), Nuxt.js (Vue-based), SvelteKit (smaller talent pool).',
  },
  {
    tech: 'TypeScript',
    category: 'Language',
    color: '#7F77DD',
    tagline: 'Type safety catches bugs before they reach production.',
    detail: `JavaScript without types is acceptable for prototypes. For a production SaaS with paying users, it is irresponsible.

TypeScript catches entire categories of bugs at compile time — null pointer exceptions, wrong argument types, missing properties — that would otherwise become runtime errors in front of your users. At MVP stage, a runtime error in front of an investor or a paying customer is catastrophic.

TypeScript also makes the codebase self-documenting. When you hand the repository to your next engineer, they can understand what every function does, what every API returns, and what every component expects — without reading implementation code.`,
    tradeoffs: 'TypeScript requires a compilation step and adds some initial overhead when writing code. This is outweighed by the reduction in debugging time over any meaningful timescale.',
    alternatives: 'Plain JavaScript (not recommended for production SaaS).',
  },
  {
    tech: 'Supabase',
    category: 'Backend / Database',
    color: '#1D9E75',
    tagline: 'Postgres with auth, real-time, and row-level security built in.',
    detail: `Supabase is PostgreSQL — the world\'s most advanced open-source relational database — with auth, storage, real-time subscriptions, and a REST/GraphQL API built on top. It removes the need for a separate auth service, a separate file storage solution, and hand-rolled API endpoints for basic CRUD operations.

Row-Level Security (RLS) is the feature that matters most for a multi-user SaaS. RLS enforces data isolation at the database level — meaning one user cannot access another user\'s data even if there is a bug in your application code. We enable RLS from Day 1, not as an afterthought.

Supabase is open source. If you ever want to migrate off their hosted service, you can self-host the entire stack on your own infrastructure. No vendor lock-in at the data layer.`,
    tradeoffs: 'Supabase is not ideal for extremely write-heavy workloads (>10,000 writes/second) or pure document-store patterns. At MVP scale and beyond Series A, it is the right choice.',
    alternatives: 'Firebase (NoSQL, Google lock-in), PlanetScale (MySQL, no RLS), Neon (Postgres without the auth/storage layer).',
  },
  {
    tech: 'Vercel',
    category: 'Deployment',
    color: '#7F77DD',
    tagline: 'Zero-config deployments. 99.9% uptime. Edge network.',
    detail: `Vercel is the deployment platform built by the creators of Next.js. Every push to your GitHub repository triggers an automatic deployment. Every pull request gets a preview URL. The global edge network means your application loads fast for users anywhere in the world.

For an MVP, the operational value of Vercel is that you spend zero time on DevOps. No server configuration. No nginx. No certificate management. No auto-scaling configuration. All of that is handled automatically. You focus on product.

Vercel\'s free tier covers most MVPs comfortably. As you scale, pricing is predictable and scales linearly with usage.`,
    tradeoffs: 'Vercel is a managed platform — you are not managing your own servers. For regulated industries with specific data residency requirements, this requires evaluation. Most UK SaaS products are not affected.',
    alternatives: 'Railway (good for full-stack, lower operational ceiling), Render (similar), AWS/GCP/Azure (much higher operational overhead).',
  },
  {
    tech: 'Tailwind CSS',
    category: 'Styling',
    color: '#7F77DD',
    tagline: 'Utility-first CSS that any developer can read and extend.',
    detail: `Tailwind CSS is a utility-first CSS framework — you compose styles using small, single-purpose classes rather than writing custom CSS or using a component library.

The result is a codebase where styling lives directly in the component markup. Any developer can open a file and immediately understand what the component looks like — without hunting through separate CSS files or a design system documentation site.

Tailwind purges unused CSS in production, meaning the final CSS bundle is tiny regardless of how many utilities you use. This translates directly to faster page loads.

We do not use component libraries like Material UI, Chakra, or shadcn — these introduce an upstream dependency with its own opinionated patterns. Tailwind gives you complete control with no additional runtime.`,
    tradeoffs: 'Tailwind class names can become verbose for complex components. This is manageable with component extraction. The learning curve exists but is short.',
    alternatives: 'CSS Modules (verbose, no tree-shaking), styled-components (runtime overhead), shadcn/ui (acceptable — we use it selectively for complex components like date pickers).',
  },
  {
    tech: 'Stripe',
    category: 'Payments (if in scope)',
    color: '#1D9E75',
    tagline: 'The only production-grade payments option for a UK SaaS.',
    detail: `Stripe is the payment infrastructure standard for SaaS. It handles subscription billing, one-time payments, usage-based billing, invoicing, tax calculation, and webhook events. The developer experience is the best in class — the documentation is exceptional.

For a UK-registered SaaS targeting UK, US, or European customers, Stripe is the obvious choice. It supports Strong Customer Authentication (SCA/3DS2) out of the box, which is legally required for European card payments.

We configure Stripe webhooks in production from Day 1 — meaning subscription lifecycle events (cancellation, upgrade, payment failure) are handled reliably, not added as an afterthought when a customer complains.`,
    tradeoffs: 'Stripe charges 1.5% + 20p per transaction for UK cards (as of 2025). For very high transaction volumes, negotiated pricing applies. Not available in Pakistan — we use JazzCash/EasyPaisa for Tikkit X.',
    alternatives: 'Paddle (handles VAT/tax automatically, good for digital goods), Lemon Squeezy (similar to Paddle, simpler).',
  },
]

const principles = [
  { label: 'No lock-in', desc: 'Every piece of the stack is open source or has clear data export paths. You can migrate if you need to.' },
  { label: 'Hire-ability', desc: 'The stack uses technologies that any senior developer knows. No proprietary frameworks that create hiring dependency.' },
  { label: 'Speed to market', desc: 'The stack eliminates infrastructure decisions. No configuration days. Ship product, not config.' },
  { label: 'Production-grade defaults', desc: 'Auth, RLS, HTTPS, CDN, CI/CD — all configured correctly from day one. No "we\'ll sort security later."' },
  { label: 'Cost efficiency', desc: 'The Supabase free tier handles most MVPs. Vercel free tier handles traffic to ~100k page views/month. Infrastructure cost at MVP stage is near zero.' },
]

export default function TechStackPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>
        <div style={{ backgroundColor: '#09091a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Launch', href: '/launch' }, { label: 'Tech Stack' }]} />
          </div>
        </div>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)', padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="section-label">Engineering rationale</div>
            <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#eceaf5', margin: '0.75rem 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: '760px' }}>
              Every technology choice is deliberate.
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', color: '#9d99b8', lineHeight: 1.8, maxWidth: '640px', margin: 0 }}>
              We use the same stack for every MVP: Next.js 14, TypeScript, Supabase, and Vercel. Not because it is trendy. Because it is the correct choice for a founder who needs to ship, own, and scale a SaaS product.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section style={{ backgroundColor: '#0d0d22', padding: '4rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <div className="section-label">Design principles</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>How we evaluate technology.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {principles.map((p) => (
                <div key={p.label} style={{ backgroundColor: '#09091a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', color: '#7F77DD', marginBottom: '0.4rem' }}>{p.label}</div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: '#9d99b8', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack deep-dive */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Deep dive</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>
                The full rationale.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {stackItems.map((item) => (
                <div key={item.tech} style={{ backgroundColor: '#0d0d22', border: '1px solid rgba(255,255,255,0.07)', borderLeft: `3px solid ${item.color}`, borderRadius: '10px', padding: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5e5a7a', marginBottom: '0.25rem' }}>{item.category}</div>
                      <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '1.25rem', color: '#eceaf5', margin: '0 0 0.25rem', letterSpacing: '-0.02em' }}>{item.tech}</h3>
                      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: item.color, margin: 0 }}>{item.tagline}</p>
                    </div>
                  </div>
                  <div style={{ whiteSpace: 'pre-line', fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.8, marginBottom: '1.25rem' }}>{item.detail}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', marginBottom: '0.4rem' }}>Trade-offs</div>
                      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: '#5e5a7a', lineHeight: 1.7, margin: 0 }}>{item.tradeoffs}</p>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', marginBottom: '0.4rem' }}>Alternatives considered</div>
                      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: '#5e5a7a', lineHeight: 1.7, margin: 0 }}>{item.alternatives}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #11112b 0%, #16163a 100%)', padding: '5rem 0' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Ready to build on this stack?</h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.05rem', color: '#9d99b8', lineHeight: 1.75, margin: '0 0 2rem' }}>Book a scope session and we will tell you exactly what we can build for you in 10 days.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#09091a', backgroundColor: '#7F77DD', padding: '1rem 2.25rem', borderRadius: '8px', textDecoration: 'none' }}>
                Book a Scope Session →
              </Link>
              <Link href="/launch/what-ships" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: '#9d99b8', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', padding: '1rem 2rem', borderRadius: '8px' }}>
                See what ships
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

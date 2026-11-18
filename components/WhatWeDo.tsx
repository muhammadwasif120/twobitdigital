import Link from 'next/link'
import Image from 'next/image'
import SectionHead from '@/components/shared/SectionHead'
import Screenshot from '@/components/shared/Screenshot'

const gold = '#f5c518'

type Visual =
  | { kind: 'shot'; src: string; alt: string; badge: string }
  | { kind: 'collage'; a: { src: string; alt: string }; b: { src: string; alt: string } }

const offers: {
  kicker: string; title: string; line: string; body: string; points: string[]
  cta: { label: string; href: string }; visual: Visual
}[] = [
  {
    kicker: '01 · Run your business',
    title:  'Industry CRMs & ERPs',
    line:   'One system for orders, stock, money and people.',
    body:   'Ready-built systems for distribution, textile export, education, packaging, LPG, car rental and commodity trading. Replace spreadsheets and WhatsApp threads with one place where your team works and you see the numbers.',
    points: ['Try a working demo first', 'Tailored to your workflow', 'Role-based logins for your team'],
    cta:    { label: 'See the CRMs', href: '/crms' },
    visual: { kind: 'shot', src: '/screens/fmcg-crm.webp', alt: 'FMCG Distribution CRM dashboard', badge: '▶ See live demos' },
  },
  {
    kicker: '02 · Launch a product',
    title:  'SaaS Platforms & Apps',
    line:   'From idea to a product customers pay for.',
    body:   'Web and mobile products with logins, subscriptions, admin tools and dashboards. We run our own, including Tikkit X for event ticketing and StarkVault for renewal tracking, so we build yours the way we build ours.',
    points: ['Web + iOS/Android', 'Billing and user roles', 'Built to scale from day one'],
    cta:    { label: 'See our products', href: '/products' },
    visual: { kind: 'shot', src: '/screens/tikkit-x.webp', alt: 'Tikkit X event ticketing platform', badge: 'Our own product' },
  },
  {
    kicker: '03 · Get found and get sales',
    title:  'Websites, Stores & AI',
    line:   'Sites that rank, convert and are easy to update.',
    body:   'Fast, search-friendly websites and online stores for law firms, exporters, media and retail, plus AI tools that automate content, documents and customer replies.',
    points: ['SEO-safe migrations', 'Shopify and custom stores', 'AI assistants and automation'],
    cta:    { label: 'See sites we built', href: '/sites' },
    visual: { kind: 'collage', a: { src: '/screens/ykc-legal.webp', alt: 'YKC Legal website' }, b: { src: '/screens/eagle-vogue.webp', alt: 'Eagle Vogue online store' } },
  },
]

const frame = {
  position: 'absolute' as const, width: '68%', aspectRatio: '16 / 10', borderRadius: 10, overflow: 'hidden' as const,
  border: '1px solid rgba(255,255,255,0.14)', boxShadow: '0 14px 36px rgba(0,0,0,0.55)', backgroundColor: '#0d0d22',
}

function Visual({ v, href }: { v: Visual; href: string }) {
  if (v.kind === 'shot') {
    return <Screenshot src={v.src} alt={v.alt} sizes="(max-width: 900px) 92vw, 360px" href={href} badge={v.badge} />
  }
  return (
    <Link href={href} className="shot-link" aria-label="See the websites we have built" style={{ display: 'block', position: 'relative', aspectRatio: '16 / 10' }}>
      <div style={{ ...frame, top: 0, left: 0 }}>
        <Image src={v.a.src} alt={v.a.alt} fill sizes="260px" style={{ objectFit: 'cover', objectPosition: 'top' }} />
      </div>
      <div style={{ ...frame, bottom: 0, right: 0 }}>
        <Image src={v.b.src} alt={v.b.alt} fill sizes="260px" style={{ objectFit: 'cover', objectPosition: 'top' }} />
      </div>
    </Link>
  )
}

export default function WhatWeDo() {
  return (
    <section id="what-we-do" style={{
      background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(123,94,167,0.14), transparent 70%), #0d0d22',
      borderTop: '1px solid rgba(255,255,255,0.06)', padding: '6rem 0',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHead
          label="What We Do"
          title={<>We build the software <span style={{ color: gold }}>your business runs on.</span></>}
          sub="Three things, done properly. Pick the one that matches where you are today."
        />
        <div className="wwd-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {offers.map((o) => (
            <article key={o.title} style={{
              backgroundColor: '#11112b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px',
              padding: '1.5rem 1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.9rem', fontFamily: 'var(--font-inter)',
            }}>
              <Visual v={o.visual} href={o.cta.href} />
              <span style={{ fontSize: '0.75rem', color: gold, fontWeight: 600, letterSpacing: '0.04em', marginTop: '0.5rem' }}>{o.kicker}</span>
              <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#eceaf5', letterSpacing: '-0.01em' }}>{o.title}</h3>
              <p style={{ margin: 0, color: '#eceaf5', fontWeight: 600, fontSize: '1rem' }}>{o.line}</p>
              <p style={{ margin: 0, color: '#c4c1d8', fontSize: '0.95rem', lineHeight: 1.7 }}>{o.body}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '0.4rem' }}>
                {o.points.map((p) => (
                  <li key={p} style={{ color: '#c4c1d8', fontSize: '0.9rem' }}><span style={{ color: gold }}>✓</span> {p}</li>
                ))}
              </ul>
              <Link href={o.cta.href} style={{ marginTop: 'auto', paddingTop: '0.75rem', color: gold, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
                {o.cta.label} →
              </Link>
            </article>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 900px){ .wwd-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

import type { Metadata } from 'next'
import Link        from 'next/link'
import Nav         from '@/components/Nav'
import Footer      from '@/components/Footer'
import Breadcrumb  from '@/components/shared/Breadcrumb'
import { crms, sites } from '@/lib/portfolio'
import { whatsappHref } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title:       'Our Work | CRMs, Products & Websites — Two Bit Digital',
  description: 'Everything Two Bit Digital has built: industry CRMs and ERPs, SaaS products like Tikkit X and StarkVault, and websites and online stores.',
  alternates:  { canonical: 'https://www.twobitdigital.com/work' },
}

const gold = '#f5c518'

export default function WorkPage() {
  const tiles = [
    { n: crms.length,  title: 'Industry CRMs & ERPs', body: 'Distribution, textile export, education, packaging, LPG, car rental and commodity trading.', href: '/crms',     cta: 'Browse CRMs' },
    { n: 4,            title: 'SaaS Products',         body: 'Tikkit X, StarkVault, Trade OS and Averon Legal Systems, built and run by us.',             href: '/products', cta: 'See products' },
    { n: sites.length, title: 'Websites & Stores',     body: 'Law firms, exporters, media houses, retailers and tourism boards.',                          href: '/sites',    cta: 'See sites' },
  ]
  const wa = whatsappHref("Hi Two Bit Digital, I'd like to discuss a project.")
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh', paddingTop: '68px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 5rem', fontFamily: 'var(--font-inter)' }}>
          <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Work' }]} />
          <h1 style={{ fontWeight: 800, fontSize: 'clamp(2rem,4.5vw,3rem)', color: '#eceaf5', margin: '1.5rem 0 1rem', letterSpacing: '-0.02em' }}>
            What we&apos;ve built. <span style={{ color: gold }}>Real systems, running today.</span>
          </h1>
          <p style={{ color: '#c4c1d8', maxWidth: '640px', lineHeight: 1.75, margin: '0 0 3rem', fontSize: '1.05rem' }}>
            No mock-ups. Each of these is a working product or a live site. Open one and click around.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.25rem' }}>
            {tiles.map((t) => (
              <Link key={t.title} href={t.href} style={{ backgroundColor: '#11112b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '2rem', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: gold, lineHeight: 1 }}>{t.n}</span>
                <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#eceaf5' }}>{t.title}</h2>
                <p style={{ margin: 0, color: '#c4c1d8', lineHeight: 1.65, fontSize: '0.95rem' }}>{t.body}</p>
                <span style={{ marginTop: 'auto', paddingTop: '0.75rem', color: gold, fontWeight: 700 }}>{t.cta} →</span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '3rem' }}>
            <a href={wa} {...(wa.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
               style={{ backgroundColor: gold, color: '#09091a', fontWeight: 700, padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>
              Discuss your project on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from 'next'
import Nav        from '@/components/Nav'
import Footer     from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import { sites }  from '@/lib/portfolio'
import { whatsappHref } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title:       'Websites & E-commerce We\'ve Built — Two Bit Digital',
  description: 'Fast, SEO-safe, CMS-backed websites and online stores for law firms, exporters, media houses, agencies and retailers.',
  alternates:  { canonical: 'https://www.twobitdigital.com/sites' },
}

const gold = '#f5c518'

export default function SitesPage() {
  const href = whatsappHref("Hi Two Bit Digital, I'd like a quote for a website.")
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh', paddingTop: '68px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
          <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Sites' }]} />
          <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2rem,4.5vw,3rem)', color: '#eceaf5', margin: '1.5rem 0 1rem', letterSpacing: '-0.02em' }}>
            Websites &amp; stores <span style={{ color: gold }}>that ship.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-inter)', color: '#9d99b8', maxWidth: '640px', lineHeight: 1.75, margin: '0 0 3rem' }}>
            A selection of sites we&apos;ve built across law, export, media, retail and tourism.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1.25rem' }}>
            {sites.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                 style={{ backgroundColor: '#11112b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.5rem', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'var(--font-inter)' }}>
                <span style={{ fontSize: '0.72rem', color: gold }}>{s.sector}</span>
                <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#eceaf5' }}>{s.name}</h2>
                <p style={{ margin: 0, color: '#9d99b8', fontSize: '0.92rem', lineHeight: 1.6 }}>{s.desc}</p>
                <span style={{ marginTop: 'auto', color: gold, fontWeight: 600, fontSize: '0.88rem' }}>Visit site →</span>
              </a>
            ))}
          </div>
          <div style={{ marginTop: '3rem' }}>
            <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
               style={{ backgroundColor: gold, color: '#09091a', fontWeight: 700, padding: '0.7rem 1.3rem', borderRadius: '8px', textDecoration: 'none', fontFamily: 'var(--font-inter)' }}>
              Get a quote on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

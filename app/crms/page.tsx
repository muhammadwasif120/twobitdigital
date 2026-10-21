import type { Metadata } from 'next'
import Nav        from '@/components/Nav'
import Footer     from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import { crms }   from '@/lib/portfolio'
import { whatsappHref } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title:       'Industry CRMs & ERPs | Request a Demo',
  description: 'Ready-built CRMs and ERPs for distribution, textile export, education, packaging, LPG, car rental, commodity trading and more. Request a demo on WhatsApp.',
  alternates:  { canonical: 'https://www.twobitdigital.com/crms' },
}

const gold = '#f5c518'

export default function CrmsPage() {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh', paddingTop: '68px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
          <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'CRMs' }]} />
          <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2rem,4.5vw,3rem)', color: '#eceaf5', margin: '1.5rem 0 1rem', letterSpacing: '-0.02em' }}>
            Industry CRMs &amp; ERPs. <span style={{ color: gold }}>Already built.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-inter)', color: '#9d99b8', maxWidth: '640px', lineHeight: 1.75, margin: '0 0 3rem' }}>
            Pick the system closest to your business. We customise it and take it live. Request a demo and we&apos;ll walk you through it on WhatsApp.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.25rem' }}>
            {crms.map((c) => {
              const href = whatsappHref(`Hi Two Bit Digital, I'd like a demo of the ${c.name} (${c.industry}).`)
              const external = href.startsWith('http')
              return (
                <article key={c.name} style={{ backgroundColor: '#11112b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-inter)' }}>
                  <span style={{ alignSelf: 'flex-start', fontSize: '0.72rem', color: gold, border: `1px solid ${gold}55`, padding: '2px 10px', borderRadius: '999px' }}>{c.industry}</span>
                  <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#eceaf5' }}>{c.name}</h2>
                  <p style={{ margin: 0, color: gold, fontWeight: 600, fontSize: '0.92rem' }}>{c.tagline}</p>
                  <p style={{ margin: 0, color: '#9d99b8', fontSize: '0.92rem', lineHeight: 1.65 }}>{c.desc}</p>
                  <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', listStyle: 'none', padding: 0, margin: 0 }}>
                    {c.features.map((f) => (
                      <li key={f} style={{ fontSize: '0.72rem', color: '#9d99b8', border: '1px solid rgba(255,255,255,0.1)', padding: '1px 8px', borderRadius: '6px' }}>{f}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: 'auto', paddingTop: '0.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                       style={{ backgroundColor: gold, color: '#09091a', fontWeight: 700, fontSize: '0.88rem', padding: '0.55rem 1rem', borderRadius: '8px', textDecoration: 'none' }}>
                      Request a demo
                    </a>
                    {c.demo && (
                      <a href={c.demo} target="_blank" rel="noopener noreferrer"
                         style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#eceaf5', fontSize: '0.88rem', padding: '0.55rem 1rem', borderRadius: '8px', textDecoration: 'none' }}>
                        Live preview
                      </a>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

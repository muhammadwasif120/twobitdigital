import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import CTABanner from '@/components/shared/CTABanner'
import UrlShortenerTool from './UrlShortenerTool'

export const metadata: Metadata = {
  title: 'Free URL Shortener — Shorten Any Link Instantly',
  description:
    'Free URL shortener by Two Bit Digital. Create short, branded links instantly — no account required. Short links hosted on twobitdigital.com.',
  alternates: { canonical: 'https://twobitdigital.com/tools/url-shortener' },
  openGraph: {
    title: 'Free URL Shortener by Two Bit Digital',
    description: 'Shorten any URL instantly. No sign-up. Hosted on twobitdigital.com.',
    url: 'https://twobitdigital.com/tools/url-shortener',
    type: 'website',
  },
}

export default function UrlShortenerPage() {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>

        {/* ── Compact header ── */}
        <section style={{
          paddingTop:    '6rem',
          paddingBottom: '1.5rem',
          borderBottom:  '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem' }}>
            <Breadcrumb crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Free Tools', href: '/tools' },
              { label: 'URL Shortener' },
            ]} />
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
              <h1 style={{
                fontFamily: 'var(--font-inter)', fontWeight: 800,
                fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', lineHeight: 1.1,
                color: '#eceaf5', margin: 0, letterSpacing: '-0.03em',
              }}>
                URL Shortener
              </h1>
              <span style={{
                fontFamily: 'var(--font-inter)', fontWeight: 600,
                fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase',
                color: '#09091a', backgroundColor: '#22c55e',
                padding: '0.2rem 0.6rem', borderRadius: '999px', whiteSpace: 'nowrap',
              }}>
                Free · No sign-up
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-inter)', fontWeight: 300,
              fontSize: '0.95rem', color: '#9d99b8',
              lineHeight: 1.7, margin: '0.5rem 0 0',
            }}>
              Paste any URL and get a clean short link at twobitdigital.com/s/…
            </p>
          </div>
        </section>

        {/* ── Tool ── */}
        <section style={{ backgroundColor: '#09091a', padding: '2.5rem 0 4rem' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem' }}>
            <UrlShortenerTool />
          </div>
        </section>

        {/* ── How it works ── */}
        <section style={{
          backgroundColor: '#0d0d22',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '4rem 0',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-inter)', fontWeight: 700,
              fontSize: '1.4rem', color: '#eceaf5', marginBottom: '2rem',
              letterSpacing: '-0.02em', textAlign: 'center',
            }}>
              How it works
            </h2>
            <style>{`
              .steps-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 1.25rem;
              }
              @media (min-width: 640px) {
                .steps-grid { grid-template-columns: repeat(3, 1fr); }
              }
            `}</style>
            <div className="steps-grid">
              {[
                { n: '01', title: 'Paste your URL',  body: 'Drop any long link — a product page, article, or event invite — into the box.' },
                { n: '02', title: 'Get a short link', body: 'We generate a unique code and return a clean twobitdigital.com/s/… link instantly.' },
                { n: '03', title: 'Share anywhere',   body: 'Copy and paste it into emails, messages, social posts, or printed materials.' },
              ].map((s) => (
                <div key={s.n} style={{
                  background: '#11112b', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px', padding: '1.5rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 800,
                    fontSize: '1.75rem', color: 'rgba(245,197,24,0.15)',
                    lineHeight: 1, marginBottom: '0.6rem',
                  }}>
                    {s.n}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.95rem', color: '#eceaf5', margin: '0 0 0.4rem' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: '#9d99b8', lineHeight: 1.7, margin: 0 }}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          heading="Need a full link management platform?"
          subtext="We build custom software for businesses — analytics dashboards, branded short-link platforms, and more."
          ctaLabel="Start a Conversation"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}

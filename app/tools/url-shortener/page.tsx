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

        {/* ── Hero ── */}
        <section style={{
          background:    'linear-gradient(180deg, #09091a 0%, #0d0d22 100%)',
          paddingTop:    '9rem',
          paddingBottom: '5rem',
          borderBottom:  '1px solid rgba(255,255,255,0.06)',
          position:      'relative',
          overflow:      'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-120px', left: '50%',
            transform: 'translateX(-50%)', width: '800px', height: '500px',
            borderRadius: '50%', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(245,197,24,0.05) 0%, transparent 65%)',
          }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            <Breadcrumb crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Free Tools', href: '/tools' },
              { label: 'URL Shortener' },
            ]} />
            <div style={{ maxWidth: '780px', marginTop: '1.5rem' }}>
              <div className="section-label">Free Tool</div>
              <h1 style={{
                fontFamily: 'var(--font-inter)', fontWeight: 800,
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1,
                color: '#eceaf5', margin: '0.75rem 0 1.25rem', letterSpacing: '-0.03em',
              }}>
                URL Shortener
              </h1>
              <p style={{
                fontFamily: 'var(--font-inter)', fontWeight: 300,
                fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#9d99b8',
                lineHeight: 1.8, margin: 0, maxWidth: '600px',
              }}>
                Paste any long URL and get a clean short link — hosted on twobitdigital.com.
                Free forever, no account needed.
              </p>
            </div>
          </div>
        </section>

        {/* ── Tool ── */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0' }}>
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
              fontSize: '1.5rem', color: '#eceaf5', marginBottom: '2.5rem',
              letterSpacing: '-0.02em', textAlign: 'center',
            }}>
              How it works
            </h2>
            <style>{`
              .steps-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 1.5rem;
              }
              @media (min-width: 640px) {
                .steps-grid { grid-template-columns: repeat(3, 1fr); }
              }
            `}</style>
            <div className="steps-grid">
              {[
                { n: '01', title: 'Paste your URL',   body: 'Drop any long link — a product page, article, event invite — into the box above.' },
                { n: '02', title: 'Get a short link',  body: 'We generate a unique short code and return a clean twobitdigital.com/s/... link instantly.' },
                { n: '03', title: 'Share anywhere',    body: 'Copy and paste it into emails, messages, social posts, or printed materials.' },
              ].map((s) => (
                <div key={s.n} style={{
                  background: '#11112b', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px', padding: '1.75rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 800,
                    fontSize: '2rem', color: 'rgba(245,197,24,0.15)',
                    lineHeight: 1, marginBottom: '0.75rem',
                  }}>
                    {s.n}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 700,
                    fontSize: '1rem', color: '#eceaf5', margin: '0 0 0.5rem',
                  }}>
                    {s.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 300,
                    fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.7, margin: 0,
                  }}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          heading="Need a full link management platform?"
          subtext="We build custom software for businesses — including analytics dashboards, branded short-link platforms, and more. Talk to us about your brief."
          ctaLabel="Start a Conversation"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}

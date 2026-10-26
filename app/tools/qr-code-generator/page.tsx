import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import CTABanner from '@/components/shared/CTABanner'
import QrCodeTool from './QrCodeTool'

export const metadata: Metadata = {
  title: 'Free QR Code Generator — Instant Download, No Sign-Up',
  description:
    'Generate a QR code for any URL or text in seconds. Download as PNG, ready to print or share. Free tool by Two Bit Digital.',
  alternates: { canonical: 'https://twobitdigital.com/tools/qr-code-generator' },
  openGraph: {
    title: 'Free QR Code Generator by Two Bit Digital',
    description: 'Create QR codes instantly. Download as PNG. No account required.',
    url: 'https://twobitdigital.com/tools/qr-code-generator',
    type: 'website',
  },
}

export default function QrCodeGeneratorPage() {
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
              { label: 'QR Code Generator' },
            ]} />
            <div style={{ maxWidth: '780px', marginTop: '1.5rem' }}>
              <div className="section-label">Free Tool</div>
              <h1 style={{
                fontFamily: 'var(--font-inter)', fontWeight: 800,
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1,
                color: '#eceaf5', margin: '0.75rem 0 1.25rem', letterSpacing: '-0.03em',
              }}>
                QR Code Generator
              </h1>
              <p style={{
                fontFamily: 'var(--font-inter)', fontWeight: 300,
                fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#9d99b8',
                lineHeight: 1.8, margin: 0, maxWidth: '600px',
              }}>
                Enter any URL or text and get a high-resolution QR code instantly.
                Download as PNG — ready to print on flyers, business cards, or signage.
              </p>
            </div>
          </div>
        </section>

        {/* ── Tool ── */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
            <QrCodeTool />
          </div>
        </section>

        {/* ── Use cases ── */}
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
              What to use QR codes for
            </h2>
            <style>{`
              .use-cases-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
              }
              @media (min-width: 768px) {
                .use-cases-grid { grid-template-columns: repeat(4, 1fr); }
              }
            `}</style>
            <div className="use-cases-grid">
              {[
                { icon: '🎟️', label: 'Event tickets',       body: 'Link attendees to booking pages or digital tickets.' },
                { icon: '📇', label: 'Business cards',      body: 'Point to your website, LinkedIn, or contact page.' },
                { icon: '📋', label: 'Menus & catalogues',  body: 'Replace printed menus with a live digital version.' },
                { icon: '📣', label: 'Marketing materials', body: 'Drive traffic from posters, flyers, and packaging.' },
              ].map((u) => (
                <div key={u.label} style={{
                  background: '#11112b', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px', padding: '1.5rem',
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{u.icon}</div>
                  <h3 style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 700,
                    fontSize: '0.9rem', color: '#eceaf5', margin: '0 0 0.4rem',
                  }}>
                    {u.label}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 300,
                    fontSize: '0.8rem', color: '#9d99b8', lineHeight: 1.6, margin: 0,
                  }}>
                    {u.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          heading="Need QR ticketing for your event?"
          subtext="Tikkit X — our event management platform — features offline-capable HMAC QR verification and supports thousands of scans per minute. Built for Pakistan and beyond."
          ctaLabel="Learn About Tikkit X"
          ctaHref="https://tikkitx.com"
        />
      </main>
      <Footer />
    </>
  )
}

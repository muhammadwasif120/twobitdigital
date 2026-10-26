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

        {/* ── Compact header ── */}
        <section style={{
          paddingTop:   '6rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
            <Breadcrumb crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Free Tools', href: '/tools' },
              { label: 'QR Code Generator' },
            ]} />
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
              <h1 style={{
                fontFamily: 'var(--font-inter)', fontWeight: 800,
                fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', lineHeight: 1.1,
                color: '#eceaf5', margin: 0, letterSpacing: '-0.03em',
              }}>
                QR Code Generator
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
              Enter any URL or text — get a high-res QR code ready to download and print.
            </p>
          </div>
        </section>

        {/* ── Tool ── */}
        <section style={{ backgroundColor: '#09091a', padding: '2.5rem 0 4rem' }}>
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
              fontSize: '1.4rem', color: '#eceaf5', marginBottom: '2rem',
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
                  borderRadius: '12px', padding: '1.4rem',
                }}>
                  <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{u.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', color: '#eceaf5', margin: '0 0 0.35rem' }}>
                    {u.label}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.8rem', color: '#9d99b8', lineHeight: 1.6, margin: 0 }}>
                    {u.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          heading="Need QR ticketing for your event?"
          subtext="Tikkit X — our event management platform — features offline-capable HMAC QR verification built for high-volume events."
          ctaLabel="Learn About Tikkit X"
          ctaHref="https://tikkitx.com"
        />
      </main>
      <Footer />
    </>
  )
}

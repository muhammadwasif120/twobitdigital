import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import CTABanner from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title: 'Free Tools — URL Shortener, QR Code, PDF Editor & More',
  description:
    'Free online tools by Two Bit Digital. Shorten URLs, generate QR codes, convert Excel to PDF, edit PDFs and more — no sign-up required.',
  alternates: { canonical: 'https://twobitdigital.com/tools' },
  openGraph: {
    title: 'Free Tools by Two Bit Digital',
    description: 'URL shortener, QR code generator and more — free, no sign-up.',
    url: 'https://twobitdigital.com/tools',
    type: 'website',
  },
}

const tools = [
  {
    href:        '/tools/url-shortener',
    icon:        '🔗',
    label:       'URL Shortener',
    desc:        'Turn any long URL into a clean, shareable short link hosted on twobitdigital.com. No account needed.',
    badge:       'Free',
    badgeColor:  '#22c55e',
  },
  {
    href:        '/tools/qr-code-generator',
    icon:        '▦',
    label:       'QR Code Generator',
    desc:        'Generate a QR code for any URL or text instantly. Download as PNG — ready to print or share.',
    badge:       'Free',
    badgeColor:  '#22c55e',
  },
  {
    href:        '/tools/excel-to-pdf',
    icon:        '📊',
    label:       'Excel to PDF',
    desc:        'Upload an Excel spreadsheet and download a formatted PDF in seconds. No data leaves your browser.',
    badge:       'Free',
    badgeColor:  '#22c55e',
  },
  {
    href:        '/tools/pdf-to-excel',
    icon:        '📄',
    label:       'PDF to Excel',
    desc:        'Extract text content from any PDF into an Excel file, one sheet per page. Fully client-side.',
    badge:       'Free',
    badgeColor:  '#22c55e',
  },
  {
    href:        '/tools/pdf-editor',
    icon:        '📑',
    label:       'PDF Editor',
    desc:        'Add text annotations and rotate pages in your PDF, then download. Nothing stored on our servers.',
    badge:       'Free',
    badgeColor:  '#22c55e',
  },
]

export default function ToolsPage() {
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
            position:      'absolute', top: '-120px', left: '50%',
            transform:     'translateX(-50%)',
            width:         '800px', height: '500px',
            borderRadius:  '50%', pointerEvents: 'none',
            background:    'radial-gradient(circle, rgba(245,197,24,0.05) 0%, transparent 65%)',
          }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Free Tools' }]} />
            <div style={{ maxWidth: '780px', marginTop: '1.5rem' }}>
              <div className="section-label">Free Tools</div>
              <h1 style={{
                fontFamily: 'var(--font-inter)', fontWeight: 800,
                fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', lineHeight: 1.08,
                color: '#eceaf5', margin: '0.75rem 0 1.5rem', letterSpacing: '-0.03em',
              }}>
                Tools. Free. No Sign-Up.
              </h1>
              <p style={{
                fontFamily: 'var(--font-inter)', fontWeight: 300,
                fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#9d99b8',
                lineHeight: 1.8, margin: 0, maxWidth: '640px',
              }}>
                Useful utilities built by Two Bit Digital — the software engineering studio behind
                Tikkit X and Averon Legal Systems. Free forever, no account required.
              </p>
            </div>
          </div>
        </section>

        {/* ── Tools Grid ── */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <style>{`
              .tools-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 1.5rem;
              }
              @media (min-width: 640px) {
                .tools-grid { grid-template-columns: 1fr 1fr; }
              }
              @media (min-width: 1024px) {
                .tools-grid { grid-template-columns: repeat(3, 1fr); }
              }
              .tool-card {
                background: #11112b;
                border: 1px solid rgba(255,255,255,0.06);
                border-radius: 12px;
                padding: 2rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                text-decoration: none;
                transition: border-color 0.25s ease, transform 0.25s ease;
              }
              .tool-card:hover {
                border-color: #f5c518;
                transform: translateY(-4px);
              }
            `}</style>

            <div className="tools-grid">
              {tools.map((t) => (
                <Link key={t.href} href={t.href} className="tool-card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '2rem', lineHeight: 1 }}>{t.icon}</span>
                    <span style={{
                      fontFamily: 'var(--font-inter)', fontWeight: 700,
                      fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase',
                      color: '#09091a', backgroundColor: t.badgeColor,
                      padding: '0.2rem 0.6rem', borderRadius: '999px',
                    }}>
                      {t.badge}
                    </span>
                  </div>
                  <h2 style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 700,
                    fontSize: '1.25rem', color: '#eceaf5', margin: 0, letterSpacing: '-0.02em',
                  }}>
                    {t.label}
                  </h2>
                  <p style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 300,
                    fontSize: '0.9rem', color: '#9d99b8', lineHeight: 1.7, margin: 0, flexGrow: 1,
                  }}>
                    {t.desc}
                  </p>
                  <div style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 600,
                    fontSize: '0.85rem', color: '#f5c518',
                  }}>
                    Use Tool →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          heading="Need something custom built?"
          subtext="These tools are tiny examples of what we do. If you need a full product — SaaS, CRM, or AI-powered platform — we build those too."
          ctaLabel="Talk to Us"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from 'next'
import Nav        from '@/components/Nav'
import Footer     from '@/components/Footer'
import CTABanner  from '@/components/shared/CTABanner'
import Breadcrumb from '@/components/shared/Breadcrumb'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Two Bit Digital | UK SaaS & AI Engineering Studio',
  description:
    'Two Bit Digital Ltd (Co. #14710072) is a UK-registered SaaS development and AI engineering studio founded by Muhammad Wasif. Engineering-led, compliance-first, operating across the UK, US, Australia, and Pakistan. UN Vendor #1177996 · D&B D-U-N-S 77-532-7428.',
  alternates: {
    canonical: 'https://twobitdigital.com/about',
  },
  openGraph: {
    title: 'About Two Bit Digital | UK SaaS & AI Engineering Studio',
    description:
      'Founded by Muhammad Wasif — an engineering-led studio building mission-critical SaaS platforms and AI systems for regulated industries across four global markets.',
    url: 'https://twobitdigital.com/about',
    type: 'profile',
  },
  twitter: {
    title: 'About Two Bit Digital | UK SaaS & AI Engineering Studio',
    description:
      'Founded by Muhammad Wasif — engineering-led, compliance-first, operating across UK, US, Australia and Pakistan.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type':       'AboutPage',
      '@id':         'https://twobitdigital.com/about',
      url:           'https://twobitdigital.com/about',
      name:          'About Two Bit Digital',
      description:   'Two Bit Digital is a UK-registered SaaS development and AI engineering studio founded by Muhammad Wasif. Engineering-led, compliance-first, operating across UK, US, Australia and Pakistan.',
      inLanguage:    'en-GB',
      isPartOf:      { '@id': 'https://twobitdigital.com' },
      about: {
        '@type':  'Organization',
        '@id':    'https://twobitdigital.com/#organization',
        name:     'Two Bit Digital Ltd',
        url:      'https://twobitdigital.com',
        foundingDate: '2022',
        legalName: 'Two Bit Digital Ltd',
        identifier: [
          { '@type': 'PropertyValue', name: 'Companies House', value: '14710072' },
          { '@type': 'PropertyValue', name: 'DUNS',            value: '77-532-7428' },
          { '@type': 'PropertyValue', name: 'SECP CUIN',       value: '0250598' },
          { '@type': 'PropertyValue', name: 'UN Vendor',       value: '1177996' },
        ],
        areaServed: ['GB', 'US', 'AU', 'PK'],
        founder: { '@id': 'https://twobitdigital.com/about#founder' },
      },
    },
    {
      '@type':     'Person',
      '@id':       'https://twobitdigital.com/about#founder',
      name:        'Muhammad Wasif',
      jobTitle:    'Founder & CEO',
      worksFor:    { '@id': 'https://twobitdigital.com/#organization' },
      url:         'https://twobitdigital.com/about',
      sameAs:      ['https://www.linkedin.com/in/muhammadwasiftbd/'],
      knowsAbout:  ['SaaS Architecture', 'AI Engineering', 'RegTech', 'Government Digital Services', 'Zero-knowledge Security'],
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section style={{
          background:    'linear-gradient(180deg, #09091a 0%, #0d0d22 100%)',
          paddingTop:    '9rem',
          paddingBottom: '5rem',
          borderBottom:  '1px solid rgba(255,255,255,0.06)',
          position:      'relative',
          overflow:      'hidden',
        }}>
          {/* Ambient glow */}
          <div style={{
            position:     'absolute',
            top:          '-120px',
            left:         '50%',
            transform:    'translateX(-50%)',
            width:        '800px',
            height:       '500px',
            borderRadius: '50%',
            pointerEvents:'none',
            background:   'radial-gradient(circle, rgba(245,197,24,0.055) 0%, transparent 65%)',
          }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

            <div style={{ maxWidth: '780px', marginTop: '1.5rem' }}>
              <div className="section-label">Who We Are</div>
              <h1 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(2.4rem, 5.5vw, 4rem)',
                lineHeight:    1.08,
                color:         '#eceaf5',
                margin:        '0.75rem 0 1.5rem',
                letterSpacing: '-0.03em',
              }}>
                The Studio Behind{' '}
                <span style={{ color: '#f5c518' }}>the Systems.</span>
              </h1>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize:   'clamp(1rem, 2vw, 1.2rem)',
                color:      '#9d99b8',
                lineHeight: 1.8,
                margin:     0,
                maxWidth:   '640px',
              }}>
                Two Bit Digital is an engineering-led studio built on the conviction that software for
                regulated industries deserves the same rigour, foresight, and architectural integrity
                that world-class technology companies apply to their own platforms. We design, build, and
                operate systems that hold — in production, under audit, and across borders.
              </p>
            </div>
          </div>
        </section>

        {/* ── All animated/interactive sections ────────────────────── */}
        <AboutContent />

        {/* ── CTA Banner ────────────────────────────────────────────── */}
        <CTABanner
          heading="Work with a studio that ships."
          subtext="We take on a selective number of new client engagements each quarter. If you have a serious brief, we want to hear it."
          ctaLabel="Start a Conversation"
          ctaHref="/contact"
        />

      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from 'next'
import Nav        from '@/components/Nav'
import Footer     from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import CTABanner  from '@/components/shared/CTABanner'
import Contact    from '@/components/Contact'
import ContactDetails from './ContactDetails'

export const metadata: Metadata = {
  title: 'Contact Two Bit Digital | Start a Project',
  description:
    'Get in touch with Two Bit Digital — a UK-registered SaaS and AI engineering studio. Send a project brief, enquire about services, or connect directly with our team. We respond within one business day.',
  alternates: {
    canonical: 'https://twobitdigital.com/contact',
  },
  openGraph: {
    title: 'Contact Two Bit Digital | Start a Project',
    description:
      'Send a brief to Two Bit Digital — engineering-led SaaS and AI studio serving clients across the UK, US, Australia and Pakistan. Priority response within one business day.',
    url: 'https://twobitdigital.com/contact',
    type: 'website',
  },
  twitter: {
    title: 'Contact Two Bit Digital | Start a Project',
    description:
      'Reach Two Bit Digital for SaaS builds, AI integration, or compliance-critical digital systems. Response within one business day.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type':    'ContactPage',
  '@id':      'https://twobitdigital.com/contact',
  url:        'https://twobitdigital.com/contact',
  name:       'Contact Two Bit Digital',
  description:'Dedicated contact page for Two Bit Digital Ltd — send a project brief or reach our team directly.',
  inLanguage: 'en-GB',
  isPartOf:   { '@id': 'https://twobitdigital.com' },
  mainEntity: {
    '@type':       'Organization',
    '@id':         'https://twobitdigital.com/#organization',
    name:          'Two Bit Digital Ltd',
    url:           'https://twobitdigital.com',
    contactPoint: [
      {
        '@type':           'ContactPoint',
        email:             'sales@twobitdigital.com',
        contactType:       'sales',
        availableLanguage: 'English',
        areaServed:        ['GB', 'US', 'AU', 'PK'],
      },
      {
        '@type':           'ContactPoint',
        email:             'mwasif@twobitdigital.com',
        contactType:       'customer support',
        availableLanguage: 'English',
        areaServed:        ['GB', 'US', 'AU', 'PK'],
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/twobitdigital',
      'https://find-and-update.company-information.service.gov.uk/company/14710072',
    ],
  },
}

export default function ContactPage() {
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
          paddingBottom: '4rem',
          borderBottom:  '1px solid rgba(255,255,255,0.06)',
          position:      'relative',
          overflow:      'hidden',
        }}>
          {/* Ambient glow */}
          <div style={{
            position:     'absolute',
            top:          '-100px',
            left:         '50%',
            transform:    'translateX(-50%)',
            width:        '700px',
            height:       '420px',
            borderRadius: '50%',
            pointerEvents:'none',
            background:   'radial-gradient(circle, rgba(245,197,24,0.05) 0%, transparent 65%)',
          }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

            <div style={{ maxWidth: '700px', marginTop: '1.5rem', textAlign: 'left' }}>
              <div className="section-label">Get In Touch</div>
              <h1 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(2.4rem, 5.5vw, 4rem)',
                lineHeight:    1.08,
                color:         '#eceaf5',
                margin:        '0.75rem 0 1.5rem',
                letterSpacing: '-0.03em',
              }}>
                Let&apos;s Build{' '}
                <span style={{ color: '#f5c518' }}>Together.</span>
              </h1>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize:   'clamp(1rem, 2vw, 1.2rem)',
                color:      '#9d99b8',
                lineHeight: 1.8,
                margin:     0,
                maxWidth:   '580px',
              }}>
                Whether you&apos;re a startup with a product idea, an enterprise with a hard technical problem,
                or a government body looking for a credentialed digital partner — bring us your brief.
                We&apos;ll bring the architecture, the rigour, and the delivery track record.
              </p>
            </div>

            {/* Response promise pill */}
            <div style={{
              display:         'inline-flex',
              alignItems:      'center',
              gap:             '0.5rem',
              marginTop:       '2rem',
              backgroundColor: 'rgba(245,197,24,0.08)',
              border:          '1px solid rgba(245,197,24,0.2)',
              borderRadius:    '999px',
              padding:         '0.5rem 1.1rem',
            }}>
              <span style={{
                width:           '7px',
                height:          '7px',
                borderRadius:    '50%',
                backgroundColor: '#f5c518',
                flexShrink:      0,
                display:         'inline-block',
              }} />
              <span style={{
                fontFamily:  'var(--font-inter)',
                fontWeight:  500,
                fontSize:    '0.8rem',
                color:       '#f5c518',
                letterSpacing:'0.02em',
              }}>
                Priority response within one business day
              </span>
            </div>
          </div>
        </section>

        {/* ── Contact Form (reused component) ───────────────────────── */}
        {/*
          The Contact component renders its own section wrapper with id="contact".
          We render it here and suppress the section's top padding since the hero
          provides the visual context.
        */}
        <Contact />

        {/* ── Contact Details + Global Offices ─────────────────────── */}
        <ContactDetails />

        {/* ── CTA Banner ─────────────────────────────────────────────── */}
        <CTABanner
          heading="Not ready to commit? Start a conversation."
          subtext="Even a 15-minute call can clarify scope, timeline, and whether we are the right fit for your project."
          ctaLabel="Send a Brief"
          ctaHref="#contact"
        />

      </main>

      <Footer />
    </>
  )
}

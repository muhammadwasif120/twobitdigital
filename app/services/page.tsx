import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import CTABanner from '@/components/shared/CTABanner'
import { services } from '@/lib/services'
import ServiceCards from './ServiceCards'

export const metadata: Metadata = {
  title: 'Digital Development Services | SaaS, AI & Government Technology — Two Bit Digital',
  description:
    'End-to-end digital engineering services spanning AI integration, SaaS platform development, web applications, compliance & RegTech, government digital, and cloud infrastructure.',
  alternates: {
    canonical: 'https://www.twobitdigital.com/services',
  },
  openGraph: {
    title: 'Digital Development Services | SaaS, AI & Government Technology — Two Bit Digital',
    description:
      'End-to-end digital engineering services spanning AI integration, SaaS platforms, web apps, compliance & RegTech, government digital, and cloud infrastructure.',
    url: 'https://www.twobitdigital.com/services',
    type: 'website',
  },
  twitter: {
    title: 'Digital Development Services | Two Bit Digital',
    description:
      'End-to-end digital engineering: AI, SaaS, web apps, RegTech, government digital, and cloud infrastructure.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Two Bit Digital Services',
  description: 'End-to-end digital engineering services from Two Bit Digital',
  url: 'https://www.twobitdigital.com/services',
  numberOfItems: services.length,
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    description: s.description,
    url: `https://www.twobitdigital.com/services/${s.slug}`,
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>

        {/* ── Hero ──────────────────────────────────────────────────── */}
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
            width:        '900px',
            height:       '500px',
            borderRadius: '50%',
            pointerEvents:'none',
            background:   'radial-gradient(circle, rgba(245,197,24,0.055) 0%, transparent 65%)',
          }} />

          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
            position: 'relative',
            zIndex:   1,
          }}>
            <Breadcrumb crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Services' },
            ]} />

            <div style={{ maxWidth: '780px', marginTop: '1.5rem' }}>
              <div className="section-label">What We Build</div>
              <h1 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(2.4rem, 5.5vw, 4rem)',
                lineHeight:    1.08,
                color:         '#eceaf5',
                margin:        '0.75rem 0 1.5rem',
                letterSpacing: '-0.03em',
              }}>
                End-to-End{' '}
                <span style={{ color: '#f5c518' }}>Digital Engineering</span>
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
                Full-stack capability from AI and machine learning pipelines to regulated SaaS
                platforms, government digital services, and the cloud infrastructure that holds
                it all together — built for production, not for demos.
              </p>
            </div>
          </div>
        </section>

        {/* ── Services Grid ─────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
          padding:         '5rem 0',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <ServiceCards services={services} />
          </div>
        </section>

        {/* ── Bottom strip ──────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
          padding:         '3rem 0',
          textAlign:       'center',
        }}>
          <div style={{
            maxWidth: '600px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontSize:   '1rem',
              color:      '#9d99b8',
              margin:     '0 0 1.25rem',
              lineHeight: 1.7,
            }}>
              Not sure which service fits? Tell us about your brief and we will scope the right
              approach.
            </p>
            <Link
              href="/contact"
              style={{
                display:        'inline-flex',
                alignItems:     'center',
                gap:            '0.4rem',
                fontFamily:     'var(--font-inter)',
                fontWeight:     600,
                fontSize:       '0.875rem',
                color:          '#f5c518',
                textDecoration: 'none',
                border:         '1px solid rgba(245,197,24,0.25)',
                padding:        '0.7rem 1.5rem',
                borderRadius:   '7px',
                transition:     'border-color 0.2s ease, background-color 0.2s ease',
              }}
            >
              Talk to Us →
            </Link>
          </div>
        </section>

        <CTABanner
          heading="Ready to Build Something Serious?"
          subtext="Bring us your brief. We will bring the architecture, the engineering, and the delivery track record."
          ctaLabel="Start a Project"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}

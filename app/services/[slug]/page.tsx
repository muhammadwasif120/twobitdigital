import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import CTABanner from '@/components/shared/CTABanner'
import { services, getService } from '@/lib/services'
import CapabilityCards from './CapabilityCards'
import UseCaseCards from './UseCaseCards'
import TechChips from './TechChips'
import RelatedServices from './RelatedServices'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return { title: 'Service Not Found' }

  return {
    title:       service.metaTitle,
    description: service.metaDesc,
    keywords:    service.keywords,
    alternates: {
      canonical: `https://twobitdigital.com/services/${service.slug}`,
    },
    openGraph: {
      title:       service.metaTitle,
      description: service.metaDesc,
      url:         `https://twobitdigital.com/services/${service.slug}`,
      type:        'website',
    },
    twitter: {
      title:       service.metaTitle,
      description: service.metaDesc,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  // Pick 2 other services for Related section
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 2)

  const jsonLd = {
    '@context':   'https://schema.org',
    '@type':      'Service',
    name:         service.title,
    description:  service.description,
    url:          `https://twobitdigital.com/services/${service.slug}`,
    serviceType:  service.title,
    provider: {
      '@type': 'Organization',
      name:    'Two Bit Digital',
      url:     'https://twobitdigital.com',
      '@id':   'https://twobitdigital.com/#organization',
    },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom', sameAs: 'https://www.wikidata.org/wiki/Q145' },
      { '@type': 'Country', name: 'United States',  sameAs: 'https://www.wikidata.org/wiki/Q30'  },
      { '@type': 'Country', name: 'Australia',      sameAs: 'https://www.wikidata.org/wiki/Q408' },
      { '@type': 'Country', name: 'Pakistan',       sameAs: 'https://www.wikidata.org/wiki/Q843' },
    ],
  }

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
          background:    'linear-gradient(180deg, #09091a 0%, #0d0d22 60%, #09091a 100%)',
          paddingTop:    '9rem',
          paddingBottom: '5.5rem',
          borderBottom:  '1px solid rgba(255,255,255,0.06)',
          position:      'relative',
          overflow:      'hidden',
        }}>
          {/* Coloured ambient glow */}
          <div style={{
            position:     'absolute',
            top:          '-140px',
            left:         '50%',
            transform:    'translateX(-50%)',
            width:        '900px',
            height:       '600px',
            borderRadius: '50%',
            pointerEvents:'none',
            background:   `radial-gradient(circle, ${service.color}18 0%, transparent 65%)`,
          }} />

          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
            position: 'relative',
            zIndex:   1,
          }}>
            <Breadcrumb crumbs={[
              { label: 'Home',     href: '/'         },
              { label: 'Services', href: '/services' },
              { label: service.title },
            ]} />

            <div style={{ maxWidth: '820px', marginTop: '2rem' }}>
              {/* Large icon */}
              <div style={{
                width:           '72px',
                height:          '72px',
                borderRadius:    '18px',
                backgroundColor: `${service.color}18`,
                border:          `1px solid ${service.color}35`,
                display:         'inline-flex',
                alignItems:      'center',
                justifyContent:  'center',
                fontSize:        '2.2rem',
                marginBottom:    '1.5rem',
                boxShadow:       `0 0 32px ${service.color}22`,
              }}>
                {service.icon}
              </div>

              <h1 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(2.2rem, 5vw, 3.6rem)',
                lineHeight:    1.08,
                color:         '#eceaf5',
                margin:        '0 0 1rem',
                letterSpacing: '-0.03em',
              }}>
                {service.title}
              </h1>

              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 400,
                fontSize:   '1.2rem',
                color:      '#9d99b8',
                margin:     '0 0 1.75rem',
                lineHeight: 1.6,
                maxWidth:   '680px',
              }}>
                {service.tagline}
              </p>

              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize:   'clamp(0.95rem, 1.5vw, 1.075rem)',
                color:      '#9d99b8',
                lineHeight: 1.85,
                margin:     0,
                maxWidth:   '720px',
              }}>
                {service.longDesc}
              </p>
            </div>
          </div>
        </section>

        {/* ── Capabilities ──────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
          padding:         '5rem 0',
          borderBottom:    '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Capabilities</div>
              <h2 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(1.7rem, 3.5vw, 2.4rem)',
                color:         '#eceaf5',
                margin:        '0.5rem 0 0',
                letterSpacing: '-0.02em',
              }}>
                What We Deliver
              </h2>
            </div>
            <CapabilityCards capabilities={service.capabilities} color={service.color} />
          </div>
        </section>

        {/* ── Use Cases ─────────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          padding:         '5rem 0',
          borderBottom:    '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Real-World Impact</div>
              <h2 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(1.7rem, 3.5vw, 2.4rem)',
                color:         '#eceaf5',
                margin:        '0.5rem 0 0',
                letterSpacing: '-0.02em',
              }}>
                Where We&apos;ve Applied This
              </h2>
            </div>
            <UseCaseCards useCases={service.useCases} color={service.color} />
          </div>
        </section>

        {/* ── Tech Stack ────────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
          padding:         '4rem 0',
          borderBottom:    '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{ marginBottom: '2rem' }}>
              <div className="section-label">Stack</div>
              <h2 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(1.5rem, 3vw, 2rem)',
                color:         '#eceaf5',
                margin:        '0.5rem 0 0',
                letterSpacing: '-0.02em',
              }}>
                Technologies &amp; Tools
              </h2>
            </div>
            <TechChips techStack={service.techStack} color={service.color} />
          </div>
        </section>

        {/* ── Related Services ──────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          padding:         '5rem 0',
          borderBottom:    '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">More Services</div>
              <h2 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(1.7rem, 3.5vw, 2.4rem)',
                color:         '#eceaf5',
                margin:        '0.5rem 0 0',
                letterSpacing: '-0.02em',
              }}>
                Explore Other Services
              </h2>
            </div>
            <RelatedServices services={related} />
          </div>
        </section>

        <CTABanner
          heading={`Ready to build your ${service.title} solution?`}
          subtext="We take on a selective number of new client engagements each quarter. Bring your brief — we will scope the right approach."
          ctaLabel="Start a Conversation"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}

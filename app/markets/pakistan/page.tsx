import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import CTABanner from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title: 'Software Development Company in Pakistan | AI & SaaS Studio — Two Bit Digital',
  description:
    'Two Bit Digital is a UK-registered software development company operating in Pakistan. We build AI systems, SaaS platforms, mobile apps, and custom software for businesses across Karachi, Lahore, and Islamabad.',
  keywords: [
    'software development company Pakistan',
    'AI development company Pakistan',
    'custom software development Pakistan',
    'software house Karachi',
    'app development company Pakistan',
    'web app development Pakistan',
    'AI automation Pakistan',
    'SaaS development Pakistan',
    'mobile app development Pakistan',
    'machine learning company Pakistan',
    'digital transformation Pakistan',
    'enterprise software Pakistan',
    'IT company Karachi',
    'software house Pakistan',
    'AI integration Pakistan',
    'React developer Pakistan',
    'Next.js development Pakistan',
    'software development Lahore',
    'software development Islamabad',
    'business automation Pakistan',
  ],
  alternates: {
    canonical: 'https://www.twobitdigital.com/markets/pakistan',
  },
  openGraph: {
    title: 'Software Development Company in Pakistan | AI & SaaS — Two Bit Digital',
    description:
      'UK-registered software development studio operating in Pakistan. AI systems, SaaS platforms, mobile apps, and enterprise software for Pakistani businesses and international clients.',
    url: 'https://www.twobitdigital.com/markets/pakistan',
    type: 'website',
  },
  twitter: {
    title: 'Software Development Company Pakistan | Two Bit Digital',
    description:
      'AI systems, SaaS platforms, and custom software built in Pakistan. UK-registered, internationally delivered.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.twobitdigital.com/markets/pakistan',
  url: 'https://www.twobitdigital.com/markets/pakistan',
  name: 'Software Development Company in Pakistan — Two Bit Digital',
  description:
    'Two Bit Digital operates a core engineering hub in Karachi, Pakistan. We build AI systems, SaaS platforms, mobile apps, and enterprise software for Pakistani businesses and global clients.',
  inLanguage: 'en',
  isPartOf: { '@id': 'https://www.twobitdigital.com' },
  about: {
    '@type': 'Organization',
    '@id': 'https://www.twobitdigital.com/#organization',
    name: 'Two Bit Digital Ltd',
    url: 'https://www.twobitdigital.com',
    foundingLocation: { '@type': 'Country', name: 'United Kingdom' },
    areaServed: [
      { '@type': 'Country', name: 'Pakistan', sameAs: 'https://www.wikidata.org/wiki/Q843' },
      { '@type': 'Country', name: 'United Kingdom', sameAs: 'https://www.wikidata.org/wiki/Q145' },
      { '@type': 'Country', name: 'United States', sameAs: 'https://www.wikidata.org/wiki/Q30' },
      { '@type': 'Country', name: 'Australia', sameAs: 'https://www.wikidata.org/wiki/Q408' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services Pakistan',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Development Pakistan' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development Pakistan' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Platform Development Pakistan' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development Pakistan' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Application Development Pakistan' } },
      ],
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.twobitdigital.com' },
      { '@type': 'ListItem', position: 2, name: 'Markets', item: 'https://www.twobitdigital.com/markets' },
      { '@type': 'ListItem', position: 3, name: 'Pakistan', item: 'https://www.twobitdigital.com/markets/pakistan' },
    ],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Two Bit Digital a software house in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two Bit Digital is a UK-registered software development studio with its core engineering operations based in Karachi, Pakistan. We combine UK governance standards with a Pakistan-based engineering team, delivering AI systems, SaaS platforms, and mobile apps for local and international clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'What software development services do you offer in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer AI integration and automation, custom SaaS platform development, web and mobile app development, enterprise software, and compliance-grade digital systems. Our Pakistan work includes Tikkit X (event ticketing and management), HR tech platforms, and AI-powered document systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Pakistani businesses hire Two Bit Digital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work with Pakistani businesses directly — from startups to established enterprises. We have built products for the Pakistan market including Tikkit X, a mobile-first event ticketing platform designed for the Pakistani events industry.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI services are available for Pakistani companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build LLM-powered automation, RAG systems, AI document processing, chatbots, and business process automation for Pakistani companies. Our AI work is production-grade — built for operational reliability, not demos.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Two Bit Digital different from other software houses in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two Bit Digital is UK-registered and operates under UK governance and compliance standards. We are not a freelancer collective — we are a structured studio with in-house architects, engineers, and product specialists. We also build and operate our own SaaS products, which gives us real-world product engineering experience.',
      },
    },
  ],
}

const services = [
  {
    icon: '⚡',
    color: '#7b5ea7',
    title: 'AI Development & Automation',
    slug: 'ai-integration',
    desc: 'LLM pipelines, RAG systems, document intelligence, and AI agents built for production. We integrate AI into your existing workflows or build AI-native products from the ground up.',
    tags: ['LLM Integration', 'AI Automation', 'Document AI', 'Chatbots', 'Business Process AI'],
  },
  {
    icon: '🏗️',
    color: '#f5c518',
    title: 'Custom Software Development',
    slug: 'saas-development',
    desc: 'Full-stack custom software from architecture to deployment. Multi-tenant SaaS platforms, enterprise systems, and internal tools built on modern, maintainable technology.',
    tags: ['SaaS Platforms', 'Enterprise Software', 'Multi-tenant Architecture', 'Billing', 'RBAC'],
  },
  {
    icon: '🖥️',
    color: '#4ade80',
    title: 'Web & Mobile App Development',
    slug: 'web-app-development',
    desc: 'Fast, type-safe web apps and cross-platform mobile applications. From consumer-facing products to complex enterprise portals — built to scale.',
    tags: ['Next.js', 'React Native', 'TypeScript', 'Progressive Web Apps', 'API Development'],
  },
  {
    icon: '🔒',
    color: '#38bdf8',
    title: 'Compliance & RegTech Software',
    slug: 'compliance-regtech',
    desc: 'Regulation-aware digital systems for financial services, legal, and government sectors operating in Pakistan and internationally.',
    tags: ['RegTech', 'Compliance Automation', 'Audit Trails', 'Secure Architecture'],
  },
]

const caseStudies = [
  {
    title: 'Tikkit X — Event Ticketing Platform, Pakistan',
    desc: 'A mobile-first event ticketing and management platform built specifically for the Pakistani events industry. Features offline-capable HMAC-SHA256 QR code verification, JazzCash and EasyPaisa payment integration, and a freemium model for event organisers.',
    tags: ['React Native', 'Supabase', 'JazzCash', 'EasyPaisa', 'Offline-first'],
    href: '/products/tikkit-x',
  },
  {
    title: 'YKC Legal — Full Digital Platform, Pakistan',
    desc: 'End-to-end digital platform for one of Pakistan\'s oldest law firms (est. 1950). Includes 17 practice area pages, case search, a judgements library, team profiles, consultation booking, a client portal, and a case diary system.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Client Portal', 'Case Management'],
    href: '/work',
  },
]

const whyItems = [
  {
    label: 'UK-Registered, Pakistan-Operated',
    desc: 'We are incorporated in England & Wales (Companies House #14710072) with engineering operations anchored in Karachi. You get UK governance with local understanding.',
  },
  {
    label: 'We Build Our Own Products',
    desc: 'We operate Tikkit X (Pakistan) and Averon Legal Systems (UK) — our own SaaS products. That means we bring real product ownership experience to client builds, not just consultancy thinking.',
  },
  {
    label: 'AI-First Engineering',
    desc: 'Every system we build is designed with AI integration in mind. Whether it is a simple automation or a full LLM pipeline, we engineer for intelligence at the infrastructure level.',
  },
  {
    label: 'Compliance-First Architecture',
    desc: 'Our background is in regulated industries — legal, financial services, and government. Security, audit trails, and data isolation are built into our process, not bolted on.',
  },
  {
    label: 'Full-Stack In-House Team',
    desc: 'No freelancer networks, no outsourcing. Every project is delivered by our in-house engineers and product specialists operating under a consistent engineering culture.',
  },
  {
    label: 'International Track Record',
    desc: 'UN Vendor #1177996 · D&B D-U-N-S 77-532-7428. We have delivered for clients across the UK, US, Australia, and Pakistan — bringing international standards to every engagement.',
  },
]

export default function PakistanMarketPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>

        {/* ── Breadcrumb ────────────────────────────────────────────── */}
        <div style={{ backgroundColor: '#09091a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <Breadcrumb crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Markets', href: '/markets' },
              { label: 'Pakistan' },
            ]} />
          </div>
        </div>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)',
          padding: '5rem 0 4rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="section-label">Pakistan</div>
            <h1 style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              color: '#eceaf5',
              margin: '0.75rem 0 1.5rem',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              maxWidth: '780px',
            }}>
              Software Development &amp; AI Engineering in Pakistan
            </h1>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: '#9d99b8',
              lineHeight: 1.8,
              maxWidth: '680px',
              margin: '0 0 2.5rem',
            }}>
              Two Bit Digital is a UK-registered software development studio with its core engineering team based in Karachi, Pakistan. We build AI systems, SaaS platforms, mobile apps, and custom enterprise software — for Pakistani businesses and international clients who need engineering they can rely on.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  color: '#09091a',
                  backgroundColor: '#f5c518',
                  padding: '0.9rem 2rem',
                  borderRadius: '7px',
                  textDecoration: 'none',
                }}
              >
                Start a Project →
              </Link>
              <Link
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  color: '#eceaf5',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '0.9rem 2rem',
                  borderRadius: '7px',
                  textDecoration: 'none',
                }}
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* ── Trust Strip ───────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0a0a1e',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '1.5rem 0',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'center',
          }}>
            {[
              'UK-Registered Studio',
              'Karachi Engineering Hub',
              'AI-First Architecture',
              'UN Vendor #1177996',
              'D&B D-U-N-S 77-532-7428',
            ].map((item) => (
              <span key={item} style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                fontSize: '0.8rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#6b6880',
              }}>
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          padding: '5rem 0',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem' }}>
              <div className="section-label">What We Build</div>
              <h2 style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 800,
                fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
                color: '#eceaf5',
                margin: '0.5rem 0 0.75rem',
                letterSpacing: '-0.02em',
              }}>
                Software Development Services for Pakistan
              </h2>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize: '1rem',
                color: '#9d99b8',
                lineHeight: 1.75,
                maxWidth: '620px',
              }}>
                From AI automation to full SaaS platforms — production-grade software built for Pakistani businesses and international clients with operations in Pakistan.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}>
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  style={{
                    display: 'block',
                    backgroundColor: '#0d0d22',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '12px',
                    padding: '2rem',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{svc.icon}</div>
                  <h3 style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: '#eceaf5',
                    margin: '0 0 0.75rem',
                  }}>
                    {svc.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize: '0.9rem',
                    color: '#9d99b8',
                    lineHeight: 1.7,
                    margin: '0 0 1.25rem',
                  }}>
                    {svc.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {svc.tags.map((tag) => (
                      <span key={tag} style={{
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 500,
                        fontSize: '0.7rem',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: svc.color,
                        backgroundColor: `${svc.color}15`,
                        border: `1px solid ${svc.color}30`,
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pakistan Case Studies ─────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
          padding: '5rem 0',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem' }}>
              <div className="section-label">Built for Pakistan</div>
              <h2 style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 800,
                fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
                color: '#eceaf5',
                margin: '0.5rem 0 0.75rem',
                letterSpacing: '-0.02em',
              }}>
                Projects We&apos;ve Delivered in Pakistan
              </h2>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize: '1rem',
                color: '#9d99b8',
                lineHeight: 1.75,
                maxWidth: '620px',
              }}>
                Real products built for the Pakistani market — not hypotheticals.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {caseStudies.map((cs) => (
                <Link
                  key={cs.title}
                  href={cs.href}
                  style={{
                    display: 'block',
                    backgroundColor: '#09091a',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '12px',
                    padding: '2rem',
                    textDecoration: 'none',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: '#eceaf5',
                    margin: '0 0 0.75rem',
                    lineHeight: 1.4,
                  }}>
                    {cs.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize: '0.9rem',
                    color: '#9d99b8',
                    lineHeight: 1.75,
                    margin: '0 0 1.25rem',
                  }}>
                    {cs.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {cs.tags.map((tag) => (
                      <span key={tag} style={{
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 500,
                        fontSize: '0.7rem',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: '#f5c518',
                        backgroundColor: 'rgba(245,197,24,0.08)',
                        border: '1px solid rgba(245,197,24,0.2)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Two Bit Digital ───────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          padding: '5rem 0',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem' }}>
              <div className="section-label">Why Us</div>
              <h2 style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 800,
                fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
                color: '#eceaf5',
                margin: '0.5rem 0 0.75rem',
                letterSpacing: '-0.02em',
              }}>
                Why Pakistani Businesses Choose Two Bit Digital
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}>
              {whyItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    backgroundColor: '#0d0d22',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '12px',
                    padding: '1.75rem',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#eceaf5',
                    margin: '0 0 0.6rem',
                  }}>
                    {item.label}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize: '0.9rem',
                    color: '#9d99b8',
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
          padding: '5rem 0',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem' }}>
              <div className="section-label">FAQ</div>
              <h2 style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 800,
                fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)',
                color: '#eceaf5',
                margin: '0.5rem 0 0',
                letterSpacing: '-0.02em',
              }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {faqJsonLd.mainEntity.map((faq) => (
                <div
                  key={faq.name}
                  style={{
                    backgroundColor: '#09091a',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '10px',
                    padding: '1.75rem',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#eceaf5',
                    margin: '0 0 0.75rem',
                    lineHeight: 1.4,
                  }}>
                    {faq.name}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize: '0.9rem',
                    color: '#9d99b8',
                    lineHeight: 1.75,
                    margin: 0,
                  }}>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Insights ──────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          padding: '5rem 0',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Insights</div>
              <h2 style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: '#eceaf5',
                margin: '0.5rem 0 0',
                letterSpacing: '-0.02em',
              }}>
                Pakistan &amp; AI — Further Reading
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {[
                { href: '/insights/tikkit-x-event-management-pakistan', label: 'Tikkit X: Event Management for Pakistan' },
                { href: '/insights/how-to-run-a-paperless-event-pakistan', label: 'How to Run a Paperless Event in Pakistan' },
                { href: '/insights/what-are-ai-workflows', label: 'What Are AI Workflows? A Business Guide' },
                { href: '/insights/hidden-cost-of-manual-business-processes', label: 'The Hidden Cost of Manual Business Processes' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'block',
                    backgroundColor: '#0d0d22',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '10px',
                    padding: '1.5rem',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: '#eceaf5',
                    lineHeight: 1.5,
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          heading="Ready to Build with a Pakistan-Based AI Studio?"
          subtext="We work with Pakistani businesses and international clients who need engineering they can rely on. Bring your brief — we will scope the right approach."
          ctaLabel="Start a Conversation"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}

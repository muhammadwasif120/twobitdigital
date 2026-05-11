import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import CTABanner from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title: 'Software Development Agency UK | AI & SaaS Engineering Studio — Two Bit Digital',
  description:
    'Two Bit Digital is a UK-registered SaaS development and AI engineering studio serving businesses across England, Scotland, Wales, and Northern Ireland. We build AI systems, SaaS platforms, legal tech, and compliance software for regulated UK markets.',
  keywords: [
    'SaaS development agency UK',
    'AI development company UK',
    'custom software development UK',
    'web app development UK',
    'AI integration agency UK',
    'legal tech software UK',
    'RegTech software UK',
    'compliance software UK',
    'CPR Part 47 compliance software',
    'law firm software UK',
    'government digital services UK',
    'enterprise software UK',
    'Next.js development agency UK',
    'TypeScript developer UK',
    'AI automation UK',
    'software development company UK',
    'machine learning company UK',
    'SaaS platform development UK',
    'UK government technology partner',
    'document intelligence software UK',
  ],
  alternates: {
    canonical: 'https://www.twobitdigital.com/markets/uk',
  },
  openGraph: {
    title: 'Software Development Agency UK | AI & SaaS Engineering Studio — Two Bit Digital',
    description:
      'UK-registered SaaS and AI engineering studio serving regulated UK markets — legal, financial, and public sector. CPR compliance software, legal tech, government digital services, and AI integration.',
    url: 'https://www.twobitdigital.com/markets/uk',
    type: 'website',
  },
  twitter: {
    title: 'Software Development Agency UK | Two Bit Digital',
    description:
      'AI systems, SaaS platforms, and legal tech built for regulated UK markets. UK-registered, compliance-first.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.twobitdigital.com/markets/uk',
  url: 'https://www.twobitdigital.com/markets/uk',
  name: 'Software Development Agency UK — Two Bit Digital',
  description:
    'Two Bit Digital is a UK-registered SaaS and AI engineering studio. We build compliance-critical digital systems for regulated UK markets — legal, financial, and public sector.',
  inLanguage: 'en-GB',
  isPartOf: { '@id': 'https://www.twobitdigital.com' },
  about: {
    '@type': 'Organization',
    '@id': 'https://www.twobitdigital.com/#organization',
    name: 'Two Bit Digital Ltd',
    url: 'https://www.twobitdigital.com',
    legalName: 'Two Bit Digital Ltd',
    foundingLocation: { '@type': 'Country', name: 'United Kingdom' },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom', sameAs: 'https://www.wikidata.org/wiki/Q145' },
      { '@type': 'Country', name: 'United States',  sameAs: 'https://www.wikidata.org/wiki/Q30'  },
      { '@type': 'Country', name: 'Australia',      sameAs: 'https://www.wikidata.org/wiki/Q408' },
      { '@type': 'Country', name: 'Pakistan',       sameAs: 'https://www.wikidata.org/wiki/Q843' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services UK',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Development Agency UK' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Integration Agency UK' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Legal Tech Software UK' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CPR Part 47 Compliance Software' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Government Digital Services UK' } },
      ],
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',           item: 'https://www.twobitdigital.com' },
      { '@type': 'ListItem', position: 2, name: 'Markets',        item: 'https://www.twobitdigital.com/markets' },
      { '@type': 'ListItem', position: 3, name: 'United Kingdom', item: 'https://www.twobitdigital.com/markets/uk' },
    ],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Two Bit Digital a UK company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Two Bit Digital Ltd is incorporated in England & Wales (Companies House #14710072). We are UK-registered with core development operations in Karachi, Pakistan — giving us UK governance standards with engineering efficiency.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries do you serve in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialise in regulated UK industries: legal (costs lawyers, law firms), financial services, public sector, and compliance-critical SaaS businesses. Our flagship UK product is Averon Legal Systems — a CPR Part 47/36 compliance SaaS for costs lawyers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you work on UK government contracts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We are UN Vendor registered (#1177996) and D&B verified (D-U-N-S 77-532-7428), making us eligible for GCloud, Crown Commercial Service, and OJEU procurement frameworks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build legal tech software in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Legal technology is one of our core verticals. We built Averon Legal Systems — a CPR Part 47 and Part 36 compliance SaaS for UK costs lawyers — in-house. We also deliver custom legal tech solutions including client portals, case management systems, and document intelligence tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Two Bit Digital different from other UK software agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are engineering-led, not sales-led. We build our own SaaS products — Averon Legal Systems and Tikkit X — which gives us genuine product ownership experience. Our background is in regulated, compliance-critical markets, meaning security, audit trails, and data isolation are built into our process from the start.',
      },
    },
  ],
}

const services = [
  {
    icon: '⚡',
    color: '#7b5ea7',
    slug: 'ai-integration',
    title: 'AI Integration & Automation',
    desc: 'LLM pipelines, RAG systems, document intelligence, and AI agents built for production environments in regulated UK industries. OpenAI and Anthropic Claude integration.',
    tags: ['LLM Integration', 'RAG Systems', 'Document AI', 'AI Agents', 'Workflow Automation'],
  },
  {
    icon: '🏗️',
    color: '#f5c518',
    slug: 'saas-development',
    title: 'SaaS Platform Development',
    desc: 'Multi-tenant SaaS from architecture to launch. Auth, RBAC, billing, analytics, and multi-tenancy — production-grade and built to scale across UK and international markets.',
    tags: ['Multi-tenant SaaS', 'Auth & RBAC', 'Billing & Subscriptions', 'Analytics', 'API Design'],
  },
  {
    icon: '🔒',
    color: '#38bdf8',
    slug: 'compliance-regtech',
    title: 'Legal Tech & Compliance Software',
    desc: 'CPR Part 47/36 compliance systems, legal case management, audit trail infrastructure, and RegTech platforms for UK solicitors, costs lawyers, and financial services firms.',
    tags: ['CPR Part 47', 'Costs Management', 'Legal SaaS', 'RegTech', 'Audit Trails'],
  },
  {
    icon: '🏛️',
    color: '#4ade80',
    slug: 'government-digital',
    title: 'Government Digital Services',
    desc: 'Public sector digital systems for UK government bodies. GCloud and Crown Commercial eligible. UN Vendor registered. Secure, accessible, and procurement-ready.',
    tags: ['GCloud', 'Crown Commercial', 'Public Sector', 'Tender Technology', 'OJEU'],
  },
]

const caseStudies = [
  {
    title: 'Averon Legal Systems — CPR Part 47 Compliance SaaS, UK',
    desc: "Multi-tenant SaaS platform for UK costs lawyers. Automates CPR Part 47 and Part 36 compliance deadlines, with RBAC, a client portal, matter tracking, and a built-in deadline engine. Two Bit Digital's own in-house product — currently in beta.",
    tags: ['Next.js', 'Supabase', 'CPR Part 47', 'Multi-tenant', 'Row-Level Security'],
    href: '/products/averon-legal-systems',
  },
  {
    title: 'YKC Legal — Full Digital Platform',
    desc: "Complete digital presence for a UK-instructed legal practice. Includes 17 practice area pages, case search, a judgements library, consultation booking, a secure client portal, and a case diary system.",
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Client Portal', 'Case Management'],
    href: '/work',
  },
]

const whyItems = [
  {
    label: 'UK-Registered & Compliant',
    desc: 'Companies House #14710072. Operating under UK governance, employment law, and data protection standards. ICO-aligned in approach to data handling and GDPR compliance.',
  },
  {
    label: 'Regulated Industry Specialists',
    desc: 'Deep experience in legal tech (CPR Part 47/36), financial services compliance, and public sector digital. We understand regulated UK markets at the architecture level — not just the surface.',
  },
  {
    label: 'GCloud & Crown Commercial Eligible',
    desc: 'UN Vendor registered (#1177996), D&B verified (77-532-7428). Eligible and prepared for GCloud, Crown Commercial Service, and OJEU procurement frameworks.',
  },
  {
    label: 'We Own Production SaaS',
    desc: 'Averon Legal Systems and Tikkit X are our own products. We bring genuine product ownership experience — not just consultancy thinking — to every client engagement.',
  },
  {
    label: 'AI-First from Day One',
    desc: "We don't bolt AI on. Our architecture is designed for LLM integration, RAG, and intelligent automation from the ground up — built on Anthropic Claude and OpenAI APIs.",
  },
  {
    label: 'Full-Stack In-House Team',
    desc: 'No freelancer networks or outsourcing chains. Every project is delivered by our in-house engineers and product specialists, operating under a single consistent engineering culture.',
  },
]

export default function UKMarketPage() {
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
              { label: 'Home',           href: '/' },
              { label: 'Markets',        href: '/markets' },
              { label: 'United Kingdom' },
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
            <div className="section-label">United Kingdom</div>
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
              SaaS Development &amp; AI Engineering Studio in the UK
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
              Two Bit Digital Ltd is incorporated in England &amp; Wales (Companies House #14710072). We build compliance-critical SaaS platforms, AI systems, and legal technology for regulated UK industries — legal, financial services, and government.
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
              'UK-Registered (Co. #14710072)',
              'UN Vendor #1177996',
              'D&B D-U-N-S 77-532-7428',
              'GCloud & Crown Commercial Eligible',
              'Compliance-First Engineering',
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
                Software Development Services for UK Businesses
              </h2>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize: '1rem',
                color: '#9d99b8',
                lineHeight: 1.75,
                maxWidth: '620px',
              }}>
                Compliance-critical software for regulated UK markets — from AI-powered legal systems to government digital services.
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

        {/* ── UK Case Studies ───────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
          padding: '5rem 0',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem' }}>
              <div className="section-label">Built for the UK</div>
              <h2 style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 800,
                fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
                color: '#eceaf5',
                margin: '0.5rem 0 0.75rem',
                letterSpacing: '-0.02em',
              }}>
                Projects We&apos;ve Delivered for UK Markets
              </h2>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize: '1rem',
                color: '#9d99b8',
                lineHeight: 1.75,
                maxWidth: '620px',
              }}>
                Real systems built for UK compliance requirements — not generic templates.
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
                Why UK Businesses Choose Two Bit Digital
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
                UK Market — Further Reading
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {[
                { href: '/insights/how-to-choose-saas-development-agency-uk',    label: 'How to Choose a SaaS Development Agency in the UK' },
                { href: '/insights/cpr-part-47-compliance-software',             label: 'CPR Part 47 Compliance Software: What Costs Lawyers Need' },
                { href: '/insights/law-firm-digital-transformation-guide',       label: 'Law Firm Digital Transformation: A Complete Guide' },
                { href: '/insights/winning-uk-government-digital-contracts',     label: 'Winning UK Government Digital Contracts' },
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
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          heading="Ready to Build Something Serious for the UK Market?"
          subtext="We take a selective number of new engagements each quarter. Bring your brief — we will scope the right approach and timeline."
          ctaLabel="Start a Conversation"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}

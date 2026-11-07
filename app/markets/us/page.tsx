import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import CTABanner from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title: 'SaaS & AI Development Agency for US Companies',
  description:
    'UK-registered SaaS and AI engineering studio serving US startups and enterprises. Fixed-price MVP builds, full IP transfer, LLM integration with OpenAI and Anthropic Claude. Engineering in Karachi, registered in England.',
  keywords: [
    'SaaS development company USA',
    'AI development agency US',
    'custom software development USA',
    'AI engineering studio US',
    'SaaS development for startups',
    'AI integration company USA',
    'LLM development company US',
    'Next.js development agency US',
    'startup software development company',
    'SaaS MVP development US',
    'AI automation company USA',
    'offshore software development US',
    'UK software agency for US companies',
    'CRM development USA',
    'SaaS platform development USA',
    'TypeScript development agency US',
    'Supabase development agency',
    'AI agent development USA',
    'RAG system development US',
    'document AI company US',
  ],
  alternates: {
    canonical: 'https://www.twobitdigital.com/markets/us',
  },
  openGraph: {
    title: 'SaaS & AI Development Agency for US Companies | Two Bit Digital',
    description:
      'UK-registered engineering studio delivering AI systems, SaaS platforms, and custom software for US startups and enterprises. Fixed-price, full IP transfer, OpenAI and Anthropic Claude integration.',
    url: 'https://www.twobitdigital.com/markets/us',
    type: 'website',
  },
  twitter: {
    title: 'SaaS & AI Development Agency for US Companies | Two Bit Digital',
    description:
      'AI systems and SaaS platforms for US companies — UK-registered, fixed-price, full IP transfer.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.twobitdigital.com/markets/us',
  url: 'https://www.twobitdigital.com/markets/us',
  name: 'SaaS & AI Development Agency for US Companies — Two Bit Digital',
  description:
    'Two Bit Digital is a UK-registered SaaS and AI engineering studio serving US startups and enterprises. We build AI systems, SaaS platforms, LLM-powered workflows, and custom software with full IP transfer.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://www.twobitdigital.com' },
  about: {
    '@type': 'Organization',
    '@id': 'https://www.twobitdigital.com/#organization',
    name: 'Two Bit Digital Ltd',
    url: 'https://www.twobitdigital.com',
    legalName: 'Two Bit Digital Ltd',
    areaServed: [
      { '@type': 'Country', name: 'United States',  sameAs: 'https://www.wikidata.org/wiki/Q30'  },
      { '@type': 'Country', name: 'United Kingdom', sameAs: 'https://www.wikidata.org/wiki/Q145' },
      { '@type': 'Country', name: 'Australia',      sameAs: 'https://www.wikidata.org/wiki/Q408' },
      { '@type': 'Country', name: 'Pakistan',       sameAs: 'https://www.wikidata.org/wiki/Q843' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services for US Companies',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & LLM Engineering for US Companies' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Platform Development USA' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MVP Development for US Startups' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM Development USA' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Agent Development US' } },
      ],
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',           item: 'https://www.twobitdigital.com' },
      { '@type': 'ListItem', position: 2, name: 'Markets',        item: 'https://www.twobitdigital.com/markets' },
      { '@type': 'ListItem', position: 3, name: 'United States',  item: 'https://www.twobitdigital.com/markets/us' },
    ],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does working with a UK-based engineering studio work for US companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Straightforwardly. Two Bit Digital is UK-registered, operates under English law, and signs standard service agreements with IP assignment clauses. Our development team in Karachi overlaps with US East Coast mornings (5–10am EST) and covers US evenings (Pakistan is 10–11 hours ahead of EST). We communicate asynchronously with daily check-ins and weekly video calls — most US clients find the cadence cleaner than a local agency with more meetings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns the IP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You own everything we build for you. All intellectual property — code, designs, databases, and documentation — transfers to you upon final payment. Our contracts include an explicit IP assignment clause. No shared codebases, no license dependencies, no lock-in.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle US data privacy requirements like CCPA or HIPAA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We design systems with data isolation and privacy architecture from day one. For HIPAA-adjacent projects we implement row-level security, AES-256 encryption at rest, audit-trail infrastructure, and access control patterns that align with HIPAA Security Rule requirements. We advise that formal HIPAA compliance requires your own legal review, but we build the technical foundations correctly by default.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it cost to build a SaaS MVP with Two Bit Digital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our fixed-price MVP packages start from £1,500 (approximately $1,900) for a focused scope, up to £12,500 (approximately $16,000) for a full multi-feature launch build. Compared to US agency rates of $150–$250/hour, a 10-week project at a US agency would cost $60,000–$100,000 for the same output. We deliver the same engineering quality at a fraction of the cost — not because we cut corners, but because our engineering team operates out of Karachi.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI and LLM technologies do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work primarily with OpenAI (GPT-4o, o1) and Anthropic Claude (Claude 3.5 Sonnet, Claude 3 Opus) APIs. We build RAG systems using vector databases (Supabase pgvector, Pinecone), LLM orchestration pipelines, AI agents, document intelligence systems, and automated workflow tools. We also build MCP servers and tool-use integrations for Claude-powered AI agents.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with US startups at the pre-seed or seed stage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our MVP development track is designed for pre-seed and seed-stage founders who need a working product fast. We deliver a production-grade MVP in 10 working days — not a prototype, a live product you can show investors and acquire users with. Fixed price, no equity, full IP transfer.',
      },
    },
  ],
}

const services = [
  {
    icon: '🤖',
    color: '#7b5ea7',
    slug: 'ai-integration',
    title: 'AI & LLM Engineering',
    desc: 'RAG pipelines, AI agents, document intelligence, LLM fine-tuning wrappers, and production OpenAI/Anthropic Claude integrations. We build AI that actually ships — not demos.',
    tags: ['OpenAI GPT-4o', 'Anthropic Claude', 'RAG Systems', 'AI Agents', 'LLM Pipelines', 'MCP Servers'],
  },
  {
    icon: '🏗️',
    color: '#f5c518',
    slug: 'saas-development',
    title: 'SaaS Platform Development',
    desc: 'Multi-tenant SaaS from architecture to launch. Auth, RBAC, billing (Stripe), analytics, and API design — production-grade from day one, built to scale to Series A and beyond.',
    tags: ['Multi-tenant', 'Stripe Billing', 'Auth & RBAC', 'Next.js 14', 'Supabase', 'TypeScript'],
  },
  {
    icon: '🚀',
    color: '#38bdf8',
    slug: 'mvp',
    title: 'MVP Development for Startups',
    desc: 'From scope to live product in 10 working days. Fixed price, full IP transfer. Built for pre-seed and seed founders who need a working product — not a prototype — to show investors.',
    tags: ['10-Day MVP', 'Fixed Price', 'Full IP Transfer', 'Investor-Ready', 'Production Code'],
  },
  {
    icon: '⚡',
    color: '#4ade80',
    slug: 'web-app-development',
    title: 'CRM & Custom Software',
    desc: 'Purpose-built CRMs, internal tools, ERP systems, and workflow automation for US businesses. We build what off-the-shelf software cannot — custom to your process, not the other way around.',
    tags: ['Custom CRM', 'Internal Tools', 'ERP Systems', 'Workflow Automation', 'API Integrations'],
  },
]

const whyItems = [
  {
    label: 'AI-First, Not AI-Bolted-On',
    desc: "We don't add AI as a feature after the fact. Our architecture is designed for LLM integration, RAG, and intelligent automation from the ground up — built on OpenAI and Anthropic Claude APIs. We've shipped production AI systems, not just demos.",
  },
  {
    label: 'Full IP Transfer, No Exceptions',
    desc: 'Every contract includes an explicit IP assignment clause. All code, designs, and databases transfer to you on final payment. No shared repos, no license dependencies, no exit fees. What we build is yours.',
  },
  {
    label: 'UK-Registered Accountability',
    desc: 'Two Bit Digital Ltd is incorporated in England & Wales (Co. #14710072). You are contracting with a registered legal entity — not a freelancer network. Standard service agreements, D&B verified (77-532-7428), UN Vendor registered.',
  },
  {
    label: 'Fixed-Price Projects',
    desc: 'No hourly billing. No scope creep invoices. Every project is priced upfront against a written spec. If the spec changes, the price changes — and we tell you first. US agency rates average $150–$250/hour. Ours are a fraction of that.',
  },
  {
    label: 'We Own Production SaaS',
    desc: 'We built Tikkit X (live event ticketing platform) and Averon Legal Systems (CPR compliance SaaS) ourselves. We bring genuine product ownership — shipping, maintaining, iterating — to every client build.',
  },
  {
    label: 'Cross-Timezone Delivery',
    desc: 'Karachi overlaps US East Coast mornings. UK handles US business hours. You get a daily async update, weekly video check-in, and a Slack channel with real engineers — not a project manager layer.',
  },
]

const caseStudies = [
  {
    title: 'Tikkit X — Offline-First Event Ticketing Platform',
    desc: "Full SaaS event ticketing platform with offline QR verification (HMAC-SHA256), JazzCash/EasyPaisa payment integration, multi-venue management, and real-time analytics. Two Bit Digital's own product — live and in production.",
    tags: ['React Native', 'Next.js', 'Supabase', 'Offline-First', 'HMAC-SHA256'],
    href: '/launch/case-studies/tikkit-x',
  },
  {
    title: 'Averon Legal Systems — Compliance SaaS',
    desc: 'Multi-tenant CPR Part 47/36 compliance SaaS for UK costs lawyers. Automated deadline engine, RBAC, client portal, matter management, and cryptographic audit trail. Production-grade, in beta.',
    tags: ['Next.js', 'Supabase', 'Multi-tenant RLS', 'RBAC', 'Compliance'],
    href: '/launch/case-studies/averon-legal',
  },
]

export default function USMarketPage() {
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
              { label: 'Home',          href: '/' },
              { label: 'Markets',       href: '/markets' },
              { label: 'United States' },
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
            <div className="section-label">United States</div>
            <h1 style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              color: '#eceaf5',
              margin: '0.75rem 0 1.5rem',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              maxWidth: '820px',
            }}>
              SaaS &amp; AI Engineering for US Companies — at a Fraction of US Agency Rates
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
              Two Bit Digital is a UK-registered engineering studio. We build AI systems, SaaS platforms, and custom software for US startups and enterprises — fixed-price, full IP transfer, production-grade from day one. Our team delivers the quality US clients expect at a cost that makes sense.
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
                href="/launch"
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
                See MVP Pricing
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
              'UK-Registered Entity (Co. #14710072)',
              'D&B D-U-N-S 77-532-7428',
              'UN Vendor #1177996',
              'Full IP Transfer on Every Project',
              'OpenAI & Anthropic Claude Partners',
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

        {/* ── Cost Comparison ───────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          padding: '5rem 0',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem', maxWidth: '680px' }}>
              <div className="section-label">The Honest Math</div>
              <h2 style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 800,
                fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
                color: '#eceaf5',
                margin: '0.5rem 0 0.75rem',
                letterSpacing: '-0.02em',
              }}>
                US Agency Rates vs Two Bit Digital
              </h2>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize: '1rem',
                color: '#9d99b8',
                lineHeight: 1.75,
              }}>
                The same engineers, the same Next.js and Supabase stack, the same production standards — at the cost structure of a Karachi engineering team, with the legal accountability of a UK-registered company.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}>
              {[
                {
                  label: 'US Agency (10 weeks)',
                  cost: '$60,000–$100,000',
                  rate: '$150–$250/hr',
                  color: '#ef4444',
                  note: 'Typical mid-tier NYC/SF agency',
                },
                {
                  label: 'Two Bit Digital (10 weeks)',
                  cost: '$12,000–$25,000',
                  rate: 'Fixed-price per sprint',
                  color: '#4ade80',
                  note: 'Same stack, same quality, full IP transfer',
                },
              ].map((item) => (
                <div key={item.label} style={{
                  backgroundColor: '#0d0d22',
                  border: `1px solid ${item.color}30`,
                  borderRadius: '12px',
                  padding: '2rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: item.color,
                    marginBottom: '0.75rem',
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                    color: '#eceaf5',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.4rem',
                  }}>
                    {item.cost}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontSize: '0.85rem',
                    color: '#9d99b8',
                    marginBottom: '0.5rem',
                  }}>
                    {item.rate}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize: '0.8rem',
                    color: '#6b6880',
                  }}>
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
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
                Software Development Services for US Companies
              </h2>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize: '1rem',
                color: '#9d99b8',
                lineHeight: 1.75,
                maxWidth: '620px',
              }}>
                From AI-powered SaaS platforms to custom CRMs — production-grade systems, not prototypes.
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
                    backgroundColor: '#09091a',
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

        {/* ── Case Studies ──────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          padding: '5rem 0',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem' }}>
              <div className="section-label">Our Own Products</div>
              <h2 style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 800,
                fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
                color: '#eceaf5',
                margin: '0.5rem 0 0.75rem',
                letterSpacing: '-0.02em',
              }}>
                We Ship Production Software — Our Own and Yours
              </h2>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize: '1rem',
                color: '#9d99b8',
                lineHeight: 1.75,
                maxWidth: '620px',
              }}>
                We built two production SaaS products ourselves. That is the difference between a studio that talks about shipping and one that actually does it.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {caseStudies.map((cs) => (
                <Link
                  key={cs.title}
                  href={cs.href}
                  style={{
                    display: 'block',
                    backgroundColor: '#0d0d22',
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

        {/* ── Why Us ────────────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
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
                Why US Companies Choose Two Bit Digital
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
                    backgroundColor: '#09091a',
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
          backgroundColor: '#09091a',
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
                Questions US Companies Ask Us
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {faqJsonLd.mainEntity.map((faq) => (
                <div
                  key={faq.name}
                  style={{
                    backgroundColor: '#0d0d22',
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
          backgroundColor: '#0d0d22',
          padding: '5rem 0',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Further Reading</div>
              <h2 style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: '#eceaf5',
                margin: '0.5rem 0 0',
                letterSpacing: '-0.02em',
              }}>
                US Market — Insights
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {[
                { href: '/launch',                                            label: 'Build a SaaS MVP in 10 Working Days — Fixed Price' },
                { href: '/services/ai-integration',                           label: 'AI & LLM Integration Services' },
                { href: '/insights/how-to-choose-saas-development-agency-uk', label: 'How to Choose a SaaS Development Agency' },
                { href: '/launch/case-studies',                               label: 'MVP Case Studies — Real Products We Shipped' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'block',
                    backgroundColor: '#09091a',
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
          heading="Ready to Build with a Studio That Ships?"
          subtext="Fixed-price projects, full IP transfer, production-grade from day one. Tell us what you need — we will scope it and give you a number."
          ctaLabel="Start a Conversation"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import CTABanner from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title: 'Law Firm Websites Pakistan | Legal Digital Presence — Two Bit Digital',
  description:
    'Professional websites for Pakistani law firms, advocates, and barristers. Client portals, case search, practice area pages, consultation booking, and built-in SEO. See our YKC Legal case study.',
  keywords: [
    'law firm website Pakistan',
    'lawyer website design Pakistan',
    'legal website development Pakistan',
    'advocate website Pakistan',
    'law firm website Karachi',
    'law firm website Lahore',
    'law firm digital presence Pakistan',
    'barrister website Pakistan',
    'legal website Pakistan',
    'law firm website design',
    'lawyer website Pakistan',
    'law firm SEO Pakistan',
    'legal website design Karachi',
    'web design for lawyers Pakistan',
    'law firm client portal Pakistan',
  ],
  alternates: {
    canonical: 'https://twobitdigital.com/law-firm-websites-pakistan',
  },
  openGraph: {
    title: 'Law Firm Websites Pakistan | Two Bit Digital',
    description:
      'The lawyer who buys the cheap template gets a website. The lawyer who comes to Two Bit Digital gets something that works while they are in court.',
    url: 'https://twobitdigital.com/law-firm-websites-pakistan',
    type: 'website',
  },
  twitter: {
    title: 'Law Firm Websites Pakistan | Two Bit Digital',
    description:
      'Professional websites for Pakistani law firms — client portals, case search, practice area pages, and built-in SEO. See the YKC Legal case study.',
  },
}

// ── Structured data ───────────────────────────────────────────────────────────

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Law Firm Website Design & Development — Pakistan',
  description:
    'Two Bit Digital designs and builds professional websites and digital systems for Pakistani law firms, advocates, and barristers. Services include practice area pages, client portals, case search, consultation booking, judgements libraries, and ongoing SEO.',
  url: 'https://twobitdigital.com/law-firm-websites-pakistan',
  serviceType: 'Law Firm Website Development',
  areaServed: { '@type': 'Country', name: 'Pakistan' },
  provider: {
    '@type': 'Organization',
    name: 'Two Bit Digital',
    url: 'https://twobitdigital.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressCountry: 'PK' },
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a law firm website cost in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic law firm website in Pakistan starts from PKR 150,000–300,000 for a professional multi-page site with practice area pages. A full digital presence with client portal, case search, and consultation booking — similar to what we built for YKC Legal — runs PKR 500,000–1,200,000 depending on scope and integrations. Contact us for a precise quote based on your firm\'s requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a law firm website in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard law firm website with practice area pages, team profiles, and contact forms takes 4–6 weeks. A full digital presence with client portal, case search, and consultation booking takes 10–16 weeks. We provide a fixed timeline at the start of every project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my law firm website rank on Google in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — if it is built with SEO from the ground up. Every website we build includes technical SEO, dedicated practice area pages, schema markup, fast page speeds, and an optimised content structure. YKC Legal, a Pakistani law firm we built for, was appearing on relevant Google search terms within two weeks of launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Pakistani lawyers have an online consultation booking system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build consultation booking systems into every law firm website we deliver. Clients can book an initial consultation directly on your website, choose a time slot, and receive a confirmation — without any back-and-forth on WhatsApp or phone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a law firm client portal and does my firm need one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A client portal is a secure, private area of your website where clients can log in and see their case progress, documents, upcoming hearings, and messages from the firm. It replaces the constant phone and WhatsApp chasing that both clients and fee earners find frustrating. If your firm handles ongoing matters — rather than one-off consultations — a client portal materially improves client satisfaction and reduces administrative burden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build law firm websites in Urdu as well as English?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build bilingual law firm websites with English and Urdu content, including correctly rendered right-to-left Urdu typography. This is particularly valuable for firms with clients who are more comfortable in Urdu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which cities in Pakistan do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with law firms across Pakistan — Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, and all major cities. All our work is delivered remotely. Our engineering team is based in Karachi.',
      },
    },
  ],
}

// ── Content data ─────────────────────────────────────────────────────────────

const pillars = [
  {
    number: '01',
    title: 'Practice Area Pages',
    desc: 'One dedicated page per practice area — criminal law, family law, corporate law, property, immigration, each one. Every page is written for the client searching that specific term on Google, with a clear call to action. Firms with 17 practice areas get 17 SEO-optimised landing pages.',
    icon: '📋',
  },
  {
    number: '02',
    title: 'Client Portal with Case Diary',
    desc: 'A secure login area where clients track their matter in real time. Case progress, upcoming hearings, filed documents, and messages from the firm — all in one place. No more chasing status updates by phone. Clients feel informed. Your team handles fewer interruptions.',
    icon: '🔐',
  },
  {
    number: '03',
    title: 'Online Consultation Booking',
    desc: 'Let clients book their first consultation directly from your website. They choose a time, confirm, and receive a reminder. You receive a structured brief with their details before the meeting. The entire flow happens without a single WhatsApp message or phone call.',
    icon: '📅',
  },
  {
    number: '04',
    title: 'Judgements Library & Case Search',
    desc: 'A searchable library of relevant judgements and legal resources that positions your firm as an authority before a client has even made contact. Judges, advocates, and clients can search your case history. It signals expertise that no generic law firm website can replicate.',
    icon: '⚖️',
  },
  {
    number: '05',
    title: 'SEO Built In, Not Bolted On',
    desc: 'Technical SEO is not something we add at the end. It is in the architecture from day one. Schema markup, canonical URLs, fast page loads, mobile-first design, structured content — every site we build is engineered to be found. YKC Legal was appearing on Google within two weeks.',
    icon: '🔍',
  },
]

const comparison = [
  {
    feature: 'Practice area pages',
    template: 'One generic page',
    tbd: 'One page per practice area, SEO-optimised',
  },
  {
    feature: 'Google ranking',
    template: 'No SEO — invisible',
    tbd: 'Technical SEO from day one. On Google in weeks',
  },
  {
    feature: 'Client enquiries',
    template: 'Phone number and email',
    tbd: 'Consultation booking system, WhatsApp, contact forms',
  },
  {
    feature: 'Client communication',
    template: 'WhatsApp and phone calls',
    tbd: 'Secure client portal with case diary and documents',
  },
  {
    feature: 'Firm authority',
    template: 'A list of services',
    tbd: 'Judgements library, case search, full team profiles',
  },
  {
    feature: 'Mobile experience',
    template: 'Desktop site scaled down',
    tbd: 'Mobile-first design — built for how Pakistan browses',
  },
  {
    feature: 'Bilingual',
    template: 'English only',
    tbd: 'English and Urdu with correct RTL typography',
  },
  {
    feature: 'Ownership',
    template: 'Template vendor owns the platform',
    tbd: 'You own the code, the content, and the domain',
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We learn your practice areas, your clients, and your goals. We audit any existing digital presence and identify the quick wins and the structural work.' },
  { step: '02', title: 'Architecture & Design', desc: 'Site map, page structure, and visual design — all built around how your clients search and what makes them trust a law firm. You approve before a line of code is written.' },
  { step: '03', title: 'Build', desc: 'We engineer the site on a modern, fast, secure stack. Every page built for performance. Every URL structured for search. Every interaction designed for mobile.' },
  { step: '04', title: 'Content & SEO', desc: 'Practice area content, team profiles, and metadata — written for both search engines and the clients reading them. Schema markup, sitemap, and Google Search Console submission included.' },
  { step: '05', title: 'Launch & Handover', desc: 'Staged deployment, final review, and a full handover. You get training on anything you manage yourself, documentation on how the site is structured, and our support contact.' },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function LawFirmWebsitesPakistanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(180deg, #09091a 0%, #0d0d22 100%)',
          paddingTop: '9rem', paddingBottom: '5.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-100px', left: '50%',
            transform: 'translateX(-50%)', width: '800px', height: '500px',
            borderRadius: '50%', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 65%)',
          }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            <Breadcrumb crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Pakistan', href: '/markets/pakistan' },
              { label: 'Law Firm Websites' },
            ]} />
            <div style={{ maxWidth: '820px', marginTop: '1.75rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.72rem',
                letterSpacing: '0.07em', textTransform: 'uppercase', color: '#f5c518',
                marginBottom: '1.25rem',
              }}>
                ⚖️ Law Firm Websites — Pakistan
              </div>
              <h1 style={{
                fontFamily: 'var(--font-inter)', fontWeight: 800,
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', lineHeight: 1.08,
                color: '#eceaf5', margin: '0 0 1.25rem', letterSpacing: '-0.03em',
              }}>
                The lawyer who buys the
                cheap template gets a website.
                <br />
                <span style={{ color: '#f5c518' }}>
                  The lawyer who comes to us gets something that works while they are in court.
                </span>
              </h1>
              <p style={{
                fontFamily: 'var(--font-inter)', fontWeight: 300,
                fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#9d99b8',
                lineHeight: 1.8, margin: '0 0 2.25rem', maxWidth: '680px',
              }}>
                Two Bit Digital builds complete digital presences for Pakistani law firms, advocates, and barristers.
                Not a template. Not a brochure. A system — with client portals, case search, consultation booking,
                and SEO that puts you in front of your next client before they have even picked up the phone.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.85rem',
                  letterSpacing: '0.03em', textTransform: 'uppercase',
                  color: '#09091a', backgroundColor: '#f5c518',
                  padding: '0.9rem 1.85rem', borderRadius: '6px', textDecoration: 'none',
                }}>
                  Discuss Your Firm →
                </Link>
                <Link href="#ykc-legal" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.85rem',
                  color: '#9d99b8', border: '1px solid rgba(255,255,255,0.12)',
                  padding: '0.9rem 1.85rem', borderRadius: '6px', textDecoration: 'none',
                }}>
                  See the YKC Legal Case Study
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust bar ────────────────────────────────────────────── */}
        <div style={{
          background: '#0a0a1e', borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '1.25rem 0',
        }}>
          <div style={{
            maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem',
            display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center',
          }}>
            {[
              'Karachi-based engineering team',
              'Live: YKC Legal — ykclegal.org',
              'On Google within 2 weeks',
              'Full code & IP ownership',
              'UK-registered studio',
            ].map((item) => (
              <span key={item} style={{
                fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.78rem',
                letterSpacing: '0.04em', textTransform: 'uppercase', color: '#5e5a7a',
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── The Problem ──────────────────────────────────────────── */}
        <section style={{ padding: '5rem 0', backgroundColor: '#09091a' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
              className="two-col-stack"
            >
              <div>
                <div style={{
                  fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.72rem',
                  letterSpacing: '0.07em', textTransform: 'uppercase', color: '#f5c518',
                  marginBottom: '1rem',
                }}>
                  The Problem
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-inter)', fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#eceaf5',
                  lineHeight: 1.15, margin: '0 0 1.5rem', letterSpacing: '-0.02em',
                }}>
                  Your reputation is strong.<br />
                  Your digital presence is invisible.
                </h2>
                <p style={{
                  fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1rem',
                  color: '#9d99b8', lineHeight: 1.85, margin: '0 0 1.25rem',
                }}>
                  In Pakistan, when a client needs a lawyer, they ask a contact for a recommendation
                  — or they search Google. If your firm is not on Google, that second group of potential
                  clients never finds you. They go to the firm that is there.
                </p>
                <p style={{
                  fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1rem',
                  color: '#9d99b8', lineHeight: 1.85, margin: '0 0 1.25rem',
                }}>
                  And even when a referred client does find you online, what do they see? A static page
                  with a phone number? A PDF profile? That is not how a firm with your calibre should
                  be presenting itself.
                </p>
                <p style={{
                  fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1rem',
                  color: '#9d99b8', lineHeight: 1.85, margin: 0,
                }}>
                  The firms winning new clients online are not necessarily better lawyers. They just
                  have better digital infrastructure. That is what we build.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { stat: '87%', label: 'of clients research a service provider online before making contact' },
                  { stat: '2 weeks', label: 'Time to first Google rankings for YKC Legal after launch' },
                  { stat: '0', label: 'Major Pakistani law firm competitors with a full digital presence' },
                ].map((item) => (
                  <div key={item.stat} style={{
                    background: '#11112b', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '10px', padding: '1.75rem',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-inter)', fontWeight: 800,
                      fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#f5c518',
                      letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.5rem',
                    }}>
                      {item.stat}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.9rem',
                      color: '#9d99b8', lineHeight: 1.6,
                    }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── YKC Legal Case Study ─────────────────────────────────── */}
        <section id="ykc-legal" style={{
          padding: '5.5rem 0', background: '#0d0d22',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
              <div style={{
                fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.72rem',
                letterSpacing: '0.07em', textTransform: 'uppercase', color: '#f5c518',
                marginBottom: '1rem',
              }}>
                Case Study — YKC Legal
              </div>
              <h2 style={{
                fontFamily: 'var(--font-inter)', fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#eceaf5',
                lineHeight: 1.15, margin: '0 0 1.25rem', letterSpacing: '-0.02em',
              }}>
                75 years of legal expertise. Zero digital presence. We changed that.
              </h2>
              <p style={{
                fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1rem',
                color: '#9d99b8', lineHeight: 1.85, margin: 0,
              }}>
                YKC Legal is one of Pakistan&apos;s oldest law firms — established in 1950, with generations of
                advocates across criminal, civil, family, corporate, and constitutional practice. Their reputation
                was built in courtrooms. Their digital presence was non-existent. Two Bit Digital built everything from scratch.
              </p>
            </div>

            {/* What we built grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.25rem', marginBottom: '3rem',
            }}>
              {[
                { label: '17 practice area pages', desc: 'Each optimised for the specific search terms clients use when looking for that type of lawyer.' },
                { label: 'Client portal', desc: 'Secure login area with case diary, document sharing, hearing dates, and firm communications.' },
                { label: 'Online consultation booking', desc: 'Clients book directly. Time slots, confirmations, and structured intake — no WhatsApp back-and-forth.' },
                { label: 'Judgements library', desc: 'Searchable repository of relevant case law. Signals authority before the first conversation.' },
                { label: 'Case search', desc: 'Clients and advocates can search the firm\'s case history by type, outcome, and jurisdiction.' },
                { label: 'Full team profiles', desc: 'Every advocate with qualifications, practice areas, and experience — building trust before contact.' },
              ].map((item) => (
                <div key={item.label} style={{
                  background: '#09091a', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px', padding: '1.5rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem',
                    color: '#f5c518', marginBottom: '0.5rem',
                  }}>
                    ✓ {item.label}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem',
                    color: '#9d99b8', lineHeight: 1.7, margin: 0,
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Outcome banner */}
            <div style={{
              background: 'rgba(245,197,24,0.05)', border: '1px solid rgba(245,197,24,0.2)',
              borderRadius: '12px', padding: '2.25rem 2.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '1.5rem',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-inter)', fontWeight: 700,
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#eceaf5',
                  marginBottom: '0.4rem',
                }}>
                  Appearing on Google within two weeks of launch.
                </div>
                <div style={{
                  fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.9rem',
                  color: '#9d99b8',
                }}>
                  Keyword footprint expanding. Ongoing SEO compounding.
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="https://ykclegal.org" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.82rem',
                  letterSpacing: '0.03em', textTransform: 'uppercase',
                  color: '#09091a', backgroundColor: '#f5c518',
                  padding: '0.75rem 1.5rem', borderRadius: '6px', textDecoration: 'none',
                }}>
                  Visit ykclegal.org ↗
                </Link>
                <Link href="/insights/ykc-legal-law-firm-website-pakistan" style={{
                  fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.82rem',
                  color: '#9d99b8', border: '1px solid rgba(255,255,255,0.12)',
                  padding: '0.75rem 1.5rem', borderRadius: '6px', textDecoration: 'none',
                }}>
                  Read the full case study →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── The 5 Pillars ────────────────────────────────────────── */}
        <section style={{ padding: '5.5rem 0', backgroundColor: '#09091a' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
              <div style={{
                fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.72rem',
                letterSpacing: '0.07em', textTransform: 'uppercase', color: '#f5c518',
                marginBottom: '1rem',
              }}>
                What We Build
              </div>
              <h2 style={{
                fontFamily: 'var(--font-inter)', fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#eceaf5',
                lineHeight: 1.15, margin: '0 0 1rem', letterSpacing: '-0.02em',
              }}>
                Five layers that turn a website into a working practice asset
              </h2>
              <p style={{
                fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1rem',
                color: '#9d99b8', lineHeight: 1.85, margin: 0,
              }}>
                Every firm gets a different combination depending on their practice and their clients.
                These are the five core layers we build from.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {pillars.map((p) => (
                <div key={p.number} style={{
                  background: '#11112b', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px', padding: '2.25rem',
                  display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem',
                  alignItems: 'start',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '2.5rem',
                    color: 'rgba(245,197,24,0.15)', letterSpacing: '-0.04em', lineHeight: 1,
                    minWidth: '3rem',
                  }}>
                    {p.number}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '1.25rem' }}>{p.icon}</span>
                      <h3 style={{
                        fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1.1rem',
                        color: '#eceaf5', margin: 0, letterSpacing: '-0.01em',
                      }}>
                        {p.title}
                      </h3>
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem',
                      color: '#9d99b8', lineHeight: 1.85, margin: 0,
                    }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison table ─────────────────────────────────────── */}
        <section style={{
          padding: '5.5rem 0', background: '#0d0d22',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '600px', marginBottom: '3rem' }}>
              <div style={{
                fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.72rem',
                letterSpacing: '0.07em', textTransform: 'uppercase', color: '#f5c518',
                marginBottom: '1rem',
              }}>
                The Difference
              </div>
              <h2 style={{
                fontFamily: 'var(--font-inter)', fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#eceaf5',
                lineHeight: 1.15, margin: 0, letterSpacing: '-0.02em',
              }}>
                Template vs. what we actually build
              </h2>
            </div>
            <div style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
              {/* Header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                background: '#11112b', padding: '1rem 1.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.78rem', color: '#5e5a7a', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Feature</span>
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.78rem', color: '#5e5a7a', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Cheap template</span>
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.78rem', color: '#f5c518', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Two Bit Digital</span>
              </div>
              {comparison.map((row, i) => (
                <div key={row.feature} style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                  padding: '1rem 1.5rem', alignItems: 'center',
                  background: i % 2 === 0 ? '#09091a' : '#0d0d22',
                  borderBottom: i < comparison.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                }}>
                  <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.88rem', color: '#eceaf5' }}>{row.feature}</span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: '#5e5a7a' }}>✗ {row.template}</span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.85rem', color: '#9d99b8' }}>✓ {row.tbd}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ──────────────────────────────────────────────── */}
        <section style={{ padding: '5.5rem 0', backgroundColor: '#09091a' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '600px', marginBottom: '3.5rem' }}>
              <div style={{
                fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.72rem',
                letterSpacing: '0.07em', textTransform: 'uppercase', color: '#f5c518',
                marginBottom: '1rem',
              }}>
                How We Work
              </div>
              <h2 style={{
                fontFamily: 'var(--font-inter)', fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#eceaf5',
                lineHeight: 1.15, margin: 0, letterSpacing: '-0.02em',
              }}>
                Five steps from brief to live on Google
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
              {process.map((p) => (
                <div key={p.step} style={{
                  background: '#11112b', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px', padding: '1.75rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '1.8rem',
                    color: 'rgba(245,197,24,0.2)', letterSpacing: '-0.04em', marginBottom: '1rem',
                  }}>
                    {p.step}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.95rem',
                    color: '#eceaf5', margin: '0 0 0.6rem',
                  }}>
                    {p.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem',
                    color: '#9d99b8', lineHeight: 1.75, margin: 0,
                  }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section style={{
          padding: '5.5rem 0', background: '#0d0d22',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3rem' }}>
              <div style={{
                fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.72rem',
                letterSpacing: '0.07em', textTransform: 'uppercase', color: '#f5c518',
                marginBottom: '1rem',
              }}>
                Frequently Asked Questions
              </div>
              <h2 style={{
                fontFamily: 'var(--font-inter)', fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#eceaf5',
                lineHeight: 1.15, margin: 0, letterSpacing: '-0.02em',
              }}>
                What Pakistani lawyers ask us most
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {faqJsonLd.mainEntity.map((faq) => (
                <div key={faq.name} style={{
                  background: '#09091a', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px', padding: '1.75rem',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1rem',
                    color: '#eceaf5', margin: '0 0 0.75rem', lineHeight: 1.4,
                  }}>
                    {faq.name}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.9rem',
                    color: '#9d99b8', lineHeight: 1.8, margin: 0,
                  }}>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related reading ───────────────────────────────────────── */}
        <section style={{ padding: '4rem 0', backgroundColor: '#09091a' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-inter)', fontWeight: 700,
              fontSize: '1.1rem', color: '#5e5a7a',
              margin: '0 0 1.5rem', letterSpacing: '0.04em', textTransform: 'uppercase',
            }}>
              Further Reading
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {[
                { href: '/insights/law-firm-website-pakistan-guide', label: 'Law Firm Websites in Pakistan: The Complete Guide' },
                { href: '/insights/law-firm-website-cost-pakistan', label: 'How Much Does a Law Firm Website Cost in Pakistan?' },
                { href: '/insights/ykc-legal-law-firm-website-pakistan', label: 'YKC Legal Case Study: 75-Year Firm Goes Digital' },
                { href: '/insights/what-law-firm-website-needs-pakistan', label: 'What Should a Pakistani Law Firm Website Include?' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: 'block', background: '#11112b',
                  border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px',
                  padding: '1.25rem 1.5rem', textDecoration: 'none',
                  fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.88rem',
                  color: '#9d99b8', lineHeight: 1.5,
                }}>
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          heading="Ready to build a law firm website that works while you are in court?"
          subtext="Tell us about your practice — what you do, where you work, and what you want your digital presence to achieve. We will come back with a clear scope and a fixed price."
          ctaLabel="Discuss Your Firm"
          ctaHref="/contact"
        />

      </main>
      <style>{`
        @media (max-width: 768px) {
          .two-col-stack { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
      <Footer />
    </>
  )
}

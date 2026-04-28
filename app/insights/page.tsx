import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import CTABanner from '@/components/shared/CTABanner'
import { insights } from '@/lib/insights'

export const metadata: Metadata = {
  title: 'Insights | SaaS, AI & Government Technology — Two Bit Digital',
  description:
    'Technical insights and industry analysis from Two Bit Digital. Covering SaaS architecture, AI integration for regulated industries, and UK government digital procurement.',
  alternates: {
    canonical: 'https://twobitdigital.com/insights',
    types: {
      'application/rss+xml': 'https://twobitdigital.com/feed.xml',
    },
  },
  openGraph: {
    title: 'Insights | SaaS, AI & Government Technology — Two Bit Digital',
    description:
      'Technical analysis, industry perspective, and hard-won lessons from building software for regulated markets.',
    url: 'https://twobitdigital.com/insights',
    type: 'website',
  },
  twitter: {
    title: 'Insights | SaaS, AI & Government Technology — Two Bit Digital',
    description:
      'Technical analysis, industry perspective, and hard-won lessons from building software for regulated markets.',
  },
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://twobitdigital.com/insights',
  url: 'https://twobitdigital.com/insights',
  name: 'Two Bit Digital Insights',
  description:
    'Technical analysis, industry perspective, and hard-won lessons from building software for regulated markets.',
  publisher: {
    '@type': 'Organization',
    name: 'Two Bit Digital',
    url: 'https://twobitdigital.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://twobitdigital.com/logo.png',
    },
  },
  blogPost: insights.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://twobitdigital.com/insights/${post.slug}`,
    datePublished: post.publishedAt,
    keywords: post.tags.join(', '),
    author: {
      '@type': 'Person',
      name: 'Muhammad Wasif',
      url: 'https://www.linkedin.com/in/muhammadwasiftbd/',
    },
  })),
}

export default function InsightsPage() {
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
            position:      'absolute',
            top:           '-120px',
            left:          '50%',
            transform:     'translateX(-50%)',
            width:         '800px',
            height:        '500px',
            borderRadius:  '50%',
            pointerEvents: 'none',
            background:    'radial-gradient(circle, rgba(245,197,24,0.05) 0%, transparent 65%)',
          }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Insights' }]} />

            <div style={{ maxWidth: '780px', marginTop: '1.5rem' }}>
              <div className="section-label">Insights</div>
              <h1 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(2.4rem, 5.5vw, 4rem)',
                lineHeight:    1.08,
                color:         '#eceaf5',
                margin:        '0.75rem 0 1.5rem',
                letterSpacing: '-0.03em',
              }}>
                Thinking Out Loud.
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
                Technical analysis, industry perspective, and hard-won lessons from building software
                for regulated markets.
              </p>
            </div>
          </div>
        </section>

        {/* ── Articles Grid ─────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          padding:         '5rem 0',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

            <style>{`
              .insights-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 2rem;
              }
              @media (min-width: 768px) {
                .insights-grid {
                  grid-template-columns: 1fr 1fr;
                }
              }
              .insight-card {
                background:    #11112b;
                border:        1px solid rgba(255,255,255,0.06);
                border-radius: 12px;
                padding:       2.25rem;
                display:       flex;
                flex-direction: column;
                gap:           1rem;
                transition:    border-color 0.25s ease, transform 0.25s ease;
                text-decoration: none;
                cursor:        pointer;
              }
              .insight-card:hover {
                border-color: #f5c518;
                transform:    translateY(-4px);
              }
            `}</style>

            <div className="insights-grid">
              {insights.map((post) => (
                <article key={post.slug} style={{ display: 'contents' }}>
                  <Link href={`/insights/${post.slug}`} className="insight-card">

                    {/* Category pill */}
                    <div>
                      <span style={{
                        display:      'inline-block',
                        fontFamily:   'var(--font-inter)',
                        fontWeight:   600,
                        fontSize:     '0.7rem',
                        letterSpacing:'0.06em',
                        textTransform:'uppercase',
                        color:        '#f5c518',
                        border:       '1px solid rgba(245,197,24,0.4)',
                        borderRadius: '4px',
                        padding:      '0.25rem 0.6rem',
                      }}>
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    700,
                      fontSize:      'clamp(1.15rem, 2.2vw, 1.4rem)',
                      color:         '#eceaf5',
                      lineHeight:    1.3,
                      margin:        0,
                      letterSpacing: '-0.02em',
                    }}>
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 300,
                      fontSize:   '0.95rem',
                      color:      '#9d99b8',
                      lineHeight: 1.75,
                      margin:     0,
                      flexGrow:   1,
                    }}>
                      {post.excerpt}
                    </p>

                    {/* Metadata row */}
                    <div style={{
                      display:    'flex',
                      alignItems: 'center',
                      gap:        '1rem',
                      flexWrap:   'wrap',
                      paddingTop: '0.5rem',
                      borderTop:  '1px solid rgba(255,255,255,0.05)',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize:   '0.8rem',
                        color:      '#5e5a7a',
                        fontWeight: 400,
                      }}>
                        {formatDate(post.publishedAt)}
                      </span>
                      <span style={{ color: '#5e5a7a', fontSize: '0.7rem' }}>·</span>
                      <span style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize:   '0.8rem',
                        color:      '#5e5a7a',
                        fontWeight: 400,
                      }}>
                        {post.readTime}
                      </span>
                    </div>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {post.tags.map((tag) => (
                        <span key={tag} style={{
                          fontFamily:   'var(--font-inter)',
                          fontSize:     '0.7rem',
                          fontWeight:   500,
                          color:        '#5e5a7a',
                          background:   'rgba(255,255,255,0.04)',
                          border:       '1px solid rgba(255,255,255,0.06)',
                          borderRadius: '4px',
                          padding:      '0.2rem 0.5rem',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA link */}
                    <div style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    600,
                      fontSize:      '0.85rem',
                      color:         '#f5c518',
                      letterSpacing: '0.01em',
                      marginTop:     '0.25rem',
                    }}>
                      Read Article →
                    </div>

                  </Link>
                </article>
              ))}
            </div>

            {/* Bottom note */}
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize:   '0.9rem',
              color:      '#5e5a7a',
              textAlign:  'center',
              marginTop:  '3.5rem',
              fontStyle:  'italic',
            }}>
              We publish when we have something worth saying.
            </p>

          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────────────────────── */}
        <CTABanner
          heading="Have a project that needs this expertise?"
          subtext="We build software for regulated industries. If what you read resonates, we would like to hear about your brief."
          ctaLabel="Start a Conversation"
          ctaHref="/contact"
        />

      </main>
      <Footer />
    </>
  )
}

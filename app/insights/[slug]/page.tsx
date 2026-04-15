import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import CTABanner from '@/components/shared/CTABanner'
import RelatedArticles from './RelatedArticles'
import { insights, getInsight } from '@/lib/insights'
import type { InsightPost } from '@/lib/insights'

// ── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }))
}

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getInsight(params.slug)
  if (!post) return {}

  return {
    title:       post.metaTitle,
    description: post.metaDesc,
    alternates: {
      canonical: `https://twobitdigital.com/insights/${post.slug}`,
    },
    openGraph: {
      title:       post.metaTitle,
      description: post.metaDesc,
      url:         `https://twobitdigital.com/insights/${post.slug}`,
      type:        'article',
      publishedTime: post.publishedAt,
      tags:        post.tags,
    },
    twitter: {
      title:       post.metaTitle,
      description: post.metaDesc,
    },
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

// ── Content renderer ─────────────────────────────────────────────────────────

function ArticleContent({ content }: { content: InsightPost['content'] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {content.map((section, i) => {
        switch (section.type) {

          case 'intro':
            return (
              <p key={i} style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 400,
                fontSize:   '1.1rem',
                color:      '#9d99b8',
                lineHeight: 1.9,
                margin:     '0 0 1.75rem',
              }}>
                {section.text}
              </p>
            )

          case 'h2':
            return (
              <div key={i} style={{ marginTop: '2.5rem', marginBottom: section.text ? '1rem' : '1.25rem' }}>
                <h2 style={{
                  fontFamily:   'var(--font-inter)',
                  fontWeight:   700,
                  fontSize:     'clamp(1.2rem, 2.5vw, 1.5rem)',
                  color:        '#eceaf5',
                  lineHeight:   1.3,
                  margin:       0,
                  paddingLeft:  '1rem',
                  borderLeft:   '3px solid #f5c518',
                  letterSpacing:'-0.02em',
                }}>
                  {section.heading}
                </h2>
                {section.text && (
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontSize:   '1rem',
                    color:      '#9d99b8',
                    lineHeight: 1.9,
                    margin:     '1rem 0 0',
                  }}>
                    {section.text}
                  </p>
                )}
              </div>
            )

          case 'h3':
            return (
              <div key={i} style={{ marginTop: '2rem', marginBottom: section.text ? '0.75rem' : '1rem' }}>
                <h3 style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    600,
                  fontSize:      'clamp(1.05rem, 2vw, 1.25rem)',
                  color:         '#eceaf5',
                  lineHeight:    1.35,
                  margin:        0,
                  letterSpacing: '-0.01em',
                }}>
                  {section.heading}
                </h3>
                {section.text && (
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontSize:   '1rem',
                    color:      '#9d99b8',
                    lineHeight: 1.9,
                    margin:     '0.75rem 0 0',
                  }}>
                    {section.text}
                  </p>
                )}
              </div>
            )

          case 'p':
            return (
              <p key={i} style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 400,
                fontSize:   '1rem',
                color:      '#9d99b8',
                lineHeight: 1.9,
                margin:     '1.25rem 0 0',
              }}>
                {section.text}
              </p>
            )

          case 'ul':
            return (
              <ul key={i} style={{
                listStyle:   'none',
                padding:     0,
                margin:      '1.25rem 0 0',
                display:     'flex',
                flexDirection:'column',
                gap:         '0.65rem',
              }}>
                {section.items?.map((item, j) => (
                  <li key={j} style={{
                    display:    'flex',
                    alignItems: 'flex-start',
                    gap:        '0.75rem',
                    fontFamily: 'var(--font-inter)',
                    fontSize:   '1rem',
                    color:      '#9d99b8',
                    lineHeight: 1.8,
                  }}>
                    <span style={{
                      color:      '#f5c518',
                      fontWeight: 700,
                      fontSize:   '1.1rem',
                      lineHeight: 1.6,
                      flexShrink: 0,
                      marginTop:  '0.05rem',
                    }}>
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )

          case 'ol':
            return (
              <ol key={i} style={{
                listStyle: 'none',
                padding:   0,
                margin:    '1.25rem 0 0',
                display:   'flex',
                flexDirection: 'column',
                gap:       '0.65rem',
                counterReset: 'ol-counter',
              }}>
                {section.items?.map((item, j) => (
                  <li key={j} style={{
                    display:    'flex',
                    alignItems: 'flex-start',
                    gap:        '0.85rem',
                    fontFamily: 'var(--font-inter)',
                    fontSize:   '1rem',
                    color:      '#9d99b8',
                    lineHeight: 1.8,
                  }}>
                    <span style={{
                      color:        '#f5c518',
                      fontWeight:   700,
                      fontSize:     '0.85rem',
                      fontVariant:  'tabular-nums',
                      minWidth:     '1.4rem',
                      lineHeight:   1.8,
                      flexShrink:   0,
                    }}>
                      {String(j + 1).padStart(2, '0')}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            )

          case 'callout':
            return (
              <aside key={i} style={{
                background:   'rgba(245,197,24,0.06)',
                borderLeft:   '3px solid #f5c518',
                borderRadius: '0 8px 8px 0',
                padding:      '1.25rem 1.5rem',
                margin:       '2rem 0 0',
              }}>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                  fontSize:   '0.95rem',
                  color:      '#9d99b8',
                  lineHeight: 1.85,
                  margin:     0,
                  fontStyle:  'italic',
                }}>
                  {section.text}
                </p>
              </aside>
            )

          case 'cta':
            return (
              <div key={i} style={{
                background:   'rgba(245,197,24,0.04)',
                border:       '1px solid rgba(245,197,24,0.25)',
                borderRadius: '10px',
                padding:      '2rem 2.25rem',
                margin:       '2.5rem 0 0',
                textAlign:    'center',
              }}>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                  fontSize:   '0.95rem',
                  color:      '#9d99b8',
                  lineHeight: 1.85,
                  margin:     '0 0 1.25rem',
                }}>
                  {section.text}
                </p>
                <Link
                  href="/contact"
                  style={{
                    display:         'inline-flex',
                    alignItems:      'center',
                    gap:             '0.4rem',
                    fontFamily:      'var(--font-inter)',
                    fontWeight:      700,
                    fontSize:        '0.85rem',
                    letterSpacing:   '0.03em',
                    textTransform:   'uppercase',
                    color:           '#09091a',
                    backgroundColor: '#f5c518',
                    padding:         '0.8rem 1.75rem',
                    borderRadius:    '6px',
                    textDecoration:  'none',
                  }}
                >
                  Get In Touch →
                </Link>
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getInsight(params.slug)
  if (!post) notFound()

  const related = insights.filter((p) => p.slug !== post.slug)

  const jsonLd = {
    '@context':   'https://schema.org',
    '@type':      'Article',
    headline:     post.title,
    description:  post.excerpt,
    url:          `https://twobitdigital.com/insights/${post.slug}`,
    datePublished: post.publishedAt,
    keywords:     post.tags.join(', '),
    inLanguage:   'en-GB',
    author: {
      '@type': 'Person',
      name:    'Muhammad Wasif',
      url:     'https://www.linkedin.com/in/muhammadwasiftbd/',
      jobTitle:'Founder & CEO',
      worksFor: {
        '@type': 'Organization',
        name:    'Two Bit Digital',
        url:     'https://twobitdigital.com',
      },
    },
    publisher: {
      '@type': 'Organization',
      name:    'Two Bit Digital',
      url:     'https://twobitdigital.com',
      logo: {
        '@type': 'ImageObject',
        url:     'https://twobitdigital.com/logo.png',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>

        {/* ── Article header ────────────────────────────────────────── */}
        <section style={{
          background:    'linear-gradient(180deg, #09091a 0%, #0d0d22 100%)',
          paddingTop:    '9rem',
          paddingBottom: '3rem',
          borderBottom:  '1px solid rgba(255,255,255,0.06)',
          position:      'relative',
          overflow:      'hidden',
        }}>
          {/* Ambient glow */}
          <div style={{
            position:      'absolute',
            top:           '-100px',
            left:          '50%',
            transform:     'translateX(-50%)',
            width:         '700px',
            height:        '450px',
            borderRadius:  '50%',
            pointerEvents: 'none',
            background:    'radial-gradient(circle, rgba(245,197,24,0.05) 0%, transparent 65%)',
          }} />

          <div style={{
            maxWidth:  '760px',
            margin:    '0 auto',
            padding:   '0 1.5rem',
            position:  'relative',
            zIndex:    1,
          }}>
            <Breadcrumb crumbs={[
              { label: 'Home',     href: '/' },
              { label: 'Insights', href: '/insights' },
              { label: post.title },
            ]} />

            {/* Category pill */}
            <div style={{ marginTop: '1.75rem', marginBottom: '1.25rem' }}>
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
                padding:      '0.25rem 0.65rem',
              }}>
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily:    'var(--font-inter)',
              fontWeight:    800,
              fontSize:      'clamp(2rem, 4.5vw, 3rem)',
              lineHeight:    1.1,
              color:         '#eceaf5',
              margin:        '0 0 1.75rem',
              letterSpacing: '-0.03em',
            }}>
              {post.title}
            </h1>

            {/* Meta row */}
            <div style={{
              display:    'flex',
              alignItems: 'center',
              flexWrap:   'wrap',
              gap:        '0.75rem',
              paddingBottom: '0.25rem',
            }}>
              <span style={{
                fontFamily: 'var(--font-inter)',
                fontSize:   '0.85rem',
                color:      '#5e5a7a',
                fontWeight: 400,
              }}>
                {formatDate(post.publishedAt)}
              </span>
              <span style={{ color: '#5e5a7a', fontSize: '0.7rem' }}>·</span>
              <span style={{
                fontFamily: 'var(--font-inter)',
                fontSize:   '0.85rem',
                color:      '#5e5a7a',
                fontWeight: 400,
              }}>
                {post.readTime}
              </span>
              <span style={{ color: '#5e5a7a', fontSize: '0.7rem' }}>·</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {post.tags.map((tag) => (
                  <span key={tag} style={{
                    fontFamily:   'var(--font-inter)',
                    fontSize:     '0.7rem',
                    fontWeight:   500,
                    color:        '#5e5a7a',
                    background:   'rgba(255,255,255,0.04)',
                    border:       '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '4px',
                    padding:      '0.2rem 0.5rem',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Article body ──────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          padding:         '4rem 0 5rem',
        }}>
          <div style={{
            maxWidth: '720px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <ArticleContent content={post.content} />
          </div>
        </section>

        {/* ── Author block ──────────────────────────────────────────── */}
        <section style={{
          borderTop:    '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding:      '3rem 0',
          background:   '#0d0d22',
        }}>
          <div style={{
            maxWidth: '720px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{
              display:    'flex',
              alignItems: 'center',
              gap:        '1.25rem',
            }}>
              {/* Avatar */}
              <div style={{
                width:          '54px',
                height:         '54px',
                borderRadius:   '50%',
                background:     'rgba(245,197,24,0.12)',
                border:         '2px solid rgba(245,197,24,0.3)',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                flexShrink:     0,
              }}>
                <span style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 700,
                  fontSize:   '1rem',
                  color:      '#f5c518',
                  letterSpacing: '0.02em',
                }}>
                  MW
                </span>
              </div>

              {/* Info */}
              <div>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 700,
                  fontSize:   '1rem',
                  color:      '#eceaf5',
                  marginBottom: '0.2rem',
                }}>
                  Muhammad Wasif
                </div>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                  fontSize:   '0.85rem',
                  color:      '#9d99b8',
                  marginBottom: '0.5rem',
                }}>
                  Founder &amp; CEO, Two Bit Digital
                </div>
                <Link
                  href="https://www.linkedin.com/in/muhammadwasiftbd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    600,
                    fontSize:      '0.78rem',
                    color:         '#7b5ea7',
                    textDecoration:'none',
                    letterSpacing: '0.01em',
                  }}
                >
                  LinkedIn ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related articles ──────────────────────────────────────── */}
        {related.length > 0 && (
          <section style={{
            backgroundColor: '#09091a',
            padding:         '4.5rem 0',
          }}>
            <div style={{
              maxWidth: '720px',
              margin:   '0 auto',
              padding:  '0 1.5rem',
            }}>
              <h2 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    700,
                fontSize:      'clamp(1.2rem, 2.5vw, 1.5rem)',
                color:         '#eceaf5',
                margin:        '0 0 2rem',
                letterSpacing: '-0.02em',
              }}>
                More From Our Insights
              </h2>

              <RelatedArticles posts={related} />
            </div>
          </section>
        )}

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

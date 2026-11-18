import Link from 'next/link'
import { insights } from '@/lib/insights'
import { Icon, type IconName } from '@/components/shared/Icon'

const CATEGORY_ICON: Record<string, IconName> = {
  'Legal Technology':  'shield',
  'Trade Technology':  'growth',
  'AI Engineering':    'sparkles',
  'SaaS Development':  'rocket',
  'MVP Development':   'rocket',
  'Event Technology':  'devices',
  'Engineering':       'code',
  'CRM & ERP':         'sliders',
}

const FEATURED = [
  'what-are-ai-workflows',
  'commodity-trading-erp-software-guide',
  'law-firm-digital-transformation-guide',
  'event-management-software-guide-2025',
  'how-to-build-a-saas-mvp',
  'law-firm-website-pakistan-guide',
]

export default function FeaturedInsights() {
  const posts = FEATURED.map((slug) => insights.find((p) => p.slug === slug)).filter(
    (p): p is (typeof insights)[number] => Boolean(p),
  )
  if (posts.length === 0) return null

  return (
    <section style={{ background: '#0d0d22', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Insights</div>
          <h2 style={{
            fontFamily: 'var(--font-inter)', fontWeight: 800,
            fontSize: 'clamp(1.75rem, 4vw, 2.4rem)', color: '#eceaf5',
            letterSpacing: '-0.025em', lineHeight: 1.2, margin: '0.75rem 0 1rem',
          }}>
            Guides from the engineering desk
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1rem',
            color: '#9d99b8', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto',
          }}>
            Practical guides on SaaS, AI workflows, legal tech, event technology and commodity-trading software.
          </p>
        </div>

        <div className="fi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              style={{
                display: 'block', textDecoration: 'none', background: '#11112b',
                border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '1.75rem',
              }}
            >
              <div style={{
                position: 'relative', overflow: 'hidden', height: '92px', margin: '-1.75rem -1.75rem 1.4rem',
                padding: '0 1.75rem', display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#f5c518',
                background: 'linear-gradient(135deg, rgba(123,94,167,0.32) 0%, rgba(245,197,24,0.1) 100%)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}>
                <span aria-hidden="true" style={{ position: 'absolute', right: '-14px', bottom: '-22px', opacity: 0.12 }}>
                  <Icon name={CATEGORY_ICON[post.category] ?? 'code'} size={120} />
                </span>
                <span style={{
                  width: 40, height: 40, borderRadius: 11, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: 'rgba(9,9,26,0.55)', border: '1px solid rgba(245,197,24,0.3)',
                }}>
                  <Icon name={CATEGORY_ICON[post.category] ?? 'code'} size={20} />
                </span>
                <span style={{
                  fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.68rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>
                  {post.category} · {post.readTime}
                </span>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1.02rem',
                color: '#eceaf5', lineHeight: 1.4, letterSpacing: '-0.01em', margin: '0 0 0.6rem',
              }}>
                {post.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.86rem',
                color: '#9d99b8', lineHeight: 1.7, margin: 0,
              }}>
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/insights" style={{
            fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.88rem',
            color: '#f5c518', textDecoration: 'none',
          }}>
            Read all insights →
          </Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .fi-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .fi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

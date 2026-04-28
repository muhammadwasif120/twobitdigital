import { ImageResponse } from 'next/og'
import { getInsight, insights } from '@/lib/insights'

export const runtime     = 'edge'
export const alt         = 'Two Bit Digital Insights'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

// ── Pre-render one image per article at build time ───────────────────────────
export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }))
}

// ── Image ────────────────────────────────────────────────────────────────────
export default async function OGImage({ params }: { params: { slug: string } }) {
  const post = getInsight(params.slug)

  // Fallback for unknown slug
  const title    = post?.title    ?? 'Two Bit Digital Insights'
  const excerpt  = post?.excerpt  ?? 'Technical insights from Two Bit Digital.'
  const category = post?.category ?? 'Insights'
  const readTime = post?.readTime ?? ''

  // Truncate long titles and excerpts for the image layout
  const displayTitle   = title.length   > 72 ? title.slice(0, 69)   + '…' : title
  const displayExcerpt = excerpt.length > 140 ? excerpt.slice(0, 137) + '…' : excerpt

  return new ImageResponse(
    (
      <div
        style={{
          width:           '100%',
          height:          '100%',
          display:         'flex',
          flexDirection:   'column',
          justifyContent:  'space-between',
          backgroundColor: '#09091a',
          padding:         '56px 64px',
          fontFamily:      'sans-serif',
          position:        'relative',
          overflow:        'hidden',
        }}
      >
        {/* ── Background glow effects ─────────────────────────────────── */}
        <div style={{
          position:     'absolute',
          top:          '-120px',
          right:        '-80px',
          width:        '480px',
          height:       '480px',
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(123,94,167,0.22) 0%, transparent 70%)',
          display:      'flex',
        }} />
        <div style={{
          position:     'absolute',
          bottom:       '-80px',
          left:         '-60px',
          width:        '380px',
          height:       '380px',
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 70%)',
          display:      'flex',
        }} />
        {/* Subtle grid pattern overlay */}
        <div style={{
          position:   'absolute',
          inset:      0,
          background: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          display:    'flex',
        }} />

        {/* ── Top bar — wordmark + category badge ─────────────────────── */}
        <div style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'center',
          position:       'relative',
          zIndex:         1,
        }}>
          {/* Wordmark */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0' }}>
            <span style={{
              fontSize:      '26px',
              fontWeight:    700,
              color:         '#eceaf5',
              letterSpacing: '-0.8px',
            }}>
              Two Bit
            </span>
            <span style={{
              fontSize:      '26px',
              fontWeight:    700,
              color:         '#f5c518',
              letterSpacing: '-0.8px',
              marginLeft:    '7px',
            }}>
              Digital
            </span>
          </div>

          {/* Category badge */}
          <div style={{
            display:         'flex',
            alignItems:      'center',
            gap:             '8px',
          }}>
            <div style={{
              fontSize:        '12px',
              fontWeight:      600,
              color:           '#f5c518',
              backgroundColor: 'rgba(245,197,24,0.1)',
              border:          '1px solid rgba(245,197,24,0.35)',
              padding:         '6px 16px',
              borderRadius:    '4px',
              letterSpacing:   '0.06em',
              textTransform:   'uppercase',
              display:         'flex',
            }}>
              {category}
            </div>
            {readTime && (
              <div style={{
                fontSize:        '12px',
                fontWeight:      500,
                color:           '#5e5a7a',
                backgroundColor: '#11112b',
                border:          '1px solid rgba(255,255,255,0.07)',
                padding:         '6px 14px',
                borderRadius:    '4px',
                display:         'flex',
              }}>
                {readTime}
              </div>
            )}
          </div>
        </div>

        {/* ── Middle — article title ───────────────────────────────────── */}
        <div style={{
          display:        'flex',
          flexDirection:  'column',
          gap:            '20px',
          position:       'relative',
          zIndex:         1,
          flex:           1,
          justifyContent: 'center',
          padding:        '32px 0',
        }}>
          {/* Accent line */}
          <div style={{
            display:         'flex',
            width:           '48px',
            height:          '4px',
            backgroundColor: '#f5c518',
            borderRadius:    '2px',
          }} />

          {/* Title */}
          <div style={{
            fontSize:      displayTitle.length > 55 ? '36px' : '44px',
            fontWeight:    800,
            color:         '#eceaf5',
            lineHeight:    1.15,
            letterSpacing: '-1.5px',
            display:       'flex',
            flexWrap:      'wrap',
          }}>
            {displayTitle}
          </div>

          {/* Excerpt */}
          <div style={{
            fontSize:   '18px',
            fontWeight: 300,
            color:      '#9d99b8',
            lineHeight: 1.6,
            maxWidth:   '820px',
            display:    'flex',
          }}>
            {displayExcerpt}
          </div>
        </div>

        {/* ── Bottom — domain + credential badges ─────────────────────── */}
        <div style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'center',
          position:       'relative',
          zIndex:         1,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width:           '6px',
              height:          '6px',
              borderRadius:    '50%',
              backgroundColor: '#f5c518',
              display:         'flex',
            }} />
            <span style={{
              fontSize:    '15px',
              fontWeight:  500,
              color:       '#5e5a7a',
              letterSpacing: '0.01em',
            }}>
              twobitdigital.com/insights
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {['UN Vendor', 'D&B D-U-N-S', 'Co. 14710072'].map((badge) => (
              <div key={badge} style={{
                fontSize:        '11px',
                fontWeight:      600,
                color:           '#5e5a7a',
                backgroundColor: '#11112b',
                border:          '1px solid rgba(255,255,255,0.07)',
                padding:         '5px 11px',
                borderRadius:    '999px',
                display:         'flex',
              }}>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

'use client'

import Link from 'next/link'

const partners = [
  {
    name:     'Google Cloud',
    label:    'Partner Advantage Member',
    href:     '/partners/google-cloud',
    color:    '#4285F4',
    dots:     ['#4285F4', '#EA4335', '#FBBC05', '#34A853'],
    since:    'Jun 2026',
  },
  {
    name:     'Meta',
    label:    'Verified Tech Provider',
    href:     '/partners/meta',
    color:    '#0082FB',
    dots:     ['#0082FB'],
    since:    'Apr 2026',
  },
  {
    name:     'Supabase',
    label:    'Technology Partner',
    href:     '/partners/supabase',
    color:    '#3ECF8E',
    dots:     ['#3ECF8E'],
    since:    '2025',
  },
]

export default function PartnerStrip() {
  return (
    <div style={{
      backgroundColor: '#09091a',
      borderBottom:    '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin:   '0 auto',
        padding:  '0 1.5rem',
      }}>
        {/* Label row */}
        <div style={{
          display:       'flex',
          alignItems:    'center',
          gap:           '1rem',
          paddingTop:    '1.5rem',
          paddingBottom: '1rem',
        }}>
          <span style={{
            fontFamily:    'var(--font-inter)',
            fontWeight:    600,
            fontSize:      '0.65rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color:         '#3a3860',
          }}>
            Technology Partnerships
          </span>
          <div style={{
            flex:            1,
            height:          '1px',
            backgroundColor: 'rgba(255,255,255,0.04)',
          }} />
        </div>

        {/* Partner badges */}
        <div className="partner-strip-grid" style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap:                 '1px',
          paddingBottom:       '1.5rem',
        }}>
          {partners.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              style={{
                display:        'flex',
                alignItems:     'center',
                gap:            '1rem',
                padding:        '1rem 1.25rem',
                borderRadius:   '10px',
                textDecoration: 'none',
                border:         `1px solid rgba(255,255,255,0.0)`,
                transition:     'border-color 0.2s ease, background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = `${p.color}08`
                ;(e.currentTarget as HTMLElement).style.borderColor = `${p.color}25`
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.0)'
              }}
            >
              {/* Brand colour indicator */}
              <div style={{
                display:  'flex',
                gap:      '3px',
                flexShrink: 0,
                alignItems: 'center',
              }}>
                {p.dots.map((c, di) => (
                  <div key={di} style={{
                    width:           p.dots.length > 1 ? '7px' : '10px',
                    height:          p.dots.length > 1 ? '7px' : '10px',
                    borderRadius:    '50%',
                    backgroundColor: c,
                    opacity:         0.9,
                  }} />
                ))}
              </div>

              {/* Text */}
              <div>
                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    700,
                  fontSize:      '0.85rem',
                  color:         '#eceaf5',
                  margin:        '0 0 0.15rem',
                  letterSpacing: '-0.01em',
                }}>
                  {p.name}
                </p>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                  fontSize:   '0.72rem',
                  color:      '#5e5a7a',
                  margin:     0,
                }}>
                  {p.label}
                  <span style={{ margin: '0 0.35rem', opacity: 0.4 }}>·</span>
                  {p.since}
                </p>
              </div>

              {/* Verified tick */}
              <div style={{
                marginLeft:      'auto',
                backgroundColor: `${p.color}14`,
                border:          `1px solid ${p.color}30`,
                borderRadius:    '4px',
                padding:         '0.15rem 0.5rem',
                flexShrink:      0,
              }}>
                <span style={{
                  fontFamily:   'var(--font-inter)',
                  fontWeight:   600,
                  fontSize:     '0.62rem',
                  color:        p.color,
                  letterSpacing:'0.04em',
                }}>
                  ✓ Verified
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .partner-strip-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

'use client'

const credentials = [
  {
    label: 'UN Global Marketplace',
    value: 'Vendor No. 1177996',
    icon:  '🌐',
    href:  null,
  },
  {
    label: 'D&B D-U-N-S®',
    value: 'No. 77-532-7428',
    icon:  '◈',
    href:  null,
  },
  {
    label: 'UK Companies House',
    value: 'Co. No. 14710072',
    icon:  '🇬🇧',
    href:  'https://find-and-update.company-information.service.gov.uk/company/14710072',
  },
  {
    label: 'PK Registration (SECP)',
    value: 'CUIN: 0250598',
    icon:  '🇵🇰',
    href:  null,
  },
]

export default function TrustStrip() {
  return (
    <div style={{
      backgroundColor: '#0d0d22',
      borderTop:       '1px solid rgba(255,255,255,0.06)',
      borderBottom:    '1px solid rgba(255,255,255,0.06)',
      position:        'relative',
      zIndex:          1,
    }}>
      <div style={{
        maxWidth:            '1200px',
        margin:              '0 auto',
        padding:             '0 1.5rem',
        display:             'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
      className="trust-grid"
      >
        {credentials.map((item, i) => {
          const inner = (
            <>
              <span style={{ fontSize: '1.1rem', flexShrink: 0, opacity: 0.9 }}>
                {item.icon}
              </span>
              <div>
                <p style={{
                  fontFamily:   'var(--font-inter)',
                  fontSize:     '0.68rem',
                  fontWeight:   600,
                  letterSpacing:'0.06em',
                  textTransform:'uppercase',
                  color:        '#5e5a7a',
                  margin:       '0 0 0.2rem',
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize:   '0.85rem',
                  fontWeight: 500,
                  color:      item.href ? '#f5c518' : '#9d99b8',
                  margin:     0,
                  display:    'flex',
                  alignItems: 'center',
                  gap:        '0.3rem',
                }}>
                  {item.value}
                  {item.href && (
                    <span style={{ fontSize: '0.65rem', opacity: 0.7 }}>↗</span>
                  )}
                </p>
              </div>
            </>
          )

          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${item.label} registration (opens gov.uk)`}
              style={{
                display:        'flex',
                alignItems:     'center',
                gap:            '0.85rem',
                padding:        '1.25rem 1.5rem',
                borderRight:    i < credentials.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                textDecoration: 'none',
                transition:     'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(245,197,24,0.03)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'transparent')}
            >
              {inner}
            </a>
          ) : (
            <div
              key={item.label}
              style={{
                display:     'flex',
                alignItems:  'center',
                gap:         '0.85rem',
                padding:     '1.25rem 1.5rem',
                borderRight: i < credentials.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              {inner}
            </div>
          )
        })}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .trust-grid > div:nth-child(2),
          .trust-grid > a:nth-child(2) { border-right: none !important; }
          .trust-grid > div:nth-child(3),
          .trust-grid > a:nth-child(3) { border-top: 1px solid rgba(255,255,255,0.06); }
          .trust-grid > div:nth-child(4),
          .trust-grid > a:nth-child(4) { border-top: 1px solid rgba(255,255,255,0.06); border-right: none !important; }
        }
        @media (max-width: 500px) {
          .trust-grid { grid-template-columns: 1fr !important; }
          .trust-grid > div,
          .trust-grid > a { border-right: none !important; border-top: 1px solid rgba(255,255,255,0.06); }
          .trust-grid > div:first-child,
          .trust-grid > a:first-child { border-top: none; }
        }
      `}</style>
    </div>
  )
}

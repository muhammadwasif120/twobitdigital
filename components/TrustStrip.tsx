const credentials = [
  {
    label: 'UN Global Marketplace',
    value: 'Vendor No. 1177996',
    icon: '🌐',
  },
  {
    label: 'D&B D-U-N-S®',
    value: 'No. 77-532-7428',
    icon: '◈',
  },
  {
    label: 'UK Companies House',
    value: 'Co. No. 14710072',
    icon: '🇬🇧',
  },
  {
    label: 'PK Registration (SECP)',
    value: 'CUIN: 0250598',
    icon: '🇵🇰',
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
        {credentials.map((item, i) => (
          <div
            key={item.label}
            style={{
              display:        'flex',
              alignItems:     'center',
              gap:            '0.85rem',
              padding:        '1.25rem 1.5rem',
              borderRight:    i < credentials.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}
          >
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
                color:      '#9d99b8',
                margin:     0,
              }}>
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .trust-grid > div:nth-child(2) { border-right: none !important; }
          .trust-grid > div:nth-child(3) { border-top: 1px solid rgba(255,255,255,0.06); }
          .trust-grid > div:nth-child(4) { border-top: 1px solid rgba(255,255,255,0.06); border-right: none !important; }
        }
        @media (max-width: 500px) {
          .trust-grid { grid-template-columns: 1fr !important; }
          .trust-grid > div { border-right: none !important; border-top: 1px solid rgba(255,255,255,0.06); }
          .trust-grid > div:first-child { border-top: none; }
        }
      `}</style>
    </div>
  )
}

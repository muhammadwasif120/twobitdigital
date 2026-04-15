export default function Ticker() {
  const items = [
    'Web Development',
    'Mobile Applications',
    'AI Integration',
    'SaaS Architecture',
    'Government Tenders',
    'Cloud Infrastructure',
    'Legal Tech',
    'RegTech Solutions',
    'Event Technology',
    'Document Intelligence',
  ]

  const content = [...items, ...items] // duplicate for seamless loop

  return (
    <div style={{
      backgroundColor: '#0d0d22',
      borderTop:       '1px solid rgba(255,255,255,0.06)',
      borderBottom:    '1px solid rgba(255,255,255,0.06)',
      overflow:        'hidden',
      padding:         '1rem 0',
      position:        'relative',
      zIndex:          1,
    }}>
      <div className="ticker-track">
        {content.map((item, i) => (
          <span key={i} style={{
            display:      'inline-flex',
            alignItems:   'center',
            gap:          '1.5rem',
            paddingRight: '3rem',
            whiteSpace:   'nowrap',
            fontFamily:   'var(--font-inter)',
            fontWeight:   700,
            fontSize:     '0.8rem',
            letterSpacing:'0.1em',
            textTransform:'uppercase',
            color:        '#5e5a7a',
          }}>
            {item}
            <span style={{ color: '#f5c518', fontSize: '0.5rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

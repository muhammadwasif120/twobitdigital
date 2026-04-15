'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      backgroundColor: '#09091a',
      borderTop:       '1px solid rgba(255,255,255,0.06)',
      padding:         '4rem 0 0',
      position:        'relative',
      zIndex:          1,
    }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 1.5rem' }}>
        <div style={{
          display:             'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap:                 '2.5rem',
          marginBottom:        '3rem',
        }}
        className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <a href="#" style={{
              fontFamily:     'var(--font-syne)',
              fontWeight:     800,
              fontSize:       '1.1rem',
              color:          '#eceaf5',
              textDecoration: 'none',
              display:        'inline-block',
              marginBottom:   '1rem',
            }}>
              Two<span style={{ color:'#f5c518' }}>[</span>Bit<span style={{ color:'#f5c518' }}>]</span>Digital
            </a>
            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 300,
              fontSize:   '0.875rem',
              color:      '#5e5a7a',
              lineHeight: 1.75,
              marginBottom:'1.25rem',
              maxWidth:   '280px',
            }}>
              A SaaS development and AI solutions studio operating globally.
            </p>
            <div style={{ display:'flex', gap:'0.75rem' }}>
              {[
                { flag: '🇬🇧', label: 'United Kingdom' },
                { flag: '🇵🇰', label: 'Pakistan' },
              ].map((m) => (
                <span key={m.label} style={{
                  fontFamily:      'var(--font-dm-sans)',
                  fontSize:        '0.72rem',
                  fontWeight:      500,
                  color:           '#9d99b8',
                  backgroundColor: '#11112b',
                  border:          '1px solid rgba(255,255,255,0.06)',
                  padding:         '0.3rem 0.7rem',
                  borderRadius:    '999px',
                  whiteSpace:      'nowrap',
                }}>
                  {m.flag} {m.label}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily:'var(--font-syne)', fontWeight:700, fontSize:'0.8rem', letterSpacing:'0.08em', textTransform:'uppercase', color:'#eceaf5', margin:'0 0 1.25rem' }}>
              Services
            </h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {['Web & App Development', 'AI Integration', 'SaaS Build', 'Compliance & RegTech', 'Government Tenders'].map((s) => (
                <li key={s}>
                  <a href="#services" style={{
                    fontFamily:     'var(--font-dm-sans)',
                    fontSize:       '0.85rem',
                    color:          '#5e5a7a',
                    textDecoration: 'none',
                    transition:     'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#9d99b8')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#5e5a7a')}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontFamily:'var(--font-syne)', fontWeight:700, fontSize:'0.8rem', letterSpacing:'0.08em', textTransform:'uppercase', color:'#eceaf5', margin:'0 0 1.25rem' }}>
              Products
            </h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {[
                { label:'Tikkit X',              href:'https://tikkitx.com' },
                { label:'Averon Legal Systems',  href:'#portfolio' },
                { label:'Terra Core',            href:'#portfolio' },
              ].map((p) => (
                <li key={p.label}>
                  <a href={p.href}
                    target={p.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{
                      fontFamily:     'var(--font-dm-sans)',
                      fontSize:       '0.85rem',
                      color:          '#5e5a7a',
                      textDecoration: 'none',
                      transition:     'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#9d99b8')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#5e5a7a')}
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily:'var(--font-syne)', fontWeight:700, fontSize:'0.8rem', letterSpacing:'0.08em', textTransform:'uppercase', color:'#eceaf5', margin:'0 0 1.25rem' }}>
              Company
            </h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {[
                { label:'About',              href:'#about' },
                { label:'How We Work',        href:'#process' },
                { label:'Contact',            href:'#contact' },
                { label:'sales@twobitdigital.com', href:'mailto:sales@twobitdigital.com' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href}
                    style={{
                      fontFamily:     'var(--font-dm-sans)',
                      fontSize:       '0.85rem',
                      color:          '#5e5a7a',
                      textDecoration: 'none',
                      transition:     'color 0.2s ease',
                      wordBreak:      'break-all',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#9d99b8')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#5e5a7a')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop:      '1px solid rgba(255,255,255,0.06)',
          padding:        '1.25rem 0',
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'center',
          flexWrap:       'wrap',
          gap:            '0.5rem',
        }}>
          <p style={{ fontFamily:'var(--font-dm-sans)', fontSize:'0.78rem', color:'#5e5a7a', margin:0 }}>
            © {year} Two Bit Digital Ltd. All rights reserved.
          </p>
          <p style={{ fontFamily:'var(--font-dm-sans)', fontSize:'0.78rem', color:'#5e5a7a', margin:0 }}>
            Two Bit Digital Ltd · Registered in England &amp; Wales
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

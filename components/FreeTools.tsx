'use client'

import Link from 'next/link'

const tools = [
  {
    href:  '/tools/url-shortener',
    icon:  '🔗',
    label: 'URL Shortener',
    desc:  'Turn any long URL into a clean twobitdigital.com/s/… short link.',
  },
  {
    href:  '/tools/qr-code-generator',
    icon:  '▦',
    label: 'QR Code Generator',
    desc:  'Generate a high-res QR code for any URL or text. Download as PNG.',
  },
  {
    href:  '/tools/excel-to-pdf',
    icon:  '📊',
    label: 'Excel to PDF',
    desc:  'Convert any Excel spreadsheet to a clean PDF in seconds.',
  },
  {
    href:  '/tools/pdf-editor',
    icon:  '📑',
    label: 'PDF Editor',
    desc:  'Add text, rotate pages and download — nothing stored on our servers.',
  },
]

export default function FreeTools() {
  return (
    <section style={{
      backgroundColor: '#0d0d22',
      borderTop:       '1px solid rgba(255,255,255,0.06)',
      borderBottom:    '1px solid rgba(255,255,255,0.06)',
      padding:         '5rem 0',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header row */}
        <div style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          flexWrap:       'wrap',
          gap:            '1rem',
          marginBottom:   '2.5rem',
        }}>
          <div>
            <div className="section-label">Free Tools</div>
            <h2 style={{
              fontFamily:    'var(--font-inter)',
              fontWeight:    800,
              fontSize:      'clamp(1.6rem, 3vw, 2.2rem)',
              color:         '#eceaf5',
              margin:        '0.5rem 0 0.5rem',
              letterSpacing: '-0.03em',
              lineHeight:    1.1,
            }}>
              Useful utilities. Free forever.
            </h2>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize:   '0.95rem',
              color:      '#9d99b8',
              margin:     0,
              lineHeight: 1.7,
            }}>
              Built by Two Bit Digital — no account, no cost.
            </p>
          </div>
          <Link
            href="/tools"
            style={{
              fontFamily:    'var(--font-inter)',
              fontWeight:    600,
              fontSize:      '0.85rem',
              color:         '#f5c518',
              textDecoration:'none',
              whiteSpace:    'nowrap',
              flexShrink:    0,
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          >
            All Free Tools →
          </Link>
        </div>

        {/* Tool cards */}
        <style>{`
          .free-tools-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          @media (min-width: 640px) {
            .free-tools-grid { grid-template-columns: 1fr 1fr; }
          }
          @media (min-width: 1024px) {
            .free-tools-grid { grid-template-columns: 1fr 1fr; }
          }
          .free-tool-card {
            background:    #11112b;
            border:        1px solid rgba(255,255,255,0.06);
            border-radius: 12px;
            padding:       1.75rem;
            display:       flex;
            align-items:   flex-start;
            gap:           1.25rem;
            text-decoration: none;
            transition:    border-color 0.25s ease, transform 0.25s ease;
          }
          .free-tool-card:hover {
            border-color: #f5c518;
            transform:    translateY(-3px);
          }
        `}</style>

        <div className="free-tools-grid">
          {tools.map((t) => (
            <Link key={t.href} href={t.href} className="free-tool-card">
              <div style={{
                fontSize:       '1.75rem',
                lineHeight:     1,
                flexShrink:     0,
                marginTop:      '2px',
                width:          '42px',
                height:         '42px',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                background:     'rgba(245,197,24,0.06)',
                borderRadius:   '10px',
                border:         '1px solid rgba(245,197,24,0.12)',
              }}>
                {t.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <h3 style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '1rem',
                    color:         '#eceaf5',
                    margin:        0,
                    letterSpacing: '-0.01em',
                  }}>
                    {t.label}
                  </h3>
                  <span style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '0.6rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color:         '#09091a',
                    backgroundColor:'#22c55e',
                    padding:       '0.15rem 0.5rem',
                    borderRadius:  '999px',
                  }}>
                    Free
                  </span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  fontSize:   '0.875rem',
                  color:      '#9d99b8',
                  lineHeight: 1.65,
                  margin:     '0 0 0.75rem',
                }}>
                  {t.desc}
                </p>
                <span style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    600,
                  fontSize:      '0.8rem',
                  color:         '#f5c518',
                }}>
                  Use Tool →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'

const serviceLinks = [
  { label: 'AI Integration',       href: '/services/ai-integration' },
  { label: 'SaaS Development',     href: '/services/saas-development' },
  { label: 'Web & App Development',href: '/services/web-app-development' },
  { label: 'Compliance & RegTech', href: '/services/compliance-regtech' },
  { label: 'Government Digital',   href: '/services/government-digital' },
]

const companyLinks = [
  { label: 'About',                href: '/about' },
  { label: 'Our Work',             href: '/work' },
  { label: 'Products',             href: '/products' },
  { label: 'Insights',             href: '/insights' },
  { label: 'Contact',              href: '/contact' },
]

const productLinks = [
  { label: 'Tikkit X',             href: 'https://tikkitx.com',  external: true },
  { label: 'Averon Legal Systems', href: '/products/averon-legal-systems', external: false },
  { label: 'Terra Core',           href: '/products/terra-core', external: false },
]

const linkStyle = {
  fontFamily:     'var(--font-inter)',
  fontSize:       '0.85rem',
  color:          '#5e5a7a' as const,
  textDecoration: 'none' as const,
  transition:     'color 0.2s ease',
}

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
        <div
          style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:'2.5rem', marginBottom:'3rem' }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Two Bit Digital — home" style={{
              fontFamily:     'var(--font-inter)',
              fontWeight:     700,
              fontSize:       '1.1rem',
              textDecoration: 'none',
              display:        'inline-flex',
              alignItems:     'baseline',
              gap:            '0.3rem',
              marginBottom:   '1rem',
            }}>
              <span style={{ color:'#eceaf5', letterSpacing:'-0.03em' }}>Two Bit</span>
              <span style={{ color:'#f5c518', letterSpacing:'-0.03em' }}>Digital</span>
            </Link>
            <p style={{
              fontFamily:  'var(--font-inter)',
              fontWeight:  300,
              fontSize:    '0.875rem',
              color:       '#5e5a7a',
              lineHeight:  1.75,
              marginBottom:'1.25rem',
              maxWidth:    '280px',
            }}>
              A SaaS development and AI engineering studio operating globally from the UK.
            </p>
            <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', marginBottom:'1.5rem' }}>
              {[
                { flag:'🇬🇧', label:'UK'  },
                { flag:'🇺🇸', label:'US'  },
                { flag:'🇦🇺', label:'AUS' },
                { flag:'🇵🇰', label:'PK'  },
              ].map((m) => (
                <span key={m.label} style={{
                  fontFamily:      'var(--font-inter)',
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
            <a
              href="mailto:sales@twobitdigital.com"
              style={{ ...linkStyle, fontSize:'0.8rem' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#9d99b8')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#5e5a7a')}
            >
              sales@twobitdigital.com
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily:'var(--font-inter)', fontWeight:700, fontSize:'0.8rem', letterSpacing:'0.08em', textTransform:'uppercase', color:'#eceaf5', margin:'0 0 1.25rem' }}>
              Services
            </h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} style={linkStyle}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#9d99b8')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#5e5a7a')}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontFamily:'var(--font-inter)', fontWeight:700, fontSize:'0.8rem', letterSpacing:'0.08em', textTransform:'uppercase', color:'#eceaf5', margin:'0 0 1.25rem' }}>
              Products
            </h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {productLinks.map((p) => (
                <li key={p.href}>
                  {p.external ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" style={linkStyle}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#9d99b8')}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#5e5a7a')}
                    >
                      {p.label}
                    </a>
                  ) : (
                    <Link href={p.href} style={linkStyle}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#9d99b8')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#5e5a7a')}
                    >
                      {p.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily:'var(--font-inter)', fontWeight:700, fontSize:'0.8rem', letterSpacing:'0.08em', textTransform:'uppercase', color:'#eceaf5', margin:'0 0 1.25rem' }}>
              Company
            </h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={linkStyle}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#9d99b8')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#5e5a7a')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.linkedin.com/company/twobitdigital"
                  target="_blank" rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#9d99b8')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#5e5a7a')}
                >
                  LinkedIn ↗
                </a>
              </li>
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
          gap:            '0.75rem',
        }}>
          <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.78rem', color:'#5e5a7a', margin:0 }}>
            © {year} Two Bit Digital Ltd. All rights reserved.
          </p>
          <div style={{ display:'flex', alignItems:'center', gap:'1.25rem', flexWrap:'wrap' }}>
            <Link href="/privacy" style={{ fontFamily:'var(--font-inter)', fontSize:'0.78rem', color:'#5e5a7a', textDecoration:'none' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#9d99b8')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#5e5a7a')}
            >
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ fontFamily:'var(--font-inter)', fontSize:'0.78rem', color:'#5e5a7a', textDecoration:'none' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#9d99b8')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#5e5a7a')}
            >
              Terms of Service
            </Link>
            <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.78rem', color:'#5e5a7a', margin:0 }}>
              Two Bit Digital Ltd · Registered in England &amp; Wales · Co. 14710072
            </p>
          </div>
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

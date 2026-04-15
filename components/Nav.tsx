'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Government', href: '#government' },
  { label: 'Portfolio',  href: '#portfolio' },
  { label: 'Process',    href: '#process' },
  { label: 'Contact',    href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position:       'fixed',
        top:            0,
        left:           0,
        right:          0,
        height:         '68px',
        zIndex:         50,
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        backgroundColor: scrolled ? 'rgba(9,9,26,0.97)' : 'rgba(9,9,26,0.82)',
        borderBottom:   '1px solid rgba(255,255,255,0.06)',
        transition:     'background-color 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth:   '1200px',
          margin:     '0 auto',
          padding:    '0 1.5rem',
          height:     '100%',
          display:    'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Wordmark */}
        <a
          href="#"
          aria-label="Two Bit Digital — return to top"
          style={{
            display:        'flex',
            alignItems:     'baseline',
            gap:            '0',
            textDecoration: 'none',
            lineHeight:     1,
          }}
        >
          <span style={{
            fontFamily:   'var(--font-inter)',
            fontWeight:   700,
            fontSize:     '1.15rem',
            color:        '#eceaf5',
            letterSpacing:'-0.03em',
          }}>
            Two Bit
          </span>
          <span style={{
            fontFamily:   'var(--font-inter)',
            fontWeight:   700,
            fontSize:     '1.15rem',
            color:        '#f5c518',
            letterSpacing:'-0.03em',
            marginLeft:   '0.35rem',
          }}>
            Digital
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          style={{
            display:    'flex',
            alignItems: 'center',
            gap:        '2rem',
          }}
          className="hidden-mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily:     'var(--font-inter)',
                fontSize:       '0.875rem',
                fontWeight:     400,
                color:          '#9d99b8',
                textDecoration: 'none',
                transition:     'color 0.2s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#eceaf5')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9d99b8')}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily:      'var(--font-inter)',
              fontWeight:      700,
              fontSize:        '0.8rem',
              letterSpacing:   '0.04em',
              textTransform:   'uppercase',
              color:           '#09091a',
              backgroundColor: '#f5c518',
              padding:         '0.5rem 1.1rem',
              borderRadius:    '6px',
              textDecoration:  'none',
              transition:      'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#c9a012')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#f5c518')}
          >
            Start a Project
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{
            background: 'none',
            border:     'none',
            cursor:     'pointer',
            padding:    '0.5rem',
            display:    'none',
          }}
        >
          <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ display: 'block', height: '2px', background: menuOpen ? '#f5c518' : '#eceaf5', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', height: '2px', background: menuOpen ? '#f5c518' : '#eceaf5', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', height: '2px', background: menuOpen ? '#f5c518' : '#eceaf5', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          backgroundColor: 'rgba(9,9,26,0.98)',
          borderTop:       menuOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
          padding:         '1rem 1.5rem 1.5rem',
          display:         'flex',
          flexDirection:   'column',
          gap:             '0.75rem',
          maxHeight:       menuOpen ? '400px' : '0',
          overflow:        'hidden',
          transition:      'max-height 0.3s ease, padding 0.3s ease',
          paddingTop:      menuOpen ? '1rem' : '0',
          paddingBottom:   menuOpen ? '1.5rem' : '0',
        }}
        className="mobile-menu"
      >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily:     'var(--font-inter)',
                fontSize:       '1rem',
                color:          '#9d99b8',
                textDecoration: 'none',
                padding:        '0.5rem 0',
                borderBottom:   '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop:       '0.5rem',
              fontFamily:      'var(--font-inter)',
              fontWeight:      700,
              fontSize:        '0.8rem',
              letterSpacing:   '0.04em',
              textTransform:   'uppercase',
              color:           '#09091a',
              backgroundColor: '#f5c518',
              padding:         '0.75rem 1.25rem',
              borderRadius:    '6px',
              textDecoration:  'none',
              textAlign:       'center',
            }}
          >
            Start a Project
          </a>
        </div>

      <style>{`
        @media (max-width: 600px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 601px) {
          .mobile-menu   { display: none !important; }
        }
      `}</style>
    </header>
  )
}

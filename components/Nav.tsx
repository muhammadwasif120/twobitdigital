'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const mainLinks = [
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work',     href: '/work' },
  { label: 'Products', href: '/products' },
  { label: 'Insights', href: '/insights' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

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

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header
      style={{
        position:            'fixed',
        top:                 0,
        left:                0,
        right:               0,
        height:              '68px',
        zIndex:              50,
        backdropFilter:      'blur(24px)',
        WebkitBackdropFilter:'blur(24px)',
        backgroundColor:     scrolled ? 'rgba(9,9,26,0.97)' : 'rgba(9,9,26,0.82)',
        borderBottom:        '1px solid rgba(255,255,255,0.06)',
        transition:          'background-color 0.3s ease',
      }}
    >
      <div style={{
        maxWidth:       '1200px',
        margin:         '0 auto',
        padding:        '0 1.5rem',
        height:         '100%',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
      }}>
        {/* Wordmark */}
        <Link
          href="/"
          aria-label="Two Bit Digital — home"
          style={{
            display:        'flex',
            alignItems:     'baseline',
            gap:            '0',
            textDecoration: 'none',
            lineHeight:     1,
          }}
        >
          <span style={{
            fontFamily:    'var(--font-inter)',
            fontWeight:    700,
            fontSize:      '1.15rem',
            color:         '#eceaf5',
            letterSpacing: '-0.03em',
          }}>
            Two Bit
          </span>
          <span style={{
            fontFamily:    'var(--font-inter)',
            fontWeight:    700,
            fontSize:      '1.15rem',
            color:         '#f5c518',
            letterSpacing: '-0.03em',
            marginLeft:    '0.35rem',
          }}>
            Digital
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
          className="hidden-mobile"
        >
          {mainLinks.map((l) => {
            const active = pathname.startsWith(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily:     'var(--font-inter)',
                  fontSize:       '0.875rem',
                  fontWeight:     active ? 600 : 400,
                  color:          active ? '#eceaf5' : '#9d99b8',
                  textDecoration: 'none',
                  transition:     'color 0.2s ease',
                  position:       'relative',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#eceaf5')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = active ? '#eceaf5' : '#9d99b8')}
              >
                {l.label}
                {active && (
                  <span style={{
                    position:        'absolute',
                    bottom:          '-22px',
                    left:            '50%',
                    transform:       'translateX(-50%)',
                    width:           '4px',
                    height:          '4px',
                    borderRadius:    '50%',
                    backgroundColor: '#f5c518',
                  }} />
                )}
              </Link>
            )
          })}
          <Link
            href="/contact"
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
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#c9a012')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#f5c518')}
          >
            Start a Project
          </Link>
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
            <span style={{ display:'block', height:'2px', background: menuOpen ? '#f5c518' : '#eceaf5', transition:'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display:'block', height:'2px', background: menuOpen ? '#f5c518' : '#eceaf5', transition:'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display:'block', height:'2px', background: menuOpen ? '#f5c518' : '#eceaf5', transition:'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          backgroundColor: 'rgba(9,9,26,0.98)',
          borderTop:       menuOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
          display:         'flex',
          flexDirection:   'column',
          gap:             '0.75rem',
          maxHeight:       menuOpen ? '500px' : '0',
          overflow:        'hidden',
          transition:      'max-height 0.35s ease, padding 0.35s ease',
          paddingTop:      menuOpen ? '1rem' : '0',
          paddingBottom:   menuOpen ? '1.5rem' : '0',
          paddingLeft:     '1.5rem',
          paddingRight:    '1.5rem',
        }}
        className="mobile-menu"
      >
        {mainLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily:     'var(--font-inter)',
              fontSize:       '1rem',
              color:          pathname.startsWith(l.href) ? '#f5c518' : '#9d99b8',
              textDecoration: 'none',
              padding:        '0.5rem 0',
              borderBottom:   '1px solid rgba(255,255,255,0.04)',
              fontWeight:     pathname.startsWith(l.href) ? 600 : 400,
            }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact"
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
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu   { display: none !important; }
        }
      `}</style>
    </header>
  )
}

'use client'

import Link from 'next/link'

type Props = {
  heading?: string
  subtext?: string
  ctaLabel?: string
  ctaHref?:  string
}

export default function CTABanner({
  heading  = 'Ready to Build Something Serious?',
  subtext  = 'Bring us your brief. We\'ll bring the architecture, the engineering, and the delivery track record.',
  ctaLabel = 'Start a Project',
  ctaHref  = '/contact',
}: Props) {
  return (
    <section style={{
      background:    'linear-gradient(135deg, #11112b 0%, #16163a 100%)',
      borderTop:     '1px solid rgba(255,255,255,0.06)',
      borderBottom:  '1px solid rgba(255,255,255,0.06)',
      padding:       '5rem 0',
      position:      'relative',
      overflow:      'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position:     'absolute', top: '-50%', left: '50%',
        transform:    'translateX(-50%)',
        width:        '600px',   height: '400px',
        borderRadius: '50%',     pointerEvents: 'none',
        background:   'radial-gradient(circle, rgba(245,197,24,0.07) 0%, transparent 70%)',
      }} />

      <div style={{
        maxWidth:  '720px',
        margin:    '0 auto',
        padding:   '0 1.5rem',
        textAlign: 'center',
        position:  'relative', zIndex: 1,
      }}>
        <h2 style={{
          fontFamily:    'var(--font-inter)',
          fontWeight:    800,
          fontSize:      'clamp(1.7rem, 4vw, 2.4rem)',
          color:         '#eceaf5',
          margin:        '0 0 1rem',
          letterSpacing: '-0.02em',
          lineHeight:    1.2,
        }}>
          {heading}
        </h2>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 300,
          fontSize:   '1.05rem',
          color:      '#9d99b8',
          lineHeight: 1.75,
          margin:     '0 0 2rem',
        }}>
          {subtext}
        </p>
        <Link
          href={ctaHref}
          style={{
            display:         'inline-flex',
            alignItems:      'center',
            gap:             '0.5rem',
            fontFamily:      'var(--font-inter)',
            fontWeight:      700,
            fontSize:        '0.875rem',
            letterSpacing:   '0.03em',
            textTransform:   'uppercase',
            color:           '#09091a',
            backgroundColor: '#f5c518',
            padding:         '0.9rem 2rem',
            borderRadius:    '7px',
            textDecoration:  'none',
            transition:      'background-color 0.2s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.backgroundColor = '#c9a012'
            ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.backgroundColor = '#f5c518'
            ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
          }}
        >
          {ctaLabel} →
        </Link>
      </div>
    </section>
  )
}

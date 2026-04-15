'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Service } from '@/lib/services'

function RelatedCard({ service }: { service: Service }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/services/${service.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: '#11112b',
          border:          `1px solid ${hovered ? service.color : 'rgba(255,255,255,0.07)'}`,
          borderRadius:    '12px',
          padding:         '1.75rem',
          display:         'flex',
          alignItems:      'flex-start',
          gap:             '1.25rem',
          transform:       hovered ? 'translateY(-3px)' : 'translateY(0)',
          transition:      'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
          boxShadow:       hovered ? `0 10px 30px ${service.color}14` : '0 2px 10px rgba(0,0,0,0.2)',
        }}
      >
        {/* Icon */}
        <div style={{
          width:           '48px',
          height:          '48px',
          borderRadius:    '10px',
          backgroundColor: `${service.color}18`,
          border:          `1px solid ${service.color}30`,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          fontSize:        '1.4rem',
          flexShrink:      0,
        }}>
          {service.icon}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{
            fontFamily:    'var(--font-inter)',
            fontWeight:    700,
            fontSize:      '1rem',
            color:         '#eceaf5',
            margin:        '0 0 0.4rem',
            letterSpacing: '-0.01em',
            lineHeight:    1.3,
          }}>
            {service.title}
          </h3>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 300,
            fontSize:   '0.83rem',
            color:      '#9d99b8',
            margin:     '0 0 0.75rem',
            lineHeight: 1.65,
          }}>
            {service.description}
          </p>
          <span style={{
            fontFamily:  'var(--font-inter)',
            fontWeight:  600,
            fontSize:    '0.78rem',
            color:       service.color,
            display:     'inline-flex',
            alignItems:  'center',
            gap:         '0.3rem',
            transition:  'gap 0.2s ease',
          }}>
            Explore service →
          </span>
        </div>
      </article>
    </Link>
  )
}

export default function RelatedServices({ services }: { services: Service[] }) {
  return (
    <>
      <div
        className="related-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap:                 '1.25rem',
        }}
      >
        {services.map((s) => (
          <RelatedCard key={s.slug} service={s} />
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

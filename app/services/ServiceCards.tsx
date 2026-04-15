'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Service } from '@/lib/services'

function ServiceCard({ service }: { service: Service }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#11112b',
        border:          `1px solid ${hovered ? service.color : 'rgba(255,255,255,0.07)'}`,
        borderRadius:    '14px',
        padding:         '2rem',
        display:         'flex',
        flexDirection:   'column',
        gap:             '1rem',
        transform:       hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition:      'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
        boxShadow:       hovered ? `0 12px 40px ${service.color}18` : '0 4px 16px rgba(0,0,0,0.25)',
        cursor:          'default',
        position:        'relative',
        overflow:        'hidden',
      }}
    >
      {/* Subtle corner glow on hover */}
      <div style={{
        position:   'absolute',
        top:        '-60px',
        right:      '-60px',
        width:      '180px',
        height:     '180px',
        borderRadius:'50%',
        pointerEvents:'none',
        background: `radial-gradient(circle, ${service.color}22 0%, transparent 70%)`,
        opacity:    hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }} />

      {/* Icon */}
      <div style={{
        width:           '52px',
        height:          '52px',
        borderRadius:    '12px',
        backgroundColor: `${service.color}18`,
        border:          `1px solid ${service.color}30`,
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        fontSize:        '1.6rem',
        flexShrink:      0,
      }}>
        {service.icon}
      </div>

      {/* Title */}
      <h2 style={{
        fontFamily:    'var(--font-inter)',
        fontWeight:    700,
        fontSize:      '1.1rem',
        color:         '#eceaf5',
        margin:        0,
        letterSpacing: '-0.01em',
        lineHeight:    1.3,
      }}>
        {service.title}
      </h2>

      {/* Tagline */}
      <p style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: 400,
        fontSize:   '0.82rem',
        color:      service.color,
        margin:     0,
        lineHeight: 1.5,
        fontStyle:  'italic',
      }}>
        {service.tagline}
      </p>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: 300,
        fontSize:   '0.875rem',
        color:      '#9d99b8',
        margin:     0,
        lineHeight: 1.75,
        flexGrow:   1,
      }}>
        {service.description}
      </p>

      {/* Tech stack chips */}
      <div style={{
        display:   'flex',
        flexWrap:  'wrap',
        gap:       '0.4rem',
        marginTop: '0.25rem',
      }}>
        {service.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily:      'var(--font-inter)',
              fontWeight:      500,
              fontSize:        '0.7rem',
              color:           '#9d99b8',
              backgroundColor: 'rgba(255,255,255,0.04)',
              border:          '1px solid rgba(255,255,255,0.08)',
              padding:         '0.25rem 0.6rem',
              borderRadius:    '999px',
              whiteSpace:      'nowrap',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Learn more link */}
      <Link
        href={`/services/${service.slug}`}
        style={{
          display:        'inline-flex',
          alignItems:     'center',
          gap:            '0.35rem',
          fontFamily:     'var(--font-inter)',
          fontWeight:     600,
          fontSize:       '0.82rem',
          color:          service.color,
          textDecoration: 'none',
          marginTop:      '0.25rem',
          letterSpacing:  '0.01em',
          transition:     'gap 0.2s ease',
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.gap = '0.55rem'
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.gap = '0.35rem'
        }}
      >
        Learn More →
      </Link>
    </article>
  )
}

export default function ServiceCards({ services }: { services: Service[] }) {
  return (
    <>
      <div
        className="services-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap:                 '1.5rem',
        }}
      >
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

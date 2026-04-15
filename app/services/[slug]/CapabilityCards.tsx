'use client'

import { useState } from 'react'

type Capability = { title: string; desc: string }

function CapabilityCard({
  cap,
  color,
}: {
  cap: Capability
  color: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#11112b',
        border:          `1px solid ${hovered ? color : 'rgba(255,255,255,0.06)'}`,
        borderRadius:    '12px',
        padding:         '1.75rem',
        transition:      'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
        boxShadow:       hovered ? `0 8px 32px ${color}14` : 'none',
        transform:       hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      {/* Accent line */}
      <div style={{
        width:           '28px',
        height:          '3px',
        borderRadius:    '2px',
        backgroundColor: color,
        marginBottom:    '1rem',
        opacity:         hovered ? 1 : 0.55,
        transition:      'opacity 0.25s ease',
      }} />

      <h3 style={{
        fontFamily:    'var(--font-inter)',
        fontWeight:    700,
        fontSize:      '1rem',
        color:         '#eceaf5',
        margin:        '0 0 0.6rem',
        letterSpacing: '-0.01em',
        lineHeight:    1.3,
      }}>
        {cap.title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: 300,
        fontSize:   '0.875rem',
        color:      '#9d99b8',
        margin:     0,
        lineHeight: 1.75,
      }}>
        {cap.desc}
      </p>
    </div>
  )
}

export default function CapabilityCards({
  capabilities,
  color,
}: {
  capabilities: Capability[]
  color: string
}) {
  return (
    <>
      <div
        className="capability-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap:                 '1.25rem',
        }}
      >
        {capabilities.map((cap) => (
          <CapabilityCard key={cap.title} cap={cap} color={color} />
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .capability-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

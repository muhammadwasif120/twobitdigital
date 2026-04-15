'use client'

import { useState } from 'react'

type UseCase = { sector: string; desc: string }

function UseCaseCard({ uc, color }: { uc: UseCase; color: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#11112b',
        border:          `1px solid ${hovered ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius:    '12px',
        padding:         '1.75rem',
        transition:      'border-color 0.25s ease, transform 0.25s ease',
        transform:       hovered ? 'translateY(-2px)' : 'translateY(0)',
        position:        'relative',
        overflow:        'hidden',
      }}
    >
      {/* Subtle left border accent */}
      <div style={{
        position:        'absolute',
        top:             0,
        left:            0,
        bottom:          0,
        width:           '3px',
        backgroundColor: color,
        borderRadius:    '12px 0 0 12px',
        opacity:         hovered ? 1 : 0.35,
        transition:      'opacity 0.25s ease',
      }} />

      {/* Sector pill */}
      <span style={{
        display:         'inline-block',
        fontFamily:      'var(--font-inter)',
        fontWeight:      600,
        fontSize:        '0.72rem',
        letterSpacing:   '0.06em',
        textTransform:   'uppercase',
        color:           '#09091a',
        backgroundColor: '#f5c518',
        padding:         '0.25rem 0.7rem',
        borderRadius:    '999px',
        marginBottom:    '0.875rem',
      }}>
        {uc.sector}
      </span>

      <p style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: 300,
        fontSize:   '0.9rem',
        color:      '#9d99b8',
        margin:     0,
        lineHeight: 1.75,
      }}>
        {uc.desc}
      </p>
    </div>
  )
}

export default function UseCaseCards({
  useCases,
  color,
}: {
  useCases: UseCase[]
  color: string
}) {
  return (
    <>
      <div
        className="usecase-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap:                 '1.25rem',
        }}
      >
        {useCases.map((uc) => (
          <UseCaseCard key={uc.sector} uc={uc} color={color} />
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .usecase-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

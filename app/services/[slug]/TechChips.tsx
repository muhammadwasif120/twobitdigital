'use client'

import { useState } from 'react'

function TechChip({ tech, color }: { tech: string; color: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        fontFamily:      'var(--font-inter)',
        fontWeight:      500,
        fontSize:        '0.82rem',
        color:           hovered ? color : '#9d99b8',
        backgroundColor: hovered ? `${color}12` : '#11112b',
        border:          `1px solid ${hovered ? `${color}35` : 'rgba(255,255,255,0.08)'}`,
        padding:         '0.45rem 1rem',
        borderRadius:    '999px',
        whiteSpace:      'nowrap',
        transition:      'color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
        cursor:          'default',
      }}
    >
      {tech}
    </span>
  )
}

export default function TechChips({
  techStack,
  color,
}: {
  techStack: string[]
  color: string
}) {
  return (
    <div style={{
      display:   'flex',
      flexWrap:  'wrap',
      gap:       '0.6rem',
    }}>
      {techStack.map((tech) => (
        <TechChip key={tech} tech={tech} color={color} />
      ))}
    </div>
  )
}

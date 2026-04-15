'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { InsightPost } from '@/lib/insights'

function RelatedCard({ post }: { post: InsightPost }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/insights/${post.slug}`}
      style={{
        display:       'block',
        background:    '#11112b',
        border:        `1px solid ${hovered ? '#f5c518' : 'rgba(255,255,255,0.06)'}`,
        borderRadius:  '10px',
        padding:       '1.5rem',
        textDecoration:'none',
        transform:     hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition:    'border-color 0.25s ease, transform 0.25s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{
        display:       'inline-block',
        fontFamily:    'var(--font-inter)',
        fontWeight:    600,
        fontSize:      '0.68rem',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color:         '#f5c518',
        border:        '1px solid rgba(245,197,24,0.35)',
        borderRadius:  '4px',
        padding:       '0.2rem 0.5rem',
        marginBottom:  '0.85rem',
      }}>
        {post.category}
      </span>
      <h3 style={{
        fontFamily:    'var(--font-inter)',
        fontWeight:    700,
        fontSize:      '1rem',
        color:         '#eceaf5',
        lineHeight:    1.35,
        margin:        '0 0 0.65rem',
        letterSpacing: '-0.01em',
      }}>
        {post.title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-inter)',
        fontSize:   '0.85rem',
        color:      '#9d99b8',
        lineHeight: 1.7,
        margin:     '0 0 1rem',
        fontWeight: 300,
      }}>
        {post.excerpt}
      </p>
      <span style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: 600,
        fontSize:   '0.8rem',
        color:      '#f5c518',
      }}>
        Read Article →
      </span>
    </Link>
  )
}

export default function RelatedArticles({ posts }: { posts: InsightPost[] }) {
  const [backHovered, setBackHovered] = useState(false)

  return (
    <>
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap:                 '1.25rem',
      }}
      className="related-grid"
      >
        {posts.slice(0, 2).map((p) => (
          <RelatedCard key={p.slug} post={p} />
        ))}
      </div>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link
          href="/insights"
          style={{
            fontFamily:    'var(--font-inter)',
            fontWeight:    600,
            fontSize:      '0.85rem',
            color:         backHovered ? '#eceaf5' : '#9d99b8',
            textDecoration:'none',
            letterSpacing: '0.01em',
            transition:    'color 0.2s ease',
          }}
          onMouseEnter={() => setBackHovered(true)}
          onMouseLeave={() => setBackHovered(false)}
        >
          ← Back to all Insights
        </Link>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

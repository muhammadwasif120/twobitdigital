'use client'

import Link from 'next/link'

type Crumb = { label: string; href?: string }

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  const jsonLd = {
    '@context':        'https://schema.org',
    '@type':           'BreadcrumbList',
    itemListElement:   crumbs.map((c, i) => ({
      '@type':   'ListItem',
      position:  i + 1,
      name:      c.label,
      ...(c.href ? { item: `https://www.twobitdigital.com${c.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" style={{ marginBottom: '0.5rem' }}>
        <ol style={{
          listStyle:  'none',
          padding:    0,
          margin:     0,
          display:    'flex',
          flexWrap:   'wrap',
          alignItems: 'center',
          gap:        '0.3rem',
        }}>
          {crumbs.map((c, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              {i > 0 && (
                <span style={{ color: '#5e5a7a', fontSize: '0.75rem' }}>›</span>
              )}
              {c.href && i < crumbs.length - 1 ? (
                <Link href={c.href} style={{
                  fontFamily:     'var(--font-inter)',
                  fontSize:       '0.78rem',
                  color:          '#5e5a7a',
                  textDecoration: 'none',
                  transition:     'color 0.2s ease',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#9d99b8')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#5e5a7a')}
                >
                  {c.label}
                </Link>
              ) : (
                <span style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize:   '0.78rem',
                  color:      '#9d99b8',
                }}>
                  {c.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

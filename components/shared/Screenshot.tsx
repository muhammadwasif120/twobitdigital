import Image from 'next/image'
import Link from 'next/link'

type Props = {
  src:       string
  alt:       string
  sizes:     string
  priority?: boolean
  href?:     string
  badge?:    string
  track?:    string
}

export default function Screenshot({ src, alt, sizes, priority, href, badge, track }: Props) {
  const frame = (
    <div
      className={href ? 'shot-link' : undefined}
      style={{
        position:        'relative',
        aspectRatio:     '16 / 10',
        overflow:        'hidden',
        borderRadius:    '10px',
        border:          '1px solid rgba(255,255,255,0.08)',
        backgroundColor: '#0d0d22',
      }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: 'cover', objectPosition: 'top' }} />
      {badge && (
        <span style={{
          position: 'absolute', right: 8, bottom: 8,
          fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.03em',
          color: '#09091a', backgroundColor: '#f5c518', padding: '0.3rem 0.65rem', borderRadius: 999,
          boxShadow: '0 4px 14px rgba(0,0,0,0.45)',
        }}>
          {badge}
        </span>
      )}
    </div>
  )

  if (!href) return frame
  const trackAttr = track ? { 'data-track': track } : {}
  if (href.startsWith('http')) {
    return <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }} {...trackAttr}>{frame}</a>
  }
  return <Link href={href} style={{ display: 'block' }} {...trackAttr}>{frame}</Link>
}

import Image from 'next/image'

type Props = {
  src:       string
  alt:       string
  sizes:     string
  priority?: boolean
}

export default function Screenshot({ src, alt, sizes, priority }: Props) {
  return (
    <div style={{
      position:        'relative',
      aspectRatio:     '16 / 10',
      overflow:        'hidden',
      borderRadius:    '10px',
      border:          '1px solid rgba(255,255,255,0.08)',
      backgroundColor: '#0d0d22',
    }}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: 'cover', objectPosition: 'top' }} />
    </div>
  )
}

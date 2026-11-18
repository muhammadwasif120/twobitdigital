import Image from 'next/image'

export default function FounderAvatar({ size }: { size: number }) {
  return (
    <span style={{
      position: 'relative', display: 'block', width: size, height: size, borderRadius: '50%',
      overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(245,197,24,0.35)', backgroundColor: '#16163a',
    }}>
      <Image src="/team/founder-avatar.webp" alt="Muhammad Wasif, Founder and CEO of Two Bit Digital" fill sizes={`${size}px`} style={{ objectFit: 'cover' }} />
    </span>
  )
}

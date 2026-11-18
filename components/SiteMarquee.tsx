import Link from 'next/link'
import Screenshot from '@/components/shared/Screenshot'
import { sites } from '@/lib/portfolio'

const items = sites.filter((s) => s.image)

export default function SiteMarquee() {
  const row = (copy: 'a' | 'b') =>
    items.map((s) => (
      <Link
        key={`${copy}-${s.name}`}
        href="/sites"
        className="mq-item"
        {...(copy === 'b' ? { 'aria-hidden': true, tabIndex: -1 } : {})}
      >
        <Screenshot src={s.image!} alt={copy === 'b' ? '' : `${s.name} website`} sizes="300px" />
        <span className="mq-cap">{s.name} <em>{s.sector}</em></span>
      </Link>
    ))

  return (
    <section style={{ backgroundColor: '#09091a', padding: '4rem 0 4.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 1.75rem', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <div className="section-label">Shipped &amp; live</div>
          <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#eceaf5', margin: '0.4rem 0 0', letterSpacing: '-0.02em' }}>
            Websites we&apos;ve built for real businesses
          </h2>
        </div>
        <Link href="/sites" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.88rem', color: '#f5c518', textDecoration: 'none' }}>
          See all sites →
        </Link>
      </div>

      <div className="mq-wrap">
        <div className="mq-track">{row('a')}{row('b')}</div>
      </div>

      <style>{`
        .mq-wrap { overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent); mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent); }
        .mq-track { display: flex; gap: 16px; width: max-content; animation: mqScroll 70s linear infinite; }
        .mq-wrap:hover .mq-track { animation-play-state: paused; }
        .mq-item { flex: 0 0 300px; display: block; text-decoration: none; }
        .mq-cap { display: block; margin-top: 0.55rem; font-family: var(--font-inter); font-size: 0.8rem; font-weight: 600; color: #eceaf5; }
        .mq-cap em { font-style: normal; font-weight: 400; color: #9d99b8; margin-left: 0.4rem; }
        @keyframes mqScroll { to { transform: translateX(calc(-50% - 8px)); } }
        @media (prefers-reduced-motion: reduce) {
          .mq-track { animation: none; }
          .mq-wrap { overflow-x: auto; }
        }
      `}</style>
    </section>
  )
}

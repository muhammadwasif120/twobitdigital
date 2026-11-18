import { whatsappHref } from '@/lib/whatsapp'
import HeroShowcase from '@/components/HeroShowcase'

export default function Hero() {
  const demoHref = whatsappHref('Hi Two Bit Digital, I would like to request a demo.')

  return (
    <section
      id="hero"
      style={{
        position:        'relative',
        minHeight:       '100vh',
        display:         'flex',
        alignItems:      'center',
        backgroundColor: '#09091a',
        overflow:        'hidden',
        paddingTop:      '68px',
      }}
    >
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: 'clamp(300px, 50vw, 600px)', height: 'clamp(300px, 50vw, 600px)',
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(123,94,167,0.18) 0%, transparent 70%)', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-5%',
        width: 'clamp(250px, 40vw, 500px)', height: 'clamp(250px, 40vw, 500px)',
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(245,197,24,0.1) 0%, transparent 70%)', zIndex: 0,
      }} />

      <div
        className="hero-grid"
        style={{
          position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '5rem 1.5rem',
          display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '3.5rem', alignItems: 'center', width: '100%',
        }}
      >
        <div>
          <div className="hero-in" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            border: '1px solid rgba(245,197,24,0.25)', borderRadius: '999px',
            padding: '0.35rem 0.9rem', marginBottom: '2rem', backgroundColor: 'rgba(245,197,24,0.06)',
          }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#f5c518',
              boxShadow: '0 0 8px #f5c518', animation: 'pulse 2s ease-in-out infinite',
            }} />
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', fontWeight: 500, color: '#f5c518', letterSpacing: '0.06em' }}>
              CRMs · SaaS · Websites · AI
            </span>
          </div>

          <h1 className="hero-in hero-in-1" style={{
            fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2.6rem, 5.2vw, 4.1rem)',
            lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em',
          }}>
            <span style={{ color: '#eceaf5', display: 'block' }}>Business software,</span>
            <span style={{ color: '#f5c518', display: 'block' }}>already built.</span>
            <span style={{ color: '#eceaf5', display: 'block' }}>Live in weeks.</span>
          </h1>

          <p className="hero-in hero-in-2" style={{
            fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', lineHeight: 1.75,
            color: '#9d99b8', maxWidth: '520px', marginBottom: '2.5rem',
          }}>
            We build CRMs, SaaS platforms, websites and AI tools for businesses in Pakistan and beyond. Try a working demo of the system closest to yours, then we customise it and take it live.
          </p>

          <div className="hero-in hero-in-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
              style={{
                fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.04em',
                textTransform: 'uppercase', color: '#09091a', backgroundColor: '#f5c518',
                padding: '0.8rem 1.75rem', borderRadius: '7px', textDecoration: 'none',
              }}
            >
              Request a Demo on WhatsApp
            </a>
            <a
              href="/crms"
              className="hero-btn-secondary"
              style={{
                fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.04em',
                textTransform: 'uppercase', color: '#eceaf5', border: '1px solid rgba(255,255,255,0.15)',
                padding: '0.8rem 1.75rem', borderRadius: '7px', textDecoration: 'none',
              }}
            >
              See Our CRMs
            </a>
          </div>
        </div>

        <div className="hero-in hero-in-2">
          <HeroShowcase />
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes heroIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .hero-in   { animation: heroIn 0.7s ease both; }
        .hero-in-1 { animation-delay: 0.08s; }
        .hero-in-2 { animation-delay: 0.16s; }
        .hero-in-3 { animation-delay: 0.24s; }
        @media (prefers-reduced-motion: reduce) { .hero-in { animation: none; } }
        .hero-btn-primary { transition: background-color 0.25s ease; }
        .hero-btn-primary:hover { background-color: #c9a012 !important; }
        .hero-btn-secondary { transition: border-color 0.25s ease, color 0.25s ease; }
        .hero-btn-secondary:hover { border-color: rgba(245,197,24,0.4) !important; color: #f5c518 !important; }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}</style>
    </section>
  )
}

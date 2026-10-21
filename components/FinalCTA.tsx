import { whatsappHref } from '@/lib/whatsapp'

export default function FinalCTA() {
  const href = whatsappHref("Hi Two Bit Digital, I'd like to talk about my business and see a relevant demo.")
  const ext = href.startsWith('http')
  return (
    <section style={{ background: 'linear-gradient(135deg, #11112b 0%, #16163a 100%)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '5rem 0' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', fontFamily: 'var(--font-inter)' }}>
        <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
          Tell us about your business. <span style={{ color: '#f5c518' }}>We&apos;ll show you the closest demo.</span>
        </h2>
        <p style={{ color: '#c4c1d8', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 0 2rem' }}>
          A two-minute message is enough. We reply within one business day with a working system to look at and a clear next step.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
             style={{ backgroundColor: '#25D366', color: '#07210f', fontWeight: 700, padding: '0.85rem 1.6rem', borderRadius: '8px', textDecoration: 'none' }}>
            Chat on WhatsApp
          </a>
          <a href="#contact" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#eceaf5', fontWeight: 600, padding: '0.85rem 1.6rem', borderRadius: '8px', textDecoration: 'none' }}>
            Send a brief instead
          </a>
        </div>
      </div>
    </section>
  )
}

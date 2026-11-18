import Image from 'next/image'
import BrowserFrame from '@/components/shared/BrowserFrame'
import { whatsappHref } from '@/lib/whatsapp'

const cover = { objectFit: 'cover' as const, objectPosition: 'top' }

export default function FinalCTA() {
  const href = whatsappHref("Hi Two Bit Digital, I'd like to talk about my business and see a relevant demo.")
  const ext = href.startsWith('http')
  return (
    <section style={{
      background: 'radial-gradient(ellipse 50% 70% at 85% 50%, rgba(123,94,167,0.2), transparent 70%), linear-gradient(135deg, #11112b 0%, #16163a 100%)',
      borderTop: '1px solid rgba(255,255,255,0.06)', padding: '5.5rem 0', overflow: 'hidden',
    }}>
      <div className="cta-grid" style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', fontFamily: 'var(--font-inter)',
        display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '3.5rem', alignItems: 'center',
      }}>
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Tell us about your business. <span style={{ color: '#f5c518' }}>We&apos;ll show you the closest demo.</span>
          </h2>
          <p style={{ color: '#c4c1d8', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 0 2rem', maxWidth: '520px' }}>
            A two-minute message is enough. We reply within one business day with a working system to look at and a clear next step.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
               style={{ backgroundColor: '#25D366', color: '#07210f', fontWeight: 700, padding: '0.85rem 1.6rem', borderRadius: '8px', textDecoration: 'none' }}>
              Chat on WhatsApp
            </a>
            <a href="#contact" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#eceaf5', fontWeight: 600, padding: '0.85rem 1.6rem', borderRadius: '8px', textDecoration: 'none' }}>
              Send a brief instead
            </a>
          </div>
        </div>

        <div className="cta-visual" aria-hidden="true" style={{ position: 'relative', aspectRatio: '1.3 / 1' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '76%', transform: 'rotate(3deg)' }}>
            <BrowserFrame url="sims-demo-neon.vercel.app">
              <Image src="/screens/trade-os.webp" alt="" fill sizes="(max-width: 900px) 70vw, 420px" style={cover} />
            </BrowserFrame>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '76%', transform: 'rotate(-2.5deg)' }}>
            <BrowserFrame url="fmcg-pro-crm.vercel.app">
              <Image src="/screens/fmcg-crm.webp" alt="" fill sizes="(max-width: 900px) 70vw, 420px" style={cover} />
            </BrowserFrame>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px){ .cta-grid{ grid-template-columns: 1fr !important; gap: 2.5rem !important; } }`}</style>
    </section>
  )
}

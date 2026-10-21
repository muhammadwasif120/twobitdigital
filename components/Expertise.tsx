import SectionHead from '@/components/shared/SectionHead'

const gold = '#f5c518'

const industries = [
  'Distribution & FMCG', 'Textile & Garments', 'Education', 'Packaging & Printing', 'Energy & LPG', 'Car Rental & Fleet',
  'Commodity Trading', 'Law Firms & Legal Tech', 'Events & Ticketing', 'Media & Publishing', 'Tourism', 'Retail & E-commerce',
]

const strengths = [
  { t: 'Built for how you really trade', d: 'Cheques, commissions, bookers, delivery registers, PKR and multi-currency, Excel imports. Local workflows are built in, not bolted on.' },
  { t: 'Secure by design',               d: 'Role-based access, audit trails and encrypted data handling, so staff only see what they should and every change is traceable.' },
  { t: 'Web, mobile and offline',        d: 'Browser apps, installable PWAs and React Native mobile apps. Our ticketing app keeps scanning even when the internet drops.' },
  { t: 'Modern, mainstream technology',  d: 'Next.js, TypeScript, Postgres on Supabase, Vercel. Popular tools any developer can pick up, so you are never locked in to us.' },
  { t: 'AI where it earns its place',    d: 'Document extraction, content generation and assistants wired into the workflow, using Claude, OpenAI and Gemini.' },
  { t: 'Connected to the tools you use', d: 'WhatsApp messaging, Stripe payments, Shopify stores, email and accounting exports.' },
]

export default function Expertise() {
  return (
    <section id="expertise" style={{ backgroundColor: '#0d0d22', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHead
          label="Our Expertise"
          title={<>Deep in the industries <span style={{ color: gold }}>we build for.</span></>}
          sub="We have shipped software for these sectors, so we already know the vocabulary, the paperwork and the pain points."
        />
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', listStyle: 'none', padding: 0, margin: '0 0 3.5rem' }}>
          {industries.map((i) => (
            <li key={i} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: '#eceaf5', border: '1px solid rgba(245,197,24,0.35)', backgroundColor: 'rgba(245,197,24,0.06)', padding: '0.45rem 1rem', borderRadius: '999px' }}>{i}</li>
          ))}
        </ul>
        <div className="exp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {strengths.map((s) => (
            <div key={s.t} style={{ backgroundColor: '#11112b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.5rem', fontFamily: 'var(--font-inter)' }}>
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', color: '#eceaf5' }}>{s.t}</h3>
              <p style={{ margin: 0, color: '#c4c1d8', fontSize: '0.92rem', lineHeight: 1.7 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 900px){ .exp-grid{ grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px){ .exp-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

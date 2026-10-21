import SectionHead from '@/components/shared/SectionHead'

const gold = '#f5c518'

const steps = [
  { n: '1', title: 'See it working',  body: 'Message us on WhatsApp or open a live demo. We show you the system closest to your business, running, not as slides.' },
  { n: '2', title: 'Tailor it to you', body: 'We map how your team really works, then adapt the screens, roles, reports, currency and documents to match.' },
  { n: '3', title: 'Go live',          body: 'We bring across your existing data from Excel or your old system, train your team and launch.' },
  { n: '4', title: 'Grow with you',    body: 'Hosting, fixes and new features as your business changes. You deal with the people who built it.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ backgroundColor: '#09091a', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHead
          label="How We Work"
          title={<>Start from something real, <span style={{ color: gold }}>not a blank page.</span></>}
          sub="Most agencies quote months of design before you see anything. We begin with a working system and shape it around you."
        />
        <ol className="hiw-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {steps.map((s) => (
            <li key={s.n} style={{ backgroundColor: '#11112b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.75rem', fontFamily: 'var(--font-inter)' }}>
              <span style={{ display: 'inline-flex', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: gold, color: '#09091a', fontWeight: 800, alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>{s.n}</span>
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.15rem', color: '#eceaf5' }}>{s.title}</h3>
              <p style={{ margin: 0, color: '#c4c1d8', fontSize: '0.95rem', lineHeight: 1.7 }}>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
      <style>{`@media (max-width: 1000px){ .hiw-grid{ grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px){ .hiw-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

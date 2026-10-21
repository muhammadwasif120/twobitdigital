export default function Government() {
  return (
    <section id="government" style={{ backgroundColor: '#09091a', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', fontFamily: 'var(--font-inter)' }}>
        <p style={{ margin: 0, color: '#c4c1d8', fontSize: '1rem', lineHeight: 1.6, maxWidth: '760px' }}>
          <strong style={{ color: '#eceaf5' }}>Public sector or enterprise procurement?</strong>{' '}
          We bid on government and corporate tenders for web portals, apps and AI tools. Vendor registrations are listed above.
        </p>
        <a href="/contact" style={{ color: '#f5c518', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>Talk to our tender team →</a>
      </div>
    </section>
  )
}

type Props = { label: string; title: React.ReactNode; sub?: string }

export default function SectionHead({ label, title, sub }: Props) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <div className="section-label" style={{ justifyContent: 'center' }}>{label}</div>
      <h2 style={{
        fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
        color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.02em', lineHeight: 1.15,
      }}>{title}</h2>
      {sub && (
        <p style={{
          fontFamily: 'var(--font-inter)', fontSize: '1.05rem', color: '#c4c1d8',
          maxWidth: '640px', margin: '0 auto', lineHeight: 1.7,
        }}>{sub}</p>
      )}
    </div>
  )
}

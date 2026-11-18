type Props = {
  url?:      string
  children:  React.ReactNode
  style?:    React.CSSProperties
}

const dot = (c: string) => <span style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: c, flexShrink: 0 }} />

export default function BrowserFrame({ url, children, style }: Props) {
  return (
    <div style={{
      borderRadius:    12,
      overflow:        'hidden',
      border:          '1px solid rgba(255,255,255,0.14)',
      backgroundColor: '#0d0d22',
      boxShadow:       '0 30px 80px rgba(0,0,0,0.55), 0 0 70px rgba(245,197,24,0.07)',
      ...style,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6, padding: '9px 12px',
        backgroundColor: '#16163a', borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        {dot('#ff5f57')}{dot('#febc2e')}{dot('#28c840')}
        {url && (
          <span style={{
            marginLeft: 10, flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            fontFamily: 'var(--font-inter)', fontSize: '0.68rem', color: '#9d99b8',
            backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 6, padding: '3px 10px',
          }}>
            {url}
          </span>
        )}
      </div>
      <div style={{ position: 'relative', aspectRatio: '16 / 10', backgroundColor: '#0d0d22' }}>
        {children}
      </div>
    </div>
  )
}

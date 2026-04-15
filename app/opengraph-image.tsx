import { ImageResponse } from 'next/og'

export const runtime     = 'edge'
export const alt         = 'Two Bit Digital — SaaS Development & AI Engineering Studio'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           '100%',
          height:          '100%',
          display:         'flex',
          flexDirection:   'column',
          justifyContent:  'space-between',
          backgroundColor: '#09091a',
          padding:         '64px',
          fontFamily:      'sans-serif',
          position:        'relative',
          overflow:        'hidden',
        }}
      >
        {/* Background glow effects */}
        <div style={{
          position:     'absolute',
          top:          '-100px',
          right:        '-100px',
          width:        '500px',
          height:       '500px',
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(123,94,167,0.25) 0%, transparent 70%)',
          display:      'flex',
        }} />
        <div style={{
          position:     'absolute',
          bottom:       '-100px',
          left:         '-100px',
          width:        '400px',
          height:       '400px',
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(245,197,24,0.15) 0%, transparent 70%)',
          display:      'flex',
        }} />

        {/* Top — wordmark + credentials */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0' }}>
            <span style={{ fontSize: '28px', fontWeight: 700, color: '#eceaf5', letterSpacing: '-1px' }}>
              Two Bit
            </span>
            <span style={{ fontSize: '28px', fontWeight: 700, color: '#f5c518', letterSpacing: '-1px', marginLeft: '8px' }}>
              Digital
            </span>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['UN Vendor', 'D&B D-U-N-S', 'Co. 14710072'].map((badge) => (
              <div key={badge} style={{
                fontSize:        '11px',
                fontWeight:      600,
                color:           '#5e5a7a',
                backgroundColor: '#11112b',
                border:          '1px solid rgba(255,255,255,0.08)',
                padding:         '6px 12px',
                borderRadius:    '999px',
                display:         'flex',
              }}>
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Middle — headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            display:         'flex',
            alignItems:      'center',
            gap:             '10px',
            marginBottom:    '8px',
          }}>
            <div style={{
              width:           '8px',
              height:          '8px',
              borderRadius:    '50%',
              backgroundColor: '#f5c518',
              display:         'flex',
            }} />
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#f5c518', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Web · App · AI Solutions
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '72px', fontWeight: 800, color: '#eceaf5', lineHeight: 1.05, letterSpacing: '-3px' }}>
              Deploying
            </span>
            <span style={{ fontSize: '72px', fontWeight: 800, color: '#f5c518', lineHeight: 1.05, letterSpacing: '-3px' }}>
              Intelligence
            </span>
            <span style={{ fontSize: '72px', fontWeight: 800, color: '#eceaf5', lineHeight: 1.05, letterSpacing: '-3px' }}>
              at Scale.
            </span>
          </div>
        </div>

        {/* Bottom — descriptor + markets */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <span style={{ fontSize: '18px', fontWeight: 300, color: '#9d99b8', maxWidth: '600px', lineHeight: 1.6 }}>
            Mission-critical SaaS platforms &amp; AI systems for regulated markets.
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['🇬🇧 UK', '🇺🇸 US', '🇦🇺 AUS', '🇵🇰 PK'].map((m) => (
              <div key={m} style={{
                fontSize:        '13px',
                fontWeight:      500,
                color:           '#9d99b8',
                backgroundColor: '#11112b',
                border:          '1px solid rgba(255,255,255,0.06)',
                padding:         '6px 14px',
                borderRadius:    '999px',
                display:         'flex',
              }}>
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

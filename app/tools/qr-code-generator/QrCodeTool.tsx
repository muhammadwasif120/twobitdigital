'use client'

import { useEffect, useRef, useState } from 'react'

const SIZES = [
  { label: 'Small',  value: 256 },
  { label: 'Medium', value: 512 },
  { label: 'Large',  value: 1024 },
]

export default function QrCodeTool() {
  const [text, setText]           = useState('')
  const [size, setSize]           = useState(512)
  const [darkCol, setDarkCol]     = useState('#000000')
  const [lightCol, setLightCol]   = useState('#ffffff')
  const [dataUrl, setDataUrl]     = useState<string | null>(null)
  const [error, setError]         = useState('')
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Re-run whenever any option changes
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)

    if (!text.trim()) {
      setDataUrl(null)
      setError('')
      return
    }

    debounceRef.current = setTimeout(async () => {
      setError('')
      try {
        const QRCode = await import('qrcode')
        const url = await QRCode.toDataURL(text.trim(), {
          width:                size,
          margin:               2,
          color:                { dark: darkCol, light: lightCol },
          errorCorrectionLevel: 'H',
        })
        setDataUrl(url)
      } catch {
        setError('Failed to generate QR code. Please try again.')
        setDataUrl(null)
      }
    }, 250)

    return () => { if (debounceRef.current) clearTimeout(debounceRef.current) }
  }, [text, size, darkCol, lightCol])

  function downloadPng() {
    if (!dataUrl) return
    const a = document.createElement('a')
    a.href     = dataUrl
    a.download = 'qrcode.png'
    a.click()
  }

  const previewSize = size === 256 ? 160 : size === 512 ? 200 : 240

  return (
    <div>
      <style>{`
        .qr-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          align-items: start;
        }
        @media (min-width: 720px) {
          .qr-layout { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="qr-layout">
        {/* ── Controls ── */}
        <div style={{
          background: '#11112b', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px', padding: '1.75rem',
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>

          {/* Text */}
          <div>
            <label htmlFor="qr-text" style={labelStyle}>URL or Text</label>
            <textarea
              id="qr-text"
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="https://twobitdigital.com"
              autoFocus
              style={{
                width: '100%', boxSizing: 'border-box',
                fontFamily: 'var(--font-inter)', fontSize: '0.9rem',
                color: '#eceaf5', backgroundColor: '#09091a',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px', padding: '0.7rem 1rem',
                resize: 'vertical', outline: 'none', transition: 'border-color 0.2s',
                lineHeight: 1.5,
              }}
              onFocus={(e) => (e.target.style.borderColor = '#f5c518')}
              onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
            />
          </div>

          {/* Size */}
          <div>
            <label style={labelStyle}>Size (download)</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {SIZES.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setSize(s.value)}
                  style={{
                    fontFamily: 'var(--font-inter)', fontSize: '0.78rem',
                    fontWeight: size === s.value ? 700 : 400,
                    color:           size === s.value ? '#09091a' : '#9d99b8',
                    backgroundColor: size === s.value ? '#f5c518' : 'transparent',
                    border: `1px solid ${size === s.value ? '#f5c518' : 'rgba(255,255,255,0.12)'}`,
                    borderRadius: '6px', padding: '0.4rem 0.85rem',
                    cursor: 'pointer', transition: 'all 0.15s',
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: '#3d3a56', margin: '0.4rem 0 0' }}>
              {size}×{size}px · affects download only
            </p>
          </div>

          {/* Colours */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <label style={labelStyle}>Dark colour</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <input
                  type="color"
                  value={darkCol}
                  onChange={(e) => setDarkCol(e.target.value)}
                  style={{ width: '38px', height: '38px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.12)', cursor: 'pointer', padding: '2px', backgroundColor: '#09091a' }}
                />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: '#9d99b8', fontVariantNumeric: 'tabular-nums' }}>
                  {darkCol}
                </span>
              </div>
            </div>
            <div>
              <label style={labelStyle}>Light colour</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <input
                  type="color"
                  value={lightCol}
                  onChange={(e) => setLightCol(e.target.value)}
                  style={{ width: '38px', height: '38px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.12)', cursor: 'pointer', padding: '2px', backgroundColor: '#09091a' }}
                />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: '#9d99b8', fontVariantNumeric: 'tabular-nums' }}>
                  {lightCol}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Preview + download ── */}
        <div style={{
          background: '#11112b', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px', padding: '1.75rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '1.25rem', minHeight: '260px', justifyContent: 'center',
        }}>
          {!text.trim() && !dataUrl && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.6rem', opacity: 0.25 }}>▦</div>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: '#3d3a56', margin: 0 }}>
                Enter text above to generate your QR code
              </p>
            </div>
          )}

          {error && (
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#fca5a5', textAlign: 'center' }}>
              {error}
            </p>
          )}

          {dataUrl && (
            <>
              {/* QR preview */}
              <div style={{
                background: lightCol, borderRadius: '8px', padding: '8px',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'background 0.2s',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={dataUrl}
                  alt="Generated QR code"
                  style={{
                    display: 'block',
                    width: `${previewSize}px`,
                    height: `${previewSize}px`,
                    imageRendering: 'pixelated',
                    transition: 'width 0.2s, height 0.2s',
                  }}
                />
              </div>

              <button
                onClick={downloadPng}
                style={{
                  fontFamily: 'var(--font-inter)', fontWeight: 700,
                  fontSize: '0.875rem', letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#09091a', backgroundColor: '#f5c518',
                  border: 'none', borderRadius: '8px',
                  padding: '0.7rem 2rem', cursor: 'pointer',
                  transition: 'background-color 0.2s', width: '100%',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#c9a012')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#f5c518')}
              >
                Download PNG ({size}px)
              </button>

            </>
          )}
        </div>
      </div>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-inter)', fontWeight: 600,
  fontSize: '0.75rem', letterSpacing: '0.05em',
  textTransform: 'uppercase', color: '#5e5a7a',
  marginBottom: '0.5rem',
}

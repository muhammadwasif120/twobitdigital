'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const SIZES = [
  { label: 'Small (256px)',  value: 256 },
  { label: 'Medium (512px)', value: 512 },
  { label: 'Large (1024px)', value: 1024 },
]

export default function QrCodeTool() {
  const [text, setText]       = useState('')
  const [size, setSize]       = useState(512)
  const [darkCol, setDarkCol] = useState('#000000')
  const [lightCol, setLightCol] = useState('#ffffff')
  const [dataUrl, setDataUrl] = useState<string | null>(null)
  const [error, setError]     = useState('')
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const generate = useCallback(async (val: string) => {
    if (!val.trim()) { setDataUrl(null); setError(''); return }
    setError('')
    try {
      const QRCode = await import('qrcode')
      const url = await QRCode.toDataURL(val.trim(), {
        width:         size,
        margin:        2,
        color:         { dark: darkCol, light: lightCol },
        errorCorrectionLevel: 'H',
      })
      setDataUrl(url)
    } catch {
      setError('Failed to generate QR code. Please try again.')
      setDataUrl(null)
    }
  }, [size, darkCol, lightCol])

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => generate(text), 300)
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current) }
  }, [text, generate])

  function downloadPng() {
    if (!dataUrl) return

    // Compose canvas: QR + branded footer
    const img = new Image()
    img.onload = () => {
      const footerH = Math.round(size * 0.09)
      const canvas  = document.createElement('canvas')
      canvas.width  = size
      canvas.height = size + footerH
      const ctx = canvas.getContext('2d')!

      // Draw QR
      ctx.drawImage(img, 0, 0, size, size)

      // Footer bar
      ctx.fillStyle = '#09091a'
      ctx.fillRect(0, size, size, footerH)

      // Wordmark
      const fontSize = Math.round(footerH * 0.42)
      ctx.font        = `700 ${fontSize}px Inter, Arial, sans-serif`
      ctx.fillStyle   = '#eceaf5'
      ctx.textAlign   = 'center'
      ctx.textBaseline= 'middle'
      ctx.fillText('Two Bit', size * 0.44, size + footerH / 2)
      ctx.fillStyle   = '#f5c518'
      ctx.fillText('Digital', size * 0.685, size + footerH / 2)

      const a = document.createElement('a')
      a.href = canvas.toDataURL('image/png')
      a.download = 'qr-code-twobitdigital.png'
      a.click()
    }
    img.src = dataUrl
  }

  return (
    <div>
      <style>{`
        .qr-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start;
        }
        @media (min-width: 720px) {
          .qr-layout { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="qr-layout">
        {/* Controls */}
        <div style={{
          background: '#11112b', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
        }}>

          {/* Text input */}
          <div>
            <label htmlFor="qr-text" style={labelStyle}>URL or Text</label>
            <textarea
              id="qr-text"
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="https://twobitdigital.com"
              style={{
                width:           '100%', boxSizing: 'border-box',
                fontFamily:      'var(--font-inter)', fontSize: '0.9rem',
                color:           '#eceaf5', backgroundColor: '#09091a',
                border:          '1px solid rgba(255,255,255,0.12)',
                borderRadius:    '8px', padding: '0.75rem 1rem',
                resize:          'vertical', outline: 'none',
                transition:      'border-color 0.2s',
                lineHeight:      1.5,
              }}
              onFocus={(e)  => (e.target.style.borderColor = '#f5c518')}
              onBlur={(e)   => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
            />
          </div>

          {/* Size */}
          <div>
            <label style={labelStyle}>Output Size</label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {SIZES.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setSize(s.value)}
                  style={{
                    fontFamily:      'var(--font-inter)', fontSize: '0.78rem',
                    fontWeight:      size === s.value ? 700 : 400,
                    color:           size === s.value ? '#09091a' : '#9d99b8',
                    backgroundColor: size === s.value ? '#f5c518' : 'transparent',
                    border:          `1px solid ${size === s.value ? '#f5c518' : 'rgba(255,255,255,0.12)'}`,
                    borderRadius:    '6px', padding: '0.4rem 0.75rem',
                    cursor:          'pointer', transition: 'all 0.15s',
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Colours */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <label style={labelStyle}>Dark colour</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="color"
                  value={darkCol}
                  onChange={(e) => setDarkCol(e.target.value)}
                  style={{ width: '36px', height: '36px', border: 'none', borderRadius: '6px', cursor: 'pointer', padding: 0, backgroundColor: 'transparent' }}
                />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: '#9d99b8' }}>
                  {darkCol}
                </span>
              </div>
            </div>
            <div>
              <label style={labelStyle}>Light colour</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="color"
                  value={lightCol}
                  onChange={(e) => setLightCol(e.target.value)}
                  style={{ width: '36px', height: '36px', border: 'none', borderRadius: '6px', cursor: 'pointer', padding: 0, backgroundColor: 'transparent' }}
                />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: '#9d99b8' }}>
                  {lightCol}
                </span>
              </div>
            </div>
          </div>

          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: '#3d3a56', margin: 0 }}>
            PNG download includes a Two Bit Digital watermark.
          </p>
        </div>

        {/* Preview + download */}
        <div style={{
          background: '#11112b', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px', padding: '2rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem',
          minHeight: '280px', justifyContent: 'center',
        }}>
          {!text.trim() && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.75rem', opacity: 0.3 }}>▦</div>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#3d3a56', margin: 0 }}>
                Enter a URL or text to generate your QR code
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
                display: 'inline-block',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={dataUrl}
                  alt="QR code"
                  style={{ display: 'block', width: '200px', height: '200px', imageRendering: 'pixelated' }}
                />
              </div>

              {/* Branded footer preview */}
              <div style={{
                background: '#09091a', borderRadius: '6px', padding: '6px 16px',
                display: 'flex', gap: '4px', alignItems: 'center',
              }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.75rem', color: '#eceaf5' }}>Two Bit</span>
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.75rem', color: '#f5c518' }}>Digital</span>
              </div>

              <button
                onClick={downloadPng}
                style={{
                  fontFamily:      'var(--font-inter)', fontWeight: 700,
                  fontSize:        '0.875rem', letterSpacing: '0.04em',
                  textTransform:   'uppercase',
                  color:           '#09091a', backgroundColor: '#f5c518',
                  border:          'none', borderRadius: '8px',
                  padding:         '0.75rem 2rem', cursor: 'pointer',
                  transition:      'background-color 0.2s', width: '100%',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#c9a012')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#f5c518')}
              >
                Download PNG
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  display:       'block',
  fontFamily:    'var(--font-inter)',
  fontWeight:    600,
  fontSize:      '0.8rem',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  color:         '#5e5a7a',
  marginBottom:  '0.5rem',
}

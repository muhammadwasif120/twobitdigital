'use client'

import { useState, useRef } from 'react'

type State = 'idle' | 'loading' | 'done' | 'error'

export default function UrlShortenerTool() {
  const [url, setUrl]         = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [state, setState]     = useState<State>('idle')
  const [error, setError]     = useState('')
  const [copied, setCopied]   = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleShorten(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim()) return

    setState('loading')
    setError('')
    setShortUrl('')

    try {
      const res = await fetch('/api/shorten', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ url: url.trim() }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setState('error')
        return
      }

      setShortUrl(data.shortUrl)
      setState('done')
    } catch {
      setError('Network error — please check your connection and try again.')
      setState('error')
    }
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
      const el = document.createElement('textarea')
      el.value = shortUrl
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  function handleReset() {
    setState('idle')
    setUrl('')
    setShortUrl('')
    setError('')
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  return (
    <div>
      {/* Input card */}
      <form
        onSubmit={handleShorten}
        style={{
          background:   '#11112b',
          border:       '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding:      '2.5rem',
        }}
      >
        <label htmlFor="url-input" style={{
          display:      'block',
          fontFamily:   'var(--font-inter)',
          fontWeight:   600,
          fontSize:     '0.875rem',
          color:        '#eceaf5',
          marginBottom: '0.75rem',
          letterSpacing:'-0.01em',
        }}>
          Long URL
        </label>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <input
            id="url-input"
            ref={inputRef}
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="example.com/some/very/long/url"
            required
            autoFocus
            style={{
              flex:          '1 1 280px',
              fontFamily:    'var(--font-inter)',
              fontSize:      '0.95rem',
              color:         '#eceaf5',
              backgroundColor:'#09091a',
              border:        '1px solid rgba(255,255,255,0.12)',
              borderRadius:  '8px',
              padding:       '0.8rem 1rem',
              outline:       'none',
              transition:    'border-color 0.2s',
            }}
            onFocus={(e)  => (e.target.style.borderColor = '#f5c518')}
            onBlur={(e)   => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
          />
          <button
            type="submit"
            disabled={state === 'loading' || !url.trim()}
            style={{
              fontFamily:      'var(--font-inter)',
              fontWeight:      700,
              fontSize:        '0.875rem',
              letterSpacing:   '0.04em',
              textTransform:   'uppercase',
              color:           '#09091a',
              backgroundColor: state === 'loading' || !url.trim() ? '#7a6a10' : '#f5c518',
              border:          'none',
              borderRadius:    '8px',
              padding:         '0.8rem 1.5rem',
              cursor:          state === 'loading' || !url.trim() ? 'not-allowed' : 'pointer',
              transition:      'background-color 0.2s',
              whiteSpace:      'nowrap',
            }}
            onMouseEnter={(e) => {
              if (state !== 'loading' && url.trim())
                (e.currentTarget as HTMLElement).style.backgroundColor = '#c9a012'
            }}
            onMouseLeave={(e) => {
              if (state !== 'loading' && url.trim())
                (e.currentTarget as HTMLElement).style.backgroundColor = '#f5c518'
            }}
          >
            {state === 'loading' ? 'Shortening…' : 'Shorten URL'}
          </button>
        </div>

        <p style={{
          fontFamily: 'var(--font-inter)', fontSize: '0.78rem',
          color: '#3d3a56', margin: '0.75rem 0 0',
        }}>
          Free · No account · Links hosted at twobitdigital.com/s/…
        </p>
      </form>

      {/* Error */}
      {state === 'error' && (
        <div style={{
          marginTop:    '1.25rem',
          background:   'rgba(239,68,68,0.08)',
          border:       '1px solid rgba(239,68,68,0.3)',
          borderRadius: '10px',
          padding:      '1rem 1.25rem',
          fontFamily:   'var(--font-inter)',
          fontSize:     '0.9rem',
          color:        '#fca5a5',
        }}>
          {error}
        </div>
      )}

      {/* Result */}
      {state === 'done' && shortUrl && (
        <div style={{
          marginTop:    '1.5rem',
          background:   'rgba(245,197,24,0.04)',
          border:       '1px solid rgba(245,197,24,0.25)',
          borderRadius: '16px',
          padding:      '2rem',
        }}>
          <div style={{
            fontFamily:   'var(--font-inter)', fontWeight: 600,
            fontSize:     '0.75rem', letterSpacing: '0.08em',
            textTransform:'uppercase', color: '#f5c518', marginBottom: '0.75rem',
          }}>
            Your short link
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily:    'var(--font-inter)', fontWeight: 700,
                fontSize:      'clamp(1rem, 3vw, 1.35rem)',
                color:         '#eceaf5', letterSpacing: '-0.02em',
                textDecoration:'none', wordBreak: 'break-all',
                flex:          '1 1 auto',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#f5c518')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#eceaf5')}
            >
              {shortUrl}
            </a>
            <button
              onClick={copyToClipboard}
              style={{
                fontFamily:      'var(--font-inter)', fontWeight: 700,
                fontSize:        '0.8rem', letterSpacing: '0.04em',
                textTransform:   'uppercase',
                color:           copied ? '#09091a' : '#f5c518',
                backgroundColor: copied ? '#f5c518' : 'transparent',
                border:          '1px solid #f5c518',
                borderRadius:    '6px',
                padding:         '0.5rem 1rem',
                cursor:          'pointer',
                transition:      'all 0.15s',
                whiteSpace:      'nowrap',
                flexShrink:      0,
              }}
            >
              {copied ? '✓ Copied!' : 'Copy'}
            </button>
          </div>

          <div style={{
            marginTop:   '1.25rem',
            paddingTop:  '1.25rem',
            borderTop:   '1px solid rgba(255,255,255,0.06)',
            fontFamily:  'var(--font-inter)', fontSize: '0.8rem', color: '#3d3a56',
            overflow:    'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            → {url}
          </div>

          <button
            onClick={handleReset}
            style={{
              marginTop:   '1.5rem',
              fontFamily:  'var(--font-inter)', fontWeight: 600,
              fontSize:    '0.8rem', color: '#5e5a7a',
              background:  'none', border: 'none',
              cursor:      'pointer', padding: 0,
              transition:  'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#9d99b8')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#5e5a7a')}
          >
            ← Shorten another URL
          </button>
        </div>
      )}
    </div>
  )
}

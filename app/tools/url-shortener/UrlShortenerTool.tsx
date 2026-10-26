'use client'

import { useState, useRef } from 'react'

/* ─── Single URL shortener ───────────────────────────────────── */

type SingleState = 'idle' | 'loading' | 'done' | 'error'

function SingleShortener() {
  const [url, setUrl]           = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [state, setState]       = useState<SingleState>('idle')
  const [error, setError]       = useState('')
  const [copied, setCopied]     = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleShorten(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim()) return
    setState('loading')
    setError('')
    setShortUrl('')
    try {
      const res  = await fetch('/api/shorten', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ url: url.trim() }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Something went wrong.'); setState('error'); return }
      setShortUrl(data.shortUrl)
      setState('done')
    } catch {
      setError('Network error — please check your connection.')
      setState('error')
    }
  }

  async function copy() {
    try { await navigator.clipboard.writeText(shortUrl) }
    catch {
      const el = document.createElement('textarea')
      el.value = shortUrl
      document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el)
    }
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }

  function reset() {
    setState('idle'); setUrl(''); setShortUrl(''); setError('')
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  return (
    <div>
      <form onSubmit={handleShorten} style={{
        background: '#11112b', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px', padding: '2rem',
      }}>
        <label htmlFor="url-input" style={labelStyle}>Long URL</label>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <input
            id="url-input" ref={inputRef} type="text"
            value={url} onChange={(e) => setUrl(e.target.value)}
            placeholder="example.com/some/very/long/url"
            required autoFocus
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#f5c518')}
            onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
          />
          <button type="submit" disabled={state === 'loading' || !url.trim()} style={btnStyle(state === 'loading' || !url.trim())}
            onMouseEnter={(e) => { if (state !== 'loading' && url.trim()) (e.currentTarget as HTMLElement).style.backgroundColor = '#c9a012' }}
            onMouseLeave={(e) => { if (state !== 'loading' && url.trim()) (e.currentTarget as HTMLElement).style.backgroundColor = '#f5c518' }}
          >
            {state === 'loading' ? 'Shortening…' : 'Shorten URL'}
          </button>
        </div>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#3d3a56', margin: '0.65rem 0 0' }}>
          Free · No account · Links at twobitdigital.com/s/…
        </p>
      </form>

      {state === 'error' && (
        <div style={{ marginTop: '1rem', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px', padding: '0.9rem 1.25rem', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#fca5a5' }}>
          {error}
        </div>
      )}

      {state === 'done' && shortUrl && (
        <div style={{ marginTop: '1.25rem', background: 'rgba(245,197,24,0.04)', border: '1px solid rgba(245,197,24,0.25)', borderRadius: '16px', padding: '1.75rem' }}>
          <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#f5c518', marginBottom: '0.65rem' }}>
            Your short link
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(1rem, 3vw, 1.3rem)', color: '#eceaf5', letterSpacing: '-0.02em', textDecoration: 'none', wordBreak: 'break-all', flex: '1 1 auto' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#f5c518')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#eceaf5')}
            >
              {shortUrl}
            </a>
            <button onClick={copy} style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: copied ? '#09091a' : '#f5c518', backgroundColor: copied ? '#f5c518' : 'transparent', border: '1px solid #f5c518', borderRadius: '6px', padding: '0.45rem 1rem', cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap', flexShrink: 0 }}>
              {copied ? '✓ Copied!' : 'Copy'}
            </button>
          </div>
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: '#3d3a56', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            → {url}
          </div>
          <button onClick={reset} style={{ marginTop: '1.25rem', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.78rem', color: '#5e5a7a', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.2s' }}
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

/* ─── Batch shortener ────────────────────────────────────────── */

type BatchResult = {
  original: string
  url?: string
  shortUrl?: string
  code?: string
  error?: string
}

function BatchShortener() {
  const [raw, setRaw]           = useState('')
  const [loading, setLoading]   = useState(false)
  const [results, setResults]   = useState<BatchResult[]>([])
  const [apiError, setApiError] = useState('')
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null)
  const [allCopied, setAllCopied] = useState(false)

  const urlCount = raw.split('\n').filter((l) => l.trim()).length

  async function handleBatch(e: React.FormEvent) {
    e.preventDefault()
    const urls = raw.split('\n').map((l) => l.trim()).filter(Boolean)
    if (!urls.length) return
    setLoading(true); setApiError(''); setResults([])
    try {
      const res  = await fetch('/api/shorten/batch', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ urls }),
      })
      const data = await res.json()
      if (!res.ok) { setApiError(data.error || 'Something went wrong.'); setLoading(false); return }
      setResults(data.results)
    } catch {
      setApiError('Network error — please check your connection.')
    }
    setLoading(false)
  }

  async function copyOne(text: string, idx: number) {
    try { await navigator.clipboard.writeText(text) } catch {
      const el = document.createElement('textarea'); el.value = text
      document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el)
    }
    setCopiedIdx(idx); setTimeout(() => setCopiedIdx(null), 1500)
  }

  async function copyAll() {
    const lines = results.filter((r) => r.shortUrl).map((r) => r.shortUrl!).join('\n')
    try { await navigator.clipboard.writeText(lines) } catch {
      const el = document.createElement('textarea'); el.value = lines
      document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el)
    }
    setAllCopied(true); setTimeout(() => setAllCopied(false), 2000)
  }

  function downloadCsv() {
    const header = 'Original URL,Short URL'
    const rows = results.map((r) =>
      `"${(r.url ?? r.original).replace(/"/g, '""')}","${r.shortUrl ?? r.error ?? ''}"`
    )
    const csv  = [header, ...rows].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const a    = document.createElement('a')
    a.href = URL.createObjectURL(blob); a.download = 'short-links.csv'; a.click()
  }

  const successCount = results.filter((r) => r.shortUrl).length

  return (
    <div>
      <form onSubmit={handleBatch} style={{
        background: '#11112b', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px', padding: '2rem',
      }}>
        <label htmlFor="batch-input" style={labelStyle}>
          URLs — one per line
          <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, color: '#3d3a56', marginLeft: '0.5rem' }}>
            (max 20)
          </span>
        </label>
        <textarea
          id="batch-input"
          rows={8}
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          placeholder={'example.com\nhttps://another-long-url.com/path\nwww.thirdurl.com/page'}
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, width: '100%', boxSizing: 'border-box', flex: 'unset' }}
          onFocus={(e) => (e.target.style.borderColor = '#f5c518')}
          onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#3d3a56', margin: 0 }}>
            {urlCount > 0 ? `${urlCount} URL${urlCount !== 1 ? 's' : ''} detected` : 'Paste URLs above, one per line'}
          </p>
          <button type="submit" disabled={loading || !urlCount} style={btnStyle(loading || !urlCount)}
            onMouseEnter={(e) => { if (!loading && urlCount) (e.currentTarget as HTMLElement).style.backgroundColor = '#c9a012' }}
            onMouseLeave={(e) => { if (!loading && urlCount) (e.currentTarget as HTMLElement).style.backgroundColor = '#f5c518' }}
          >
            {loading ? 'Shortening…' : `Shorten ${urlCount > 0 ? urlCount : ''} URL${urlCount !== 1 ? 's' : ''}`}
          </button>
        </div>
      </form>

      {apiError && (
        <div style={{ marginTop: '1rem', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px', padding: '0.9rem 1.25rem', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#fca5a5' }}>
          {apiError}
        </div>
      )}

      {results.length > 0 && (
        <div style={{ marginTop: '1.5rem', background: 'rgba(245,197,24,0.03)', border: '1px solid rgba(245,197,24,0.2)', borderRadius: '16px', overflow: 'hidden' }}>
          {/* Results header */}
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.8rem', color: '#f5c518' }}>
              {successCount} of {results.length} shortened
            </span>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <button onClick={copyAll} style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: allCopied ? '#09091a' : '#f5c518', backgroundColor: allCopied ? '#f5c518' : 'transparent', border: '1px solid #f5c518', borderRadius: '6px', padding: '0.4rem 0.9rem', cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap' }}>
                {allCopied ? '✓ Copied!' : 'Copy All'}
              </button>
              <button onClick={downloadCsv} style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#9d99b8', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', padding: '0.4rem 0.9rem', cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.35)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)')}
              >
                Download CSV
              </button>
            </div>
          </div>

          {/* Result rows */}
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {results.map((r, i) => (
              <li key={i} style={{ padding: '0.9rem 1.5rem', borderBottom: i < results.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                {/* Original */}
                <div style={{ flex: '1 1 180px', minWidth: 0 }}>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: '#3d3a56', margin: '0 0 0.15rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {r.url ?? r.original}
                  </p>
                  {r.shortUrl ? (
                    <a href={r.shortUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: '#eceaf5', textDecoration: 'none' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#f5c518')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#eceaf5')}
                    >
                      {r.shortUrl}
                    </a>
                  ) : (
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: '#fca5a5' }}>
                      {r.error ?? 'Failed'}
                    </span>
                  )}
                </div>
                {/* Copy button */}
                {r.shortUrl && (
                  <button onClick={() => copyOne(r.shortUrl!, i)} style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: copiedIdx === i ? '#09091a' : '#f5c518', backgroundColor: copiedIdx === i ? '#f5c518' : 'transparent', border: '1px solid rgba(245,197,24,0.4)', borderRadius: '5px', padding: '0.3rem 0.7rem', cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap', flexShrink: 0 }}>
                    {copiedIdx === i ? '✓' : 'Copy'}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

/* ─── Tabbed wrapper ─────────────────────────────────────────── */

type Tab = 'single' | 'batch'

export default function UrlShortenerTool() {
  const [tab, setTab] = useState<Tab>('single')

  return (
    <div>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', background: '#11112b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '0.3rem', width: 'fit-content' }}>
        {(['single', 'batch'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              fontFamily: 'var(--font-inter)', fontWeight: tab === t ? 700 : 400,
              fontSize: '0.85rem',
              color:           tab === t ? '#09091a' : '#9d99b8',
              backgroundColor: tab === t ? '#f5c518' : 'transparent',
              border: 'none', borderRadius: '7px',
              padding: '0.45rem 1.1rem', cursor: 'pointer', transition: 'all 0.15s',
            }}
          >
            {t === 'single' ? 'Single URL' : 'Batch URLs'}
          </button>
        ))}
      </div>

      {tab === 'single' ? <SingleShortener /> : <BatchShortener />}
    </div>
  )
}

/* ─── Shared styles ──────────────────────────────────────────── */

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-inter)', fontWeight: 600,
  fontSize: '0.8rem', letterSpacing: '0.04em',
  textTransform: 'uppercase', color: '#5e5a7a',
  marginBottom: '0.6rem',
}

const inputStyle: React.CSSProperties = {
  flex: '1 1 280px',
  fontFamily: 'var(--font-inter)', fontSize: '0.9rem',
  color: '#eceaf5', backgroundColor: '#09091a',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '8px', padding: '0.75rem 1rem',
  outline: 'none', transition: 'border-color 0.2s',
}

function btnStyle(disabled: boolean): React.CSSProperties {
  return {
    fontFamily: 'var(--font-inter)', fontWeight: 700,
    fontSize: '0.875rem', letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: '#09091a',
    backgroundColor: disabled ? '#7a6a10' : '#f5c518',
    border: 'none', borderRadius: '8px',
    padding: '0.75rem 1.5rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.2s', whiteSpace: 'nowrap',
  }
}

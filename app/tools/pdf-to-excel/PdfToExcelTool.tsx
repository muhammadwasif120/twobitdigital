'use client'

import { useCallback, useState } from 'react'

type PageData = { page: number; rows: string[][] }

export default function PdfToExcelTool() {
  const [file, setFile]       = useState<File | null>(null)
  const [pages, setPages]     = useState<PageData[]>([])
  const [status, setStatus]   = useState<'idle' | 'parsing' | 'exporting' | 'done' | 'error'>('idle')
  const [progress, setProgress] = useState(0)
  const [error, setError]     = useState('')

  const handleFile = useCallback(async (f: File) => {
    setFile(f); setPages([]); setError(''); setStatus('parsing'); setProgress(0)

    try {
      const pdfjsLib = await import('pdfjs-dist')
      pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`

      const buf   = await f.arrayBuffer()
      const pdf   = await pdfjsLib.getDocument({ data: buf }).promise
      const total = pdf.numPages
      const result: PageData[] = []

      for (let i = 1; i <= total; i++) {
        setProgress(Math.round((i / total) * 100))
        const page    = await pdf.getPage(i)
        const content = await page.getTextContent()

        // Group items into rows by approximate Y position
        const buckets = new Map<number, string[]>()
        for (const item of content.items) {
          if (!('str' in item)) continue
          const y = Math.round((item as { transform: number[] }).transform[5] / 5) * 5
          if (!buckets.has(y)) buckets.set(y, [])
          const str = (item as { str: string }).str.trim()
          if (str) buckets.get(y)!.push(str)
        }

        const rows = Array.from(buckets.entries())
          .sort((a, b) => b[0] - a[0])
          .map(([, cols]) => cols)
          .filter((r) => r.length > 0)

        if (rows.length) result.push({ page: i, rows })
      }

      setPages(result)
      setStatus('idle')
    } catch {
      setError('Could not read PDF. Make sure it is a valid, non-encrypted PDF.')
      setStatus('error')
    }
  }, [])

  const exportExcel = useCallback(async () => {
    if (!pages.length) return
    setStatus('exporting')

    try {
      const XLSX = await import('xlsx')
      const wb   = XLSX.utils.book_new()

      for (const { page, rows } of pages) {
        const ws = XLSX.utils.aoa_to_sheet(rows)
        XLSX.utils.book_append_sheet(wb, ws, `Page ${page}`)
      }

      const baseName = (file?.name ?? 'document').replace(/\.[^.]+$/, '')
      XLSX.writeFile(wb, `${baseName}.xlsx`)
      setStatus('done')
    } catch {
      setError('Export failed. Please try again.')
      setStatus('error')
    }
  }, [pages, file])

  const reset = () => {
    setFile(null); setPages([]); setStatus('idle'); setError(''); setProgress(0)
  }

  return (
    <div style={{
      background:   '#11112b',
      border:       '1px solid rgba(255,255,255,0.07)',
      borderRadius: '14px',
      padding:      '2rem',
    }}>
      {!file && (
        <label style={{
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          justifyContent: 'center',
          gap:            '0.75rem',
          border:         '2px dashed rgba(245,197,24,0.3)',
          borderRadius:   '10px',
          padding:        '3rem 2rem',
          cursor:         'pointer',
        }}
          onDragOver={(e) => { e.preventDefault(); (e.currentTarget as HTMLElement).style.borderColor = '#f5c518' }}
          onDragLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,197,24,0.3)' }}
          onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f) }}
        >
          <span style={{ fontSize: '2.5rem' }}>📄</span>
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, color: '#eceaf5', fontSize: '1rem' }}>
            Drop your PDF here
          </span>
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, color: '#9d99b8', fontSize: '0.85rem' }}>
            Text-based PDFs only (not scanned images)
          </span>
          <input type="file" accept=".pdf" style={{ display: 'none' }} onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f) }} />
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.85rem', color: '#09091a', background: '#f5c518', padding: '0.5rem 1.25rem', borderRadius: '8px' }}>
            Browse file
          </span>
        </label>
      )}

      {status === 'parsing' && (
        <div style={{ margin: '1rem 0' }}>
          <p style={{ color: '#9d99b8', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            Extracting text… {progress}%
          </p>
          <div style={{ height: '6px', background: '#1e1e44', borderRadius: '3px' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: '#f5c518', borderRadius: '3px', transition: 'width 0.2s' }} />
          </div>
        </div>
      )}

      {pages.length > 0 && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-inter)', color: '#eceaf5', fontWeight: 600 }}>{file?.name}</span>
            <span style={{ fontFamily: 'var(--font-inter)', color: '#9d99b8', fontSize: '0.85rem' }}>
              {pages.length} page{pages.length !== 1 ? 's' : ''} extracted
            </span>
            <button onClick={reset} style={{ background: 'none', border: 'none', color: '#9d99b8', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'var(--font-inter)' }}>
              ✕ Remove
            </button>
          </div>

          {/* Preview first page */}
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem', maxHeight: '240px', overflowY: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem', fontFamily: 'var(--font-inter)' }}>
              <tbody>
                {pages[0].rows.slice(0, 15).map((row, ri) => (
                  <tr key={ri} style={{ background: ri % 2 === 0 ? '#11112b' : '#13133a' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '5px 10px', color: '#ccc8e8', borderBottom: '1px solid rgba(255,255,255,0.04)', whiteSpace: 'nowrap' }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={exportExcel}
              disabled={status === 'exporting'}
              style={{
                background:   status === 'exporting' ? '#555' : '#f5c518',
                color:        '#09091a',
                border:       'none',
                borderRadius: '8px',
                padding:      '0.65rem 1.5rem',
                fontFamily:   'var(--font-inter)',
                fontWeight:   700,
                fontSize:     '0.9rem',
                cursor:       status === 'exporting' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'exporting' ? 'Exporting…' : '⬇ Download Excel'}
            </button>
            {status === 'done' && (
              <span style={{ color: '#22c55e', fontFamily: 'var(--font-inter)', fontSize: '0.875rem' }}>Excel downloaded!</span>
            )}
          </div>
        </>
      )}

      {error && (
        <p style={{ color: '#ef4444', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', marginTop: '1rem' }}>{error}</p>
      )}

      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#555577', marginTop: '1.5rem', marginBottom: 0 }}>
        Your file is processed entirely in your browser. Nothing is uploaded to our servers.
      </p>
    </div>
  )
}

'use client'

import { useCallback, useState } from 'react'

type SheetPreview = { name: string; rows: string[][] }

export default function ExcelToPdfTool() {
  const [file, setFile]         = useState<File | null>(null)
  const [sheets, setSheets]     = useState<SheetPreview[]>([])
  const [selected, setSelected] = useState<number>(0)
  const [status, setStatus]     = useState<'idle' | 'parsing' | 'converting' | 'done' | 'error'>('idle')
  const [error, setError]       = useState('')

  const handleFile = useCallback(async (f: File) => {
    if (!f) return
    setFile(f)
    setSheets([])
    setError('')
    setStatus('parsing')

    try {
      const XLSX = await import('xlsx')
      const buf  = await f.arrayBuffer()
      const wb   = XLSX.read(buf, { type: 'array' })

      const parsed: SheetPreview[] = wb.SheetNames.map((name) => {
        const ws   = wb.Sheets[name]
        const data = XLSX.utils.sheet_to_json<string[]>(ws, { header: 1, defval: '' }) as string[][]
        return { name, rows: data.slice(0, 500) }
      })
      setSheets(parsed)
      setSelected(0)
      setStatus('idle')
    } catch {
      setError('Could not read file. Make sure it is a valid .xlsx or .xls file.')
      setStatus('error')
    }
  }, [])

  const convert = useCallback(async () => {
    if (!sheets.length) return
    setStatus('converting')
    setError('')

    try {
      const { jsPDF }      = await import('jspdf')
      const autoTable      = (await import('jspdf-autotable')).default
      const sheet          = sheets[selected]
      const [head, ...body] = sheet.rows

      const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' })

      doc.setFont('helvetica', 'normal')
      doc.setFontSize(11)
      doc.setTextColor(30, 30, 50)
      doc.text(sheet.name, 40, 36)

      autoTable(doc, {
        head:       head ? [head.map(String)] : [],
        body:       body.map((r) => r.map(String)),
        startY:     48,
        styles:     { fontSize: 8, cellPadding: 4, overflow: 'linebreak' },
        headStyles: { fillColor: [13, 13, 34], textColor: [245, 197, 24], fontStyle: 'bold' },
        alternateRowStyles: { fillColor: [245, 245, 252] },
        margin: { left: 40, right: 40 },
      })

      const baseName = (file?.name ?? 'spreadsheet').replace(/\.[^.]+$/, '')
      doc.save(`${baseName}.pdf`)
      setStatus('done')
    } catch {
      setError('Conversion failed. Please try again.')
      setStatus('error')
    }
  }, [sheets, selected, file])

  const reset = () => {
    setFile(null); setSheets([]); setSelected(0); setStatus('idle'); setError('')
  }

  return (
    <div style={{
      background:    '#11112b',
      border:        '1px solid rgba(255,255,255,0.07)',
      borderRadius:  '14px',
      padding:       '2rem',
    }}>
      {/* Drop zone */}
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
          transition:     'border-color 0.2s',
        }}
          onDragOver={(e) => { e.preventDefault(); (e.currentTarget as HTMLElement).style.borderColor = '#f5c518' }}
          onDragLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,197,24,0.3)' }}
          onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f) }}
        >
          <span style={{ fontSize: '2.5rem' }}>📊</span>
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, color: '#eceaf5', fontSize: '1rem' }}>
            Drop your Excel file here
          </span>
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, color: '#9d99b8', fontSize: '0.85rem' }}>
            .xlsx and .xls supported
          </span>
          <input
            type="file"
            accept=".xlsx,.xls"
            style={{ display: 'none' }}
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
          />
          <span style={{
            fontFamily:    'var(--font-inter)',
            fontWeight:    600,
            fontSize:      '0.85rem',
            color:         '#09091a',
            background:    '#f5c518',
            padding:       '0.5rem 1.25rem',
            borderRadius:  '8px',
          }}>
            Browse file
          </span>
        </label>
      )}

      {/* Sheet selector + preview */}
      {sheets.length > 0 && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-inter)', color: '#eceaf5', fontWeight: 600 }}>
              {file?.name}
            </span>
            {sheets.length > 1 && (
              <select
                value={selected}
                onChange={(e) => setSelected(Number(e.target.value))}
                style={{
                  background:   '#0d0d22',
                  color:        '#eceaf5',
                  border:       '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '6px',
                  padding:      '0.3rem 0.6rem',
                  fontSize:     '0.85rem',
                  fontFamily:   'var(--font-inter)',
                }}
              >
                {sheets.map((s, i) => (
                  <option key={i} value={i}>{s.name}</option>
                ))}
              </select>
            )}
            <button onClick={reset} style={{ background: 'none', border: 'none', color: '#9d99b8', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'var(--font-inter)' }}>
              ✕ Remove
            </button>
          </div>

          {/* Table preview */}
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem', maxHeight: '280px', overflowY: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem', fontFamily: 'var(--font-inter)' }}>
              <tbody>
                {sheets[selected].rows.slice(0, 12).map((row, ri) => (
                  <tr key={ri} style={{ background: ri === 0 ? '#0d0d22' : ri % 2 === 0 ? '#11112b' : '#13133a' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{
                        padding:     '5px 10px',
                        color:       ri === 0 ? '#f5c518' : '#ccc8e8',
                        borderBottom:'1px solid rgba(255,255,255,0.04)',
                        whiteSpace:  'nowrap',
                        maxWidth:    '180px',
                        overflow:    'hidden',
                        textOverflow:'ellipsis',
                      }}>
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
              onClick={convert}
              disabled={status === 'converting'}
              style={{
                background:   status === 'converting' ? '#555' : '#f5c518',
                color:        '#09091a',
                border:       'none',
                borderRadius: '8px',
                padding:      '0.65rem 1.5rem',
                fontFamily:   'var(--font-inter)',
                fontWeight:   700,
                fontSize:     '0.9rem',
                cursor:       status === 'converting' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'converting' ? 'Converting…' : '⬇ Download PDF'}
            </button>
            {status === 'done' && (
              <span style={{ color: '#22c55e', fontFamily: 'var(--font-inter)', fontSize: '0.875rem' }}>PDF downloaded!</span>
            )}
          </div>
        </>
      )}

      {status === 'parsing' && (
        <p style={{ color: '#9d99b8', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', marginTop: '1rem' }}>Reading file…</p>
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

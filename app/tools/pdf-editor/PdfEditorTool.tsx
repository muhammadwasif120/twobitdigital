'use client'

import { useCallback, useRef, useState } from 'react'

type Annotation = { pageIndex: number; x: number; y: number; text: string; size: number; color: string }
type PageInfo    = { index: number; rotation: number; width: number; height: number }

export default function PdfEditorTool() {
  const [file, setFile]             = useState<File | null>(null)
  const [pages, setPages]           = useState<PageInfo[]>([])
  const [annotations, setAnnotations] = useState<Annotation[]>([])
  const [activePage, setActivePage] = useState(0)
  const [tool, setTool]             = useState<'select' | 'text'>('select')
  const [fontSize, setFontSize]     = useState(14)
  const [fontColor, setFontColor]   = useState('#000000')
  const [status, setStatus]         = useState<'idle' | 'loading' | 'saving' | 'done' | 'error'>('idle')
  const [error, setError]           = useState('')
  const canvasRefs                  = useRef<(HTMLCanvasElement | null)[]>([])
  const pdfDocRef                   = useRef<unknown>(null)

  const renderPage = useCallback(async (pdfDoc: unknown, pageInfo: PageInfo) => {
    const canvas = canvasRefs.current[pageInfo.index]
    if (!canvas) return
    const pdfjsLib = (await import('pdfjs-dist')) as typeof import('pdfjs-dist')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const page    = await (pdfDoc as any).getPage(pageInfo.index + 1)
    const viewport = page.getViewport({ scale: 1.2, rotation: pageInfo.rotation })
    canvas.width  = viewport.width
    canvas.height = viewport.height
    const ctx = canvas.getContext('2d')!
    await page.render({ canvasContext: ctx, viewport }).promise

    // Draw annotations on top
    const pageAnnotations = annotations.filter((a) => a.pageIndex === pageInfo.index)
    for (const ann of pageAnnotations) {
      ctx.font      = `${ann.size}px Arial`
      ctx.fillStyle = ann.color
      ctx.fillText(ann.text, ann.x, ann.y)
    }
    void pdfjsLib // keep import
  }, [annotations])

  const loadPdf = useCallback(async (f: File) => {
    setFile(f); setPages([]); setAnnotations([]); setActivePage(0); setError(''); setStatus('loading')
    try {
      const pdfjsLib = await import('pdfjs-dist')
      pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`

      const buf    = await f.arrayBuffer()
      const pdfDoc = await pdfjsLib.getDocument({ data: buf }).promise
      pdfDocRef.current = pdfDoc

      const infos: PageInfo[] = []
      for (let i = 0; i < pdfDoc.numPages; i++) {
        const page     = await pdfDoc.getPage(i + 1)
        const viewport = page.getViewport({ scale: 1.2 })
        infos.push({ index: i, rotation: 0, width: viewport.width, height: viewport.height })
      }
      setPages(infos)
      setStatus('idle')

      // Render after a tick so canvasRefs populate
      setTimeout(async () => {
        for (const info of infos) {
          await renderPage(pdfDoc, info)
        }
      }, 50)
    } catch {
      setError('Could not open PDF. Make sure it is a valid, non-encrypted PDF.')
      setStatus('error')
    }
  }, [renderPage])

  const rotatePage = useCallback(async (pageIndex: number) => {
    setPages((prev) => {
      const updated = prev.map((p) => p.index === pageIndex ? { ...p, rotation: (p.rotation + 90) % 360 } : p)
      setTimeout(async () => {
        const info = updated[pageIndex]
        if (pdfDocRef.current) await renderPage(pdfDocRef.current, info)
      }, 0)
      return updated
    })
  }, [renderPage])

  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>, pageIndex: number) => {
    if (tool !== 'text') return
    const canvas = canvasRefs.current[pageIndex]
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width  / rect.width
    const scaleY = canvas.height / rect.height
    const x = (e.clientX - rect.left) * scaleX
    const y = (e.clientY - rect.top)  * scaleY

    const text = prompt('Enter text:')
    if (!text) return

    const ann: Annotation = { pageIndex, x, y, text, size: fontSize, color: fontColor }
    setAnnotations((prev) => [...prev, ann])

    // Draw immediately
    const ctx = canvas.getContext('2d')!
    ctx.font      = `${fontSize}px Arial`
    ctx.fillStyle = fontColor
    ctx.fillText(text, x, y)
  }, [tool, fontSize, fontColor])

  const savePdf = useCallback(async () => {
    if (!file) return
    setStatus('saving')
    try {
      const { PDFDocument, rgb, StandardFonts } = await import('pdf-lib')
      const buf    = await file.arrayBuffer()
      const pdfDoc = await PDFDocument.load(buf)
      const font   = await pdfDoc.embedFont(StandardFonts.Helvetica)
      const allPages = pdfDoc.getPages()

      // Apply rotations
      for (const info of pages) {
        if (info.rotation !== 0) {
          allPages[info.index].setRotation({ type: 'degrees', angle: info.rotation } as Parameters<typeof allPages[0]['setRotation']>[0])
        }
      }

      // Apply text annotations
      for (const ann of annotations) {
        const page        = allPages[ann.pageIndex]
        const { height }  = page.getSize()
        const hexToRgb    = (hex: string) => {
          const r = parseInt(hex.slice(1, 3), 16) / 255
          const g = parseInt(hex.slice(3, 5), 16) / 255
          const b = parseInt(hex.slice(5, 7), 16) / 255
          return rgb(r, g, b)
        }

        // Convert canvas coords to PDF coords (Y flipped, accounting for 1.2 scale)
        const scale    = 1.2
        const pdfX     = ann.x / scale
        const pdfY     = height - ann.y / scale

        page.drawText(ann.text, {
          x:        pdfX,
          y:        pdfY,
          size:     ann.size,
          font,
          color:    hexToRgb(ann.color),
        })
      }

      const bytes    = await pdfDoc.save()
      const blob     = new Blob([bytes.buffer as ArrayBuffer], { type: 'application/pdf' })
      const url      = URL.createObjectURL(blob)
      const a        = document.createElement('a')
      a.href         = url
      a.download     = (file.name.replace(/\.pdf$/i, '') + '_edited.pdf')
      a.click()
      URL.revokeObjectURL(url)
      setStatus('done')
    } catch {
      setError('Could not save PDF. Please try again.')
      setStatus('error')
    }
  }, [file, pages, annotations])

  const reset = () => {
    setFile(null); setPages([]); setAnnotations([]); setStatus('idle'); setError(''); pdfDocRef.current = null
  }

  return (
    <div style={{ background: '#11112b', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '2rem' }}>
      {!file && (
        <label style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '0.75rem', border: '2px dashed rgba(245,197,24,0.3)', borderRadius: '10px', padding: '3rem 2rem', cursor: 'pointer',
        }}
          onDragOver={(e) => { e.preventDefault(); (e.currentTarget as HTMLElement).style.borderColor = '#f5c518' }}
          onDragLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,197,24,0.3)' }}
          onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) loadPdf(f) }}
        >
          <span style={{ fontSize: '2.5rem' }}>📑</span>
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, color: '#eceaf5', fontSize: '1rem' }}>Drop your PDF here</span>
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, color: '#9d99b8', fontSize: '0.85rem' }}>Add text, rotate pages, download</span>
          <input type="file" accept=".pdf" style={{ display: 'none' }} onChange={(e) => { const f = e.target.files?.[0]; if (f) loadPdf(f) }} />
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.85rem', color: '#09091a', background: '#f5c518', padding: '0.5rem 1.25rem', borderRadius: '8px' }}>Browse file</span>
        </label>
      )}

      {status === 'loading' && (
        <p style={{ color: '#9d99b8', fontFamily: 'var(--font-inter)', fontSize: '0.875rem' }}>Opening PDF…</p>
      )}

      {pages.length > 0 && (
        <>
          {/* Toolbar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <span style={{ fontFamily: 'var(--font-inter)', color: '#eceaf5', fontWeight: 600 }}>{file?.name}</span>
            <span style={{ fontFamily: 'var(--font-inter)', color: '#9d99b8', fontSize: '0.8rem' }}>{pages.length} page{pages.length !== 1 ? 's' : ''}</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Tool buttons */}
              {(['select', 'text'] as const).map((t) => (
                <button key={t} onClick={() => setTool(t)} style={{
                  background:   tool === t ? '#f5c518' : 'rgba(255,255,255,0.06)',
                  color:        tool === t ? '#09091a' : '#eceaf5',
                  border:       'none', borderRadius: '6px', padding: '0.35rem 0.8rem',
                  fontFamily:   'var(--font-inter)', fontWeight: 600, fontSize: '0.78rem', cursor: 'pointer',
                }}>
                  {t === 'select' ? '↖ Select' : '✏ Add Text'}
                </button>
              ))}
              {tool === 'text' && (
                <>
                  <input type="number" value={fontSize} min={8} max={72} onChange={(e) => setFontSize(Number(e.target.value))}
                    style={{ width: '56px', background: '#0d0d22', color: '#eceaf5', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px', padding: '0.3rem 0.4rem', fontFamily: 'var(--font-inter)', fontSize: '0.8rem' }} />
                  <input type="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)}
                    style={{ width: '36px', height: '32px', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px', cursor: 'pointer', background: 'none' }} />
                </>
              )}
              <button onClick={reset} style={{ background: 'none', border: 'none', color: '#9d99b8', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'var(--font-inter)' }}>✕ Close</button>
            </div>
          </div>

          {tool === 'text' && (
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: '#f5c518', marginBottom: '1rem', marginTop: 0 }}>
              Click anywhere on the page to add text
            </p>
          )}

          {/* Page tabs */}
          {pages.length > 1 && (
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {pages.map((p) => (
                <button key={p.index} onClick={() => setActivePage(p.index)} style={{
                  background:   activePage === p.index ? '#f5c518' : 'rgba(255,255,255,0.06)',
                  color:        activePage === p.index ? '#09091a' : '#9d99b8',
                  border:       'none', borderRadius: '6px', padding: '0.3rem 0.7rem',
                  fontFamily:   'var(--font-inter)', fontSize: '0.78rem', cursor: 'pointer',
                }}>
                  Page {p.index + 1}
                </button>
              ))}
            </div>
          )}

          {/* Canvas */}
          {pages.map((p) => (
            <div key={p.index} style={{ display: p.index === activePage ? 'block' : 'none', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-inter)', color: '#9d99b8', fontSize: '0.8rem' }}>Page {p.index + 1}</span>
                <button onClick={() => rotatePage(p.index)} style={{
                  background: 'rgba(255,255,255,0.06)', color: '#eceaf5', border: 'none', borderRadius: '6px',
                  padding: '0.25rem 0.6rem', fontFamily: 'var(--font-inter)', fontSize: '0.75rem', cursor: 'pointer',
                }}>
                  ↻ Rotate 90°
                </button>
                {p.rotation > 0 && <span style={{ fontFamily: 'var(--font-inter)', color: '#9d99b8', fontSize: '0.75rem' }}>{p.rotation}°</span>}
              </div>
              <div style={{ overflow: 'auto', maxHeight: '560px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px' }}>
                <canvas
                  ref={(el) => { canvasRefs.current[p.index] = el }}
                  onClick={(e) => handleCanvasClick(e, p.index)}
                  style={{ display: 'block', cursor: tool === 'text' ? 'text' : 'default', maxWidth: '100%' }}
                />
              </div>
            </div>
          ))}

          {/* Save */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
            <button
              onClick={savePdf}
              disabled={status === 'saving'}
              style={{
                background:   status === 'saving' ? '#555' : '#f5c518',
                color:        '#09091a',
                border:       'none', borderRadius: '8px', padding: '0.65rem 1.5rem',
                fontFamily:   'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem',
                cursor:       status === 'saving' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'saving' ? 'Saving…' : '⬇ Download Edited PDF'}
            </button>
            {status === 'done' && <span style={{ color: '#22c55e', fontFamily: 'var(--font-inter)', fontSize: '0.875rem' }}>PDF downloaded!</span>}
            {annotations.length > 0 && <span style={{ color: '#9d99b8', fontFamily: 'var(--font-inter)', fontSize: '0.8rem' }}>{annotations.length} annotation{annotations.length !== 1 ? 's' : ''}</span>}
          </div>
        </>
      )}

      {error && <p style={{ color: '#ef4444', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', marginTop: '1rem' }}>{error}</p>}

      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#555577', marginTop: '1.5rem', marginBottom: 0 }}>
        Your file is processed entirely in your browser. Nothing is uploaded to our servers.
      </p>
    </div>
  )
}

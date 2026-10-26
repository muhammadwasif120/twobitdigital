import type { Metadata } from 'next'
import PdfEditorTool from './PdfEditorTool'

export const metadata: Metadata = {
  title: 'PDF Editor — Free Tool | Two Bit Digital',
  description: 'Edit your PDF online — add text, rotate pages, reorder, then download. 100% client-side, no uploads, no accounts.',
}

export default function PdfEditorPage() {
  return (
    <main style={{ background: '#09091a', minHeight: '100vh', paddingTop: '5.5rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <div className="section-label">Free Tool</div>
          <h1 style={{
            fontFamily:    'var(--font-inter)',
            fontWeight:    800,
            fontSize:      'clamp(1.6rem, 3vw, 2.2rem)',
            color:         '#eceaf5',
            margin:        '0.5rem 0 0.5rem',
            letterSpacing: '-0.03em',
            lineHeight:    1.1,
          }}>
            PDF Editor
          </h1>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 300,
            fontSize:   '0.95rem',
            color:      '#9d99b8',
            margin:     0,
          }}>
            Add text, rotate pages, then download. Your file never leaves your browser — nothing stored on our servers.
          </p>
        </div>
        <PdfEditorTool />
      </div>
    </main>
  )
}

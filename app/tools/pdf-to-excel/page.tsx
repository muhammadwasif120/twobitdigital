import type { Metadata } from 'next'
import PdfToExcelTool from './PdfToExcelTool'

export const metadata: Metadata = {
  title: 'PDF to Excel Converter — Free Tool | Two Bit Digital',
  description: 'Extract text from any PDF into an Excel spreadsheet. 100% client-side — your file never leaves your browser.',
}

export default function PdfToExcelPage() {
  return (
    <main style={{ background: '#09091a', minHeight: '100vh', paddingTop: '5.5rem' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
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
            PDF to Excel Converter
          </h1>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 300,
            fontSize:   '0.95rem',
            color:      '#9d99b8',
            margin:     0,
          }}>
            Extract text content from a PDF into an Excel file. Works entirely in your browser — no uploads, no accounts.
          </p>
        </div>
        <PdfToExcelTool />
      </div>
    </main>
  )
}

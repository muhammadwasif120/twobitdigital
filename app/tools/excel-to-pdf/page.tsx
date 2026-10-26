import type { Metadata } from 'next'
import ExcelToPdfTool from './ExcelToPdfTool'

export const metadata: Metadata = {
  title: 'Excel to PDF Converter — Free Tool | Two Bit Digital',
  description: 'Convert Excel spreadsheets (.xlsx, .xls) to PDF instantly. 100% client-side — your file never leaves your browser.',
}

export default function ExcelToPdfPage() {
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
            Excel to PDF Converter
          </h1>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 300,
            fontSize:   '0.95rem',
            color:      '#9d99b8',
            margin:     0,
          }}>
            Upload your spreadsheet and download a clean PDF. Works entirely in your browser — no uploads, no accounts.
          </p>
        </div>
        <ExcelToPdfTool />
      </div>
    </main>
  )
}

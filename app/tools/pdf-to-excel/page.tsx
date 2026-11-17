import type { Metadata } from 'next'
import ToolPageShell from '@/components/shared/ToolPageShell'
import PdfToExcelTool from './PdfToExcelTool'

export const metadata: Metadata = {
  title: 'PDF to Excel Converter — Free Online Tool',
  description: 'Extract text from any PDF into an Excel spreadsheet. 100% client-side — your file never leaves your browser.',
  alternates: { canonical: 'https://www.twobitdigital.com/tools/pdf-to-excel' },
  openGraph: {
    title: 'Free PDF to Excel Converter by Two Bit Digital',
    description: 'Extract PDF text into an Excel file in your browser. No upload, no account.',
    url: 'https://www.twobitdigital.com/tools/pdf-to-excel',
    type: 'website',
  },
}

export default function PdfToExcelPage() {
  return (
    <ToolPageShell
      title="PDF to Excel Converter"
      intro="Extract text from a PDF into an Excel file, one sheet per page. Works entirely in your browser — no uploads, no accounts."
      maxWidth="860px"
      cta={{
        heading: 'Re-typing data from PDFs all day?',
        subtext: 'We build AI document workflows that read invoices, contracts and forms and feed the data straight into your system.',
        label:   'Talk to Us',
        href:    '/contact',
      }}
    >
      <PdfToExcelTool />
    </ToolPageShell>
  )
}

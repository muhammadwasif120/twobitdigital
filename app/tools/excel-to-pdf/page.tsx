import type { Metadata } from 'next'
import ToolPageShell from '@/components/shared/ToolPageShell'
import ExcelToPdfTool from './ExcelToPdfTool'

export const metadata: Metadata = {
  title: 'Excel to PDF Converter — Free Online Tool',
  description: 'Convert Excel spreadsheets (.xlsx, .xls) to PDF instantly. 100% client-side — your file never leaves your browser.',
  alternates: { canonical: 'https://www.twobitdigital.com/tools/excel-to-pdf' },
  openGraph: {
    title: 'Free Excel to PDF Converter by Two Bit Digital',
    description: 'Convert .xlsx and .xls to PDF in your browser. No upload, no account.',
    url: 'https://www.twobitdigital.com/tools/excel-to-pdf',
    type: 'website',
  },
}

export default function ExcelToPdfPage() {
  return (
    <ToolPageShell
      title="Excel to PDF Converter"
      intro="Upload your spreadsheet and download a clean PDF. Works entirely in your browser — no uploads, no accounts."
      maxWidth="860px"
      cta={{
        heading: 'Still running the business on spreadsheets?',
        subtext: 'We build ready-made CRMs and ERPs for distribution, textile, education and more. See one running, then we tailor it to you.',
        label:   'See Our CRMs',
        href:    '/crms',
      }}
    >
      <ExcelToPdfTool />
    </ToolPageShell>
  )
}

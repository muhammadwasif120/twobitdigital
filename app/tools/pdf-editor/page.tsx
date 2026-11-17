import type { Metadata } from 'next'
import ToolPageShell from '@/components/shared/ToolPageShell'
import PdfEditorTool from './PdfEditorTool'

export const metadata: Metadata = {
  title: 'PDF Editor — Free Online Tool',
  description: 'Edit your PDF online — add text, rotate pages, then download. 100% client-side, no uploads, no accounts.',
  alternates: { canonical: 'https://www.twobitdigital.com/tools/pdf-editor' },
  openGraph: {
    title: 'Free PDF Editor by Two Bit Digital',
    description: 'Add text and rotate pages in your browser. Nothing is uploaded or stored.',
    url: 'https://www.twobitdigital.com/tools/pdf-editor',
    type: 'website',
  },
}

export default function PdfEditorPage() {
  return (
    <ToolPageShell
      title="PDF Editor"
      intro="Add text, rotate pages, then download. Your file never leaves your browser — nothing is stored on our servers."
      maxWidth="1000px"
      cta={{
        heading: 'Need documents handled automatically?',
        subtext: 'We build document workflows and business software that generate, fill and file paperwork for you.',
        label:   'Talk to Us',
        href:    '/contact',
      }}
    >
      <PdfEditorTool />
    </ToolPageShell>
  )
}

import { NextResponse } from 'next/server'
import { issueToken } from '@/lib/contact-guard'

export const dynamic = 'force-dynamic'

// Issued when the contact form loads; the form must send it back with the message.
export async function GET() {
  return NextResponse.json({ token: issueToken() }, { headers: { 'Cache-Control': 'no-store' } })
}

import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

function randomCode(len = 6): string {
  let out = ''
  for (let i = 0; i < len; i++) {
    out += ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
  }
  return out
}

export async function POST(req: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json({ error: 'Service not configured' }, { status: 503 })
  }

  let body: { url?: string }
  try { body = await req.json() } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const raw = (body.url ?? '').trim()
  if (!raw) return NextResponse.json({ error: 'URL is required' }, { status: 400 })

  // Validate URL
  try {
    const parsed = new URL(raw)
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return NextResponse.json({ error: 'Only http/https URLs are supported' }, { status: 400 })
    }
  } catch {
    return NextResponse.json({ error: 'Please enter a valid URL' }, { status: 400 })
  }

  const supabase = createClient(supabaseUrl, serviceKey)

  // Try up to 5 codes to avoid collisions
  for (let attempt = 0; attempt < 5; attempt++) {
    const code = randomCode()
    const { error } = await supabase
      .from('short_links')
      .insert({ code, target_url: raw })

    if (!error) {
      return NextResponse.json({
        code,
        shortUrl: `https://twobitdigital.com/s/${code}`,
      })
    }
    // 23505 = unique_violation — try a new code
    if (error.code !== '23505') {
      return NextResponse.json({ error: 'Failed to create link' }, { status: 500 })
    }
  }

  return NextResponse.json({ error: 'Please try again' }, { status: 500 })
}

import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const MAX_BATCH = 20

function randomCode(len = 6): string {
  let out = ''
  for (let i = 0; i < len; i++) out += ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
  return out
}

function normaliseUrl(raw: string): string {
  const trimmed = raw.trim()
  return /^https?:\/\//i.test(trimmed) ? trimmed : 'https://' + trimmed
}

function isValidUrl(url: string): boolean {
  try {
    const { protocol } = new URL(url)
    return protocol === 'http:' || protocol === 'https:'
  } catch { return false }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function shortenOne(supabase: SupabaseClient<any>, url: string): Promise<{ shortUrl: string; code: string } | { error: string }> {
  for (let attempt = 0; attempt < 5; attempt++) {
    const code = randomCode()
    const { error } = await supabase.from('short_links').insert({ code, target_url: url })
    if (!error) return { code, shortUrl: `https://twobitdigital.com/s/${code}` }
    if ((error as { code?: string }).code !== '23505') return { error: 'DB error' }
  }
  return { error: 'Please try again' }
}

export async function POST(req: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json({ error: 'Service not configured' }, { status: 503 })
  }

  let body: { urls?: unknown }
  try { body = await req.json() } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (!Array.isArray(body.urls) || body.urls.length === 0) {
    return NextResponse.json({ error: 'urls must be a non-empty array' }, { status: 400 })
  }

  if (body.urls.length > MAX_BATCH) {
    return NextResponse.json({ error: `Maximum ${MAX_BATCH} URLs per batch` }, { status: 400 })
  }

  const supabase = createClient(supabaseUrl, serviceKey)

  const results = await Promise.all(
    (body.urls as string[]).map(async (raw) => {
      const original = String(raw).trim()
      if (!original) return { original, error: 'Empty URL' }

      const url = normaliseUrl(original)
      if (!isValidUrl(url)) return { original, error: 'Invalid URL' }

      const result = await shortenOne(supabase, url)
      return { original, url, ...result }
    }),
  )

  return NextResponse.json({ results })
}

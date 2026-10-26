import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(
  _req: NextRequest,
  { params }: { params: { code: string } },
) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceKey) {
    return NextResponse.redirect(new URL('https://twobitdigital.com/tools/url-shortener'))
  }

  const supabase = createClient(supabaseUrl, serviceKey)
  const { data } = await supabase
    .from('short_links')
    .select('target_url')
    .eq('code', params.code)
    .single()

  if (!data) {
    return NextResponse.redirect(new URL('https://twobitdigital.com/tools/url-shortener'))
  }

  // Increment click count without blocking the redirect
  supabase.rpc('increment_link_clicks', { link_code: params.code }).then(() => {})

  return NextResponse.redirect(data.target_url, { status: 301 })
}

// Anti-spam helpers for the contact form. Stateless: nothing is stored, so it works on serverless.
//  * A signed, time-stamped token is issued when the form loads. Posting without one, with a forged one,
//    or within a few seconds of loading is refused (scripts that post straight to the API skip the page).
//  * Soft signals (many links, spam phrases, junk names) never drop a message: it is sent flagged to one inbox
//    so a real lead is never lost.
import { createHmac, createHash, timingSafeEqual } from 'node:crypto'

const secret = () =>
  process.env.CONTACT_SECRET ?? createHash('sha256').update(`contact:${process.env.RESEND_API_KEY ?? 'dev'}`).digest('hex')
const sign = (payload: string) => createHmac('sha256', secret()).update(payload).digest('base64url')

// Only headers Vercel sets itself: a client-supplied cf-connecting-ip would let a bot rotate fake IPs past the rate limit.
export function clientIp(headers: Headers): string {
  return (
    headers.get('x-vercel-forwarded-for') ??
    headers.get('x-real-ip') ??
    headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    'unknown'
  )
}

export type TurnstileResult = 'ok' | 'failed' | 'disabled' | 'unavailable'

// Inert until TURNSTILE_SECRET_KEY is set. A Cloudflare outage returns 'unavailable' so real leads are not lost.
export async function verifyTurnstile(token: unknown, ip: string): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return 'disabled'
  if (typeof token !== 'string' || !token || token.length > 4096) return 'failed'
  try {
    const body = new URLSearchParams({ secret, response: token })
    if (ip !== 'unknown') body.set('remoteip', ip)
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
      signal: AbortSignal.timeout(5000),
    })
    const data = (await res.json()) as { success?: boolean }
    return data.success ? 'ok' : 'failed'
  } catch {
    return 'unavailable'
  }
}

export const MIN_AGE_MS = 4_000
export const MAX_AGE_MS = 3 * 60 * 60 * 1000

export function issueToken(now = Date.now()): string {
  const payload = String(now)
  return `${payload}.${sign(payload)}`
}

export type TokenCheck = 'ok' | 'missing' | 'invalid' | 'too_fast' | 'expired'
export function checkToken(token: unknown, now = Date.now()): TokenCheck {
  if (typeof token !== 'string' || !token) return 'missing'
  const [payload, sig] = token.split('.')
  if (!payload || !sig || !/^\d{10,15}$/.test(payload)) return 'invalid'
  const a = Buffer.from(sig), b = Buffer.from(sign(payload))
  if (a.length !== b.length || !timingSafeEqual(a, b)) return 'invalid'
  const age = now - Number(payload)
  if (age < MIN_AGE_MS) return 'too_fast'
  if (age > MAX_AGE_MS) return 'expired'
  return 'ok'
}

const SPAM_PHRASES = /\b(backlinks?|guest post|seo (services|packages?)|rank (your|#?1)|crypto|forex|casino|viagra|loan offer|whatsapp me|telegram|click here|buy followers|make money|investment opportunity|dear sir\/madam)\b/i
export function spamSignals(f: { name: string; email: string; company?: string; message: string }): string[] {
  const out: string[] = []
  const links = (f.message.match(/https?:\/\/|www\./gi) ?? []).length
  if (links >= 2) out.push(`${links} links in the message`)
  if (/https?:\/\/|www\./i.test(f.name) || /https?:\/\/|www\./i.test(f.company ?? '')) out.push('link in the name or company')
  if (SPAM_PHRASES.test(f.message)) out.push('spam phrase in the message')
  if (f.message.trim().length < 15) out.push('very short message')
  if (/[Ѐ-ӿ一-鿿؀-ۿ]/.test(f.message) === false && /(.)\1{7,}/.test(f.message)) out.push('repeated characters')
  if (f.name.trim().toLowerCase() === f.message.trim().toLowerCase()) out.push('name equals message')
  if (/@(mailinator|guerrillamail|10minutemail|tempmail|yopmail|trashmail)\./i.test(f.email)) out.push('disposable email address')
  return out
}

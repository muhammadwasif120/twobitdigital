// Anti-spam helpers for the contact form. Stateless: nothing is stored, so it works on serverless.
//  * A signed, time-stamped token is issued when the form loads. Posting without one, with a forged one,
//    or within a few seconds of loading is refused (scripts that post straight to the API skip the page).
//  * Soft signals (many links, spam phrases, junk names) never drop a message: it is sent flagged to one inbox
//    so a real lead is never lost.
import { createHmac, createHash, timingSafeEqual } from 'node:crypto'

const secret = () =>
  process.env.CONTACT_SECRET ?? createHash('sha256').update(`contact:${process.env.RESEND_API_KEY ?? 'dev'}`).digest('hex')
const sign = (payload: string) => createHmac('sha256', secret()).update(payload).digest('base64url')

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

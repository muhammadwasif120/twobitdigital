import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, project_type, message, honeypot } = body

    // Bot trap
    if (honeypot) {
      return NextResponse.json({ success: true })
    }

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const subject = project_type
      ? `New project brief from ${name} — ${project_type}`
      : `New project brief from ${name}`

    await resend.emails.send({
      from:    'Two Bit Digital <noreply@twobitdigital.com>',
      to:      ['admin@twobitdigital.com'],
      replyTo: email,
      subject,
      html: `
        <!DOCTYPE html>
        <html>
          <head><meta charset="utf-8"/></head>
          <body style="font-family:Arial,sans-serif;background:#09091a;color:#eceaf5;padding:2rem;max-width:600px;margin:0 auto;">
            <div style="background:#11112b;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:2rem;">
              <h1 style="font-size:1.4rem;color:#f5c518;margin:0 0 1.5rem;">New Project Brief</h1>

              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:0.6rem 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#9d99b8;width:140px;font-size:0.85rem;">Name</td>
                  <td style="padding:0.6rem 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:0.9rem;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding:0.6rem 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#9d99b8;font-size:0.85rem;">Email</td>
                  <td style="padding:0.6rem 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:0.9rem;">
                    <a href="mailto:${escapeHtml(email)}" style="color:#f5c518;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding:0.6rem 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#9d99b8;font-size:0.85rem;">Company</td>
                  <td style="padding:0.6rem 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:0.9rem;">${escapeHtml(company)}</td>
                </tr>` : ''}
                ${project_type ? `
                <tr>
                  <td style="padding:0.6rem 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#9d99b8;font-size:0.85rem;">Project Type</td>
                  <td style="padding:0.6rem 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:0.9rem;">${escapeHtml(project_type)}</td>
                </tr>` : ''}
              </table>

              <div style="margin-top:1.5rem;">
                <p style="color:#9d99b8;font-size:0.85rem;margin:0 0 0.5rem;">Message</p>
                <div style="background:#16163a;border-radius:8px;padding:1rem;font-size:0.9rem;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</div>
              </div>
            </div>
            <p style="text-align:center;color:#5e5a7a;font-size:0.75rem;margin-top:1rem;">
              Sent via twobitdigital.com contact form
            </p>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

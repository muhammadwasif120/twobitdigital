import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'Meta Tech Provider | Two Bit Digital — Verified Partner',
  description:
    'Two Bit Digital is a verified Meta Tech Provider. We build production integrations with WhatsApp Business API, Meta Conversions API, Instagram Graph API, and Meta Business Suite for clients across the UK, US, Australia, and Pakistan.',
  alternates: { canonical: 'https://twobitdigital.com/partners/meta' },
  openGraph: {
    title: 'Meta Tech Provider | Two Bit Digital',
    description:
      'Verified Meta Tech Provider — WhatsApp Business API, Conversions API, Instagram Graph API, and Meta Business Suite integrations.',
    url: 'https://twobitdigital.com/partners/meta',
    type: 'website',
  },
}

const META_BLUE = '#0082FB'

// ── Style atoms ─────────────────────────────────────────────────────────────

const h2Style = {
  fontFamily:    'var(--font-inter)',
  fontWeight:    800 as const,
  fontSize:      'clamp(1.7rem, 3.5vw, 2.4rem)',
  color:         '#eceaf5',
  margin:        '0 0 1rem',
  letterSpacing: '-0.03em',
  lineHeight:    1.15,
}

const bodyStyle = {
  fontFamily: 'var(--font-inter)',
  fontWeight: 300 as const,
  fontSize:   '1rem',
  color:      '#9d99b8',
  lineHeight: 1.85,
  margin:     '0 0 1rem',
}

const cardStyle = {
  backgroundColor: '#11112b',
  border:          '1px solid rgba(255,255,255,0.06)',
  borderRadius:    '14px',
  padding:         '1.75rem',
}

const codeBlockStyle = {
  backgroundColor: '#060612',
  border:          '1px solid rgba(255,255,255,0.08)',
  borderRadius:    '10px',
  padding:         '1.5rem 1.75rem',
  fontFamily:      '"JetBrains Mono", "Fira Code", "Cascadia Code", ui-monospace, monospace',
  fontSize:        '0.8rem',
  color:           '#a8b5c8',
  lineHeight:      1.9,
  overflowX:       'auto' as const,
  margin:          '1.25rem 0',
  display:         'block' as const,
  whiteSpace:      'pre' as const,
}

// ── Capabilities ─────────────────────────────────────────────────────────────

const capabilities = [
  {
    icon: '💬',
    name: 'WhatsApp Business API',
    desc: 'Send transactional messages, event notifications, ticket confirmations, and support conversations at scale via Meta Cloud API — critical infrastructure in markets where WhatsApp is the primary communication channel.',
  },
  {
    icon: '📊',
    name: 'Meta Conversions API',
    desc: 'Server-side event tracking that bypasses browser-level blockers and iOS restrictions. Sends purchase, lead, and custom events directly from the server to Meta — higher match rates, more accurate attribution.',
  },
  {
    icon: '🔑',
    name: 'Facebook & Instagram Login',
    desc: 'Social authentication via OAuth 2.0 for web and mobile applications. Reduces friction at sign-up, enables permission-scoped access to social profiles and pages, and simplifies identity management.',
  },
  {
    icon: '📱',
    name: 'Instagram Graph API',
    desc: 'Content publishing, inbox management, comment moderation, and insights access for business accounts. Used in social management tooling and client-facing dashboards.',
  },
  {
    icon: '💰',
    name: 'Meta Marketing API',
    desc: 'Programmatic ad campaign creation, management, and reporting. Enables automated budget optimisation, audience management, and performance dashboards built directly into client platforms.',
  },
  {
    icon: '🏢',
    name: 'Meta Business Suite API',
    desc: 'Manage pages, ad accounts, and business assets on behalf of client businesses. As a verified Tech Provider, Two Bit Digital can request and manage access to client Meta Business assets programmatically.',
  },
]

// ── Code examples ────────────────────────────────────────────────────────────

const whatsappCode = `// WhatsApp ticket confirmation — Meta Cloud API (Node.js / Edge Function)
const sendTicketConfirmation = async ({
  recipientPhone,
  attendeeName,
  eventName,
  ticketCode,
}: TicketConfirmationParams) => {
  const res = await fetch(
    \`https://graph.facebook.com/v19.0/\${process.env.WA_PHONE_NUMBER_ID}/messages\`,
    {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${process.env.WHATSAPP_TOKEN}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: recipientPhone,
        type: 'template',
        template: {
          name: 'ticket_confirmation',
          language: { code: 'en' },
          components: [
            {
              type: 'body',
              parameters: [
                { type: 'text', text: attendeeName },
                { type: 'text', text: eventName },
                { type: 'text', text: ticketCode },
              ],
            },
          ],
        },
      }),
    }
  )
  return res.json()
}`

const conversionsCode = `// Meta Conversions API — server-side purchase event
// Fires from the server, bypasses ad blockers and iOS tracking restrictions.
const trackPurchase = async ({
  hashedEmail,
  hashedPhone,
  orderTotal,
  orderId,
  clientIp,
  userAgent,
}: PurchaseEventParams) => {
  const res = await fetch(
    \`https://graph.facebook.com/v19.0/\${process.env.META_PIXEL_ID}/events\`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [
          {
            event_name: 'Purchase',
            event_time: Math.floor(Date.now() / 1000),
            event_source_url: 'https://tikkitx.com/checkout',
            action_source: 'website',
            user_data: {
              em: hashedEmail,          // SHA-256 hashed
              ph: hashedPhone,          // SHA-256 hashed
              client_ip_address: clientIp,
              client_user_agent: userAgent,
            },
            custom_data: {
              currency: 'PKR',
              value: orderTotal,
              order_id: orderId,
              content_type: 'product',
            },
          },
        ],
        access_token: process.env.META_CONVERSIONS_TOKEN,
      }),
    }
  )
  return res.json()
}`

// ── Page ─────────────────────────────────────────────────────────────────────

export default function MetaPartnerPage() {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section style={{
          background:    'linear-gradient(180deg, #09091a 0%, #0d0d22 100%)',
          paddingTop:    '9rem',
          paddingBottom: '5rem',
          borderBottom:  '1px solid rgba(255,255,255,0.06)',
          position:      'relative',
          overflow:      'hidden',
        }}>
          {/* Ambient glow — Meta blue */}
          <div style={{
            position:     'absolute',
            top:          '-80px',
            left:         '50%',
            transform:    'translateX(-50%)',
            width:        '900px',
            height:       '500px',
            borderRadius: '50%',
            pointerEvents:'none',
            background:   `radial-gradient(circle, ${META_BLUE}14 0%, transparent 65%)`,
          }} />

          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
            position: 'relative',
            zIndex:   1,
          }}>
            <Breadcrumb crumbs={[
              { label: 'Home',     href: '/' },
              { label: 'Partners', href: '/partners/meta' },
              { label: 'Meta' },
            ]} />

            <div style={{ maxWidth: '820px', marginTop: '2rem' }}>

              {/* Verification badges */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
                {[
                  { label: 'Business Verified', date: '18 Apr 2026' },
                  { label: 'Tech Provider Verified', date: '18 Apr 2026' },
                ].map((badge) => (
                  <div key={badge.label} style={{
                    display:         'inline-flex',
                    alignItems:      'center',
                    gap:             '0.6rem',
                    backgroundColor: `${META_BLUE}12`,
                    border:          `1px solid ${META_BLUE}40`,
                    borderRadius:    '999px',
                    padding:         '0.4rem 1rem 0.4rem 0.6rem',
                  }}>
                    <span style={{
                      backgroundColor: META_BLUE,
                      borderRadius:    '50%',
                      width:           '8px',
                      height:          '8px',
                      display:         'inline-block',
                      flexShrink:      0,
                    }} />
                    <span style={{
                      fontFamily:   'var(--font-inter)',
                      fontWeight:   600,
                      fontSize:     '0.72rem',
                      color:        META_BLUE,
                      letterSpacing:'0.03em',
                    }}>
                      {badge.label}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 300,
                      fontSize:   '0.68rem',
                      color:      '#5e5a7a',
                    }}>
                      · {badge.date}
                    </span>
                  </div>
                ))}
              </div>

              <h1 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(2.2rem, 5vw, 3.6rem)',
                lineHeight:    1.08,
                color:         '#eceaf5',
                margin:        '0 0 1.5rem',
                letterSpacing: '-0.03em',
              }}>
                Building with{' '}
                <span style={{ color: META_BLUE }}>Meta&apos;s Platform</span>
              </h1>

              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize:   'clamp(1rem, 2vw, 1.2rem)',
                color:      '#9d99b8',
                lineHeight: 1.8,
                margin:     '0 0 2.5rem',
                maxWidth:   '680px',
              }}>
                Two Bit Digital is a verified Meta Tech Provider — both business-verified and
                access-verified. We build production integrations across WhatsApp Business API,
                Meta Conversions API, Instagram Graph API, and Meta Business Suite on behalf of
                clients across the UK, US, Australia, and Pakistan.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{
                  display:         'inline-block',
                  backgroundColor: '#f5c518',
                  color:           '#09091a',
                  fontFamily:      'var(--font-inter)',
                  fontWeight:      700,
                  fontSize:        '0.9rem',
                  padding:         '0.85rem 1.75rem',
                  borderRadius:    '8px',
                  textDecoration:  'none',
                  letterSpacing:   '-0.01em',
                }}>
                  Start a Project
                </Link>
                <a href="#integrations" style={{
                  display:      'inline-block',
                  color:        '#9d99b8',
                  fontFamily:   'var(--font-inter)',
                  fontWeight:   500,
                  fontSize:     '0.9rem',
                  padding:      '0.85rem 1.75rem',
                  borderRadius: '8px',
                  textDecoration:'none',
                  border:       '1px solid rgba(255,255,255,0.1)',
                }}>
                  View Integrations ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Verification detail ───────────────────────────────────── */}
        <section style={{ backgroundColor: '#0d0d22', padding: '4rem 0' }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div className="verify-grid" style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap:                 '1px',
              backgroundColor:     'rgba(255,255,255,0.06)',
              border:              '1px solid rgba(255,255,255,0.06)',
              borderRadius:        '14px',
              overflow:            'hidden',
            }}>
              {[
                {
                  label: 'Business Verification',
                  value: 'Verified',
                  sub:   'Two Bit Digital Ltd — Companies House #14710072',
                  color: META_BLUE,
                },
                {
                  label: 'Tech Provider Access',
                  value: 'Verified',
                  sub:   'Authorised to access Meta business assets on behalf of clients',
                  color: META_BLUE,
                },
                {
                  label: 'Verified Since',
                  value: '18 April 2026',
                  sub:   'Meta Business Manager · app.business.meta.com',
                  color: '#eceaf5',
                },
              ].map((item, i) => (
                <div key={item.label} style={{
                  backgroundColor: i === 1 ? `${META_BLUE}08` : 'transparent',
                  padding:         '2rem',
                }}>
                  <p style={{
                    fontFamily:    'var(--font-inter)',
                    fontSize:      '0.68rem',
                    fontWeight:    600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color:         '#5e5a7a',
                    margin:        '0 0 0.5rem',
                  }}>
                    {item.label}
                  </p>
                  <p style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '1.1rem',
                    color:         item.color,
                    margin:        '0 0 0.4rem',
                    letterSpacing: '-0.01em',
                  }}>
                    ✓ {item.value}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize:   '0.78rem',
                    color:      '#5e5a7a',
                    margin:     0,
                    lineHeight: 1.6,
                  }}>
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Capabilities ──────────────────────────────────────────── */}
        <section id="integrations" style={{
          backgroundColor: '#09091a',
          padding:         '5rem 0',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
              <div style={{
                display:       'inline-flex',
                alignItems:    'center',
                gap:           '0.4rem',
                fontFamily:    'var(--font-inter)',
                fontWeight:    600,
                fontSize:      '0.7rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         META_BLUE,
                border:        `1px solid ${META_BLUE}33`,
                borderRadius:  '4px',
                padding:       '0.25rem 0.6rem',
                marginBottom:  '1.25rem',
              }}>
                API Surface
              </div>
              <h2 style={h2Style}>What we build with Meta</h2>
              <p style={bodyStyle}>
                As a verified Tech Provider, Two Bit Digital can access and integrate Meta&apos;s
                full commercial API surface on behalf of client businesses. Every integration is
                built for production — authenticated, rate-limit-aware, and error-resilient.
              </p>
            </div>

            <div className="cap-grid" style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap:                 '1.25rem',
            }}>
              {capabilities.map((c) => (
                <div key={c.name} style={cardStyle}>
                  <div style={{ fontSize: '1.4rem', marginBottom: '0.85rem' }}>{c.icon}</div>
                  <h3 style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '0.95rem',
                    color:         '#eceaf5',
                    margin:        '0 0 0.6rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {c.name}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize:   '0.875rem',
                    color:      '#9d99b8',
                    lineHeight: 1.75,
                    margin:     0,
                  }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tikkit X spotlight ────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
          padding:         '5rem 0',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
              <div style={{
                display:       'inline-flex',
                alignItems:    'center',
                gap:           '0.4rem',
                fontFamily:    'var(--font-inter)',
                fontWeight:    600,
                fontSize:      '0.7rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         META_BLUE,
                border:        `1px solid ${META_BLUE}33`,
                borderRadius:  '4px',
                padding:       '0.25rem 0.6rem',
                marginBottom:  '1.25rem',
              }}>
                In Production
              </div>
              <h2 style={h2Style}>Live Meta integrations in Tikkit X</h2>
              <p style={bodyStyle}>
                Tikkit X — Two Bit Digital&apos;s event ticketing platform for Pakistan — uses
                Meta&apos;s platform as a core part of its communication and marketing
                infrastructure. WhatsApp has over 80% penetration in Pakistan, making
                the WhatsApp Business API essential, not optional.
              </p>
            </div>

            <div className="tikkit-grid" style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1fr',
              gap:                 '1.5rem',
            }}>
              {/* WhatsApp integration */}
              <div style={{
                ...cardStyle,
                borderColor: `${META_BLUE}22`,
                position:    'relative',
                overflow:    'hidden',
              }}>
                <div style={{
                  position:     'absolute',
                  top:          '-60px',
                  right:        '-60px',
                  width:        '200px',
                  height:       '200px',
                  borderRadius: '50%',
                  background:   `radial-gradient(circle, ${META_BLUE}10 0%, transparent 70%)`,
                  pointerEvents:'none',
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display:      'flex',
                    alignItems:   'center',
                    gap:          '0.6rem',
                    marginBottom: '1.25rem',
                  }}>
                    <span style={{ fontSize: '1.3rem' }}>💬</span>
                    <span style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    700,
                      fontSize:      '1rem',
                      color:         '#eceaf5',
                      letterSpacing: '-0.01em',
                    }}>
                      WhatsApp Ticketing
                    </span>
                    <span style={{
                      backgroundColor: `${META_BLUE}15`,
                      color:           META_BLUE,
                      fontSize:        '0.65rem',
                      fontFamily:      'var(--font-inter)',
                      fontWeight:      600,
                      padding:         '0.2rem 0.55rem',
                      borderRadius:    '4px',
                      border:          `1px solid ${META_BLUE}30`,
                      letterSpacing:   '0.04em',
                    }}>
                      LIVE
                    </span>
                  </div>
                  <p style={{ ...bodyStyle, fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                    Every ticket purchase on Tikkit X triggers a WhatsApp message to the
                    attendee — confirmation, QR code, and event details — delivered
                    via Meta Cloud API Edge Functions. No SMS, no email dependency.
                  </p>
                  <ul style={{
                    listStyle:    'none',
                    padding:      0,
                    margin:       0,
                    display:      'flex',
                    flexDirection:'column',
                    gap:          '0.5rem',
                  }}>
                    {[
                      'Ticket confirmation with HMAC-SHA256 QR code',
                      'Event reminder messages (24h and 2h before)',
                      'Real-time check-in notifications for organisers',
                      'Refund and cancellation alerts',
                    ].map((item) => (
                      <li key={item} style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize:   '0.82rem',
                        color:      '#9d99b8',
                        fontWeight: 300,
                        display:    'flex',
                        gap:        '0.6rem',
                      }}>
                        <span style={{ color: META_BLUE, flexShrink: 0 }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Conversions + Pixel */}
              <div style={{
                ...cardStyle,
                borderColor: `${META_BLUE}22`,
                position:    'relative',
                overflow:    'hidden',
              }}>
                <div style={{
                  position:     'absolute',
                  top:          '-60px',
                  right:        '-60px',
                  width:        '200px',
                  height:       '200px',
                  borderRadius: '50%',
                  background:   `radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)`,
                  pointerEvents:'none',
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display:      'flex',
                    alignItems:   'center',
                    gap:          '0.6rem',
                    marginBottom: '1.25rem',
                  }}>
                    <span style={{ fontSize: '1.3rem' }}>📊</span>
                    <span style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    700,
                      fontSize:      '1rem',
                      color:         '#eceaf5',
                      letterSpacing: '-0.01em',
                    }}>
                      Conversions API + Pixel
                    </span>
                    <span style={{
                      backgroundColor: `${META_BLUE}15`,
                      color:           META_BLUE,
                      fontSize:        '0.65rem',
                      fontFamily:      'var(--font-inter)',
                      fontWeight:      600,
                      padding:         '0.2rem 0.55rem',
                      borderRadius:    '4px',
                      border:          `1px solid ${META_BLUE}30`,
                      letterSpacing:   '0.04em',
                    }}>
                      LIVE
                    </span>
                  </div>
                  <p style={{ ...bodyStyle, fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                    Tikkit X fires purchase and registration events server-side via the
                    Conversions API, deduped against client-side Meta Pixel events. This
                    gives event organisers accurate attribution for Facebook and Instagram
                    ad campaigns driving ticket sales.
                  </p>
                  <ul style={{
                    listStyle:    'none',
                    padding:      0,
                    margin:       0,
                    display:      'flex',
                    flexDirection:'column',
                    gap:          '0.5rem',
                  }}>
                    {[
                      'Server-side Purchase events (bypasses iOS restrictions)',
                      'InitiateCheckout and AddToCart client-side via Pixel',
                      'Event deduplication via event_id matching',
                      'Hashed PII (email, phone) for higher match rates',
                    ].map((item) => (
                      <li key={item} style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize:   '0.82rem',
                        color:      '#9d99b8',
                        fontWeight: 300,
                        display:    'flex',
                        gap:        '0.6rem',
                      }}>
                        <span style={{ color: '#f5c518', flexShrink: 0 }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Code examples ─────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          padding:         '5rem 0',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
              <div style={{
                display:       'inline-flex',
                alignItems:    'center',
                gap:           '0.4rem',
                fontFamily:    'var(--font-inter)',
                fontWeight:    600,
                fontSize:      '0.7rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         META_BLUE,
                border:        `1px solid ${META_BLUE}33`,
                borderRadius:  '4px',
                padding:       '0.25rem 0.6rem',
                marginBottom:  '1.25rem',
              }}>
                Integration Patterns
              </div>
              <h2 style={h2Style}>How we implement it</h2>
              <p style={bodyStyle}>
                Both examples are taken from production patterns used in Tikkit X.
                All user data sent to Meta is SHA-256 hashed before transmission —
                we never send raw PII to third-party APIs.
              </p>
            </div>

            <div className="code-grid" style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1fr',
              gap:                 '2rem',
              alignItems:          'start',
            }}>
              <div>
                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    600,
                  fontSize:      '0.75rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color:         META_BLUE,
                  margin:        '0 0 0.75rem',
                }}>
                  WhatsApp Business API — Ticket Confirmation
                </p>
                <pre style={codeBlockStyle}><code style={{ color: 'inherit' }}>{whatsappCode}</code></pre>
              </div>

              <div>
                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    600,
                  fontSize:      '0.75rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color:         META_BLUE,
                  margin:        '0 0 0.75rem',
                }}>
                  Conversions API — Server-Side Purchase Event
                </p>
                <pre style={codeBlockStyle}><code style={{ color: 'inherit' }}>{conversionsCode}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* ── What we deliver for clients ───────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
          padding:         '5rem 0',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
              <div style={{
                display:       'inline-flex',
                alignItems:    'center',
                gap:           '0.4rem',
                fontFamily:    'var(--font-inter)',
                fontWeight:    600,
                fontSize:      '0.7rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         META_BLUE,
                border:        `1px solid ${META_BLUE}33`,
                borderRadius:  '4px',
                padding:       '0.25rem 0.6rem',
                marginBottom:  '1.25rem',
              }}>
                Client Engagements
              </div>
              <h2 style={h2Style}>Meta integrations as a service</h2>
              <p style={bodyStyle}>
                As a verified Tech Provider, Two Bit Digital can request programmatic access to
                client Meta Business assets — ad accounts, pages, pixels, and WhatsApp numbers —
                and build integrations directly into their platforms.
              </p>
            </div>

            <div className="service-grid" style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap:                 '1.25rem',
            }}>
              {[
                {
                  title: 'WhatsApp API Setup',
                  desc:  'Full WhatsApp Business API onboarding, phone number registration, message template submission and approval, and production integration into your platform or CRM.',
                },
                {
                  title: 'Conversions API Implementation',
                  desc:  'Server-side event pipeline connecting your checkout, CRM, or backend to Meta — deduped against any existing Pixel implementation for maximum attribution accuracy.',
                },
                {
                  title: 'Meta Pixel Audit & Setup',
                  desc:  'Full Pixel implementation review, standard and custom event configuration, and integration with Google Tag Manager or direct code instrumentation.',
                },
                {
                  title: 'Graph API Integrations',
                  desc:  'Custom integrations with Facebook Pages, Instagram Business accounts, and Meta Business Suite — dashboards, content pipelines, inbox tooling, and reporting.',
                },
              ].map((s) => (
                <div key={s.title} style={cardStyle}>
                  <h3 style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '0.9rem',
                    color:         '#eceaf5',
                    margin:        '0 0 0.6rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {s.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize:   '0.82rem',
                    color:      '#9d99b8',
                    lineHeight: 1.75,
                    margin:     0,
                  }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
          padding:         '5rem 0',
        }}>
          <div style={{
            maxWidth:  '1200px',
            margin:    '0 auto',
            padding:   '0 1.5rem',
            textAlign: 'center',
          }}>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
              {['Business Verified', 'Tech Provider Verified'].map((b) => (
                <div key={b} style={{
                  display:         'inline-flex',
                  alignItems:      'center',
                  gap:             '0.5rem',
                  backgroundColor: `${META_BLUE}12`,
                  border:          `1px solid ${META_BLUE}35`,
                  borderRadius:    '999px',
                  padding:         '0.35rem 0.9rem 0.35rem 0.6rem',
                }}>
                  <span style={{
                    backgroundColor: META_BLUE,
                    borderRadius:    '50%',
                    width:           '7px',
                    height:          '7px',
                    display:         'inline-block',
                  }} />
                  <span style={{
                    fontFamily:   'var(--font-inter)',
                    fontWeight:   600,
                    fontSize:     '0.7rem',
                    color:        META_BLUE,
                    letterSpacing:'0.03em',
                  }}>
                    {b}
                  </span>
                </div>
              ))}
            </div>

            <h2 style={{ ...h2Style, textAlign: 'center', marginBottom: '1rem' }}>
              Need a Meta integration?
            </h2>
            <p style={{
              ...bodyStyle,
              textAlign: 'center',
              maxWidth:  '520px',
              margin:    '0 auto 2.5rem',
            }}>
              Whether it&apos;s WhatsApp automation, Conversions API setup, or a full Meta
              Business Suite integration — we&apos;ve built it in production and can do it for you.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display:         'inline-block',
                backgroundColor: '#f5c518',
                color:           '#09091a',
                fontFamily:      'var(--font-inter)',
                fontWeight:      700,
                fontSize:        '0.9rem',
                padding:         '0.9rem 2rem',
                borderRadius:    '8px',
                textDecoration:  'none',
                letterSpacing:   '-0.01em',
              }}>
                Start a Project
              </Link>
              <Link href="/" style={{
                display:       'inline-block',
                color:         '#9d99b8',
                fontFamily:    'var(--font-inter)',
                fontWeight:    500,
                fontSize:      '0.9rem',
                padding:       '0.9rem 2rem',
                borderRadius:  '8px',
                textDecoration:'none',
                border:        '1px solid rgba(255,255,255,0.1)',
              }}>
                twobitdigital.com →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .cap-grid     { grid-template-columns: 1fr 1fr !important; }
          .tikkit-grid  { grid-template-columns: 1fr !important; }
          .verify-grid  { grid-template-columns: 1fr !important; }
          .code-grid    { grid-template-columns: 1fr !important; }
          .service-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .cap-grid     { grid-template-columns: 1fr !important; }
          .service-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

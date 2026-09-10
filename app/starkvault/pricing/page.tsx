'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const SV = '#6366f1'

const FREE_FEATURES = [
  '10 documents',
  '2 cards',
  '5 expiry watches',
  '1 active share link',
  'Email + push alerts',
  'Web, iOS & Android',
]

const PLUS_FEATURES = [
  'Unlimited documents',
  'Unlimited cards',
  'Unlimited expiry watches',
  'Unlimited share links',
  'Email + push alerts',
  'Web, iOS & Android',
  'Priority support',
]

const FAQ = [
  {
    q: 'What happens when I hit the Free plan limit?',
    a: "There's no blocking screen or hard gate. If you try to add an 11th document, you'll see an inline message right there — \"You have reached the Free plan limit of 10 documents. Upgrade to Plus for unlimited storage.\" Everything else keeps working normally; you just can't add past the cap until you upgrade. The same applies for cards, expiry watches, and share links.",
  },
  {
    q: 'Is the Free plan actually free forever?',
    a: 'Yes. No credit card required, no trial period, no expiry. The Free plan is free forever with the limits shown above.',
  },
  {
    q: 'How does annual billing work?',
    a: 'Annual billing charges $29 once per year — equivalent to $2.42/month, a saving of around 40% compared to monthly. You get a receipt from Paddle on the charge date. Annual plans auto-renew unless you cancel before the renewal date.',
  },
  {
    q: 'Can I switch between monthly and annual?',
    a: "Yes. You can switch to annual at any time from your account settings — you'll be charged $29 and your billing cycle will reset. Switching from annual to monthly takes effect at the end of your current annual period.",
  },
  {
    q: 'What payment methods are accepted?',
    a: 'All major credit and debit cards (Visa, Mastercard, American Express) and PayPal. Payments are processed securely by Paddle, our Merchant of Record. Your statement will show a charge from Paddle.',
  },
  {
    q: 'Is StarkVault available on mobile?',
    a: 'Yes — StarkVault is available on Web, iOS, and Android. Your plan and limits apply identically across all platforms. The Free-plan limits are enforced at the database level, not per-app, so they apply the same regardless of which platform you use.',
  },
  {
    q: "I'm a business. Is there an Enterprise plan?",
    a: 'Enterprise is available as a separate, non-self-serve arrangement. Join the waitlist and we will reach out to discuss your requirements.',
  },
  {
    q: 'What is your refund policy?',
    a: 'We offer a 30-day satisfaction guarantee on first-time Plus purchases. EU and UK customers have a statutory 14-day cooling-off right. See our full refund policy for details.',
  },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)', padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: `${SV}14`, border: `1px solid ${SV}30`, borderRadius: '999px', padding: '0.3rem 1rem', marginBottom: '1.5rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: SV, display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: SV }}>StarkVault</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              Free forever.<br />Unlimited when you need it.
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.05rem', color: '#9d99b8', lineHeight: 1.8, margin: '0 0 2.5rem' }}>
              Start for free with no credit card. Upgrade to Plus when your storage grows.
            </p>

            {/* Billing toggle */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', backgroundColor: '#0d0d22', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '999px', padding: '0.35rem' }}>
              <button
                onClick={() => setAnnual(false)}
                style={{
                  fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.8rem',
                  padding: '0.4rem 1.1rem', borderRadius: '999px', border: 'none', cursor: 'pointer',
                  backgroundColor: !annual ? SV : 'transparent',
                  color: !annual ? '#fff' : '#5e5a7a',
                  transition: 'all 0.2s',
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                style={{
                  fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.8rem',
                  padding: '0.4rem 1.1rem', borderRadius: '999px', border: 'none', cursor: 'pointer',
                  backgroundColor: annual ? SV : 'transparent',
                  color: annual ? '#fff' : '#5e5a7a',
                  transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                }}
              >
                Annual
                <span style={{ backgroundColor: '#4ade8020', color: '#4ade80', border: '1px solid #4ade8040', borderRadius: '999px', padding: '0.05rem 0.45rem', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.06em' }}>
                  SAVE 40%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Plan cards */}
        <section style={{ backgroundColor: '#09091a', padding: '4rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', alignItems: 'start' }}>

              {/* Free */}
              <div style={{ backgroundColor: '#0a0a1f', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '1.3rem', color: '#eceaf5', margin: '0 0 0.3rem', letterSpacing: '-0.01em' }}>Free</h2>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.8rem', color: '#5e5a7a', margin: '0 0 1.5rem', lineHeight: 1.6 }}>
                  Everything you need to get started. No credit card, no expiry.
                </p>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                    <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', color: '#5e5a7a' }}>$</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '2.8rem', color: '#eceaf5', letterSpacing: '-0.03em' }}>0</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.8rem', color: '#5e5a7a' }}>/forever</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.75rem', color: '#3a3860', margin: '0.3rem 0 0' }}>
                    No card required
                  </p>
                </div>

                <Link href="#" style={{
                  display: 'block', textAlign: 'center',
                  fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.85rem',
                  letterSpacing: '0.03em', textTransform: 'uppercase',
                  padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none',
                  marginBottom: '1.75rem', color: '#9d99b8',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}>
                  Get started free →
                </Link>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {FREE_FEATURES.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <span style={{ color: '#5e5a7a', fontWeight: 700, fontSize: '0.8rem', lineHeight: 1.7, flexShrink: 0 }}>✓</span>
                      <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.83rem', color: '#9d99b8', lineHeight: 1.6 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Plus */}
              <div style={{ backgroundColor: '#0d0d22', border: `1px solid ${SV}50`, borderRadius: '12px', padding: '2rem', position: 'relative', boxShadow: `0 0 40px ${SV}18` }}>
                <div style={{
                  position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                  backgroundColor: SV, color: '#fff',
                  fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.62rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '0.2rem 1rem', borderRadius: '0 0 8px 8px',
                }}>
                  Plus
                </div>

                <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '1.3rem', color: '#eceaf5', margin: '0 0 0.3rem', letterSpacing: '-0.01em' }}>Plus</h2>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.8rem', color: '#5e5a7a', margin: '0 0 1.5rem', lineHeight: 1.6 }}>
                  Unlimited everything. One flat price, no per-seat nonsense.
                </p>

                <div style={{ marginBottom: '1.75rem' }}>
                  {annual ? (
                    <>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', color: '#5e5a7a' }}>$</span>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '2.8rem', color: '#eceaf5', letterSpacing: '-0.03em' }}>29</span>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.8rem', color: '#5e5a7a' }}>/year</span>
                      </div>
                      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.75rem', color: '#4ade80', margin: '0.3rem 0 0' }}>
                        $2.42/mo equivalent · save ~40% vs monthly
                      </p>
                    </>
                  ) : (
                    <>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', color: '#5e5a7a' }}>$</span>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '2.8rem', color: '#eceaf5', letterSpacing: '-0.03em' }}>3.99</span>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.8rem', color: '#5e5a7a' }}>/month</span>
                      </div>
                      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.75rem', color: '#5e5a7a', margin: '0.3rem 0 0' }}>
                        Or $29/year — save ~40%
                      </p>
                    </>
                  )}
                </div>

                <Link href="#" style={{
                  display: 'block', textAlign: 'center',
                  fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.85rem',
                  letterSpacing: '0.03em', textTransform: 'uppercase',
                  padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none',
                  marginBottom: '1.75rem', color: '#fff', backgroundColor: SV,
                }}>
                  Upgrade to Plus →
                </Link>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {PLUS_FEATURES.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <span style={{ color: SV, fontWeight: 700, fontSize: '0.8rem', lineHeight: 1.7, flexShrink: 0 }}>✓</span>
                      <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.83rem', color: '#9d99b8', lineHeight: 1.6 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* How the paywall works */}
        <section style={{ backgroundColor: '#0d0d22', padding: '4rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="paywall-grid">
              <div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a3860', marginBottom: '0.75rem' }}>
                  No hard gates
                </div>
                <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  The upgrade prompt appears exactly when it makes sense.
                </h2>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.85, margin: 0 }}>
                  There is no &ldquo;upgrade to continue&rdquo; modal blocking your workflow. Limits are enforced
                  at the point of action — if you try to add an 11th document, you see an inline message
                  right there. Everything else keeps working normally until you are ready to upgrade.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'Documents', free: '10', plus: 'Unlimited' },
                  { label: 'Cards', free: '2', plus: 'Unlimited' },
                  { label: 'Expiry watches', free: '5', plus: 'Unlimited' },
                  { label: 'Share links', free: '1 active', plus: 'Unlimited' },
                  { label: 'Platforms', free: 'Web · iOS · Android', plus: 'Web · iOS · Android' },
                  { label: 'Alerts', free: 'Email + push', plus: 'Email + push' },
                ].map((row) => (
                  <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 600, color: '#5e5a7a' }}>{row.label}</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 400, color: '#5e5a7a', textAlign: 'center' }}>{row.free}</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 600, color: SV, textAlign: 'center' }}>{row.plus}</span>
                  </div>
                ))}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', paddingTop: '0.4rem' }}>
                  <span />
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 700, color: '#3a3860', textAlign: 'center', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Free</span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 700, color: SV, textAlign: 'center', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Plus</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise waitlist */}
        <section style={{ backgroundColor: '#09091a', padding: '4rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ backgroundColor: '#0d0d22', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a3860', marginBottom: '0.5rem' }}>Enterprise</div>
                <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '1.2rem', color: '#eceaf5', margin: '0 0 0.5rem', letterSpacing: '-0.01em' }}>
                  Need something beyond Plus?
                </h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.875rem', color: '#9d99b8', margin: 0, lineHeight: 1.7, maxWidth: '480px' }}>
                  Enterprise is not self-serve — it is a custom arrangement for teams with specific
                  compliance, deployment, or integration requirements. Join the waitlist and we will
                  reach out to discuss your needs.
                </p>
              </div>
              <Link href="/enterprise" style={{
                display: 'inline-flex', alignItems: 'center', flexShrink: 0,
                fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.8rem',
                letterSpacing: '0.04em', textTransform: 'uppercase',
                color: '#9d99b8', textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '0.75rem 1.5rem', borderRadius: '8px', whiteSpace: 'nowrap',
              }}>
                Join waitlist →
              </Link>
            </div>
          </div>
        </section>

        {/* Paddle billing note */}
        <section style={{ backgroundColor: '#0d0d22', padding: '1.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.78rem', color: '#3a3860', lineHeight: 1.8, margin: 0 }}>
              Payments processed by{' '}
              <a href="https://www.paddle.com" target="_blank" rel="noopener noreferrer" style={{ color: '#5e5a7a', textDecoration: 'underline' }}>
                Paddle.com Market Limited
              </a>
              , Merchant of Record. Your statement shows a charge from Paddle.
              Prices in USD. VAT calculated at checkout by location.{' '}
              <Link href="/starkvault/refunds" style={{ color: '#5e5a7a', textDecoration: 'underline' }}>Refund policy</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a3860', marginBottom: '0.5rem' }}>
                Frequently asked questions
              </div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#eceaf5', margin: 0, letterSpacing: '-0.02em' }}>
                Common questions about StarkVault.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {FAQ.map((item, i) => (
                <div key={item.q} style={{ padding: '1.5rem 0', borderBottom: i < FAQ.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem', color: '#eceaf5', margin: '0 0 0.5rem', letterSpacing: '-0.01em' }}>
                    {item.q}
                  </p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: '#9d99b8', margin: 0, lineHeight: 1.8 }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ backgroundColor: '#0d0d22', padding: '5rem 0' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Start free. No card needed.
            </h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1rem', color: '#9d99b8', lineHeight: 1.8, margin: '0 0 2rem' }}>
              StarkVault is free forever for up to 10 documents. Upgrade to Plus any time.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="#" style={{
                display: 'inline-flex', alignItems: 'center',
                fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem',
                letterSpacing: '0.03em', textTransform: 'uppercase',
                color: '#fff', backgroundColor: SV,
                padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none',
              }}>
                Create free account →
              </Link>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center',
                fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.875rem',
                color: '#9d99b8', textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '0.9rem 2rem', borderRadius: '8px',
              }}>
                Talk to us
              </Link>
            </div>
          </div>
        </section>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 700px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
          .paywall-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}

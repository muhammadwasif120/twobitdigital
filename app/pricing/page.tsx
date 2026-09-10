'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const SV = '#6366f1'   // StarkVault indigo
const SV_DIM = '#4f46e5'

const PLANS = [
  {
    name:       'Free',
    tagline:    'For individuals and small teams getting started.',
    monthly:    0,
    annual:     0,
    cta:        'Get started free',
    ctaHref:    '#',
    highlight:  false,
    badge:      null,
    features: [
      '1 GB encrypted storage',
      '1 user',
      'AES-256 file vault',
      '7-day version history',
      'Web access',
      'Email support',
    ],
    missing: [
      'Team collaboration',
      'Audit log',
      'API access',
      'Priority support',
    ],
  },
  {
    name:       'Pro',
    tagline:    'For teams that need more storage, collaboration, and control.',
    monthly:    15,
    annual:     12,
    cta:        'Start Pro trial',
    ctaHref:    '#',
    highlight:  true,
    badge:      'Most popular',
    features: [
      '50 GB encrypted storage',
      'Up to 10 users',
      'AES-256 + zero-knowledge architecture',
      '90-day version history',
      'Full audit log',
      'API access',
      'Two-factor authentication',
      'Custom vault branding',
      'Priority email & chat support',
    ],
    missing: [],
  },
  {
    name:       'Enterprise',
    tagline:    'For organisations with compliance, scale, and security requirements.',
    monthly:    null,
    annual:     null,
    cta:        'Talk to us',
    ctaHref:    '/contact',
    highlight:  false,
    badge:      null,
    features: [
      'Unlimited storage',
      'Unlimited users',
      'Everything in Pro',
      'SSO / SAML integration',
      'Custom data residency',
      'SOC 2 / ISO 27001 alignment packages',
      'On-premises deployment option',
      'Dedicated account manager',
      '99.9% uptime SLA',
      'Custom contracts & invoicing',
    ],
    missing: [],
  },
]

const FAQ = [
  {
    q: 'What is StarkVault?',
    a: 'StarkVault is a zero-knowledge encrypted document vault built for businesses and teams that need to store, share, and audit sensitive files without trusting the platform with their keys. Files are encrypted client-side before they reach our servers.',
  },
  {
    q: 'Can I change my plan at any time?',
    a: 'Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately; downgrades take effect at the end of the current billing period.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'All major credit and debit cards (Visa, Mastercard, American Express) and PayPal. Payments are processed securely by Paddle, our authorised reseller and Merchant of Record.',
  },
  {
    q: 'Is there a free trial on the Pro plan?',
    a: 'Yes — the Pro plan includes a 14-day free trial. No credit card is required to start the trial.',
  },
  {
    q: 'What is your refund policy?',
    a: 'We offer a 14-day refund window from the date of purchase. See our full refund policy for details.',
  },
  {
    q: 'Where is my data stored?',
    a: 'StarkVault stores encrypted data on Supabase infrastructure hosted in the EU (Frankfurt). Enterprise customers can request alternative data residency regions. Two Bit Digital never has access to your plaintext files.',
  },
  {
    q: 'Who handles billing and payments?',
    a: 'Payments are processed by Paddle.com Market Limited, our Merchant of Record. Paddle handles all payment processing, tax calculation, and invoicing on behalf of Two Bit Digital.',
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
          <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            {/* StarkVault badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: `${SV}14`, border: `1px solid ${SV}30`, borderRadius: '999px', padding: '0.3rem 1rem', marginBottom: '1.5rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: SV, display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: SV }}>StarkVault</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              Simple, transparent pricing.
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', color: '#9d99b8', lineHeight: 1.8, margin: '0 0 2.5rem' }}>
              Encrypted document storage for teams that cannot afford a breach. Start free, scale when you need to.
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
              >Monthly</button>
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
                <span style={{ backgroundColor: '#4ade8020', color: '#4ade80', border: '1px solid #4ade8040', borderRadius: '999px', padding: '0.05rem 0.4rem', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Plan cards */}
        <section style={{ backgroundColor: '#09091a', padding: '4rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', alignItems: 'start' }}>
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  style={{
                    backgroundColor: plan.highlight ? '#0d0d22' : '#0a0a1f',
                    border: plan.highlight ? `1px solid ${SV}50` : '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '12px',
                    padding: '2rem',
                    position: 'relative',
                    boxShadow: plan.highlight ? `0 0 40px ${SV}18` : 'none',
                  }}
                >
                  {plan.badge && (
                    <div style={{
                      position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                      backgroundColor: SV, color: '#fff',
                      fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.65rem',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      padding: '0.2rem 0.9rem', borderRadius: '0 0 8px 8px',
                    }}>
                      {plan.badge}
                    </div>
                  )}

                  <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '1.2rem', color: '#eceaf5', margin: '0 0 0.4rem', letterSpacing: '-0.01em' }}>
                    {plan.name}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.8rem', color: '#5e5a7a', margin: '0 0 1.5rem', lineHeight: 1.6 }}>
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    {plan.monthly === null ? (
                      <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '2rem', color: '#eceaf5', letterSpacing: '-0.03em' }}>
                        Custom
                      </div>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', color: '#5e5a7a' }}>£</span>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '2.5rem', color: '#eceaf5', letterSpacing: '-0.03em' }}>
                          {plan.monthly === 0 ? '0' : annual ? plan.annual : plan.monthly}
                        </span>
                        {plan.monthly > 0 && (
                          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.8rem', color: '#5e5a7a' }}>
                            /mo{annual ? ' · billed annually' : ''}
                          </span>
                        )}
                      </div>
                    )}
                    {plan.monthly === 0 && (
                      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '0.75rem', color: '#5e5a7a', margin: '0.2rem 0 0' }}>
                        No credit card required
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={plan.ctaHref}
                    style={{
                      display: 'block', textAlign: 'center',
                      fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.85rem',
                      letterSpacing: '0.03em', textTransform: 'uppercase',
                      padding: '0.8rem 1.5rem', borderRadius: '8px',
                      textDecoration: 'none', marginBottom: '1.75rem',
                      backgroundColor: plan.highlight ? SV : 'transparent',
                      color: plan.highlight ? '#fff' : '#9d99b8',
                      border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    {plan.cta} →
                  </Link>

                  {/* Features */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {plan.features.map((f) => (
                      <li key={f} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                        <span style={{ color: SV, fontWeight: 700, fontSize: '0.8rem', lineHeight: 1.7, flexShrink: 0 }}>✓</span>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.83rem', color: '#9d99b8', lineHeight: 1.6 }}>{f}</span>
                      </li>
                    ))}
                    {plan.missing.map((f) => (
                      <li key={f} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', opacity: 0.35 }}>
                        <span style={{ color: '#5e5a7a', fontWeight: 700, fontSize: '0.8rem', lineHeight: 1.7, flexShrink: 0 }}>✕</span>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.83rem', color: '#5e5a7a', lineHeight: 1.6 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Paddle / billing note */}
        <section style={{ backgroundColor: '#0d0d22', padding: '2rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.8rem', color: '#3a3860', lineHeight: 1.8, margin: 0 }}>
              Payments are processed by{' '}
              <a href="https://www.paddle.com" target="_blank" rel="noopener noreferrer" style={{ color: '#5e5a7a', textDecoration: 'underline' }}>Paddle.com Market Limited</a>
              , who act as our authorised reseller and Merchant of Record. Your statement will show a charge from Paddle.
              All prices shown exclude VAT where applicable. VAT is calculated at checkout based on your location.
              See our{' '}
              <Link href="/refunds" style={{ color: '#5e5a7a', textDecoration: 'underline' }}>refund policy</Link>.
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '10px', overflow: 'hidden' }}>
              {FAQ.map((item) => (
                <div key={item.q} style={{ backgroundColor: '#09091a', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem', color: '#eceaf5', margin: '0 0 0.5rem', letterSpacing: '-0.01em' }}>
                    {item.q}
                  </p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: '#9d99b8', margin: 0, lineHeight: 1.75 }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA bottom */}
        <section style={{ backgroundColor: '#0d0d22', padding: '5rem 0' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Still have questions?
            </h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1rem', color: '#9d99b8', lineHeight: 1.8, margin: '0 0 2rem' }}>
              Talk to us about StarkVault, enterprise licensing, or custom compliance requirements.
            </p>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center',
              fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem',
              letterSpacing: '0.03em', textTransform: 'uppercase',
              color: '#09091a', backgroundColor: SV,
              padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none',
            }}>
              Contact us →
            </Link>
          </div>
        </section>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}

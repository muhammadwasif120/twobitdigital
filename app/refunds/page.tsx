import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title:       'Refund Policy | StarkVault — Two Bit Digital',
  description: 'Refund and cancellation policy for StarkVault, a product of Two Bit Digital Ltd. Payments processed by Paddle. EU/UK 14-day cooling-off period applies.',
  alternates:  { canonical: 'https://twobitdigital.com/refunds' },
  robots:      { index: true, follow: true },
}

const LAST_UPDATED   = '10 September 2026'
const EFFECTIVE_DATE = '10 September 2026'
const COMPANY        = 'Two Bit Digital Ltd'
const COMPANY_NO     = '14710072'
const CONTACT_EMAIL  = 'billing@twobitdigital.com'
const PADDLE_SUPPORT = 'https://www.paddle.com/legal/refund-policy'

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} style={{ marginBottom: '3rem' }}>
      <h2 style={{
        fontFamily:    'var(--font-inter)',
        fontWeight:    700,
        fontSize:      '1.1rem',
        color:         '#eceaf5',
        margin:        '0 0 1rem',
        letterSpacing: '-0.01em',
        paddingBottom: '0.75rem',
        borderBottom:  '1px solid rgba(255,255,255,0.06)',
      }}>
        {title}
      </h2>
      <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.9rem', color: '#9d99b8', lineHeight: 1.9 }}>
        {children}
      </div>
    </div>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ margin: '0 0 1rem' }}>{children}</p>
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      {items.map((item) => (
        <li key={item} style={{ lineHeight: 1.8 }}>{item}</li>
      ))}
    </ul>
  )
}

export default function RefundsPage() {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>

        {/* Header */}
        <section style={{ background: 'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)', padding: '4rem 0 3rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a3860', marginBottom: '0.75rem' }}>
              Legal · StarkVault
            </div>
            <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              Refund Policy
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.9rem', color: '#5e5a7a', margin: 0, lineHeight: 1.7 }}>
              Last updated: {LAST_UPDATED} &nbsp;·&nbsp; Effective: {EFFECTIVE_DATE}
            </p>
          </div>
        </section>

        {/* Body */}
        <section style={{ padding: '4rem 0 6rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem' }}>

            {/* Intro callout */}
            <div style={{
              backgroundColor: 'rgba(99,102,241,0.06)',
              border:          '1px solid rgba(99,102,241,0.2)',
              borderRadius:    '10px',
              padding:         '1.5rem 2rem',
              marginBottom:    '3rem',
            }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.8, margin: 0 }}>
                This policy applies to purchases of <strong style={{ color: '#eceaf5' }}>StarkVault</strong>, a product of{' '}
                <strong style={{ color: '#eceaf5' }}>{COMPANY}</strong> (Companies House No. {COMPANY_NO}).
                All payments are processed by <strong style={{ color: '#eceaf5' }}>Paddle.com Market Limited</strong> ("Paddle"),
                who act as our authorised reseller and Merchant of Record. When you purchase StarkVault,
                you are transacting directly with Paddle, and your receipt will show a charge from Paddle.
              </p>
            </div>

            <Section id="eligibility" title="1. Refund Eligibility">
              <P>
                We want you to be satisfied with StarkVault. If you are not, you may request a refund
                within the period and conditions described below.
              </P>
              <P><strong style={{ color: '#eceaf5' }}>14-Day Cooling-Off Period (EU and UK consumers)</strong></P>
              <P>
                If you are a consumer located in the European Union or the United Kingdom, you have the
                right to withdraw from your purchase within <strong style={{ color: '#eceaf5' }}>14 calendar days</strong> of
                the date of purchase, without giving any reason, under the EU Consumer Rights Directive and
                the UK Consumer Contracts Regulations 2013.
              </P>
              <P>
                By starting to use StarkVault immediately after purchase, you expressly acknowledge and
                agree that the supply of the digital service has begun before the expiry of the 14-day
                withdrawal period. In this case, you retain the right to a pro-rated refund for the
                unused portion of your subscription, calculated from the date we receive your refund request
                to the end of the billing period.
              </P>
              <P><strong style={{ color: '#eceaf5' }}>30-Day Satisfaction Guarantee (all customers)</strong></P>
              <P>
                All customers — regardless of location — may request a full refund within{' '}
                <strong style={{ color: '#eceaf5' }}>30 calendar days</strong> of their first paid subscription charge if they
                are not satisfied with StarkVault. This applies to first-time purchases only. Renewals and
                subsequent billing periods are not covered by the satisfaction guarantee.
              </P>
            </Section>

            <Section id="non-refundable" title="2. Non-Refundable Circumstances">
              <P>Refunds will not be issued in the following circumstances:</P>
              <Ul items={[
                'Requests submitted more than 30 days after the charge date (except where statutory rights apply).',
                'Subscription renewals — you are responsible for cancelling your subscription before the renewal date to avoid being charged for the next period.',
                'Charges for additional storage or add-ons purchased after the initial subscription.',
                'Accounts that have been suspended or terminated due to a violation of our Terms of Service.',
                'Requests made after a second or subsequent billing cycle on the same subscription.',
                'Enterprise plan custom arrangements — refund terms for Enterprise customers are set out in the applicable Order Form.',
              ]} />
            </Section>

            <Section id="cancellation" title="3. Cancellation">
              <P>
                You may cancel your StarkVault subscription at any time from within your account settings.
                Cancellation takes effect at the end of your current billing period — you will retain
                access to your plan until that date and will not be charged for the following period.
              </P>
              <P>
                Cancellation does not automatically trigger a refund. If you believe you are entitled
                to a refund under the terms above, you must submit a separate refund request as described
                in Section 4.
              </P>
            </Section>

            <Section id="how-to-request" title="4. How to Request a Refund">
              <P>To request a refund, contact us using any of the following methods:</P>
              <Ul items={[
                `Email: ${CONTACT_EMAIL} — include your registered email address, order number (from your Paddle receipt), and reason for the request.`,
                'Contact form: twobitdigital.com/contact',
              ]} />
              <P>
                Alternatively, as Paddle is the Merchant of Record for your purchase, you may also submit
                a refund request directly through Paddle Buyer Support. Paddle may ask Two Bit Digital to
                confirm your eligibility. We will respond within 5 business days and, where a refund is
                approved, Paddle will process it within 5–10 business days depending on your payment method.
              </P>
              <P>
                Refunds are issued to the original payment method. We cannot issue refunds to a different
                card, bank account, or payment method.
              </P>
            </Section>

            <Section id="processing" title="5. Refund Processing">
              <P>
                Once a refund is approved, Paddle will process it to your original payment method.
                Processing times are as follows:
              </P>
              <Ul items={[
                'Credit and debit cards: 5–10 business days to appear on your statement, depending on your card issuer.',
                'PayPal: typically 3–5 business days.',
              ]} />
              <P>
                Refunds are issued in the currency of the original transaction. If exchange rates have
                moved, the refunded amount in your local currency may differ slightly from the original charge.
                Two Bit Digital and Paddle are not responsible for exchange rate differences.
              </P>
            </Section>

            <Section id="free-plan" title="6. Free Plan">
              <P>
                The StarkVault Free plan has no charge and therefore no refund applies. Free plan users
                may delete their account and data at any time from within the account settings.
              </P>
            </Section>

            <Section id="data" title="7. Data After Cancellation or Refund">
              <P>
                Following cancellation or a refund, your StarkVault account will be downgraded to the
                Free plan (where available) or deactivated at the end of the billing period. Your
                encrypted files will be retained for <strong style={{ color: '#eceaf5' }}>30 days</strong> after
                deactivation, during which time you may export your data. After 30 days, your vault and
                all associated data will be permanently deleted and cannot be recovered.
              </P>
            </Section>

            <Section id="disputes" title="8. Disputes and Chargebacks">
              <P>
                If you have a concern about a charge, please contact us before initiating a chargeback
                with your bank. We resolve the majority of billing concerns within 2 business days
                when contacted directly. Chargebacks initiated without contacting us first may result
                in account suspension pending resolution.
              </P>
            </Section>

            <Section id="statutory" title="9. Statutory Rights">
              <P>
                Nothing in this policy limits or excludes your statutory rights as a consumer under
                applicable law, including your rights under the UK Consumer Rights Act 2015, the EU
                Consumer Rights Directive, or any other applicable consumer protection legislation.
                Statutory rights apply in addition to, and are not affected by, this policy.
              </P>
            </Section>

            <Section id="changes" title="10. Changes to This Policy">
              <P>
                We may update this refund policy from time to time. The current version is always
                available at <Link href="/refunds" style={{ color: '#6366f1', textDecoration: 'underline' }}>twobitdigital.com/refunds</Link>.
                Changes take effect when posted. Purchases made before a change are governed by the
                policy in effect at the time of purchase.
              </P>
            </Section>

            <Section id="contact" title="11. Contact">
              <P>For billing and refund enquiries:</P>
              <div style={{ backgroundColor: '#0d0d22', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1.5rem 2rem' }}>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: '#eceaf5', margin: '0 0 0.5rem' }}>
                  {COMPANY}
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: '#9d99b8', margin: '0 0 0.25rem' }}>
                  Companies House No. {COMPANY_NO} · England & Wales
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: '#9d99b8', margin: '0 0 0.25rem' }}>
                  Email:{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#6366f1', textDecoration: 'none' }}>
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: '#9d99b8', margin: 0 }}>
                  Contact form:{' '}
                  <Link href="/contact" style={{ color: '#6366f1', textDecoration: 'none' }}>
                    twobitdigital.com/contact
                  </Link>
                </p>
              </div>
              <br />
              <P>
                For payment-related issues where Paddle is the Merchant of Record, you may also contact
                Paddle directly through their{' '}
                <a href={PADDLE_SUPPORT} target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1', textDecoration: 'underline' }}>
                  Buyer Support portal
                </a>.
              </P>
            </Section>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

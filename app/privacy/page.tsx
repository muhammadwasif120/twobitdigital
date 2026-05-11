import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Two Bit Digital',
  description:
    'Two Bit Digital privacy policy. We do not sell your data. We do not store what we do not need. Our architecture is built on zero-knowledge principles.',
  alternates: { canonical: 'https://www.twobitdigital.com/privacy' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = '18 April 2026'
const EFFECTIVE_DATE = '18 April 2026'

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} style={{ marginBottom: '3rem' }}>
      <h2 style={{
        fontFamily:    'var(--font-inter)',
        fontWeight:    700,
        fontSize:      '1.15rem',
        color:         '#eceaf5',
        margin:        '0 0 1rem',
        letterSpacing: '-0.01em',
        paddingLeft:   '1rem',
        borderLeft:    '3px solid #f5c518',
      }}>
        {title}
      </h2>
      <div style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: 300,
        fontSize:   '0.95rem',
        color:      '#9d99b8',
        lineHeight: 1.9,
      }}>
        {children}
      </div>
    </div>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ margin: '0 0 1rem' }}>{children}</p>
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ margin: '0 0 1rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {items.map((item, i) => (
        <li key={i} style={{ paddingLeft: '0.5rem' }}>{item}</li>
      ))}
    </ul>
  )
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      backgroundColor: 'rgba(245,197,24,0.05)',
      border:          '1px solid rgba(245,197,24,0.2)',
      borderRadius:    '8px',
      padding:         '1.25rem 1.5rem',
      margin:          '1.25rem 0',
      fontFamily:      'var(--font-inter)',
      fontWeight:      400,
      fontSize:        '0.9rem',
      color:           '#eceaf5',
      lineHeight:      1.75,
    }}>
      {children}
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Hero */}
        <section style={{
          backgroundColor: '#09091a',
          paddingTop:      '68px',
          borderBottom:    '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 1.5rem 3rem' }}>
            <div style={{
              display:        'flex',
              alignItems:     'center',
              gap:            '0.5rem',
              marginBottom:   '1.5rem',
            }}>
              <Link href="/" style={{ fontFamily:'var(--font-inter)', fontSize:'0.78rem', color:'#5e5a7a', textDecoration:'none' }}>Home</Link>
              <span style={{ color:'#5e5a7a', fontSize:'0.75rem' }}>›</span>
              <span style={{ fontFamily:'var(--font-inter)', fontSize:'0.78rem', color:'#9d99b8' }}>Privacy Policy</span>
            </div>

            <h1 style={{
              fontFamily:    'var(--font-inter)',
              fontWeight:    800,
              fontSize:      'clamp(2rem, 4vw, 2.8rem)',
              color:         '#eceaf5',
              margin:        '0 0 1rem',
              letterSpacing: '-0.03em',
              lineHeight:    1.15,
            }}>
              Privacy Policy
            </h1>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize:   '1.05rem',
              color:      '#9d99b8',
              lineHeight: 1.75,
              margin:     '0 0 2rem',
              maxWidth:   '620px',
            }}>
              We built this company on the belief that privacy is architecture, not policy. This document
              explains what we collect, why, and what we never do with it.
            </p>

            {/* Zero knowledge badge */}
            <Callout>
              🔐 <strong>Our position, plainly stated:</strong> We do not sell your personal data. We do not
              share it with third parties for marketing. We do not store data beyond what is operationally
              necessary. Our products are built on zero-knowledge principles — meaning we architect systems
              so that sensitive data is inaccessible even to us. That same philosophy governs how we operate
              as a company.
            </Callout>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {[
                { label: 'Last updated',    value: LAST_UPDATED },
                { label: 'Effective date',  value: EFFECTIVE_DATE },
                { label: 'Data controller', value: 'Two Bit Digital Ltd' },
                { label: 'Jurisdiction',    value: 'England & Wales' },
              ].map((m) => (
                <div key={m.label}>
                  <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.7rem', color:'#5e5a7a', letterSpacing:'0.06em', textTransform:'uppercase', margin:'0 0 0.2rem' }}>
                    {m.label}
                  </p>
                  <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.88rem', color:'#eceaf5', margin:0, fontWeight:500 }}>
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <section style={{ backgroundColor: '#0d0d22', padding: '4rem 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem' }}>

            <Section id="controller" title="1. Data Controller">
              <P>
                The data controller responsible for personal data collected through this website is:
              </P>
              <div style={{
                backgroundColor: '#11112b',
                border:          '1px solid rgba(255,255,255,0.06)',
                borderRadius:    '8px',
                padding:         '1.25rem 1.5rem',
                margin:          '0.75rem 0 1rem',
                fontFamily:      'var(--font-inter)',
                fontSize:        '0.9rem',
                color:           '#eceaf5',
                lineHeight:      1.8,
              }}>
                <strong>Two Bit Digital Ltd</strong><br />
                Registered in England and Wales<br />
                Companies House No. 14710072<br />
                Email: <a href="mailto:sales@twobitdigital.com" style={{ color:'#f5c518', textDecoration:'none' }}>sales@twobitdigital.com</a>
              </div>
              <P>
                This Privacy Policy applies to all personal data processed through twobitdigital.com and
                any direct communications with Two Bit Digital Ltd. It is compliant with the UK General
                Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </P>
            </Section>

            <Section id="data-collected" title="2. What Data We Collect">
              <P>We collect only the minimum data necessary to operate this website and respond to enquiries.</P>

              <p style={{ fontFamily:'var(--font-inter)', fontWeight:600, fontSize:'0.9rem', color:'#eceaf5', margin:'1.25rem 0 0.5rem' }}>
                Contact Form Submissions
              </p>
              <P>When you submit a project brief through our contact form, we collect:</P>
              <UL items={[
                'Your name',
                'Your email address',
                'Your company or organisation name (optional)',
                'Project type (optional)',
                'Your message or project description',
                'Your IP address (recorded in the notification email for spam and fraud prevention — not stored in a database)',
              ]} />

              <p style={{ fontFamily:'var(--font-inter)', fontWeight:600, fontSize:'0.9rem', color:'#eceaf5', margin:'1.25rem 0 0.5rem' }}>
                Analytics Data
              </p>
              <P>
                We use Google Analytics 4 (GA4) to understand how visitors use this website. GA4 collects
                anonymised usage data including pages visited, time on site, general geographic region
                (country/city level), device type, and referral source. GA4 does not identify you personally.
                Your IP address is anonymised before processing.
              </P>

              <p style={{ fontFamily:'var(--font-inter)', fontWeight:600, fontSize:'0.9rem', color:'#eceaf5', margin:'1.25rem 0 0.5rem' }}>
                Server and Infrastructure Logs
              </p>
              <P>
                Our hosting infrastructure (Vercel) automatically records standard server access logs
                including IP addresses, request paths, and timestamps. These logs are retained for a
                maximum of 30 days for security monitoring and are not used for any other purpose.
              </P>

              <p style={{ fontFamily:'var(--font-inter)', fontWeight:600, fontSize:'0.9rem', color:'#eceaf5', margin:'1.25rem 0 0.5rem' }}>
                Data We Do Not Collect
              </p>
              <P>We do not collect, store, or process:</P>
              <UL items={[
                'Payment card details (we have no payment processing on this website)',
                'Sensitive personal data (health, biometric, financial account data)',
                'Data from minors under 16',
                'Tracking data beyond what GA4 collects with IP anonymisation',
              ]} />
            </Section>

            <Section id="zero-knowledge" title="3. Our Zero-Knowledge Commitment">
              <Callout>
                Zero-knowledge architecture means systems are designed so that the operator — us — cannot
                access the content of what users store, even if compelled to. This is a technical
                guarantee, not just a policy promise. We apply this same philosophy to how we handle
                data as a business.
              </Callout>
              <P>
                Our in-house products — particularly Terra Core and Tikkit X — are built on zero-knowledge
                cryptographic principles. AES-256 encryption with key isolation means that encrypted data
                cannot be decrypted without the client&apos;s own keys. We never hold the keys.
              </P>
              <P>
                As a company, we extend this philosophy to our business operations:
              </P>
              <UL items={[
                'We do not store contact form submissions in any database — they are delivered to us via email and the data is not persisted on our servers.',
                'We do not build profiles of website visitors.',
                'We do not use retargeting pixels or behavioural advertising technologies.',
                'We do not use session recording tools (Hotjar, FullStory, or similar).',
                'We do not sell, rent, or trade personal data under any circumstances.',
              ]} />
            </Section>

            <Section id="legal-basis" title="4. Legal Basis for Processing">
              <P>Under UK GDPR, we process personal data on the following legal bases:</P>
              <UL items={[
                <><strong style={{ color:'#eceaf5' }}>Legitimate interests</strong> — Processing contact form submissions to respond to project enquiries. Our legitimate interest is to communicate with prospective clients who have actively contacted us.</>,
                <><strong style={{ color:'#eceaf5' }}>Legitimate interests</strong> — Analytics to understand website performance and improve user experience. GA4 is configured with IP anonymisation.</>,
                <><strong style={{ color:'#eceaf5' }}>Legal obligation</strong> — Retaining server access logs for security monitoring and fraud prevention.</>,
                <><strong style={{ color:'#eceaf5' }}>Consent</strong> — Where we seek your agreement before processing (e.g. future marketing communications, if any). We will always be explicit when seeking consent.</>,
              ]} />
            </Section>

            <Section id="how-we-use" title="5. How We Use Your Data">
              <P>We use the data we collect solely for the following purposes:</P>
              <UL items={[
                'Responding to project enquiries submitted through the contact form',
                'Assessing whether we can help with a project brief',
                'Communicating about a potential or active engagement',
                'Understanding how the website is used so we can improve it (analytics only)',
                'Detecting and preventing spam, fraud, and abuse',
              ]} />
              <P>
                We will never use your data to send unsolicited marketing communications without your
                explicit consent. If you contact us and we wish to add you to any form of mailing list,
                we will ask you separately and clearly.
              </P>
            </Section>

            <Section id="data-sharing" title="6. Data Sharing and Third Parties">
              <Callout>
                <strong>We do not sell your personal data. Ever.</strong> No data broker. No advertiser.
                No third-party marketing platform. No exceptions.
              </Callout>
              <P>
                We share personal data only with the essential service providers required to operate this
                website. Each is bound by contractual data processing terms.
              </P>

              {[
                {
                  name:    'Resend',
                  purpose: 'Email delivery — used to transmit contact form submissions to our team inbox.',
                  location:'United States',
                  link:    'https://resend.com/privacy',
                },
                {
                  name:    'Google Analytics (GA4)',
                  purpose: 'Website analytics. Anonymised usage data only. IP anonymisation is enabled.',
                  location:'United States (adequacy safeguards apply)',
                  link:    'https://policies.google.com/privacy',
                },
                {
                  name:    'Vercel',
                  purpose: 'Website hosting and infrastructure. Processes server request data.',
                  location:'United States / Global CDN (standard contractual clauses apply)',
                  link:    'https://vercel.com/legal/privacy-policy',
                },
              ].map((p) => (
                <div key={p.name} style={{
                  backgroundColor: '#11112b',
                  border:          '1px solid rgba(255,255,255,0.06)',
                  borderRadius:    '8px',
                  padding:         '1rem 1.25rem',
                  marginBottom:    '0.75rem',
                }}>
                  <p style={{ fontFamily:'var(--font-inter)', fontWeight:600, fontSize:'0.9rem', color:'#eceaf5', margin:'0 0 0.3rem' }}>
                    {p.name}
                  </p>
                  <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.85rem', color:'#9d99b8', margin:'0 0 0.2rem' }}>
                    {p.purpose}
                  </p>
                  <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.78rem', color:'#5e5a7a', margin:0 }}>
                    Location: {p.location} ·{' '}
                    <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color:'#f5c518', textDecoration:'none' }}>
                      Privacy Policy ↗
                    </a>
                  </p>
                </div>
              ))}

              <P>
                We may disclose personal data if required to do so by law, court order, or regulatory
                authority. In such cases we will notify you unless legally prohibited from doing so.
              </P>
            </Section>

            <Section id="cookies" title="7. Cookies">
              <P>
                This website uses a minimal set of cookies. We do not use advertising cookies, tracking
                pixels, or behavioural profiling cookies.
              </P>
              <UL items={[
                <><strong style={{ color:'#eceaf5' }}>Analytics cookies (GA4)</strong> — Set by Google Analytics to distinguish users and sessions. These cookies do not contain personally identifiable information. You can opt out of Google Analytics across all sites at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color:'#f5c518', textDecoration:'none' }}>tools.google.com/dlpage/gaoptout ↗</a>.</>,
                <><strong style={{ color:'#eceaf5' }}>Session / functional cookies</strong> — Cookies set by our hosting infrastructure (Vercel) for load balancing and security purposes. These are strictly necessary and cannot be disabled without affecting site function.</>,
              ]} />
              <P>
                We do not use third-party advertising cookies, social media tracking pixels, or any
                form of cross-site behavioural tracking.
              </P>
            </Section>

            <Section id="retention" title="8. Data Retention">
              <P>We retain personal data only for as long as necessary:</P>
              <UL items={[
                'Contact form enquiries — retained in our email inbox for the duration of the business relationship, or a maximum of 3 years from last contact, whichever is sooner. Email communications forming part of an active client engagement are retained for 7 years to comply with legal and accounting obligations.',
                'GA4 analytics data — retained for 14 months, per our GA4 configuration.',
                'Server access logs — retained for a maximum of 30 days by Vercel.',
                'IP addresses in notification emails — not stored separately; present only in the email record governed by the email retention policy above.',
              ]} />
            </Section>

            <Section id="your-rights" title="9. Your Rights Under UK GDPR">
              <P>If you are located in the UK or European Economic Area, you have the following rights:</P>
              <UL items={[
                <><strong style={{ color:'#eceaf5' }}>Right of access</strong> — You can request a copy of all personal data we hold about you.</>,
                <><strong style={{ color:'#eceaf5' }}>Right to rectification</strong> — You can ask us to correct inaccurate data.</>,
                <><strong style={{ color:'#eceaf5' }}>Right to erasure</strong> — You can ask us to delete your personal data where there is no compelling reason to retain it.</>,
                <><strong style={{ color:'#eceaf5' }}>Right to restriction</strong> — You can ask us to pause processing of your data in certain circumstances.</>,
                <><strong style={{ color:'#eceaf5' }}>Right to data portability</strong> — You can request your data in a machine-readable format.</>,
                <><strong style={{ color:'#eceaf5' }}>Right to object</strong> — You can object to processing based on legitimate interests.</>,
                <><strong style={{ color:'#eceaf5' }}>Right to withdraw consent</strong> — Where processing is based on consent, you can withdraw it at any time.</>,
              ]} />
              <P>
                To exercise any of these rights, email us at{' '}
                <a href="mailto:sales@twobitdigital.com" style={{ color:'#f5c518', textDecoration:'none' }}>
                  sales@twobitdigital.com
                </a>
                . We will respond within 30 days. If you are unsatisfied with our response, you have the
                right to complain to the{' '}
                <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer" style={{ color:'#f5c518', textDecoration:'none' }}>
                  Information Commissioner&apos;s Office (ICO) ↗
                </a>.
              </P>
            </Section>

            <Section id="international" title="10. International Data Transfers">
              <P>
                Some of our third-party service providers process data outside the UK and EEA — specifically
                Resend, Google, and Vercel, which are US-based. Where this occurs, we rely on:
              </P>
              <UL items={[
                'UK adequacy regulations for transfers to countries with equivalent protection',
                'Standard Contractual Clauses (SCCs) / International Data Transfer Agreements (IDTAs) where required',
                'The service provider\'s own binding corporate rules where applicable',
              ]} />
              <P>
                We do not transfer your personal data to any country or organisation outside these
                approved mechanisms.
              </P>
            </Section>

            <Section id="security" title="11. Security">
              <P>
                We implement technical and organisational measures to protect personal data against
                unauthorised access, loss, or destruction:
              </P>
              <UL items={[
                'All data in transit is encrypted via TLS 1.2/1.3 (HTTPS enforced via HSTS)',
                'API endpoints are rate-limited and protected against injection attacks',
                'Contact form data is transmitted directly to our email inbox — it is not persisted in any web-accessible database',
                'Security headers (X-Frame-Options, X-Content-Type-Options, CSP, Referrer-Policy) are configured on all responses',
                'Access to internal systems is protected by multi-factor authentication',
              ]} />
              <P>
                In the event of a personal data breach that is likely to result in risk to individuals,
                we will notify the ICO within 72 hours and affected individuals without undue delay,
                as required by UK GDPR Article 33.
              </P>
            </Section>

            <Section id="children" title="12. Children's Privacy">
              <P>
                This website and our services are directed at businesses and professional individuals.
                We do not knowingly collect personal data from anyone under the age of 16. If you believe
                a child has submitted personal data to us, please contact us immediately and we will
                delete it.
              </P>
            </Section>

            <Section id="california" title="13. US and Australian Residents">
              <P>
                <strong style={{ color:'#eceaf5' }}>California (CCPA/CPRA):</strong> We do not sell personal
                information as defined under the California Consumer Privacy Act. California residents have
                the right to know what personal information is collected, to delete it, to opt out of sale
                (not applicable — we do not sell), and to non-discrimination for exercising these rights.
                Contact us at{' '}
                <a href="mailto:sales@twobitdigital.com" style={{ color:'#f5c518', textDecoration:'none' }}>
                  sales@twobitdigital.com
                </a>
                {' '}to make a request.
              </P>
              <P>
                <strong style={{ color:'#eceaf5' }}>Australia (Privacy Act 1988):</strong> We comply with
                the Australian Privacy Principles. Australian residents have the right to access and
                correct personal information we hold. Contact us to make a request.
              </P>
            </Section>

            <Section id="changes" title="14. Changes to This Policy">
              <P>
                We may update this Privacy Policy from time to time. When we do, we will update the
                &ldquo;Last updated&rdquo; date at the top of this page. We will not retroactively reduce
                your rights under this policy without your consent. For material changes, we will provide
                prominent notice on this website.
              </P>
            </Section>

            <Section id="contact-us" title="15. Contact Us">
              <P>
                For any questions about this Privacy Policy, to exercise your rights, or to make a
                complaint, contact us at:
              </P>
              <div style={{
                backgroundColor: '#11112b',
                border:          '1px solid rgba(255,255,255,0.06)',
                borderRadius:    '8px',
                padding:         '1.25rem 1.5rem',
                fontFamily:      'var(--font-inter)',
                fontSize:        '0.9rem',
                color:           '#9d99b8',
                lineHeight:      1.8,
              }}>
                <strong style={{ color:'#eceaf5' }}>Two Bit Digital Ltd</strong><br />
                Data Protection Enquiries<br />
                <a href="mailto:sales@twobitdigital.com" style={{ color:'#f5c518', textDecoration:'none' }}>
                  sales@twobitdigital.com
                </a><br />
                Companies House No. 14710072<br />
                Registered in England and Wales
              </div>
            </Section>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

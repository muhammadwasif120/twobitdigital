import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Two Bit Digital',
  description:
    'Terms of Service for Two Bit Digital Ltd. Governing law: England and Wales. All client engagements are subject to a separate written agreement.',
  alternates: { canonical: 'https://twobitdigital.com/terms' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED  = '18 April 2026'
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

export default function TermsPage() {
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
              display:      'flex',
              alignItems:   'center',
              gap:          '0.5rem',
              marginBottom: '1.5rem',
            }}>
              <Link href="/" style={{ fontFamily:'var(--font-inter)', fontSize:'0.78rem', color:'#5e5a7a', textDecoration:'none' }}>Home</Link>
              <span style={{ color:'#5e5a7a', fontSize:'0.75rem' }}>›</span>
              <span style={{ fontFamily:'var(--font-inter)', fontSize:'0.78rem', color:'#9d99b8' }}>Terms of Service</span>
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
              Terms of Service
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
              These terms govern your use of twobitdigital.com and your relationship with
              Two Bit Digital Ltd. Client engagements are governed by separate written agreements.
            </p>

            <Callout>
              📋 <strong>Important:</strong> These Terms of Service govern your use of this website.
              All client engagements — software development, AI integration, consultancy, or any
              other professional services — are governed by a separate, individually negotiated
              Statement of Work and/or Master Services Agreement signed by both parties. In the event
              of any conflict, the signed client agreement takes precedence.
            </Callout>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {[
                { label: 'Last updated',    value: LAST_UPDATED },
                { label: 'Effective date',  value: EFFECTIVE_DATE },
                { label: 'Governing law',   value: 'England and Wales' },
                { label: 'Company',         value: 'Two Bit Digital Ltd' },
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

            <Section id="acceptance" title="1. Acceptance of Terms">
              <P>
                By accessing or using twobitdigital.com (&ldquo;the Website&rdquo;), you agree to be bound
                by these Terms of Service (&ldquo;Terms&rdquo;) and our{' '}
                <Link href="/privacy" style={{ color:'#f5c518', textDecoration:'none' }}>Privacy Policy</Link>.
                If you do not agree to these Terms, please do not use the Website.
              </P>
              <P>
                These Terms apply to all visitors, users, and anyone who accesses or uses the Website.
                The Website is operated by Two Bit Digital Ltd, a company registered in England and Wales
                (Companies House No. 14710072).
              </P>
            </Section>

            <Section id="services-description" title="2. Description of Services">
              <P>
                Two Bit Digital Ltd is a SaaS development and AI engineering studio. Through this Website,
                we present information about our services and provide a mechanism to submit project enquiries.
                The Website does not itself provide any software development, AI integration, or technology
                services — those are delivered under separate written agreements.
              </P>
              <P>Our services include, but are not limited to:</P>
              <UL items={[
                'SaaS platform design, development, and deployment',
                'AI integration, automation, and machine learning system development',
                'Web application and mobile application development',
                'Compliance and RegTech software engineering',
                'Government and public sector digital delivery',
                'Cloud architecture, infrastructure, and DevOps',
                'Technical consultancy and architecture review',
              ]} />
              <P>
                All professional services are subject to a separately executed Statement of Work (SoW)
                or Master Services Agreement (MSA) which will detail scope, deliverables, timelines,
                payment terms, and all other commercially material terms.
              </P>
            </Section>

            <Section id="website-use" title="3. Permitted Use of This Website">
              <P>You may use this Website for lawful purposes only. You agree not to:</P>
              <UL items={[
                'Use the Website in any way that violates applicable local, national, or international law or regulation',
                'Transmit unsolicited or unauthorised advertising or promotional material',
                'Attempt to gain unauthorised access to any part of the Website, its server, or any associated systems',
                'Use automated tools (scrapers, bots, crawlers) to extract content without our consent — with the specific exception of legitimate search engine and AI crawler bots, which are explicitly welcomed',
                'Engage in any conduct that could damage, disable, or impair the Website or interfere with other users',
                'Submit false, misleading, or fraudulent information through the contact form',
                'Attempt to probe, scan, or test the vulnerability of the Website or its infrastructure',
              ]} />
            </Section>

            <Section id="ip" title="4. Intellectual Property">
              <P>
                All content on this Website — including but not limited to text, design, graphics, code,
                case studies, articles, and the overall site architecture — is the intellectual property
                of Two Bit Digital Ltd and is protected by copyright, trademark, and other applicable
                intellectual property laws.
              </P>
              <P>
                You may view, print, and share content from this Website for personal, non-commercial,
                or journalistic reference purposes, provided that:
              </P>
              <UL items={[
                'You clearly attribute Two Bit Digital Ltd as the source',
                'You do not modify, adapt, or create derivative works',
                'You do not use the content for commercial purposes without our written consent',
              ]} />
              <P>
                The Two Bit Digital name, wordmark, and branding are trade marks of Two Bit Digital Ltd.
                No licence is granted to use them without our express written permission.
              </P>
              <P>
                <strong style={{ color:'#eceaf5' }}>Client work:</strong> Intellectual property rights
                in software and deliverables created for clients are governed exclusively by the relevant
                client agreement. As a general principle, we assign full IP ownership to clients upon
                final payment — but this is always specified in writing in the engagement contract.
              </P>
            </Section>

            <Section id="confidentiality" title="5. Confidentiality">
              <P>
                Any information you share with us through the contact form or in subsequent communications
                will be treated as confidential. We will not disclose your project details, business
                requirements, or any information you share during pre-engagement discussions to any
                third party without your consent, except as required by law.
              </P>
              <P>
                For active client engagements, confidentiality obligations are defined in the signed
                client agreement, which typically includes mutual non-disclosure provisions.
              </P>
            </Section>

            <Section id="no-data-sale" title="6. Data: Our Commitments">
              <Callout>
                <strong>We do not sell your data. Full stop.</strong> No personal information submitted
                through this Website — contact details, project descriptions, business information — is
                ever sold to, shared with, or monetised by any third party for marketing or commercial
                purposes.
              </Callout>
              <P>
                Contact form submissions are used solely to evaluate and respond to your project enquiry.
                For full details of how we handle personal data, including your rights, see our{' '}
                <Link href="/privacy" style={{ color:'#f5c518', textDecoration:'none' }}>Privacy Policy</Link>.
              </P>
            </Section>

            <Section id="disclaimers" title="7. Disclaimers and Warranties">
              <P>
                This Website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
                To the fullest extent permitted by law, Two Bit Digital Ltd makes no representations or
                warranties of any kind, express or implied, including:
              </P>
              <UL items={[
                'That the Website will be uninterrupted, error-free, or free of viruses or other harmful components',
                'That the information on the Website is complete, accurate, or current',
                'That any particular result or outcome will follow from contacting us or engaging our services',
              ]} />
              <P>
                Nothing on this Website constitutes legal, financial, technical, or professional advice.
                Content in our Insights section represents our opinions and experience — it should not be
                relied upon as a substitute for specific professional advice tailored to your situation.
              </P>
            </Section>

            <Section id="liability" title="8. Limitation of Liability">
              <P>
                To the fullest extent permitted by applicable law, Two Bit Digital Ltd shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages arising from:
              </P>
              <UL items={[
                'Your use of or inability to use this Website',
                'Any errors or omissions in the Website content',
                'Unauthorised access to or alteration of your data transmitted to us',
                'Any conduct of third parties on or through the Website',
              ]} />
              <P>
                Our total liability to you for any direct damages arising from your use of this Website
                shall not exceed £100 (one hundred pounds sterling).
              </P>
              <P>
                Nothing in these Terms excludes or limits our liability for death or personal injury
                caused by our negligence, fraud or fraudulent misrepresentation, or any other liability
                that cannot be excluded by law.
              </P>
              <P>
                <strong style={{ color:'#eceaf5' }}>Note on client engagements:</strong> Liability in
                relation to professional services delivered under a client agreement is governed entirely
                by that agreement, not by these Website Terms.
              </P>
            </Section>

            <Section id="third-party-links" title="9. Third-Party Links and Services">
              <P>
                This Website contains links to third-party websites and services (including our products
                Tikkit X and Averon Legal Systems, the UK Companies House register, and LinkedIn). These
                links are provided for reference and convenience only. Two Bit Digital Ltd has no control
                over third-party sites and is not responsible for their content, privacy practices, or
                availability.
              </P>
              <P>
                Linking to a third-party site does not imply endorsement of that site or its content.
              </P>
            </Section>

            <Section id="indemnification" title="10. Indemnification">
              <P>
                You agree to indemnify, defend, and hold harmless Two Bit Digital Ltd and its officers,
                employees, agents, and successors from and against any claims, damages, losses, costs,
                and expenses (including reasonable legal fees) arising out of or relating to:
              </P>
              <UL items={[
                'Your use of the Website in violation of these Terms',
                'Your submission of false, misleading, or fraudulent information',
                'Your infringement of any intellectual property or other rights',
              ]} />
            </Section>

            <Section id="governing-law" title="11. Governing Law and Disputes">
              <P>
                These Terms and any dispute or claim arising out of or in connection with them (including
                non-contractual disputes) shall be governed by and construed in accordance with the law
                of England and Wales.
              </P>
              <P>
                The courts of England and Wales shall have exclusive jurisdiction to settle any dispute
                or claim arising out of or in connection with these Terms or their subject matter.
              </P>
              <P>
                We will always try to resolve disputes informally first. If you have a concern, please
                contact us at{' '}
                <a href="mailto:sales@twobitdigital.com" style={{ color:'#f5c518', textDecoration:'none' }}>
                  sales@twobitdigital.com
                </a>
                {' '}before initiating any formal proceedings.
              </P>
            </Section>

            <Section id="changes" title="12. Changes to These Terms">
              <P>
                We reserve the right to modify these Terms at any time. When we do, we will update the
                &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the Website
                after changes are posted constitutes acceptance of the revised Terms.
              </P>
              <P>
                We will provide reasonable notice of material changes — for example, by posting a notice
                on the homepage.
              </P>
            </Section>

            <Section id="termination" title="13. Termination of Access">
              <P>
                We reserve the right to restrict or terminate access to this Website at our sole
                discretion, without notice, for conduct that we reasonably believe violates these Terms
                or is harmful to other users, us, or third parties.
              </P>
            </Section>

            <Section id="entire-agreement" title="14. Entire Agreement">
              <P>
                These Terms, together with our Privacy Policy, constitute the entire agreement between
                you and Two Bit Digital Ltd with respect to your use of this Website. They supersede all
                prior communications and agreements regarding the Website.
              </P>
              <P>
                If any provision of these Terms is found to be unenforceable, the remaining provisions
                will continue in full force and effect.
              </P>
            </Section>

            <Section id="contact-us" title="15. Contact">
              <P>
                If you have any questions about these Terms, please contact us:
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

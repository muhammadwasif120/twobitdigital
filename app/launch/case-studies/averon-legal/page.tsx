import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'Averon Legal Systems Case Study — Legal Tech UK · Two Bit Digital',
  description: 'How Two Bit Digital built Averon Legal Systems: CPR Part 47 and Part 36 compliance SaaS for UK costs lawyers. Deadline engine, multi-tenant, client portal.',
  keywords: ['legal tech saas case study', 'cpr part 47 software', 'costs lawyer software', 'legal compliance saas uk', 'saas mvp case study uk'],
  alternates: { canonical: 'https://www.twobitdigital.com/launch/case-studies/averon-legal' },
  openGraph: {
    title: 'Averon Legal Systems Case Study — Legal Tech UK · Two Bit Digital',
    description: 'CPR Part 47 compliance SaaS for UK costs lawyers. Multi-tenant, automated deadline engine, client portal.',
    url: 'https://www.twobitdigital.com/launch/case-studies/averon-legal',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Averon Legal Systems Case Study — Two Bit Digital',
  url: 'https://www.twobitdigital.com/launch/case-studies/averon-legal',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.twobitdigital.com' },
      { '@type': 'ListItem', position: 2, name: 'Launch', item: 'https://www.twobitdigital.com/launch' },
      { '@type': 'ListItem', position: 3, name: 'Case Studies', item: 'https://www.twobitdigital.com/launch/case-studies' },
      { '@type': 'ListItem', position: 4, name: 'Averon Legal Systems', item: 'https://www.twobitdigital.com/launch/case-studies/averon-legal' },
    ],
  },
}

const timeline = [
  { phase: 'Week 1', label: 'Domain research', detail: 'Deep study of CPR Part 47 and Part 36 procedures. Mapping the deadline calculation rules, trigger events, and court-mandated timelines. Interviews with practising costs lawyers to validate pain points.' },
  { phase: 'Week 2', label: 'Data model', detail: 'Designing the multi-tenant schema: firms, users, matters, deadline events, client access. RLS policies from day one. TypeScript types generated from the Supabase schema.' },
  { phase: 'Weeks 3–4', label: 'Deadline engine', detail: 'Building the core compliance engine: automated calculation of Part 47 detailed assessment deadlines, Precedent H budget cycles, and Part 36 offer expiry windows from user-entered trigger dates.' },
  { phase: 'Week 5', label: 'Client portal', detail: 'Separate authenticated view for clients — read-only access to their matter status, upcoming deadlines, and filed documents. Isolated by RLS from other firm data.' },
  { phase: 'Week 6', label: 'Billing + beta', detail: 'Stripe subscription integration for firm-level billing. Onboarding flow. Deployed to production. First beta firms onboarded.' },
]

const technicalDecisions = [
  {
    decision: 'Multi-tenant with Row-Level Security from day one',
    why: 'Averon Legal serves multiple law firms from a single database. Data isolation is not optional in legal SaaS — a costs lawyer from Firm A must never be able to see Firm B\'s client matters. We use Supabase\'s Row-Level Security at the database level, not application-level guards. This means even a bug in the application code cannot expose cross-firm data. The RLS policies were written and tested before a single UI component was built.',
  },
  {
    decision: 'Deterministic deadline calculation engine',
    why: 'CPR Part 47 deadlines are not estimates — they are legally binding. A deadline calculation engine that returns different results on different inputs, or that relies on user interpretation of the rules, is a liability. We built a deterministic TypeScript function library for deadline calculation: given a trigger event and a date, it returns the exact statutory deadline with the relevant CPR rule referenced. This is unit-tested against known cases.',
  },
  {
    decision: 'Separate client portal (not a role within the main app)',
    why: 'Costs lawyers\' clients are typically litigation solicitors at other firms. Giving them a login to the costs lawyer\'s internal practice management system is a security and UX problem. A dedicated client portal — with its own URL, its own auth session, and its own view — gives clients exactly the information they need (matter status, deadlines, filed documents) without exposing the costs lawyer\'s full workflow. Isolated by the same RLS policies.',
  },
  {
    decision: 'Firm-level Stripe billing (not per-user)',
    why: 'Costs law firms are small. A typical firm has one to five costs lawyers. Per-user SaaS pricing creates friction and administrative overhead for small teams. Firm-level billing — a single subscription per practice — simplifies procurement, reduces billing questions, and matches how legal firms think about software expenditure.',
  },
]

const metrics = [
  { label: 'Compliance framework', value: 'CPR Part 47 + 36' },
  { label: 'Architecture', value: 'Multi-tenant' },
  { label: 'Data isolation', value: 'Row-Level Security' },
  { label: 'Client access', value: 'Dedicated portal' },
  { label: 'Deadline engine', value: 'Deterministic, unit-tested' },
  { label: 'Billing', value: 'Stripe — firm-level' },
  { label: 'Target market', value: 'UK costs lawyers' },
  { label: 'Status', value: 'Beta' },
]

export default function AveronLegalCaseStudyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>
        <div style={{ backgroundColor: '#09091a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Launch', href: '/launch' }, { label: 'Case Studies', href: '/launch/case-studies' }, { label: 'Averon Legal Systems' }]} />
          </div>
        </div>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)', padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div className="section-label" style={{ margin: 0 }}>Case study</div>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1D9E75' }}>Legal Technology · United Kingdom</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#eceaf5', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: '760px' }}>
              Averon Legal Systems — CPR compliance SaaS for UK costs lawyers.
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', color: '#9d99b8', lineHeight: 1.8, maxWidth: '640px', margin: '0 0 2rem' }}>
              UK costs lawyers track Part 47 detailed assessment deadlines in spreadsheets. One missed deadline can invalidate a costs claim worth tens of thousands of pounds. We built the software that eliminates that risk.
            </p>
            <Link href="/launch/case-studies" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.875rem', color: '#9d99b8', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', padding: '0.9rem 2rem', borderRadius: '8px' }}>
              ← All case studies
            </Link>
          </div>
        </section>

        {/* Metrics bar */}
        <section style={{ backgroundColor: '#0d0d22', padding: '2.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '10px', overflow: 'hidden' }}>
              {metrics.map((m) => (
                <div key={m.label} style={{ backgroundColor: '#0d0d22', padding: '1.25rem' }}>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', marginBottom: '0.35rem' }}>{m.label}</div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', color: '#eceaf5' }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem + Solution */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <div className="section-label">The problem</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#eceaf5', margin: '0.5rem 0 1.25rem', letterSpacing: '-0.02em' }}>Spreadsheets tracking legal deadlines worth hundreds of thousands.</h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.8, margin: '0 0 1rem' }}>
                Costs lawyers in England and Wales manage detailed assessment proceedings under CPR Part 47. The procedure involves multiple sequential deadlines — Precedent H budget filings, points of dispute responses, replies — each with strict statutory timescales.
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.8, margin: '0 0 1rem' }}>
                Most costs law firms manage these deadlines in Excel. A missed Part 47 deadline can result in the court refusing to hear the assessment — costing the client the entire recoverable costs claim, which may be in the tens or hundreds of thousands of pounds.
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.8, margin: 0 }}>
                There was no purpose-built software for this workflow. Existing legal practice management systems treat costs as an afterthought. The specific CPR Part 47 deadline calculation logic was not implemented anywhere.
              </p>
            </div>
            <div>
              <div className="section-label">The solution</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#eceaf5', margin: '0.5rem 0 1.25rem', letterSpacing: '-0.02em' }}>A dedicated compliance engine. Multi-tenant. Client-facing.</h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.8, margin: '0 0 1rem' }}>
                Averon Legal Systems is a multi-tenant SaaS where each law firm has its own isolated workspace. The core product is a deadline calculation engine: the costs lawyer enters a trigger event — service of a bill, receipt of points of dispute — and the system automatically calculates every subsequent statutory deadline with the relevant CPR rule cited.
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.8, margin: 0 }}>
                A separate client portal gives the instructing solicitor read-only access to their matters — eliminating the need for status-update emails. Stripe handles firm-level subscriptions. Row-Level Security at the database layer ensures complete data isolation between firms.
              </p>
            </div>
          </div>
        </section>

        {/* Technical decisions */}
        <section style={{ backgroundColor: '#0d0d22', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Engineering decisions</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>
                Why we made the choices we made.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {technicalDecisions.map((d) => (
                <div key={d.decision} style={{ backgroundColor: '#09091a', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '3px solid #1D9E75', borderRadius: '8px', padding: '1.5rem 2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1rem', color: '#eceaf5', margin: '0 0 0.6rem', letterSpacing: '-0.01em' }}>{d.decision}</h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.8, margin: 0 }}>{d.why}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Build timeline */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Build timeline</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>Six weeks from domain research to beta.</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
              {timeline.map((t, i) => (
                <div key={t.phase} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', backgroundColor: i % 2 === 0 ? '#0d0d22' : '#09091a' }}>
                  <div style={{ padding: '1.5rem', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: '0.35rem' }}>{t.phase}</div>
                    <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.95rem', color: '#eceaf5' }}>{t.label}</div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.75, margin: 0 }}>{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section style={{ backgroundColor: '#0d0d22', padding: '3rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5e5a7a', marginBottom: '0.6rem' }}>Stack</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Row-Level Security', 'Vercel', 'Stripe', 'Tailwind CSS'].map((s) => (
                  <span key={s} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 500, color: '#9d99b8', backgroundColor: '#11112b', border: '1px solid rgba(255,255,255,0.06)', padding: '0.3rem 0.7rem', borderRadius: '999px' }}>{s}</span>
                ))}
              </div>
            </div>
            <Link href="/products/averon-legal-systems" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#1D9E75', textDecoration: 'none', border: '1px solid #1D9E75', padding: '0.75rem 1.5rem', borderRadius: '8px', whiteSpace: 'nowrap' }}>
              View product page →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #11112b 0%, #16163a 100%)', padding: '5rem 0' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Building a regulated-industry SaaS?</h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.05rem', color: '#9d99b8', lineHeight: 1.75, margin: '0 0 2rem' }}>We understand compliance requirements, data isolation, and the engineering disciplines that regulated markets demand. Book a scope session.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#09091a', backgroundColor: '#7F77DD', padding: '1rem 2.25rem', borderRadius: '8px', textDecoration: 'none' }}>
                Book a Scope Session →
              </Link>
              <Link href="/launch/pricing" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: '#9d99b8', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', padding: '1rem 2rem', borderRadius: '8px' }}>
                View pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

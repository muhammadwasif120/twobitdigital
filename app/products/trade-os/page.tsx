import type { Metadata } from 'next'
import Link         from 'next/link'
import Nav          from '@/components/Nav'
import Footer       from '@/components/Footer'
import Breadcrumb   from '@/components/shared/Breadcrumb'
import CTABanner    from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title:       'Trade OS — Commodity Trading & Logistics ERP · Two Bit Digital',
  description: 'Trade OS is a multi-module commodity trading and logistics ERP with a cryptographically hash-chained, tamper-evident audit trail. Built and owned by Two Bit Digital, available to license.',
  keywords: [
    'Trade OS',
    'commodity trading software',
    'trading and logistics ERP',
    'agri-commodity ERP Pakistan',
    'multi-currency ledger software',
    'tamper-evident audit log',
    'export compliance software',
    'warehouse management ERP',
  ],
  alternates: { canonical: 'https://twobitdigital.com/products/trade-os' },
  openGraph: {
    title:       'Trade OS — Commodity Trading & Logistics ERP · Two Bit Digital',
    description: 'A full-stack trading and logistics ERP with a cryptographically tamper-evident audit trail, refined inside a live commodity trading operation.',
    url:         'https://twobitdigital.com/products/trade-os',
    type:        'website',
  },
  twitter: {
    title:       'Trade OS — Two Bit Digital',
    description: 'Commodity trading & logistics ERP with a cryptographically hash-chained, tamper-evident audit trail.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type':    'SoftwareApplication',
  name:       'Trade OS',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url:        'https://twobitdigital.com/products/trade-os',
  description:'Multi-module commodity trading and logistics ERP with a cryptographically hash-chained, tamper-evident audit trail.',
  brand: { '@type': 'Organization', name: 'Two Bit Digital' },
}

const metrics = [
  { label: 'Operational modules',    value: '20+' },
  { label: 'Trading entities',       value: '4' },
  { label: 'Currencies supported',   value: 'PKR · USD · AED' },
  { label: 'Audit log integrity',    value: '100% hash-chained' },
  { label: 'Database',               value: 'Supabase (PostgreSQL + RLS)' },
  { label: 'Status',                 value: 'Live' },
]

const capabilities = [
  {
    title: 'Trading & Contracts',
    items: [
      'Back-to-back trade deals with dual broker support (buyer-side + seller-side) and automatic commission calculation',
      'Contract clause library with a standard template editor and letterhead PDF generation',
      'Purchase orders linked directly to lot traceability',
      'Live commodity price board with per-commodity default specs, insurance, and document requirements',
    ],
  },
  {
    title: 'Warehousing & Stock',
    items: [
      'Multi-warehouse, multi-shed stock ledger with real-time occupancy tracking',
      'Bag stock management split by brand and material, with full vendor and supplier reconciliation',
      'Milling yield reports for raw commodity processing with automated yield-check validation',
      'Truck arrival intake across three weight types (gross, tare, billing) with arrival-vs-invoice reconciliation',
    ],
  },
  {
    title: 'Logistics & Delivery',
    items: [
      'Vessel and shipment tracking from booking through arrival',
      'Delivery order fulfilment with a real-time sellable-stock picker',
      'Container tracking with quality inspection segmentation (SGS, Baltic, Intertek)',
      'Draft and final Bill of Lading number tracking through the shipment lifecycle',
    ],
  },
  {
    title: 'Finance & Ledgers',
    items: [
      'Multi-currency accounts receivable/payable (PKR, USD, AED) with automatic currency-mismatch guards',
      'Bank and cash account reconciliation with full client statements of account',
      'Broker and trader commission ledgers with running-balance calculation',
      'Automated invoice generation linked to trades, lots, and claims',
    ],
  },
  {
    title: 'Compliance & Audit',
    items: [
      'Cryptographically hash-chained, append-only audit log enforced at the database level via row-level security',
      'Export compliance workflows: Form-E generation and export proceeds realisation tracking',
      'Per-lot document vault with checklist-driven completeness tracking',
      'Claims management with auto-calculated debit notes across multiple claim types',
    ],
  },
  {
    title: 'Reporting & Operations',
    items: [
      'File-level costing and P&L engine with industry-standard export formats',
      'Bulk PDF/Excel exports on company letterhead across every operational module',
      'Sales tax register with date-range bulk invoice generation',
      'Kanban and list views with click-to-sort, column visibility, and a task/alert centre',
    ],
  },
]

const technicalHighlights = [
  {
    title: 'Cryptographically Chained Audit Trail',
    body:  'Every ledger-affecting action — trade postings, broker commissions, claims, payments — writes to a sequential, hash-chained audit entry. Records cannot be edited or deleted, even by an administrator; the chain is enforced with append-only row-level security at the database level, not just in application code.',
  },
  {
    title: 'Currency-Safe Multi-Currency Ledgers',
    body:  'PKR, USD, and AED transactions flow through the same platform without risk of silent conversion errors. Every account carries an explicit currency, and every posting is guarded against being summed into a mismatched running balance.',
  },
  {
    title: 'Multi-Entity Architecture',
    body:  'Four separate trading entities operate within one platform, each with its own contracts, lots, and ledgers, while sharing common infrastructure — proof the architecture scales to multi-company or multi-subsidiary trading groups without a rebuild.',
  },
  {
    title: 'Real-Time Stock Reconciliation',
    body:  'Every truck arrival, milling report, and delivery order nets automatically into warehouse and shed occupancy, so stock positions reflect the floor in real time rather than an end-of-day batch reconciliation.',
  },
]

export default function TradeOSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>
        <div style={{ backgroundColor: '#09091a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Trade OS' }]} />
          </div>
        </div>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)', padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div className="section-label" style={{ margin: 0 }}>In-House Product</div>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0d9488' }}>Commodity Trading & Logistics · Pakistan</span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 600,
                color: '#4ade80', backgroundColor: 'rgba(74,222,128,0.12)',
                padding: '0.2rem 0.65rem', borderRadius: '999px',
              }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#4ade80' }} />
                Live
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#eceaf5', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: '780px' }}>
              Trade OS — the operating system for commodity trading and logistics.
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', color: '#9d99b8', lineHeight: 1.8, maxWidth: '660px', margin: '0 0 2rem' }}>
              Commodity trading and export businesses run purchase, milling, warehousing, and international delivery on spreadsheets, WhatsApp threads, and paper ledgers. Trade OS replaces all of it with one system of record — refined inside a live trading operation and now available to license.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#09091a', backgroundColor: '#0d9488', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none' }}>
                Enquire About Licensing →
              </Link>
              <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.875rem', color: '#9d99b8', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', padding: '0.9rem 2rem', borderRadius: '8px' }}>
                ← All products
              </Link>
            </div>
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
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#eceaf5', margin: '0.5rem 0 1.25rem', letterSpacing: '-0.02em' }}>Trading operations outgrow spreadsheets fast.</h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.8, margin: '0 0 1rem' }}>
                Purchase orders, broker commissions, warehouse stock, vessel shipments, and multi-currency receivables have no single source of truth when they live across disconnected spreadsheets, WhatsApp threads, and paper ledgers. Reconciling a disputed claim or a broker balance takes days of manual cross-checking — and every handoff is a chance for the numbers to drift apart.
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.8, margin: 0 }}>
                Generic accounting software does not model a trade lifecycle — contracts, lots, milling yields, vessel tracking, and broker ledgers — so trading businesses end up stitching together tools never designed to talk to each other.
              </p>
            </div>
            <div>
              <div className="section-label">The solution</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#eceaf5', margin: '0.5rem 0 1.25rem', letterSpacing: '-0.02em' }}>One system of record, built for the trade lifecycle.</h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.8, margin: '0 0 1rem' }}>
                Trade OS models the entire trade lifecycle natively — contracts, purchase orders, lot and milling traceability, warehouse and bag stock, vessel-tracked delivery orders, broker and trader ledgers, and multi-currency accounts receivable/payable — as one connected data model instead of a patchwork of spreadsheets.
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.8, margin: 0 }}>
                Every ledger-affecting action writes to a cryptographically hash-chained, append-only audit log enforced at the database level, so the business can produce a tamper-evident record on demand — not reconstruct one under pressure during an audit or a dispute.
              </p>
            </div>
          </div>
        </section>

        {/* Full capabilities */}
        <section style={{ backgroundColor: '#0d0d22', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Full platform capabilities</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>
                Everything a trading and logistics operation needs, in one platform.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1.25rem' }}>
              {capabilities.map((cat) => (
                <div key={cat.title} style={{ backgroundColor: '#09091a', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '3px solid #0d9488', borderRadius: '8px', padding: '1.75rem 2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1rem', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.01em' }}>{cat.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {cat.items.map((item) => (
                      <li key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.8rem', color: '#0d9488', lineHeight: 1.6, flexShrink: 0 }}>✓</span>
                        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: '#9d99b8', lineHeight: 1.7 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical highlights */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-label">Engineering decisions</div>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eceaf5', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>
                Why we architected it this way.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {technicalHighlights.map((d) => (
                <div key={d.title} style={{ backgroundColor: '#0d0d22', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '3px solid #0d9488', borderRadius: '8px', padding: '1.5rem 2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1rem', color: '#eceaf5', margin: '0 0 0.6rem', letterSpacing: '-0.01em' }}>{d.title}</h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.875rem', color: '#9d99b8', lineHeight: 1.8, margin: 0 }}>{d.body}</p>
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
                {['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Row-Level Security', 'HMAC-SHA256', 'Vercel'].map((s) => (
                  <span key={s} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 500, color: '#9d99b8', backgroundColor: '#11112b', border: '1px solid rgba(255,255,255,0.06)', padding: '0.3rem 0.7rem', borderRadius: '999px' }}>{s}</span>
                ))}
              </div>
            </div>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#0d9488', textDecoration: 'none', border: '1px solid #0d9488', padding: '0.75rem 1.5rem', borderRadius: '8px', whiteSpace: 'nowrap' }}>
              Enquire About Licensing →
            </Link>
          </div>
        </section>

        <CTABanner
          heading="Want to run your trading operation on Trade OS?"
          subtext="We license Trade OS to commodity trading and logistics companies, and can adapt it to your specific trade flows. Bring us your operation — we will scope what it takes to get you live."
          ctaLabel="Enquire About Licensing"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}

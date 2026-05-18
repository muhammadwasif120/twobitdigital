/**
 * Internal link map — Two Bit Digital
 * ─────────────────────────────────────────────────────────────────────────────
 * Maps each insight slug to 2–4 related links.
 * The article page template injects these as a "Related Reading" block
 * at the end of the article body — before the CTA banner.
 *
 * Keeps cross-linking logic out of the content data (insights.ts)
 * and centralised here for easy maintenance.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type InternalLink = {
  label: string
  href:  string
  /** Short description shown under the label */
  note?: string
}

export const internalLinks: Record<string, InternalLink[]> = {

  // ── Pillar 1: AI & Custom Software ─────────────────────────────────────────

  'what-are-ai-workflows': [
    { label: 'How to Build an AI Automation Strategy', href: '/insights/how-to-build-an-ai-automation-strategy', note: 'The six-step programme for turning AI experimentation into compounding capability' },
    { label: 'What Is a RAG System?',                  href: '/insights/what-is-a-rag-system',                  note: 'The retrieval architecture that makes AI genuinely useful for business documents' },
    { label: 'AI Integration & Automation Services',   href: '/services/ai-integration',                        note: 'How Two Bit Digital designs and builds AI workflows for regulated industries' },
  ],

  'how-to-build-an-ai-automation-strategy': [
    { label: 'AI Workflows Explained',                href: '/insights/what-are-ai-workflows',             note: 'What AI workflows are, the six types, and when to use each' },
    { label: 'What Is a RAG System?',                 href: '/insights/what-is-a-rag-system',              note: 'The knowledge-retrieval architecture powering the most capable AI workflows' },
    { label: 'AI Integration & Automation Services',  href: '/services/ai-integration',                    note: 'Two Bit Digital builds AI automation strategies and executes them end-to-end' },
  ],

  'what-is-a-rag-system': [
    { label: 'AI Workflows Explained',               href: '/insights/what-are-ai-workflows',                       note: 'How RAG fits into a broader AI workflow architecture' },
    { label: 'Terra Core — Document Intelligence',   href: '/products/terra-core',                                  note: 'Two Bit Digital\'s compliance-first document intelligence engine built on RAG' },
    { label: 'AI Integration & Automation Services', href: '/services/ai-integration',                              note: 'RAG system design and deployment for regulated industries' },
    { label: 'AI Integration for Regulated Industries', href: '/insights/ai-integration-regulated-industries',      note: 'What regulated industries need from AI that standard deployments miss' },
  ],

  'hidden-cost-of-manual-business-processes': [
    { label: 'AI Workflows Explained',                           href: '/insights/what-are-ai-workflows',                  note: 'How AI workflows eliminate the manual process costs described in this article' },
    { label: 'The Hidden Value of Custom Software',              href: '/insights/custom-software-vs-off-the-shelf',       note: 'Why bespoke software beats workaround-heavy packaged tools on five-year TCO' },
    { label: 'AI Integration & Automation Services',             href: '/services/ai-integration',                         note: 'Two Bit Digital\'s approach to eliminating manual process overhead' },
  ],

  'custom-software-vs-off-the-shelf': [
    { label: 'What Is a SaaS Development Studio?',  href: '/insights/what-is-a-saas-development-studio',  note: 'Why a studio partner is different from an agency for custom software builds' },
    { label: 'SaaS Platform Development',           href: '/services/saas-development',                   note: 'Two Bit Digital\'s end-to-end SaaS build service' },
    { label: 'Work & Case Studies',                 href: '/work',                                         note: 'Real examples of custom software built for regulated markets' },
  ],

  // ── Pillar 2: Event Technology / Tikkit X ──────────────────────────────────

  'event-management-software-guide-2025': [
    { label: 'Tikkit X — Live Event Ticketing Platform',    href: '/products/tikkit-x',                                note: 'The platform built for Pakistan\'s event organisers — free to start' },
    { label: 'How Offline QR Verification Stops Event Fraud', href: '/insights/offline-qr-verification-event-ticketing', note: 'The cryptographic technology behind fraud-proof ticket scanning' },
    { label: 'How to Run a Paperless Event',                href: '/insights/how-to-run-a-paperless-event-pakistan',   note: 'Step-by-step guide from registration to post-event analytics' },
  ],

  'offline-qr-verification-event-ticketing': [
    { label: 'Tikkit X — Live Event Ticketing Platform',  href: '/products/tikkit-x',                               note: 'The platform using HMAC-SHA256 offline QR verification in production' },
    { label: 'How to Run a Paperless Event',              href: '/insights/how-to-run-a-paperless-event-pakistan',  note: 'The complete operational guide to digital event management' },
    { label: 'Event Management Software in 2025',         href: '/insights/event-management-software-guide-2025',   note: 'Full buyer\'s guide covering offline capability, fraud prevention, and payments' },
  ],

  'tikkit-x-event-management-pakistan': [
    { label: 'Tikkit X — Product Page',              href: '/products/tikkit-x',                                note: 'Full feature overview, pricing, and how to get started' },
    { label: 'How to Run a Paperless Event',         href: '/insights/how-to-run-a-paperless-event-pakistan',  note: 'A step-by-step guide using Tikkit X from setup to post-event analytics' },
    { label: 'How Offline QR Verification Works',   href: '/insights/offline-qr-verification-event-ticketing', note: 'The cryptographic technology behind Tikkit X\'s fraud prevention' },
  ],

  'how-to-run-a-paperless-event-pakistan': [
    { label: 'Tikkit X — Live Event Ticketing Platform',      href: '/products/tikkit-x',                               note: 'The platform that handles every step in this guide — free to start' },
    { label: 'How Offline QR Verification Stops Event Fraud', href: '/insights/offline-qr-verification-event-ticketing', note: 'How the cryptographic check-in system in Step 5 actually works' },
    { label: 'Event Management Software in 2025',             href: '/insights/event-management-software-guide-2025',   note: 'The complete buyer\'s guide to choosing event management software' },
  ],

  // ── Pillar 3: Legal Technology ──────────────────────────────────────────────

  'law-firm-digital-transformation-guide': [
    { label: 'Averon Legal Systems',                    href: '/products/averon-legal-systems',               note: 'Two Bit Digital\'s CPR-compliant legal management SaaS — currently in beta' },
    { label: 'CPR Part 47 Compliance Software',         href: '/insights/cpr-part-47-compliance-software',    note: 'What purpose-built CPR 47 compliance software must do for costs lawyers' },
    { label: 'Why Your Law Firm Needs a Client Portal', href: '/insights/law-firm-client-portal-guide',       note: 'Client expectations in 2025 and what a modern portal must contain' },
    { label: 'Compliance & RegTech Services',           href: '/services/compliance-regtech',                 note: 'Two Bit Digital\'s full legal technology and regulatory software offering' },
  ],

  'cpr-part-47-compliance-software': [
    { label: 'Averon Legal Systems',                    href: '/products/averon-legal-systems',              note: 'The CPR Part 47 and Part 36 SaaS built to address exactly these challenges' },
    { label: 'Law Firm Digital Transformation Guide',   href: '/insights/law-firm-digital-transformation-guide', note: 'The complete playbook for digitising a law firm — client-facing and internal' },
    { label: 'End-to-End Legal Tech Platform',          href: '/insights/end-to-end-legal-tech-platform',   note: 'Why fragmented tools create compliance gaps that one platform solves' },
  ],

  'law-firm-client-portal-guide': [
    { label: 'Averon Legal Systems',                   href: '/products/averon-legal-systems',               note: 'Includes a client portal with case diary, document access, and hearings calendar' },
    { label: 'Law Firm Digital Transformation Guide',  href: '/insights/law-firm-digital-transformation-guide', note: 'How the client portal fits into a full law firm digital transformation' },
    { label: 'Compliance & RegTech Services',          href: '/services/compliance-regtech',                  note: 'Two Bit Digital builds secure, compliant client portals for law firms' },
  ],

  'law-firm-case-file-digitisation': [
    { label: 'Averon Legal Systems',                   href: '/products/averon-legal-systems',                note: 'The document management infrastructure that makes digitised files operationally useful' },
    { label: 'Law Firm Digital Transformation Guide',  href: '/insights/law-firm-digital-transformation-guide', note: 'How case file digitisation fits into a full firm-wide digital transformation' },
    { label: 'Law Firm Employee Management Software',  href: '/insights/law-firm-employee-management-software', note: 'Role-based access controls and time recording after digitisation is complete' },
  ],

  'law-firm-employee-management-software': [
    { label: 'Averon Legal Systems',                   href: '/products/averon-legal-systems',                note: 'Built-in role-based dashboards, matter-linked time recording, and task allocation' },
    { label: 'Law Firm Digital Transformation Guide',  href: '/insights/law-firm-digital-transformation-guide', note: 'How employee management fits into a complete law firm digital stack' },
    { label: 'Case File Digitisation Guide',           href: '/insights/law-firm-case-file-digitisation',    note: 'The access control and document structure that underpins team management' },
  ],

  'end-to-end-legal-tech-platform': [
    { label: 'Averon Legal Systems',                   href: '/products/averon-legal-systems',                  note: 'Two Bit Digital\'s single platform covering all layers described in this article' },
    { label: 'Law Firm Digital Transformation Guide',  href: '/insights/law-firm-digital-transformation-guide', note: 'The complete transformation roadmap — client-facing and internal management' },
    { label: 'Compliance & RegTech Services',          href: '/services/compliance-regtech',                    note: 'How Two Bit Digital builds integrated legal technology for regulated firms' },
  ],

  // ── Existing articles ───────────────────────────────────────────────────────

  'how-to-choose-saas-development-agency-uk': [
    { label: 'What Is a SaaS Development Studio?',  href: '/insights/what-is-a-saas-development-studio', note: 'How a SaaS studio differs from the agencies and freelancers covered in this guide' },
    { label: 'SaaS Platform Development Services',  href: '/services/saas-development',                  note: 'Two Bit Digital\'s end-to-end SaaS development offering' },
    { label: 'Work & Case Studies',                 href: '/work',                                        note: 'Anonymised case studies across legal tech, government, and financial services' },
  ],

  'ai-integration-regulated-industries': [
    { label: 'What Is a RAG System?',                href: '/insights/what-is-a-rag-system',         note: 'The retrieval architecture that solves the auditability and grounding problems described here' },
    { label: 'AI Workflows Explained',               href: '/insights/what-are-ai-workflows',         note: 'Six types of AI workflow and which architecture is right for each' },
    { label: 'AI Integration & Automation Services', href: '/services/ai-integration',                note: 'Two Bit Digital\'s AI integration practice for regulated industries' },
    { label: 'RegTech and Compliance Software',      href: '/insights/regtech-compliance-software-regulated-industries', note: 'Why generic tools fail in regulated environments — and what to use instead' },
  ],

  'winning-uk-government-digital-contracts': [
    { label: 'Government & Public Sector Digital Services', href: '/services/government-digital',  note: 'Two Bit Digital\'s GDS-aligned delivery capability and framework credentials' },
    { label: 'About Two Bit Digital',                       href: '/about',                        note: 'Company credentials, UN Vendor registration, and founder profile' },
    { label: 'Compliance & RegTech Services',               href: '/services/compliance-regtech',  note: 'Regulatory workflow systems required for government digital contracts' },
  ],

  // ── Pillar 4: Two Bit Digital Brand ────────────────────────────────────────

  'what-is-a-saas-development-studio': [
    { label: 'SaaS Platform Development Services',      href: '/services/saas-development',             note: 'Two Bit Digital\'s end-to-end SaaS build offering' },
    { label: 'How We Choose a SaaS Agency',             href: '/insights/how-to-choose-saas-development-agency-uk', note: 'A founder\'s checklist for evaluating development partners' },
    { label: 'Work & Case Studies',                     href: '/work',                                  note: 'Anonymised case studies across legal tech, government, and financial services' },
    { label: 'About Two Bit Digital',                   href: '/about',                                 note: 'Founder profile, company story, and credentials' },
  ],

  'inside-two-bit-digital-ai-engineering-process': [
    { label: 'How We Built Averon Legal Systems',       href: '/insights/building-averon-legal-systems-case-study', note: 'This process applied end-to-end in a CPR-compliant legal SaaS build' },
    { label: 'SaaS Platform Development Services',      href: '/services/saas-development',                          note: 'Our end-to-end delivery capability' },
    { label: 'About Two Bit Digital',                   href: '/about',                                              note: 'Company overview, products, and team' },
  ],

  'building-averon-legal-systems-case-study': [
    { label: 'Averon Legal Systems',                    href: '/products/averon-legal-systems',          note: 'Product overview and beta access information' },
    { label: 'Compliance & RegTech Services',           href: '/services/compliance-regtech',            note: 'The service capability behind the Averon build' },
    { label: 'CPR Part 47 Compliance Software',         href: '/insights/cpr-part-47-compliance-software', note: 'What CPR 47 compliance actually requires from software' },
  ],

  'ai-integration-vs-ai-native-software': [
    { label: 'AI Workflows Explained',               href: '/insights/what-are-ai-workflows',      note: 'The underlying architecture relevant to both integration and native approaches' },
    { label: 'AI Integration & Automation Services', href: '/services/ai-integration',             note: 'Two Bit Digital\'s AI integration practice' },
    { label: 'SaaS Platform Development Services',   href: '/services/saas-development',           note: 'When the answer is to build AI-native from scratch' },
  ],

  'regtech-compliance-software-regulated-industries': [
    { label: 'Compliance & RegTech Services',          href: '/services/compliance-regtech',              note: 'Two Bit Digital\'s compliance-first engineering practice' },
    { label: 'Averon Legal Systems',                   href: '/products/averon-legal-systems',            note: 'A live example of RegTech built for CPR-regulated legal practice' },
    { label: 'AI Integration for Regulated Industries', href: '/insights/ai-integration-regulated-industries', note: 'What regulated industries specifically need from AI that generic tools miss' },
  ],

  // ── Pakistan Law Firm series ────────────────────────────────────────────────

  'ykc-legal-law-firm-website-pakistan': [
    { label: 'Law Firm Websites Pakistan — Full Service', href: '/law-firm-websites-pakistan',                      note: 'Build a full-platform law firm website like YKC Legal — client portal, case search, and more' },
    { label: 'The Complete Guide to Law Firm Websites in Pakistan', href: '/insights/law-firm-website-pakistan-guide', note: 'Everything a Pakistani law firm needs to know before commissioning a website' },
    { label: 'Averon Legal Systems',                     href: '/products/averon-legal-systems',                    note: 'Two Bit Digital\'s legal management SaaS — multi-tenant case management and CPR compliance' },
  ],

  'law-firm-website-pakistan-guide': [
    { label: 'Law Firm Websites Pakistan — Full Service',  href: '/law-firm-websites-pakistan',                        note: 'See what Two Bit Digital builds for Pakistani law firms — and speak to the team' },
    { label: 'How We Built YKC Legal\'s Digital Presence', href: '/insights/ykc-legal-law-firm-website-pakistan',      note: 'The real case study behind this guide — 17 practice areas, client portal, and live in 2 weeks on Google' },
    { label: 'How Much Does a Law Firm Website Cost in Pakistan?', href: '/insights/law-firm-website-cost-pakistan',   note: 'PKR price tiers, cost drivers, and a five-year comparison — template vs custom vs full platform' },
  ],

  'law-firm-website-cost-pakistan': [
    { label: 'Law Firm Websites Pakistan — Full Service',  href: '/law-firm-websites-pakistan',                          note: 'Get a scoped proposal for your firm — no sales pressure, just a clear brief' },
    { label: 'The Complete Guide to Law Firm Websites in Pakistan', href: '/insights/law-firm-website-pakistan-guide',   note: 'What should your website actually include? The full 2025 guide for Pakistani law firms' },
    { label: 'How We Built YKC Legal\'s Digital Presence', href: '/insights/ykc-legal-law-firm-website-pakistan',        note: 'What a full-platform build looks like in practice — features, timeline, and outcome' },
  ],

  'what-law-firm-website-needs-pakistan': [
    { label: 'Law Firm Websites Pakistan — Full Service',  href: '/law-firm-websites-pakistan',                          note: 'Two Bit Digital builds every item on this checklist into a single, cohesive platform' },
    { label: 'How We Built YKC Legal\'s Digital Presence', href: '/insights/ykc-legal-law-firm-website-pakistan',        note: 'See the checklist in action — YKC Legal\'s complete digital presence built by Two Bit Digital' },
    { label: 'How Much Does a Law Firm Website Cost in Pakistan?', href: '/insights/law-firm-website-cost-pakistan',     note: 'PKR pricing for each tier — basic presence through to full client portal and case search' },
  ],

  'why-pakistani-lawyers-need-website': [
    { label: 'Law Firm Websites Pakistan — Full Service',      href: '/law-firm-websites-pakistan',                          note: 'Ready to act? Two Bit Digital builds professional law firm websites for Pakistani practices' },
    { label: 'The Complete Guide to Law Firm Websites in Pakistan', href: '/insights/law-firm-website-pakistan-guide',       note: 'Once you\'ve decided you need a website — here\'s everything you need to know before commissioning one' },
    { label: 'What Should a Pakistani Law Firm Website Include?', href: '/insights/what-law-firm-website-needs-pakistan',    note: 'The feature checklist — minimum requirements through to full digital platform' },
  ],

}

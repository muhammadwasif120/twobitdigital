export type CaseStudy = {
  slug:       string
  sector:     string
  region:     string
  service:    string
  serviceSlug:string
  headline:   string
  challenge:  string
  solution:   string
  outcomes:   { metric: string; value: string }[]
  techStack:  string[]
  color:      string
  icon:       string
  duration:   string
  teamSize:   string
}

export const caseStudies: CaseStudy[] = [
  {
    slug:       'legal-costs-management-saas',
    sector:     'Legal Technology',
    region:     'United Kingdom',
    service:    'SaaS Platform Development',
    serviceSlug:'saas-development',
    headline:   'CPR-Compliant Costs Management SaaS for UK Law Firms',
    challenge:  'A qualified costs lawyer identified a gap in the market: UK legal costs professionals were managing CPR Part 47 and Part 36 matters in Excel spreadsheets and disconnected email threads. Deadline tracking was manual, error-prone, and a professional liability risk. The market had no purpose-built SaaS solution.',
    solution:   'We co-designed and built a multi-tenant SaaS platform from scratch — architecting role-specific dashboards for partners, supervisors, and fee earners, a matter lifecycle engine aligned to CPR timelines, automated deadline alerting, document management, and a client portal. Built on Next.js 14, TypeScript, Supabase, and Stripe. Launched in closed beta within 14 weeks.',
    outcomes:   [
      { metric: 'Reduction in missed deadlines',    value: '94%' },
      { metric: 'Time saved per matter per week',    value: '3.5 hrs' },
      { metric: 'Beta firms onboarded at launch',    value: '12' },
      { metric: 'Weeks from brief to beta launch',   value: '14' },
    ],
    techStack:  ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Resend', 'Vercel'],
    color:      '#7b5ea7',
    icon:       '⚖️',
    duration:   '14 weeks',
    teamSize:   '3 engineers',
  },
  {
    slug:       'event-ticketing-platform-pakistan',
    sector:     'Event Technology',
    region:     'Pakistan',
    service:    'Web & App Development',
    serviceSlug:'web-app-development',
    headline:   'Offline-Capable Event Ticketing Platform with Cryptographic QR Verification',
    challenge:  'Pakistan\'s event industry lacked a modern, mobile-first ticketing solution capable of operating in venues with unreliable internet connectivity. Existing solutions either required constant connectivity or had no security against QR fraud and ticket duplication.',
    solution:   'We designed and built Tikkit X — a mobile-first event ticketing and management platform with offline-capable HMAC-SHA256/HKDF cryptographic QR verification that works without an internet connection. Included CNIC identity validation, multi-vertical theming (concerts, conferences, sports), a unified attendee dashboard, and a real-time organiser analytics portal.',
    outcomes:   [
      { metric: 'Fraudulent entry attempts blocked',  value: '100%' },
      { metric: 'Check-in speed vs manual',           value: '4x faster' },
      { metric: 'Events processed at launch',         value: '8' },
      { metric: 'Uptime since launch',                value: '99.9%' },
    ],
    techStack:  ['Next.js', 'React Native', 'TypeScript', 'HMAC-SHA256', 'HKDF', 'Supabase', 'Vercel'],
    color:      '#f5c518',
    icon:       '🎟️',
    duration:   '18 weeks',
    teamSize:   '4 engineers',
  },
  {
    slug:       'ai-document-processing-financial',
    sector:     'Financial Services',
    region:     'United Kingdom',
    service:    'AI Integration & Automation',
    serviceSlug:'ai-integration',
    headline:   'AI-Powered Document Intelligence for Financial Compliance Teams',
    challenge:  'A UK-regulated financial services firm was manually reviewing hundreds of client disclosure documents per week — each requiring extraction of specific data points, cross-referencing against regulatory requirements, and a documented review decision. The process consumed 40+ compliance analyst hours per week and introduced inconsistency risk.',
    solution:   'We built a RAG-based document intelligence pipeline that automatically extracts structured data from regulatory documents, scores them against a compliance rule set, and produces a review summary with confidence scores and flagged exceptions. Human analysts review AI outputs rather than raw documents — dramatically compressing review time without removing human oversight.',
    outcomes:   [
      { metric: 'Analyst review time reduced',       value: '68%' },
      { metric: 'Documents processed per day',       value: '10x' },
      { metric: 'Accuracy vs manual review',         value: '97.3%' },
      { metric: 'Weeks from brief to production',    value: '10' },
    ],
    techStack:  ['Python', 'LangChain', 'OpenAI GPT-4', 'Pinecone', 'PostgreSQL', 'FastAPI', 'AWS Lambda'],
    color:      '#60a5fa',
    icon:       '📊',
    duration:   '10 weeks',
    teamSize:   '2 engineers',
  },
  {
    slug:       'government-citizen-portal',
    sector:     'Government & Public Sector',
    region:     'United Kingdom',
    service:    'Government & Public Sector Digital',
    serviceSlug:'government-digital',
    headline:   'WCAG 2.2 AA Citizen Services Portal for a UK Public Sector Body',
    challenge:  'A UK public sector organisation was directing citizens through a fragmented combination of paper forms, telephone channels, and legacy web forms built on a decade-old platform. The platform failed basic WCAG accessibility tests, had a 40% form abandonment rate, and required significant manual staff intervention to process submissions.',
    solution:   'We delivered a modern, accessible citizen-facing portal built to GDS Design System principles and WCAG 2.2 AA standards. The portal covered service applications, case tracking, document uploads, and status notifications. A staff-facing case management dashboard processed submissions and triaged cases. Deployed on AWS with full audit logging and government-grade security controls.',
    outcomes:   [
      { metric: 'Form abandonment rate reduced',     value: '40% → 11%' },
      { metric: 'Manual processing time reduced',    value: '55%' },
      { metric: 'WCAG 2.2 AA compliance',            value: '100%' },
      { metric: 'User satisfaction score',           value: '4.6 / 5.0' },
    ],
    techStack:  ['Next.js', 'TypeScript', 'GDS Design System', 'PostgreSQL', 'AWS', 'Terraform', 'GitHub Actions'],
    color:      '#f97316',
    icon:       '🏛️',
    duration:   '20 weeks',
    teamSize:   '4 engineers',
  },
  {
    slug:       'regtech-audit-trail-system',
    sector:     'Compliance & RegTech',
    region:     'United Kingdom',
    service:    'Compliance & RegTech',
    serviceSlug:'compliance-regtech',
    headline:   'Cryptographically Chained Audit Trail System for a Regulated Professional Services Firm',
    challenge:  'A regulated professional services firm faced an FCA examination where they were required to demonstrate a complete, tamper-evident audit trail of all client interactions and internal decisions over a three-year period. Their existing system had no audit trail beyond database timestamps — inadequate for regulatory scrutiny.',
    solution:   'We designed and implemented a cryptographically chained audit log system — every event generates a hash that includes the hash of the previous event, making retroactive tampering detectable. The system back-filled three years of historical data, provided a regulatory disclosure export tool, and integrated into the firm\'s existing case management workflow going forward.',
    outcomes:   [
      { metric: 'Audit events chained and verified',  value: '2.3M' },
      { metric: 'FCA examination outcome',            value: 'No findings' },
      { metric: 'Time to produce disclosure pack',    value: '4 hrs → 12 mins' },
      { metric: 'Weeks from brief to delivery',       value: '6' },
    ],
    techStack:  ['PostgreSQL', 'HMAC-SHA256', 'Node.js', 'TypeScript', 'AWS RDS', 'AWS KMS', 'Terraform'],
    color:      '#4ade80',
    icon:       '🔐',
    duration:   '6 weeks',
    teamSize:   '2 engineers',
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

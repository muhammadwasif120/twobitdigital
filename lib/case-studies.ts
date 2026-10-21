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
      { metric: 'Regulation covered',  value: 'CPR Part 47 / Part 36' },
      { metric: 'Role dashboards',     value: 'Partner, supervisor, fee earner' },
      { metric: 'Status',              value: 'In beta' },
    ],
    techStack:  ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Resend', 'Vercel'],
    color:      '#7b5ea7',
    icon:       '⚖️',
    duration:   'In-house product',
    teamSize:   'Two Bit Digital',
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
      { metric: 'Verification',        value: 'Offline-capable QR' },
      { metric: 'Platforms',           value: 'Web + mobile app' },
      { metric: 'Status',              value: 'Live in Pakistan' },
    ],
    techStack:  ['Next.js', 'React Native', 'TypeScript', 'HMAC-SHA256', 'HKDF', 'Supabase', 'Vercel'],
    color:      '#f5c518',
    icon:       '🎟️',
    duration:   'In-house product',
    teamSize:   'Two Bit Digital',
  },
]

export type Service = {
  slug:        string
  title:       string
  tagline:     string
  description: string
  longDesc:    string
  icon:        string
  color:       string
  keywords:    string[]
  capabilities: { title: string; desc: string }[]
  techStack:   string[]
  useCases:    { sector: string; desc: string }[]
  metaTitle:   string
  metaDesc:    string
}

export const services: Service[] = [
  {
    slug:        'ai-integration',
    title:       'AI Integration & Automation',
    tagline:     'Embed intelligence into your product — not as a gimmick, but as infrastructure.',
    description: 'LLM-powered pipelines, RAG systems, document processing, AI assistants, and smart automation built for regulated, production-grade environments.',
    longDesc:    'We design and build AI systems that solve real operational problems — not demos, not prototypes. Our AI work spans LLM integration, retrieval-augmented generation, document intelligence, multi-step agent workflows, and custom NLP pipelines. Every system is built with observability, fallback handling, and compliance considerations baked in from day one.',
    icon:        '⚡',
    color:       '#7b5ea7',
    keywords:    ['AI integration agency UK', 'LLM development agency', 'AI automation company UK', 'RAG system development', 'AI agent workflows'],
    capabilities: [
      { title: 'LLM Integration',          desc: 'OpenAI, Anthropic, Gemini, and open-source model integration into your existing product or workflow.' },
      { title: 'RAG Systems',              desc: 'Retrieval-Augmented Generation pipelines that ground AI responses in your own documents and data.' },
      { title: 'Document Intelligence',    desc: 'Automated extraction, classification, and processing of structured and unstructured documents.' },
      { title: 'AI Agent Workflows',       desc: 'Multi-step autonomous agents that handle complex, multi-tool tasks with minimal human oversight.' },
      { title: 'Custom NLP Pipelines',     desc: 'Named entity recognition, classification, summarisation, and sentiment analysis at scale.' },
      { title: 'AI Assistants',            desc: 'Context-aware chatbots and copilots embedded into web apps, portals, and internal tooling.' },
    ],
    techStack:   ['OpenAI', 'Anthropic Claude', 'LangChain', 'LlamaIndex', 'Pinecone', 'pgvector', 'Python', 'TypeScript'],
    useCases: [
      { sector: 'Legal Tech',     desc: 'Document review copilot that extracts key clauses, flags risks, and summarises case files for costs lawyers.' },
      { sector: 'Government',     desc: 'Automated tender document analysis and compliance scoring for public procurement teams.' },
      { sector: 'Financial',      desc: 'Intelligent data extraction from financial statements and regulatory filings for compliance teams.' },
      { sector: 'Healthcare',     desc: 'Patient record summarisation and clinical note analysis for NHS and private healthcare providers.' },
    ],
    metaTitle: 'AI Integration Agency UK | LLM & Automation Development — Two Bit Digital',
    metaDesc:  'Two Bit Digital builds production-grade AI integration systems for regulated industries. LLM pipelines, RAG, document intelligence, and AI automation across UK, US, and Australia.',
  },
  {
    slug:        'saas-development',
    title:       'SaaS Platform Development',
    tagline:     'Multi-tenant SaaS architecture from the ground up — built to scale, built to last.',
    description: 'Full product lifecycle from architecture to launch. Auth, billing, RBAC, analytics, and multi-tenancy — production-grade and designed for growth.',
    longDesc:    'Building a SaaS product requires more than good code. It requires a deep understanding of product architecture, tenant isolation strategies, billing infrastructure, and the operational realities of a live platform. We have built SaaS from the ground up — including our own — and bring that real-world experience to every engagement.',
    icon:        '🏗️',
    color:       '#f5c518',
    keywords:    ['SaaS development agency UK', 'custom SaaS platform development', 'SaaS build studio', 'multi-tenant SaaS architecture', 'SaaS MVP development'],
    capabilities: [
      { title: 'Multi-tenant Architecture', desc: 'Isolated tenant data models with schema-per-tenant or row-level security strategies.' },
      { title: 'Auth & RBAC',              desc: 'Role-based access control, SSO, MFA, and organisation-level permission systems.' },
      { title: 'Billing & Subscriptions',  desc: 'Stripe integration, usage-based billing, plan management, and dunning workflows.' },
      { title: 'Analytics & Reporting',    desc: 'Embedded analytics dashboards, event tracking, and exportable reports for end users.' },
      { title: 'API Design & Docs',        desc: 'RESTful and GraphQL APIs with versioning, rate limiting, and developer documentation.' },
      { title: 'Admin Dashboards',         desc: 'Internal operations tooling — user management, audit logs, support tooling.' },
    ],
    techStack:   ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Redis', 'Vercel', 'AWS'],
    useCases: [
      { sector: 'Legal Tech',     desc: 'Case management SaaS for UK costs lawyers — CPR Part 47/36 compliant, role-specific dashboards, matter tracking.' },
      { sector: 'Event Tech',     desc: 'Multi-vertical event ticketing and management platform with offline-capable cryptographic QR verification.' },
      { sector: 'HR Tech',        desc: 'Workforce management SaaS for SMEs across the UK and Pakistan — payroll, leave, performance.' },
      { sector: 'PropTech',       desc: 'Property portfolio management platform with tenant portals, maintenance workflows, and financial reporting.' },
    ],
    metaTitle: 'SaaS Development Agency UK | Custom SaaS Platform Build — Two Bit Digital',
    metaDesc:  'Two Bit Digital builds production-grade SaaS platforms from architecture to launch. Multi-tenant, RBAC, billing, and analytics. UK-registered studio serving enterprises globally.',
  },
  {
    slug:        'web-app-development',
    title:       'Web & App Development',
    tagline:     'Fast, type-safe, accessible — from a single-page marketing site to a complex enterprise portal.',
    description: 'Full-stack web and mobile applications built on modern frameworks. Performant, SEO-optimised, and designed to convert.',
    longDesc:    'We build web applications and mobile apps that are engineered to last — not stitched together from templates. Our stack is modern, typed end-to-end, and deployed on globally distributed infrastructure. Whether it is a public-facing marketing site, a customer portal, or a complex internal tool, we apply the same engineering rigour throughout.',
    icon:        '🖥️',
    color:       '#4ade80',
    keywords:    ['web application development UK', 'Next.js development agency UK', 'custom web app development', 'React development agency', 'TypeScript web development'],
    capabilities: [
      { title: 'Next.js Applications',     desc: 'App Router, Server Components, ISR, and Edge functions for performance-first web applications.' },
      { title: 'React Native Mobile',      desc: 'Cross-platform iOS and Android applications sharing logic with your web codebase.' },
      { title: 'Progressive Web Apps',     desc: 'Offline-capable, installable web apps with push notifications and native-like UX.' },
      { title: 'API Development',          desc: 'Robust backend APIs with proper authentication, validation, rate limiting, and documentation.' },
      { title: 'CMS Integration',          desc: 'Headless CMS integration (Sanity, Contentful, Strapi) for content-managed applications.' },
      { title: 'Performance Optimisation', desc: 'Core Web Vitals, image optimisation, bundle analysis, and runtime performance audits.' },
    ],
    techStack:   ['Next.js 14', 'TypeScript', 'React Native', 'TailwindCSS', 'Supabase', 'Vercel', 'Node.js', 'Sanity'],
    useCases: [
      { sector: 'Fintech',        desc: 'Customer-facing portal with real-time data, secure file uploads, and a complex permissions model.' },
      { sector: 'E-commerce',     desc: 'High-performance storefront with ISR for 100k+ products, dynamic pricing, and sub-second page loads.' },
      { sector: 'Government',     desc: 'Public-sector citizen portal with WCAG 2.2 AA accessibility, secure authentication, and audit logging.' },
      { sector: 'Media',          desc: 'Editorial platform handling 1M+ monthly users with edge caching and personalised content feeds.' },
    ],
    metaTitle: 'Web & App Development Agency UK | Next.js & TypeScript — Two Bit Digital',
    metaDesc:  'Two Bit Digital builds high-performance web and mobile applications with Next.js and TypeScript. UK-based studio delivering for enterprises, startups, and government.',
  },
  {
    slug:        'compliance-regtech',
    title:       'Compliance & RegTech',
    tagline:     'Software built for regulated environments — where correctness is not optional.',
    description: 'Purpose-built systems for compliance-first industries. Legal tech, document intelligence, cryptographic audit trails, and zero-knowledge architectures.',
    longDesc:    'Most software studios treat compliance as an afterthought — a layer of documentation added before go-live. We build it into the foundation. Our RegTech work spans CPR-compliant legal case management, cryptographically chained audit log systems, zero-knowledge document storage, and jurisdiction-specific regulatory workflow engines.',
    icon:        '🔐',
    color:       '#60a5fa',
    keywords:    ['RegTech software development UK', 'compliance software development', 'legal tech development UK', 'CPR Part 47 software', 'audit trail software UK'],
    capabilities: [
      { title: 'Legal Case Management',    desc: 'CPR Part 47 and Part 36 compliant systems for UK costs lawyers, solicitors, and legal operations teams.' },
      { title: 'Audit Trail Systems',      desc: 'Cryptographically chained, tamper-evident audit logs that satisfy regulatory and legal disclosure requirements.' },
      { title: 'Document Intelligence',    desc: 'Secure document processing, classification, and extraction with full chain-of-custody tracking.' },
      { title: 'Zero-Knowledge Storage',   desc: 'AES-256 encrypted document vaults with key isolation — operators cannot access client data.' },
      { title: 'Regulatory Workflows',     desc: 'Jurisdiction-specific workflow engines handling GDPR, FCA, SRA, CQC, and other regulatory frameworks.' },
      { title: 'Compliance Reporting',     desc: 'Automated compliance reports, risk dashboards, and exception alerting for regulated entities.' },
    ],
    techStack:   ['AES-256 Encryption', 'HMAC-SHA256', 'HKDF', 'PostgreSQL RLS', 'Next.js', 'TypeScript', 'AWS KMS', 'Zero-Knowledge Proofs'],
    useCases: [
      { sector: 'Legal Costs',    desc: 'Averon Legal Systems — CPR Part 47/36 case management SaaS co-built with a qualified costs lawyer.' },
      { sector: 'Document Mgmt', desc: 'Terra Core — zero-knowledge document intelligence engine for compliance-first verticals.' },
      { sector: 'Financial',      desc: 'AML/KYC workflow platform with audit trails satisfying FCA regulatory examination requirements.' },
      { sector: 'Healthcare',     desc: 'GDPR-compliant patient data platform with granular consent management and access logging.' },
    ],
    metaTitle: 'Compliance & RegTech Software Development UK — Two Bit Digital',
    metaDesc:  'Two Bit Digital builds compliance-first RegTech software: legal case management, cryptographic audit trails, zero-knowledge storage, and regulatory workflow systems.',
  },
  {
    slug:        'government-digital',
    title:       'Government & Public Sector Digital',
    tagline:     'Trusted by design — digital systems built for public accountability and democratic scale.',
    description: 'End-to-end digital delivery for government bodies and public sector organisations. Procurement-aware, accessibility-first, and security-cleared capable.',
    longDesc:    'Public sector digital delivery demands more than technical competence — it demands an understanding of procurement frameworks, accessibility obligations, information security standards, and the political realities of public accountability. Two Bit Digital is a UN-registered vendor with a D&B D-U-N-S number and a UK registered entity eligible to respond to OJEU, G-Cloud, Crown Commercial Service, and DOS framework opportunities.',
    icon:        '🏛️',
    color:       '#f97316',
    keywords:    ['UK government digital contracts', 'government technology partner UK', 'GCloud supplier', 'Crown Commercial Service digital', 'public sector software development'],
    capabilities: [
      { title: 'Procurement Framework Bids', desc: 'End-to-end support responding to G-Cloud, DOS, Crown Commercial Service, and OJEU opportunities.' },
      { title: 'Citizen-Facing Portals',    desc: 'WCAG 2.2 AA accessible digital services designed to the GDS Design System standard.' },
      { title: 'Case Management Systems',   desc: 'Internal workflow and case management tools for local authority, NHS, and central government teams.' },
      { title: 'Data & Analytics',          desc: 'Dashboards and reporting systems that surface actionable insight from public sector data.' },
      { title: 'Legacy Modernisation',      desc: 'Structured migration of legacy systems to modern, maintainable, cloud-native architectures.' },
      { title: 'Security & Compliance',     desc: 'Cyber Essentials, ISO 27001 alignment, government security classifications, and data handling standards.' },
    ],
    techStack:   ['GDS Design System', 'Next.js', 'TypeScript', 'PostgreSQL', 'AWS GovCloud', 'Terraform', 'Kubernetes', 'Zero Trust'],
    useCases: [
      { sector: 'Local Authority', desc: 'Citizen portal for a metropolitan borough — benefit applications, service requests, and case tracking.' },
      { sector: 'Central Govt',    desc: 'Internal workflow system for a regulatory body — case assignment, decision recording, appeals management.' },
      { sector: 'NHS',             desc: 'Staff scheduling and rota management platform deployed across multiple NHS trusts.' },
      { sector: 'Education',       desc: 'Admissions and student lifecycle management system for a multi-academy trust.' },
    ],
    metaTitle: 'Government Digital Services UK | Public Sector Technology Partner — Two Bit Digital',
    metaDesc:  'Two Bit Digital delivers government digital services for UK public sector bodies. UN Vendor registered, D&B verified, and eligible for GCloud, Crown Commercial, and OJEU procurement.',
  },
  {
    slug:        'cloud-infrastructure',
    title:       'Cloud & Infrastructure',
    tagline:     'Your code deserves infrastructure as good as the code itself.',
    description: 'Scalable, resilient cloud deployments with CI/CD, serverless, managed databases, and observability — built for uptime and engineered for cost efficiency.',
    longDesc:    'We architect and operate cloud infrastructure that matches the reliability requirements of your application. Whether deploying on Vercel, AWS, or a hybrid setup, we bring infrastructure-as-code discipline, zero-downtime deployment pipelines, and cost-aware architecture reviews. Every deployment includes monitoring, alerting, and documented runbooks.',
    icon:        '☁️',
    color:       '#34d399',
    keywords:    ['cloud infrastructure UK', 'AWS development agency UK', 'DevOps agency UK', 'CI/CD pipeline setup', 'cloud deployment UK'],
    capabilities: [
      { title: 'Cloud Architecture',       desc: 'AWS, GCP, and Vercel infrastructure designed for your performance, compliance, and cost requirements.' },
      { title: 'CI/CD Pipelines',          desc: 'Automated build, test, and deployment pipelines with staged rollouts and rollback capabilities.' },
      { title: 'Serverless & Edge',        desc: 'Lambda, Edge Functions, and Cloudflare Workers for globally distributed, low-latency compute.' },
      { title: 'Database Management',      desc: 'Managed PostgreSQL, Redis, and NoSQL setups with automated backups, failover, and monitoring.' },
      { title: 'Observability',            desc: 'Logging, metrics, tracing, and alerting — using Datadog, Grafana, or your existing tooling.' },
      { title: 'Cost Optimisation',        desc: 'Infrastructure audits, right-sizing reviews, and Reserved Instance planning to reduce cloud spend.' },
    ],
    techStack:   ['AWS', 'Vercel', 'Terraform', 'GitHub Actions', 'Docker', 'Kubernetes', 'Datadog', 'Cloudflare'],
    useCases: [
      { sector: 'Scale-up',       desc: 'Migrated a 3M-user consumer app from a single server to auto-scaling AWS infrastructure — zero downtime.' },
      { sector: 'FinTech',        desc: 'PCI-DSS compliant AWS environment with VPC isolation, WAF, and automated compliance scanning.' },
      { sector: 'SaaS',           desc: 'Multi-region Vercel/Supabase deployment with edge caching and 99.99% uptime SLA achievement.' },
      { sector: 'Government',     desc: 'AWS GovCloud deployment for a public sector data platform — IL2 security classification aligned.' },
    ],
    metaTitle: 'Cloud Infrastructure & DevOps Agency UK | AWS & Vercel — Two Bit Digital',
    metaDesc:  'Two Bit Digital architects and operates cloud infrastructure on AWS and Vercel. CI/CD, serverless, observability, and cost optimisation for scaling businesses.',
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

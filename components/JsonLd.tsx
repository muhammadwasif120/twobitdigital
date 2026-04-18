// Structured data for SEO, AEO, and GEO
// Targets: Google, Bing, Perplexity, ChatGPT, Gemini, Claude

const SITE_URL = 'https://twobitdigital.com'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#founder`,
  name: 'Muhammad Wasif',
  jobTitle: 'Founder & CEO',
  description:
    'Muhammad Wasif is the Founder & CEO of Two Bit Digital Ltd, a UK-registered SaaS development and AI engineering studio. He leads technical strategy, client engagements, and product development across regulated markets globally.',
  url: `${SITE_URL}/about`,
  email: 'mwasif@twobitdigital.com',
  sameAs: [
    'https://www.linkedin.com/in/muhammadwasiftbd/',
  ],
  worksFor: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Two Bit Digital Ltd',
  },
  knowsAbout: [
    'SaaS Development',
    'AI Engineering',
    'Cloud Architecture',
    'RegTech',
    'Government Digital',
    'Next.js',
    'TypeScript',
    'Supabase',
  ],
  nationality: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Two Bit Digital',
  legalName: 'Two Bit Digital Ltd',
  alternateName: ['TwoBitDigital', 'Two Bit Digital Ltd'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/Two bit FF-01.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/Two bit FF-01.png`,
  description:
    'Two Bit Digital is a UK-registered SaaS development and AI engineering studio building mission-critical digital systems for regulated markets. We engineer end-to-end SaaS platforms, secure infrastructure, and AI-powered workflows for enterprises, startups, and government bodies across the UK, US, Australia, and Pakistan.',
  foundingDate: '2022',
  founder: {
    '@type': 'Person',
    name: 'Muhammad Wasif',
    jobTitle: 'Founder & CEO',
    email: 'mwasif@twobitdigital.com',
    worksFor: { '@id': `${SITE_URL}/#organization` },
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
    addressRegion: 'England',
  },
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Pakistan' },
  ],
  knowsAbout: [
    'SaaS Development',
    'AI Engineering',
    'Government Digital Contracts',
    'RegTech',
    'Legal Technology',
    'Cloud Infrastructure',
    'Next.js',
    'TypeScript',
    'Supabase',
  ],
  identifier: [
    {
      '@type': 'PropertyValue',
      name: 'UK Companies House Registration',
      value: '14710072',
      url: 'https://find-and-update.company-information.service.gov.uk/company/14710072',
    },
    {
      '@type': 'PropertyValue',
      name: 'D&B D-U-N-S Number',
      value: '77-532-7428',
    },
    {
      '@type': 'PropertyValue',
      name: 'UN Global Marketplace Vendor Number',
      value: '1177996',
    },
    {
      '@type': 'PropertyValue',
      name: 'SECP CUIN (Pakistan)',
      value: '0250598',
    },
  ],
  sameAs: [
    'https://find-and-update.company-information.service.gov.uk/company/14710072',
    'https://www.linkedin.com/company/twobitdigital',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'sales@twobitdigital.com',
      contactType: 'sales',
      areaServed: ['GB', 'US', 'AU', 'PK'],
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      email: 'mwasif@twobitdigital.com',
      contactType: 'customer support',
      areaServed: ['GB', 'US', 'AU', 'PK'],
    },
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Two Bit Digital',
  description: 'SaaS development and AI engineering studio — UK, US, Australia, Pakistan',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-GB',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Two Bit Digital Services',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Web & App Development',
        description:
          'Full-stack web and mobile application development using Next.js, TypeScript, React Native, and Supabase. Type-safe, scalable, and optimised for performance.',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: ['GB', 'US', 'AU', 'PK'],
        serviceType: 'Software Development',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'AI Integration & Automation',
        description:
          'LLM-powered pipelines, RAG systems, agent workflows, document processing, and smart automation at scale.',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: ['GB', 'US', 'AU', 'PK'],
        serviceType: 'Artificial Intelligence',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'SaaS Platform Build',
        description:
          'Multi-tenant SaaS architecture including authentication, billing, RBAC, and analytics — production-grade and built to scale.',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: ['GB', 'US', 'AU', 'PK'],
        serviceType: 'SaaS Development',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Compliance & RegTech',
        description:
          'Purpose-built software for regulated industries including CPR-compliant legal case management, document intelligence, and AES-256 encrypted audit-trail systems.',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: ['GB', 'US', 'AU'],
        serviceType: 'Regulatory Technology',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'Government & Public Sector Digital',
        description:
          'Enterprise-grade digital solutions for government procurement including web portals, citizen-facing applications, AI procurement tools, and data management systems.',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: ['GB', 'US', 'AU'],
        serviceType: 'Government Technology',
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Service',
        name: 'Cloud & Infrastructure',
        description:
          'Scalable cloud deployments on AWS and Vercel including CI/CD pipelines, serverless architecture, managed databases, and observability.',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: ['GB', 'US', 'AU', 'PK'],
        serviceType: 'Cloud Infrastructure',
      },
    },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Two Bit Digital Delivers a Software Project',
  description:
    'Two Bit Digital follows a four-phase delivery process — from initial discovery through to production deployment — ensuring every project is transparent, milestone-driven, and production-grade from day one.',
  provider: { '@id': `${SITE_URL}/#organization` },
  totalTime: 'P4W',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Discovery',
      text: 'We map your requirements, audience, and constraints in full before anything is designed. No assumptions — just a clear problem statement.',
      url: `${SITE_URL}/#process`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Architecture',
      text: 'System design, stack selection, and a documented technical roadmap. Every structural decision is made deliberately before a line of code is written.',
      url: `${SITE_URL}/#process`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Build',
      text: 'Iterative, milestone-driven delivery. Production-grade from day one — type-safe, tested, and reviewable at every stage of development.',
      url: `${SITE_URL}/#process`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Deploy & Support',
      text: "CI/CD pipelines, observability dashboards, and ongoing support. We don't hand over the keys and disappear.",
      url: `${SITE_URL}/#process`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Two Bit Digital do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two Bit Digital is a SaaS development and AI engineering studio that builds mission-critical digital systems for regulated markets. We design, build, and deploy end-to-end SaaS platforms, AI-powered workflows, and secure cloud infrastructure for enterprises, startups, and government bodies across the UK, US, Australia, and Pakistan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Two Bit Digital a registered company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Two Bit Digital Ltd is registered in England and Wales under Company Number 14710072, verifiable at Companies House. The company also holds a D&B D-U-N-S Number (77-532-7428) and is registered as a UN Global Marketplace vendor (No. 1177996), and with the SECP in Pakistan (CUIN: 0250598).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Two Bit Digital work with government bodies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Two Bit Digital is actively positioned to bid on government and civil tenders for web, app, and AI solutions in the UK. We are a registered UN Global Marketplace vendor and hold a D&B D-U-N-S number, meeting common procurement verification requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technology stack does Two Bit Digital use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two Bit Digital builds primarily on Next.js 14, TypeScript, Supabase, React Native, Vercel, and AWS. AI integrations are built using LLM APIs including OpenAI and Claude. All systems are type-safe, production-grade, and built for scale.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Two Bit Digital based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two Bit Digital is headquartered in the United Kingdom with core development operations in Karachi, Pakistan. The studio serves clients across the UK, United States, Australia, and Pakistan.',
      },
    },
    {
      '@type': 'Question',
      name: 'What in-house products has Two Bit Digital built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two Bit Digital has built three proprietary SaaS products: Tikkit X (a live event ticketing and management platform for Pakistan), Averon Legal Systems (a CPR Part 47/36 case management SaaS for UK law firms, currently in beta), and Terra Core (a zero-knowledge AES-256 document intelligence platform, in development).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I contact Two Bit Digital for a project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact Two Bit Digital by emailing sales@twobitdigital.com for new project enquiries, or mwasif@twobitdigital.com to reach the Founder & CEO directly. Alternatively, use the contact form at twobitdigital.com.',
      },
    },
  ],
}

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

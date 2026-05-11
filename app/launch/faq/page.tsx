import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'MVP Development FAQ · Two Bit Digital',
  description: 'Everything founders ask before building a SaaS MVP with Two Bit Digital. Process, pricing, ownership, technical questions — all answered.',
  keywords: ['mvp development faq', 'saas mvp questions', 'mvp development uk questions', 'how does mvp development work', 'saas mvp process'],
  alternates: { canonical: 'https://www.twobitdigital.com/launch/faq' },
  openGraph: {
    title: 'MVP Development FAQ · Two Bit Digital',
    description: 'Every question founders ask before building with Two Bit Digital — answered honestly.',
    url: 'https://www.twobitdigital.com/launch/faq',
    type: 'website',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can you build an MVP in 10 days?',
      acceptedAnswer: { '@type': 'Answer', text: 'Scope discipline. We use a standardised production stack — Next.js, Supabase, Vercel, TypeScript — that we know deeply. We spend Day 1 defining exactly what ships and what doesn\'t. There is no back-and-forth during the build because the spec is locked. That is how 10 days is possible.' },
    },
    {
      '@type': 'Question',
      name: 'Is it production quality or just a prototype?',
      acceptedAnswer: { '@type': 'Answer', text: 'Production quality. The application is deployed on Vercel with a real domain, uses Supabase with row-level security, and has type-safe TypeScript throughout. It is not a prototype. It is not a no-code tool. It is the actual codebase you will use to grow your product.' },
    },
    {
      '@type': 'Question',
      name: 'Do I own the code at the end?',
      acceptedAnswer: { '@type': 'Answer', text: 'Completely. The GitHub repository is transferred to your account on Day 10. Every deployment credential — Vercel, Supabase, domain registrar — is handed to you. We retain nothing. No ongoing dependency on us for access to your own product.' },
    },
    {
      '@type': 'Question',
      name: 'What if I need more features after launch?',
      acceptedAnswer: { '@type': 'Answer', text: 'You own the code. You can bring in your own engineers, hire a freelancer, or come back to us for a post-launch build sprint. We do not create dependency. We can quote additional feature development separately.' },
    },
    {
      '@type': 'Question',
      name: 'What if something goes wrong after launch?',
      acceptedAnswer: { '@type': 'Answer', text: 'The 30-day (Build) or 60-day (Launch) post-launch support window covers bugs. If something breaks in the first 30 or 60 days, we fix it at no additional cost. This covers bugs in the code we delivered. It does not cover new features or changes in requirements.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need a technical background to work with you?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. You need to know your users and their problem. We translate that into a product. We will explain technical decisions in plain language and ask for your approval on anything that affects the user experience.' },
    },
    {
      '@type': 'Question',
      name: 'Can you add AI features to the MVP?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We integrate existing AI APIs — OpenAI, Anthropic Claude, Replicate, Whisper — as part of the MVP build where they are in scope. We do not train custom models. Custom model training is post-product-market-fit work. API-integrated AI features are fast to build and more than sufficient for an MVP.' },
    },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'MVP Development FAQ — Two Bit Digital',
  url: 'https://www.twobitdigital.com/launch/faq',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.twobitdigital.com' },
      { '@type': 'ListItem', position: 2, name: 'Launch', item: 'https://www.twobitdigital.com/launch' },
      { '@type': 'ListItem', position: 3, name: 'FAQ', item: 'https://www.twobitdigital.com/launch/faq' },
    ],
  },
}

const faqs = [
  {
    category: 'Process',
    questions: [
      {
        q: 'How can you build an MVP in 10 days?',
        a: 'Scope discipline. We use a standardised production stack — Next.js, Supabase, Vercel, TypeScript — that we know deeply. We spend Day 1 defining exactly what ships and what doesn\'t. There is no back-and-forth during the build because the spec is locked. That is how 10 days is possible. A generalist agency taking any client with any stack and any scope cannot make this guarantee. We can.',
      },
      {
        q: 'What happens on Day 1 exactly?',
        a: 'We run a focused scope session — typically 2–3 hours. We map the core user flow: who the user is, what problem they have, what action they take, and what value they get. We define the feature list: exactly what ships, and what does not. We confirm the tech stack, the domain, and the launch URL. At the end of Day 1, you receive a signed spec document. That document is what we build. Nothing more, nothing less.',
      },
      {
        q: 'What if I don\'t have designs or wireframes?',
        a: 'Not required. Most clients come without designs. We design the UI as part of the build, based on the scope session. If you have existing brand guidelines, Figma files, or visual references, we use them. If not, we build a clean, professional UI in our standard design language.',
      },
      {
        q: 'How much input do I have during the build?',
        a: 'On Days 3–4, you receive a live preview URL — a real deployed application, not a screenshot. You can review the core flow at that point. On Day 9, you have a structured review round: you give us feedback on what needs changing within scope, and we make those refinements. This is the designed feedback loop. Ad hoc requests during the build are held for the Day 9 review unless they are critical.',
      },
      {
        q: 'Do you work with clients outside the UK?',
        a: 'Yes. We are UK-registered and operate globally. We have delivered projects for clients and built products for markets in the UK, US, Australia, and Pakistan. Scope sessions are remote. Timezones are managed as part of project setup.',
      },
    ],
  },
  {
    category: 'Quality and ownership',
    questions: [
      {
        q: 'Is it production quality or just a prototype?',
        a: 'Production quality. The application is deployed on Vercel with a real domain, uses Supabase with row-level security, and has type-safe TypeScript throughout. It is not a prototype. It is not a no-code tool. It is the actual codebase you will use to grow your product. The next engineer you hire will read this code and find it professional and maintainable.',
      },
      {
        q: 'Do I own the code at the end?',
        a: 'Completely. The GitHub repository is transferred to your account on Day 10. Every deployment credential — Vercel, Supabase, domain registrar — is handed to you. We retain nothing. No ongoing dependency on us for access to your own product. No licence fees. No vendor lock-in.',
      },
      {
        q: 'What is in the codebase documentation?',
        a: 'A README with architecture overview, environment variable setup, local development instructions, database schema notes, and deployment process. Enough for a competent engineer to clone the repo and have it running locally within 30 minutes.',
      },
      {
        q: 'What if I need more features after launch?',
        a: 'You own the code. You can bring in your own engineers, hire a freelancer, or come back to us for a post-launch build sprint. We do not create dependency. We can quote additional feature development separately — either as a fixed scope or a time-and-materials arrangement for ongoing work.',
      },
    ],
  },
  {
    category: 'Support and risk',
    questions: [
      {
        q: 'What if something goes wrong after launch?',
        a: 'The 30-day (Build) or 60-day (Launch) post-launch support window covers bugs. If something breaks in the first 30 or 60 days — something in the code we delivered — we fix it at no additional cost. This covers defects. It does not cover new features or requirement changes.',
      },
      {
        q: 'What if I\'m not happy with the result?',
        a: 'The spec document signed on Day 1 is the acceptance criterion. If we deliver what is in the spec, the work is complete. Day 9 is your structured review and refinement round — this is where we address anything within scope that needs adjusting. We take quality seriously and will not hand over a product we are not confident in.',
      },
      {
        q: 'What if the project runs over 10 days?',
        a: 'Scope discipline prevents this in normal circumstances. If a delay occurs due to factors on our side, we absorb it. If scope expands beyond what was agreed on Day 1, additional timeline and cost are quoted before proceeding.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'Do I need a technical background to work with you?',
        a: 'No. You need to know your users and their problem. We translate that into a product. We will explain technical decisions in plain language and ask for your approval on anything that affects the user experience. Many of our best clients have no technical background — they are domain experts who understand their market.',
      },
      {
        q: 'Can you add AI features to the MVP?',
        a: 'Yes. We integrate existing AI APIs — OpenAI GPT-4, Anthropic Claude, Replicate, Whisper — as part of the MVP build where they are in scope. We do not train custom models. Custom model training is post-product-market-fit work. API-integrated AI features are fast to build and more than sufficient for an MVP stage product.',
      },
      {
        q: 'Can you build for mobile?',
        a: 'The MVP is a web application — it is fully responsive and works on mobile browsers. This is investor-sufficient at MVP stage and faster to ship than native apps. If your core use case requires a native app (camera access, offline-first, GPS, push notifications), we can scope that separately — our Tikkit X product is a React Native app built by the same team.',
      },
      {
        q: 'What stack will my product be built on?',
        a: 'Next.js 14 App Router with TypeScript, Supabase (PostgreSQL with RLS), deployed on Vercel. Stripe for payments if in scope. Resend or SendGrid for transactional email if in scope. Tailwind CSS for styling. This is a deliberate, stable stack chosen for speed, ownership, and developer hire-ability. See the full tech stack rationale.',
      },
      {
        q: 'Can I change the stack later?',
        a: 'Yes — you own the code. Any engineer can migrate components of the stack. The technologies we use (Postgres, Next.js, TypeScript) are widely supported and not obscure. Supabase is open-source — you can self-host the database on any cloud provider if you ever want to move off their managed service.',
      },
    ],
  },
  {
    category: 'Pricing',
    questions: [
      {
        q: 'Why fixed price?',
        a: 'Fixed price forces scope discipline on both sides. Hourly billing incentivises slow work and creates anxiety for you about every email and call. Fixed price means we are aligned: we ship efficiently, you know exactly what you are paying. The scope session is what makes fixed price possible — we know exactly what we are building before the price is agreed.',
      },
      {
        q: 'What does the Scope Session cost?',
        a: 'Free. The Scope Session is a no-commitment call. You leave with a clear feature list and a price. You only pay when you are ready to proceed.',
      },
      {
        q: 'Can I upgrade from Validate to Build?',
        a: 'Yes. If you start with the Validate package and decide to proceed to Build or Launch, the £1,500 is deducted from the package price.',
      },
      {
        q: 'Do you do payment plans?',
        a: 'For Build and Launch packages: 50% at project start, 50% on Day 10 handover. For Validate: full payment upfront. We do not offer extended credit terms for MVP builds.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>
        <div style={{ backgroundColor: '#09091a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Launch', href: '/launch' }, { label: 'FAQ' }]} />
          </div>
        </div>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(180deg, #0d0d22 0%, #09091a 100%)', padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="section-label">FAQ</div>
            <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#eceaf5', margin: '0.75rem 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: '760px' }}>
              Every question founders ask. Answered honestly.
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.1rem', color: '#9d99b8', lineHeight: 1.8, maxWidth: '620px', margin: 0 }}>
              No marketing language. If something about the process, the code, or the price is unclear, ask us directly — or find the answer here.
            </p>
          </div>
        </section>

        {/* FAQ by category */}
        <section style={{ backgroundColor: '#09091a', padding: '5rem 0' }}>
          <div style={{ maxWidth: '880px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {faqs.map((section) => (
              <div key={section.category}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div className="section-label">{section.category}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
                  {section.questions.map((faq, i) => (
                    <details key={faq.q} style={{ backgroundColor: i % 2 === 0 ? '#0d0d22' : '#09091a' }}>
                      <summary style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.95rem', color: '#eceaf5', padding: '1.25rem 1.5rem', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none' }}>
                        {faq.q}
                        <span style={{ color: '#7F77DD', fontSize: '1.2rem', flexShrink: 0, marginLeft: '1rem' }}>+</span>
                      </summary>
                      <div style={{ padding: '0 1.5rem 1.5rem' }}>
                        <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.9rem', color: '#9d99b8', lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #11112b 0%, #16163a 100%)', padding: '5rem 0' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', color: '#eceaf5', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Still have a question?</h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '1.05rem', color: '#9d99b8', lineHeight: 1.75, margin: '0 0 2rem' }}>Book a free Scope Session. We will answer every question you have and map exactly what we can build for you — before you commit to anything.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#09091a', backgroundColor: '#7F77DD', padding: '1rem 2.25rem', borderRadius: '8px', textDecoration: 'none' }}>
                Book a Scope Session →
              </Link>
              <Link href="/launch" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: '#9d99b8', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', padding: '1rem 2rem', borderRadius: '8px' }}>
                Back to Launch overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

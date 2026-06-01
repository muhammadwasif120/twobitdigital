import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'Google Cloud Partner | Two Bit Digital — Partner Advantage Member',
  description:
    'Two Bit Digital is a Google Cloud Partner Advantage member. We build and deploy production systems on Google Cloud — Vertex AI, Cloud Run, BigQuery, Firebase, Cloud Storage, and Google Workspace APIs — for clients across the UK, US, Australia, and Pakistan.',
  keywords: [
    'Google Cloud Partner UK',
    'Google Cloud Partner Pakistan',
    'Vertex AI development',
    'Google Cloud consulting',
    'Firebase development agency',
    'BigQuery analytics',
    'Cloud Run deployment',
    'Google Workspace API integration',
    'Google Cloud Partner Advantage',
    'Two Bit Digital Google Cloud',
  ],
  alternates: { canonical: 'https://twobitdigital.com/partners/google-cloud' },
  openGraph: {
    title: 'Google Cloud Partner | Two Bit Digital',
    description:
      'Google Cloud Partner Advantage member — Vertex AI, Cloud Run, BigQuery, Firebase, and Google Workspace API integrations in production.',
    url: 'https://twobitdigital.com/partners/google-cloud',
    type: 'website',
  },
}

const GC_BLUE    = '#4285F4'
const GC_GREEN   = '#34A853'
const GC_YELLOW  = '#FBBC05'
const GC_RED     = '#EA4335'

// ── Style atoms ──────────────────────────────────────────────────────────────

const h2Style = {
  fontFamily:    'var(--font-inter)',
  fontWeight:    800 as const,
  fontSize:      'clamp(1.7rem, 3.5vw, 2.4rem)',
  color:         '#eceaf5',
  margin:        '0 0 1rem',
  letterSpacing: '-0.03em',
  lineHeight:    1.15,
}

const bodyStyle = {
  fontFamily: 'var(--font-inter)',
  fontWeight: 300 as const,
  fontSize:   '1rem',
  color:      '#9d99b8',
  lineHeight: 1.85,
  margin:     '0 0 1rem',
}

const cardStyle = {
  backgroundColor: '#11112b',
  border:          '1px solid rgba(255,255,255,0.06)',
  borderRadius:    '14px',
  padding:         '1.75rem',
}

const codeBlockStyle = {
  backgroundColor: '#060612',
  border:          '1px solid rgba(255,255,255,0.08)',
  borderRadius:    '10px',
  padding:         '1.5rem 1.75rem',
  fontFamily:      '"JetBrains Mono", "Fira Code", "Cascadia Code", ui-monospace, monospace',
  fontSize:        '0.8rem',
  color:           '#a8b5c8',
  lineHeight:      1.9,
  overflowX:       'auto' as const,
  margin:          '1.25rem 0',
  display:         'block' as const,
  whiteSpace:      'pre' as const,
}

// ── Capabilities ─────────────────────────────────────────────────────────────

const capabilities = [
  {
    icon:  '🤖',
    color: GC_BLUE,
    name:  'Vertex AI',
    desc:  'Google\'s unified AI platform — Gemini model access, managed fine-tuning, RAG pipelines via Vertex AI Search, and model evaluation. Used to build production AI features without managing inference infrastructure.',
  },
  {
    icon:  '🚀',
    color: GC_GREEN,
    name:  'Cloud Run',
    desc:  'Fully managed serverless container platform. Deploys containerised Next.js applications, API services, and background workers with automatic scaling to zero — zero server management, pay-per-request pricing.',
  },
  {
    icon:  '📊',
    color: GC_YELLOW,
    name:  'BigQuery',
    desc:  'Serverless data warehouse for analytics at scale. Ingests event data, ticket sales, user behaviour, and operational metrics — enabling real-time dashboards and business intelligence for clients without database administration overhead.',
  },
  {
    icon:  '🔥',
    color: GC_RED,
    name:  'Firebase / Firestore',
    desc:  'Realtime NoSQL database, Authentication, and Cloud Messaging for mobile and web. Powers offline-capable React Native applications — data syncs automatically when connectivity is restored.',
  },
  {
    icon:  '🗄️',
    color: GC_BLUE,
    name:  'Cloud Storage',
    desc:  'Object storage for document intelligence pipelines, encrypted file vaults, event media assets, and audit trail archives. AES-256 encryption at rest with fine-grained IAM access control.',
  },
  {
    icon:  '🏢',
    color: GC_GREEN,
    name:  'Google Workspace APIs',
    desc:  'Calendar, Drive, Gmail, and Sheets API integrations. Automates scheduling, document workflows, and client communication pipelines — embedding Google Workspace into bespoke platforms without manual data entry.',
  },
]

// ── Code examples ─────────────────────────────────────────────────────────────

const vertexCode = [
  '// Vertex AI — Gemini document analysis (Node.js / Edge Function)',
  '// Terra Core document intelligence pipeline — Google Cloud Partner build',
  "import { VertexAI } from '@google-cloud/vertexai'",
  '',
  'const vertex = new VertexAI({',
  "  project: process.env.GCP_PROJECT_ID,",
  "  location: 'europe-west2',              // London — EU data residency",
  '})',
  '',
  'const model = vertex.getGenerativeModel({',
  "  model: 'gemini-1.5-pro',",
  '  generationConfig: {',
  '    maxOutputTokens: 2048,',
  '    temperature: 0.1,                    // Low temp for factual extraction',
  '  },',
  '})',
  '',
  'async function analyseDocument(documentText, extractionSchema) {',
  "  const prompt = 'Extract the following fields from this legal document. ' +",
  "    'Return only valid JSON matching the schema. Do not hallucinate. ' +",
  "    'Schema: ' + JSON.stringify(extractionSchema) + ' ' +",
  "    'Document: ' + documentText",
  '',
  '  const result = await model.generateContent(prompt)',
  '  const text = result.response.candidates?.[0]?.content?.parts?.[0]?.text',
  "  if (!text) throw new Error('Vertex AI returned no content')",
  '',
  '  return JSON.parse(text)',
  '}',
].join('\n')

const cloudRunCode = [
  '# Cloud Run deployment — Two Bit Digital production pattern',
  '# Containerised Next.js → Cloud Run (London, europe-west2)',
  '',
  '# Build and push image to Artifact Registry',
  'gcloud builds submit \\',
  '  --tag europe-west2-docker.pkg.dev/$PROJECT_ID/apps/twobitdigital:prod \\',
  '  --region europe-west2',
  '',
  '# Deploy to Cloud Run with auto-scaling config',
  'gcloud run deploy twobitdigital-prod \\',
  '  --image europe-west2-docker.pkg.dev/$PROJECT_ID/apps/twobitdigital:prod \\',
  '  --platform managed \\',
  '  --region europe-west2 \\',
  '  --allow-unauthenticated \\',
  '  --min-instances 0 \\          # Scales to zero off-peak',
  '  --max-instances 10 \\         # Burst to 10 under load',
  '  --memory 512Mi \\',
  '  --cpu 1 \\',
  '  --concurrency 80 \\',
  '  --set-env-vars NODE_ENV=production \\',
  '  --service-account app-sa@$PROJECT_ID.iam.gserviceaccount.com',
].join('\n')

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GoogleCloudPartnerPage() {
  return (
    <>
      {/* JSON-LD: Organization with Google Cloud partner certification */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type':    'Organization',
            name:       'Two Bit Digital',
            url:        'https://twobitdigital.com',
            '@id':      'https://twobitdigital.com/#organization',
            memberOf: {
              '@type': 'Organization',
              name:    'Google Cloud Partner Advantage',
              url:     'https://cloud.google.com/find-a-partner',
            },
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              name:    'Google Cloud Partner Advantage',
              credentialCategory: 'Technology Partner',
              recognizedBy: {
                '@type': 'Organization',
                name:    'Google',
                url:     'https://www.google.com',
              },
            },
          }),
        }}
      />

      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section style={{
          background:    'linear-gradient(180deg, #09091a 0%, #0d0d22 100%)',
          paddingTop:    '9rem',
          paddingBottom: '5rem',
          borderBottom:  '1px solid rgba(255,255,255,0.06)',
          position:      'relative',
          overflow:      'hidden',
        }}>
          {/* Ambient glow — Google blue */}
          <div style={{
            position:     'absolute',
            top:          '-80px',
            left:         '50%',
            transform:    'translateX(-50%)',
            width:        '900px',
            height:       '500px',
            borderRadius: '50%',
            pointerEvents:'none',
            background:   `radial-gradient(circle, ${GC_BLUE}14 0%, transparent 65%)`,
          }} />

          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
            position: 'relative',
            zIndex:   1,
          }}>
            <Breadcrumb crumbs={[
              { label: 'Home',     href: '/' },
              { label: 'Partners', href: '/partners/google-cloud' },
              { label: 'Google Cloud' },
            ]} />

            <div style={{ maxWidth: '820px', marginTop: '2rem' }}>

              {/* Google colour bar */}
              <div style={{
                display:      'flex',
                gap:          '4px',
                marginBottom: '1.75rem',
                alignItems:   'center',
              }}>
                {[GC_BLUE, GC_RED, GC_YELLOW, GC_GREEN].map((c, i) => (
                  <div key={i} style={{
                    width:        '28px',
                    height:       '5px',
                    borderRadius: '3px',
                    backgroundColor: c,
                  }} />
                ))}
                <span style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    700,
                  fontSize:      '0.72rem',
                  color:         GC_BLUE,
                  letterSpacing: '0.06em',
                  marginLeft:    '0.75rem',
                  textTransform: 'uppercase',
                }}>
                  Partner Advantage Member
                </span>
              </div>

              {/* Partner badge */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
                <div style={{
                  display:         'inline-flex',
                  alignItems:      'center',
                  gap:             '0.6rem',
                  backgroundColor: `${GC_BLUE}12`,
                  border:          `1px solid ${GC_BLUE}40`,
                  borderRadius:    '999px',
                  padding:         '0.4rem 1rem 0.4rem 0.6rem',
                }}>
                  <span style={{
                    backgroundColor: GC_BLUE,
                    borderRadius:    '50%',
                    width:           '8px',
                    height:          '8px',
                    display:         'inline-block',
                    flexShrink:      0,
                  }} />
                  <span style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    600,
                    fontSize:      '0.72rem',
                    color:         GC_BLUE,
                    letterSpacing: '0.03em',
                  }}>
                    Google Cloud Partner Advantage
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize:   '0.68rem',
                    color:      '#5e5a7a',
                  }}>
                    · June 2026
                  </span>
                </div>
              </div>

              <h1 style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    800,
                fontSize:      'clamp(2.2rem, 5vw, 3.6rem)',
                lineHeight:    1.08,
                color:         '#eceaf5',
                margin:        '0 0 1.5rem',
                letterSpacing: '-0.03em',
              }}>
                Building on{' '}
                <span style={{ color: GC_BLUE }}>Google Cloud</span>
              </h1>

              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize:   'clamp(1rem, 2vw, 1.2rem)',
                color:      '#9d99b8',
                lineHeight: 1.8,
                margin:     '0 0 2.5rem',
                maxWidth:   '680px',
              }}>
                Two Bit Digital is a Google Cloud Partner Advantage member. We design, build, and
                deploy production systems on Google Cloud — Vertex AI, Cloud Run, BigQuery,
                Firebase, and Cloud Storage — for clients across the UK, US, Australia, and Pakistan.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{
                  display:         'inline-block',
                  backgroundColor: '#f5c518',
                  color:           '#09091a',
                  fontFamily:      'var(--font-inter)',
                  fontWeight:      700,
                  fontSize:        '0.9rem',
                  padding:         '0.85rem 1.75rem',
                  borderRadius:    '8px',
                  textDecoration:  'none',
                  letterSpacing:   '-0.01em',
                }}>
                  Start a Project
                </Link>
                <a href="#capabilities" style={{
                  display:       'inline-block',
                  color:         '#9d99b8',
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    500,
                  fontSize:      '0.9rem',
                  padding:       '0.85rem 1.75rem',
                  borderRadius:  '8px',
                  textDecoration:'none',
                  border:        '1px solid rgba(255,255,255,0.1)',
                }}>
                  View Capabilities ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Partnership detail strip ─────────────────────────────────── */}
        <section style={{ backgroundColor: '#0d0d22', padding: '4rem 0' }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div className="verify-grid" style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap:                 '1px',
              backgroundColor:     'rgba(255,255,255,0.06)',
              border:              '1px solid rgba(255,255,255,0.06)',
              borderRadius:        '14px',
              overflow:            'hidden',
            }}>
              {[
                {
                  label: 'Partner Programme',
                  value: 'Partner Advantage',
                  sub:   "Google Cloud's official partner programme — AI, security, data, and infrastructure",
                  color: GC_BLUE,
                },
                {
                  label: 'Partnership Status',
                  value: 'Active Member',
                  sub:   'Two Bit Digital Ltd — Companies House #14710072',
                  color: GC_GREEN,
                },
                {
                  label: 'Member Since',
                  value: 'June 2026',
                  sub:   'cloud.google.com/find-a-partner',
                  color: '#eceaf5',
                },
              ].map((item, i) => (
                <div key={item.label} style={{
                  backgroundColor: i === 1 ? `${GC_BLUE}08` : 'transparent',
                  padding:         '2rem',
                }}>
                  <p style={{
                    fontFamily:    'var(--font-inter)',
                    fontSize:      '0.68rem',
                    fontWeight:    600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color:         '#5e5a7a',
                    margin:        '0 0 0.5rem',
                  }}>
                    {item.label}
                  </p>
                  <p style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '1.1rem',
                    color:         item.color,
                    margin:        '0 0 0.4rem',
                    letterSpacing: '-0.01em',
                  }}>
                    ✓ {item.value}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize:   '0.78rem',
                    color:      '#5e5a7a',
                    margin:     0,
                    lineHeight: 1.6,
                  }}>
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Capabilities ────────────────────────────────────────────── */}
        <section id="capabilities" style={{
          backgroundColor: '#09091a',
          padding:         '5rem 0',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
              <div style={{
                display:       'inline-flex',
                alignItems:    'center',
                gap:           '0.4rem',
                fontFamily:    'var(--font-inter)',
                fontWeight:    600,
                fontSize:      '0.7rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         GC_BLUE,
                border:        `1px solid ${GC_BLUE}33`,
                borderRadius:  '4px',
                padding:       '0.25rem 0.6rem',
                marginBottom:  '1.25rem',
              }}>
                Cloud Services
              </div>
              <h2 style={h2Style}>What we build on Google Cloud</h2>
              <p style={bodyStyle}>
                As a Partner Advantage member, Two Bit Digital has access to Google Cloud&apos;s
                full service portfolio — from AI and ML infrastructure through to serverless compute,
                managed databases, and analytics. Every deployment is production-grade: secure,
                observable, and built for the regulated markets we serve.
              </p>
            </div>

            <div className="cap-grid" style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap:                 '1.25rem',
            }}>
              {capabilities.map((c) => (
                <div key={c.name} style={cardStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                    <span style={{ fontSize: '1.4rem' }}>{c.icon}</span>
                    <div style={{
                      width:           '8px',
                      height:          '8px',
                      borderRadius:    '50%',
                      backgroundColor: c.color,
                      flexShrink:      0,
                    }} />
                  </div>
                  <h3 style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '0.95rem',
                    color:         '#eceaf5',
                    margin:        '0 0 0.6rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {c.name}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize:   '0.875rem',
                    color:      '#9d99b8',
                    lineHeight: 1.75,
                    margin:     0,
                  }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Products built on Google Cloud ──────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
          padding:         '5rem 0',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
              <div style={{
                display:       'inline-flex',
                alignItems:    'center',
                gap:           '0.4rem',
                fontFamily:    'var(--font-inter)',
                fontWeight:    600,
                fontSize:      '0.7rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         GC_GREEN,
                border:        `1px solid ${GC_GREEN}33`,
                borderRadius:  '4px',
                padding:       '0.25rem 0.6rem',
                marginBottom:  '1.25rem',
              }}>
                In Production
              </div>
              <h2 style={h2Style}>Our products, running on Google Cloud</h2>
              <p style={bodyStyle}>
                Two Bit Digital&apos;s own products use Google Cloud in production — meaning we
                operate what we build. We understand the billing, the failure modes, the IAM
                model, and the performance characteristics at first hand.
              </p>
            </div>

            <div className="products-grid" style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap:                 '1.5rem',
            }}>
              {[
                {
                  product:   'Terra Core',
                  href:      '/products/terra-core',
                  color:     GC_BLUE,
                  badge:     'In Development',
                  tagColor:  GC_BLUE,
                  desc:      'AES-256 zero-knowledge encrypted document intelligence. Vertex AI processes documents server-side; Cloud Storage holds encrypted file vaults; Cloud Run handles the analysis API — all within EU data residency boundaries.',
                  gcServices: ['Vertex AI (Gemini)', 'Cloud Storage', 'Cloud Run', 'Cloud KMS'],
                },
                {
                  product:  'Tikkit X',
                  href:     '/products/tikkit-x',
                  color:    GC_RED,
                  badge:    'Live',
                  tagColor: GC_GREEN,
                  desc:     'Mobile-first event ticketing for Pakistan. Firebase Realtime Database powers offline-capable ticket scanning — QR codes validate cryptographically even without network connectivity. BigQuery ingests ticket sale events for organiser analytics dashboards.',
                  gcServices: ['Firebase / Firestore', 'BigQuery', 'Firebase Auth', 'Cloud Messaging'],
                },
                {
                  product:  'Averon Legal Systems',
                  href:     '/products/averon-legal-systems',
                  color:    GC_GREEN,
                  badge:    'Beta',
                  tagColor: GC_YELLOW,
                  desc:     'CPR Part 47 compliance SaaS for UK costs lawyers. Cloud Run hosts the containerised API layer; Cloud Storage manages secure document archives; BigQuery powers the deadline analytics and compliance reporting dashboards.',
                  gcServices: ['Cloud Run', 'Cloud Storage', 'BigQuery', 'Cloud SQL'],
                },
              ].map((p) => (
                <div key={p.product} style={{
                  ...cardStyle,
                  borderColor: `${p.color}22`,
                  position:    'relative',
                  overflow:    'hidden',
                }}>
                  <div style={{
                    position:     'absolute',
                    top:          '-50px',
                    right:        '-50px',
                    width:        '160px',
                    height:       '160px',
                    borderRadius: '50%',
                    background:   `radial-gradient(circle, ${p.color}10 0%, transparent 70%)`,
                    pointerEvents:'none',
                  }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      display:      'flex',
                      alignItems:   'center',
                      gap:          '0.6rem',
                      marginBottom: '1.25rem',
                    }}>
                      <Link href={p.href} style={{
                        fontFamily:    'var(--font-inter)',
                        fontWeight:    700,
                        fontSize:      '1rem',
                        color:         '#eceaf5',
                        letterSpacing: '-0.01em',
                        textDecoration:'none',
                      }}>
                        {p.product}
                      </Link>
                      <span style={{
                        backgroundColor: `${p.tagColor}15`,
                        color:           p.tagColor,
                        fontSize:        '0.65rem',
                        fontFamily:      'var(--font-inter)',
                        fontWeight:      600,
                        padding:         '0.2rem 0.55rem',
                        borderRadius:    '4px',
                        border:          `1px solid ${p.tagColor}30`,
                        letterSpacing:   '0.04em',
                      }}>
                        {p.badge.toUpperCase()}
                      </span>
                    </div>
                    <p style={{ ...bodyStyle, fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                      {p.desc}
                    </p>
                    <div style={{
                      borderTop:  '1px solid rgba(255,255,255,0.06)',
                      paddingTop: '1rem',
                    }}>
                      <p style={{
                        fontFamily:    'var(--font-inter)',
                        fontWeight:    600,
                        fontSize:      '0.65rem',
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase',
                        color:         '#5e5a7a',
                        margin:        '0 0 0.6rem',
                      }}>
                        Google Cloud Services Used
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {p.gcServices.map((s) => (
                          <span key={s} style={{
                            fontFamily:      'var(--font-inter)',
                            fontSize:        '0.72rem',
                            fontWeight:      500,
                            color:           p.color,
                            backgroundColor: `${p.color}10`,
                            border:          `1px solid ${p.color}25`,
                            borderRadius:    '4px',
                            padding:         '0.2rem 0.55rem',
                          }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Code examples ───────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          padding:         '5rem 0',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
              <div style={{
                display:       'inline-flex',
                alignItems:    'center',
                gap:           '0.4rem',
                fontFamily:    'var(--font-inter)',
                fontWeight:    600,
                fontSize:      '0.7rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         GC_BLUE,
                border:        `1px solid ${GC_BLUE}33`,
                borderRadius:  '4px',
                padding:       '0.25rem 0.6rem',
                marginBottom:  '1.25rem',
              }}>
                Implementation Patterns
              </div>
              <h2 style={h2Style}>How we build with Google Cloud</h2>
              <p style={bodyStyle}>
                Both patterns below are taken from production deployments. Vertex AI calls run
                in the EU region for GDPR data residency compliance. Cloud Run deployments
                use service accounts with least-privilege IAM — no broad permissions,
                no credentials in code.
              </p>
            </div>

            <div className="code-grid" style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1fr',
              gap:                 '2rem',
              alignItems:          'start',
            }}>
              <div>
                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    600,
                  fontSize:      '0.75rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color:         GC_BLUE,
                  margin:        '0 0 0.75rem',
                }}>
                  Vertex AI — Gemini Document Analysis
                </p>
                <pre style={codeBlockStyle}><code style={{ color: 'inherit' }}>{vertexCode}</code></pre>
              </div>

              <div>
                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    600,
                  fontSize:      '0.75rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color:         GC_GREEN,
                  margin:        '0 0 0.75rem',
                }}>
                  Cloud Run — Production Deployment
                </p>
                <pre style={codeBlockStyle}><code style={{ color: 'inherit' }}>{cloudRunCode}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services for clients ────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
          padding:         '5rem 0',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
              <div style={{
                display:       'inline-flex',
                alignItems:    'center',
                gap:           '0.4rem',
                fontFamily:    'var(--font-inter)',
                fontWeight:    600,
                fontSize:      '0.7rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         GC_BLUE,
                border:        `1px solid ${GC_BLUE}33`,
                borderRadius:  '4px',
                padding:       '0.25rem 0.6rem',
                marginBottom:  '1.25rem',
              }}>
                Client Engagements
              </div>
              <h2 style={h2Style}>Google Cloud as a service</h2>
              <p style={bodyStyle}>
                As a Partner Advantage member, Two Bit Digital designs and deploys Google Cloud
                infrastructure for client platforms — from initial architecture through to
                production operations and ongoing cost optimisation.
              </p>
            </div>

            <div className="service-grid" style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap:                 '1.25rem',
            }}>
              {[
                {
                  title: 'Vertex AI Integration',
                  desc:  'End-to-end AI feature development using Vertex AI — Gemini model access, RAG pipelines, structured data extraction, and AI agents embedded into your existing platform.',
                },
                {
                  title: 'Cloud Run Deployment',
                  desc:  'Containerise and deploy your application to Cloud Run — auto-scaling, zero server management, pay-per-request. Includes CI/CD pipeline setup via Cloud Build.',
                },
                {
                  title: 'Firebase Mobile Backend',
                  desc:  'Full Firebase backend for React Native or web apps — Firestore schema design, Auth setup, Cloud Messaging for push notifications, and offline-first data sync patterns.',
                },
                {
                  title: 'GCP Architecture Review',
                  desc:  'Independent review of your existing Google Cloud infrastructure — security posture, IAM configuration, cost optimisation, and data residency compliance for regulated markets.',
                },
              ].map((s) => (
                <div key={s.title} style={cardStyle}>
                  <h3 style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '0.9rem',
                    color:         '#eceaf5',
                    margin:        '0 0 0.6rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {s.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize:   '0.82rem',
                    color:      '#9d99b8',
                    lineHeight: 1.75,
                    margin:     0,
                  }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#09091a',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
          padding:         '5rem 0',
        }}>
          <div style={{
            maxWidth:  '1200px',
            margin:    '0 auto',
            padding:   '0 1.5rem',
            textAlign: 'center',
          }}>
            {/* Google colour dots */}
            <div style={{
              display:        'flex',
              gap:            '6px',
              justifyContent: 'center',
              marginBottom:   '1.75rem',
            }}>
              {[GC_BLUE, GC_RED, GC_YELLOW, GC_GREEN].map((c, i) => (
                <div key={i} style={{
                  width:           '10px',
                  height:          '10px',
                  borderRadius:    '50%',
                  backgroundColor: c,
                }} />
              ))}
            </div>

            <h2 style={{ ...h2Style, textAlign: 'center', marginBottom: '1rem' }}>
              Ready to build on Google Cloud?
            </h2>
            <p style={{
              ...bodyStyle,
              textAlign: 'center',
              maxWidth:  '540px',
              margin:    '0 auto 2.5rem',
            }}>
              Whether it&apos;s Vertex AI integration, a Cloud Run deployment, a Firebase
              mobile backend, or a full GCP architecture — we&apos;ve done it in production.
              Bring your brief.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display:         'inline-block',
                backgroundColor: '#f5c518',
                color:           '#09091a',
                fontFamily:      'var(--font-inter)',
                fontWeight:      700,
                fontSize:        '0.9rem',
                padding:         '0.9rem 2rem',
                borderRadius:    '8px',
                textDecoration:  'none',
                letterSpacing:   '-0.01em',
              }}>
                Start a Project
              </Link>
              <Link href="/services/cloud-infrastructure" style={{
                display:       'inline-block',
                color:         '#9d99b8',
                fontFamily:    'var(--font-inter)',
                fontWeight:    500,
                fontSize:      '0.9rem',
                padding:       '0.9rem 2rem',
                borderRadius:  '8px',
                textDecoration:'none',
                border:        '1px solid rgba(255,255,255,0.1)',
              }}>
                Cloud Infrastructure Services →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .cap-grid      { grid-template-columns: 1fr 1fr !important; }
          .products-grid { grid-template-columns: 1fr !important; }
          .verify-grid   { grid-template-columns: 1fr !important; }
          .code-grid     { grid-template-columns: 1fr !important; }
          .service-grid  { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .cap-grid     { grid-template-columns: 1fr !important; }
          .service-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

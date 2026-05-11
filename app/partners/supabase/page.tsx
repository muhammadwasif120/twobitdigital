import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'Supabase Integration | Two Bit Digital — Technology Partner',
  description:
    'Two Bit Digital is a Supabase Technology Partner. We build production SaaS platforms on Supabase — multi-tenant RLS architecture, Auth, Realtime, Storage, and Edge Functions powering Tikkit X and Averon Legal Systems.',
  alternates: { canonical: 'https://www.twobitdigital.com/partners/supabase' },
  openGraph: {
    title: 'Building Production SaaS on Supabase | Two Bit Digital',
    description:
      'How Two Bit Digital engineers multi-tenant SaaS platforms using Supabase — Row Level Security, Auth, Realtime, Storage, and Edge Functions.',
    url: 'https://www.twobitdigital.com/partners/supabase',
    type: 'website',
  },
}

const SBG = '#3ECF8E' // Supabase green

// ── Shared style atoms ──────────────────────────────────────────────────────

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

const labelStyle = (color = SBG) => ({
  display:         'inline-flex' as const,
  alignItems:      'center' as const,
  gap:             '0.4rem',
  fontFamily:      'var(--font-inter)',
  fontWeight:      600 as const,
  fontSize:        '0.7rem',
  letterSpacing:   '0.08em',
  textTransform:   'uppercase' as const,
  color,
  border:          `1px solid ${color}33`,
  borderRadius:    '4px',
  padding:         '0.25rem 0.6rem',
  marginBottom:    '1.25rem',
})

const cardStyle = {
  backgroundColor: '#11112b',
  border:          '1px solid rgba(255,255,255,0.06)',
  borderRadius:    '14px',
  padding:         '1.75rem',
}

// ── Feature data ────────────────────────────────────────────────────────────

const features = [
  {
    icon: '🔐',
    name: 'Row Level Security',
    desc: 'Every query filtered at the database layer. Multi-tenant isolation without application-level guards — RLS policies are the boundary, not an afterthought.',
  },
  {
    icon: '⚡',
    name: 'Realtime',
    desc: "Postgres changes streamed to connected clients over WebSockets. Powers live dashboards, case-update feeds, and event check-in views without a separate pub/sub layer.",
  },
  {
    icon: '🔑',
    name: 'Auth + JWT',
    desc: 'Built-in user management with custom JWT claims for role-based access. Firm invite flows, role elevation, and session management handled without third-party services.',
  },
  {
    icon: '📦',
    name: 'Storage',
    desc: 'Object storage with RLS-extended access control — the same policy layer that governs rows governs file access. Legal documents, event media, and CNIC docs in one stack.',
  },
  {
    icon: '🔧',
    name: 'Edge Functions',
    desc: 'Deno-native serverless functions at the database edge. Used for payment webhooks, court deadline calculations, and HMAC-SHA256 QR key seeding without cold-start latency.',
  },
  {
    icon: '🛠️',
    name: 'Management API',
    desc: "Programmatic project provisioning and schema migrations via Supabase's Management API — enabling repeatable, auditable infrastructure across environments.",
  },
]

const rlsCode = `-- Example: firm-scoped Row Level Security for a legal case management system
-- All tenant isolation happens at the Postgres layer — not in application code.

alter table cases enable row level security;

create policy "Users see only their firm's cases"
  on cases for select
  using (
    firm_id = (auth.jwt() ->> 'firm_id')::uuid
  );

create policy "Fee earners can insert cases for their firm"
  on cases for insert
  with check (
    firm_id = (auth.jwt() ->> 'firm_id')::uuid
    and (auth.jwt() ->> 'role') in ('fee_earner', 'costs_lawyer', 'partner')
  );

-- JWT payload injected at login via Supabase Auth hook:
-- { "firm_id": "uuid", "role": "costs_lawyer", "user_id": "uuid" }`

const clientCode = `// lib/supabase/server.ts — App Router server-side client
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { Database } from '@/types/supabase'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        },
      },
    }
  )
}`

const envCode = `# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Server-side only — never expose to the client
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key`

const installCode = `npm install @supabase/supabase-js @supabase/ssr`

// ── Page ────────────────────────────────────────────────────────────────────

export default function SupabasePartnerPage() {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section style={{
          background:    'linear-gradient(180deg, #09091a 0%, #0d0d22 100%)',
          paddingTop:    '9rem',
          paddingBottom: '5rem',
          borderBottom:  '1px solid rgba(255,255,255,0.06)',
          position:      'relative',
          overflow:      'hidden',
        }}>
          {/* Ambient glow — Supabase green tint */}
          <div style={{
            position:     'absolute',
            top:          '-80px',
            left:         '50%',
            transform:    'translateX(-50%)',
            width:        '900px',
            height:       '500px',
            borderRadius: '50%',
            pointerEvents:'none',
            background:   `radial-gradient(circle, ${SBG}18 0%, transparent 65%)`,
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
              { label: 'Partners', href: '/partners/supabase' },
              { label: 'Supabase' },
            ]} />

            <div style={{ maxWidth: '820px', marginTop: '2rem' }}>
              {/* Partner badge */}
              <div style={{
                display:         'inline-flex',
                alignItems:      'center',
                gap:             '0.6rem',
                backgroundColor: `${SBG}12`,
                border:          `1px solid ${SBG}40`,
                borderRadius:    '999px',
                padding:         '0.4rem 1rem 0.4rem 0.6rem',
                marginBottom:    '1.75rem',
              }}>
                <span style={{
                  backgroundColor: SBG,
                  borderRadius:    '50%',
                  width:           '8px',
                  height:          '8px',
                  display:         'inline-block',
                  flexShrink:      0,
                }} />
                <span style={{
                  fontFamily:  'var(--font-inter)',
                  fontWeight:  600,
                  fontSize:    '0.75rem',
                  color:       SBG,
                  letterSpacing:'0.04em',
                }}>
                  Supabase Technology Partner
                </span>
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
                Building Production{' '}
                <span style={{ color: SBG }}>SaaS on Supabase</span>
              </h1>

              <p style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize:   'clamp(1rem, 2vw, 1.2rem)',
                color:      '#9d99b8',
                lineHeight: 1.8,
                margin:     '0 0 2.5rem',
                maxWidth:   '660px',
              }}>
                Two Bit Digital is a Supabase-native engineering studio. Every SaaS platform
                we build uses Supabase as the primary backend — not as a convenience, but as
                the architectural foundation. Multi-tenant isolation, real-time data, and
                role-based access all live at the database layer.
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
                <a href="#architecture" style={{
                  display:      'inline-block',
                  color:        '#9d99b8',
                  fontFamily:   'var(--font-inter)',
                  fontWeight:   500,
                  fontSize:     '0.9rem',
                  padding:      '0.85rem 1.75rem',
                  borderRadius: '8px',
                  textDecoration:'none',
                  border:       '1px solid rgba(255,255,255,0.1)',
                }}>
                  View Architecture ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Overview + Feature Grid ────────────────────────────────── */}
        <section style={{ backgroundColor: '#0d0d22', padding: '5rem 0' }}>
          <div style={{
            maxWidth: '1200px',
            margin:   '0 auto',
            padding:  '0 1.5rem',
          }}>
            <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
              <div style={labelStyle()}>Why Supabase</div>
              <h2 style={h2Style}>Postgres-first, RLS-native architecture</h2>
              <p style={bodyStyle}>
                Multi-tenancy is the hardest problem in SaaS. Most studios bolt on tenant
                isolation after the fact — middleware guards, application-level filters, fragile
                ownership checks. We solve it at the database layer from day one using
                Supabase&apos;s Row Level Security. When a query runs, Postgres enforces the
                tenant boundary before a single row is returned. There is no code path that
                bypasses it.
              </p>
              <p style={bodyStyle}>
                Supabase gives us a full production backend — Auth, Storage, Realtime, Edge
                Functions, and the Management API — that integrates natively with our Next.js
                App Router stack. The result is a cohesive architecture with fewer seams and
                significantly less infrastructure to manage.
              </p>
            </div>

            {/* Feature grid */}
            <div className="feature-grid" style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap:                 '1.25rem',
            }}>
              {features.map((f) => (
                <div key={f.name} style={cardStyle}>
                  <div style={{
                    fontSize:     '1.4rem',
                    marginBottom: '0.85rem',
                  }}>
                    {f.icon}
                  </div>
                  <h3 style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '0.95rem',
                    color:         '#eceaf5',
                    margin:        '0 0 0.6rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {f.name}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize:   '0.875rem',
                    color:      '#9d99b8',
                    lineHeight: 1.75,
                    margin:     0,
                  }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Products ──────────────────────────────────────────────── */}
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
              <div style={labelStyle()}>In-House Products</div>
              <h2 style={h2Style}>Live SaaS built on Supabase</h2>
              <p style={bodyStyle}>
                Two Bit Digital has shipped two production SaaS platforms using Supabase as the
                primary backend. Both are multi-tenant from the ground up, with all isolation
                enforced at the database layer via RLS.
              </p>
            </div>

            <div className="product-grid" style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1fr',
              gap:                 '1.5rem',
            }}>
              {/* Tikkit X */}
              <div style={{
                ...cardStyle,
                borderColor: `${SBG}22`,
                position:    'relative',
                overflow:    'hidden',
              }}>
                <div style={{
                  position:     'absolute',
                  top:          '-60px',
                  right:        '-60px',
                  width:        '200px',
                  height:       '200px',
                  borderRadius: '50%',
                  background:   `radial-gradient(circle, ${SBG}10 0%, transparent 70%)`,
                  pointerEvents:'none',
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display:        'flex',
                    alignItems:     'center',
                    gap:            '0.75rem',
                    marginBottom:   '1.25rem',
                  }}>
                    <div style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    800,
                      fontSize:      '1.1rem',
                      color:         '#eceaf5',
                      letterSpacing: '-0.02em',
                    }}>
                      Tikkit <span style={{ color: '#f5c518' }}>X</span>
                    </div>
                    <span style={{
                      backgroundColor: `${SBG}15`,
                      color:           SBG,
                      fontSize:        '0.68rem',
                      fontFamily:      'var(--font-inter)',
                      fontWeight:      600,
                      padding:         '0.2rem 0.55rem',
                      borderRadius:    '4px',
                      border:          `1px solid ${SBG}30`,
                      letterSpacing:   '0.04em',
                    }}>
                      LIVE
                    </span>
                  </div>

                  <p style={{ ...bodyStyle, fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                    Mobile-first event ticketing and management platform for the Pakistan market.
                    Multi-tenant architecture serving independent event organisers, venues, and
                    enterprise clients — all on a single Supabase instance.
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    600,
                      fontSize:      '0.72rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color:         SBG,
                      margin:        '0 0 0.75rem',
                    }}>
                      Supabase Usage
                    </p>
                    <ul style={{
                      listStyle:   'none',
                      padding:     0,
                      margin:      0,
                      display:     'flex',
                      flexDirection:'column',
                      gap:         '0.5rem',
                    }}>
                      {[
                        'Multi-tenant RLS — organiser-scoped event and attendee data',
                        'Auth — JWT with organiser_id claim injected at login',
                        'Realtime — live check-in dashboard via Postgres changes',
                        'Storage — event media, banners, and CNIC document uploads',
                        'Edge Functions — JazzCash / EasyPaisa payment webhooks',
                        'Edge Functions — HMAC-SHA256 offline QR key seeding',
                      ].map((item) => (
                        <li key={item} style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize:   '0.82rem',
                          color:      '#9d99b8',
                          fontWeight: 300,
                          display:    'flex',
                          gap:        '0.6rem',
                        }}>
                          <span style={{ color: SBG, flexShrink: 0 }}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href="https://tikkitx.com" target="_blank" rel="noopener noreferrer"
                    style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    600,
                      fontSize:      '0.8rem',
                      color:         SBG,
                      textDecoration:'none',
                      letterSpacing: '0.01em',
                    }}>
                    Visit tikkitx.com ↗
                  </a>
                </div>
              </div>

              {/* Averon Legal Systems */}
              <div style={{
                ...cardStyle,
                borderColor: `${SBG}22`,
                position:    'relative',
                overflow:    'hidden',
              }}>
                <div style={{
                  position:     'absolute',
                  top:          '-60px',
                  right:        '-60px',
                  width:        '200px',
                  height:       '200px',
                  borderRadius: '50%',
                  background:   `radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)`,
                  pointerEvents:'none',
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display:      'flex',
                    alignItems:   'center',
                    gap:          '0.75rem',
                    marginBottom: '1.25rem',
                  }}>
                    <div style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    800,
                      fontSize:      '1.1rem',
                      color:         '#eceaf5',
                      letterSpacing: '-0.02em',
                    }}>
                      Averon <span style={{ color: '#f5c518' }}>Legal</span>
                    </div>
                    <span style={{
                      backgroundColor: 'rgba(245,197,24,0.1)',
                      color:           '#f5c518',
                      fontSize:        '0.68rem',
                      fontFamily:      'var(--font-inter)',
                      fontWeight:      600,
                      padding:         '0.2rem 0.55rem',
                      borderRadius:    '4px',
                      border:          '1px solid rgba(245,197,24,0.25)',
                      letterSpacing:   '0.04em',
                    }}>
                      BETA
                    </span>
                  </div>

                  <p style={{ ...bodyStyle, fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                    CPR Part 47/36 legal case management SaaS for UK costs lawyers and law
                    firms. Multi-tenant by firm — each firm is fully isolated with role-based
                    access for partners, fee earners, and costs lawyers.
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{
                      fontFamily:    'var(--font-inter)',
                      fontWeight:    600,
                      fontSize:      '0.72rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color:         '#f5c518',
                      margin:        '0 0 0.75rem',
                    }}>
                      Supabase Usage
                    </p>
                    <ul style={{
                      listStyle:    'none',
                      padding:      0,
                      margin:       0,
                      display:      'flex',
                      flexDirection:'column',
                      gap:          '0.5rem',
                    }}>
                      {[
                        'Multi-tenant RLS — firm_id enforced on every table',
                        'Auth — custom JWT claims: firm_id, role (partner / fee_earner / costs_lawyer)',
                        'Auth — firm invite flow with email magic links',
                        'Realtime — live case status updates across fee earner sessions',
                        'Storage — legal document uploads with RLS-extended access control',
                        'Edge Functions — CPR court deadline engine (Part 47 / Part 36 logic)',
                      ].map((item) => (
                        <li key={item} style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize:   '0.82rem',
                          color:      '#9d99b8',
                          fontWeight: 300,
                          display:    'flex',
                          gap:        '0.6rem',
                        }}>
                          <span style={{ color: '#f5c518', flexShrink: 0 }}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/products" style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    600,
                    fontSize:      '0.8rem',
                    color:         '#f5c518',
                    textDecoration:'none',
                    letterSpacing: '0.01em',
                  }}>
                    View all products →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Architecture ──────────────────────────────────────────── */}
        <section id="architecture" style={{
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
              <div style={labelStyle()}>Architecture</div>
              <h2 style={h2Style}>Standard Two Bit Digital stack</h2>
              <p style={bodyStyle}>
                All production SaaS platforms follow the same architectural spine: Next.js App
                Router on the front end, Supabase as the primary backend, deployed on Vercel
                with optional AWS for compute-heavy workloads. RLS is defined first, schema
                second, application code third — never the other way around.
              </p>
            </div>

            {/* Stack diagram */}
            <div style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap:                 '0',
              marginBottom:        '3.5rem',
              border:              '1px solid rgba(255,255,255,0.06)',
              borderRadius:        '14px',
              overflow:            'hidden',
            }}
            className="stack-grid"
            >
              {[
                { layer: 'Frontend', tech: 'Next.js App Router', detail: 'TypeScript · React · @supabase/ssr', color: '#eceaf5' },
                { layer: 'Backend',  tech: 'Supabase',           detail: 'Postgres · Auth · Storage · Realtime · Edge', color: SBG },
                { layer: 'Infra',    tech: 'Vercel + AWS',        detail: 'CI/CD · Serverless · Managed DB · Observability', color: '#f5c518' },
              ].map((s, i) => (
                <div key={s.layer} style={{
                  padding:     '2rem',
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  backgroundColor: i === 1 ? `${SBG}08` : 'transparent',
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
                    {s.layer}
                  </p>
                  <p style={{
                    fontFamily:    'var(--font-inter)',
                    fontWeight:    700,
                    fontSize:      '1.1rem',
                    color:         s.color,
                    margin:        '0 0 0.4rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {s.tech}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize:   '0.8rem',
                    color:      '#5e5a7a',
                    margin:     0,
                  }}>
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* RLS policy */}
            <div style={{ marginBottom: '3rem' }}>
              <p style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    600,
                fontSize:      '0.75rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color:         SBG,
                margin:        '0 0 0.75rem',
              }}>
                RLS Policy Pattern
              </p>
              <pre style={codeBlockStyle}><code style={{ color: 'inherit' }}>{rlsCode}</code></pre>
            </div>

            {/* Supabase client */}
            <div>
              <p style={{
                fontFamily:    'var(--font-inter)',
                fontWeight:    600,
                fontSize:      '0.75rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color:         SBG,
                margin:        '0 0 0.75rem',
              }}>
                Supabase Client — Next.js App Router
              </p>
              <pre style={codeBlockStyle}><code style={{ color: 'inherit' }}>{clientCode}</code></pre>
            </div>
          </div>
        </section>

        {/* ── Integration Guide ─────────────────────────────────────── */}
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
              <div style={labelStyle()}>Integration Guide</div>
              <h2 style={h2Style}>Getting started with our stack</h2>
              <p style={bodyStyle}>
                The core integration is straightforward. The opinionated part is the RLS-first
                methodology — every table has RLS enabled before any application code touches it.
              </p>
            </div>

            <div className="guide-grid" style={{
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
                  color:         SBG,
                  margin:        '0 0 0.75rem',
                }}>
                  1. Install dependencies
                </p>
                <pre style={codeBlockStyle}><code style={{ color: 'inherit' }}>{installCode}</code></pre>

                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    600,
                  fontSize:      '0.75rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color:         SBG,
                  margin:        '1.5rem 0 0.75rem',
                }}>
                  2. Configure environment variables
                </p>
                <pre style={codeBlockStyle}><code style={{ color: 'inherit' }}>{envCode}</code></pre>
              </div>

              <div>
                <p style={{
                  fontFamily:    'var(--font-inter)',
                  fontWeight:    600,
                  fontSize:      '0.75rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color:         SBG,
                  margin:        '0 0 0.75rem',
                }}>
                  3. RLS-first principles
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {[
                    {
                      step: '01',
                      title: 'Enable RLS before everything else',
                      desc: 'Run `alter table <name> enable row level security;` as the first migration on every new table. No exceptions.',
                    },
                    {
                      step: '02',
                      title: 'Inject tenant context via JWT',
                      desc: 'Use a Supabase Auth hook to inject firm_id, org_id, or tenant_id into the JWT at login. Policies reference auth.jwt() directly.',
                    },
                    {
                      step: '03',
                      title: 'Default-deny, explicit-allow',
                      desc: 'With RLS enabled and no policies defined, all access is denied. Add policies only for the operations each role legitimately needs.',
                    },
                    {
                      step: '04',
                      title: 'Extend RLS to Storage',
                      desc: 'Storage bucket policies mirror your table policies. A user who cannot read a case record cannot read the documents associated with it either.',
                    },
                  ].map((p) => (
                    <div key={p.step} style={{
                      ...cardStyle,
                      padding: '1.25rem',
                      display: 'flex',
                      gap:     '1rem',
                    }}>
                      <span style={{
                        fontFamily:      'var(--font-inter)',
                        fontWeight:      700,
                        fontSize:        '0.72rem',
                        color:           SBG,
                        backgroundColor: `${SBG}12`,
                        border:          `1px solid ${SBG}25`,
                        borderRadius:    '6px',
                        padding:         '0.3rem 0.55rem',
                        height:          'fit-content',
                        flexShrink:      0,
                        letterSpacing:   '0.02em',
                      }}>
                        {p.step}
                      </span>
                      <div>
                        <p style={{
                          fontFamily:    'var(--font-inter)',
                          fontWeight:    600,
                          fontSize:      '0.875rem',
                          color:         '#eceaf5',
                          margin:        '0 0 0.3rem',
                          letterSpacing: '-0.01em',
                        }}>
                          {p.title}
                        </p>
                        <p style={{
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 300,
                          fontSize:   '0.82rem',
                          color:      '#9d99b8',
                          lineHeight: 1.7,
                          margin:     0,
                        }}>
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section style={{
          backgroundColor: '#0d0d22',
          borderTop:       '1px solid rgba(255,255,255,0.06)',
          padding:         '5rem 0',
        }}>
          <div style={{
            maxWidth:  '1200px',
            margin:    '0 auto',
            padding:   '0 1.5rem',
            textAlign: 'center',
          }}>
            <div style={{
              display:         'inline-flex',
              alignItems:      'center',
              gap:             '0.6rem',
              backgroundColor: `${SBG}12`,
              border:          `1px solid ${SBG}35`,
              borderRadius:    '999px',
              padding:         '0.4rem 1rem 0.4rem 0.6rem',
              marginBottom:    '1.75rem',
            }}>
              <span style={{
                backgroundColor: SBG,
                borderRadius:    '50%',
                width:           '7px',
                height:          '7px',
                display:         'inline-block',
              }} />
              <span style={{
                fontFamily:   'var(--font-inter)',
                fontWeight:   600,
                fontSize:     '0.72rem',
                color:        SBG,
                letterSpacing:'0.04em',
              }}>
                Supabase Technology Partner
              </span>
            </div>

            <h2 style={{ ...h2Style, textAlign: 'center', marginBottom: '1rem' }}>
              Work with Two Bit Digital
            </h2>
            <p style={{
              ...bodyStyle,
              textAlign: 'center',
              maxWidth:  '540px',
              margin:    '0 auto 2.5rem',
            }}>
              Ready to build a production SaaS platform on Supabase? We&apos;d love to hear
              about your project.
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
              <Link href="/" style={{
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
                twobitdigital.com →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .feature-grid { grid-template-columns: 1fr 1fr !important; }
          .product-grid { grid-template-columns: 1fr !important; }
          .stack-grid   { grid-template-columns: 1fr !important; }
          .guide-grid   { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .feature-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

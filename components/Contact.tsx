'use client'

import { useState, useEffect, useRef } from 'react'

const projectTypes = [
  'Web Application / Portal',
  'Mobile Application',
  'AI Integration / Automation',
  'SaaS Platform',
  'Government / Civil Tender',
  'Legal / RegTech Solution',
  'Other',
]

type ToastType = 'success' | 'error' | null

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [form, setForm] = useState({
    name:         '',
    email:        '',
    company:      '',
    project_type: '',
    message:      '',
    honeypot:     '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted]   = useState(false)
  const [toast, setToast]           = useState<{ type: ToastType; msg: string }>({ type: null, msg: '' })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    el.querySelectorAll('.reveal').forEach((r) => obs.observe(r))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!toast.type) return
    const t = setTimeout(() => setToast({ type: null, msg: '' }), 5000)
    return () => clearTimeout(t)
  }, [toast])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.honeypot) return // bot trap
    if (!form.name || !form.email || !form.message) return

    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', company: '', project_type: '', message: '', honeypot: '' })
        // Fire GA4 conversion event
        type GtagFn = (cmd: string, event: string, params: Record<string, unknown>) => void
        const w = window as Window & { gtag?: GtagFn }
        if (typeof w.gtag === 'function') {
          w.gtag('event', 'generate_lead', {
            event_category: 'contact',
            event_label:    form.project_type || 'General Enquiry',
            value:          1,
          })
        }
      } else {
        throw new Error('Server error')
      }
    } catch {
      setToast({ type: 'error', msg: 'Network error — please email us directly at sales@twobitdigital.com' })
    } finally {
      setSubmitting(false)
    }
  }

  const inputStyle = {
    width:           '100%',
    backgroundColor: '#11112b',
    border:          '1px solid rgba(255,255,255,0.08)',
    borderRadius:    '8px',
    padding:         '0.75rem 1rem',
    fontFamily:      'var(--font-inter)',
    fontSize:        '0.9rem',
    color:           '#eceaf5',
    outline:         'none',
    transition:      'border-color 0.2s ease',
    boxSizing:       'border-box' as const,
  }

  return (
    <section
      ref={ref}
      id="contact"
      style={{
        backgroundColor: '#0d0d22',
        borderTop:       '1px solid rgba(255,255,255,0.06)',
        padding:         '6rem 0',
        position:        'relative',
        zIndex:          1,
      }}
    >
      {/* Toast */}
      {toast.type && (
        <div
          role="alert"
          aria-live="assertive"
          style={{
          position:        'fixed',
          bottom:          '2rem',
          right:           '2rem',
          zIndex:          100,
          backgroundColor: toast.type === 'success' ? 'rgba(74,222,128,0.12)' : 'rgba(248,113,113,0.12)',
          border:          `1px solid ${toast.type === 'success' ? 'rgba(74,222,128,0.3)' : 'rgba(248,113,113,0.3)'}`,
          borderRadius:    '10px',
          padding:         '1rem 1.5rem',
          maxWidth:        '380px',
          fontFamily:      'var(--font-inter)',
          fontSize:        '0.875rem',
          color:           toast.type === 'success' ? '#4ade80' : '#f87171',
          backdropFilter:  'blur(12px)',
        }}>
          {toast.msg}
        </div>
      )}

      <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
          <div className="reveal section-label" style={{ justifyContent:'center' }}>Get In Touch</div>
          <h2 className="reveal reveal-delay-1" style={{
            fontFamily:   'var(--font-inter)',
            fontWeight:   800,
            fontSize:     'clamp(1.9rem, 4vw, 2.8rem)',
            color:        '#eceaf5',
            margin:       '0 0 1rem',
            letterSpacing:'-0.02em',
          }}>
            Let&apos;s Build{' '}
            <span style={{ color: '#f5c518' }}>Something Together.</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 300,
            fontSize:   '1.05rem',
            color:      '#9d99b8',
            maxWidth:   '580px',
            margin:     '0 auto',
            lineHeight: 1.75,
          }}>
            Whether you&apos;re a startup with an idea, an enterprise with a problem, or a government body looking
            for a reliable digital partner — bring us the brief. We&apos;ll bring the architecture.
          </p>
        </div>

        <div style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap:                 '3rem',
          alignItems:          'start',
        }}
        className="contact-grid"
        >
          {/* Left — contact info */}
          <div className="reveal">
            <h3 style={{ fontFamily:'var(--font-inter)', fontWeight:700, fontSize:'1rem', color:'#eceaf5', margin:'0 0 1.5rem', letterSpacing:'-0.01em' }}>
              Contact Details
            </h3>

            {[
              { label: 'General',      value: 'mwasif@twobitdigital.com',   href: 'mailto:mwasif@twobitdigital.com' },
              { label: 'New Projects', value: 'sales@twobitdigital.com',     href: 'mailto:sales@twobitdigital.com' },
              { label: 'LinkedIn',     value: 'Two Bit Digital',            href: 'https://linkedin.com/company/twobitdigital' },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom:'1.25rem' }}>
                <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.7rem', color:'#5e5a7a', letterSpacing:'0.08em', textTransform:'uppercase', margin:'0 0 0.25rem' }}>
                  {item.label}
                </p>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    fontFamily:     'var(--font-inter)',
                    fontSize:       '0.9rem',
                    color:          '#9d99b8',
                    textDecoration: 'none',
                    transition:     'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#f5c518')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9d99b8')}
                >
                  {item.value}
                </a>
              </div>
            ))}

          </div>

          {/* Right — form or success */}
          <div className="reveal reveal-delay-1">
            {submitted ? (
              <div style={{
                backgroundColor: '#11112b',
                border:          '1px solid rgba(245,197,24,0.2)',
                borderRadius:    '14px',
                padding:         '3rem 2.5rem',
                textAlign:       'center',
                display:         'flex',
                flexDirection:   'column',
                alignItems:      'center',
                gap:             '1.25rem',
              }}>
                <div style={{
                  width:           '56px',
                  height:          '56px',
                  borderRadius:    '50%',
                  backgroundColor: 'rgba(245,197,24,0.1)',
                  border:          '1px solid rgba(245,197,24,0.25)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  fontSize:        '1.5rem',
                }}>
                  ✓
                </div>
                <div>
                  <h3 style={{
                    fontFamily:   'var(--font-inter)',
                    fontWeight:   700,
                    fontSize:     '1.25rem',
                    color:        '#eceaf5',
                    margin:       '0 0 0.6rem',
                    letterSpacing:'-0.02em',
                  }}>
                    Brief Received
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize:   '0.95rem',
                    color:      '#9d99b8',
                    lineHeight: 1.75,
                    margin:     0,
                    maxWidth:   '360px',
                  }}>
                    Thank you for reaching out. Your brief has been submitted and a member of our team
                    will be in touch with you on a priority basis — typically within one business day.
                  </p>
                </div>
                <div style={{
                  borderTop:   '1px solid rgba(255,255,255,0.06)',
                  paddingTop:  '1.25rem',
                  width:       '100%',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize:   '0.78rem',
                    color:      '#5e5a7a',
                    margin:     0,
                  }}>
                    In the meantime you can reach us directly at{' '}
                    <a href="mailto:sales@twobitdigital.com" style={{ color:'#f5c518', textDecoration:'none' }}>
                      sales@twobitdigital.com
                    </a>
                  </p>
                </div>
              </div>
            ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={handleChange}
                style={{ display:'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1rem' }} className="form-row">
                <div>
                  <label style={{ fontFamily:'var(--font-inter)', fontSize:'0.75rem', color:'#9d99b8', display:'block', marginBottom:'0.4rem' }}>
                    Your Name <span style={{ color:'#f5c518' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    placeholder="Jane Smith"
                    style={inputStyle}
                    onFocus={(e)  => (e.target.style.borderColor = 'rgba(245,197,24,0.4)')}
                    onBlur={(e)   => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>
                <div>
                  <label style={{ fontFamily:'var(--font-inter)', fontSize:'0.75rem', color:'#9d99b8', display:'block', marginBottom:'0.4rem' }}>
                    Email <span style={{ color:'#f5c518' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    placeholder="jane@company.com"
                    style={inputStyle}
                    onFocus={(e)  => (e.target.style.borderColor = 'rgba(245,197,24,0.4)')}
                    onBlur={(e)   => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>
              </div>

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1rem' }} className="form-row">
                <div>
                  <label style={{ fontFamily:'var(--font-inter)', fontSize:'0.75rem', color:'#9d99b8', display:'block', marginBottom:'0.4rem' }}>
                    Company / Organisation
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Ltd"
                    style={inputStyle}
                    onFocus={(e)  => (e.target.style.borderColor = 'rgba(245,197,24,0.4)')}
                    onBlur={(e)   => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>
                <div>
                  <label style={{ fontFamily:'var(--font-inter)', fontSize:'0.75rem', color:'#9d99b8', display:'block', marginBottom:'0.4rem' }}>
                    Project Type
                  </label>
                  <select
                    name="project_type"
                    value={form.project_type}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor:'pointer' }}
                    onFocus={(e)  => (e.target.style.borderColor = 'rgba(245,197,24,0.4)')}
                    onBlur={(e)   => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  >
                    <option value="" style={{ backgroundColor:'#11112b' }}>Select type…</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} style={{ backgroundColor:'#11112b' }}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom:'1.5rem' }}>
                <label style={{ fontFamily:'var(--font-inter)', fontSize:'0.75rem', color:'#9d99b8', display:'block', marginBottom:'0.4rem' }}>
                  Tell us about your project <span style={{ color:'#f5c518' }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  rows={5}
                  placeholder="Describe your project, goals, and any relevant constraints or timelines…"
                  style={{ ...inputStyle, resize:'vertical', minHeight:'130px' }}
                  onFocus={(e)  => (e.target.style.borderColor = 'rgba(245,197,24,0.4)')}
                  onBlur={(e)   => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>

              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1rem' }}>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    fontFamily:      'var(--font-inter)',
                    fontWeight:      700,
                    fontSize:        '0.85rem',
                    letterSpacing:   '0.04em',
                    textTransform:   'uppercase',
                    color:           '#09091a',
                    backgroundColor: submitting ? '#c9a012' : '#f5c518',
                    border:          'none',
                    padding:         '0.85rem 2rem',
                    borderRadius:    '7px',
                    cursor:          submitting ? 'not-allowed' : 'pointer',
                    transition:      'background-color 0.25s ease',
                  }}
                  onMouseEnter={(e) => { if (!submitting) (e.target as HTMLElement).style.backgroundColor = '#c9a012' }}
                  onMouseLeave={(e) => { if (!submitting) (e.target as HTMLElement).style.backgroundColor = '#f5c518' }}
                >
                  {submitting ? (
                    <span style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
                      <span style={{
                        width:'14px', height:'14px',
                        border:'2px solid rgba(9,9,26,0.3)',
                        borderTopColor:'#09091a',
                        borderRadius:'50%',
                        display:'inline-block',
                        animation:'spin 0.7s linear infinite',
                      }} />
                      Sending…
                    </span>
                  ) : 'Send Brief →'}
                </button>
                <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.78rem', color:'#5e5a7a', margin:0 }}>
                  We typically respond within one business day.
                </p>
              </div>
            </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row      { grid-template-columns: 1fr !important; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}

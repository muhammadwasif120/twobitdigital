import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/shared/Breadcrumb'
import CTABanner from '@/components/shared/CTABanner'

type Props = {
  title:     string
  intro:     string
  maxWidth?: string
  cta:       { heading: string; subtext: string; label: string; href: string }
  children:  React.ReactNode
}

export default function ToolPageShell({ title, intro, maxWidth = '900px', cta, children }: Props) {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#09091a', minHeight: '100vh' }}>
        <section style={{ paddingTop: '6rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth, margin: '0 auto', padding: '0 1.5rem' }}>
            <Breadcrumb crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Free Tools', href: '/tools' },
              { label: title },
            ]} />
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
              <h1 style={{
                fontFamily: 'var(--font-inter)', fontWeight: 800,
                fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', lineHeight: 1.1,
                color: '#eceaf5', margin: 0, letterSpacing: '-0.03em',
              }}>
                {title}
              </h1>
              <span style={{
                fontFamily: 'var(--font-inter)', fontWeight: 600,
                fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase',
                color: '#09091a', backgroundColor: '#22c55e',
                padding: '0.2rem 0.6rem', borderRadius: '999px', whiteSpace: 'nowrap',
              }}>
                Free · No sign-up
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-inter)', fontWeight: 300,
              fontSize: '0.95rem', color: '#9d99b8', lineHeight: 1.7, margin: '0.5rem 0 0',
            }}>
              {intro}
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: '#09091a', padding: '2.5rem 0 4rem' }}>
          <div style={{ maxWidth, margin: '0 auto', padding: '0 1.5rem' }}>
            {children}
          </div>
        </section>

        <CTABanner heading={cta.heading} subtext={cta.subtext} ctaLabel={cta.label} ctaHref={cta.href} />
      </main>
      <Footer />
    </>
  )
}

import { whatsappHref } from '@/lib/whatsapp'

export default function WhatsAppButton() {
  const href = whatsappHref('Hi Two Bit Digital, I would like to know more about your services.')
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label="Chat with Two Bit Digital on WhatsApp"
      style={{
        position: 'fixed', right: '1.25rem', bottom: '1.25rem', zIndex: 60,
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        padding: '0.75rem 1.1rem', borderRadius: '999px',
        backgroundColor: '#25D366', color: '#07210f', textDecoration: 'none',
        fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem',
        boxShadow: '0 6px 24px rgba(0,0,0,0.35)',
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.2 14.8l-.4-.2-2.600.7.7-2.500-.3-.4A8 8 0 0 1 12 4z"/>
      </svg>
      <span className="wa-label">WhatsApp us</span>
      <style>{`@media (max-width:600px){.wa-label{display:none}}`}</style>
    </a>
  )
}

'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a')
      const href = link?.getAttribute('href')
      if (!link || !href) return

      const params = {
        link_text: (link.textContent ?? '').trim().slice(0, 60),
        page_path: window.location.pathname,
      }

      const custom = link.getAttribute('data-track')
      if (custom) trackEvent(custom, { ...params, destination: href.slice(0, 100) })
      else if (href.startsWith('https://wa.me/')) trackEvent('whatsapp_click', params)
      else if (href.startsWith('mailto:')) trackEvent('email_click', params)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}

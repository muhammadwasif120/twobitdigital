type GtagFn = (command: 'event', name: string, params?: Record<string, unknown>) => void

export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return
  const gtag = (window as Window & { gtag?: GtagFn }).gtag
  if (typeof gtag === 'function') gtag('event', name, params)
}

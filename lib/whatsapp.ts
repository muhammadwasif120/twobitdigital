// Public business WhatsApp number (digits only, with country code). Not a secret: it is shown on the site.
// Override per environment with NEXT_PUBLIC_WHATSAPP_NUMBER if it ever changes.
const DEFAULT_NUMBER = '923177886880'
const NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_NUMBER).replace(/\D/g, '')

export function whatsappHref(message: string): string {
  if (!NUMBER) return '/contact'
  return `https://wa.me/${NUMBER}?text=${encodeURIComponent(message)}`
}

export const whatsappEnabled = NUMBER.length > 0

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       'Pricing — StarkVault | Two Bit Digital',
  description: 'StarkVault is free forever up to 10 documents. Upgrade to Plus for $3.99/month or $29/year — unlimited documents, cards, expiry watches, and share links.',
  alternates:  { canonical: 'https://twobitdigital.com/starkvault/pricing' },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'StarkVault Pricing — Free forever, Plus from $3.99/mo',
    description: 'Free plan: 10 documents, 2 cards, 5 expiry watches, 1 share link. Plus: unlimited everything at $3.99/month or $29/year.',
    url:         'https://twobitdigital.com/starkvault/pricing',
    type:        'website',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

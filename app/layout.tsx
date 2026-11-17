import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import JsonLd from '@/components/JsonLd'
import WhatsAppButton from '@/components/WhatsAppButton'
import AnalyticsEvents from '@/components/AnalyticsEvents'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.twobitdigital.com'),
  title: {
    default: 'SaaS & AI Engineering | UK, US & Pakistan | Two Bit Digital',
    template: '%s | Two Bit Digital',
  },
  description:
    'UK-registered SaaS and AI engineering studio building CRM, ERP and custom software for businesses in the UK, US and Pakistan. Engineering in Karachi, registered in England.',
  keywords: [
    'SaaS development UK',
    'AI engineering studio',
    'government digital contracts',
    'RegTech software',
    'legal technology SaaS',
    'Next.js development agency',
    'TypeScript SaaS studio',
    'web app development UK',
    'AI integration agency',
    'cloud infrastructure',
    'SaaS platform build',
    'UK government tender technology',
    'enterprise software UK',
    'software development company Pakistan',
    'AI development company Pakistan',
    'custom software development Pakistan',
    'software house Karachi',
    'app development Pakistan',
    'AI automation Pakistan',
    'Australia SaaS development',
    'US AI engineering',
    'compliance software',
    'document intelligence',
    'Two Bit Digital',
    'Muhammad Wasif',
  ],
  authors: [{ name: 'Two Bit Digital', url: 'https://www.twobitdigital.com' }],
  creator: 'Two Bit Digital Ltd',
  publisher: 'Two Bit Digital Ltd',
  icons: {
    icon:             [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut:         '/favicon.svg',
    apple:            '/favicon.svg',
  },
  openGraph: {
    title: 'SaaS & AI Engineering | UK, US & Pakistan | Two Bit Digital',
    description:
      'UK-registered SaaS and AI engineering studio — CRM, ERP and custom software for the UK, US and Pakistan. Demo today, live in weeks.',
    url: 'https://www.twobitdigital.com',
    siteName: 'Two Bit Digital',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Two Bit Digital — Deploying Intelligence at Scale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS & AI Engineering | UK, US & Pakistan | Two Bit Digital',
    description:
      'UK-registered SaaS and AI engineering studio — CRM, ERP and custom software for the UK, US and Pakistan.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index:                  true,
      follow:                 true,
      'max-video-preview':    -1,
      'max-image-preview':    'large',
      'max-snippet':          -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Two Bit Digital Insights — RSS Feed"
          href="https://www.twobitdigital.com/feed.xml"
        />
      </head>
      <body className={inter.variable}>
        <JsonLd />
        {children}
        <WhatsAppButton />
        <AnalyticsEvents />
        <GoogleAnalytics gaId="G-H37B9RGMHP" />
      </body>
    </html>
  )
}

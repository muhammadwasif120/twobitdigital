import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import JsonLd from '@/components/JsonLd'
import WhatsAppButton from '@/components/WhatsAppButton'
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
    default: 'CRM, SaaS & AI Software for Pakistan | Two Bit Digital',
    template: '%s | Two Bit Digital',
  },
  description:
    "Pakistan's software studio for CRM, ERP, SaaS and AI. Ready-built systems for distribution, textile, education and more. UK-registered, engineering in Karachi.",
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
  authors: [{ name: 'Two Bit Digital', url: 'https://twobitdigital.com' }],
  creator: 'Two Bit Digital Ltd',
  publisher: 'Two Bit Digital Ltd',
  icons: {
    icon:             [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut:         '/favicon.svg',
    apple:            '/favicon.svg',
  },
  alternates: {
    canonical: 'https://www.twobitdigital.com',
    languages: {
      'en-GB': 'https://www.twobitdigital.com',
      'en-US': 'https://www.twobitdigital.com',
      'en-AU': 'https://www.twobitdigital.com',
      'en-PK': 'https://www.twobitdigital.com',
      'x-default': 'https://www.twobitdigital.com',
    },
  },
  openGraph: {
    title: 'CRM, SaaS & AI Software for Pakistan | Two Bit Digital',
    description:
      "Pakistan's software studio for CRM, ERP, SaaS and AI — ready-built systems, demo today, live in weeks.",
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
    title: 'CRM, SaaS & AI Software for Pakistan | Two Bit Digital',
    description:
      "Pakistan's software studio — CRM, ERP, SaaS and AI. Ready-built systems, demo today, live in weeks.",
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
          href="https://twobitdigital.com/feed.xml"
        />
      </head>
      <body className={inter.variable}>
        <JsonLd />
        {children}
        <WhatsAppButton />
        <GoogleAnalytics gaId="G-H37B9RGMHP" />
      </body>
    </html>
  )
}

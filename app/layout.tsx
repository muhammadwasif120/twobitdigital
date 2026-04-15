import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import JsonLd from '@/components/JsonLd'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://twobitdigital.com'),
  title: {
    default: 'Two Bit Digital — SaaS Development & AI Engineering Studio',
    template: '%s | Two Bit Digital',
  },
  description:
    'Two Bit Digital is a UK-registered SaaS development and AI engineering studio. We build mission-critical digital systems for regulated markets — enterprises, startups, and government bodies across the UK, US, Australia, and Pakistan.',
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
    'Pakistan software development',
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
  icons: { icon: '/favicon.svg' },
  alternates: {
    canonical: 'https://twobitdigital.com',
  },
  openGraph: {
    title: 'Two Bit Digital — SaaS Development & AI Engineering Studio',
    description:
      'Building mission-critical digital systems for regulated markets. End-to-end SaaS platforms, AI engineering, and secure infrastructure across the UK, US, Australia, and Pakistan.',
    url: 'https://twobitdigital.com',
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
    title: 'Two Bit Digital — SaaS Development & AI Engineering Studio',
    description:
      'Building mission-critical digital systems for regulated markets across the UK, US, Australia, and Pakistan.',
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
      </head>
      <body className={inter.variable}>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}

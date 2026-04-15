import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'Two Bit Digital — SaaS Development & AI Engineering Studio',
  description:
    'Two Bit Digital is a SaaS development and AI engineering studio. We design, build, and deploy next-generation platforms for enterprises, startups, and government bodies across the UK and Pakistan.',
  keywords: [
    'SaaS development', 'AI engineering', 'Next.js', 'UK tech studio',
    'government digital contracts', 'web development', 'TypeScript',
  ],
  metadataBase: new URL('https://twobitdigital.com'),
  openGraph: {
    title: 'Two Bit Digital — SaaS Development & AI Engineering Studio',
    description: 'We build production-grade digital systems for enterprises, startups, and government bodies.',
    url: 'https://twobitdigital.com',
    siteName: 'Two Bit Digital',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  )
}

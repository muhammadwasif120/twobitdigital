import type { MetadataRoute } from 'next'
import { insights } from '@/lib/insights'
import { services } from '@/lib/services'

const BASE = 'https://www.twobitdigital.com'
const SITE_LAST_UPDATED = '2026-11-18'

const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '',                                priority: 1.0,  changeFrequency: 'weekly'  },
  { path: '/crms',                           priority: 0.95, changeFrequency: 'monthly' },
  { path: '/sites',                          priority: 0.85, changeFrequency: 'monthly' },
  { path: '/markets/pakistan',               priority: 0.95, changeFrequency: 'monthly' },
  { path: '/markets/uk',                     priority: 0.95, changeFrequency: 'monthly' },
  { path: '/markets/us',                     priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/about',                          priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/contact',                        priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/services',                       priority: 0.95, changeFrequency: 'monthly' },
  { path: '/work',                           priority: 0.85, changeFrequency: 'monthly' },
  { path: '/products',                       priority: 0.85, changeFrequency: 'monthly' },
  { path: '/products/trade-os',              priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/starkvault',                     priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/partners/supabase',              priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/partners/meta',                  priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/partners/google-cloud',          priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/launch',                         priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/launch/how-it-works',            priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/launch/what-ships',              priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/launch/pricing',                 priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/launch/tech-stack',              priority: 0.7,  changeFrequency: 'monthly' },
  { path: '/launch/case-studies',            priority: 0.85, changeFrequency: 'monthly' },
  { path: '/launch/case-studies/tikkit-x',   priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/launch/case-studies/averon-legal', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/launch/faq',                     priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/law-firm-websites-pakistan',     priority: 0.85, changeFrequency: 'monthly' },
  { path: '/insights',                       priority: 0.9,  changeFrequency: 'weekly'  },
  { path: '/tools',                          priority: 0.85, changeFrequency: 'monthly' },
  { path: '/tools/url-shortener',            priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/tools/qr-code-generator',        priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/tools/excel-to-pdf',             priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/tools/pdf-to-excel',             priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/tools/pdf-editor',               priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/media-kit',                      priority: 0.6,  changeFrequency: 'monthly' },
  { path: '/privacy',                        priority: 0.3,  changeFrequency: 'yearly'  },
  { path: '/terms',                          priority: 0.3,  changeFrequency: 'yearly'  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(SITE_LAST_UPDATED)

  return [
    ...pages.map((p) => ({
      url:             `${BASE}${p.path}`,
      lastModified:    now,
      changeFrequency: p.changeFrequency,
      priority:        p.priority,
    })),
    ...services.map((s) => ({
      url:             `${BASE}/services/${s.slug}`,
      lastModified:    now,
      changeFrequency: 'monthly' as const,
      priority:        0.9,
    })),
    ...insights.map((post) => ({
      url:             `${BASE}/insights/${post.slug}`,
      lastModified:    new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority:        0.7,
    })),
  ]
}

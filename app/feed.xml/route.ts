/**
 * RSS 2.0 Feed — Two Bit Digital Insights
 * ─────────────────────────────────────────────────────────────────────────────
 * Served at: https://twobitdigital.com/feed.xml
 *
 * Includes all insight articles with:
 *   - Correct RFC 822 pubDate derived from publishedAt (ISO date)
 *   - dc:creator (Dublin Core author)
 *   - category element per article
 *   - guid as the canonical article URL (isPermaLink="true")
 *   - description as the article excerpt
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextResponse } from 'next/server'
import { insights }     from '@/lib/insights'

const SITE_URL   = 'https://twobitdigital.com'
const SITE_NAME  = 'Two Bit Digital'
const FEED_TITLE = 'Two Bit Digital Insights'
const FEED_DESC  = 'Technical analysis, industry perspective, and hard-won lessons from building software for regulated markets. Covering SaaS architecture, AI integration, legal technology, event tech, and UK government digital procurement.'
const AUTHOR     = 'Muhammad Wasif'
const LANGUAGE   = 'en-gb'

/** Convert ISO date string (YYYY-MM-DD) to RFC 822 date format for RSS pubDate */
function toRFC822(iso: string): string {
  const d = new Date(`${iso}T12:00:00.000Z`)
  return d.toUTCString()
}

/** Escape XML special characters in text content */
function xmlEscape(str: string): string {
  return str
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&apos;')
}

export async function GET() {
  const buildDate = toRFC822(new Date().toISOString().slice(0, 10))

  const items = insights
    .map((post) => {
      const url         = `${SITE_URL}/insights/${post.slug}`
      const pubDate     = toRFC822(post.publishedAt)
      const description = xmlEscape(post.excerpt)
      const title       = xmlEscape(post.title)
      const category    = xmlEscape(post.category)
      const tags        = post.tags.map((t) => `    <category>${xmlEscape(t)}</category>`).join('\n')

      return `  <item>
    <title>${title}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <description>${description}</description>
    <pubDate>${pubDate}</pubDate>
    <dc:creator>${AUTHOR}</dc:creator>
    <category>${category}</category>
${tags}
  </item>`
    })
    .join('\n\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
>
  <channel>
    <title>${xmlEscape(FEED_TITLE)}</title>
    <link>${SITE_URL}/insights</link>
    <description>${xmlEscape(FEED_DESC)}</description>
    <language>${LANGUAGE}</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <managingEditor>sales@twobitdigital.com (${AUTHOR})</managingEditor>
    <webMaster>sales@twobitdigital.com (${SITE_NAME})</webMaster>
    <copyright>© ${new Date().getFullYear()} Two Bit Digital Ltd. All rights reserved.</copyright>
    <ttl>1440</ttl>

${items}

  </channel>
</rss>`

  return new NextResponse(rss, {
    status:  200,
    headers: {
      'Content-Type':  'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}

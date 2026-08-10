/**
 * IndexNow Submission Script — Two Bit Digital
 * ─────────────────────────────────────────────────────────────────────────────
 * Runs automatically after every `next build` via the `postbuild` npm hook.
 * Submits all insight article URLs to IndexNow, instantly notifying Bing,
 * DuckDuckGo, Yandex, and other participating engines.
 *
 * To add new articles: add their slug to INSIGHT_SLUGS below.
 * To run manually: node scripts/indexnow-submit.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 */

const HOST        = 'twobitdigital.com'
const KEY         = '109bbd99fac314c6ee680ec105fdc6f3'
const KEY_URL     = `https://${HOST}/${KEY}.txt`
const INDEXNOW_API = 'https://api.indexnow.org/indexnow'

// ── All insight slugs — add new ones here as articles are published ──────────
const INSIGHT_SLUGS = [
  // Pillar 1: AI & Custom Software
  'what-are-ai-workflows',
  'custom-software-vs-off-the-shelf',
  'how-to-build-an-ai-automation-strategy',
  'what-is-a-rag-system',
  'hidden-cost-of-manual-business-processes',

  // Pillar 2: Event Technology / Tikkit X
  'event-management-software-guide-2025',
  'offline-qr-verification-event-ticketing',
  'tikkit-x-event-management-pakistan',
  'how-to-run-a-paperless-event-pakistan',

  // Pillar 3: Legal Technology
  'law-firm-digital-transformation-guide',
  'cpr-part-47-compliance-software',
  'law-firm-client-portal-guide',
  'law-firm-case-file-digitisation',
  'law-firm-employee-management-software',
  'end-to-end-legal-tech-platform',

  // Existing articles
  'how-to-choose-saas-development-agency-uk',
  'ai-integration-regulated-industries',
  'winning-uk-government-digital-contracts',

  // Pillar 4: Two Bit Digital Brand
  'what-is-a-saas-development-studio',
  'inside-two-bit-digital-ai-engineering-process',
  'building-averon-legal-systems-case-study',
  'ai-integration-vs-ai-native-software',
  'regtech-compliance-software-regulated-industries',

  // Pakistan Law Firm series
  'ykc-legal-law-firm-website-pakistan',
  'law-firm-website-pakistan-guide',
  'law-firm-website-cost-pakistan',
  'what-law-firm-website-needs-pakistan',
  'why-pakistani-lawyers-need-website',

  // Trade OS series
  'trade-os-commodity-trading-platform',
  'why-spreadsheets-fail-commodity-trading',
  'tamper-evident-audit-trail-commodity-trading',
  'agri-commodity-erp-pakistan',
  'multi-currency-commodity-trading-software',
  'commodity-trading-erp-software-guide',
  'commodity-trading-broker-commission-management',
  'warehouse-stock-management-commodity-trading',
  'export-compliance-software-pakistan',
  'commodity-trading-erp-multi-entity',
]

// ── Build the full URL list ──────────────────────────────────────────────────
const urlList = [
  `https://${HOST}/`,
  `https://${HOST}/insights`,
  ...INSIGHT_SLUGS.map(slug => `https://${HOST}/insights/${slug}`),
]

// ── Submit to IndexNow ───────────────────────────────────────────────────────
async function submit() {
  console.log(`\n🔍 IndexNow — submitting ${urlList.length} URLs to ${INDEXNOW_API}`)
  console.log(`   Host:   ${HOST}`)
  console.log(`   Key:    ${KEY}`)
  console.log(`   URLs:   ${urlList.length}\n`)

  try {
    const res = await fetch(INDEXNOW_API, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host:        HOST,
        key:         KEY,
        keyLocation: KEY_URL,
        urlList,
      }),
    })

    if (res.status === 200) {
      console.log('✅ IndexNow: All URLs accepted (200 OK)')
    } else if (res.status === 202) {
      console.log('✅ IndexNow: URLs received, processing async (202 Accepted)')
    } else if (res.status === 422) {
      console.warn('⚠️  IndexNow: One or more URLs malformed (422) — check slugs')
    } else if (res.status === 429) {
      console.warn('⚠️  IndexNow: Rate limited (429) — will retry on next deploy')
    } else {
      console.warn(`⚠️  IndexNow: Unexpected response (${res.status})`)
    }

    // Also submit directly to Bing for fastest indexing
    const bingRes = await fetch('https://www.bing.com/indexnow', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host:        HOST,
        key:         KEY,
        keyLocation: KEY_URL,
        urlList,
      }),
    })

    if (bingRes.status === 200 || bingRes.status === 202) {
      console.log('✅ Bing IndexNow: Direct submission accepted')
    } else {
      console.warn(`⚠️  Bing IndexNow: Response ${bingRes.status}`)
    }

  } catch (err) {
    // Never fail the build — IndexNow errors are non-critical
    console.warn('⚠️  IndexNow submission failed (non-critical):', err.message)
  }

  console.log('\n📋 URLs submitted:')
  urlList.forEach(url => console.log(`   ${url}`))
  console.log('')
}

submit()

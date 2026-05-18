/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Canonical domain enforcement ────────────────────────────────────────────
  // Permanently redirect www.twobitdigital.com → twobitdigital.com.
  // Eliminates www duplicate pages from Google's index, consolidates crawl
  // budget, and fixes redirect errors caused by www URLs in GSC.
  async redirects() {
    return [
      {
        source:      '/:path*',
        has:         [{ type: 'host', value: 'www.twobitdigital.com' }],
        destination: 'https://twobitdigital.com/:path*',
        permanent:   true,   // 308 — tells Google to transfer all signals
      },
    ]
  },

  // ── Trailing-slash normalisation ────────────────────────────────────────────
  // Prevents /insights/ and /insights being treated as separate URLs.
  trailingSlash: false,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'X-Frame-Options',            value: 'DENY' },
          { key: 'X-XSS-Protection',           value: '1; mode=block' },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',         value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig

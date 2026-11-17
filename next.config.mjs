/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Trailing-slash normalisation ────────────────────────────────────────────
  // Prevents /insights/ and /insights being treated as separate URLs.
  trailingSlash: false,

  async redirects() {
    return [
      { source: '/contact-us',                  destination: '/contact',                          permanent: true },
      { source: '/customer-support',            destination: '/contact',                          permanent: true },
      { source: '/business-consultation',       destination: '/services',                         permanent: true },
      { source: '/administrative-work',         destination: '/services',                         permanent: true },
      { source: '/global-procurement-solutions',destination: '/services/government-digital',      permanent: true },
      { source: '/products/tikkit-x',           destination: '/launch/case-studies/tikkit-x',     permanent: true },
      { source: '/products/averon-legal-systems',destination: '/launch/case-studies/averon-legal',permanent: true },
      { source: '/products/terra-core',         destination: '/products',                         permanent: true },
    ]
  },

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

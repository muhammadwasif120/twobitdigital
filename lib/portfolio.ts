export type Crm = {
  name:     string
  image?:   string
  industry: string
  tagline:  string
  desc:     string
  features: string[]
  demo?:    string
}

export const crms: Crm[] = [
  { name: 'FMCG Distribution CRM', image: '/screens/fmcg-crm.webp', industry: 'FMCG & Distribution', tagline: "From booker's order to cheque in the bank.",
    desc: 'Distribution management for consumer-goods distributors: invoicing, bookers and commissions, batch and expiry stock, dispatch, receivables, returns and P&L, with a customer ordering portal and public tracking links.',
    features: ['Sale invoicing', 'Bookers & commissions', 'Batch / expiry', 'Receivables', 'Order tracking'], demo: 'https://fmcg-pro-crm.vercel.app/login' },
  { name: 'Textile Pro CRM', image: '/screens/textile-pro-crm.webp', industry: 'Textile & Garment Export', tagline: 'Order to shipment, with traceability.',
    desc: 'Planning, production, purchasing, warehouse, packaging, export documents, cheques, commissions and public order tracking in one system for textile exporters and mills.',
    features: ['Production planning', 'Export documents', 'Traceability', 'Cheques', 'Warehouse'], demo: 'https://textile-pro-crm.vercel.app' },
  { name: 'Academy+', image: '/screens/academy-plus.webp', industry: 'Education', tagline: 'Run your academy from one screen.',
    desc: 'Students, teachers, batches, attendance, fees with receipts, exams and report cards, timetable, ID cards and teacher pay for schools and tuition academies. Multi-branch, with role-based logins.',
    features: ['Attendance', 'Fees & receipts', 'Exams & report cards', 'Timetable', 'Multi-branch'], demo: 'https://academyplus.app' },
  { name: 'PackLine CRM', industry: 'Packaging & Printing', tagline: 'One record, from inquiry to paid sale.',
    desc: 'Inquiry to lead to sale pipeline for packaging exporters. Issuing an invoice promotes the lead; confirmed payment creates the sale and the client and counts toward the agent target.',
    features: ['Inquiry pipeline', 'Invoices', 'Agent targets', 'Clients & orders'] },
  { name: 'LPG Distribution CRM', industry: 'Energy & LPG', tagline: 'Retire the paper delivery register.',
    desc: 'Customer ledgers, digitised deliveries, cylinder inventory by size, drivers, vehicles and supplier purchases for LPG distributors.',
    features: ['Customer ledgers', 'Deliveries', 'Cylinder stock', 'Drivers & vehicles'] },
  { name: 'Cars OS', image: '/screens/cars-os.webp', industry: 'Car Rental & Fleet', tagline: 'Fleet, rentals and receivables in one place.',
    desc: 'Vehicles, rental agreements with handover and return, billing runs, credit and debit notes, payments, calendar and costs. Works as an offline-capable PWA with a mobile app.',
    features: ['Rental agreements', 'Billing runs', 'Handover / return', 'Mobile app'], demo: 'https://cars-os-six.vercel.app/demo' },
  { name: 'Trade OS', image: '/screens/trade-os.webp', industry: 'Commodity Trading & Export', tagline: 'Commodity trading with the books attached.',
    desc: 'Contracts, bag stock, brokers, claims, account ageing, transit-outstanding and FX forward cover for trading and export houses.',
    features: ['Contracts', 'Bag stock', 'Brokers & claims', 'Account ageing', 'FX cover'], demo: 'https://sims-demo-neon.vercel.app' },
  { name: 'Averon Legal Systems', industry: 'Legal (UK costs lawyers)', tagline: 'Case management for CPR Part 47 / 36 matters.',
    desc: 'Matter management with partner, supervisor and fee-earner dashboards, offers and finance for UK costs law firms.',
    features: ['Matters', 'Role dashboards', 'Offers', 'Finance'] },
  { name: 'Business OS', industry: 'Multi-brand Companies', tagline: 'One login for sales, SEO, marketing and finance.',
    desc: 'Command centre, task chains with QA and approvals, quotes-to-cash CRM, SEO attribution, KPIs, P&L and team management for companies running several brands.',
    features: ['Task chains', 'Quotes to cash', 'SEO tracking', 'KPIs & P&L'] },
]

export type Site = { name: string; image?: string; sector: string; desc: string; href: string }

export const sites: Site[] = [
  { name: 'Marksntrends', image: '/screens/marksntrends.webp', sector: 'Media & Consultancy', desc: 'CMS-driven corporate site with advisors, blog and admin dashboard.', href: 'https://marksntrends.com' },
  { name: 'Meridian Textiles', image: '/screens/meridian-textiles.webp', sector: 'Textile Export', desc: 'Marketing site with customer portal and admin.', href: 'https://meridiantextiles.com' },
  { name: 'YKC Legal', image: '/screens/ykc-legal.webp', sector: 'Law Firm', desc: 'Practice areas, team, reported judgements and case search.', href: 'https://ykclegal.org' },
  { name: 'Media City Qatar', image: '/screens/media-city-qatar.webp', sector: 'Media', desc: 'Brand site for an independent media ecosystem, with events.', href: 'https://mediacityqatar.com' },
  { name: 'Fine Apparels', image: '/screens/fine-apparels.webp', sector: 'Apparel Manufacturing', desc: 'Capabilities, facility, process and portfolio.', href: 'https://fineapparels.co' },
  { name: 'Eagle Vogue', image: '/screens/eagle-vogue.webp', sector: 'E-commerce', desc: 'Leather storefront on Shopify with 3D product views and fit finder.', href: 'https://eagle-vogue.vercel.app' },
  { name: 'HAVN Studios', image: '/screens/havn-studios.webp', sector: 'Creative Studio', desc: 'Immersive 3D and motion site with a Sanity CMS.', href: 'https://havn-studios.vercel.app' },
  { name: 'Explore St. Louis', image: '/screens/explore-st-louis.webp', sector: 'Tourism', desc: 'Destination site with events, hotels, neighbourhoods, search and maps.', href: 'https://explore-stl.vercel.app' },
  { name: 'Lazy Bird Rentals', image: '/screens/lazy-bird-rentals.webp', sector: 'Equipment Rental', desc: 'Camera and lighting hire catalogue.', href: 'https://lazybird-rentals.vercel.app' },
  { name: 'CandyXWorld', image: '/screens/candyxworld.webp', sector: 'E-commerce / Directory', desc: 'Browse candies by category, region and dietary needs.', href: 'https://candyxworld.vercel.app' },
  { name: 'Black Mark Securities', image: '/screens/black-mark-securities.webp', sector: 'Security & CCTV', desc: 'Lead-generation site with assessment booking.', href: 'https://black-mark-securities.vercel.app' },
]

const gold = '#f5c518'

const paths = {
  eye:      <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
  sliders:  <><path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1" /><circle cx="15" cy="6" r="2" /><circle cx="9" cy="12" r="2" /><circle cx="17" cy="18" r="2" /></>,
  rocket:   <><path d="M12 3c3 2 5 5 5 9l-2 4H9l-2-4c0-4 2-7 5-9Z" /><circle cx="12" cy="10" r="1.6" /><path d="M9 16l-2 4M15 16l2 4M12 17v4" /></>,
  growth:   <><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  receipt:  <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" /><path d="M9 8h6M9 12h6" /></>,
  shield:   <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  devices:  <><rect x="3" y="4" width="13" height="10" rx="2" /><rect x="14" y="9" width="7" height="12" rx="2" /><path d="M7 18h5" /></>,
  code:     <><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m14 5-4 14" /></>,
  sparkles: <><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="M19 16l.7 1.8L21.5 18.5l-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7L19 16Z" /></>,
  link:     <><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></>,
}

export type IconName = keyof typeof paths

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

export function IconTile({ name, size = 46 }: { name: IconName; size?: number }) {
  return (
    <span style={{
      width: size, height: size, borderRadius: 12, flexShrink: 0, color: gold,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: 'rgba(245,197,24,0.09)', border: '1px solid rgba(245,197,24,0.25)',
    }}>
      <Icon name={name} size={Math.round(size * 0.48)} />
    </span>
  )
}

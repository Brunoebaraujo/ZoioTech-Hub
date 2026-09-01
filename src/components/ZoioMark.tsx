export function ZoioMark({ size = 42 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="ZoioTech">
      <defs>
        <linearGradient id="zt" x1="6" y1="5" x2="42" y2="43" gradientUnits="userSpaceOnUse">
          <stop stopColor="#42C8FF" />
          <stop offset="1" stopColor="#A35CFF" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="14" fill="#0B1730" stroke="url(#zt)" strokeWidth="1.5" />
      <path d="M14 15H34L14.5 33H34" stroke="url(#zt)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="2.2" fill="#8EF6FF" />
    </svg>
  )
}

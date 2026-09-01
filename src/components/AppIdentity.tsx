import {
  BookOpen,
  TimerReset,
  Triangle,
  Compass,
  BarChart3,
  Dices,
  Target,
  Sprout,
  Sparkles,
  Languages,
  Box,
  Waves,
  ClipboardCheck,
  type LucideIcon,
} from 'lucide-react'
import type { AppIconKey } from '../types/app'

const icons: Record<AppIconKey, LucideIcon> = {
  study: BookOpen,
  fasting: TimerReset,
  duat: Triangle,
  quest: Compass,
  tco: BarChart3,
  vtt: Dices,
  missions: Target,
  farm: Sprout,
  kids: Sparkles,
  language: Languages,
  cube: Box,
  oasis: Waves,
  assessment: ClipboardCheck,
}

export function AppIdentity({
  icon,
  accent,
  iconUrl,
  alt,
}: {
  icon: AppIconKey
  accent: string
  iconUrl?: string
  alt?: string
}) {
  const Icon = icons[icon]

  return (
    <div className="app-identity" style={{ '--app-accent': accent } as React.CSSProperties}>
      {iconUrl ? (
        <img
          src={iconUrl}
          alt={alt ?? ''}
          width={34}
          height={34}
          loading="lazy"
          decoding="async"
          style={{ width: 34, height: 34, objectFit: 'contain', borderRadius: 8 }}
        />
      ) : (
        <Icon size={27} strokeWidth={1.8} />
      )}
    </div>
  )
}

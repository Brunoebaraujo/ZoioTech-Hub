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

export function AppIdentity({ icon, accent }: { icon: AppIconKey; accent: string }) {
  const Icon = icons[icon]
  return (
    <div className="app-identity" style={{ '--app-accent': accent } as React.CSSProperties}>
      <Icon size={27} strokeWidth={1.8} />
    </div>
  )
}

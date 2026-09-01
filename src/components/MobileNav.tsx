import { Activity, Home, LayoutGrid, Settings } from 'lucide-react'

export type MobileTab = 'home' | 'apps' | 'activity' | 'settings'

export function MobileNav({ active, onChange }: { active: MobileTab; onChange: (tab: MobileTab) => void }) {
  const items = [
    { key: 'home' as const, label: 'Home', Icon: Home },
    { key: 'apps' as const, label: 'Apps', Icon: LayoutGrid },
    { key: 'activity' as const, label: 'Atividade', Icon: Activity },
    { key: 'settings' as const, label: 'Config', Icon: Settings },
  ]
  return (
    <nav className="mobile-nav">
      {items.map(({ key, label, Icon }) => (
        <button key={key} className={active === key ? 'active' : ''} onClick={() => onChange(key)}>
          <Icon size={19} /><span>{label}</span>
        </button>
      ))}
    </nav>
  )
}

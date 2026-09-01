import { BriefcaseBusiness, Dices, FlaskConical, Gamepad2, Home, Settings, UserRound, UsersRound } from 'lucide-react'
import type { AppCategory } from '../types/app'
import { ZoioMark } from './ZoioMark'

export type NavKey = 'all' | AppCategory

const items: { key: NavKey; label: string; icon: typeof Home }[] = [
  { key: 'all', label: 'Home', icon: Home },
  { key: 'family', label: 'Família', icon: UsersRound },
  { key: 'personal', label: 'Pessoal', icon: UserRound },
  { key: 'games', label: 'Games', icon: Gamepad2 },
  { key: 'rpg', label: 'RPG', icon: Dices },
  { key: 'work', label: 'Trabalho', icon: BriefcaseBusiness },
  { key: 'lab', label: 'Lab', icon: FlaskConical },
]

export function Sidebar({ active, onChange }: { active: NavKey; onChange: (key: NavKey) => void }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <ZoioMark />
        <div><strong>ZoioTech</strong><span>Control Center</span></div>
      </div>
      <nav className="side-nav">
        {items.map(({ key, label, icon: Icon }) => (
          <button key={key} className={active === key ? 'active' : ''} onClick={() => onChange(key)}>
            <Icon size={19} /> <span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-lab-card">
        <div className="mini-orb">Z</div>
        <strong>Build. Create. Play. Grow.</strong>
        <span>Tudo conectado em um só lugar.</span>
      </div>
      <button className="settings-button"><Settings size={18} /> Configurações</button>
    </aside>
  )
}

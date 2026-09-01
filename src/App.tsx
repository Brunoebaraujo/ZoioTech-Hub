import { Bell, Search, UserCircle2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ActivityPanel } from './components/ActivityPanel'
import { AppCard } from './components/AppCard'
import { Hero } from './components/Hero'
import { KpiPanel } from './components/KpiPanel'
import { MobileNav, type MobileTab } from './components/MobileNav'
import { Sidebar, type NavKey } from './components/Sidebar'
import { ZoioMark } from './components/ZoioMark'
import { apps, CATEGORY_LABELS, getKpis } from './data/apps'
import type { AppCategory, AppStatus } from './types/app'

const categories: { key: NavKey; label: string }[] = [
  { key: 'all', label: 'Todos' },
  ...Object.entries(CATEGORY_LABELS).map(([key, label]) => ({ key: key as AppCategory, label })),
]

const statuses: { key: 'all' | AppStatus; label: string }[] = [
  { key: 'all', label: 'Todos' },
  { key: 'online', label: 'Online' },
  { key: 'development', label: 'Desenvolvimento' },
  { key: 'lab', label: 'Lab' },
]

export default function App() {
  const [category, setCategory] = useState<NavKey>('all')
  const [status, setStatus] = useState<'all' | AppStatus>('all')
  const [query, setQuery] = useState('')
  const [mobileTab, setMobileTab] = useState<MobileTab>('home')
  const kpis = getKpis()

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return apps.filter((app) => {
      if (category !== 'all' && !app.categories.includes(category)) return false
      if (status !== 'all' && app.status !== status) return false
      if (!normalized) return true
      return [app.name, app.description, ...app.tags, ...app.categories.map((c) => CATEGORY_LABELS[c])]
        .join(' ')
        .toLowerCase()
        .includes(normalized)
    })
  }, [category, status, query])

  return (
    <div className="app-shell">
      <Sidebar active={category} onChange={setCategory} />

      <div className="workspace">
        <header className="topbar">
          <div className="mobile-brand"><ZoioMark size={34} /><div><strong>ZoioTech</strong><span>Control Center</span></div></div>
          <label className="search-box">
            <Search size={18} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar apps, projetos, tags..." />
          </label>
          <div className="profile-actions">
            <button className="icon-button notification" aria-label="Notificações"><Bell size={18} /><span /></button>
            <button className="profile-button" aria-label="Perfil"><UserCircle2 size={23} /><span>Bruno</span></button>
          </div>
        </header>

        <div className="mobile-search-row">
          <label className="search-box"><Search size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar apps..." /></label>
        </div>

        <main className="content-grid">
          <section className="main-column">
            {(mobileTab === 'home' || mobileTab === 'apps') && <Hero />}
            <KpiPanel {...kpis} compact />

            {(mobileTab === 'home' || mobileTab === 'apps' || mobileTab === 'settings') && (
              <>
                <div className="chip-row category-chips">
                  {categories.map((item) => <button key={item.key} onClick={() => setCategory(item.key)} className={category === item.key ? 'active' : ''}>{item.label}</button>)}
                </div>
                <div className="desktop-status-row">
                  {statuses.map((item) => <button key={item.key} onClick={() => setStatus(item.key)} className={status === item.key ? 'active' : ''}>{item.label}</button>)}
                </div>
                <div className="section-heading"><div><span className="section-kicker">APLICAÇÕES</span><h2>{category === 'all' ? 'Todos os projetos' : CATEGORY_LABELS[category]}</h2></div><span>{filtered.length} de {apps.length}</span></div>
                <div className="app-grid">
                  {filtered.map((app) => <AppCard key={app.id} app={app} />)}
                </div>
                {filtered.length === 0 && <div className="empty-state">Nenhum projeto encontrado com esses filtros.</div>}
              </>
            )}

            {(mobileTab === 'home' || mobileTab === 'activity') && <div className="mobile-activity"><ActivityPanel /></div>}
          </section>

          <aside className="right-rail">
            <ActivityPanel />
            <KpiPanel {...kpis} />
          </aside>
        </main>
      </div>

      <MobileNav active={mobileTab} onChange={setMobileTab} />
    </div>
  )
}

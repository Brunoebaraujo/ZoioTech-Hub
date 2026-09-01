import { ExternalLink, Github } from 'lucide-react'
import { CATEGORY_LABELS } from '../data/apps'
import type { AppEntry } from '../types/app'
import { AppIdentity } from './AppIdentity'
import { StatusBadge } from './StatusBadge'

export function AppCard({ app }: { app: AppEntry }) {
  return (
    <article className="app-card" style={{ '--app-accent': app.accent } as React.CSSProperties}>
      <div className="app-card-glow" />
      <header className="app-card-header">
        <AppIdentity
          icon={app.icon}
          accent={app.accent}
          iconUrl={app.iconUrl}
          alt={`Ícone do aplicativo ${app.name}`}
        />
        <div className="app-title-wrap">
          <h3>{app.name}</h3>
          <span>{app.categories.map((c) => CATEGORY_LABELS[c]).join(' · ')}</span>
        </div>
      </header>
      <p className="app-description">{app.description}</p>
      <div className="app-card-footer">
        <StatusBadge status={app.status} />
        <div className="app-actions">
          {app.appUrl ? (
            <a className="open-button" href={app.appUrl} target="_blank" rel="noreferrer">
              Abrir <ExternalLink size={15} />
            </a>
          ) : (
            <span className="open-button disabled">Sem link</span>
          )}
          {app.githubUrl && (
            <a className="icon-button" href={app.githubUrl} target="_blank" rel="noreferrer" aria-label={`GitHub de ${app.name}`}>
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

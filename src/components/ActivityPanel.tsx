import { Activity } from 'lucide-react'
import { activity } from '../data/activity'

export function ActivityPanel() {
  return (
    <section className="right-panel activity-panel">
      <div className="panel-title"><span><Activity size={17} /> Atividade recente</span><small>dados locais</small></div>
      <div className="activity-list">
        {activity.map((item) => (
          <div className="activity-row" key={item.id}>
            <span className={`activity-indicator tone-${item.tone}`} />
            <div><strong>{item.app}</strong><p>{item.text}</p></div>
            <time>{item.when}</time>
          </div>
        ))}
      </div>
    </section>
  )
}

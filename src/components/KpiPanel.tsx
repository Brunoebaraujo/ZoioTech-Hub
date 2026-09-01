import { Boxes, FlaskConical, RadioTower, Wrench } from 'lucide-react'

export function KpiPanel({ total, online, development, lab, compact = false }: { total: number; online: number; development: number; lab: number; compact?: boolean }) {
  const data = [
    { label: 'Total', value: total, className: 'kpi-primary', Icon: Boxes },
    { label: 'Online', value: online, className: 'kpi-online', Icon: RadioTower },
    { label: 'Desenvolvimento', value: development, className: 'kpi-dev', Icon: Wrench },
    { label: 'Lab', value: lab, className: 'kpi-lab', Icon: FlaskConical },
  ]
  return (
    <section className={compact ? 'kpi-strip' : 'right-panel kpi-panel'}>
      {!compact && <div className="panel-title"><span>KPIs</span><small>catálogo local</small></div>}
      <div className={compact ? 'kpi-strip-inner' : 'kpi-grid'}>
        {data.map(({ label, value, className, Icon }) => (
          <div className={`kpi-card ${className}`} key={label}>
            <Icon size={17} />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

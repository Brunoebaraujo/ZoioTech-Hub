import { STATUS_LABELS } from '../data/apps'
import type { AppStatus } from '../types/app'

export function StatusBadge({ status }: { status: AppStatus }) {
  return (
    <span className={`status-badge status-${status}`}>
      <span className="status-dot" />
      {STATUS_LABELS[status]}
    </span>
  )
}

export interface ActivityItem {
  id: string
  app: string
  text: string
  when: string
  tone: 'online' | 'development' | 'lab'
}

// Dados locais temporários. Serão substituídos por atividade real do GitHub.
export const activity: ActivityItem[] = [
  { id: '1', app: 'Estudos Crianças', text: 'Conteúdo e dashboard revisados', when: 'recente', tone: 'online' },
  { id: '2', app: 'Guerras Egípcias', text: 'Motor e multiplayer em evolução', when: 'recente', tone: 'online' },
  { id: '3', app: 'CoreShift', text: 'MVP pessoal disponível', when: 'recente', tone: 'online' },
  { id: '4', app: 'TCO Engine', text: 'Fase 1 em desenvolvimento', when: 'em andamento', tone: 'development' },
  { id: '5', app: 'ZoioTech', text: 'Control Center iniciado', when: 'agora', tone: 'development' },
]

export type AppCategory = 'family' | 'personal' | 'games' | 'rpg' | 'work' | 'lab'
export type AppStatus = 'online' | 'development' | 'lab' | 'offline'
export type AppIconKey =
  | 'study'
  | 'fasting'
  | 'duat'
  | 'quest'
  | 'tco'
  | 'vtt'
  | 'missions'
  | 'farm'
  | 'kids'
  | 'language'
  | 'cube'
  | 'oasis'
  | 'assessment'

export interface AppEntry {
  id: string
  name: string
  description: string
  categories: AppCategory[]
  status: AppStatus
  icon: AppIconKey
  accent: string
  tags: string[]
  appUrl?: string
  githubUrl?: string
}

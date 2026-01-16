export interface TabConfig {
  id: string
  name: string
  count?: number
  color?: string
}

export const gridTabs: TabConfig[] = [
  { id: 'bitscale-grid', name: 'Bitscale grid only', color: 'blue' },
  { id: 'user-engagement', name: 'User Engagement...' },
  { id: 'customer-insights', name: 'Customer Insights...' },
  { id: 'audience-interact', name: 'Audience Interact...' },
  { id: 'lead-generation', name: 'Lead Generation...' },
]

export interface ProgressState {
  label: string
  value: number
  status: 'running' | 'paused' | 'completed' | 'error'
}

export const defaultProgressState: ProgressState = {
  label: 'Grid running',
  value: 10,
  status: 'running',
}

export interface CreditState {
  current: number
  total: number
  plan: 'Free' | 'Pro' | 'Enterprise'
}

export const defaultCreditState: CreditState = {
  current: 500,
  total: 500,
  plan: 'Free',
}

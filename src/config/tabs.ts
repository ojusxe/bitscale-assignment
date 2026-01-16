import { LucideIcon } from 'lucide-react'

export interface TabConfig {
  id: string
  name: string
  icon?: LucideIcon
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

export interface StatusConfig {
  id: string
  label: string
  variant: 'success' | 'warning' | 'error' | 'info' | 'default'
  bgColor: string
  textColor: string
  borderColor: string
}

export const statusConfigs: Record<string, StatusConfig> = {
  'Email Found': {
    id: 'email-found',
    label: 'Email Found',
    variant: 'success',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
    borderColor: 'border-green-200',
  },
  'Run condition not met': {
    id: 'condition-not-met',
    label: 'Run condition not met',
    variant: 'warning',
    bgColor: 'bg-transparent',
    textColor: 'text-amber-600',
    borderColor: 'border-transparent',
  },
  'Processing': {
    id: 'processing',
    label: 'Processing',
    variant: 'info',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
  },
  'Failed': {
    id: 'failed',
    label: 'Failed',
    variant: 'error',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
    borderColor: 'border-red-200',
  },
}

export interface ToolbarButton {
  id: string
  label: string
  icon?: LucideIcon
  badge?: number | string
  variant?: 'default' | 'primary' | 'ghost'
  hasDropdown?: boolean
}

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

import { LucideIcon, User, Play, ExternalLink, Mail } from 'lucide-react'

export interface ColumnConfig {
  id: string
  header: string
  accessor: string
  icon?: LucideIcon | 'function'
  minWidth: number
  sortable?: boolean
  filterable?: boolean
  visible?: boolean
  sticky?: boolean
  renderType?: 'text' | 'badge' | 'link' | 'avatar' | 'company' | 'status'
}

export const gridColumns: ColumnConfig[] = [
  {
    id: 'row-number',
    header: '#',
    accessor: 'id',
    minWidth: 40,
    sortable: false,
    sticky: true,
  },
  {
    id: 'checkbox',
    header: '',
    accessor: 'selected',
    minWidth: 40,
    sortable: false,
    sticky: true,
  },
  {
    id: 'play',
    header: '',
    accessor: 'runnable',
    icon: Play,
    minWidth: 40,
    sortable: false,
  },
  {
    id: 'imported-data',
    header: 'Imported Data',
    accessor: 'importedData',
    icon: User,
    minWidth: 180,
    sortable: true,
    filterable: true,
    renderType: 'avatar',
  },
  {
    id: 'last-updated',
    header: 'Last Updated At',
    accessor: 'lastUpdatedAt',
    icon: Play,
    minWidth: 170,
    sortable: true,
    filterable: true,
    renderType: 'text',
  },
  {
    id: 'company-name',
    header: 'Company Name',
    accessor: 'companyName',
    icon: 'function',
    minWidth: 150,
    sortable: true,
    filterable: true,
    renderType: 'company',
  },
  {
    id: 'company-website',
    header: 'Company Website',
    accessor: 'companyWebsite',
    icon: 'function',
    minWidth: 180,
    sortable: true,
    filterable: true,
    renderType: 'link',
  },
  {
    id: 'linkedin-job-url',
    header: 'LinkedIn Job URL',
    accessor: 'linkedinJobUrl',
    icon: 'function',
    minWidth: 180,
    sortable: true,
    filterable: true,
    renderType: 'link',
  },
  {
    id: 'email-waterfall',
    header: 'Email Waterfall',
    accessor: 'emailWaterfall',
    icon: ExternalLink,
    minWidth: 160,
    sortable: true,
    filterable: true,
    renderType: 'status',
  },
]

export const companyLogos: Record<string, { type: 'text' | 'icon' | 'grid'; bg: string; text: string; content?: string }> = {
  'Google': { type: 'text', bg: 'bg-white border', text: 'text-blue-500', content: 'G' },
  'Amazon': { type: 'text', bg: 'bg-white border', text: 'text-slate-800', content: 'a' },
  'LinkedIn': { type: 'text', bg: 'bg-blue-600', text: 'text-white', content: 'in' },
  'Microsoft': { type: 'grid', bg: '', text: '' },
  'TED': { type: 'text', bg: 'bg-red-600', text: 'text-white', content: 'TED' },
  'Unilever': { type: 'text', bg: 'bg-blue-600', text: 'text-white', content: 'U' },
  'Apple': { type: 'icon', bg: 'bg-white border', text: 'text-slate-800' },
}

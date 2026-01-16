export interface ColumnConfig {
  id: string
  header: string
  minWidth: number
  width: number
  resizable?: boolean
}

export const defaultColumns: ColumnConfig[] = [
  { id: 'row-number', header: '', minWidth: 70, width: 70, resizable: false },
  { id: 'imported-data', header: 'Imported Data', minWidth: 140, width: 200, resizable: true },
  { id: 'last-updated', header: 'Last Updated At', minWidth: 140, width: 190, resizable: true },
  { id: 'company-name', header: 'Company Name', minWidth: 120, width: 170, resizable: true },
  { id: 'company-website', header: 'Company Website', minWidth: 140, width: 200, resizable: true },
  { id: 'linkedin-job-url', header: 'LinkedIn Job URL', minWidth: 140, width: 200, resizable: true },
  { id: 'email-waterfall', header: 'Email Waterfall', minWidth: 140, width: 180, resizable: true },
  { id: 'actions', header: '', minWidth: 32, width: 32, resizable: false },
]

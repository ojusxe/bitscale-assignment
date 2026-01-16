"use client"


import { memo, useState } from 'react'
import { GridRow } from '@/lib/mockData'
import { ChevronRight, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { CompanyLogo } from './CompanyLogo'
import { StatusCell } from './StatusCell'
import { NamePill } from './NamePill'
import { ColumnConfig } from './columns'

interface DataGridRowProps {
  row: GridRow
  index: number
  isSelected: boolean
  columnWidths: Record<string, number>
  columns: ColumnConfig[]
}

export const DataGridRow = memo(function DataGridRow({ row, index, isSelected, columnWidths, columns }: DataGridRowProps) {
  const [isHovered, setIsHovered] = useState(false)

  const renderCellContent = (colId: string) => {
    switch (colId) {
      case 'row-number':
        return index + 1
      case 'imported-data':
        return row.importedData.name && <NamePill name={row.importedData.name} isHovered={isHovered} />
      case 'last-updated':
        return row.lastUpdatedAt
      case 'company-name':
        return row.companyName.name && (
          <div className="flex items-center gap-2">
            <CompanyLogo name={row.companyName.name} />
            <span className="text-slate-700 text-[13px] font-normal truncate">{row.companyName.name}</span>
          </div>
        )
      case 'company-website':
        return row.companyWebsite && (
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href={row.companyWebsite} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 cursor-pointer group"
              >
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-500 shrink-0" />
                <span className="text-slate-500 text-[13px] font-normal truncate group-hover:text-blue-600">
                  {row.companyWebsite}
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{row.companyWebsite}</p>
            </TooltipContent>
          </Tooltip>
        )
      case 'linkedin-job-url':
        return row.linkedinJobUrl && (
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href={row.linkedinJobUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 cursor-pointer group"
              >
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-500 shrink-0" />
                <span className="text-slate-500 text-[13px] font-normal truncate group-hover:text-blue-600">
                  {row.linkedinJobUrl}
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{row.linkedinJobUrl}</p>
            </TooltipContent>
          </Tooltip>
        )
      case 'email-waterfall':
        return <StatusCell status={row.emailWaterfall} isHovered={isHovered} />
      case 'actions':
        return <ChevronRight className="h-4 w-4 mx-auto" />
      default:
        return null
    }
  }

  const getCellClassName = (colId: string) => {
    switch (colId) {
      case 'row-number':
        return "border-r border-slate-100 text-center text-slate-400 text-[13px] font-normal"
      case 'imported-data':
      case 'company-name':
      case 'company-website':
      case 'linkedin-job-url':
      case 'email-waterfall':
        return "border-r border-slate-100 px-3 overflow-hidden"
      case 'last-updated':
        return "border-r border-slate-100 px-3 text-slate-500 text-[13px] font-normal truncate"
      case 'actions':
        return "px-1 text-center text-slate-300"
      default:
        return "border-r border-slate-100 px-3 overflow-hidden"
    }
  }

  return (
    <tr
      className={cn(
        'h-(--grid-row-height) border-b border-slate-100 transition-colors',
        isHovered && 'bg-slate-50/70',
        isSelected && 'bg-blue-50/50'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {columns.map((col) => (
        <td
          key={col.id}
          className={getCellClassName(col.id)}
          style={{ width: columnWidths[col.id] }}
        >
          {renderCellContent(col.id)}
        </td>
      ))}
    </tr>
  )
})

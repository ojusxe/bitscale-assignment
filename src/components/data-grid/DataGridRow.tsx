"use client"

import { useState } from 'react'
import { GridRow } from '@/lib/mockData'
import { ChevronRight, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { CompanyLogo } from './CompanyLogo'
import { StatusCell } from './StatusCell'
import { NamePill } from './NamePill'

interface DataGridRowProps {
  row: GridRow
  index: number
  isSelected: boolean
  onSelect: (id: string) => void
  columnWidths: Record<string, number>
}

export function DataGridRow({ row, index, isSelected, onSelect, columnWidths }: DataGridRowProps) {
  const [isHovered, setIsHovered] = useState(false)

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
      {/* Row Number */}
      <td 
        className="border-r border-slate-100 text-center text-slate-400 text-[13px] font-normal"
        style={{ width: columnWidths['row-number'] }}
      >
        {index + 1}
      </td>

      {/* Imported Data - Name Pill */}
      <td 
        className="border-r border-slate-100 px-3 overflow-hidden"
        style={{ width: columnWidths['imported-data'] }}
      >
        {row.importedData.name && (
          <NamePill name={row.importedData.name} isHovered={isHovered} />
        )}
      </td>

      {/* Last Updated At */}
      <td 
        className="border-r border-slate-100 px-3 text-slate-500 text-[13px] font-normal truncate"
        style={{ width: columnWidths['last-updated'] }}
      >
        {row.lastUpdatedAt}
      </td>

      {/* Company Name */}
      <td 
        className="border-r border-slate-100 px-3 overflow-hidden"
        style={{ width: columnWidths['company-name'] }}
      >
        {row.companyName.name && (
          <div className="flex items-center gap-2">
            <CompanyLogo name={row.companyName.name} />
            <span className="text-slate-700 text-[13px] font-normal truncate">{row.companyName.name}</span>
          </div>
        )}
      </td>

      {/* Company Website */}
      <td 
        className="border-r border-slate-100 px-3 overflow-hidden"
        style={{ width: columnWidths['company-website'] }}
      >
        {row.companyWebsite && (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1.5 cursor-pointer group">
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-500 shrink-0" />
                <span className="text-slate-500 text-[13px] font-normal truncate group-hover:text-blue-600">
                  {row.companyWebsite}
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{row.companyWebsite}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </td>

      {/* LinkedIn Job URL */}
      <td 
        className="border-r border-slate-100 px-3 overflow-hidden"
        style={{ width: columnWidths['linkedin-job-url'] }}
      >
        {row.linkedinJobUrl && (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1.5 cursor-pointer group">
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-500 shrink-0" />
                <span className="text-slate-500 text-[13px] font-normal truncate group-hover:text-blue-600">
                  {row.linkedinJobUrl}
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{row.linkedinJobUrl}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </td>

      {/* Email Waterfall */}
      <td 
        className="border-r border-slate-100 px-3 overflow-hidden"
        style={{ width: columnWidths['email-waterfall'] }}
      >
        <StatusCell status={row.emailWaterfall} isHovered={isHovered} />
      </td>

      {/* Actions */}
      <td 
        className="px-1 text-center text-slate-300"
        style={{ width: columnWidths['actions'] }}
      >
        <ChevronRight className="h-4 w-4 mx-auto" />
      </td>
    </tr>
  )
}

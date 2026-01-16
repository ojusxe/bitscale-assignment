"use client"

import { useState, useRef, useCallback } from 'react'
import { mockRows, GridRow } from '@/lib/mockData'
import { ChevronRight, Check, Play, User, Users, ExternalLink, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'

function CompanyLogo({ name }: { name: string }) {
  switch (name) {
    case 'Google':
      return (
        <div className="h-5 w-5 flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" className="h-4 w-4">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </div>
      )
    case 'Amazon':
      return (
        <div className="h-5 w-5 flex items-center justify-center flex-shrink-0">
          <span className="text-[15px] font-bold text-slate-800 italic" style={{ fontFamily: 'Georgia, serif' }}>a</span>
        </div>
      )
    case 'LinkedIn':
      return (
        <div className="h-5 w-5 rounded flex items-center justify-center flex-shrink-0 bg-[#0077B5]">
          <span className="text-[10px] font-bold text-white">in</span>
        </div>
      )
    case 'Microsoft':
      return (
        <div className="h-5 w-5 grid grid-cols-2 gap-[2px] flex-shrink-0 p-[2px]">
          <div className="bg-[#F25022]"></div>
          <div className="bg-[#7FBA00]"></div>
          <div className="bg-[#00A4EF]"></div>
          <div className="bg-[#FFB900]"></div>
        </div>
      )
    case 'TED':
      return (
        <div className="h-5 w-5 rounded flex items-center justify-center flex-shrink-0 bg-[#E62B1E]">
          <span className="text-[8px] font-bold text-white tracking-tight">TED</span>
        </div>
      )
    case 'Unilever':
      return (
        <div className="h-5 w-5 rounded flex items-center justify-center flex-shrink-0 bg-[#1F36C7]">
          <span className="text-[11px] font-bold text-white">U</span>
        </div>
      )
    case 'Apple':
      return (
        <div className="h-5 w-5 flex items-center justify-center flex-shrink-0">
          <svg className="h-4 w-4 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        </div>
      )
    default:
      return (
        <div className="h-5 w-5 rounded flex items-center justify-center flex-shrink-0 bg-slate-200">
          <span className="text-[10px] font-medium text-slate-600">{name.charAt(0)}</span>
        </div>
      )
  }
}

function StatusCell({ status }: { status: string }) {
  if (status === 'Email Found') {
    return (
      <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded px-2 py-1 w-[120px]">
        <div className="h-4 w-4 bg-emerald-500 rounded flex items-center justify-center shrink-0">
          <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
        </div>
        <span className="text-[13px] text-emerald-700 font-normal">Email Found</span>
      </div>
    )
  }

  if (status === 'Run condition not met') {
    return (
      <div className="w-[120px]">
        <span className="text-[13px] text-amber-600 italic font-normal">Run condition not met</span>
      </div>
    )
  }

  return <div className="w-[120px]"><span className="text-[13px] text-slate-500 font-normal">{status}</span></div>
}

interface ColumnConfig {
  id: string
  header: string
  minWidth: number
  width: number
  resizable?: boolean
}

const defaultColumns: ColumnConfig[] = [
  { id: 'row-number', header: '', minWidth: 70, width: 70, resizable: false },
  { id: 'imported-data', header: 'Imported Data', minWidth: 140, width: 200, resizable: true },
  { id: 'last-updated', header: 'Last Updated At', minWidth: 140, width: 190, resizable: true },
  { id: 'company-name', header: 'Company Name', minWidth: 120, width: 170, resizable: true },
  { id: 'company-website', header: 'Company Website', minWidth: 140, width: 200, resizable: true },
  { id: 'linkedin-job-url', header: 'LinkedIn Job URL', minWidth: 140, width: 200, resizable: true },
  { id: 'email-waterfall', header: 'Email Waterfall', minWidth: 140, width: 180, resizable: true },
  { id: 'actions', header: '', minWidth: 32, width: 32, resizable: false },
]

interface ResizeHandleProps {
  columnId: string
  onResize: (columnId: string, delta: number) => void
}

function ResizeHandle({ columnId, onResize }: ResizeHandleProps) {
  const [isResizing, setIsResizing] = useState(false)
  const startXRef = useRef(0)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsResizing(true)
    startXRef.current = e.clientX
    
    const handleMouseMove = (e: MouseEvent) => {
      const delta = e.clientX - startXRef.current
      startXRef.current = e.clientX
      onResize(columnId, delta)
    }
    
    const handleMouseUp = () => {
      setIsResizing(false)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
  }, [columnId, onResize])

  return (
    <div
      className={cn(
        'resize-handle',
        isResizing && 'active'
      )}
      onMouseDown={handleMouseDown}
    />
  )
}

interface DataGridRowProps {
  row: GridRow
  index: number
  isSelected: boolean
  onSelect: (id: string) => void
  columnWidths: Record<string, number>
}

function DataGridRow({ row, index, isSelected, onSelect, columnWidths }: DataGridRowProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <tr
      className={cn(
        'h-[var(--grid-row-height)] border-b border-slate-100 transition-colors',
        isHovered && 'bg-slate-50/70',
        isSelected && 'bg-blue-50/50'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <td className="border-r border-slate-100 text-center text-slate-400 text-[13px] font-normal" style={{ width: columnWidths['row-number'] }}>
        {index + 1}
      </td>
      {/* <td className="border-r border-slate-100 text-center" style={{ width: columnWidths['checkbox'] }}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(row.id)}
          className="h-4 w-4 rounded border-slate-300 cursor-pointer accent-blue-600"
        />
      </td>
      <td className="border-r border-slate-100 text-center" style={{ width: columnWidths['play'] }}>
        <button className="p-1 hover:bg-slate-100 rounded transition-colors">
          <Play className={cn(
            'h-3.5 w-3.5 mx-auto transition-colors',
            isHovered ? 'fill-slate-400 text-slate-400' : 'fill-slate-300 text-slate-300'
          )} />
        </button>
      </td> */}
      <td className="border-r border-slate-100 px-3" style={{ width: columnWidths['imported-data'] }}>
        {row.importedData.name && (
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 rounded-full pl-1.5 pr-3 py-1 transition-colors cursor-pointer w-[140px]">
              <div className="h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                <Users className="h-3.5 w-3.5 text-teal-600" />
              </div>
              <span className="text-slate-700 font-medium text-[13px] truncate">{row.importedData.name}</span>
            </div>
            <ChevronRight className={cn(
              'h-4 w-4 ml-2 transition-all shrink-0 text-slate-300',
              isHovered && 'text-slate-400'
            )} />
          </div>
        )}
      </td>
      <td className="border-r border-slate-100 px-3 text-slate-500 text-[13px] font-normal" style={{ width: columnWidths['last-updated'] }}>
        {row.lastUpdatedAt}
      </td>
      <td className="border-r border-slate-100 px-3" style={{ width: columnWidths['company-name'] }}>
        {row.companyName.name && (
          <div className="flex items-center gap-2">
            <CompanyLogo name={row.companyName.name} />
            <span className="text-slate-700 text-[13px] font-normal">{row.companyName.name}</span>
          </div>
        )}
      </td>
      <td className="border-r border-slate-100 px-3" style={{ width: columnWidths['company-website'] }}>
        {row.companyWebsite && (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1.5 cursor-pointer group">
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-500 flex-shrink-0" />
                <span className="text-slate-500 text-[13px] font-normal truncate max-w-[160px] group-hover:text-blue-600">
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
      <td className="border-r border-slate-100 px-3" style={{ width: columnWidths['linkedin-job-url'] }}>
        {row.linkedinJobUrl && (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1.5 cursor-pointer group">
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-500 flex-shrink-0" />
                <span className="text-slate-500 text-[13px] font-normal truncate max-w-[160px] group-hover:text-blue-600">
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
      <td className="border-r border-slate-100 px-3" style={{ width: columnWidths['email-waterfall'] }}>
        <div className="flex items-center justify-between">
          <StatusCell status={row.emailWaterfall} />
          <ChevronRight className={cn(
            'h-4 w-4 ml-2 transition-all shrink-0 text-slate-300',
            isHovered && 'text-slate-400'
          )} />
        </div>
      </td>
      <td className="px-1 text-center text-slate-300" style={{ width: columnWidths['actions'] }}>
        <ChevronRight className="h-4 w-4 mx-auto" />
      </td>
    </tr>
  )
}

function FunctionIcon() {
  return (
    <span className="text-slate-400 italic text-[15px] font-serif">f</span>
  )
}

export function DataGrid() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
  const [selectAll, setSelectAll] = useState(false)
  const [columns, setColumns] = useState<ColumnConfig[]>(defaultColumns)

  const columnWidths = columns.reduce((acc, col) => {
    acc[col.id] = col.width
    return acc
  }, {} as Record<string, number>)

  const handleResize = useCallback((columnId: string, delta: number) => {
    setColumns(prev => prev.map(col => {
      if (col.id === columnId) {
        const newWidth = Math.max(col.minWidth, col.width + delta)
        return { ...col, width: newWidth }
      }
      return col
    }))
  }, [])

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(mockRows.map(row => row.id)))
    }
    setSelectAll(!selectAll)
  }

  const handleSelectRow = (id: string) => {
    const newSelected = new Set(selectedRows)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedRows(newSelected)
    setSelectAll(newSelected.size === mockRows.length)
  }

  return (
    <TooltipProvider>
      <div className="flex-1 overflow-auto bg-white">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10 bg-slate-50 border-b border-slate-200">
            <tr className="h-[var(--grid-header-height)]">
              <th className="border-r border-slate-200" style={{ width: columnWidths['row-number'] }}>
                <div className="flex items-center justify-center gap-1.5">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="h-4 w-4 rounded border-slate-300 cursor-pointer accent-blue-600"
                  />
                  <Play className="h-3.5 w-3.5 fill-slate-400 text-slate-400" />
                </div>
              </th>
              <th className="px-3 border-r border-slate-200 text-left font-medium text-slate-600 text-[13px] relative resizable" style={{ width: columnWidths['imported-data'], minWidth: defaultColumns[1].minWidth }}>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-teal-100 flex items-center justify-center rounded">
                    <Users className="h-3 w-3 text-teal-600" />
                  </div>
                  <span>Imported Data</span>
                </div>
                <ResizeHandle columnId="imported-data" onResize={handleResize} />
              </th>
              <th className="px-3 border-r border-slate-200 text-left font-medium text-slate-600 text-[13px] relative resizable" style={{ width: columnWidths['last-updated'], minWidth: defaultColumns[2].minWidth }}>
                <div className="flex items-center gap-2">
                  <Play className="h-3.5 w-3.5 fill-slate-400 text-slate-400" />
                  <span>Last Updated At</span>
                </div>
                <ResizeHandle columnId="last-updated" onResize={handleResize} />
              </th>
              <th className="px-3 border-r border-slate-200 text-left font-medium text-slate-600 text-[13px] relative resizable" style={{ width: columnWidths['company-name'], minWidth: defaultColumns[3].minWidth }}>
                <div className="flex items-center gap-2">
                  <FunctionIcon />
                  <span>Company Name</span>
                </div>
                <ResizeHandle columnId="company-name" onResize={handleResize} />
              </th>
              <th className="px-3 border-r border-slate-200 text-left font-medium text-slate-600 text-[13px] relative resizable" style={{ width: columnWidths['company-website'], minWidth: defaultColumns[4].minWidth }}>
                <div className="flex items-center gap-2">
                  <FunctionIcon />
                  <span>Company Website</span>
                </div>
                <ResizeHandle columnId="company-website" onResize={handleResize} />
              </th>
              <th className="px-3 border-r border-slate-200 text-left font-medium text-slate-600 text-[13px] relative resizable" style={{ width: columnWidths['linkedin-job-url'], minWidth: defaultColumns[5].minWidth }}>
                <div className="flex items-center gap-2">
                  <FunctionIcon />
                  <span>LinkedIn Job URL</span>
                </div>
                <ResizeHandle columnId="linkedin-job-url" onResize={handleResize} />
              </th>
              <th className="px-3 border-r border-slate-200 text-left font-medium text-slate-600 text-[13px] relative resizable" style={{ width: columnWidths['email-waterfall'], minWidth: defaultColumns[6].minWidth }}>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-slate-400" />
                  <span>Email Waterfall</span>
                </div>
                <ResizeHandle columnId="email-waterfall" onResize={handleResize} />
              </th>
              <th className="px-1 text-center text-slate-400" style={{ width: columnWidths['actions'] }}>
                <ChevronRight className="h-4 w-4 mx-auto" />
              </th>
            </tr>
          </thead>
          <tbody>
            {mockRows.map((row, idx) => (
              <DataGridRow
                key={row.id}
                row={row}
                index={idx}
                isSelected={selectedRows.has(row.id)}
                onSelect={handleSelectRow}
                columnWidths={columnWidths}
              />
            ))}
          </tbody>
        </table>
      </div>
    </TooltipProvider>
  )
}

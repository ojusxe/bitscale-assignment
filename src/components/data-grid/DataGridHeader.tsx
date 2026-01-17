"use client"

import { Play, Mail, ChevronRight, Calendar1, User2Icon, University } from 'lucide-react'
import { ColumnConfig } from './columns'
import { ResizeHandle } from './ResizeHandle'

function FunctionIcon() {
  return <span className="text-slate-400 italic text-[15px] font-serif">f</span>
}

interface DataGridHeaderProps {
  columns: ColumnConfig[]
  columnWidths: Record<string, number>
  selectAll: boolean
  selectedColumn: string | null
  onSelectAll: () => void
  onSelectColumn: (columnId: string) => void
  onResize: (columnId: string, delta: number) => void
}

export function DataGridHeader({ 
  columns, 
  columnWidths, 
  selectAll,
  selectedColumn,
  onSelectAll,
  onSelectColumn,
  onResize 
}: DataGridHeaderProps) {
  const getColumnIcon = (columnId: string) => {
    switch (columnId) {
      case 'imported-data':
        return (
          <div className="h-7 w-7 flex items-center justify-center rounded-xl">
          </div>
        )
      case 'last-updated':
        return <Calendar1 className="h-4 w-4 text-slate-400" />
      case 'company-name':
      case 'company-website':
      case 'linkedin-job-url':
        return <FunctionIcon />
      case 'email-waterfall':
        return <Mail className="h-4 w-4 text-slate-400" />
      default:
        return null
    }
  }

  return (
    <thead className="sticky top-0 z-10 bg-slate-50 border-b border-slate-200">
      <tr className="h-(--grid-header-height)">
        {columns.map((col) => {
          if (col.id === 'row-number') {
            return (
              <th 
                key={col.id}
                className="border-r border-slate-200"
                style={{ width: columnWidths[col.id] }}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={onSelectAll}
                    className="h-4 w-4 rounded border-slate-300 cursor-pointer accent-blue-600"
                  />
                  <Play className="h-3.5 w-3.5 fill-slate-400 text-slate-400" />
                </div>
              </th>
            )
          }

          if (col.id === 'actions') {
            return (
              <th 
                key={col.id}
                className="px-1 text-center text-slate-400"
                style={{ width: columnWidths[col.id] }}
              >
                <ChevronRight className="h-4 w-4 mx-auto" />
              </th>
            )
          }
          
          return (
            <th 
              key={col.id}
              className={`px-3 border-r border-slate-200 text-left font-semibold text-slate-800 text-sm relative cursor-pointer hover:bg-slate-100 transition-colors ${selectedColumn === col.id ? 'bg-blue-50' : ''}`}
              style={{ width: columnWidths[col.id], minWidth: col.minWidth }}
              onClick={() => onSelectColumn(col.id)}
            >
              <div className="flex items-center gap-2">
                {getColumnIcon(col.id)}
                <span className="truncate">{col.header}</span>
              </div>
              {col.resizable && (
                <ResizeHandle columnId={col.id} onResize={onResize} />
              )}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

"use client"

import { useState, useCallback, useMemo } from 'react'
import { generateRows, TOTAL_ROWS } from '@/lib/mockData'
import { TooltipProvider } from '@/components/ui/tooltip'
import { DataGridHeader, DataGridRow, defaultColumns, ColumnConfig } from './data-grid'

export function DataGrid() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
  const [selectAll, setSelectAll] = useState(false)
  const [columns, setColumns] = useState<ColumnConfig[]>(defaultColumns)

  const allRows = useMemo(() => generateRows(0, TOTAL_ROWS), [])

  const columnWidths = useMemo(() => {
    return columns.reduce((acc, col) => {
      acc[col.id] = col.width
      return acc
    }, {} as Record<string, number>)
  }, [columns])

  const handleResize = useCallback((columnId: string, delta: number) => {
    setColumns(prev => prev.map(col => {
      if (col.id === columnId) {
        const newWidth = Math.max(col.minWidth, col.width + delta)
        return { ...col, width: newWidth }
      }
      return col
    }))
  }, [])

  const handleSelectAll = useCallback(() => {
    if (selectAll) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(allRows.map(row => row.id)))
    }
    setSelectAll(prev => !prev)
  }, [selectAll, allRows])

  return (
    <TooltipProvider>
      <div 
        className="flex-1 overflow-auto bg-white"
      >
        <table className="w-full border-collapse">
          <DataGridHeader
            columns={columns}
            columnWidths={columnWidths}
            selectAll={selectAll}
            onSelectAll={handleSelectAll}
            onResize={handleResize}
          />
          <tbody>
            {allRows.map((row, idx) => (
              <DataGridRow
                key={row.id}
                row={row}
                index={idx}
                isSelected={selectedRows.has(row.id)}
                columnWidths={columnWidths}
                columns={columns}
              />
            ))}
          </tbody>
        </table>
      </div>
    </TooltipProvider>
  )
}

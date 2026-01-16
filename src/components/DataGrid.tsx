"use client"

import { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { generateRows, TOTAL_ROWS, GridRow } from '@/lib/mockData'
import { TooltipProvider } from '@/components/ui/tooltip'
import { DataGridHeader, DataGridRow, defaultColumns, ColumnConfig } from './data-grid'

const ROW_HEIGHT = 40 // Height of each row in pixels
const BUFFER_ROWS = 10 // Extra rows to render above/below viewport

export function DataGrid() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
  const [selectAll, setSelectAll] = useState(false)
  const [columns, setColumns] = useState<ColumnConfig[]>(defaultColumns)
  const [scrollTop, setScrollTop] = useState(0)
  const [containerHeight, setContainerHeight] = useState(600)
  const containerRef = useRef<HTMLDivElement>(null)

  // Generate all rows (memoized)
  const allRows = useMemo(() => generateRows(0, TOTAL_ROWS), [])

  // Calculate visible rows based on scroll position
  const { visibleRows, startIndex, offsetY } = useMemo(() => {
    const start = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - BUFFER_ROWS)
    const visibleCount = Math.ceil(containerHeight / ROW_HEIGHT) + BUFFER_ROWS * 2
    const end = Math.min(TOTAL_ROWS, start + visibleCount)
    
    return {
      visibleRows: allRows.slice(start, end),
      startIndex: start,
      offsetY: start * ROW_HEIGHT,
    }
  }, [scrollTop, containerHeight, allRows])

  // Total height for scrolling
  const totalHeight = TOTAL_ROWS * ROW_HEIGHT

  // Memoize column widths to prevent unnecessary re-renders
  const columnWidths = useMemo(() => {
    return columns.reduce((acc, col) => {
      acc[col.id] = col.width
      return acc
    }, {} as Record<string, number>)
  }, [columns])

  // Handle scroll
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }, [])

  // Update container height on mount and resize
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.clientHeight)
      }
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

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

  const handleSelectRow = useCallback((id: string) => {
    setSelectedRows(prev => {
      const newSelected = new Set(prev)
      if (newSelected.has(id)) {
        newSelected.delete(id)
      } else {
        newSelected.add(id)
      }
      setSelectAll(newSelected.size === TOTAL_ROWS)
      return newSelected
    })
  }, [])

  return (
    <TooltipProvider>
      <div 
        ref={containerRef}
        className="flex-1 overflow-auto bg-white"
        onScroll={handleScroll}
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
            {/* Spacer for virtualization */}
            <tr style={{ height: offsetY }} aria-hidden="true">
              <td colSpan={columns.length} />
            </tr>
            {visibleRows.map((row, idx) => (
              <DataGridRow
                key={row.id}
                row={row}
                index={startIndex + idx}
                isSelected={selectedRows.has(row.id)}
                columnWidths={columnWidths}
              />
            ))}
            {/* Bottom spacer */}
            <tr style={{ height: totalHeight - offsetY - visibleRows.length * ROW_HEIGHT }} aria-hidden="true">
              <td colSpan={columns.length} />
            </tr>
          </tbody>
        </table>
      </div>
    </TooltipProvider>
  )
}

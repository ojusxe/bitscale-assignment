"use client"

import { useState, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface ResizeHandleProps {
  columnId: string
  onResize: (columnId: string, delta: number) => void
}

export function ResizeHandle({ columnId, onResize }: ResizeHandleProps) {
  const [isResizing, setIsResizing] = useState(false)
  const startXRef = useRef(0)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
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

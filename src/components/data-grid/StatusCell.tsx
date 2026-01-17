"use client"

import { Check, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatusCellProps {
  status: string
  isHovered?: boolean
}

export function StatusCell({ status, isHovered }: StatusCellProps) {
  if (status === 'Email Found') {
    return (
      <div className={cn(
        "inline-flex items-center gap-1.5 rounded-2xl px-2 py-1 transition-colors",
        isHovered ? "bg-slate-200" : "bg-slate-100"
      )}>
        <div className="h-4 w-4 bg-green-600 rounded-xl flex items-center justify-center shrink-0">
          <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
        </div>
        <span className="text-[13px] text-slate-800 font-normal whitespace-nowrap">Email Found</span>
        <ChevronRight className={cn(
          'h-4 w-4 shrink-0 transition-all duration-150',
          isHovered ? 'text-slate-600 translate-x-0.5' : 'text-slate-400'
        )} />
      </div>
    )
  }

  if (status === 'Run condition not met') {
    return (
      <span className="text-xs text-amber-600 italic font-normal whitespace-nowrap">Run condition not met</span>
    )
  }

  return <span className="text-[13px] text-slate-800 font-normal">{status}</span>
}

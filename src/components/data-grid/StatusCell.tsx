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
      <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded px-2 py-1">
        <div className="h-4 w-4 bg-emerald-500 rounded flex items-center justify-center shrink-0">
          <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
        </div>
        <span className="text-[13px] text-emerald-700 font-normal whitespace-nowrap">Email Found</span>
        <ChevronRight className={cn(
          'h-4 w-4 ml-1 transition-all shrink-0 text-emerald-300',
          isHovered && 'text-emerald-500'
        )} />
      </div>
    )
  }

  if (status === 'Run condition not met') {
    return (
      <span className="text-[13px] text-amber-600 italic font-normal whitespace-nowrap">Run condition not met</span>
    )
  }

  return <span className="text-[13px] text-slate-500 font-normal">{status}</span>
}

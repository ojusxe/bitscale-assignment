"use client"

import { Users, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NamePillProps {
  name: string
  isHovered?: boolean
}

export function NamePill({ name, isHovered }: NamePillProps) {
  return (
    <div className={cn(
      "inline-flex items-center bg-slate-100 hover:bg-slate-200 rounded-full pl-1.5 pr-2 py-1 transition-all cursor-pointer max-w-full",
      isHovered ? "gap-3" : "gap-2"
    )}>
      <div className="h-6 w-6 rounded-full flex items-center justify-center shrink-0">
        <Users className="h-3.5 w-3.5 text-blue-500" />
      </div>
      <span className="text-slate-700 font-medium text-[13px] truncate">{name}</span>
      <ChevronRight className={cn(
        'h-4 w-4 transition-all shrink-0 text-slate-300',
        isHovered && 'text-slate-400'
      )} />
    </div>
  )
}

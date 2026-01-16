"use client"

import { useState } from 'react'
import { Home, Star, MessageCircle, Maximize2, Menu, X, CloudSync, CloudBackup, CloudCheck, Coins, CoinsIcon, Currency } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import { userMenuItems, workbookMenuItems, MenuItem } from '@/config/menus'
import { defaultProgressState, defaultCreditState } from '@/config/tabs'

function DropdownMenuItems({ items }: { items: MenuItem[] }) {
  return (
    <>
      {items.map((item) => {
        if (item.separator) {
          return <DropdownMenuSeparator key={item.id} />
        }
        return (
          <DropdownMenuItem
            key={item.id}
            className={cn(
              'cursor-pointer',
              item.danger && 'text-red-500 focus:text-red-500 focus:bg-red-50'
            )}
            disabled={item.disabled}
          >
            {item.icon && <item.icon className="h-4 w-4 text-slate-400" />}
            <span>{item.label}</span>
            {item.shortcut && <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>}
          </DropdownMenuItem>
        )
      })}
    </>
  )
}

function ProgressBar({ value, status }: { value: number; status: string }) {
  return (
    <div className="flex items-center gap-2.5 bg-slate-50 rounded-full px-4 py-1.5 border border-slate-200">
      <span className="text-[13px] font-medium text-slate-600 whitespace-nowrap">Grid running</span>
      <div className="h-1.5 w-24 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-500',
            status === 'running' && 'bg-blue-500',
            status === 'paused' && 'bg-amber-500',
            status === 'completed' && 'bg-green-500',
            status === 'error' && 'bg-red-500'
          )}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-[13px] font-semibold text-slate-700">{value}%</span>
    </div>
  )
}

function CreditsBadge({ current, total, plan }: { current: number; total: number; plan: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 px-2.5 py-1 rounded-md">
        <Currency className="h-4 w-4 text-green-600" />
        <span className="text-[13px] font-semibold text-green-700">{current}/{total}</span>
      </div>
      <div className={cn(
        'text-[11px] font-semibold px-2.5 py-1 rounded-md',
        plan === 'Free' && 'bg-emerald-500 text-white',
        plan === 'Pro' && 'bg-blue-500 text-white',
        plan === 'Enterprise' && 'bg-purple-500 text-white'
      )}>
        {plan}
      </div>
    </div>
  )
}

export function Header() {
  const progress = defaultProgressState
  const credits = defaultCreditState

  return (
    <TooltipProvider>
      <header className="flex h-12 items-center justify-between border-b border-slate-200 px-4 bg-white">
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-1.5 hover:bg-slate-200 bg-slate-100 rounded-md transition-colors">
                <Home className="h-4 w-4 text-slate-600" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItems items={workbookMenuItems} />
            </DropdownMenuContent>
          </DropdownMenu>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="p-1.5 hover:bg-slate-100 rounded-md transition-colors">
                <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to favorites</p>
            </TooltipContent>
          </Tooltip>

          <div className="hidden md:flex items-center text-sm">
            <span className="text-slate-400">Workbook - Bitscale UX /UI testing flow</span>
            <span className="mx-2 text-slate-400">/</span>
            <span className="font-medium text-slate-700 text-md">Bitscale grid only</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <ProgressBar value={progress.value} status={progress.status} />
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="p-1.5 hover:bg-slate-100 rounded-md transition-colors">
                <CloudCheck className="h-4 w-4 text-slate-600" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Cloud Sync</p>
            </TooltipContent>
          </Tooltip>

          <div className="">
            <CreditsBadge current={credits.current} total={credits.total} plan={credits.plan} />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-[13px] font-medium hover:opacity-90 transition-opacity">
                U
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItems items={userMenuItems} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </TooltipProvider>
  )
}

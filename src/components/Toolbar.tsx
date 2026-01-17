"use client"

import { ChevronDown, ArrowUpDown, Filter, Sparkles, Table2, Stars, Columns2, Database } from 'lucide-react'
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
import { 
  loadDataMenuItems, 
  columnMenuItems, 
  sortMenuItems, 
  filterMenuItems, 
  actionMenuItems, 
  enrichmentMenuItems,
  MenuItem 
} from '@/config/menus'

interface ToolbarButtonProps {
  label: string
  icon?: React.ReactNode
  badge?: number
  badgeColor?: 'green' | 'blue'
  hasDropdown?: boolean
  menuItems?: MenuItem[]
  className?: string
}

function ToolbarButton({ label, icon, badge, badgeColor = 'blue', hasDropdown, menuItems, className }: ToolbarButtonProps) {
  const content = (
    <button className={cn(
      'flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-200 text-[13px] font-normal text-slate-800 bg-white hover:bg-slate-50 transition-colors',
      className
    )}>
      {icon}
      <span className="hidden sm:inline">{label}</span>
      {badge !== undefined && (
        <div className={cn(
          'ml-0.5 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-semibold',
          badgeColor === 'green' ? 'bg-emerald-500' : 'bg-blue-500'
        )}> 
          {badge}
        </div>
      )}
      {hasDropdown && <ChevronDown className="h-3 w-3 text-slate-400" />}
    </button>
  )

  if (menuItems) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {content}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          {menuItems.map((item) => {
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
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return content
}

export function Toolbar() {
  return (
    <TooltipProvider>
      <div className="flex h-11 items-center justify-between px-3 border-b border-slate-200 bg-white gap-2 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1.5">
          <ToolbarButton
            label="Load Data"
            icon={<Database className="h-3.5 w-3.5 text-slate-400" />}
            badge={1}
            hasDropdown
            menuItems={loadDataMenuItems}
          />

          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <ToolbarButton
                  label="2000 Rows"
                  icon={<Table2 className="h-3.5 w-3.5 text-slate-400" />}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Total rows in dataset</p>
            </TooltipContent>
          </Tooltip>

          <ToolbarButton
            label="16/20 Columns"
            icon={<Columns2 className="h-3.5 w-3.5 text-blue-500" />}
            menuItems={columnMenuItems}
            hasDropdown
          />

          <ToolbarButton
            label="Sort by"
            icon={<ArrowUpDown className="h-3.5 w-3.5 text-slate-400" />}
            menuItems={sortMenuItems}
            hasDropdown
          />

          <ToolbarButton
            label="Filter"
            icon={<Filter className="h-3.5 w-3.5 text-slate-400" />}
            badge={1}
            menuItems={filterMenuItems}
            hasDropdown
          />
        </div>

        <div className="flex items-center gap-1.5">
          {/* action options - a bit complex, we can do it simpler way */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1.5 h-7 px-3 rounded-md border border-slate-200 text-sm font-normal text-slate-800 bg-white hover:bg-slate-50 transition-colors">
                <span>Action</span>
                <ChevronDown className="h-3 w-3 text-slate-400" />  
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {actionMenuItems.map((item) => {
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
                  >
                    {item.icon && <item.icon className="h-4 w-4 text-slate-400" />}
                    <span>{item.label}</span>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 h-7 px-3 rounded-l-md bg-slate-800 text-[13px] font-medium text-white hover:bg-slate-700 transition-colors">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Enrichment</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {enrichmentMenuItems.map((item) => {
                  if (item.separator) {
                    return <DropdownMenuSeparator key={item.id} />
                  }
                  return (
                    <DropdownMenuItem key={item.id} className="cursor-pointer">
                      {item.icon && <item.icon className="h-4 w-4 text-slate-400" />}
                      <span>{item.label}</span>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
            <button className="h-7 px-1.5 bg-slate-800 border-l border-slate-600 rounded-r-md hover:bg-slate-700 transition-colors">
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="h-7 w-7 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-800 via-pink-700 to-pink-400 hover:opacity-90 transition-opacity">
                <Stars className="h-3.5 w-3.5 text-white" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>AI Assistant</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  )
}

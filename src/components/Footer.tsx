"use client"

import { useState } from 'react'
import { Plus, ChevronLeft, ChevronRight, XCircle, Play, Sparkles, HelpCircle, MoreHorizontal, X, Trash2, Copy, Edit2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { gridTabs, TabConfig } from '@/config/tabs'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface TabProps {
  tab: TabConfig
  isActive: boolean
  onClick: () => void
  onClose: () => void
}

function Tab({ tab, isActive, onClick, onClose }: TabProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 px-4 h-full text-[13px] cursor-pointer whitespace-nowrap transition-all relative group',
        isActive
          ? 'text-blue-600 font-medium'
          : 'text-slate-700 font-normal hover:text-slate-900'
      )}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600" />
      )}
      <span>{tab.name}</span>
      {isActive ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="p-0.5 hover:bg-slate-200 rounded transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreHorizontal className="h-3 w-3 text-slate-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-40">
            <DropdownMenuItem className="cursor-pointer">
              <Edit2 className="h-4 w-4 text-slate-400" />
              <span>Rename</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Copy className="h-4 w-4 text-slate-400" />
              <span>Duplicate</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer text-red-500 focus:text-red-500 focus:bg-red-50"
              onClick={(e) => {
                e.stopPropagation()
                onClose()
              }}
            >
              <Trash2 className="h-4 w-4" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <button
          className="p-0.5 hover:bg-slate-200 rounded transition-colors opacity-0 group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
        >
          <X className="h-3 w-3 text-slate-400" />
        </button>
      )}
    </div>
  )
}

interface ActionButtonProps {
  icon: React.ReactNode
  label: string
  variant?: 'default' | 'danger'
  onClick?: () => void
}

function ActionButton({ icon, label, variant = 'default', onClick }: ActionButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          className={cn(
            'flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-md bg-white text-[13px] font-normal transition-colors',
            variant === 'danger'
              ? 'text-red-500 hover:bg-red-50 hover:border-red-200'
              : 'text-slate-800 hover:bg-slate-50'
          )}
          onClick={onClick}
        >
          {icon}
          <span className="hidden sm:inline">{label}</span>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export function Footer() {
  const [tabs, setTabs] = useState<TabConfig[]>(gridTabs)
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '')
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleAddTab = () => {
    const newTab: TabConfig = {
      id: `tab-${Date.now()}`,
      name: `New Grid ${tabs.length + 1}`,
    }
    setTabs([...tabs, newTab])
    setActiveTab(newTab.id)
  }

  const handleCloseTab = (tabId: string) => {
    if (tabs.length <= 1) return
    const newTabs = tabs.filter(t => t.id !== tabId)
    setTabs(newTabs)
    if (activeTab === tabId) {
      setActiveTab(newTabs[0]?.id || '')
    }
  }

  const handleScrollLeft = () => {
    const container = document.getElementById('tabs-container')
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const handleScrollRight = () => {
    const container = document.getElementById('tabs-container')
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  return (
    <TooltipProvider>
      <footer className="flex h-10 items-center justify-between bg-white border-t border-slate-200">
        <div className="flex items-center h-full flex-1 min-w-0 gap-2 px-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-slate-800 bg-slate-100 shadow-lg border border-slate-200 rounded-2xl hover:bg-slate-300 transition-colors shrink-0"
                onClick={handleAddTab}
              >
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </TooltipTrigger>
            <TooltipContent> shadow-lg
              <p>Add new grid</p>
            </TooltipContent>
          </Tooltip>

          <div
            id="tabs-container"
            className="flex items-center h-full overflow-x-auto scrollbar-hide flex-1"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                onClose={() => handleCloseTab(tab.id)}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1 px-2 shrink-0 border-l border-slate-200">
          <button
            className="p-1 hover:bg-slate-100 rounded transition-colors disabled:opacity-30"
            onClick={handleScrollLeft}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4 text-slate-400" />
          </button>
          <button
            className="p-1 hover:bg-slate-100 rounded transition-colors disabled:opacity-30"
            onClick={handleScrollRight}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 px-3 shrink-0 border-l border-slate-200">
          <ActionButton
            icon={<XCircle className="h-4 w-4" />}
            label="Kill Run"
            variant="danger"
          />

          <ActionButton
            icon={<Play className="h-3.5 w-3.5 text-slate-400" />}
            label="Auto Run"
          />

          <ActionButton
            icon={<Sparkles className="h-3.5 w-3.5 text-blue-500" />}
            label="Auto Dedupe"
          />

          <ActionButton
            icon={<HelpCircle className="h-3.5 w-3.5 text-slate-400" />}
            label="Support"
          />
        </div>
      </footer>
    </TooltipProvider>
  )
}

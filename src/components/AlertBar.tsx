"use client"

import { AlertCircle } from 'lucide-react'

export function AlertBar() {
  return (
    <div className="bg-red-700 text-white py-2 px-4 flex items-center justify-center gap-3 flex-wrap">
      <span className="text-MD">
        Payment failed. 450,000 credits will permanently expire in 30 days
      </span>
      <AlertCircle className="h-4 w-4" />
      <button className="bg-white text-[hsl(var(--text-primary))] text-md font-semibold px-4 py-0.5 rounded-md hover:bg-slate-100 transition-colors shadow-lg">
        Pay Now
      </button>
    </div>
  )
}

"use client"

import { AlertCircle, X } from 'lucide-react'
import { useState } from 'react'

export function AlertBar() {
  const [visible, setVisible] = useState(true)

  return (
    <div className={`bg-[#C81E1E] text-white py-2 px-4 flex items-center justify-center gap-3 flex-wrap ${visible ? 'block' : 'hidden'}`}>
      <span className="text-md">
        Payment failed. 450,000 credits will permanently expire in 30 days
      </span>
      <AlertCircle className="h-4 w-4" />
      <button className="bg-white text-[hsl(var(--text-primary))] text-sm font-semibold px-4 py-1 rounded-md hover:bg-slate-100 transition-colors shadow-xl">
        Pay Now
      </button>
      <button onClick={() => setVisible(!visible)}>
        <X className="h-4 w-4 cursor-pointer" />
      </button>
    </div>
  )
}

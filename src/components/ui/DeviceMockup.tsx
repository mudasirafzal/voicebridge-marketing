import { ReactNode } from 'react'

interface PhoneMockupProps {
  children: ReactNode
  className?: string
}

export function PhoneMockup({ children, className = '' }: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: 280, height: 560 }}>
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[44px] bg-slate-800 shadow-2xl shadow-violet-500/30" />
      {/* Screen area */}
      <div className="absolute inset-[12px] rounded-[32px] bg-white overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl z-10" />
        {/* Status bar */}
        <div className="absolute top-6 left-0 right-0 h-5 px-4 flex items-center justify-between z-10">
          <span className="text-[8px] font-semibold text-slate-700">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-3 h-1.5 rounded-sm bg-slate-700" />
            <div className="w-1 h-1.5 rounded-sm bg-slate-700" />
          </div>
        </div>
        {/* Content */}
        <div className="absolute inset-0 top-11 overflow-hidden">
          {children}
        </div>
      </div>
      {/* Home indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/40 rounded-full" />
      {/* Side buttons */}
      <div className="absolute left-[-3px] top-20 w-1 h-8 bg-slate-600 rounded-l-sm" />
      <div className="absolute left-[-3px] top-32 w-1 h-12 bg-slate-600 rounded-l-sm" />
      <div className="absolute left-[-3px] top-48 w-1 h-12 bg-slate-600 rounded-l-sm" />
      <div className="absolute right-[-3px] top-28 w-1 h-16 bg-slate-600 rounded-r-sm" />
    </div>
  )
}

interface BrowserMockupProps {
  children: ReactNode
  className?: string
  url?: string
}

export function BrowserMockup({ children, className = '', url = 'voicebridge.website' }: BrowserMockupProps) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-2xl shadow-violet-500/20 bg-white border border-slate-200 ${className}`}>
      {/* Browser chrome */}
      <div className="bg-slate-100 px-4 py-3 flex items-center gap-3 border-b border-slate-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-500 border border-slate-200">
          {url}
        </div>
      </div>
      {/* Content */}
      <div className="overflow-hidden">
        {children}
      </div>
    </div>
  )
}

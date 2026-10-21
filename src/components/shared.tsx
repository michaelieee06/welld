import React from 'react'

interface LabelProps {
  children: React.ReactNode
  className?: string
}

export function Label({ children, className = '' }: LabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest font-mono text-zinc-300 backdrop-blur-md select-none ${className}`}
    >
      {children}
    </span>
  )
}

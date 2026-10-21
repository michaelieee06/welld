import React from 'react'

interface LabelProps {
  children: React.ReactNode
  className?: string
}

export function Label({ children, className = '' }: LabelProps) {
  return (
    <span
      className={`inline-flex items-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] font-mono select-none ${className}`}
    >
      {children}
    </span>
  )
}

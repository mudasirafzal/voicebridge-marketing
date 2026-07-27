import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

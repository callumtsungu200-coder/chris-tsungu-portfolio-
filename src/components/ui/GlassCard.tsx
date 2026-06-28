import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type Props = PropsWithChildren<{
  className?: string
  hover?: boolean
  as?: 'div' | 'article' | 'li'
}>

export function GlassCard({ children, className, hover = true, as = 'div' }: Props) {
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp
      whileHover={hover ? { y: -4, borderColor: 'rgba(251,210,78,0.3)' } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl glass p-6',
        'transition-colors',
        className,
      )}
    >
      {hover && (
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/60 to-transparent" />
        </div>
      )}
      {children}
    </Comp>
  )
}

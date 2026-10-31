import type { PropsWithChildren } from 'react'
import { cn } from '@/lib/cn'

type Props = PropsWithChildren<{
  className?: string
  hover?: boolean
  as?: 'div' | 'article' | 'li' | 'section'
  id?: string
}>

/** Soft rounded card. (Named GlassCard for backwards compatibility.) */
export function GlassCard({ children, className, hover = true, as: Comp = 'div', id }: Props) {
  return (
    <Comp id={id} className={cn('group relative rounded-3xl glass p-6', hover && 'lift', id && 'scroll-mt-28', className)}>
      {children}
    </Comp>
  )
}

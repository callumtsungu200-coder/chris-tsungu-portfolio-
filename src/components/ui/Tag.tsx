import type { PropsWithChildren } from 'react'
import { cn } from '@/lib/cn'

/** Small neutral chip for technologies, topics and skills. */
export function Tag({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <span className={cn('inline-flex items-center rounded-full bg-ink-800 px-2.5 py-1 text-[11px] font-medium text-ink-300', className)}>
      {children}
    </span>
  )
}

/** Inline marker for information still to be supplied. Visible but unobtrusive. */
export function Todo({ children = 'To be confirmed' }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-dashed border-ink-600 px-2 py-0.5 font-mono text-[11px] text-ink-400" title="This detail is still to be added">
      {children}
    </span>
  )
}

export function MaybeTodo({ value, fallback = 'To be confirmed' }: { value?: string; fallback?: string }) {
  if (!value || value.startsWith('TODO')) return <Todo>{fallback}</Todo>
  return <>{value}</>
}

import type { PropsWithChildren } from 'react'
import { cn } from '@/lib/cn'

type Tone = 'gold' | 'mute' | 'live' | 'progress' | 'ongoing' | 'prototype' | 'hold' | 'testing' | 'planning'

/* Small pill labels with a coloured dot. */
const tones: Record<Tone, { bg: string; dot: string }> = {
  gold: { bg: 'bg-gold-50 text-gold-600', dot: 'bg-gold-400' },
  mute: { bg: 'bg-ink-800 text-ink-400', dot: 'bg-ink-500' },
  live: { bg: 'bg-rust-soft text-rust', dot: 'bg-rust' },
  progress: { bg: 'bg-sky-100 text-sky-800', dot: 'bg-sky-600' },
  ongoing: { bg: 'bg-violet-100 text-violet-800', dot: 'bg-violet-600' },
  prototype: { bg: 'bg-gold-50 text-gold-600', dot: 'bg-gold-400' },
  hold: { bg: 'bg-ink-800 text-ink-400', dot: 'bg-ink-600' },
  testing: { bg: 'bg-amber-100 text-amber-800', dot: 'bg-amber-600' },
  planning: { bg: 'bg-ink-800 text-ink-400', dot: 'bg-ink-500' },
}

export function toneForStatus(status: string): Tone {
  switch (status) {
    case 'live': case 'completed': case 'published': return 'live'
    case 'in-development': case 'in-progress': case 'drafting': return 'progress'
    case 'ongoing': return 'ongoing'
    case 'prototype': return 'prototype'
    case 'on-hold': return 'hold'
    case 'testing': return 'testing'
    case 'planning': case 'planned': return 'planning'
    default: return 'mute'
  }
}

export function Badge({ tone = 'gold', children, className }: PropsWithChildren<{ tone?: Tone; className?: string }>) {
  const t = tones[tone]
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em]', t.bg, className)}>
      <span aria-hidden className={cn('h-1.5 w-1.5 rounded-full', t.dot)} />
      {children}
    </span>
  )
}

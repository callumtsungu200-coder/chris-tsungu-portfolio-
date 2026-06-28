import type { PropsWithChildren } from 'react'
import { cn } from '@/lib/cn'

type Tone = 'gold' | 'mute' | 'live' | 'progress' | 'ongoing'

const tones: Record<Tone, string> = {
  gold: 'bg-gold-400/10 text-gold-200 ring-gold-300/30',
  mute: 'bg-ink-700/50 text-ink-200 ring-white/10',
  live: 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/30',
  progress: 'bg-sky-400/10 text-sky-300 ring-sky-400/30',
  ongoing: 'bg-violet-400/10 text-violet-300 ring-violet-400/30',
}

export function Badge({
  tone = 'gold',
  children,
  className,
}: PropsWithChildren<{ tone?: Tone; className?: string }>) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider ring-1 ring-inset',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

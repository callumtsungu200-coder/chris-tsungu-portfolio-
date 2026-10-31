import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/cn'

type Props = { label: string; value: string; sub?: string; className?: string }

function CountUp({ value }: { value: string }) {
  const m = value.match(/^(\d+)(.*)$/)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduced = useReducedMotion()
  const target = m ? parseInt(m[1], 10) : 0
  const [n, setN] = useState(reduced ? target : 0)
  const numeric = !!m

  useEffect(() => {
    if (!numeric || !inView) return
    if (reduced) { setN(target); return }
    const controls = animate(0, target, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => controls.stop()
  }, [inView, target, reduced, numeric])

  if (!m) return <span ref={ref}>{value}</span>
  return <span ref={ref}>{n}{m[2]}</span>
}

/** Rounded stat card with a count-up figure. */
export function StatCard({ label, value, sub, className }: Props) {
  const isNumeric = /^\d/.test(value)
  return (
    <div className={cn('flex h-full flex-col justify-between rounded-3xl border border-line bg-paper-50 p-5', className)}>
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">{label}</span>
      <div className="mt-5">
        <span className={cn('block font-display font-medium leading-none tracking-tightest text-ink-100', isNumeric ? 'text-4xl md:text-5xl' : 'text-xl md:text-2xl')}>
          <CountUp value={value} />
        </span>
        {sub && <span className="mt-2 block text-xs text-ink-400">{sub}</span>}
      </div>
    </div>
  )
}

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { useSEO } from '@/hooks/useSEO'
import { PageHeader } from '@/components/ui/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge, toneForStatus } from '@/components/ui/Badge'
import { nowItems, nowStatusLabel, nowKindLabel, nowLastUpdated, type NowKind, type NowStatus } from '@/data/now'
import { cn } from '@/lib/cn'

const kinds = ['all', ...(Object.keys(nowKindLabel) as NowKind[])] as const
const statusOrder: NowStatus[] = ['in-development', 'testing', 'planning', 'on-hold', 'completed']

export function NowPage() {
  useSEO({
    title: 'Currently working on',
    description: `What Chris Tsungu is working on right now: projects in development, skills being learned, financial topics being researched and upcoming ideas. Updated ${nowLastUpdated}.`,
  })
  const [kind, setKind] = useState<(typeof kinds)[number]>('all')
  const visible = nowItems.filter((n) => kind === 'all' || n.kind === kind)
  const counts = statusOrder.map((s) => [s, nowItems.filter((n) => n.status === s).length] as const)

  return (
    <>
      <PageHeader eyebrow="Currently working on" title="A live board, not a static page." description={`Projects, learning, research and ideas, each with a status. Last updated ${nowLastUpdated}.`}>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by type">
          {kinds.map((k) => (
            <button key={k} type="button" onClick={() => setKind(k)} aria-pressed={kind === k} className={cn('rounded-full border px-3 py-1 text-xs transition-colors', kind === k ? 'border-gold-400 bg-gold-50 text-gold-600' : 'border-line bg-paper-50 text-ink-300 hover:text-ink-100')}>
              {k === 'all' ? 'All' : nowKindLabel[k]}
            </button>
          ))}
        </div>
      </PageHeader>

      <section className="container pb-10">
        <ul className="flex flex-wrap gap-2" aria-label="Status summary">
          {counts.map(([s, n]) => (
            <li key={s} className="inline-flex items-center gap-2 rounded-full bg-paper-50 px-3 py-1.5 text-xs text-ink-300 ring-1 ring-inset ring-line">
              <Badge tone={toneForStatus(s)}>{nowStatusLabel[s]}</Badge> {n}
            </li>
          ))}
        </ul>
      </section>

      <section className="container pb-24">
        <div className="grid gap-6 lg:grid-cols-5">
          {statusOrder.map((s) => {
            const col = visible.filter((n) => n.status === s)
            return (
              <div key={s} className="min-w-0">
                <h2 className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  {nowStatusLabel[s]} <span>{col.length}</span>
                </h2>
                <motion.ul layout className="space-y-3">
                  <AnimatePresence mode="popLayout">
                    {col.map((n) => (
                      <motion.li key={n.title} layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                        <GlassCard hover={false} className="p-4">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold-300/80">{nowKindLabel[n.kind]}</span>
                            {n.when && <span className="text-[11px] text-ink-500">{n.when}</span>}
                          </div>
                          <h3 className="mt-2 font-display text-base font-medium text-ink-100">{n.title}</h3>
                          <p className="mt-1.5 text-sm text-ink-300 text-pretty">{n.detail}</p>
                          {n.to && (
                            <Link to={n.to} className="mt-3 inline-flex items-center gap-1 text-xs text-gold-500 hover:text-gold-100">
                              Details <HiArrowRight aria-hidden />
                            </Link>
                          )}
                        </GlassCard>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </motion.ul>
                {col.length === 0 && <p className="rounded-2xl border border-dashed border-ink-700 p-4 text-center text-xs text-ink-500">Nothing here</p>}
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

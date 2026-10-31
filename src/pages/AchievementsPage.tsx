import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineSparkles, HiOutlineHeart, HiOutlineLightningBolt, HiOutlineBadgeCheck } from 'react-icons/hi'
import { useSEO } from '@/hooks/useSEO'
import { PageHeader } from '@/components/ui/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Tag, MaybeTodo } from '@/components/ui/Tag'
import { achievements, achievementCategoryLabel, type AchievementCategory } from '@/data/achievements'
import { cn } from '@/lib/cn'

const meta = {
  leadership: { icon: HiOutlineSparkles, tone: 'text-gold-400 bg-gold-50 ring-gold-400/40' },
  volunteering: { icon: HiOutlineHeart, tone: 'text-rust bg-rust-soft ring-rust/40' },
  competition: { icon: HiOutlineLightningBolt, tone: 'text-sky-800 bg-sky-50 ring-sky-700/40' },
  recognition: { icon: HiOutlineBadgeCheck, tone: 'text-emerald-800 bg-emerald-50 ring-emerald-700/40' },
} as const

const filters = ['all', ...(Object.keys(achievementCategoryLabel) as AchievementCategory[])] as const

export function AchievementsPage() {
  useSEO({
    title: 'Achievements & extracurricular',
    description: 'School Prefect and Student Leadership Team, library volunteering, UKMT Senior Maths Challenge, University of Essex maths competition, Last 10% hackathon and school awards, with involvement and skills developed.',
  })
  const [filter, setFilter] = useState<(typeof filters)[number]>('all')
  const visible = achievements.filter((a) => filter === 'all' || a.category === filter)

  return (
    <>
      <PageHeader eyebrow="Achievements & extracurricular" title="Leadership, service, competitions and recognition." description="For each activity: what I was involved in, what I was responsible for and what it developed. No invented awards or rankings.">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter achievements">
          {filters.map((f) => (
            <button key={f} type="button" onClick={() => setFilter(f)} aria-pressed={filter === f} className={cn('rounded-full border px-3 py-1 text-xs transition-colors', filter === f ? 'border-gold-400 bg-gold-50 text-gold-600' : 'border-line bg-paper-50 text-ink-300 hover:text-ink-100')}>
              {f === 'all' ? `All (${achievements.length})` : achievementCategoryLabel[f]}
            </button>
          ))}
        </div>
      </PageHeader>

      <section className="container pb-24">
        <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((a) => {
              const m = meta[a.category]
              const Icon = m.icon
              return (
                <motion.li key={a.title} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.3 }}>
                  <GlassCard className="h-full" as="article">
                    <div className="flex items-start justify-between gap-3">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-widest ring-1 ring-inset ${m.tone}`}>
                        <Icon className="text-sm" aria-hidden /> {achievementCategoryLabel[a.category]}
                      </span>
                      {a.year && <span className="font-mono text-xs text-ink-400"><MaybeTodo value={a.year} fallback="year tbc" /></span>}
                    </div>
                    <h2 className="mt-4 font-display text-lg font-medium text-ink-100">{a.title}</h2>
                    <p className="mt-0.5 text-xs text-ink-400">{a.organisation}</p>
                    <p className="mt-3 text-sm text-ink-300 text-pretty">{a.involvement}</p>
                    {a.responsibilities && (
                      <>
                        <h3 className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-500">Responsibilities</h3>
                        <ul className="mt-1 space-y-1">
                          {a.responsibilities.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-sm text-ink-300">
                              <span aria-hidden className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-gold-300" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    <h3 className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-500">Skills developed</h3>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {a.skills.map((s) => <Tag key={s}>{s}</Tag>)}
                    </div>
                  </GlassCard>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </motion.ul>
      </section>
    </>
  )
}

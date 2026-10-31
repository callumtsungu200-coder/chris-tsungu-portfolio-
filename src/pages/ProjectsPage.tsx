import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowUpRight } from 'react-icons/hi2'
import { useSEO } from '@/hooks/useSEO'
import { PageHeader } from '@/components/ui/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge, toneForStatus } from '@/components/ui/Badge'
import { Tag } from '@/components/ui/Tag'
import { projects, statusLabel, categoryLabel, type ProjectCategory, type ProjectStatus } from '@/data/projects'
import { cn } from '@/lib/cn'

const categories = ['all', ...(Object.keys(categoryLabel) as ProjectCategory[])] as const
const statuses = ['all', ...(Object.keys(statusLabel) as ProjectStatus[])] as const

export function ProjectsPage() {
  useSEO({
    title: 'Projects',
    description: 'Case studies of what Chris Tsungu has built: Grade Lab, commercial client websites, this portfolio, an AI speaker prototype and more, with technologies, challenges and lessons learned.',
  })

  const [cat, setCat] = useState<(typeof categories)[number]>('all')
  const [status, setStatus] = useState<(typeof statuses)[number]>('all')

  const visible = useMemo(
    () => projects.filter((p) => (cat === 'all' || p.category === cat) && (status === 'all' || p.status === status)),
    [cat, status],
  )

  return (
    <>
      <PageHeader eyebrow="Projects" title="Case studies, not just a list of names." description="Each project explains the problem, why I built it, how, what went wrong and what I learned. Statuses are honest: a prototype is called a prototype.">
        <div className="flex flex-col gap-3">
          <FilterRow label="Type" value={cat} options={categories} labelFor={(v) => (v === 'all' ? 'All' : categoryLabel[v as ProjectCategory])} onChange={(v) => setCat(v as typeof cat)} />
          <FilterRow label="Status" value={status} options={statuses} labelFor={(v) => (v === 'all' ? 'Any' : statusLabel[v as ProjectStatus])} onChange={(v) => setStatus(v as typeof status)} />
        </div>
      </PageHeader>

      <section className="container pb-24" aria-live="polite">
        <p className="mb-6 text-sm text-ink-400">
          {visible.length} {visible.length === 1 ? 'project' : 'projects'}
        </p>
        <motion.ul layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.li key={p.slug} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.3 }}>
                <Link to={`/projects/${p.slug}`} className="group block h-full">
                  <GlassCard className="h-full">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge tone={toneForStatus(p.status)}>{statusLabel[p.status]}</Badge>
                        <Badge tone="mute">{categoryLabel[p.category]}</Badge>
                      </div>
                      <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-ink-800/60 text-ink-200 ring-1 ring-inset ring-line transition-colors group-hover:bg-gold-400 group-hover:text-ink-950">
                        <HiArrowUpRight aria-hidden />
                      </span>
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-medium text-ink-100">{p.title}</h2>
                    <p className="mt-1 text-sm text-gold-500/90">{p.tagline}</p>
                    <p className="mt-3 text-sm text-ink-300 text-pretty">{p.summary}</p>
                    <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <dt className="uppercase tracking-widest text-ink-500">Period</dt>
                        <dd className="mt-0.5 text-ink-200">{p.period}</dd>
                      </div>
                      <div>
                        <dt className="uppercase tracking-widest text-ink-500">Role</dt>
                        <dd className="mt-0.5 text-ink-200">{p.role}</dd>
                      </div>
                    </dl>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.technologies.slice(0, 6).map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                      {p.technologies.length > 6 && <Tag>+{p.technologies.length - 6}</Tag>}
                    </div>
                  </GlassCard>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        {visible.length === 0 && <p className="mt-10 text-center text-ink-400">No projects match those filters yet.</p>}
      </section>
    </>
  )
}

function FilterRow<T extends string>({ label, value, options, labelFor, onChange }: { label: string; value: T; options: readonly T[]; labelFor: (v: T) => string; onChange: (v: T) => void }) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label={`Filter by ${label.toLowerCase()}`}>
      <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">{label}</span>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          className={cn(
            'rounded-full border px-3 py-1 text-xs transition-colors',
            value === o ? 'border-gold-400 bg-gold-50 text-gold-600' : 'border-line bg-paper-50 text-ink-300 hover:text-ink-100',
          )}
        >
          {labelFor(o)}
        </button>
      ))}
    </div>
  )
}

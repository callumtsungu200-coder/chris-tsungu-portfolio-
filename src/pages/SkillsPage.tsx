import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useSEO } from '@/hooks/useSEO'
import { PageHeader } from '@/components/ui/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Tag } from '@/components/ui/Tag'
import { Stagger, staggerItem, Reveal } from '@/components/ui/Reveal'
import { skillCategories, skillLevelLabel, otherTools, type SkillLevel } from '@/data/skills'
import { cn } from '@/lib/cn'

const levelTone: Record<SkillLevel, 'live' | 'gold' | 'progress'> = {
  comfortable: 'live',
  'used-in-projects': 'gold',
  learning: 'progress',
}

const levels = ['all', 'comfortable', 'used-in-projects', 'learning'] as const

export function SkillsPage() {
  useSEO({
    title: 'Technical skills',
    description: 'Programming languages, frameworks, tools and AI skills of Chris Tsungu, with honest proficiency levels and the real projects each one was used in.',
  })
  const [level, setLevel] = useState<(typeof levels)[number]>('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return skillCategories
      .map((c) => ({
        ...c,
        skills: c.skills.filter((s) => (level === 'all' || s.level === level) && (!q || s.name.toLowerCase().includes(q) || s.appliedIn.some((a) => a.toLowerCase().includes(q)))),
      }))
      .filter((c) => c.skills.length > 0)
  }, [level, query])

  const total = skillCategories.reduce((n, c) => n + c.skills.length, 0)

  return (
    <>
      <PageHeader eyebrow="Technical skills" title="What I can build with, and where I have used it." description="No percentage bars. Each skill says how comfortable I am and which real project it was applied in, so the claims are checkable.">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by level">
            {levels.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLevel(l)}
                aria-pressed={level === l}
                className={cn('rounded-full border px-3 py-1 text-xs transition-colors', level === l ? 'border-gold-400 bg-gold-50 text-gold-600' : 'border-line bg-paper-50 text-ink-300 hover:text-ink-100')}
              >
                {l === 'all' ? `All (${total})` : skillLevelLabel[l]}
              </button>
            ))}
          </div>
          <label className="sm:ml-auto">
            <span className="sr-only">Search skills</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search skills or projects…"
              className="w-full rounded-full border border-line bg-paper-50 px-4 py-2 text-sm text-ink-100 placeholder:text-ink-500 focus:border-gold-300/50 focus:outline-none sm:w-64"
            />
          </label>
        </div>
      </PageHeader>

      <section className="container pb-16">
        <Reveal>
          <div className="mb-8 flex flex-wrap gap-4 text-xs text-ink-400">
            {(Object.keys(skillLevelLabel) as SkillLevel[]).map((l) => (
              <span key={l} className="inline-flex items-center gap-2">
                <Badge tone={levelTone[l]}>{skillLevelLabel[l]}</Badge>
                <span>
                  {l === 'comfortable' && 'use it regularly without reference'}
                  {l === 'used-in-projects' && 'shipped with it; still deepening'}
                  {l === 'learning' && 'actively learning; limited project use so far'}
                </span>
              </span>
            ))}
          </div>
        </Reveal>

        <div className="space-y-10">
          {filtered.map((c) => (
            <div key={c.id} id={c.id} className="scroll-mt-28">
              <div className="mb-4">
                <h2 className="font-display text-2xl font-medium text-ink-100">{c.name}</h2>
                <p className="mt-1 text-sm text-ink-400">{c.description}</p>
              </div>
              <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {c.skills.map((s) => (
                  <motion.div key={s.name} variants={staggerItem}>
                    <GlassCard className="h-full" hover={false}>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-lg font-medium text-ink-100">{s.name}</h3>
                        <Badge tone={levelTone[s.level]}>{skillLevelLabel[s.level]}</Badge>
                      </div>
                      {s.note && <p className="mt-2 text-sm text-ink-300 text-pretty">{s.note}</p>}
                      <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-500">Applied in</p>
                      {s.appliedIn.length > 0 ? (
                        <ul className="mt-1.5 flex flex-wrap gap-1.5">
                          {s.appliedIn.map((a) => <li key={a}><Tag>{a}</Tag></li>)}
                        </ul>
                      ) : (
                        <p className="mt-1.5 text-sm text-ink-400">Not yet used in a shipped project.</p>
                      )}
                    </GlassCard>
                  </motion.div>
                ))}
              </Stagger>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-ink-400">Nothing matches that search.</p>}
        </div>
      </section>

      <section className="container pb-24">
        <Reveal>
          <GlassCard hover={false}>
            <h2 className="font-display text-lg font-medium text-ink-100">Other tools</h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {otherTools.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
          </GlassCard>
        </Reveal>
      </section>
    </>
  )
}

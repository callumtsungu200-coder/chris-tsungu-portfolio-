import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Stagger, staggerItem } from '@/components/ui/Reveal'
import { motion } from 'framer-motion'
import { projects } from '@/data/content'
import { HiArrowUpRight } from 'react-icons/hi2'

const statusTone = {
  live: 'live',
  'in-progress': 'progress',
  ongoing: 'ongoing',
  prototype: 'prototype',
} as const

const statusLabel = {
  live: 'Live',
  'in-progress': 'In progress',
  ongoing: 'Ongoing',
  prototype: 'Prototype',
} as const

export function Projects() {
  return (
    <section id="projects" className="relative section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="02 — Projects"
          title="Built, shipped, and still building."
          description="Real things I have designed, coded and put out into the world — spanning EdTech, Web, AI hardware, FinTech-adjacent analysis and honest experiments."
        />

        <Stagger className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => {
            const Card = (
              <GlassCard className="relative h-full">
                <div className="flex items-start justify-between gap-3">
                  <Badge tone={statusTone[p.status]}>{statusLabel[p.status]}</Badge>
                  {p.href && (
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-800/60 text-ink-200 ring-1 ring-inset ring-white/10 transition-colors group-hover:bg-gold-400 group-hover:text-ink-950">
                      <HiArrowUpRight />
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink-100">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-300 text-pretty">{p.blurb}</p>

                {p.bullets && p.bullets.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink-300">
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-gold-300"
                        />
                        <span className="text-pretty">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/[0.04] px-2 py-1 text-[11px] font-medium text-ink-300 ring-1 ring-inset ring-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </GlassCard>
            )
            return (
              <motion.div key={p.title} variants={staggerItem}>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noreferrer noopener" className="block group">
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </motion.div>
            )
          })}
        </Stagger>

        <p className="mt-8 text-center text-sm text-ink-400">
          New projects roll in here as they ship — kept short, kept honest.
        </p>
      </div>
    </section>
  )
}

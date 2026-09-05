import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Stagger, staggerItem } from '@/components/ui/Reveal'
import { motion } from 'framer-motion'
import { achievements } from '@/data/content'
import {
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineLightningBolt,
} from 'react-icons/hi'

const categoryMeta = {
  academic: { label: 'Academic', icon: HiOutlineAcademicCap, tone: 'text-sky-300 bg-sky-400/10 ring-sky-400/30' },
  leadership: { label: 'Leadership', icon: HiOutlineSparkles, tone: 'text-gold-200 bg-gold-400/10 ring-gold-300/30' },
  sport: { label: 'Sport', icon: HiOutlineLightningBolt, tone: 'text-emerald-300 bg-emerald-400/10 ring-emerald-400/30' },
} as const

export function Achievements() {
  return (
    <section id="achievements" className="relative section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="06 — Achievements"
          title="Awards, leadership and recognition."
          description="A record built across the classroom, the Prefect team and beyond."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => {
            const meta = categoryMeta[a.category]
            const Icon = meta.icon
            return (
              <motion.div key={a.title} variants={staggerItem}>
                <GlassCard className="h-full">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest ring-1 ring-inset ${meta.tone}`}
                    >
                      <Icon className="text-sm" aria-hidden />
                      {meta.label}
                    </div>
                    {a.year && (
                      <span className="font-mono text-xs text-ink-400">{a.year}</span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink-100">
                    {a.title}
                  </h3>
                  {a.detail && (
                    <p className="mt-2 text-sm text-ink-300 text-pretty">{a.detail}</p>
                  )}
                </GlassCard>
              </motion.div>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}

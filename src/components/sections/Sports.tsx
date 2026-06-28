import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal, Stagger, staggerItem } from '@/components/ui/Reveal'
import { StatCard } from '@/components/ui/StatCard'
import { motion } from 'framer-motion'
import { sportsHighlights } from '@/data/content'

const fixtures = [
  'Brentford',
  'Crystal Palace',
  'Norwich',
  'Wolves',
  'Charlton',
  'Sheffield Wednesday',
  'Colchester',
  'Southend',
]

export function Sports() {
  return (
    <section id="sports" className="relative section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="04 — Sports & Leadership"
          title="Discipline, learned at full speed."
          description="Competitive football and athletics every week — the same drive that powers the academics."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr,1fr] lg:gap-10">
          {/* Left: image card */}
          <Reveal direction="left">
            <div className="space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-glass">
                <img
                  src="/images/hero-portrait-alt.png"
                  alt="Chris Tsungu in match action"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-gold-300/20" />
              </div>
              <div className="flex items-center justify-between gap-3 rounded-2xl glass px-5 py-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gold-200/90">
                    Position
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-ink-100">Left Wing</p>
                </div>
                <div className="rounded-full bg-gold-400/15 px-3 py-1 text-xs font-medium text-gold-200 ring-1 ring-gold-300/30">
                  Ipswich Futures U15
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: stats + highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-3">
              <StatCard label="Goals 25/26" value="20+" />
              <StatCard label="Assists 25/26" value="10+" />
              <StatCard label="Seasons" value="10" sub="competitive" />
            </div>

            <Stagger className="space-y-3">
              {sportsHighlights.map((h) => (
                <motion.div key={h.title} variants={staggerItem}>
                  <GlassCard>
                    <div className="flex items-start gap-4">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gold-300" />
                      <div>
                        <h4 className="font-display text-base font-semibold text-ink-100">{h.title}</h4>
                        <p className="mt-1 text-sm text-ink-300 text-pretty">{h.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </div>

        <Reveal className="mt-10" direction="up">
          <GlassCard hover={false}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-gold-300/80">
                  Faced academy sides from
                </p>
                <h4 className="mt-2 font-display text-xl font-semibold text-ink-100">
                  Premier League and Championship pathways
                </h4>
              </div>
              <div className="hidden rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300 ring-1 ring-emerald-400/30 sm:inline-flex">
                Match-tested
              </div>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {fixtures.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-ink-200"
                >
                  {f}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}

import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal, Stagger, staggerItem } from '@/components/ui/Reveal'
import { motion } from 'framer-motion'
import { profile, strengths, languages } from '@/data/content'
import {
  HiAcademicCap,
  HiOutlineLightningBolt,
  HiOutlineUserGroup,
  HiOutlineChip,
} from 'react-icons/hi'
import { IconType } from 'react-icons'

const icons: Record<string, IconType> = {
  Leadership: HiOutlineUserGroup,
  Discipline: HiAcademicCap,
  Communication: HiOutlineChip,
  'Fast learner': HiOutlineLightningBolt,
}

export function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="01 — About me"
          title="Academics first. Discipline always. Eyes on the markets."
          description={profile.longBio}
        />

        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:gap-14">
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {strengths.map((s) => {
              const Icon = icons[s.title] ?? HiOutlineLightningBolt
              return (
                <motion.div key={s.title} variants={staggerItem}>
                  <GlassCard className="h-full">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400/10 text-gold-300 ring-1 ring-inset ring-gold-300/30">
                      <Icon className="text-xl" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink-100">{s.title}</h3>
                    <p className="mt-2 text-sm text-ink-300 text-pretty">{s.description}</p>
                  </GlassCard>
                </motion.div>
              )
            })}
          </Stagger>

          <Reveal direction="up" delay={0.1}>
            <GlassCard className="h-full">
              <h3 className="font-display text-lg font-semibold text-ink-100">Languages</h3>
              <p className="mt-1 text-sm text-ink-400">
                Comfortable across cultures and across continents.
              </p>
              <ul className="mt-5 divide-y divide-white/5">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-center justify-between py-3">
                    <span className="font-medium text-ink-100">{l.name}</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-gold-300/90">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-gold-300/20 bg-gold-400/[0.04] p-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-gold-300/80">
                  The plan
                </p>
                <p className="mt-2 text-sm text-ink-200 text-pretty">
                  Top GCSE grades → strong A-levels in Maths, Economics and a science → target a
                  Russell Group university → internships in equity research / M&amp;A → analyst
                  programme at a global investment bank.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

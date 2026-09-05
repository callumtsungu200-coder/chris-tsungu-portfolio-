import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal, Stagger, staggerItem } from '@/components/ui/Reveal'
import { motion } from 'framer-motion'
import { profile, strengths, languages, interests } from '@/data/content'
import {
  HiAcademicCap,
  HiOutlineLightningBolt,
  HiOutlineChip,
  HiOutlineCurrencyPound,
} from 'react-icons/hi'
import { IconType } from 'react-icons'

const icons: Record<string, IconType> = {
  Ambitious: HiOutlineLightningBolt,
  Analytical: HiOutlineChip,
  Entrepreneurial: HiOutlineCurrencyPound,
  Independent: HiAcademicCap,
}

export function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="01 — About me"
          title="Curious about how technology is reshaping finance."
          description={profile.longBio}
        />

        {/* Interests strip */}
        <Reveal direction="up" className="mb-10">
          <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-5 md:p-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-gold-300/80">
              What I&apos;m interested in
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {interests.map((i) => (
                <li
                  key={i.label}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-ink-200"
                >
                  {i.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

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
                  Strong GCSEs in 2027 → Maths, Economics and Computer Science at sixth form →
                  target a Russell Group university → build depth in FinTech, quantitative and
                  financial analysis → work towards a career in Finance and financial technology.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

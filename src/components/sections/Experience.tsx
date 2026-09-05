import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal, Stagger, staggerItem } from '@/components/ui/Reveal'
import { motion } from 'framer-motion'
import { experiences, certifications } from '@/data/content'
import { HiOutlineBriefcase, HiOutlineBadgeCheck } from 'react-icons/hi'

export function Experience() {
  return (
    <section id="experience" className="relative section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="03 — Experience"
          title="Real exposure to real workplaces."
          description="Professional insight and online work experience with major organisations, developed through initiative outside of school."
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr] lg:gap-10">
          <Stagger className="space-y-4">
            {experiences.map((e) => (
              <motion.div key={`${e.organisation}-${e.role}`} variants={staggerItem}>
                <GlassCard>
                  <div className="flex items-start gap-4">
                    <div
                      aria-hidden
                      className="mt-1 grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gold-400/10 text-gold-300 ring-1 ring-inset ring-gold-300/30"
                    >
                      <HiOutlineBriefcase className="text-xl" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display text-lg font-semibold text-ink-100">
                          {e.organisation}
                        </h3>
                        {e.via && (
                          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-400">
                            via {e.via}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm font-medium text-gold-200">{e.role}</p>
                      <p className="mt-2 text-sm text-ink-300 text-pretty">{e.detail}</p>
                      {e.bullets && e.bullets.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {e.bullets.map((b) => (
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
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </Stagger>

          <Reveal direction="right">
            <GlassCard className="h-full" hover={false}>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400/10 text-gold-300 ring-1 ring-inset ring-gold-300/30">
                  <HiOutlineBadgeCheck className="text-xl" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-100">
                  Certifications & Development
                </h3>
              </div>
              <p className="mt-3 text-sm text-ink-400">
                Additional programmes I&apos;ve completed to build skills in AI, digital
                communication, procurement and workplace practice.
              </p>
              <ul className="mt-5 space-y-3">
                {certifications.map((c) => (
                  <li
                    key={c.name}
                    className="rounded-xl bg-white/[0.02] p-3 ring-1 ring-inset ring-white/5"
                  >
                    <p className="text-sm font-medium text-ink-100">{c.name}</p>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-widest text-gold-300/80">
                      {c.issuer}
                    </p>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

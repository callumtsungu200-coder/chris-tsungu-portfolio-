import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'
import { grades, gradesMeta, profile } from '@/data/content'
import { motion } from 'framer-motion'

function GradePill({ value }: { value: string }) {
  const numeric = parseInt(value, 10)
  const top = !isNaN(numeric) && numeric >= 7
  return (
    <span
      className={
        top
          ? 'inline-flex min-w-[2.25rem] justify-center rounded-md bg-gold-400/15 px-2 py-0.5 font-mono text-sm text-gold-200 ring-1 ring-inset ring-gold-300/30'
          : 'inline-flex min-w-[2.25rem] justify-center rounded-md bg-ink-700/60 px-2 py-0.5 font-mono text-sm text-ink-100 ring-1 ring-inset ring-white/10'
      }
    >
      {value}
    </span>
  )
}

export function Education() {
  return (
    <section id="education" className="relative section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="05 — Education"
          title="Building strong GCSE foundations."
          description={`Studying ten GCSEs at ${profile.school}. Sixth-form plan: Mathematics, Economics and Computer Science.`}
        />

        <div className="grid gap-6 lg:grid-cols-[1fr,1.4fr]">
          <Reveal direction="left">
            <GlassCard className="h-full" hover={false}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-gold-300/80">
                    School
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-ink-100">
                    {profile.school}
                  </h3>
                  <p className="mt-1 text-sm text-ink-400">{profile.location}</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-ink-200">
                  2022 — Present
                </div>
              </div>

              <div className="mt-6 grid gap-2 text-sm">
                <div className="flex items-center justify-between rounded-xl bg-white/[0.02] px-3 py-2.5 ring-1 ring-inset ring-white/5">
                  <span className="text-ink-300">Year group</span>
                  <span className="font-medium text-ink-100">{profile.yearGroup}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/[0.02] px-3 py-2.5 ring-1 ring-inset ring-white/5">
                  <span className="text-ink-300">GCSEs expected</span>
                  <span className="font-medium text-ink-100">{profile.gcseYear}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/[0.02] px-3 py-2.5 ring-1 ring-inset ring-white/5">
                  <span className="text-ink-300">Pathway</span>
                  <span className="font-medium text-ink-100">GCSE · 10 subjects</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/[0.02] px-3 py-2.5 ring-1 ring-inset ring-white/5">
                  <span className="text-ink-300">Role</span>
                  <span className="font-medium text-gold-200">School Prefect</span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-gold-300/20 bg-gold-400/[0.04] p-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-gold-300/80">
                  Sixth form plan
                </p>
                <p className="mt-2 text-sm text-ink-200 text-pretty">
                  Mathematics, Economics and Computer Science — the three subjects most directly
                  aligned with a career in Finance and FinTech.
                </p>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal direction="right">
            <GlassCard className="h-full" hover={false}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-gold-300/80">
                    {gradesMeta.label}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-ink-100">
                    Actual grades achieved
                  </h3>
                </div>
                <div className="rounded-full bg-gold-400/15 px-3 py-1 text-xs font-medium text-gold-200 ring-1 ring-gold-300/30">
                  Top 8 · {gradesMeta.topEightTotal} points
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-inset ring-white/5">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/[0.03] text-[11px] uppercase tracking-widest text-ink-400">
                    <tr>
                      <th className="px-4 py-3 font-medium">Subject</th>
                      <th className="px-4 py-3 font-medium text-right">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {grades.map((g, i) => (
                      <motion.tr
                        key={g.subject}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.35, delay: i * 0.04 }}
                        className="hover:bg-white/[0.02]"
                      >
                        <td className="px-4 py-3 font-medium text-ink-100">{g.subject}</td>
                        <td className="px-4 py-3 text-right">
                          <GradePill value={g.grade} />
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs text-ink-500">{gradesMeta.note}</p>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/useSEO'
import { PageHeader } from '@/components/ui/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, Stagger, staggerItem } from '@/components/ui/Reveal'
import { MaybeTodo } from '@/components/ui/Tag'
import { profile } from '@/data/content'
import { gcseSubjects, predictedGrades, reportMeta, intendedALevels, backupALevel, academicInterests, competitions, futureAcademic } from '@/data/education'

function GradePill({ value }: { value: string }) {
  const top = parseInt(value, 10) >= 7
  return (
    <span className={top ? 'inline-flex min-w-[2.25rem] justify-center rounded-md bg-gold-400/15 px-2 py-0.5 font-mono text-sm text-gold-500 ring-1 ring-inset ring-gold-300/30' : 'inline-flex min-w-[2.25rem] justify-center rounded-md bg-ink-700/60 px-2 py-0.5 font-mono text-sm text-ink-100 ring-1 ring-inset ring-line'}>
      {value}
    </span>
  )
}

export function EducationPage() {
  useSEO({
    title: 'Education',
    description: `Chris Tsungu's education: ten GCSEs at The Stanway School with exam boards and teacher estimated grades (PEG), intended A-levels in Mathematics, Further Mathematics, Economics and Physics with Chemistry as backup, and competitions.`,
  })

  return (
    <>
      <PageHeader eyebrow="Education" title="Ten GCSEs now; Maths, Further Maths, Economics and Physics next." description={`${profile.yearGroup} at ${profile.school}, Essex. GCSE examinations in summer ${profile.gcseYear}. A-level subjects listed here are intended, not completed.`} />

      <section className="container pb-20">
        <div className="grid gap-6 lg:grid-cols-[1fr,1.3fr]">
          <Reveal direction="left">
            <GlassCard hover={false} className="h-full">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold-300/80">School</p>
              <h2 className="mt-1 font-display text-2xl font-medium text-ink-100">{profile.school}</h2>
              <p className="mt-1 text-sm text-ink-400">{profile.location} · 2022 to present</p>
              <dl className="mt-6 grid gap-2 text-sm">
                {[
                  ['Year group', profile.yearGroup],
                  ['GCSEs sat', `Summer ${profile.gcseYear}`],
                  ['Subjects', `${gcseSubjects.length}, including Triple Science`],
                  ['Roles', 'School Prefect · Student Leadership Team · Library volunteer'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between gap-4 rounded-2xl bg-paper-50 px-3 py-2.5 ring-1 ring-inset ring-line">
                    <dt className="text-ink-300">{k}</dt>
                    <dd className="text-right font-medium text-ink-100">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 rounded-2xl border border-gold-300/20 bg-gold-400/[0.04] p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold-300/80">Intended A-levels (from 2027)</p>
                <ul className="mt-3 space-y-2">
                  {intendedALevels.map((a) => (
                    <li key={a.subject}>
                      <p className="font-medium text-ink-100">{a.subject}</p>
                      <p className="text-xs text-ink-400">{a.why}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl bg-paper-50 px-3 py-2.5 ring-1 ring-inset ring-line">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">Backup</p>
                  <p className="mt-0.5 font-medium text-ink-100">{backupALevel.subject}</p>
                  <p className="text-xs text-ink-400">{backupALevel.why}</p>
                </div>
                <p className="mt-3 text-xs text-ink-500">Intended choices, not yet started or completed.</p>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal direction="right">
            <GlassCard hover={false} className="h-full">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold-300/80">GCSE subjects and exam boards</p>
              <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-inset ring-line">
                <table className="w-full text-left text-sm">
                  <thead className="bg-paper-50 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-medium">Subject</th>
                      <th scope="col" className="px-4 py-3 font-medium">Board</th>
                      <th scope="col" className="px-4 py-3 text-right font-medium">Target</th>
                      <th scope="col" className="px-4 py-3 text-right font-medium" title="Pupil Estimated Grade">PEG</th>
                      <th scope="col" className="hidden px-4 py-3 text-right font-medium sm:table-cell">Effort</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {gcseSubjects.map((s, i) => {
                      const p = predictedGrades.find((m) => m.subject === s.subject)
                      return (
                        <motion.tr key={s.subject} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.35, delay: i * 0.03 }} className="hover:bg-ink-900">
                          <td className="px-4 py-3 font-medium text-ink-100">
                            {s.subject}
                            {s.note && <span className="ml-2 text-xs text-ink-400">({s.note})</span>}
                          </td>
                          <td className="px-4 py-3 text-ink-300">{s.board}</td>
                          <td className="px-4 py-3 text-right font-mono text-sm text-ink-400">{p?.target ?? '-'}</td>
                          <td className="px-4 py-3 text-right">{p ? <GradePill value={p.grade} /> : <span className="text-ink-500">-</span>}</td>
                          <td className="hidden px-4 py-3 text-right text-xs text-ink-300 sm:table-cell">{p?.effort ?? '-'}</td>
                        </motion.tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {[
                  [`${reportMeta.atOrAboveTarget}/10`, 'subjects at or above target'],
                  [`${reportMeta.behaviourExcellent}/10`, 'behaviour rated Excellent'],
                  [`${reportMeta.effortExcellent}/10`, 'effort rated Excellent'],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-2xl bg-paper-50 px-3 py-2.5 ring-1 ring-inset ring-line">
                    <p className="font-display text-xl font-medium text-ink-100">{v}</p>
                    <p className="text-xs text-ink-400">{l}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-ink-500">{reportMeta.note} Source: {reportMeta.source}. Attendance {reportMeta.attendance}.</p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <section className="container pb-20">
        <SectionHeading eyebrow="Academic interests" title="What I enjoy studying, and why." />
        <Stagger className="grid gap-3 sm:grid-cols-2">
          {academicInterests.map((a) => (
            <motion.div key={a} variants={staggerItem}>
              <GlassCard hover={false}>
                <p className="text-sm text-ink-200 text-pretty">{a}</p>
              </GlassCard>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="container pb-20">
        <SectionHeading eyebrow="Competitions" title="Mathematics and technology competitions." description="Participation only is listed, no rankings or results are claimed." />
        <Stagger className="grid gap-4 md:grid-cols-3">
          {competitions.map((c) => (
            <motion.div key={c.name} variants={staggerItem}>
              <GlassCard className="h-full">
                <p className="text-xs text-ink-400"><MaybeTodo value={c.year} fallback="year to be confirmed" /></p>
                <h3 className="mt-2 font-display text-lg font-medium text-ink-100">{c.name}</h3>
                <p className="mt-2 text-sm text-ink-300">{c.detail}</p>
              </GlassCard>
            </motion.div>
          ))}
        </Stagger>
        <p className="mt-6 text-sm text-ink-400">
          Awards, leadership and volunteering are on the <Link to="/achievements" className="text-gold-500 hover:text-gold-100">Achievements page</Link>.
        </p>
      </section>

      <section className="container pb-24">
        <Reveal>
          <GlassCard hover={false}>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold-300/80">Future academic ambitions</p>
            <ol className="mt-4 grid gap-3 md:grid-cols-4">
              {futureAcademic.map((f, i) => (
                <li key={f} className="rounded-2xl bg-paper-50 p-4 ring-1 ring-inset ring-line">
                  <span className="font-mono text-xs text-gold-300">0{i + 1}</span>
                  <p className="mt-2 text-sm text-ink-200 text-pretty">{f}</p>
                </li>
              ))}
            </ol>
          </GlassCard>
        </Reveal>
      </section>
    </>
  )
}

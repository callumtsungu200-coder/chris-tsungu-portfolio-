import { motion } from 'framer-motion'
import { HiOutlineBriefcase, HiOutlineBadgeCheck, HiOutlineExternalLink } from 'react-icons/hi'
import { useSEO } from '@/hooks/useSEO'
import { PageHeader } from '@/components/ui/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Tag, MaybeTodo } from '@/components/ui/Tag'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, Stagger, staggerItem } from '@/components/ui/Reveal'
import { experiences, experienceKindLabel, certificates, professionalDevelopment, type ExperienceKind } from '@/data/experience'

const kindTone: Record<ExperienceKind, 'gold' | 'live' | 'progress' | 'ongoing' | 'mute'> = {
  commercial: 'gold',
  placement: 'live',
  programme: 'progress',
  insight: 'ongoing',
  conversation: 'mute',
}

export function ExperiencePage() {
  useSEO({
    title: 'Experience & professional development',
    description: 'Commercial web development for two clients, software engineering insight at TUI, AXA UK online work experience, Springpod programmes with Amazon and Rolls-Royce, and ongoing professional development.',
  })

  return (
    <>
      <PageHeader eyebrow="Experience" title="Commercial work, placements, programmes, and the difference between them." description="Everything here is labelled by type, so paid client work, formal work experience, employer programmes and informal conversations are not blurred together." />

      <section className="container pb-20" aria-labelledby="exp-timeline">
        <SectionHeading id="exp-timeline" eyebrow="Experience timeline" title="What I have done so far." />
        <div className="relative">
          <div aria-hidden className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-transparent via-line to-transparent" />
          <Stagger className="space-y-6">
            {experiences.map((e) => (
              <motion.div key={e.organisation + e.role} variants={staggerItem} className="relative pl-14">
                <span className="absolute left-5 top-6 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-ink-900 ring-1 ring-line">
                  <HiOutlineBriefcase className="text-gold-300" aria-hidden />
                </span>
                <GlassCard hover={false} as="article">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone={kindTone[e.kind]}>{experienceKindLabel[e.kind]}</Badge>
                    {e.via && <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">via {e.via}</span>}
                    <span className="ml-auto text-xs text-ink-400"><MaybeTodo value={e.period} fallback="date to be confirmed" /></span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-medium text-ink-100">{e.organisation}</h3>
                  <p className="mt-1 text-sm font-medium text-gold-500">{e.role}</p>
                  <p className="mt-2 text-sm text-ink-300 text-pretty">{e.detail}</p>
                  {e.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-ink-300">
                          <span aria-hidden className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-gold-300" />
                          <span className="text-pretty">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {e.skills && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.skills.map((s) => <Tag key={s}>{s}</Tag>)}
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container pb-20" aria-labelledby="exp-certs" id="certificates">
        <SectionHeading id="exp-certs" eyebrow="Certificates and programmes" title="Completed programmes." description="Four Springpod programmes completed in 2026, each with its issue date and credential ID." />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <motion.div key={c.name + c.issuer} variants={staggerItem}>
              <GlassCard className="h-full" hover={false}>
                {c.image ? (
                  <img src={c.image} alt={`${c.name} certificate from ${c.issuer}`} loading="lazy" className="mb-4 w-full rounded-2xl ring-1 ring-line" />
                ) : (
                  <div className="mb-4 grid aspect-[4/3] place-items-center rounded-2xl border border-dashed border-ink-600 text-ink-500">
                    <HiOutlineBadgeCheck className="text-3xl" aria-hidden />
                  </div>
                )}
                <h3 className="font-display text-base font-medium text-ink-100">{c.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-gold-300/80">
                  {c.issuer}{c.via ? ` · via ${c.via}` : ''}
                </p>
                <p className="mt-2 text-xs text-ink-400">Issued: <MaybeTodo value={c.date} fallback="date to be confirmed" /></p>
                {c.credentialId && <p className="mt-0.5 font-mono text-[11px] text-ink-500">Credential ID {c.credentialId}</p>}
                {c.verifyUrl && (
                  <a href={c.verifyUrl} target="_blank" rel="noreferrer noopener" className="mt-3 inline-flex items-center gap-1 text-sm text-gold-500 hover:text-gold-100">
                    Verify <HiOutlineExternalLink aria-hidden />
                  </a>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="container pb-24" aria-labelledby="exp-dev">
        <SectionHeading id="exp-dev" eyebrow="Professional development" title="How I am building towards the career." />
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {professionalDevelopment.map((d, i) => (
              <GlassCard key={d.title} hover={false}>
                <span className="font-mono text-[11px] text-gold-300/80">0{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-medium text-ink-100">{d.title}</h3>
                <p className="mt-2 text-sm text-ink-300 text-pretty">{d.detail}</p>
              </GlassCard>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  )
}

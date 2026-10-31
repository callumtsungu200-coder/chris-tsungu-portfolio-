import { motion } from 'framer-motion'
import { HiPlay } from 'react-icons/hi'
import { useSEO } from '@/hooks/useSEO'
import { PageHeader } from '@/components/ui/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Picture } from '@/components/ui/Picture'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MaybeTodo } from '@/components/ui/Tag'
import { Reveal, Stagger, staggerItem } from '@/components/ui/Reveal'
import { footballProfile, clubs, competitiveExperience, transferableSkills, gallery, reelEmbedUrl } from '@/data/football'

const kindTone = { club: 'gold', academy: 'ongoing', trial: 'progress' } as const
const kindLabel = { club: 'Club', academy: 'Academy', trial: 'Trial' } as const

export function FootballPage() {
  useSEO({
    title: 'Football',
    description: 'Chris Tsungu\'s football background: left wing / striker with Witham Town, Lewisham Borough and FITC Academy, an Ipswich Town Academy trial, highlight reel, and the teamwork, discipline and resilience the game has built.',
  })

  return (
    <>
      <PageHeader eyebrow="Football & sporting experience" title="Discipline, learned at full speed." description={footballProfile.intro} />

      <section className="container pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.7fr,1.3fr] lg:gap-12">
          <Reveal direction="left">
            <div className="lg:sticky lg:top-28">
              <figure className="relative mx-auto max-w-xs overflow-hidden rounded-2xl bg-ink-900 ring-1 ring-line shadow-glass lg:max-w-none">
                <Picture
                  webp={footballProfile.photo.webp}
                  fallback={footballProfile.photo.jpg}
                  alt={footballProfile.photo.alt}
                  width={footballProfile.photo.width}
                  height={footballProfile.photo.height}
                  loading="eager"
                  imgClassName="h-auto w-full"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/95 to-transparent p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold-500/90">Position</p>
                  <p className="mt-0.5 font-display text-lg font-medium text-ink-100">{footballProfile.position}</p>
                  <p className="text-xs text-ink-300">{footballProfile.level}</p>
                </figcaption>
              </figure>
            </div>
          </Reveal>

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-medium text-ink-100">Clubs, academies and trials</h2>
              <Stagger className="mt-5 grid gap-4 sm:grid-cols-2">
                {clubs.map((c) => (
                  <motion.div key={c.name} variants={staggerItem}>
                    <GlassCard className="h-full" as="article">
                      <div className="flex items-center justify-between gap-2">
                        <Badge tone={kindTone[c.kind]}>{kindLabel[c.kind]}</Badge>
                        <span className="text-xs text-ink-400"><MaybeTodo value={c.period} fallback="dates tbc" /></span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-medium text-ink-100">{c.name}</h3>
                      <p className="text-sm text-gold-500">{c.role}</p>
                      <p className="mt-2 text-sm text-ink-300 text-pretty">{c.detail}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </Stagger>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-ink-100">Competitive experience</h2>
              <ul className="mt-4 space-y-2">
                {competitiveExperience.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-ink-300">
                    <span aria-hidden className="mt-2.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-gold-300" />
                    <span className="text-pretty">{x}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-ink-500">No goal or assist statistics are published here, I do not keep a verified record of them.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <SectionHeading eyebrow="Transferable skills" title="What the game has actually taught me." />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {transferableSkills.map((s) => (
            <motion.div key={s.title} variants={staggerItem}>
              <GlassCard className="h-full">
                <h3 className="font-display text-lg font-medium text-gold-500">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-300 text-pretty">{s.detail}</p>
              </GlassCard>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="container pb-24">
        <SectionHeading eyebrow="Highlights" title="Moments from the game." />
        <div className="grid gap-4 sm:grid-cols-2">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.06}>
              <figure className="group overflow-hidden rounded-2xl ring-1 ring-line">
                <div className="aspect-video overflow-hidden">
                  <Picture webp={g.src} fallback={g.fallback} alt={g.alt} imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="flex items-center justify-between bg-ink-900/60 px-4 py-3">
                  <p className="text-sm font-medium text-ink-100">{g.caption}</p>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold-300/80">0{i + 1}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="glass relative overflow-hidden rounded-2xl">
            <div className="grid items-stretch md:grid-cols-[1fr,1.2fr]">
              <div className="p-7 md:p-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold-300/80">Highlight reel</p>
                <h3 className="mt-3 font-display text-2xl font-medium text-ink-100 md:text-3xl">From the wing.</h3>
                <p className="mt-3 text-sm text-ink-300 text-pretty">A short reel from competitive fixtures.</p>
              </div>
              <div className="relative aspect-video w-full bg-ink-900 md:aspect-auto">
                {reelEmbedUrl ? (
                  <iframe src={reelEmbedUrl} title="Chris Tsungu, football highlight reel" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" className="absolute inset-0 h-full w-full" />
                ) : (
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-20 w-20 place-items-center rounded-full bg-gold-400 text-ink-950"><HiPlay className="text-3xl" /></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

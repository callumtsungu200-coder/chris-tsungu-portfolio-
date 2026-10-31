import { motion } from 'framer-motion'
import { HiOutlineChip, HiOutlineCurrencyPound, HiOutlineLightningBolt, HiOutlineAcademicCap, HiOutlineSparkles, HiOutlineFlag } from 'react-icons/hi'
import type { IconType } from 'react-icons'
import { useSEO } from '@/hooks/useSEO'
import { PageHeader } from '@/components/ui/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Picture } from '@/components/ui/Picture'
import { Reveal, Stagger, staggerItem } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { profile, strengths, languages, philosophy } from '@/data/content'
import { intendedALevels, backupALevel } from '@/data/education'

type Area = { id: string; icon: IconType; title: string; paragraphs: string[] }

const areas: Area[] = [
  {
    id: 'background',
    icon: HiOutlineAcademicCap,
    title: 'Personal background',
    paragraphs: [
      `I am a Year 11 student at ${profile.school} in Essex, studying ten GCSEs including Triple Science, Computer Science, Spanish and Media Studies. I am a School Prefect and a member of the Student Leadership Team, and I volunteer in the school library.`,
      'What motivates me is understanding how things work well enough to build or improve them, whether that is a revision app, a client\'s website or a model of how a price moves. I learn best by making something, breaking it, and working out why.',
    ],
  },
  {
    id: 'technology',
    icon: HiOutlineChip,
    title: 'Technology',
    paragraphs: [
      'I write JavaScript and TypeScript most days and Python when a project calls for it. I have built and shipped Grade Lab, a GCSE revision platform with thousands of flashcards, spaced repetition and account sync, and I have built this site from scratch twice.',
      'I use AI tools as part of how I develop, for scaffolding, refactoring and formatting content, but I review and test everything myself and I am more interested in understanding the code than in generating it. I am also experimenting with AI beyond the browser on a Raspberry Pi voice-assistant prototype.',
    ],
  },
  {
    id: 'finance',
    icon: HiOutlineCurrencyPound,
    title: 'Finance and economics',
    paragraphs: [
      'My long-term interest is the financial sector, investment banking or quantitative finance in particular. I am drawn to the quantitative side: probability, statistics, risk and the models that turn uncertainty into decisions.',
      'For over a year I have followed cryptocurrency markets closely and tracked a small portfolio to learn about volatility and risk first-hand. I follow macroeconomics (inflation, interest rates, central-bank decisions) and I am interested in financial technology as the place where my two interests overlap.',
    ],
  },
  {
    id: 'entrepreneurship',
    icon: HiOutlineLightningBolt,
    title: 'Entrepreneurship',
    paragraphs: [
      'I have identified local businesses without a web presence, pitched a solution, agreed a price and delivered, two websites so far: MO BARBER in Colchester and Brows by Deja, a brow studio in Akron, Ohio. The scale is small but the loop is real: find a need, build a product, get paid, learn from the feedback.',
      'Grade Lab taught me the other side of this: building something people choose to use, and keeping it going.',
    ],
  },
  {
    id: 'philosophy',
    icon: HiOutlineSparkles,
    title: 'Personal philosophy',
    paragraphs: [philosophy.quote, philosophy.detail],
  },
  {
    id: 'ambitions',
    icon: HiOutlineFlag,
    title: 'Future ambitions',
    paragraphs: [
      `After GCSEs in 2027 I intend to take A-levels in ${intendedALevels.map((a) => a.subject).join(', ').replace(/, ([^,]*)$/, ' and $1')}, with ${backupALevel.subject} as my backup, then a quantitative degree.`,
      'The long-term goal is a career in the financial sector, investment banking or quantitative finance, while continuing to explore the intersection between technology, mathematics and financial markets.',
    ],
  },
]

export function AboutPage() {
  useSEO({
    title: 'About',
    description: `Who ${profile.name} is: a Year 11 student in Essex with interests in finance, quantitative thinking, software and AI, background, motivation and ambitions.`,
    type: 'profile',
  })

  return (
    <>
      <PageHeader eyebrow="About me" title="Curious about how markets, mathematics and software fit together." description={profile.shortBio} />

      <section className="container pb-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:gap-14">
          <Reveal direction="left">
            <div className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-ink-700/60 to-ink-900 ring-1 ring-line shadow-glass">
                <Picture
                  webp={profile.portrait.webp}
                  webpSmall={profile.portrait.webpSmall}
                  fallback={profile.portrait.jpg}
                  alt={profile.portrait.alt}
                  width={profile.portrait.width}
                  height={profile.portrait.height}
                  loading="eager"
                  imgClassName="h-auto w-full"
                />
              </div>
              <GlassCard hover={false} className="mt-4">
                <h2 className="font-display text-lg font-medium text-ink-100">Languages</h2>
                <ul className="mt-3 divide-y divide-line">
                  {languages.map((l) => (
                    <li key={l.name} className="flex items-center justify-between py-2.5">
                      <span className="font-medium text-ink-100">{l.name}</span>
                      <span className="font-mono text-xs uppercase tracking-widest text-gold-300/90">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </Reveal>

          <div className="space-y-6">
            {areas.map((a, i) => {
              const Icon = a.icon
              return (
                <Reveal key={a.id} delay={i * 0.03}>
                  <GlassCard hover={false} id={a.id} as="article">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gold-400/10 text-gold-300 ring-1 ring-inset ring-gold-300/30">
                        <Icon className="text-xl" aria-hidden />
                      </span>
                      <h2 className="font-display text-xl font-medium text-ink-100">{a.title}</h2>
                    </div>
                    <div className="mt-4 space-y-3 text-ink-300 text-pretty">
                      {a.paragraphs.map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                      ))}
                    </div>
                  </GlassCard>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s) => (
            <motion.div key={s.title} variants={staggerItem}>
              <GlassCard className="h-full">
                <h3 className="font-display text-lg font-medium text-ink-100">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-300 text-pretty">{s.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </Stagger>
        <div className="mt-10 flex flex-wrap gap-3">
          <LinkButton href="/projects">See the projects</LinkButton>
          <LinkButton href="/finance" variant="outline">Finance & economics</LinkButton>
          <LinkButton href="/football" variant="outline">Football</LinkButton>
        </div>
      </section>
    </>
  )
}

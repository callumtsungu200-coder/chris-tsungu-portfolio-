import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiOutlineDocumentDownload, HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useSEO } from '@/hooks/useSEO'
import { LinkButton } from '@/components/ui/Button'
import { StatCard } from '@/components/ui/StatCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge, toneForStatus } from '@/components/ui/Badge'
import { Tag } from '@/components/ui/Tag'
import { Picture } from '@/components/ui/Picture'
import { Marquee } from '@/components/ui/Marquee'
import { Arcs } from '@/components/ui/Arcs'
import { Reveal, Stagger, staggerItem, MaskedWords } from '@/components/ui/Reveal'
import { profile, heroStats, highlights, interests, philosophy } from '@/data/content'
import { featuredProjects, statusLabel } from '@/data/projects'
import { nowItems, nowStatusLabel, nowLastUpdated } from '@/data/now'
import { experiences, experienceKindLabel } from '@/data/experience'
import { timeline } from '@/data/timeline'
import { cn } from '@/lib/cn'

const EASE = [0.22, 1, 0.36, 1] as const

export function HomePage() {
  useSEO({ title: `${profile.name} | Student · Finance · Software`, description: profile.shortBio, type: 'profile' })
  return (
    <>
      <Hero />
      <Marquee items={interests.map((i) => i.label)} />
      <Highlights />
      <FeaturedProjects />
      <CurrentlyWorkingOn />
      <ExperienceSummary />
      <Philosophy />
      <TimelineSection />
      <ContactCTA />
    </>
  )
}

/* ------------------------------------------------------------------ Hero */

const bubbles = [
  { label: 'About', text: 'Year 11 at The Stanway School, Essex. Aiming for investment banking or quantitative finance.', to: '/about', side: 'left' as const },
  { label: 'Projects', text: 'Built Grade Lab, a GCSE revision platform with 4,700+ flashcards, and sold websites to two clients.', to: '/projects', side: 'right' as const },
  { label: 'Finance', text: 'Aiming for investment banking or quantitative finance, with over a year of independent market research behind me.', to: '/finance', side: 'left' as const },
  { label: 'Experience', text: 'TUI work shadowing and four employer programme certificates from Amazon, Rolls-Royce and AXA UK.', to: '/experience', side: 'right' as const },
]

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-12 md:pt-40" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora" aria-hidden />
      <Arcs className="pointer-events-none absolute inset-x-0 -top-20 -z-10 mx-auto h-[30rem] w-full max-w-6xl" />

      <div className="container flex flex-col items-center text-center">
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-base text-ink-400 md:text-lg">
          {profile.yearGroup} student · {profile.school} · {profile.location}
        </motion.p>
        <h1 id="hero-heading" className="mt-3 font-display text-6xl font-medium leading-[0.95] tracking-tightest text-ink-100 sm:text-7xl md:text-8xl lg:text-[7rem]">
          <MaskedWords text="Chris Tsungu" delay={0.1} />
        </h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: EASE }} className="mt-6 max-w-2xl text-lg text-ink-300 text-pretty md:text-xl">
          Building towards a career in finance, and writing the code along the way.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65, ease: EASE }} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href="/projects" kicker="See the work">Projects <HiArrowRight aria-hidden /></LinkButton>
          <LinkButton href="/cv" variant="outline" kicker="Download"><HiOutlineDocumentDownload aria-hidden /> CV</LinkButton>
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full bg-ink-800 text-ink-100 transition-colors hover:bg-ink-700"><FaLinkedin /></a>
          <a href={profile.contact.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full bg-ink-800 text-ink-100 transition-colors hover:bg-ink-700"><FaGithub /></a>
        </motion.div>
      </div>

      {/* Big rounded card: portrait + conversation bubbles */}
      <div className="container mt-14">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7, ease: EASE }} className="grid overflow-hidden rounded-[2rem] border border-line bg-ink-900 shadow-paper md:grid-cols-[0.9fr,1.1fr]">
          <figure className="relative min-h-[22rem] bg-paper-50">
            <motion.div initial={{ clipPath: 'inset(100% 0 0 0)' }} animate={{ clipPath: 'inset(0% 0 0 0)' }} transition={{ duration: 1.1, delay: 0.9, ease: EASE }} className="absolute inset-0">
              <Picture webp={profile.portrait.webp} webpSmall={profile.portrait.webpSmall} fallback={profile.portrait.jpg} alt={profile.portrait.alt} width={profile.portrait.width} height={profile.portrait.height} loading="eager" fetchPriority="high" className="block h-full" imgClassName="h-full w-full object-cover object-top" />
            </motion.div>
            <figcaption className="absolute left-4 top-4 rounded-full bg-paper-50/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400 backdrop-blur">
              {profile.name} · Essex
            </figcaption>
          </figure>

          <div className="flex flex-col justify-center gap-3 p-6 md:p-10">
            {bubbles.map((b, i) => (
              <motion.div key={b.label} initial={{ opacity: 0, y: 14, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 1.1 + i * 0.18, ease: EASE }} className={cn('flex', b.side === 'right' ? 'justify-end' : 'justify-start')}>
                <Link to={b.to} className={cn('group block max-w-md rounded-3xl p-4 text-left transition-transform duration-300 hover:-translate-y-0.5 md:p-5', b.side === 'right' ? 'rounded-br-md bg-ink-100 text-paper-50' : 'rounded-bl-md bg-paper-50 text-ink-100')}>
                  <span className={cn('font-mono text-[10px] uppercase tracking-[0.14em]', b.side === 'right' ? 'text-gold-200' : 'text-gold-500')}>{b.label}</span>
                  <p className={cn('mt-1 text-sm leading-relaxed', b.side === 'right' ? 'text-paper-50/85' : 'text-ink-300')}>{b.text}</p>
                  <span className={cn('mt-2 inline-flex items-center gap-1 text-xs font-medium', b.side === 'right' ? 'text-gold-200' : 'text-gold-500')}>Open <HiArrowRight className="transition-transform group-hover:translate-x-0.5" aria-hidden /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.6 }} className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
          {heroStats.map((s) => <StatCard key={s.label} {...s} className="min-h-[9rem]" />)}
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ Highlights */

function Highlights() {
  return (
    <section className="relative section-padding" aria-labelledby="highlights-heading">
      <div className="container">
        <SectionHeading id="highlights-heading" eyebrow="Highlights" title="Evidence, not adjectives." description="A few things I have actually done. Each one links to the detail." align="center" />
        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div key={h.title} variants={staggerItem}>
              <Link to={h.to} className="group block h-full">
                <GlassCard className="flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-800 font-mono text-[11px] text-ink-300">0{i + 1}</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-800 text-ink-300 transition-colors group-hover:bg-gold-400 group-hover:text-white"><HiArrowRight aria-hidden /></span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-medium leading-tight tracking-tight text-ink-100">{h.title}</h3>
                  <p className="mt-3 text-sm text-ink-300 text-pretty">{h.detail}</p>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ------------------------------------------------------ Featured projects */

function FeaturedProjects() {
  return (
    <section className="relative section-padding" aria-labelledby="featured-heading">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="featured-heading" eyebrow="Featured projects" title="Built, shipped, still improving." className="mb-0 md:mb-0" />
          <Reveal direction="left"><LinkButton href="/projects" variant="outline">All projects <HiArrowRight aria-hidden /></LinkButton></Reveal>
        </div>
        <Stagger className="mt-10 grid gap-3 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <motion.div key={p.slug} variants={staggerItem}>
              <Link to={`/projects/${p.slug}`} className="group block h-full">
                <GlassCard className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <Badge tone={toneForStatus(p.status)}>{statusLabel[p.status]}</Badge>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-800 text-ink-300 transition-colors group-hover:bg-gold-400 group-hover:text-white"><HiArrowRight aria-hidden /></span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-medium leading-tight tracking-tight text-ink-100">{p.title}</h3>
                  <p className="mt-1 text-sm text-gold-500">{p.tagline}</p>
                  <p className="mt-3 text-sm text-ink-300 text-pretty">{p.summary}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                    {p.technologies.slice(0, 5).map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* -------------------------------------------------- Currently working on */

function CurrentlyWorkingOn() {
  const active = nowItems.filter((n) => n.status === 'in-development' || n.status === 'testing').slice(0, 4)
  return (
    <section className="relative section-padding" aria-labelledby="now-heading">
      <div className="container">
        <div className="grid gap-10 rounded-[2rem] bg-ink-900 p-6 md:p-10 lg:grid-cols-[0.8fr,1.2fr] lg:gap-14">
          <div>
            <SectionHeading id="now-heading" eyebrow="Currently working on" title="What is on my desk right now." description={`A live view of projects, learning and research. Last updated ${nowLastUpdated}.`} className="mb-6 md:mb-8" />
            <Reveal><LinkButton href="/now" variant="outline" className="bg-paper-50 hover:bg-white">Full board <HiArrowRight aria-hidden /></LinkButton></Reveal>
          </div>
          <Stagger className="grid gap-3">
            {active.map((n) => (
              <motion.div key={n.title} variants={staggerItem} className="grid gap-2 rounded-3xl bg-paper-50 p-5 sm:grid-cols-[11rem,1fr]">
                <div><Badge tone={toneForStatus(n.status)}>{nowStatusLabel[n.status]}</Badge></div>
                <div>
                  <h3 className="font-display text-lg font-medium tracking-tight text-ink-100">{n.title}</h3>
                  <p className="mt-1 text-sm text-ink-300 text-pretty">{n.detail}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------- Experience summary */

function ExperienceSummary() {
  const shown = experiences.slice(0, 4)
  return (
    <section className="relative section-padding" aria-labelledby="exp-heading">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="exp-heading" eyebrow="Experience" title="Commercial work, placements and programmes." className="mb-0 md:mb-0" />
          <Reveal direction="left"><LinkButton href="/experience" variant="outline">Experience & certificates <HiArrowRight aria-hidden /></LinkButton></Reveal>
        </div>
        <Stagger className="mt-10 grid gap-3 md:grid-cols-2">
          {shown.map((e) => (
            <motion.div key={e.organisation + e.role} variants={staggerItem}>
              <GlassCard className="h-full" hover={false}>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="mute">{experienceKindLabel[e.kind]}</Badge>
                  {e.via && <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">via {e.via}</span>}
                  <span className="ml-auto font-mono text-[11px] text-ink-400">{e.period.startsWith('TODO') ? '' : e.period}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-ink-100">{e.organisation}</h3>
                <p className="mt-1 text-sm text-gold-500">{e.role}</p>
                <p className="mt-2 text-sm text-ink-300 text-pretty">{e.detail}</p>
              </GlassCard>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------- Philosophy */

function Philosophy() {
  return (
    <section className="relative section-padding" aria-label="Personal philosophy">
      <div className="container">
        <Reveal direction="up" amount={0.4}>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink-100 px-8 py-16 text-center text-paper-50 md:px-14 md:py-24">
            <Arcs className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-72 w-full max-w-4xl opacity-60" rings={4} />
            <p className="heading-eyebrow bg-paper-50/10 text-paper-50/70">What I believe</p>
            <blockquote className="mx-auto mt-8 max-w-4xl font-display text-3xl font-medium leading-[1.05] tracking-tightest text-balance md:text-5xl">
              <MaskedWords text={`“${philosophy.quote}”`} stagger={0.04} />
            </blockquote>
            <p className="mx-auto mt-6 max-w-2xl text-paper-50/70 text-pretty">{philosophy.detail}</p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper-50 px-5 py-2.5 text-sm font-medium text-ink-100 transition-colors hover:bg-white">More about me <HiArrowRight aria-hidden /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- Timeline */

const dot = { academic: 'bg-rust', sport: 'bg-ink-100', project: 'bg-gold-400', experience: 'bg-ink-500' } as const
const sideLabel = { academic: 'Academic', sport: 'Sport', project: 'Project', experience: 'Experience' } as const

function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 })

  return (
    <section className="relative section-padding" aria-labelledby="timeline-heading">
      <div className="container">
        <SectionHeading id="timeline-heading" eyebrow="Timeline" title="One step at a time." description="The moments that have built the story so far. The line draws as you read." align="center" />
        <div ref={ref} className="relative">
          <div aria-hidden className="absolute bottom-2 left-4 top-2 w-px bg-line md:left-1/2" />
          <motion.div aria-hidden style={{ scaleY }} className="absolute bottom-2 left-4 top-2 w-px origin-top bg-gold-400 md:left-1/2" />
          <Stagger className="space-y-8">
            {timeline.map((t, i) => {
              const onLeft = i % 2 === 0
              return (
                <motion.div key={`${t.year}-${t.title}`} variants={staggerItem} className={cn('relative grid grid-cols-[2.5rem,1fr] gap-4 md:grid-cols-2 md:gap-12', onLeft ? '' : 'md:[&>div:first-child]:order-2')}>
                  <div className="relative h-full md:hidden">
                    <span className={cn('absolute left-3 top-5 inline-block h-2.5 w-2.5 -translate-x-1/2 rounded-full ring-4 ring-ink-950', dot[t.side])} />
                  </div>
                  <div className={cn('min-w-0 rounded-3xl border border-line bg-paper-50 p-5', onLeft ? 'md:text-right' : '')}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">{sideLabel[t.side]} · <span className="text-ink-100">{t.year}</span></div>
                    <h3 className="mt-1 font-display text-xl font-medium tracking-tight text-ink-100">{t.title}</h3>
                    <p className="mt-1 text-sm text-ink-300 text-pretty">{t.detail}</p>
                  </div>
                  <div className="relative hidden md:block">
                    <span className={cn('absolute -left-[1.7rem] top-5 inline-block h-2.5 w-2.5 -translate-x-1/2 rounded-full ring-4 ring-ink-950', dot[t.side])} />
                  </div>
                </motion.div>
              )
            })}
          </Stagger>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- Contact CTA */

function ContactCTA() {
  return (
    <section className="relative section-padding" aria-labelledby="contact-heading">
      <div className="container">
        <Reveal direction="up" amount={0.4}>
          <div className="rounded-[2rem] border border-line bg-paper-50 p-8 text-center md:p-14">
            <p className="heading-eyebrow">Contact</p>
            <h2 id="contact-heading" className="mx-auto mt-6 max-w-3xl font-display text-3xl font-medium leading-[1.02] tracking-tightest text-ink-100 text-balance md:text-5xl">
              Open to insight days, mentorship and small projects.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-300 text-pretty">If you work in finance or technology and have ten minutes of advice, or a business that needs a website, I would like to hear from you.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LinkButton href="/contact" kicker="Say hello"><HiOutlineMail aria-hidden /> Contact me</LinkButton>
              <LinkButton href={profile.contact.linkedin} variant="outline" kicker="Connect" target="_blank" rel="noreferrer noopener"><FaLinkedin aria-hidden /> LinkedIn</LinkButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

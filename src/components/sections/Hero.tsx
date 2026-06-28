import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineSparkles } from 'react-icons/hi'
import { LinkButton } from '@/components/ui/Button'
import { StatCard } from '@/components/ui/StatCard'
import { heroStats, profile } from '@/data/content'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 md:pt-40 lg:pt-44"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />

      {/* Floating gold orbs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-32 top-24 -z-10 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-24 top-60 -z-10 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl"
      />

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:gap-16">
          {/* Left: Heading + copy + ctas */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-ink-200 backdrop-blur"
            >
              <span className="grid h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              {profile.tagline}
            </motion.div>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tightest text-ink-100 sm:text-6xl md:text-7xl lg:text-[5.25rem] text-balance">
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Chris
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="block gold-text bg-[length:200%_auto] animate-shimmer"
              >
                Tsungu.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-7 max-w-xl text-base text-ink-300 md:text-lg text-pretty"
            >
              {profile.heroQuote} Year 10 at {profile.school}. Building a path to{' '}
              <span className="text-gold-200">investment banking</span> through academics,
              leadership and elite-level sport.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <LinkButton href="#about">
                Discover the story <HiArrowDown />
              </LinkButton>
              <LinkButton href="#contact" variant="outline">
                <HiOutlineSparkles /> Get in touch
              </LinkButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-xl"
            >
              {heroStats.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </motion.div>
          </div>

          {/* Right: Portrait — landscape banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="relative aspect-video overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-glass">
              <img
                src="/images/hero-portrait.png"
                alt="Chris Tsungu — Left Wing, Ipswich Futures U15"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-gold-300/20" />
            </div>

            {/* Floating sidecards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-3 -top-3 hidden rounded-2xl glass p-3 shadow-glass sm:block"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                Aspiration
              </div>
              <div className="mt-1 font-display text-sm font-medium text-ink-100">
                Investment Banking
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-3 -bottom-3 hidden rounded-2xl glass p-3 shadow-glass sm:block"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                Role at School
              </div>
              <div className="mt-1 font-display text-sm font-medium text-gold-200">Prefect</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.a
          href="#about"
          aria-label="Scroll to About"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mx-auto mt-20 hidden h-10 w-6 items-start justify-center rounded-full border border-ink-600 lg:flex"
        >
          <motion.span
            animate={{ y: [2, 14, 2] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-2 h-2 w-1 rounded-full bg-gold-300"
          />
        </motion.a>
      </div>
    </section>
  )
}

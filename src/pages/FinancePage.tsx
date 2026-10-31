import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { useSEO } from '@/hooks/useSEO'
import { PageHeader } from '@/components/ui/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { LinkButton } from '@/components/ui/Button'
import { Reveal, Stagger, staggerItem } from '@/components/ui/Reveal'
import { Todo } from '@/components/ui/Tag'
import { financeInterests, researchApproach, portfolioRecord, financeNextSteps } from '@/data/finance'

export function FinancePage() {
  useSEO({
    title: 'Finance & Economics',
    description: 'Chris Tsungu on finance: the career he is aiming for in investment banking or quantitative finance, what interests him, and over a year of independent cryptocurrency market research and portfolio tracking.',
  })

  return (
    <>
      <PageHeader eyebrow="Finance & Economics" title="The subject I want to spend my career on." description="Investment banking or quantitative finance is the destination. This page is about what draws me to it and what I have done so far on my own." />

      {/* Interests */}
      <section className="container pb-20" aria-labelledby="fin-interests">
        <SectionHeading id="fin-interests" eyebrow="What interests me" title="Eight areas I keep coming back to." align="center" />
        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {financeInterests.map((f) => (
            <motion.div key={f.title} variants={staggerItem}>
              <GlassCard className="h-full">
                <h3 className="font-display text-lg font-medium tracking-tight text-ink-100">{f.title}</h3>
                <p className="mt-2 text-sm text-ink-300 text-pretty">{f.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </Stagger>
      </section>

      {/* Independent research */}
      <section className="container pb-20" aria-labelledby="fin-research" id="research">
        <div className="rounded-[2rem] bg-ink-900 p-6 md:p-10">
          <SectionHeading id="fin-research" eyebrow="My independent research" title="Learning about risk with real money, a small amount of it." description={researchApproach.intro} />
          <div className="grid gap-3 lg:grid-cols-[1.2fr,0.8fr]">
            <Stagger className="grid gap-3 sm:grid-cols-2">
              {researchApproach.pillars.map((p) => (
                <motion.div key={p.title} variants={staggerItem}>
                  <GlassCard className="h-full" hover={false}>
                    <h3 className="font-display text-base font-medium text-gold-500">{p.title}</h3>
                    <p className="mt-2 text-sm text-ink-300 text-pretty">{p.detail}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </Stagger>
            <Reveal direction="left">
              <PortfolioCard />
            </Reveal>
          </div>
          <p className="mt-6 text-xs text-ink-500">{researchApproach.disclaimer}</p>
        </div>
      </section>

      {/* Next steps */}
      <section className="container pb-24" aria-labelledby="fin-next">
        <SectionHeading id="fin-next" eyebrow="Where I am heading" title="What I am doing about it." align="center" />
        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {financeNextSteps.map((s, i) => (
            <motion.div key={s.title} variants={staggerItem}>
              <GlassCard className="h-full" hover={false}>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-800 font-mono text-[11px] text-ink-300">0{i + 1}</span>
                <h3 className="mt-5 font-display text-lg font-medium tracking-tight text-ink-100">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-300 text-pretty">{s.detail}</p>
              </GlassCard>
            </motion.div>
          ))}
        </Stagger>
        <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
          <LinkButton href="/projects" variant="outline">My projects <HiArrowRight aria-hidden /></LinkButton>
          <LinkButton href="/contact" kicker="Say hello">Talk to me about finance <HiArrowRight aria-hidden /></LinkButton>
        </Reveal>
      </section>
    </>
  )
}

function PortfolioCard() {
  const r = portfolioRecord
  return (
    <GlassCard hover={false} className="h-full">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-gold-500">My portfolio record</p>
      <h3 className="mt-1 font-display text-xl font-medium tracking-tight text-ink-100">{r.periodLabel}</h3>
      {r.published ? (
        <>
          <p className="mt-1 text-xs text-ink-400">Measurement period: {r.periodStart} to {r.periodEnd}. Self-reported, historical.</p>
          <div className="mt-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-ink-500">Allocation at period end</p>
            <div className="mt-2 flex h-3 w-full overflow-hidden rounded-full bg-ink-800" role="img" aria-label={r.allocation.map((a) => `${a.label} ${a.pct}%`).join(', ')}>
              {r.allocation.map((a, i) => (
                <span key={a.label} style={{ width: `${a.pct}%` }} className={i === 0 ? 'bg-gold-400' : 'bg-ink-500'} />
              ))}
            </div>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-300">
              {r.allocation.map((a, i) => (
                <li key={a.label} className="inline-flex items-center gap-1.5">
                  <span className={`inline-block h-2 w-2 rounded-full ${i === 0 ? 'bg-gold-400' : 'bg-ink-500'}`} /> {a.label} {a.pct}%
                </li>
              ))}
              <li>· {r.stakingPct}% staked</li>
            </ul>
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-2 text-sm">
            {[
              ['Total return', `${r.totalReturnPct}%`],
              ['Best month', `${r.bestMonthPct}%`],
              ['Avg monthly return', `${r.avgMonthlyReturnPct}%`],
              ['Volatility (monthly)', `${r.volatilityPct}%`],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-ink-900 p-3">
                <dt className="text-[11px] uppercase tracking-[0.14em] text-ink-500">{k}</dt>
                <dd className="mt-1 font-display text-lg font-medium text-ink-100">{v}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-4 space-y-1 text-xs text-ink-500">
            {r.notes.map((n) => <li key={n}>• {n}</li>)}
          </ul>
        </>
      ) : (
        <>
          <p className="mt-3 text-sm text-ink-300 text-pretty">
            I track allocation, monthly returns, best and worst months and simple volatility for my own portfolio in a spreadsheet, and have done for over a year. I have chosen not to publish the figures: this is a learning record, not a track record.
          </p>
          <p className="mt-3 text-sm text-ink-400">
            Figures: <Todo>not published</Todo>
          </p>
        </>
      )}
    </GlassCard>
  )
}

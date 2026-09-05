import { SectionHeading } from '@/components/ui/SectionHeading'
import { Stagger, staggerItem } from '@/components/ui/Reveal'
import { motion } from 'framer-motion'
import { timeline } from '@/data/content'
import { cn } from '@/lib/cn'

const dot = {
  academic: 'bg-sky-300 shadow-[0_0_0_4px_rgba(125,211,252,0.15)]',
  sport: 'bg-emerald-300 shadow-[0_0_0_4px_rgba(110,231,183,0.15)]',
  project: 'bg-gold-300 shadow-[0_0_0_4px_rgba(251,210,78,0.18)]',
} as const

const label = {
  academic: 'Academic',
  sport: 'Sport',
  project: 'Project',
} as const

export function Timeline() {
  return (
    <section id="timeline" className="relative section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="09 — Timeline"
          title="One step at a time, every year."
          description="A short timeline of the moments that have built the story so far."
        />

        <div className="relative">
          {/* Center / left rail */}
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:left-1/2"
          />

          <Stagger className="space-y-8">
            {timeline.map((t, i) => {
              const onLeft = i % 2 === 0
              return (
                <motion.div
                  key={`${t.year}-${t.title}`}
                  variants={staggerItem}
                  className={cn(
                    'relative grid grid-cols-[2.5rem,1fr] gap-4 md:grid-cols-2 md:gap-12',
                    onLeft ? '' : 'md:[&>div:first-child]:order-2',
                  )}
                >
                  {/* Dot column on mobile */}
                  <div className="relative h-full md:hidden">
                    <span
                      className={cn(
                        'absolute left-3 top-2 inline-block h-3 w-3 -translate-x-1/2 rounded-full',
                        dot[t.side],
                      )}
                    />
                  </div>

                  {/* Card */}
                  <div className={cn(onLeft ? 'md:text-right' : '', 'min-w-0')}>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-ink-400">
                      {label[t.side]} · {t.year}
                    </div>
                    <h3 className="mt-1 font-display text-xl font-semibold text-ink-100">{t.title}</h3>
                    <p className="mt-1 text-sm text-ink-300 text-pretty">{t.detail}</p>
                  </div>

                  {/* Spacer for the other side on desktop + center dot */}
                  <div className="relative hidden md:block">
                    <span
                      className={cn(
                        'absolute -left-[1.7rem] top-2 inline-block h-3 w-3 -translate-x-1/2 rounded-full',
                        dot[t.side],
                      )}
                    />
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

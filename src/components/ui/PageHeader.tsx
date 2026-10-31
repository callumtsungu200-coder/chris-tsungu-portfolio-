import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { MaskedWords } from './Reveal'
import { Arcs } from './Arcs'
import { cn } from '@/lib/cn'

type Props = { eyebrow: string; title: string; description?: string; children?: ReactNode; className?: string }

const EASE = [0.22, 1, 0.36, 1] as const

/** Page masthead: centred, with soft arcs breathing behind the headline. */
export function PageHeader({ eyebrow, title, description, children, className }: Props) {
  return (
    <section className={cn('relative isolate overflow-hidden pt-32 pb-12 text-center md:pt-40 md:pb-16', className)}>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora" aria-hidden />
      <Arcs className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-[26rem] w-full max-w-5xl opacity-70" rings={4} />
      <div className="container flex flex-col items-center">
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="heading-eyebrow">
          {eyebrow}
        </motion.p>
        <MaskedWords as="h1" text={title} delay={0.1} className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.0] tracking-tightest text-ink-100 text-balance sm:text-5xl md:text-7xl" />
        {description && (
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: EASE }} className="mt-6 max-w-2xl text-base text-ink-400 text-pretty md:text-lg">
            {description}
          </motion.p>
        )}
        {children && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65, ease: EASE }} className="mt-8 flex w-full flex-col items-center [&>*]:justify-center">
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}

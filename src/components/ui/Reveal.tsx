import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

type RevealProps = PropsWithChildren<{
  delay?: number
  duration?: number
  direction?: Direction
  amount?: number
  once?: boolean
  className?: string
  as?: 'div' | 'section' | 'article' | 'li' | 'span'
}>

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Clip-wipe reveal: content is uncovered from one edge (like a sheet being
 * drawn back) while settling into place. Direction = where it is wiped from.
 */
const clipFor = (direction: Direction) => {
  switch (direction) {
    case 'up': return 'inset(100% 0 0 0)'
    case 'down': return 'inset(0 0 100% 0)'
    case 'left': return 'inset(0 0 0 100%)'
    case 'right': return 'inset(0 100% 0 0)'
    default: return 'inset(0 0 0 0)'
  }
}

export function Reveal({ children, delay = 0, duration = 0.9, direction = 'up', amount = 0.25, once = true, className, as = 'div' }: RevealProps) {
  const reduced = useReducedMotion()
  const variants: Variants = reduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { clipPath: clipFor(direction), opacity: direction === 'none' ? 0 : 1, y: direction === 'up' ? 14 : 0 },
        show: { clipPath: 'inset(0 0 0 0)', opacity: 1, y: 0, transition: { duration, delay, ease: EASE } },
      }
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag className={className} initial="hidden" whileInView="show" viewport={{ once, amount }} variants={variants}>
      {children}
    </MotionTag>
  )
}

export function Stagger({ children, className, delayChildren = 0.05, staggerChildren = 0.09, amount = 0.2 }: PropsWithChildren<{ className?: string; delayChildren?: number; staggerChildren?: number; amount?: number }>) {
  return (
    <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount }} variants={{ hidden: {}, show: { transition: { delayChildren, staggerChildren } } }}>
      {children}
    </motion.div>
  )
}

/** Child variant for Stagger: rises and un-clips from the bottom. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22, clipPath: 'inset(30% 0 0 0)' },
  show: { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', transition: { duration: 0.7, ease: EASE } },
}

/**
 * Splits text into words, each rising from behind a mask, the signature
 * headline animation of the site.
 */
export function MaskedWords({ text, className, delay = 0, stagger = 0.06, as: Tag = 'span' }: { text: string; className?: string; delay?: number; stagger?: number; as?: 'span' | 'h1' | 'h2' | 'p' }) {
  const reduced = useReducedMotion()
  const words = text.split(' ')
  return (
    <Tag className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom" aria-hidden>
          <motion.span
            className="inline-block"
            initial={reduced ? { opacity: 0 } : { y: '110%', rotate: 2 }}
            animate={reduced ? { opacity: 1 } : { y: '0%', rotate: 0 }}
            transition={{ duration: 0.8, delay: delay + i * stagger, ease: EASE }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  )
}

/** A horizontal rule that draws itself when scrolled into view. */
export function DrawnRule({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      aria-hidden
      className={className ?? 'h-px w-full bg-line'}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.1, delay, ease: EASE }}
      style={{ transformOrigin: 'left' }}
    />
  )
}

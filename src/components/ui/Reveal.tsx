import { motion, type Variants } from 'framer-motion'
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

const offset = (direction: Direction) => {
  switch (direction) {
    case 'up':    return { y: 22, x: 0 }
    case 'down':  return { y: -22, x: 0 }
    case 'left':  return { x: 22, y: 0 }
    case 'right': return { x: -22, y: 0 }
    default:      return { x: 0, y: 0 }
  }
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  amount = 0.25,
  once = true,
  className,
  as = 'div',
}: RevealProps) {
  const off = offset(direction)
  const variants: Variants = {
    hidden: { opacity: 0, ...off },
    show:   { opacity: 1, x: 0, y: 0, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } },
  }
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}

export function Stagger({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.08,
  amount = 0.2,
}: PropsWithChildren<{
  className?: string
  delayChildren?: number
  staggerChildren?: number
  amount?: number
}>) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { delayChildren, staggerChildren } },
      }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

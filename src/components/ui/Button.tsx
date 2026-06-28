import type { PropsWithChildren } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'ghost' | 'outline'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950'

const variants: Record<Variant, string> = {
  primary:
    'bg-gold-400 text-ink-950 hover:bg-gold-300 shadow-[0_8px_28px_-8px_rgba(251,210,78,0.55)]',
  outline:
    'border border-ink-600 text-ink-100 hover:border-gold-400/60 hover:text-gold-200',
  ghost:
    'text-ink-200 hover:text-gold-200',
}

type CommonProps = {
  variant?: Variant
  className?: string
}

type ButtonProps = PropsWithChildren<HTMLMotionProps<'button'> & CommonProps>
type LinkProps = PropsWithChildren<HTMLMotionProps<'a'> & CommonProps>

export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={cn(base, variants[variant], className)}
      {...rest}
    >
      {children}
    </motion.button>
  )
}

export function LinkButton({ variant = 'primary', className, children, ...rest }: LinkProps) {
  return (
    <motion.a
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={cn(base, variants[variant], className)}
      {...rest}
    >
      {children}
    </motion.a>
  )
}

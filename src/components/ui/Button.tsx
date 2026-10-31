import type { PropsWithChildren, ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { Link, type LinkProps as RouterLinkProps } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'ghost' | 'outline'

/* Pill buttons. An optional small-caps `kicker` sits above the label (Pebble-style). */
const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-gold-400 text-white hover:bg-gold-500 hover:-translate-y-0.5 shadow-[0_10px_30px_-14px_rgba(47,93,58,0.7)]',
  outline: 'bg-ink-800 text-ink-100 hover:bg-ink-700 hover:-translate-y-0.5',
  ghost: 'text-ink-200 link-draw rounded-none px-1 hover:text-gold-500',
}

type CommonProps = { variant?: Variant; className?: string; kicker?: string }
type ButtonProps = PropsWithChildren<HTMLMotionProps<'button'> & CommonProps>
type LinkProps = PropsWithChildren<HTMLMotionProps<'a'> & CommonProps>

function Inner({ kicker, children }: { kicker?: string; children: ReactNode }) {
  if (!kicker) return <>{children}</>
  return (
    <span className="flex flex-col items-start leading-tight">
      <span className="font-mono text-[9px] uppercase tracking-[0.16em] opacity-70">{kicker}</span>
      <span className="inline-flex items-center gap-2">{children}</span>
    </span>
  )
}

export function Button({ variant = 'primary', className, kicker, children, ...rest }: ButtonProps) {
  return (
    <motion.button whileTap={{ scale: 0.97 }} className={cn(base, variants[variant], kicker && 'py-2 pl-5 pr-6 text-left', className)} {...rest}>
      <Inner kicker={kicker}>{children}</Inner>
    </motion.button>
  )
}

export function LinkButton({ variant = 'primary', className, kicker, children, href, ...rest }: LinkProps & { href: string }) {
  const classes = cn(base, variants[variant], kicker && 'py-2 pl-5 pr-6 text-left', className)
  if (href.startsWith('/') && !href.startsWith('//')) {
    const { target, rel, download, 'aria-label': ariaLabel } = rest as Pick<RouterLinkProps, 'target' | 'rel' | 'download' | 'aria-label'>
    return (
      <Link to={href} target={target} rel={rel} download={download} aria-label={ariaLabel} className={cn(classes, 'active:scale-[0.97]')}>
        <Inner kicker={kicker}>{children}</Inner>
      </Link>
    )
  }
  return (
    <motion.a href={href} whileTap={{ scale: 0.97 }} className={classes} {...rest}>
      <Inner kicker={kicker}>{children}</Inner>
    </motion.a>
  )
}

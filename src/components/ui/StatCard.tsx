import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type Props = {
  label: string
  value: string
  sub?: string
  className?: string
}

export function StatCard({ label, value, sub, className }: Props) {
  // Numeric stats get a bigger figure; word-stats stay readable.
  const isNumeric = /^\d/.test(value)

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className={cn(
        'glass relative overflow-hidden rounded-2xl p-4 sm:p-5',
        className,
      )}
    >
      <div className="flex min-w-0 flex-col">
        <span
          className={cn(
            'gold-text-static font-display font-semibold leading-none truncate',
            isNumeric ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl',
          )}
        >
          {value}
        </span>
        {sub && (
          <span className="mt-1.5 text-[10px] uppercase tracking-widest text-ink-400 truncate">
            {sub}
          </span>
        )}
      </div>
      <div className="mt-3 border-t border-white/5 pt-2.5 text-[11px] uppercase tracking-widest text-ink-300">
        {label}
      </div>
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-400/10 blur-2xl" />
    </motion.div>
  )
}

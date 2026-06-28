import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  label: string
  level: number
  delay?: number
}

export function SkillBar({ label, level, delay = 0 }: Props) {
  const reduced = useReducedMotion()
  const clamped = Math.max(0, Math.min(100, level))
  return (
    <div className="group">
      <div className="mb-2 flex items-end justify-between">
        <span className="text-sm font-medium text-ink-200">{label}</span>
        <span className="font-mono text-xs text-ink-400">{clamped}%</span>
      </div>
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-ink-700/60">
        <motion.div
          initial={reduced ? { width: `${clamped}%` } : { width: 0 }}
          whileInView={{ width: `${clamped}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
      </div>
    </div>
  )
}

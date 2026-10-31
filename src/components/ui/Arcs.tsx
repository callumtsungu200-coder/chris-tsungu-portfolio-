import { motion, useReducedMotion } from 'framer-motion'

/**
 * Ambient centrepiece: soft concentric arcs that breathe outward in sequence,
 * like ripples or sound. Warm sand/coral tones, heavily blurred edges.
 */
export function Arcs({ className, rings = 5 }: { className?: string; rings?: number }) {
  const reduced = useReducedMotion()
  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 1000 520" className="h-full w-full" preserveAspectRatio="xMidYMax slice">
        <defs>
          <filter id="arc-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <linearGradient id="arc-grad" x1="0" x2="1">
            <stop offset="0%" stopColor="#2f5d3a" stopOpacity="0.0" />
            <stop offset="35%" stopColor="#2f5d3a" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#7fa58a" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2f5d3a" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        {Array.from({ length: rings }, (_, i) => {
          const r = 150 + i * 70
          return (
            <motion.path
              key={i}
              d={`M ${500 - r} 520 A ${r} ${r} 0 0 1 ${500 + r} 520`}
              fill="none"
              stroke="url(#arc-grad)"
              strokeWidth={34 - i * 3}
              strokeLinecap="round"
              filter="url(#arc-blur)"
              style={{ transformOrigin: '500px 520px' }}
              initial={{ opacity: 0.35, scale: 0.98 }}
              animate={reduced ? { opacity: 0.5 } : { opacity: [0.3, 0.75, 0.3], scale: [0.985, 1.015, 0.985] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
            />
          )
        })}
      </svg>
    </div>
  )
}

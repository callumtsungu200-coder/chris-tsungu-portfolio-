import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '@/data/content'

const EASE = [0.22, 1, 0.36, 1] as const

/** Loader: rings ripple out from a dot while the name fades in, then the sheet lifts away. */
export function Loader() {
  const [hidden, setHidden] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const t = window.setTimeout(() => setHidden(true), reduced ? 200 : 1400)
    return () => window.clearTimeout(t)
  }, [reduced])

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div initial={{ y: 0 }} exit={{ y: '-100%', borderBottomLeftRadius: '3rem', borderBottomRightRadius: '3rem' }} transition={{ duration: 0.8, ease: EASE }} className="fixed inset-0 z-[80] grid place-items-center bg-ink-950" aria-hidden>
          <div className="relative grid place-items-center">
            {[0, 1, 2].map((i) => (
              <motion.span key={i} className="absolute h-24 w-24 rounded-full border border-gold-400/60" initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: [0.4, 2.2], opacity: [0.8, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.5, ease: 'easeOut' }} />
            ))}
            <span className="h-3 w-3 rounded-full bg-gold-400" />
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6, ease: EASE }} className="absolute top-20 whitespace-nowrap font-display text-xl font-medium tracking-tight text-ink-100">
              {profile.name}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

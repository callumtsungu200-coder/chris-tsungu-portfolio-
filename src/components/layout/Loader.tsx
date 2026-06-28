import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '@/data/content'

/**
 * Initial paint loader. Fades out once the window's load event fires (or after
 * a short fallback so the page never looks stuck).
 */
export function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const done = () => setHidden(true)
    if (document.readyState === 'complete') {
      const t = window.setTimeout(done, 350)
      return () => window.clearTimeout(t)
    }
    window.addEventListener('load', done)
    const fallback = window.setTimeout(done, 1800)
    return () => {
      window.removeEventListener('load', done)
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[80] grid place-items-center bg-ink-950"
        >
          <div className="relative grid place-items-center">
            <div className="absolute h-32 w-32 animate-spin-slow rounded-full border border-gold-300/30 [border-top-color:transparent]" />
            <div className="absolute h-20 w-20 animate-pulse-glow rounded-full bg-gold-400/20 blur-2xl" />
            <span className="font-display text-3xl font-semibold gold-text-static">
              {profile.initials}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

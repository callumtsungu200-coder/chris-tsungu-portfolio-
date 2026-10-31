import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import type { PropsWithChildren } from 'react'

const EASE = [0.76, 0, 0.24, 1] as const

/**
 * Route transition: a navy sheet rises from the bottom to cover the old page,
 * then lifts away towards the top to uncover the new one, a page turn.
 */
export function PageTransition({ children }: PropsWithChildren) {
  const { pathname } = useLocation()
  const reduced = useReducedMotion()

  if (reduced) return <>{children}</>

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname} className="relative">
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[70] bg-gold-400"
          initial={{ scaleY: 1, originY: 0 }}
          animate={{ scaleY: 0, originY: 0, transition: { duration: 0.6, ease: EASE, delay: 0.05 } }}
          exit={{ scaleY: 1, originY: 1, transition: { duration: 0.45, ease: EASE } }}
        />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] } }} exit={{ opacity: 0, transition: { duration: 0.2 } }}>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

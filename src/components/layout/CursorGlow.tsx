import { useEffect, useRef } from 'react'

/**
 * Cursor-following glow. Cheap: uses transform on a single fixed element via rAF.
 * Hidden on touch devices and when prefers-reduced-motion.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (reducedMotion || isTouch || !ref.current) return

    const el = ref.current
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let frame = 0

    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
    }
    const tick = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`
      frame = requestAnimationFrame(tick)
    }
    window.addEventListener('pointermove', onMove)
    frame = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[400px] w-[400px] rounded-full bg-gold-400/[0.05] blur-3xl will-change-transform"
    />
  )
}

import { useEffect, useState } from 'react'

/**
 * Returns the id of the section whose top is currently nearest the viewport's
 * "reading line" (~30% from top). Uses scroll listener with rAF throttling.
 */
export function useActiveSection(ids: string[], offset = 120): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const line = window.scrollY + offset
        let current: string | null = null
        for (const id of ids) {
          const el = document.getElementById(id)
          if (!el) continue
          const top = el.offsetTop
          if (top <= line) current = id
          else break
        }
        setActive(current)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}

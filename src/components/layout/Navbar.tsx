import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { navItems, profile } from '@/data/content'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/cn'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(navItems.map((n) => n.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'pt-2' : 'pt-4',
      )}
    >
      <div className="container">
        <nav
          className={cn(
            'flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 md:px-5',
            scrolled
              ? 'glass shadow-glass'
              : 'bg-transparent ring-1 ring-inset ring-white/0',
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight"
            aria-label="Top of page"
          >
            <span
              className="grid h-8 w-8 place-items-center rounded-lg bg-gold-400 font-display text-ink-950 shadow-[0_4px_18px_-4px_rgba(251,210,78,0.55)]"
              aria-hidden
            >
              {profile.initials}
            </span>
            <span className="hidden sm:inline text-ink-100">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      'relative inline-flex items-center rounded-full px-3.5 py-1.5 text-sm transition-colors',
                      isActive ? 'text-gold-200' : 'text-ink-300 hover:text-ink-100',
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-gold-400/10 ring-1 ring-gold-300/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-gold-400 px-4 py-1.5 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-300 md:inline-flex"
            >
              Get in touch
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full bg-ink-800/60 text-ink-100 ring-1 ring-inset ring-white/10 md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <HiX className="text-xl" /> : <HiMenuAlt4 className="text-xl" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <motion.ul
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex h-full flex-col items-center justify-center gap-2 px-8 text-center"
            >
              {navItems.map((item) => (
                <li key={item.id} className="w-full">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-2xl px-6 py-4 font-display text-2xl text-ink-100 transition-colors hover:bg-gold-400/10 hover:text-gold-200',
                      active === item.id && 'text-gold-200',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex rounded-full bg-gold-400 px-6 py-3 text-sm font-medium text-ink-950"
                >
                  Get in touch
                </a>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

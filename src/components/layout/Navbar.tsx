import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiMenuAlt4, HiX, HiChevronDown } from 'react-icons/hi'
import { primaryNav, secondaryNav, profile } from '@/data/content'
import { cn } from '@/lib/cn'

const EASE = [0.22, 1, 0.36, 1] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const moreRef = useRef<HTMLLIElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => { setOpen(false); setMoreOpen(false) }, [pathname])

  useEffect(() => {
    if (!moreOpen) return
    const onClick = (e: MouseEvent) => { if (!moreRef.current?.contains(e.target as Node)) setMoreOpen(false) }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMoreOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onClick); document.removeEventListener('keydown', onKey) }
  }, [moreOpen])

  const moreActive = secondaryNav.some((n) => pathname.startsWith(n.to))
  const allMobile = [{ to: '/', label: 'Home' }, ...primaryNav, ...secondaryNav, { to: '/contact', label: 'Contact' }]

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'pt-2' : 'pt-4')}>
      <div className="container">
        <nav aria-label="Primary" className={cn('flex items-center justify-between rounded-full px-4 py-2 transition-all duration-300 md:px-5', (scrolled || open) ? 'border border-line bg-paper-50/90 shadow-paper-sm backdrop-blur-md' : 'border border-transparent')}>
          <Link to="/" className="flex items-center gap-2.5" aria-label="Home">
            <span aria-hidden className="grid h-8 w-8 place-items-center rounded-full bg-ink-100 text-paper-50">
              <span className="block h-2.5 w-2.5 rounded-full bg-gold-400" />
            </span>
            <span className="font-display text-lg font-medium tracking-tight text-ink-100">{profile.name}</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={({ isActive }) => cn('relative inline-flex items-center rounded-full px-3.5 py-1.5 text-sm transition-colors', isActive ? 'text-ink-100' : 'text-ink-400 hover:text-ink-100')}>
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-ink-800" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            <li ref={moreRef} className="relative">
              <button type="button" onClick={() => setMoreOpen((v) => !v)} aria-expanded={moreOpen} aria-haspopup="menu" className={cn('relative inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm transition-colors', moreActive ? 'text-ink-100' : 'text-ink-400 hover:text-ink-100')}>
                More <HiChevronDown className={cn('transition-transform', moreOpen && 'rotate-180')} aria-hidden />
                {moreActive && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-ink-800" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.ul role="menu" initial={{ opacity: 0, y: 8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.98 }} transition={{ duration: 0.25, ease: EASE }} className="absolute right-0 top-full mt-3 w-80 rounded-3xl border border-line bg-paper-50 p-2 shadow-paper">
                    {secondaryNav.map((item) => (
                      <li key={item.to} role="none">
                        <NavLink role="menuitem" to={item.to} className={({ isActive }) => cn('block rounded-2xl px-4 py-3 transition-colors hover:bg-ink-800', isActive && 'bg-gold-50')}>
                          <span className="block text-sm font-medium text-ink-100">{item.label}</span>
                          {item.description && <span className="mt-0.5 block text-xs text-ink-400">{item.description}</span>}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <Link to="/cv" className="hidden flex-col rounded-full bg-ink-800 px-4 py-1.5 leading-tight text-ink-100 transition-colors hover:bg-ink-700 lg:flex">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-400">Download</span>
              <span className="text-sm font-medium">CV</span>
            </Link>
            <Link to="/contact" className="hidden flex-col rounded-full bg-gold-400 px-4 py-1.5 leading-tight text-white transition-colors hover:bg-gold-500 lg:flex">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/70">Say hello</span>
              <span className="text-sm font-medium">Contact</span>
            </Link>
            <button type="button" onClick={() => setOpen((v) => !v)} className="grid h-9 w-9 place-items-center rounded-full bg-ink-800 text-ink-100 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
              {open ? <HiX className="text-xl" /> : <HiMenuAlt4 className="text-xl" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-40 overflow-y-auto bg-ink-950/95 pt-24 pb-10 backdrop-blur-md lg:hidden">
            <ul className="container grid gap-2 sm:grid-cols-2">
              {allMobile.map((item, i) => (
                <motion.li key={item.to} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 + i * 0.03, ease: EASE }}>
                  <NavLink to={item.to} end={item.to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => cn('flex items-center justify-between rounded-2xl bg-paper-50 px-5 py-4 font-display text-xl font-medium text-ink-100', isActive && 'text-gold-500')}>
                    {item.label}
                    <span className="text-gold-400">→</span>
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import { Link } from 'react-router-dom'
import { profile, primaryNav, secondaryNav } from '@/data/content'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

/** Footer: a large rounded dark card. */
export function Footer() {
  return (
    <footer className="relative">
      <div className="container pb-6">
        <div className="rounded-[2rem] bg-ink-100 p-8 text-paper-50 md:p-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <span aria-hidden className="grid h-10 w-10 place-items-center rounded-full bg-paper-50">
                <span className="block h-3 w-3 rounded-full bg-gold-400" />
              </span>
              <p className="mt-6 font-display text-3xl font-medium tracking-tight">{profile.name}</p>
              <p className="mt-2 max-w-sm text-sm text-paper-50/60">{profile.yearGroup} · {profile.school} · {profile.location}. Building towards a career in finance through projects, research and real experience.</p>
            </div>
            <nav aria-label="Footer primary">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper-50/50">Pages</p>
              <ul className="mt-3 space-y-2">
                {[{ to: '/', label: 'Home' }, ...primaryNav, { to: '/contact', label: 'Contact' }].map((n) => (
                  <li key={n.to}><Link className="text-paper-50/85 transition-colors hover:text-gold-200" to={n.to}>{n.label}</Link></li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer secondary">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper-50/50">More</p>
              <ul className="mt-3 space-y-2">
                {secondaryNav.map((n) => (
                  <li key={n.to}><Link className="text-paper-50/85 transition-colors hover:text-gold-200" to={n.to}>{n.label}</Link></li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-paper-50/10 pt-6 text-sm text-paper-50/60 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              <a className="inline-flex items-center gap-2 rounded-full bg-paper-50/10 px-3 py-1.5 hover:bg-paper-50/20" href={`mailto:${profile.contact.email}`}><HiOutlineMail aria-hidden /> {profile.contact.email}</a>
              <a className="inline-flex items-center gap-2 rounded-full bg-paper-50/10 px-3 py-1.5 hover:bg-paper-50/20" href={profile.contact.linkedin} target="_blank" rel="noreferrer noopener"><FaLinkedin aria-hidden /> LinkedIn</a>
              <a className="inline-flex items-center gap-2 rounded-full bg-paper-50/10 px-3 py-1.5 hover:bg-paper-50/20" href={profile.contact.github} target="_blank" rel="noreferrer noopener"><FaGithub aria-hidden /> GitHub</a>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em]">© {new Date().getFullYear()} {profile.name}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

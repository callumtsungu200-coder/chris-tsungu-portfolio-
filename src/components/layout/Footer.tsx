import { profile, navItems } from '@/data/content'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950/80">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#top" className="inline-flex items-center gap-2 text-lg font-semibold">
              <span
                className="grid h-9 w-9 place-items-center rounded-lg bg-gold-400 font-display text-ink-950"
                aria-hidden
              >
                {profile.initials}
              </span>
              <span>{profile.name}</span>
            </a>
            <p className="mt-3 max-w-sm text-sm text-ink-400">
              Year 11 student at The Stanway School. Building towards a career in Finance & FinTech
              — through real projects, professional experience and competitive football.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-ink-400">Sections</h4>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a className="text-ink-200 transition-colors hover:text-gold-200" href={`#${n.id}`}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-ink-400">Connect</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  className="inline-flex items-center gap-2 text-ink-200 transition-colors hover:text-gold-200"
                  href={`mailto:${profile.contact.email}`}
                >
                  <HiOutlineMail /> {profile.contact.email}
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 text-ink-200 transition-colors hover:text-gold-200"
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaLinkedin /> {profile.contact.linkedinLabel}
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 text-ink-200 transition-colors hover:text-gold-200"
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaGithub /> {profile.contact.githubLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-ink-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="font-mono">Built with React · Vite · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}

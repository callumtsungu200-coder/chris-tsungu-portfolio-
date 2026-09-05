import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { profile } from '@/data/content'
import { HiOutlineMail, HiOutlinePhone, HiOutlineGlobe } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'

export function Contact() {
  return (
    <section id="contact" className="relative section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="10 — Contact"
          title="Open to opportunities."
          description="Finance & FinTech insight days, work experience, mentorship, technology programmes, football trials — I'd love to hear from you."
          align="center"
        />

        <Reveal direction="up">
          <GlassCard className="relative mx-auto max-w-4xl overflow-hidden p-8 md:p-12" hover={false}>
            <div
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl"
              aria-hidden
            />

            <div className="relative grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink-100 md:text-3xl text-balance">
                  Let&apos;s talk — Finance, FinTech, technology or football.
                </h3>
                <p className="mt-3 text-sm text-ink-300 text-pretty">
                  Email is the quickest way to reach me. LinkedIn works too. All contact details are
                  listed on this card.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <LinkButton href={`mailto:${profile.contact.email}`}>
                    <HiOutlineMail /> Email me
                  </LinkButton>
                  <LinkButton
                    href={profile.contact.linkedin}
                    variant="outline"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaLinkedin /> LinkedIn
                  </LinkButton>
                </div>
              </div>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-4 ring-1 ring-inset ring-white/5">
                  <HiOutlineMail className="text-lg text-gold-300" />
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-ink-400">Email</p>
                    <a
                      className="block truncate font-medium text-ink-100 hover:text-gold-200"
                      href={`mailto:${profile.contact.email}`}
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-4 ring-1 ring-inset ring-white/5">
                  <HiOutlinePhone className="text-lg text-gold-300" />
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-ink-400">Phone</p>
                    <a
                      className="block truncate font-medium text-ink-100 hover:text-gold-200"
                      href={`tel:${profile.contact.phone.replace(/\s/g, '')}`}
                    >
                      {profile.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-4 ring-1 ring-inset ring-white/5">
                  <FaLinkedin className="text-lg text-gold-300" />
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-ink-400">LinkedIn</p>
                    <a
                      className="block truncate font-medium text-ink-100 hover:text-gold-200"
                      href={profile.contact.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {profile.contact.linkedinLabel}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-4 ring-1 ring-inset ring-white/5">
                  <HiOutlineGlobe className="text-lg text-gold-300" />
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-ink-400">Site</p>
                    <a
                      className="block truncate font-medium text-ink-100 hover:text-gold-200"
                      href={profile.contact.site}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {profile.contact.site.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}

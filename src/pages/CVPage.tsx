import { HiOutlineDocumentDownload, HiOutlinePrinter } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useSEO } from '@/hooks/useSEO'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button, LinkButton } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import { MaybeTodo } from '@/components/ui/Tag'
import { profile, languages } from '@/data/content'
import { projects } from '@/data/projects'
import { experiences, certificates, experienceKindLabel } from '@/data/experience'
import { gcseSubjects, intendedALevels, backupALevel, predictedGrades } from '@/data/education'
import { achievements } from '@/data/achievements'
import { skillCategories } from '@/data/skills'

/**
 * CV page: a printable CV rendered from the same data as the rest of the site,
 * plus a download button when a PDF has been added (profile.cv.file).
 */
export function CVPage() {
  useSEO({
    title: 'CV',
    description: `Printable CV for ${profile.name}: education at The Stanway School, projects including Grade Lab and client websites, experience, certificates and skills. Download or print.`,
  })

  const skillsLine = skillCategories.flatMap((c) => c.skills.filter((s) => s.level !== 'learning').map((s) => s.name))

  return (
    <>
      <div className="print:hidden">
        <PageHeader eyebrow="CV & professional documents" title="Download the PDF, or read the web version below." description="The PDF is my current CV. The web version underneath is generated from the same facts as the rest of this site and can be printed. Certificates and project links are on their own pages.">
          <div className="flex flex-wrap gap-3">
            {profile.cv.file ? (
              <LinkButton href={profile.cv.file} download>
                <HiOutlineDocumentDownload aria-hidden /> Download CV (PDF)
              </LinkButton>
            ) : (
              <Button onClick={() => window.print()}>
                <HiOutlinePrinter aria-hidden /> Print / save as PDF
              </Button>
            )}
            {profile.cv.file && (
              <Button variant="outline" onClick={() => window.print()}>
                <HiOutlinePrinter aria-hidden /> Print
              </Button>
            )}
            <LinkButton href={profile.contact.linkedin} variant="outline" target="_blank" rel="noreferrer noopener"><FaLinkedin aria-hidden /> LinkedIn</LinkButton>
            <LinkButton href={profile.contact.github} variant="outline" target="_blank" rel="noreferrer noopener"><FaGithub aria-hidden /> GitHub</LinkButton>
            <LinkButton href="/experience#certificates" variant="ghost">Certificates →</LinkButton>
          </div>
        </PageHeader>
      </div>

      {profile.cv.file && (
        <section className="container pb-12 print:hidden" aria-label="CV preview">
          <div className="overflow-hidden rounded-2xl ring-1 ring-line shadow-glass">
            <object data={`${profile.cv.file}#view=FitH`} type="application/pdf" className="h-[70vh] w-full bg-ink-900" aria-label="CV PDF preview">
              <div className="grid h-64 place-items-center p-6 text-center text-sm text-ink-400">
                <p>Your browser cannot preview PDFs inline. <a href={profile.cv.file} className="text-gold-500 hover:text-gold-100">Open the CV</a> instead.</p>
              </div>
            </object>
          </div>
        </section>
      )}

      <section className="container pb-24 print:pb-0">
        <GlassCard hover={false} className="cv-sheet mx-auto max-w-4xl p-8 md:p-12 print:max-w-none print:rounded-2xl print:bg-white print:p-0 print:text-black print:shadow-none print:ring-0">
          <header className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-6 print:border-black/20">
            <div>
              <h2 className="font-display text-3xl font-medium text-ink-100 print:text-black">{profile.name}</h2>
              <p className="mt-1 text-ink-300 print:text-black/70">{profile.headline}</p>
              <p className="mt-1 text-sm text-ink-400 print:text-black/60">{profile.location}</p>
            </div>
            <ul className="text-sm text-ink-300 print:text-black/70">
              <li><a href={`mailto:${profile.contact.email}`} className="hover:text-gold-500">{profile.contact.email}</a></li>
              <li><a href={profile.contact.linkedin} className="hover:text-gold-500">{profile.contact.linkedinLabel}</a></li>
              <li><a href={profile.contact.github} className="hover:text-gold-500">{profile.contact.githubLabel}</a></li>
              <li><a href="https://chris-c-tsungu.netlify.app" className="hover:text-gold-500">chris-c-tsungu.netlify.app</a></li>
            </ul>
          </header>

          <CVSection title="Profile">
            <p className="text-sm text-ink-300 text-pretty print:text-black/80">{profile.shortBio}</p>
          </CVSection>

          <CVSection title="Education">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="font-medium text-ink-100 print:text-black">{profile.school}, Essex</h4>
              <span className="text-xs text-ink-400 print:text-black/60">2022 to present · {profile.yearGroup}</span>
            </div>
            <p className="mt-1 text-sm text-ink-300 print:text-black/80">
              GCSEs (summer {profile.gcseYear}): {gcseSubjects.map((s) => `${s.subject} (${s.board})`).join(', ')}.
            </p>
            <p className="mt-1 text-xs text-ink-400 print:text-black/60">Teacher estimated grades (PEG, Year 10 Summer Report): {predictedGrades.map((g) => `${g.subject} ${g.grade}`).join(', ')}. Intended A-levels: {intendedALevels.map((a) => a.subject).join(', ')} (backup: {backupALevel.subject}).</p>
          </CVSection>

          <CVSection title="Projects">
            {projects.filter((p) => p.featured).map((p) => (
              <div key={p.slug} className="mb-3 last:mb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-medium text-ink-100 print:text-black">{p.title}, <span className="font-normal text-ink-300 print:text-black/70">{p.role}</span></h4>
                  <span className="text-xs text-ink-400 print:text-black/60">{p.period}</span>
                </div>
                <p className="mt-0.5 text-sm text-ink-300 text-pretty print:text-black/80">{p.summary}</p>
                {p.links[0] && <p className="text-xs text-ink-400 print:text-black/60">{p.links[0].href.replace(/^https?:\/\//, '')}</p>}
              </div>
            ))}
          </CVSection>

          <CVSection title="Experience">
            {experiences.filter((e) => e.kind !== 'conversation').map((e) => (
              <div key={e.organisation + e.role} className="mb-3 last:mb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-medium text-ink-100 print:text-black">{e.organisation}, <span className="font-normal text-ink-300 print:text-black/70">{e.role}{e.via ? ` (via ${e.via})` : ''}</span></h4>
                  <span className="text-xs text-ink-400 print:text-black/60">{experienceKindLabel[e.kind]} · <MaybeTodo value={e.period} fallback="date tbc" /></span>
                </div>
                <p className="mt-0.5 text-sm text-ink-300 text-pretty print:text-black/80">{e.detail}</p>
              </div>
            ))}
          </CVSection>

          <div className="grid gap-6 md:grid-cols-2">
            <CVSection title="Skills">
              <p className="text-sm text-ink-300 print:text-black/80">{skillsLine.join(' · ')}</p>
              <p className="mt-2 text-sm text-ink-300 print:text-black/80">Languages: {languages.map((l) => `${l.name} (${l.level})`).join(', ')}.</p>
            </CVSection>
            <CVSection title="Certificates">
              <ul className="space-y-1 text-sm text-ink-300 print:text-black/80">
                {certificates.map((c) => (
                  <li key={c.name + c.issuer}>{c.name}, {c.issuer}{c.via ? ` via ${c.via}` : ''}</li>
                ))}
              </ul>
            </CVSection>
          </div>

          <CVSection title="Leadership, activities and interests">
            <ul className="grid gap-1 text-sm text-ink-300 sm:grid-cols-2 print:text-black/80">
              {achievements.filter((a) => a.category !== 'recognition').map((a) => (
                <li key={a.title}>{a.title}, {a.organisation}</li>
              ))}
              <li>Football, left wing / striker (Witham Town, Lewisham Borough, FITC Academy; Ipswich Town Academy trial)</li>
              <li>Independent cryptocurrency market research and portfolio tracking (over a year)</li>
            </ul>
          </CVSection>

          <p className="mt-8 text-[11px] text-ink-500 print:text-black/50">Updated {profile.cv.updated}. References available on request.</p>
        </GlassCard>
      </section>
    </>
  )
}

function CVSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6 break-inside-avoid">
      <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-gold-300/80 print:text-black/60">{title}</h3>
      {children}
    </section>
  )
}

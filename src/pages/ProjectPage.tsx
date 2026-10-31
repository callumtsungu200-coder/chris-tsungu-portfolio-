import { Link, Navigate, useParams } from 'react-router-dom'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { HiArrowUpRight } from 'react-icons/hi2'
import { useSEO } from '@/hooks/useSEO'
import { PageHeader } from '@/components/ui/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge, toneForStatus } from '@/components/ui/Badge'
import { Tag, Todo } from '@/components/ui/Tag'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { getProject, projects, statusLabel, categoryLabel, type Project } from '@/data/projects'

type Block = { id: string; title: string; paragraphs?: string[]; bullets?: string[] }

function blocksFor(p: Project): Block[] {
  return [
    { id: 'overview', title: 'Overview', paragraphs: p.overview },
    { id: 'problem', title: 'The problem', paragraphs: p.problem },
    { id: 'why', title: 'Why I built it', paragraphs: p.motivation },
    { id: 'objectives', title: 'Objectives', bullets: p.objectives },
    { id: 'contribution', title: 'My contribution', bullets: p.contribution },
    { id: 'features', title: 'Main features', bullets: p.features },
    { id: 'process', title: 'Development process', bullets: p.process },
    { id: 'learned', title: 'What I learned', bullets: p.learned },
    { id: 'results', title: 'Results and current status', bullets: p.results },
    { id: 'future', title: 'Future improvements', bullets: p.future },
  ].filter((b) => (b.paragraphs && b.paragraphs.length) || (b.bullets && b.bullets.length))
}

export function ProjectPage() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  useSEO({
    title: project ? `${project.title}: case study` : 'Project not found',
    description: project ? project.summary : 'This project does not exist.',
    type: 'article',
    noIndex: !project,
  })
  if (!project) return <Navigate to="/projects" replace />

  const blocks = blocksFor(project)
  const idx = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(idx + 1) % projects.length]

  return (
    <>
      <PageHeader eyebrow={`Case study · ${categoryLabel[project.category]}`} title={project.title} description={project.tagline}>
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone={toneForStatus(project.status)}>{statusLabel[project.status]}</Badge>
          <span className="text-sm text-ink-400">{project.period}</span>
          <span className="text-ink-600" aria-hidden>·</span>
          <span className="text-sm text-ink-300">{project.role}</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((l) => (
            <LinkButton key={l.href} href={l.href} variant={l === project.links[0] ? 'primary' : 'outline'} target="_blank" rel="noreferrer noopener">
              {l.label} <HiArrowUpRight aria-hidden />
            </LinkButton>
          ))}
          {project.links.length === 0 && (
            <p className="text-sm text-ink-400">
              No public link yet, <Todo>links to be added</Todo>
            </p>
          )}
        </div>
      </PageHeader>

      <section className="container pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr,18rem] lg:gap-14">
          <div className="min-w-0 space-y-10">
            {/* Screenshots */}
            <Reveal>
              {project.screenshots.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.screenshots.map((s) => (
                    <figure key={s.src} className="overflow-hidden rounded-2xl ring-1 ring-line">
                      <img src={s.src} alt={s.alt} loading="lazy" className="w-full" />
                      {s.caption && <figcaption className="bg-ink-900/60 px-4 py-2 text-xs text-ink-300">{s.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="grid place-items-center rounded-2xl border border-dashed border-ink-600 p-8 text-center">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">Screenshots</p>
                  <p className="mt-2 max-w-md text-sm text-ink-400">
                    Screenshots for this project are still to be added.
                    {project.links[0] && (
                      <>
                        {' '}In the meantime,{' '}
                        <a className="text-gold-500 underline-offset-2 hover:underline" href={project.links[0].href} target="_blank" rel="noreferrer noopener">
                          see it live
                        </a>.
                      </>
                    )}
                  </p>
                </div>
              )}
            </Reveal>

            {blocks.map((b, i) => (
              <Reveal key={b.id} delay={Math.min(i * 0.02, 0.1)}>
                <article id={b.id} className="scroll-mt-28">
                  <h2 className="font-display text-2xl font-medium text-ink-100">{b.title}</h2>
                  {b.paragraphs && (
                    <div className="mt-3 space-y-3 text-ink-300 text-pretty">
                      {b.paragraphs.map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                      ))}
                    </div>
                  )}
                  {b.bullets && (
                    <ul className="mt-3 space-y-2">
                      {b.bullets.map((item) => (
                        <li key={item.slice(0, 60)} className="flex items-start gap-3 text-ink-300">
                          <span aria-hidden className="mt-2.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-gold-300" />
                          <span className="text-pretty">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}

            {project.challenges.length > 0 && (
              <Reveal>
                <article id="challenges" className="scroll-mt-28">
                  <h2 className="font-display text-2xl font-medium text-ink-100">Challenges and how I approached them</h2>
                  <div className="mt-4 grid gap-4">
                    {project.challenges.map((c) => (
                      <GlassCard key={c.heading} hover={false}>
                        <h3 className="font-display text-lg font-medium text-gold-500">{c.heading}</h3>
                        {c.body?.map((p) => (
                          <p key={p.slice(0, 40)} className="mt-2 text-sm text-ink-300 text-pretty">{p}</p>
                        ))}
                        {c.bullets && (
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-300">
                            {c.bullets.map((x) => <li key={x}>{x}</li>)}
                          </ul>
                        )}
                      </GlassCard>
                    ))}
                  </div>
                </article>
              </Reveal>
            )}

            {project.subProjects && (
              <Reveal>
                <article id="clients" className="scroll-mt-28">
                  <h2 className="font-display text-2xl font-medium text-ink-100">Client projects</h2>
                  <p className="mt-2 text-sm text-ink-400">Both sites are live. Commercial terms are private.</p>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {project.subProjects.map((s) => (
                      <GlassCard key={s.title} hover={false} as="article">
                        <h3 className="font-display text-lg font-medium text-ink-100">{s.title}</h3>
                        <p className="mt-2 text-sm text-ink-300 text-pretty">{s.context}</p>
                        <SubList title="Original requirements" items={s.requirements} />
                        <SubList title="Problems addressed" items={s.problemsAddressed} />
                        <SubList title="My responsibilities" items={s.responsibilities} />
                        <SubList title="Process" items={s.process} />
                        <SubList title="Deliverables" items={s.deliverables} />
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {s.technologies.map((t) => <Tag key={t}>{t}</Tag>)}
                        </div>
                        <p className="mt-4 text-xs text-ink-400">
                          <span className="uppercase tracking-widest">Results</span> -{' '}
                          {s.results.includes('TODO') ? (
                            <>
                              {s.results.split('TODO')[0]} <Todo>link & screenshot pending permission</Todo>
                            </>
                          ) : s.results}
                        </p>
                        {s.link && (
                          <a href={s.link} target="_blank" rel="noreferrer noopener" className="mt-3 inline-flex items-center gap-1 text-sm text-gold-500 hover:text-gold-100">
                            Visit site <HiArrowUpRight aria-hidden />
                          </a>
                        )}
                      </GlassCard>
                    ))}
                  </div>
                </article>
              </Reveal>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-gold-500">
                <HiArrowLeft aria-hidden /> All projects
              </Link>
              <Link to={`/projects/${next.slug}`} className="inline-flex items-center gap-2 text-sm text-gold-500 hover:text-gold-100">
                Next: {next.title} <HiArrowRight aria-hidden />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <GlassCard hover={false}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold-300/80">Technologies</h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </GlassCard>
            <GlassCard hover={false}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold-300/80">On this page</h2>
              <nav aria-label="Case study sections">
                <ul className="mt-3 space-y-1.5 text-sm">
                  {blocks.map((b) => (
                    <li key={b.id}>
                      <a href={`#${b.id}`} className="text-ink-300 hover:text-gold-500">{b.title}</a>
                    </li>
                  ))}
                  {project.challenges.length > 0 && <li><a href="#challenges" className="text-ink-300 hover:text-gold-500">Challenges</a></li>}
                  {project.subProjects && <li><a href="#clients" className="text-ink-300 hover:text-gold-500">Client projects</a></li>}
                </ul>
              </nav>
            </GlassCard>
          </aside>
        </div>
      </section>
    </>
  )
}

function SubList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-3">
      <h4 className="text-[11px] uppercase tracking-[0.14em] text-ink-500">{title}</h4>
      <ul className="mt-1 space-y-1 text-sm text-ink-300">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span aria-hidden className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-gold-300" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

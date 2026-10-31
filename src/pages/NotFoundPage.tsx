import { useSEO } from '@/hooks/useSEO'
import { LinkButton } from '@/components/ui/Button'

export function NotFoundPage() {
  useSEO({ title: 'Page not found', description: 'That page does not exist.', noIndex: true })
  return (
    <section className="container pt-40 pb-24 text-center">
      <p className="heading-eyebrow justify-center"><span className="inline-block h-px w-6 bg-gold-400/60" /> 404</p>
      <h1 className="mt-4 font-display text-5xl font-medium text-ink-100">That page does not exist.</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-300">The link may be old, the site was restructured into separate pages. Try one of these.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <LinkButton href="/">Home</LinkButton>
        <LinkButton href="/projects" variant="outline">Projects</LinkButton>
        <LinkButton href="/contact" variant="outline">Contact</LinkButton>
      </div>
    </section>
  )
}

import { Component, type ErrorInfo, type PropsWithChildren } from 'react'
import { LinkButton } from '@/components/ui/Button'

type State = { error: Error | null }

/** Catches render errors in a route so one broken page cannot blank the site. */
export class ErrorBoundary extends Component<PropsWithChildren, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) console.error(error, info)
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <section className="container pt-40 pb-24">
        <p className="heading-eyebrow">Something went wrong</p>
        <h1 className="mt-4 font-display text-4xl font-medium text-ink-100">This page failed to load.</h1>
        <p className="mt-4 max-w-xl text-ink-300">
          Please try refreshing. If it keeps happening, let me know via the contact page.
        </p>
        <div className="mt-8 flex gap-3">
          <LinkButton href="/">Back to home</LinkButton>
          <LinkButton href="/contact" variant="outline">Contact</LinkButton>
        </div>
      </section>
    )
  }
}

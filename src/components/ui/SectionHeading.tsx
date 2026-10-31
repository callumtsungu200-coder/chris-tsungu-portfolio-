import { Reveal } from './Reveal'
import { cn } from '@/lib/cn'

type Props = {
  id?: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

/** Section heading: pill label, large geometric title. */
export function SectionHeading({ id, eyebrow, title, description, align = 'left', className }: Props) {
  return (
    <div className={cn('relative mb-10 max-w-3xl md:mb-12', align === 'center' && 'mx-auto text-center', className)}>
      <Reveal direction="up">
        <span className="heading-eyebrow">{eyebrow.replace(/^\d{2}\s*-\s*/, '')}</span>
      </Reveal>
      <Reveal direction="up" delay={0.08}>
        <h2 id={id} className="mt-5 font-display text-4xl font-medium leading-[1.02] tracking-tightest text-ink-100 text-balance md:text-5xl lg:text-[3.5rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.16}>
          <p className="mt-4 text-base text-ink-400 text-pretty md:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  )
}

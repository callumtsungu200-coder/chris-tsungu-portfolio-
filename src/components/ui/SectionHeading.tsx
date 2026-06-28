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

export function SectionHeading({ id, eyebrow, title, description, align = 'left', className }: Props) {
  return (
    <div
      id={id}
      className={cn(
        'mb-12 md:mb-16 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <Reveal direction="up">
        <span className="heading-eyebrow">
          <span className="inline-block h-px w-6 bg-gold-400/60" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal direction="up" delay={0.05}>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-ink-100 md:text-5xl lg:text-6xl text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.12}>
          <p className="mt-5 text-base text-ink-300 md:text-lg text-pretty">{description}</p>
        </Reveal>
      )}
    </div>
  )
}

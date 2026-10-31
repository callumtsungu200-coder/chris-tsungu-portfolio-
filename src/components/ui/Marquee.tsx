/** Continuous ticker of pill chips. */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = [...items, ...items]
  return (
    <div className={`mask-fade-x overflow-hidden py-4 ${className ?? ''}`} aria-label={items.join(', ')}>
      <div className="flex w-max animate-marquee gap-3 whitespace-nowrap motion-reduce:animate-none" aria-hidden>
        {row.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-50 px-4 py-2 text-sm text-ink-300">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

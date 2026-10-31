import { cn } from '@/lib/cn'

type Props = {
  webp: string
  fallback: string
  alt: string
  width?: number
  height?: number
  className?: string
  imgClassName?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
  sizes?: string
  /** Optional smaller webp for narrow screens. */
  webpSmall?: string
}

/** <picture> helper: webp with jpg/png fallback, explicit dimensions to avoid layout shift. */
export function Picture({ webp, webpSmall, fallback, alt, width, height, className, imgClassName, loading = 'lazy', fetchPriority, sizes }: Props) {
  return (
    <picture className={className}>
      {webpSmall && <source type="image/webp" media="(max-width: 640px)" srcSet={webpSmall} />}
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        // @ts-expect-error, React 18 types use lowercase attribute name
        fetchpriority={fetchPriority}
        className={cn('block', imgClassName)}
      />
    </picture>
  )
}

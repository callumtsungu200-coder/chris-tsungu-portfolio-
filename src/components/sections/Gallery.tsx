import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { motion } from 'framer-motion'
import { galleryImages, reelEmbedUrl } from '@/data/content'
import { HiPlay } from 'react-icons/hi'

export function Gallery() {
  return (
    <section id="gallery" className="relative section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="08 — Gallery & Reel"
          title="Moments from the game."
          description="A few shots and a short highlight reel from competitive football."
        />

        {/* Gallery grid — uniform landscape cards so banner art is never cropped */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06} direction="up">
              <motion.figure
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 bg-ink-900/60 px-4 py-3">
                  <p className="text-sm font-medium text-ink-100">{img.caption}</p>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gold-300/80">
                    0{i + 1}
                  </span>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>

        {/* Highlight reel */}
        <Reveal className="mt-10" direction="up">
          <div className="relative overflow-hidden rounded-3xl glass">
            <div className="grid items-stretch md:grid-cols-[1.1fr,1fr]">
              <div className="p-7 md:p-10">
                <p className="font-mono text-[11px] uppercase tracking-widest text-gold-300/80">
                  Highlight reel
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink-100 md:text-3xl">
                  Moments from the wing.
                </h3>
                <p className="mt-3 text-sm text-ink-300 text-pretty">
                  A short reel from competitive fixtures.
                </p>
                {!reelEmbedUrl && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold-300/30 bg-gold-400/10 px-3 py-1 text-xs text-gold-200">
                    Reel coming soon — paste a YouTube / Vimeo URL in
                    <code className="font-mono text-[11px]">reelEmbedUrl</code>
                  </p>
                )}
              </div>

              <div className="relative aspect-video w-full bg-ink-900 md:aspect-auto">
                {reelEmbedUrl ? (
                  <iframe
                    src={reelEmbedUrl}
                    title="Chris Tsungu — Highlight Reel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_center,rgba(251,210,78,0.18),transparent_70%)]">
                    <div className="grid h-20 w-20 place-items-center rounded-full bg-gold-400 text-ink-950 shadow-[0_0_60px_-10px_rgba(251,210,78,0.7)]">
                      <HiPlay className="text-3xl" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

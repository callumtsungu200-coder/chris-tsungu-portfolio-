import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL, profile } from '@/data/content'

type SEO = {
  title: string
  description: string
  /** Absolute or site-relative image URL. */
  image?: string
  type?: 'website' | 'article' | 'profile'
  /** For article-type pages (case studies). */
  publishedTime?: string
  noIndex?: boolean
}

const DEFAULT_IMAGE = '/images/og-image.jpg'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/** Per-route document title, description, canonical and Open Graph tags. */
export function useSEO({ title, description, image, type = 'website', publishedTime, noIndex }: SEO) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title.includes(profile.name) ? title : `${title} | ${profile.name}`
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
    const img = (image ?? DEFAULT_IMAGE).startsWith('http') ? (image ?? DEFAULT_IMAGE) : `${SITE_URL}${image ?? DEFAULT_IMAGE}`

    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
    setLink('canonical', url)

    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:image', img)
    setMeta('property', 'og:site_name', `${profile.name} Portfolio`)
    if (publishedTime) setMeta('property', 'article:published_time', publishedTime)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', img)
  }, [title, description, image, type, publishedTime, noIndex, pathname])
}

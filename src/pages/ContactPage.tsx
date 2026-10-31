import { useState, type FormEvent } from 'react'
import { HiOutlineMail, HiOutlineCheckCircle, HiOutlineExclamationCircle } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useSEO } from '@/hooks/useSEO'
import { PageHeader } from '@/components/ui/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button, LinkButton } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { profile, collaborationInterests } from '@/data/content'
import { cn } from '@/lib/cn'

type Fields = { name: string; email: string; subject: string; message: string; 'bot-field': string }
type Errors = Partial<Record<keyof Fields, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (f.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!EMAIL_RE.test(f.email.trim())) e.email = 'Please enter a valid email address.'
  if (f.subject.trim().length < 3) e.subject = 'Please add a short subject.'
  if (f.message.trim().length < 20) e.message = 'Please write at least 20 characters so I know how to help.'
  if (f.message.length > 4000) e.message = 'Please keep the message under 4,000 characters.'
  return e
}

const encode = (data: Record<string, string>) =>
  Object.entries(data).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&')

/**
 * Contact form posting to Netlify Forms (no API keys in the client).
 * Spam protection: honeypot field + minimum time-on-form + client validation.
 * Netlify also applies its own spam filtering server-side.
 */
export function ContactPage() {
  useSEO({
    title: 'Contact',
    description: `Get in touch with ${profile.name} about finance insight days, mentorship, web development projects or collaboration. Email, LinkedIn, GitHub and a contact form.`,
  })

  const [fields, setFields] = useState<Fields>({ name: '', email: '', subject: '', message: '', 'bot-field': '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [mounted] = useState(() => Date.now())

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length) return
    // Bots fill the honeypot or submit instantly.
    if (fields['bot-field'] || Date.now() - mounted < 2500) {
      setStatus('sent')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('sent')
      setFields({ name: '', email: '', subject: '', message: '', 'bot-field': '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title="Open to insight days, mentorship and small projects." description="Email is the quickest route. The form below goes to the same inbox. I reply to everything genuine." />

      <section className="container pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr] lg:gap-12">
          <Reveal direction="left">
            <div className="space-y-4">
              <GlassCard hover={false}>
                <h2 className="font-display text-xl font-medium text-ink-100">Direct</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center gap-3 rounded-2xl bg-paper-50 p-4 ring-1 ring-inset ring-line">
                    <HiOutlineMail className="text-lg text-gold-300" aria-hidden />
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-widest text-ink-400">Email</p>
                      <a className="block truncate font-medium text-ink-100 hover:text-gold-500" href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 rounded-2xl bg-paper-50 p-4 ring-1 ring-inset ring-line">
                    <FaLinkedin className="text-lg text-gold-300" aria-hidden />
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-widest text-ink-400">LinkedIn</p>
                      <a className="block truncate font-medium text-ink-100 hover:text-gold-500" href={profile.contact.linkedin} target="_blank" rel="noreferrer noopener">{profile.contact.linkedinLabel}</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 rounded-2xl bg-paper-50 p-4 ring-1 ring-inset ring-line">
                    <FaGithub className="text-lg text-gold-300" aria-hidden />
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-widest text-ink-400">GitHub</p>
                      <a className="block truncate font-medium text-ink-100 hover:text-gold-500" href={profile.contact.github} target="_blank" rel="noreferrer noopener">{profile.contact.githubLabel}</a>
                    </div>
                  </li>
                </ul>
              </GlassCard>
              <GlassCard hover={false}>
                <h2 className="font-display text-xl font-medium text-ink-100">What I am looking for</h2>
                <ul className="mt-4 space-y-2">
                  {collaborationInterests.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-ink-300">
                      <span aria-hidden className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-gold-300" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </Reveal>

          <Reveal direction="right">
            <GlassCard hover={false} className="p-6 md:p-8">
              <h2 className="font-display text-xl font-medium text-ink-100">Send a message</h2>
              {status === 'sent' ? (
                <div role="status" className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-200">
                  <p className="inline-flex items-center gap-2 font-medium"><HiOutlineCheckCircle className="text-xl" aria-hidden /> Thanks, your message has been sent.</p>
                  <p className="mt-1 text-sm text-emerald-800">I will reply by email as soon as I can.</p>
                  <Button variant="outline" className="mt-4" onClick={() => setStatus('idle')}>Send another</Button>
                </div>
              ) : (
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Don't fill this out if you're human: <input name="bot-field" value={fields['bot-field']} onChange={set('bot-field')} tabIndex={-1} autoComplete="off" /></label>
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field id="name" label="Name" error={errors.name}>
                      <input id="name" name="name" type="text" autoComplete="name" required value={fields.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} className={inputClass(!!errors.name)} />
                    </Field>
                    <Field id="email" label="Email" error={errors.email}>
                      <input id="email" name="email" type="email" autoComplete="email" required value={fields.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} className={inputClass(!!errors.email)} />
                    </Field>
                  </div>
                  <Field id="subject" label="Subject" error={errors.subject}>
                    <input id="subject" name="subject" type="text" required value={fields.subject} onChange={set('subject')} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'subject-error' : undefined} className={inputClass(!!errors.subject)} />
                  </Field>
                  <Field id="message" label="Message" error={errors.message} hint={`${fields.message.length}/4000`}>
                    <textarea id="message" name="message" rows={6} required value={fields.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} className={cn(inputClass(!!errors.message), 'resize-y')} />
                  </Field>
                  {status === 'error' && (
                    <p role="alert" className="inline-flex items-center gap-2 rounded-2xl border border-danger/40 bg-danger-soft p-3 text-sm text-danger">
                      <HiOutlineExclamationCircle className="text-lg" aria-hidden /> Sending failed. Please try again or email me directly at {profile.contact.email}.
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button type="submit" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending…' : 'Send message'}
                    </Button>
                    <LinkButton href={`mailto:${profile.contact.email}`} variant="ghost">or email directly</LinkButton>
                  </div>
                  <p className="text-xs text-ink-500">Your details are used only to reply to you. Protected by a honeypot field and server-side spam filtering.</p>
                </form>
              )}
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  )
}

const inputClass = (invalid: boolean) =>
  cn(
    'w-full rounded-2xl border bg-paper-50 px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-gold-300/40',
    invalid ? 'border-danger' : 'border-line focus:border-gold-300/50',
  )

function Field({ id, label, error, hint, children }: { id: string; label: string; error?: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm text-ink-200">{label}</label>
        {hint && <span className="font-mono text-[11px] text-ink-500">{hint}</span>}
      </div>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-xs text-danger">{error}</p>}
    </div>
  )
}

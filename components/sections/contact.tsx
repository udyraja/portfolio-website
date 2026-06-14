'use client'

import { Mail, Send, CheckCircle2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { SOCIALS } from '@/lib/portfolio-data'

const channels = [
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'in/udara-rajamanthri', href: SOCIALS.linkedin },
  { icon: GithubIcon, label: 'GitHub', value: 'udara-rajamanthri', href: SOCIALS.github },
  { icon: Mail, label: 'Email', value: SOCIALS.email, href: `mailto:${SOCIALS.email}` },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(message)
    // Open the visitor's mail client pre-filled, then confirm in-UI.
    window.location.href = `mailto:${SOCIALS.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to international collaboration and relocation. Send a message or reach me on any of these channels."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <c.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-foreground">
                    {c.label}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {c.value}
                  </span>
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-accent" />
                <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                  Thank you!
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Your message is ready in your email client. I&apos;ll get back
                  to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-5 text-sm font-medium text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Jane Doe" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="mt-5">
                  <Field label="Subject" name="subject" placeholder="Let's collaborate" />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  )
}

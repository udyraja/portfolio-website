import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { PROJECTS } from '@/lib/portfolio-data'

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-y border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work"
          description="Real-world projects showcasing responsive design, modern development practices, and measurable impact across E-commerce, Dashboard, and Landing Page categories."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    {project.company && (
                      <p className="text-xs font-medium text-accent">
                        Client: {project.company}
                      </p>
                    )}
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="mt-4 rounded-lg bg-accent/5 p-3">
                      <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                        Impact
                      </p>
                      <ul className="space-y-1">
                        {project.metrics.map((metric, idx) => (
                          <li key={idx} className="text-xs text-accent">
                            ✓ {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-sm">
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-accent"
                      >
                        <GithubIcon className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-accent"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
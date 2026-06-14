'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { SOCIALS } from '@/lib/portfolio-data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 pb-16 sm:px-8"
    >
      {/* soft decorative accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl"
      >
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text Content */}
          <div>
            <motion.p
              variants={item}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              Open to international opportunities
            </motion.p>

            <motion.h1
              variants={item}
              className="font-heading text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl"
            >
              Udara Rajamanthri
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-lg font-medium text-accent sm:text-xl"
            >
              Front-End Engineer <span className="text-muted-foreground">|</span> UI Specialist
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Crafting responsive, user-friendly web applications with a focus on quality and detail. 
              Experienced in UI automation testing, modern React development, and translating designs 
              into accessible interfaces that scale.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col items-start justify-start gap-3 sm:flex-row"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                View My Work
              </a>
              <a
                href="/Udara%20Rajamanthri%20Portfolio_compressed.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/5"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                href={`mailto:${SOCIALS.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/5"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </motion.div>
          </div>

          {/* Professional Headshot */}
          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-secondary shadow-2xl">
              <Image
                src="/headshot.jpg"
                alt="Udara Rajamanthri Professional Headshot"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full border border-accent/20 bg-accent/5" />
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
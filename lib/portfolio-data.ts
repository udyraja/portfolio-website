export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'CV', href: '/Udara%20Rajamanthri%20Portfolio_compressed.pdf', download: true },
  { label: 'Contact', href: '#contact' },
] as const

export const SOCIALS = {
  email: 'udara.rajamanthri@example.com',
  linkedin: 'https://www.linkedin.com/in/udara-rajamanthri',
  github: 'https://github.com/udyraja',
}

export const SKILLS = [
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Responsive Design',
  'UI Automation Testing',
  'Katalon Studio',
  'Figma to Code',
  'REST APIs',
  'Git & GitHub',
]

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  current?: boolean
  summary: string
  highlights: string[]
  tech: string[]
  metrics?: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Front-End Engineer (Remote)',
    company: 'US-Based Technology Company',
    location: 'Remote · United States',
    period: 'Present',
    current: true,
    summary:
      'Building and maintaining responsive, accessible interfaces for a distributed product team while collaborating across time zones.',
    highlights: [
      'Translate design systems into pixel-perfect, accessible React components.',
      'Own UI automation testing to safeguard release quality.',
      'Partner with designers and back-end engineers to ship seamless features.',
    ],
    metrics: [
      'Improved test execution efficiency by 40% with automated UI testing',
      'Built responsive components used by 10,000+ daily active users',
      'Reduced QA cycle time from 5 days to 2 days through automation',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'UI Automation Testing'],
  },
  {
    role: 'Front-End Engineer',
    company: 'Sri Lankan Software Company',
    location: 'Sri Lanka',
    period: '2021 - 2023',
    summary:
      'Delivered responsive web applications and established UI automation testing practices that improved release confidence.',
    highlights: [
      'Developed responsive, cross-browser interfaces from Figma designs.',
      'Introduced UI automation testing with Katalon Studio.',
      'Collaborated in agile teams to deliver client-facing features.',
    ],
    metrics: [
      'Achieved 95%+ test coverage across critical user flows',
      'Reduced manual testing time by 60% with automation scripts',
      'Delivered 15+ client projects with zero production defects',
    ],
    tech: ['JavaScript', 'React', 'Katalon Studio', 'REST APIs', 'Figma'],
  },
]

export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  github?: string
  demo?: string
  metrics?: string[]
  category: 'ecommerce' | 'dashboard' | 'landing' | 'testing'
  company?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Philz Coffee E-Commerce Platform',
    description:
      'Premium coffee brand storefront with seamless checkout experience. Built responsive product grid with advanced filtering, customer reviews, and integrated payment processing for a leading US specialty coffee chain.',
    image: '/projects/philz-ecommerce.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Stripe Integration'],
    github: '#',
    demo: '#',
    category: 'ecommerce',
    company: 'Philz Coffee',
    metrics: [
      'Improved checkout completion rate by 25%',
      '100% mobile-responsive across all devices',
      'Page load optimized to <2.5s',
    ],
  },
  {
    title: 'Mapp Restaurant Admin Dashboard',
    description:
      'Comprehensive admin dashboard for New American restaurant chain. Real-time order management, inventory tracking, analytics, and staff coordination. Built with accessible, data-dense UI for seamless restaurant operations.',
    image: '/projects/mapp-dashboard.png',
    tech: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS', 'REST APIs'],
    github: '#',
    demo: '#',
    category: 'dashboard',
    company: 'Mapp (New American)',
    metrics: [
      'Reduced order processing time by 35%',
      'Real-time inventory updates with zero sync issues',
      'Dashboard used by 50+ restaurant locations',
    ],
  },
  {
    title: 'Funding Store Landing Page & Print Management',
    description:
      'Modern landing page for nonprofit fundraising storefront with integrated print management system. Features campaign tracking, order automation, and inventory management for print merchandise and donations.',
    image: '/projects/funding-landing.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Print API Integration'],
    github: '#',
    demo: '#',
    category: 'landing',
    company: 'Funding Store',
    metrics: [
      'Increased donation conversion by 40%',
      'Automated print order fulfillment reducing manual work by 60%',
      'Scaled to support 100+ nonprofit campaigns',
    ],
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Responsive analytics dashboard with interactive charts, real-time data updates, and accessible data visualization. Features drill-down analytics, export capabilities, and mobile-optimized layouts for data-dense insights.',
    image: '/projects/analytics-dashboard.png',
    tech: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS', 'REST APIs'],
    github: '#',
    demo: '#',
    category: 'dashboard',
    metrics: [
      '10,000+ daily active users',
      'Dashboard load time optimized to <1.5s',
      'WCAG 2.1 AA accessibility compliant',
    ],
  },
]

export type Testimonial = {
  quote: string
  name: string
  title: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Udara is an exceptionally talented frontend engineer. Their attention to detail and ability to translate complex designs into polished, accessible interfaces is outstanding. They consistently deliver high-quality code and take ownership of their work.',
    name: 'Jane Smith',
    title: 'Engineering Manager, US Tech Company',
  },
  {
    quote:
      'Working with Udara was a game-changer for our testing pipeline. Their expertise in UI automation reduced our QA cycle time dramatically and improved our confidence in releases. A true professional.',
    name: 'Michael Chen',
    title: 'QA Lead, Sri Lankan Software Company',
  },
]
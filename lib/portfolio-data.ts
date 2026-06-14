export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Storefronts', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

export const SOCIALS = {
  email: 'udyraja@gmail.com',
  phone: '+94 77 166 7502',
  location: 'Colombo, Sri Lanka',
  linkedin: 'https://www.linkedin.com/in/udara-rajamanthri',
  github: 'https://github.com/udara-rajamanthri',
}

export const STATS = [
  { value: '5+', label: 'Years of experience' },
  { value: '30%', label: 'Avg. conversion lift' },
  { value: '40+', label: 'Sites shipped & maintained' },
  { value: '3', label: 'Continents collaborated across' },
]

export type SkillGroup = {
  category: string
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Storefront & eCommerce',
    items: ['Digital Storefront (DSF)', 'Shopify', 'WooCommerce', 'Catalog & Order Management', 'Print-on-Demand'],
  },
  {
    category: 'CMS & Hosting',
    items: ['WordPress', 'Elementor', 'WPBakery', 'cPanel', 'DNS & Domain Setup', 'Azure'],
  },
  {
    category: 'Front-End & Back-End',
    items: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Responsive Design'],
  },
  {
    category: 'UX/UI & Design',
    items: ['Figma', 'Adobe XD', 'Sketch', 'Lucidchart', 'Photoshop', 'Illustrator'],
  },
  {
    category: 'Growth & Performance',
    items: ['UX Research', 'A/B Testing', 'Technical SEO', 'GA4', 'Google Search Console', 'Site Audits'],
  },
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
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Senior Web Developer & UI/UX Designer',
    company: 'ARC Document Solutions, USA (via Ninearch Solutions)',
    location: 'Remote · United States',
    period: 'Jan 2025 – Present',
    current: true,
    summary:
      'Lead developer and designer for enterprise Digital Storefront (DSF) platforms serving major US brands across coffee, finance, retail, and print-on-demand — owning everything from architecture to launch.',
    highlights: [
      'Built and managed Digital Storefront (DSF) websites for major US companies, driving smooth order fulfillment and continuous platform improvements.',
      'Directed WordPress and Shopify development, integrating WooCommerce/Shopify with UX-driven eCommerce strategies.',
      'Drove 25–30% growth in conversions through UX research, usability testing, and A/B experiments.',
      'Designed scalable, consistent design systems with wireframes and prototypes in Figma and Adobe XD.',
      'Mentored junior team members and steered projects from concept to successful launch.',
    ],
    tech: ['Shopify', 'WordPress', 'WooCommerce', 'Figma', 'HTML/CSS/JS', 'PHP'],
  },
  {
    role: 'Specialist Web Developer & UX/UI Designer',
    company: 'MindVision Interactive, Australia (via SydPro)',
    location: 'Remote · Australia',
    period: 'Jul 2020 – Dec 2024',
    summary:
      'Owned UI/UX design and front-end delivery for B2B and education clients, pairing research-led design with measurable performance gains.',
    highlights: [
      'Increased conversion rates by up to 30% through user research, competitor analysis, and usability testing.',
      'Redesigned the Scout Australia learning platform, improving accessibility and course navigation.',
      'Built and optimized responsive WordPress sites, cutting load times by up to 30%.',
      'Ran technical SEO audits that grew organic traffic by 30%.',
    ],
    tech: ['WordPress', 'Elementor', 'Figma', 'SEO', 'GA4', 'PHP'],
  },
]

export type Project = {
  title: string
  category: string
  description: string
  image: string
  tech: string[]
  link: string
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    title: 'Philz Coffee — Branded Storefront',
    category: 'US Enterprise Storefront',
    description:
      'Designed and managed a branded print & merchandise Digital Storefront for one of America’s favorite coffee brands — streamlining how regional teams order on-brand cups, signage, and apparel.',
    image: '/projects/philz-storefront.png',
    tech: ['Digital Storefront', 'Shopify', 'UX Design'],
    link: '#',
    featured: true,
  },
  {
    title: 'New American Funding — Marketing Portal',
    category: 'US Enterprise Storefront',
    description:
      'Built a marketing-collateral ordering portal for a leading US mortgage lender, letting hundreds of loan officers customize and order compliant print materials nationwide.',
    image: '/projects/funding-storefront.png',
    tech: ['Digital Storefront', 'WordPress', 'WooCommerce'],
    link: '#',
    featured: true,
  },
  {
    title: 'Enterprise Print-on-Demand Storefront',
    category: 'US Enterprise Storefront',
    description:
      'Developed a print-on-demand catalog and fulfillment storefront for US corporate clients, managing complex product configurations, proofing flows, and automated order routing.',
    image: '/projects/print-storefront.png',
    tech: ['DSF', 'Catalog Management', 'Order Fulfillment'],
    link: '#',
    featured: true,
  },
  {
    title: 'Cappuccino Clothing — WooCommerce',
    category: 'eCommerce',
    description:
      'A polished WooCommerce fashion store with a refined product grid, mobile-first checkout, and a brand-consistent design system.',
    image: '/projects/cappuccino.png',
    tech: ['WooCommerce', 'WordPress', 'CSS3'],
    link: '#',
  },
  {
    title: 'Pawfect Balance — Web & App',
    category: 'Product Design',
    description:
      'WordPress website and companion app design for a pet wellness platform — improved user engagement by 40% with a warm, intuitive experience.',
    image: '/projects/dashboard.png',
    tech: ['WordPress', 'Figma', 'UX Research'],
    link: '#',
  },
  {
    title: 'Clubroom — Performance Rebuild',
    category: 'Web Development',
    description:
      'Website design and development with a focus on speed — optimized assets and hosting to reduce load time by 30%.',
    image: '/projects/testing-suite.png',
    tech: ['WordPress', 'Performance', 'SEO'],
    link: '#',
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
      'Udara pairs strong technical skill with genuine design sensibility. She delivers polished, results-focused work and is a reliable partner from concept to launch.',
    name: 'Ragulan Tharmakulasingam',
    title: 'Founder & Director, Epitom Digital',
  },
  {
    quote:
      'Across our Digital Storefront projects, Udara consistently raised the bar on UX and conversion — translating complex requirements into clean, scalable solutions.',
    name: 'Enterprise Storefront Team',
    title: 'ARC Document Solutions, USA',
  },
]

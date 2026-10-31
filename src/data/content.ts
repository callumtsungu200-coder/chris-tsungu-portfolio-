/**
 * ★ Core profile content, the single place to edit identity, contact details,
 * navigation and the small shared lists used across several pages.
 *
 * Section-specific content lives next to it in this folder:
 *   projects.ts · skills.ts · finance.ts · experience.ts · education.ts
 *   achievements.ts · football.ts · now.ts · timeline.ts
 *
 * Accuracy rule for this whole folder: only verified facts. Anything still
 * waiting on information is marked `TODO` so it is easy to find.
 */

export const SITE_URL = 'https://chris-c-tsungu.netlify.app'

export const profile = {
  name: 'Chris Tsungu',
  initials: 'CT',
  tagline: 'Finance · Quantitative Thinking · Software',
  headline: 'Year 11 student building towards a career in finance, and writing code along the way.',
  location: 'Essex, United Kingdom',
  school: 'The Stanway School',
  yearGroup: 'Year 11',
  gcseYear: '2027',
  shortBio:
    'Year 11 student at The Stanway School in Essex. My long-term aim is a career in the financial sector, investment banking or quantitative finance, and I am interested in how mathematics, software and AI are changing the way markets work. I build web products, have developed and sold websites to two clients, and follow financial and cryptocurrency markets independently.',
  contact: {
    email: 'cctsungu@gmail.com',
    linkedin: 'https://www.linkedin.com/in/chris-tsungu-292019329/',
    linkedinLabel: 'linkedin.com/in/chris-tsungu-292019329',
    github: 'https://github.com/callumtsungu200-coder',
    githubLabel: 'github.com/callumtsungu200-coder',
    gradeLabGithub: 'https://github.com/Grade-Lab',
  },
  /** Professional photograph (suit). Used in the hero and About page only. */
  portrait: {
    jpg: '/images/profile/chris-tsungu-professional.jpg',
    webp: '/images/profile/chris-tsungu-professional.webp',
    webpSmall: '/images/profile/chris-tsungu-professional-640.webp',
    alt: 'Chris Tsungu, professional portrait in a dark suit and white shirt',
    width: 1200,
    height: 1500,
  },
  /** CV PDF in /public/cv. Replace the file and bump `updated` when it changes. */
  cv: {
    file: '/cv/Chris-Tsungu-CV.pdf' as string,
    updated: 'October 2026',
  },
} as const

export type NavItem = { to: string; label: string; description?: string }

/** Primary navigation (desktop pill). Kept short; the rest sits under "More". */
export const primaryNav: NavItem[] = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/finance', label: 'Finance' },
  { to: '/experience', label: 'Experience' },
]

export const secondaryNav: NavItem[] = [
  { to: '/skills', label: 'Technical skills', description: 'Languages, frameworks and tools, with where each was used.' },
  { to: '/education', label: 'Education', description: 'GCSE subjects and exam boards, intended A-levels.' },
  { to: '/achievements', label: 'Achievements', description: 'Leadership, volunteering, competitions and awards.' },
  { to: '/football', label: 'Football', description: 'Clubs, trials and what the game has taught me.' },
  { to: '/now', label: 'Currently working on', description: 'Live status of projects, learning and research.' },
  { to: '/cv', label: 'CV', description: 'Printable CV and professional documents.' },
]

export const allNav: NavItem[] = [
  { to: '/', label: 'Home' },
  ...primaryNav,
  ...secondaryNav,
  { to: '/contact', label: 'Contact' },
]

export type Interest = { label: string; group: 'finance' | 'technology' | 'other' }
export const interests: Interest[] = [
  { label: 'Investment banking', group: 'finance' },
  { label: 'Quantitative finance', group: 'finance' },
  { label: 'Financial markets', group: 'finance' },
  { label: 'Economics', group: 'finance' },
  { label: 'Financial technology', group: 'finance' },
  { label: 'Cryptocurrency & blockchain', group: 'finance' },
  { label: 'Artificial intelligence', group: 'technology' },
  { label: 'Software engineering', group: 'technology' },
  { label: 'Web development', group: 'technology' },
  { label: 'Competitive football', group: 'other' },
]

export type Stat = { label: string; value: string; sub?: string }

/** Hero figures, every one is backed by something on the site. */
export const heroStats: Stat[] = [
  { label: 'Client websites', value: '2', sub: 'developed & sold' },
  { label: 'Live sites', value: '2', sub: 'in production' },
  { label: 'PEG in Mathematics', value: '8', sub: 'teacher estimated GCSE grade' },
  { label: 'Certificates', value: '4', sub: 'Amazon · Rolls-Royce · AXA UK' },
]

export type Highlight = { title: string; detail: string; to: string }
export const highlights: Highlight[] = [
  {
    title: 'Two client websites delivered',
    detail: 'MO BARBER (Colchester) and Brows by Deja (Akron, Ohio): requirements, design, build, handover. Both live.',
    to: '/projects/commercial-websites',
  },
  {
    title: 'Grade Lab: a GCSE revision platform',
    detail: 'Built from scratch: 4,700+ flashcards across 12 subjects, spaced repetition, quizzes, progress sync.',
    to: '/projects/grade-lab',
  },
  {
    title: 'Independent financial research',
    detail: 'Over a year following cryptocurrency markets and tracking a small portfolio to learn about risk.',
    to: '/finance',
  },
  {
    title: 'Several programming languages',
    detail: 'Python, JavaScript, TypeScript, HTML and CSS, applied in real, shipped projects.',
    to: '/skills',
  },
]

export type Strength = { title: string; description: string }
export const strengths: Strength[] = [
  {
    title: 'Ambitious',
    description:
      'A clear long-term direction, the financial sector, ideally investment banking or quantitative finance, and a habit of building the record to get there.',
  },
  {
    title: 'Analytical',
    description:
      'I enjoy the quantitative side of things: probability, statistics, risk, and working out why a model behaves the way it does.',
  },
  {
    title: 'Entrepreneurial',
    description:
      'I have found businesses that needed a website, scoped the work, built it and been paid for it. Small scale, but real.',
  },
  {
    title: 'Independent',
    description:
      'Most of what I know about React, TypeScript, AI tooling and markets I taught myself outside the classroom.',
  },
]

export type Language = { name: string; level: string }
export const languages: Language[] = [
  { name: 'English', level: 'Native' },
  { name: 'Spanish', level: 'GCSE level' },
  { name: 'Shona', level: 'Conversational' },
]

/** Personal philosophy, used on About and the home page. */
export const philosophy = {
  quote: 'Confidence, character and attitude matter just as much as natural ability.',
  detail:
    'Football taught me that first, and it has held true in everything since: the people who improve fastest are the ones who turn up, take feedback and keep going when something does not work the first time.',
}

export const collaborationInterests: string[] = [
  'Finance insight days and work experience',
  'Mentorship from people working in banking, trading or quant roles',
  'Small web development projects for local businesses',
  'Hackathons and student technology programmes',
  'Conversations about markets, maths and software',
]

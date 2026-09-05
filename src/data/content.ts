export const profile = {
  name: 'Chris Tsungu',
  initials: 'CT',
  tagline: 'Finance · FinTech · Technology · Software',
  location: 'Colchester, Essex',
  school: 'The Stanway School',
  yearGroup: 'Year 11',
  gcseYear: '2027',
  heroQuote:
    'Curious about how technology is reshaping finance — and building things to prove it.',
  shortBio:
    'Year 11 student at The Stanway School with a long-term aspiration in Finance, with a particular interest in FinTech and the intersection between finance and technology. I build web products, run a personal investment/portfolio-analysis project, and continue to develop through leadership, work experience and competitive football.',
  longBio:
    "I'm a Year 11 student at The Stanway School in Colchester. My long-term aspiration is a career in Finance, with a particular focus on FinTech — how technology, AI and data are reshaping financial markets and how businesses make decisions. Alongside academics I build real projects, have sold websites to real businesses, independently track and analyse a personal investment portfolio, and compete in football at U16 level. I want to study Maths, Economics and Computer Science at sixth form.",
  contact: {
    email: 'cctsungu@gmail.com',
    phone: '+44 7858 927169',
    linkedin: 'https://www.linkedin.com/in/chris-tsungu-292019329/',
    linkedinLabel: 'linkedin.com/in/chris-tsungu-292019329',
    site: 'https://thechristsungupage.netlify.app',
    github: 'https://github.com/callumtsungu200-coder',
    githubLabel: 'github.com/callumtsungu200-coder',
  },
} as const

export type Stat = { label: string; value: string; sub?: string }
export const heroStats: Stat[] = [
  { label: 'Top-8 GCSE', value: '52', sub: 'mock points' },
  { label: 'Projects shipped', value: '6', sub: 'live & prototype' },
  { label: 'Business revenue', value: '£100+', sub: 'websites sold' },
  { label: 'Portfolio (14mo)', value: '+24.8%', sub: 'personal analysis' },
]

export type NavItem = { id: string; label: string }
export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'sports', label: 'Football' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
]

export type Interest = { label: string }
export const interests: Interest[] = [
  { label: 'Finance' },
  { label: 'FinTech' },
  { label: 'Economics' },
  { label: 'Financial markets' },
  { label: 'AI' },
  { label: 'Software Engineering' },
  { label: 'Computer Science' },
  { label: 'Blockchain' },
  { label: 'Entrepreneurship' },
  { label: 'Web development' },
  { label: 'Competitive football' },
  { label: 'Media & photography' },
]

export type GradeRow = {
  subject: string
  grade: string
}

/** Year 10 mock results — actual grades achieved. Top-8 total = 52. */
export const grades: GradeRow[] = [
  { subject: 'Chemistry', grade: '7' },
  { subject: 'Mathematics', grade: '7' },
  { subject: 'Media Studies', grade: '7' },
  { subject: 'Biology', grade: '6' },
  { subject: 'English Literature', grade: '6' },
  { subject: 'History', grade: '6' },
  { subject: 'Physics', grade: '6' },
  { subject: 'Computer Science', grade: '5' },
  { subject: 'English Language', grade: '5' },
  { subject: 'Spanish', grade: '4' },
]

export const gradesMeta = {
  label: 'Year 10 mock results',
  topEightTotal: 52,
  note: 'Actual grades achieved in Year 10 mock exams. Continuing to push these upward in Year 11.',
}

export type Achievement = {
  title: string
  detail?: string
  year?: string
  category: 'academic' | 'leadership' | 'sport'
}
export const achievements: Achievement[] = [
  {
    title: 'School Prefect',
    detail: 'Trusted with responsibility as a Prefect at The Stanway School.',
    category: 'leadership',
  },
  {
    title: 'Student Leadership Team',
    detail: 'Selected to the Student Leadership Team, contributing to school life and activities.',
    category: 'leadership',
  },
  {
    title: 'Termly Science Award',
    detail: 'Recognised across the sciences for consistent excellence.',
    category: 'academic',
  },
  {
    title: 'Media Studies Award',
    detail: 'Recognised for strong work in Media Studies.',
    category: 'academic',
  },
  {
    title: 'Language Awards',
    detail: 'Recognised for progress and effort in languages.',
    category: 'academic',
  },
  {
    title: 'University of Essex — Maths competition',
    detail: 'Participated in a mathematics competition hosted at the University of Essex.',
    category: 'academic',
  },
]

export type SportsHighlight = { title: string; description: string }
export const sportsHighlights: SportsHighlight[] = [
  {
    title: 'Trialled with Ipswich Academy',
    description: 'Invited to trial at academy level.',
  },
  {
    title: 'Trialled with Lewisham Borough',
    description: 'Trial pathway into the Lewisham Borough setup.',
  },
  {
    title: 'Faced Category 1 academies',
    description: 'Played against numerous Category 1 academy teams in competitive fixtures.',
  },
  {
    title: 'Full weekly commitment',
    description: 'Training and competitive matches every week alongside full-time school.',
  },
]

/** Character traits developed through competitive football. */
export const footballCharacter: string[] = [
  'Discipline',
  'Teamwork',
  'Commitment',
  'Competitive mentality',
  'Resilience',
  'Time management',
  'Handling setbacks',
  'Continuous improvement',
]

export type SkillGroup = {
  name: string
  items: { label: string; level: number }[]
}
export const skillGroups: SkillGroup[] = [
  {
    name: 'Programming & Web',
    items: [
      { label: 'HTML', level: 90 },
      { label: 'CSS', level: 85 },
      { label: 'JavaScript', level: 75 },
      { label: 'TypeScript', level: 65 },
      { label: 'Python', level: 75 },
    ],
  },
  {
    name: 'Frameworks & Tools',
    items: [
      { label: 'React', level: 70 },
      { label: 'Vite', level: 75 },
      { label: 'Tailwind CSS', level: 80 },
      { label: 'Framer Motion', level: 65 },
      { label: 'Git & GitHub', level: 75 },
    ],
  },
  {
    name: 'AI, Finance & Emerging',
    items: [
      { label: 'AI APIs', level: 70 },
      { label: 'Raspberry Pi', level: 55 },
      { label: 'Portfolio & risk analysis', level: 70 },
      { label: 'Quantitative thinking', level: 70 },
      { label: 'Blockchain / NFC', level: 55 },
    ],
  },
]

export type Strength = { title: string; description: string }
export const strengths: Strength[] = [
  {
    title: 'Ambitious',
    description:
      'Clear long-term direction towards Finance and FinTech — and steadily building the skills and record to get there.',
  },
  {
    title: 'Analytical',
    description:
      'I enjoy quantitative thinking, portfolio and financial analysis, and problem solving through code.',
  },
  {
    title: 'Entrepreneurial',
    description:
      'Sold real websites to real small businesses. £100+ generated so far turning technical skills into commercial value.',
  },
  {
    title: 'Independent',
    description:
      'I build projects and teach myself technologies — AI, React, Raspberry Pi, portfolio analysis — outside of school.',
  },
]

export type Project = {
  title: string
  blurb: string
  status: 'live' | 'in-progress' | 'ongoing' | 'prototype'
  tags: string[]
  href?: string
  bullets?: string[]
}
export const projects: Project[] = [
  {
    title: 'Grade Lab',
    blurb:
      'A GCSE revision platform focused on digital flashcards and organised revision resources across subjects. Designed and built end-to-end, including UI/UX, and improved iteratively with AI-assisted development.',
    status: 'live',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion'],
    href: 'https://gradelab.netlify.app/',
    bullets: [
      'Designed the platform and built revision / flashcard functionality',
      'Ongoing UI/UX and feature improvements',
      'Demonstrates product development, EdTech interest and turning an idea into a working product',
    ],
  },
  {
    title: 'Business Website Development',
    blurb:
      'Designed and developed websites for real small businesses — including barbershops and beauty salons — and successfully sold them, generating £100+ in revenue.',
    status: 'ongoing',
    tags: ['Web', 'Client work', 'Entrepreneurship', 'UX'],
    bullets: [
      'Real client communication and requirement gathering',
      '£100+ generated from selling web services',
      'One of my strongest projects — technical skills applied commercially outside of school',
    ],
  },
  {
    title: 'Personal Investment & Portfolio Analysis',
    blurb:
      'An independent finance / data project: 14 months of personal portfolio tracking and analysis to build understanding of markets, risk, allocation and quantitative thinking. Not professional trading experience — an educational project that grew my interest in FinTech.',
    status: 'ongoing',
    tags: ['Finance', 'Portfolio analysis', 'Risk', 'Blockchain'],
    bullets: [
      '14-month tracking period · +24.8% portfolio performance',
      '12.4% volatility · 82% SOL / 18% cash · 65% staking allocation',
      '+18.6% best month · +2.1% average monthly return',
      'Built interest in FinTech, quantitative analysis and risk',
    ],
  },
  {
    title: 'Smart AI Speaker (Raspberry Pi)',
    blurb:
      'A Raspberry Pi-based AI voice-assistant prototype inspired by devices like Alexa — combining hardware, software and an AI API. Currently in development, not a finished replacement device.',
    status: 'in-progress',
    tags: ['Raspberry Pi', 'AI API', 'Hardware + Software'],
    bullets: [
      'Voice interaction via microphone + speaker',
      'AI API for language understanding',
      'Hardware / software integration and independent experimentation',
    ],
  },
  {
    title: 'Personal Portfolio',
    blurb:
      'This site. Built to showcase my projects, technical interests, achievements, football and career aspirations in Finance and FinTech.',
    status: 'live',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion'],
    href: 'https://thechristsungupage.netlify.app/',
    bullets: [
      'Designed and coded from scratch',
      'Demonstrates web development skill and professional self-presentation',
    ],
  },
  {
    title: 'NFC Google Review Prototype',
    blurb:
      'A physical NFC tap-to-review concept for local businesses: customer taps their phone on an NFC tag and the business’s Google Review page opens. The prototype did not fully work — but the experiment taught me a lot.',
    status: 'prototype',
    tags: ['NFC', 'Hardware + Software', 'UX', 'Experimentation'],
    bullets: [
      'Explored NFC, smartphone automation and hardware/software interaction',
      'Prototype did not fully work — honest about that',
      'Learned debugging, testing, problem solving and learning from failure',
    ],
  },
]

export type Experience = {
  organisation: string
  role: string
  via?: string
  detail: string
  bullets?: string[]
}
export const experiences: Experience[] = [
  {
    organisation: 'TUI',
    role: 'Software Engineering Insight',
    detail:
      'Shadowed a software engineer and gained first-hand exposure to a professional technology environment.',
    bullets: [
      'Participated in a professional meeting / call and contributed to the conversation',
      'Observed professional software engineering practices',
      'Developed workplace communication and confidence',
    ],
  },
  {
    organisation: 'Amazon',
    role: 'Digital Skills: AI & AI Literacy · Digital Communication',
    via: 'Springpod',
    detail:
      'Amazon-run online professional development covering AI, AI literacy, digital communication and modern workplace expectations.',
  },
  {
    organisation: 'Rolls-Royce',
    role: 'Buyer',
    via: 'Springpod',
    detail:
      'Buyer experience covering procurement, commercial decision-making and business operations — linking directly to my interest in Economics, Finance and business.',
  },
  {
    organisation: 'AXA UK',
    role: 'Online Work Experience',
    detail:
      'Online work experience with AXA UK, developing exposure to how large organisations operate and building initiative in seeking professional experience.',
  },
]

export type Certification = { name: string; issuer: string }
export const certifications: Certification[] = [
  { name: 'AI Engineer Career Simulation', issuer: 'Springpod' },
  { name: 'Digital Skills: AI & AI Literacy', issuer: 'Amazon / Springpod' },
  { name: 'Digital Skills: Digital Communication', issuer: 'Amazon / Springpod' },
  { name: 'Rolls-Royce: Buyer', issuer: 'Springpod' },
  { name: 'AXA UK Online Work Experience', issuer: 'AXA UK' },
]

export type TimelineEvent = {
  year: string
  title: string
  detail: string
  side: 'academic' | 'sport' | 'project'
}
export const timeline: TimelineEvent[] = [
  {
    year: '2022',
    side: 'academic',
    title: 'Started at The Stanway School',
    detail: 'Began the secondary-school journey in Colchester.',
  },
  {
    year: '2024',
    side: 'academic',
    title: 'Appointed School Prefect',
    detail: 'Selected as a Prefect on the Student Leadership Team.',
  },
  {
    year: '2025',
    side: 'project',
    title: 'Launched Grade Lab',
    detail: 'Designed and built a GCSE revision platform focused on flashcards and organised revision resources.',
  },
  {
    year: '2025',
    side: 'project',
    title: 'First business website sold',
    detail: 'Started designing and selling websites to real small businesses. £100+ revenue generated.',
  },
  {
    year: '2025',
    side: 'sport',
    title: 'Trialled with Ipswich Academy',
    detail: 'Invited to trial at academy level.',
  },
  {
    year: '2025',
    side: 'project',
    title: 'Personal portfolio analysis started',
    detail: 'Began independently tracking and analysing a personal investment portfolio to build FinTech and market knowledge.',
  },
  {
    year: '2026',
    side: 'project',
    title: 'Portfolio site rebuilt in React',
    detail: 'Migrated the personal site to React + TypeScript + Tailwind + Framer Motion.',
  },
  {
    year: '2026',
    side: 'academic',
    title: 'Year 10 mocks — Top-8 = 52 points',
    detail: 'Achieved actual mock grades including Chemistry 7, Maths 7, Media 7, and 6s in Biology, English Lit, History and Physics.',
  },
  {
    year: '2027',
    side: 'academic',
    title: 'GCSEs (expected)',
    detail: 'Then Maths, Economics and Computer Science at sixth form.',
  },
]

export type Language = { name: string; level: string }
export const languages: Language[] = [
  { name: 'English', level: 'Native' },
  { name: 'Spanish', level: 'Intermediate' },
  { name: 'Shona', level: 'Conversational' },
]

export const galleryImages = [
  {
    src: '/images/hero-portrait.png',
    alt: 'Chris Tsungu — competitive football',
    caption: 'On the wing',
  },
  {
    src: '/images/hero-portrait-alt.png',
    alt: 'Chris Tsungu in action',
    caption: 'In the game',
  },
  {
    src: '/images/trial-card.png',
    alt: 'Football and opportunities card',
    caption: 'Available for trials & opportunities',
  },
] as const

/**
 * Highlight reel embed.
 * Paste the YouTube or Vimeo embed URL here, e.g.:
 *   youtube:  'https://www.youtube.com/embed/VIDEO_ID'
 *   vimeo:    'https://player.vimeo.com/video/VIDEO_ID'
 * Leave empty to show the "coming soon" placeholder.
 */
export const reelEmbedUrl: string = 'https://www.youtube.com/embed/hZ8D3N_ig5I'

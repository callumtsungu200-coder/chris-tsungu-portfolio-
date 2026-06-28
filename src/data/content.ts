export const profile = {
  name: 'Chris Tsungu',
  initials: 'CT',
  tagline: 'Student · Future Financier · Developer',
  location: 'Colchester, Essex',
  school: 'The Stanway School',
  yearGroup: 'Year 10',
  heroQuote:
    'Building the discipline today for a career in finance — and the work ethic to back it up.',
  shortBio:
    'I am a driven Year 10 student at The Stanway School, placed in the top set across every subject and a School Prefect on the Leadership Team. My ambition is to build a career in the finance sector and work my way up to becoming an investment banker — applying analytical thinking, work ethic and the leadership qualities I am developing every day.',
  longBio:
    'My focus is academics first. I sit in the top set across every subject and serve as a School Prefect, where I help lead day-to-day life at The Stanway School. Outside the classroom I compete at a high level in football and athletics, which is where I learned the discipline, time management and composure I now apply to my studies and my long-term goal: a career in finance, working my way up to investment banking.',
  contact: {
    email: 'cctsungu@gmail.com',
    phone: '+44 7858 927169',
    linkedin: 'https://www.linkedin.com/in/chris-tsungu',
    linkedinLabel: 'linkedin.com/in/chris-tsungu',
    site: 'https://thechristsungupage.netlify.app',
    github: 'https://github.com/callumtsungu200-coder',
    githubLabel: 'github.com/callumtsungu200-coder',
  },
} as const

export type Stat = { label: string; value: string; sub?: string }
export const heroStats: Stat[] = [
  { label: 'Top set', value: '10', sub: 'subjects' },
  { label: 'Languages', value: '3', sub: 'EN · ES · SN' },
  { label: 'Leadership', value: 'Prefect', sub: 'Stanway' },
  { label: 'Goals 25/26', value: '20+', sub: 'season to date' },
]

export type NavItem = { id: string; label: string }
export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'sports', label: 'Sports' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
]

export type GradeRow = {
  subject: string
  target: string
  projected: string
  effort?: string
  behaviour?: string
}

export const grades: GradeRow[] = [
  { subject: 'Biology', target: '8', projected: '7+', behaviour: 'Excellent', effort: 'Good' },
  { subject: 'Chemistry', target: '8', projected: '8', behaviour: 'Excellent', effort: 'Excellent' },
  { subject: 'Computer Science', target: '6', projected: '6', behaviour: 'Excellent', effort: 'Excellent' },
  { subject: 'English Language', target: '6', projected: '7', behaviour: 'Excellent', effort: 'Excellent' },
  { subject: 'English Literature', target: '6', projected: '7', behaviour: 'Excellent', effort: 'Excellent' },
  { subject: 'History', target: '7', projected: '7', behaviour: 'Good', effort: 'Good' },
  { subject: 'Mathematics', target: '8', projected: '8', behaviour: 'Good', effort: 'Excellent' },
  { subject: 'Media Studies', target: '6', projected: '7+' },
  { subject: 'Physics', target: '8', projected: '9', behaviour: 'Excellent', effort: 'Excellent' },
  { subject: 'Spanish', target: '6', projected: '7', behaviour: 'Excellent', effort: 'Excellent' },
]

export type Achievement = { title: string; detail?: string; year?: string; category: 'academic' | 'leadership' | 'sport' }
export const achievements: Achievement[] = [
  { title: 'School Prefect', detail: 'Selected to the Leadership Team at The Stanway School.', category: 'leadership' },
  { title: 'Top set, every subject', detail: 'Placed in the top set across all GCSE subjects.', category: 'academic' },
  { title: 'Spanish Termly Award', detail: 'Recognised for outstanding effort and progress.', category: 'academic' },
  { title: 'Science Termly Award', detail: 'Awarded for excellence across the sciences.', category: 'academic' },
  { title: 'Back-to-back School Cup winner', detail: 'Scored in both finals.', category: 'sport' },
  { title: 'District Champion — 200 m', detail: 'First place at district level in the 200 m sprint.', category: 'sport' },
  { title: 'District Champion — Long Jump', detail: 'First place at district level in the long jump.', category: 'sport' },
]

export type SportsHighlight = { title: string; description: string }
export const sportsHighlights: SportsHighlight[] = [
  {
    title: '20+ goals · 10+ assists',
    description: '2025/26 season to date as a left winger for Ipswich Futures U15.',
  },
  {
    title: 'Trialled at Ipswich Town Academy',
    description: 'Invited to trial at academy level and watched by scouts from Colchester United and Arsenal.',
  },
  {
    title: 'Faced top academy sides',
    description: 'Competed against Brentford, Crystal Palace, Norwich, Wolves, Charlton, Sheffield Wednesday, Colchester and Southend.',
  },
  {
    title: 'Full training schedule',
    description: '3 training sessions and 2–3 competitive matches per week, alongside full-time school.',
  },
]

export type SkillGroup = {
  name: string
  items: { label: string; level: number }[]
}
export const skillGroups: SkillGroup[] = [
  {
    name: 'Programming',
    items: [
      { label: 'Python', level: 80 },
      { label: 'JavaScript', level: 65 },
      { label: 'HTML', level: 90 },
      { label: 'CSS', level: 80 },
      { label: 'React', level: 55 },
    ],
  },
  {
    name: 'Tools & Software',
    items: [
      { label: 'VS Code', level: 85 },
      { label: 'Deepnote', level: 70 },
      { label: 'Microsoft Office', level: 90 },
      { label: 'Google Workspace', level: 90 },
      { label: 'Adobe Creative', level: 60 },
    ],
  },
  {
    name: 'Studies focus',
    items: [
      { label: 'Mathematics', level: 85 },
      { label: 'Sciences (Triple)', level: 85 },
      { label: 'Computer Science', level: 80 },
      { label: 'Spanish', level: 80 },
      { label: 'English', level: 80 },
    ],
  },
]

export type Strength = { title: string; description: string }
export const strengths: Strength[] = [
  {
    title: 'Leadership',
    description: 'School Prefect on the Leadership Team, captaining and organising at every level.',
  },
  {
    title: 'Discipline',
    description: 'Balancing top-set academics with elite-level training and competitive fixtures every week.',
  },
  {
    title: 'Communication',
    description: 'Confident speaker, multilingual in English, Spanish and Shona, and comfortable presenting.',
  },
  {
    title: 'Fast learner',
    description: 'New languages, new tools, new tactics — I pick things up quickly and keep building.',
  },
]

export type Project = {
  title: string
  blurb: string
  status: 'live' | 'in-progress' | 'ongoing'
  tags: string[]
  href?: string
}
export const projects: Project[] = [
  {
    title: 'Sporting & Academic Portfolio',
    blurb:
      'Personal portfolio site — designed and built from scratch — showcasing academics, leadership, sport and projects.',
    status: 'live',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    href: 'https://chris-c-tsungu.netlify.app',
  },
  {
    title: 'Barber Company Website',
    blurb:
      'Marketing and booking site for a local barber business — improving client booking experience and brand presence.',
    status: 'in-progress',
    tags: ['Web', 'UX', 'Brand'],
  },
  {
    title: 'Python & Scratch Games / Quizzes',
    blurb:
      'A growing library of small interactive games and quiz apps built to sharpen programming fluency and debugging.',
    status: 'ongoing',
    tags: ['Python', 'Scratch', 'Logic'],
  },
]

export type TimelineEvent = {
  year: string
  title: string
  detail: string
  side: 'academic' | 'sport' | 'project'
}
export const timeline: TimelineEvent[] = [
  { year: '2015', side: 'sport', title: 'Started competitive football', detail: 'Joined first organised team — the foundation for everything since.' },
  { year: '2022', side: 'academic', title: 'Started at The Stanway School', detail: 'Entered top sets and began the path toward GCSEs.' },
  { year: '2024', side: 'academic', title: 'Appointed School Prefect', detail: 'Selected to the Leadership Team for service, conduct and influence.' },
  { year: '2025', side: 'project', title: 'Launched first portfolio site', detail: 'Self-designed and deployed at chris-c-tsungu.netlify.app.' },
  { year: '2025', side: 'sport', title: 'Trialled at Ipswich Town Academy', detail: 'Invited to academy trial; watched by Colchester United and Arsenal scouts.' },
  { year: '2025/26', side: 'sport', title: '20+ goals, 10+ assists', detail: 'Standout season as left winger for Ipswich Futures U15.' },
  { year: '2026', side: 'project', title: 'Building the next iteration', detail: 'Rebuilt portfolio in React + TypeScript + Tailwind. Finance focus.' },
]

export type Language = { name: string; level: string }
export const languages: Language[] = [
  { name: 'English', level: 'Native' },
  { name: 'Spanish', level: 'Intermediate' },
  { name: 'Shona', level: 'Conversational' },
]

export const galleryImages = [
  { src: '/images/hero-portrait.png', alt: 'Chris Tsungu — Left Wing, Ipswich Futures U15', caption: 'Left Wing · Ipswich Futures · 11' },
  { src: '/images/hero-portrait-alt.png', alt: 'Chris Tsungu in action', caption: 'On the ball' },
  { src: '/images/trial-card.png', alt: 'Trial and opportunities card', caption: 'Available for trials & opportunities' },
] as const

/**
 * Highlight reel embed.
 * Paste the YouTube or Vimeo embed URL here, e.g.:
 *   youtube:  'https://www.youtube.com/embed/VIDEO_ID'
 *   vimeo:    'https://player.vimeo.com/video/VIDEO_ID'
 * Leave empty to show the "coming soon" placeholder.
 */
export const reelEmbedUrl: string = 'https://www.youtube.com/embed/hZ8D3N_ig5I'

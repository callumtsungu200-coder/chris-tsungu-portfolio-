/**
 * "Currently working on", a living board. Update `lastUpdated` whenever you
 * edit this file. Each item has a status so the board doubles as a changelog.
 */

export type NowStatus = 'planning' | 'in-development' | 'testing' | 'completed' | 'on-hold'

export const nowStatusLabel: Record<NowStatus, string> = {
  planning: 'Planning',
  'in-development': 'In development',
  testing: 'Testing',
  completed: 'Completed',
  'on-hold': 'On hold',
}

export type NowKind = 'project' | 'learning' | 'research' | 'idea' | 'milestone'

export const nowKindLabel: Record<NowKind, string> = {
  project: 'Project',
  learning: 'Learning',
  research: 'Researching',
  idea: 'Upcoming idea',
  milestone: 'Milestone',
}

export type NowItem = {
  title: string
  kind: NowKind
  status: NowStatus
  detail: string
  /** Optional link to a project or article on this site. */
  to?: string
  /** Optional month label e.g. 'Oct 2026'. */
  when?: string
}

export const nowLastUpdated = 'October 2026'

export const nowItems: NowItem[] = [
  {
    title: 'Grade Lab: ongoing improvements',
    kind: 'project',
    status: 'in-development',
    detail: 'Adding subjects as requested and improving the spaced-repetition and progress analytics.',
    to: '/projects/grade-lab',
  },
  {
    title: 'Portfolio v2 (this site)',
    kind: 'project',
    status: 'testing',
    detail: 'Multi-page rebuild with case studies, finance section and CV. Remaining gaps: competition years and club seasons.',
    to: '/projects/personal-portfolio',
  },
  {
    title: 'Raspberry Pi AI speaker',
    kind: 'project',
    status: 'in-development',
    detail: 'Wake-word detection and lower latency on the speech → LLM → speech loop.',
    to: '/projects/ai-speaker-raspberry-pi',
  },
  {
    title: 'NFC review tag',
    kind: 'project',
    status: 'on-hold',
    detail: 'Parked until I try a hosted-redirect approach instead of deep links.',
    to: '/projects/nfc-review-prototype',
  },
  {
    title: 'TypeScript depth',
    kind: 'learning',
    status: 'in-development',
    detail: 'Generics, discriminated unions and stricter typing across Grade Lab\'s remaining JavaScript modules.',
  },
  {
    title: 'Python for quantitative finance',
    kind: 'learning',
    status: 'planning',
    detail: 'NumPy and pandas, then moving my spreadsheet portfolio tracking into Python.',
  },
  {
    title: 'React Native',
    kind: 'learning',
    status: 'planning',
    detail: 'Exploring a native Grade Lab app.',
  },
  {
    title: 'How interest-rate decisions move markets',
    kind: 'research',
    status: 'in-development',
    detail: 'Following Bank of England and Federal Reserve decisions and writing up what happened versus what I expected.',
  },
  {
    title: 'Crypto market structure',
    kind: 'research',
    status: 'in-development',
    detail: 'Continuing to track my small portfolio and reading about settlement, custody and ETFs.',
    to: '/finance',
  },
  {
    title: 'Financial data dashboard',
    kind: 'idea',
    status: 'planning',
    detail: 'A small app pulling public market data and computing the risk metrics I currently track in a spreadsheet.',
  },
  {
    title: 'GCSE examinations',
    kind: 'milestone',
    status: 'planning',
    detail: 'Summer 2027. Everything above fits around revision.',
    when: 'Summer 2027',
  },
]

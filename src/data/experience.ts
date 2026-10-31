/**
 * Experience, certificates and professional development.
 * `kind` distinguishes formal placements/programmes from informal conversations.
 */

export type ExperienceKind = 'commercial' | 'placement' | 'programme' | 'insight' | 'conversation'

export const experienceKindLabel: Record<ExperienceKind, string> = {
  commercial: 'Commercial work',
  placement: 'Work experience',
  programme: 'Programme',
  insight: 'Employer insight',
  conversation: 'Professional conversation',
}

export type Experience = {
  organisation: string
  role: string
  kind: ExperienceKind
  via?: string
  period: string
  detail: string
  bullets?: string[]
  skills?: string[]
}

export const experiences: Experience[] = [
  {
    organisation: 'Freelance web development',
    role: 'Designed, built and sold websites to two local businesses',
    kind: 'commercial',
    period: '2025 to present',
    detail:
      'Paid website projects for MO BARBER (a Colchester barbershop, mo-barber.com) and Brows by Deja (a brow studio in Akron, Ohio): requirements gathering, design, build, deployment and handover.',
    bullets: [
      'Found the need, pitched the solution and agreed scope and price with each owner.',
      'Delivered responsive sites with clear calls-to-action and basic SEO.',
      'Handled feedback rounds and a handover walkthrough.',
    ],
    skills: ['Client communication', 'Scoping', 'React / HTML / CSS', 'Deployment'],
  },
  {
    organisation: 'TUI',
    role: 'Software engineering work shadowing (in person)',
    kind: 'placement',
    period: 'June 2025',
    detail:
      'In-person work shadowing placement: followed a software engineer through day-to-day development work and sat in on a professional team call.',
    bullets: [
      'Sat in on a professional meeting and contributed to the discussion.',
      'Observed engineering practice: how work is planned, reviewed and shipped.',
      'Built confidence communicating in a workplace setting.',
    ],
    skills: ['Workplace communication', 'Engineering practice'],
  },
  {
    organisation: 'AXA UK',
    role: 'AI Engineer Career Simulation',
    kind: 'programme',
    via: 'Springpod',
    period: 'September 2026',
    detail:
      'Virtual career simulation in partnership with AXA UK, working through the kind of tasks an AI engineer handles inside a large financial services organisation.',
    skills: ['Artificial intelligence', 'Financial services', 'Initiative'],
  },
  {
    organisation: 'Amazon',
    role: 'Digital Skills: AI & AI Literacy · Digital Communication',
    kind: 'programme',
    via: 'Springpod',
    period: 'February 2026',
    detail:
      'Two Amazon-run Springpod programmes on AI literacy and digital communication in the modern workplace.',
    skills: ['AI literacy', 'Digital communication'],
  },
  {
    organisation: 'Rolls-Royce',
    role: 'Buyer programme',
    kind: 'programme',
    via: 'Springpod',
    period: 'February 2026',
    detail:
      'Procurement and commercial decision-making from the buyer\'s side, supplier evaluation, cost and negotiation, directly relevant to economics and finance.',
    skills: ['Commercial awareness', 'Procurement'],
  },
  {
    organisation: 'Finance professionals',
    role: 'Career conversations',
    kind: 'conversation',
    period: 'Ongoing',
    detail:
      'Informal conversations with people working in finance about routes into the industry, what the work is really like and what to study. These are conversations, not placements.',
    skills: ['Networking', 'Career research'],
  },
]

export type Certificate = {
  name: string
  issuer: string
  via?: string
  date: string
  /** Path under /public. Optional. */
  image?: string
  /** Credential ID printed on the certificate. Optional. */
  credentialId?: string
  /** Public verification link. Optional. */
  verifyUrl?: string
}

export const certificates: Certificate[] = [
  {
    name: 'AI Engineer Career Simulation',
    issuer: 'AXA UK',
    via: 'Springpod',
    date: '2 September 2026',
    credentialId: 'bye0detvhost',
    image: '/images/certificates/springpod-axa-ai-engineer-career-simulation.jpg',
  },
  {
    name: 'Digital Skills: AI and AI Literacy',
    issuer: 'Amazon',
    via: 'Springpod',
    date: '26 February 2026',
    credentialId: '76zya395meri',
    image: '/images/certificates/springpod-amazon-ai-literacy.jpg',
  },
  {
    name: 'Digital Skills: Digital Communication',
    issuer: 'Amazon',
    via: 'Springpod',
    date: '24 February 2026',
    credentialId: '1osrujcgtidp',
    image: '/images/certificates/springpod-amazon-digital-communication.jpg',
  },
  {
    name: 'Rolls-Royce: Buyer',
    issuer: 'Rolls-Royce',
    via: 'Springpod',
    date: '25 February 2026',
    credentialId: 'k4aclwjs3dph',
    image: '/images/certificates/springpod-rolls-royce-buyer.jpg',
  },
]

export type DevelopmentArea = { title: string; detail: string }
export const professionalDevelopment: DevelopmentArea[] = [
  { title: 'Independent learning', detail: 'Self-taught React, TypeScript, Supabase and AI tooling through building Grade Lab and this site; reading on markets and economics beyond the curriculum.' },
  { title: 'Professional networking', detail: 'Building a LinkedIn presence and asking people in finance and software for their time and advice.' },
  { title: 'Exploring financial careers', detail: 'Researching investment banking and quantitative finance routes, degree choices, spring weeks, internships, so the next decisions are informed.' },
  { title: 'Technical development', detail: 'Pushing into TypeScript, quantitative modelling in code and native apps.' },
  { title: 'Seeking work experience', detail: 'Actively applying for insight days and placements with financial and technology employers for 2027.' },
]

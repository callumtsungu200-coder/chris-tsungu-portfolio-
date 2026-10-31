/**
 * Technical skills, grouped, with honest proficiency and where each has been
 * applied. `level` is one of: 'used-in-projects' | 'comfortable' | 'learning'.
 */

export type SkillLevel = 'comfortable' | 'used-in-projects' | 'learning'

export const skillLevelLabel: Record<SkillLevel, string> = {
  comfortable: 'Comfortable',
  'used-in-projects': 'Used in projects',
  learning: 'Currently learning',
}

export type Skill = {
  name: string
  level: SkillLevel
  /** Where it has actually been applied. */
  appliedIn: string[]
  note?: string
}

export type SkillCategory = {
  id: string
  name: string
  description: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming languages',
    description: 'The languages I write regularly, and where.',
    skills: [
      { name: 'JavaScript', level: 'comfortable', appliedIn: ['Grade Lab', 'Client websites', 'Personal portfolio'] },
      { name: 'TypeScript', level: 'used-in-projects', appliedIn: ['Personal portfolio', 'Grade Lab (spaced repetition, sync, past papers modules)'], note: 'Most new code I write is TypeScript.' },
      { name: 'HTML', level: 'comfortable', appliedIn: ['Every web project'] },
      { name: 'CSS', level: 'comfortable', appliedIn: ['Grade Lab theme system', 'Client websites', 'Personal portfolio'] },
      { name: 'Python', level: 'used-in-projects', appliedIn: ['Raspberry Pi AI speaker', 'School Computer Science (OCR)', 'Small games and quizzes'], note: 'Also the language I intend to use for quantitative finance work.' },
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks and libraries',
    description: 'Front-end tooling used to ship real products.',
    skills: [
      { name: 'React', level: 'comfortable', appliedIn: ['Grade Lab', 'Personal portfolio', 'Client website'] },
      { name: 'Tailwind CSS', level: 'comfortable', appliedIn: ['Personal portfolio', 'Client website'] },
      { name: 'Framer Motion', level: 'used-in-projects', appliedIn: ['Grade Lab animations', 'Personal portfolio'] },
      { name: 'React Router', level: 'used-in-projects', appliedIn: ['Personal portfolio (v2)'] },
      { name: 'React Native', level: 'learning', appliedIn: [], note: 'Exploring it as a route to a native Grade Lab app.' },
      { name: 'Vite', level: 'comfortable', appliedIn: ['Grade Lab', 'Personal portfolio'] },
    ],
  },
  {
    id: 'tools',
    name: 'Development tools and platforms',
    description: 'Infrastructure and services around the code.',
    skills: [
      { name: 'Git & GitHub', level: 'comfortable', appliedIn: ['All projects'] },
      { name: 'Supabase', level: 'used-in-projects', appliedIn: ['Grade Lab, auth, Postgres, row-level security, storage'] },
      { name: 'Netlify', level: 'comfortable', appliedIn: ['Grade Lab', 'Personal portfolio', 'Client websites', 'Serverless functions, forms'] },
      { name: 'REST APIs', level: 'used-in-projects', appliedIn: ['LLM APIs on the Raspberry Pi project', 'Supabase client'] },
      { name: 'Mapbox', level: 'learning', appliedIn: [], note: 'Evaluated for location features on client sites.' },
      { name: 'PWA tooling', level: 'used-in-projects', appliedIn: ['Grade Lab (installable, offline-capable)'] },
    ],
  },
  {
    id: 'ai',
    name: 'Artificial intelligence',
    description: 'Using AI as a builder, in products and in my own workflow.',
    skills: [
      { name: 'AI-assisted development', level: 'comfortable', appliedIn: ['Grade Lab', 'Personal portfolio'], note: 'Scaffolding, refactors and content formatting, always reviewed and tested by me.' },
      { name: 'Large language models', level: 'used-in-projects', appliedIn: ['Raspberry Pi AI speaker'] },
      { name: 'API integration', level: 'used-in-projects', appliedIn: ['LLM API pipeline on the Pi'] },
      { name: 'AI-powered applications', level: 'learning', appliedIn: ['Voice assistant prototype'], note: 'Interested in applying this to financial data next.' },
      { name: 'Automation', level: 'used-in-projects', appliedIn: ['Scripts to build Grade Lab seed data and icons'] },
    ],
  },
  {
    id: 'quant',
    name: 'Quantitative and analytical',
    description: 'The mathematical side that connects to finance.',
    skills: [
      { name: 'Probability & statistics', level: 'learning', appliedIn: ['GCSE Mathematics (Edexcel)', 'Portfolio volatility tracking'] },
      { name: 'Financial data analysis', level: 'learning', appliedIn: ['Independent cryptocurrency market tracking'] },
      { name: 'Spreadsheets', level: 'comfortable', appliedIn: ['Portfolio tracking', 'School work'] },
      { name: 'Mathematical modelling', level: 'learning', appliedIn: ['A-level Mathematics and Physics (intended)'] },
    ],
  },
]

export const otherTools: string[] = ['VS Code', 'Figma (basics)', 'Microsoft Office', 'Google Workspace', 'Adobe Creative Cloud (basics)', 'Raspberry Pi']

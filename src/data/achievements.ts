/** Achievements and extracurricular activities. No invented rankings or results. */

export type AchievementCategory = 'leadership' | 'volunteering' | 'competition' | 'recognition'

export const achievementCategoryLabel: Record<AchievementCategory, string> = {
  leadership: 'Leadership',
  volunteering: 'Volunteering',
  competition: 'Competitions',
  recognition: 'Recognition',
}

export type Achievement = {
  title: string
  category: AchievementCategory
  organisation: string
  year?: string
  involvement: string
  responsibilities?: string[]
  skills: string[]
}

export const achievements: Achievement[] = [
  {
    title: 'School Prefect',
    category: 'leadership',
    organisation: 'The Stanway School',
    involvement: 'Selected as a Prefect, a visible role that involves setting an example and helping the school run day to day.',
    responsibilities: ['Supporting staff at school events and around the site', 'Being a point of contact for younger students', 'Representing the school to visitors'],
    skills: ['Responsibility', 'Communication', 'Reliability'],
  },
  {
    title: 'Student Leadership Team',
    category: 'leadership',
    organisation: 'The Stanway School',
    involvement: 'Member of the Student Leadership Team, contributing to school life, activities and student voice.',
    responsibilities: ['Contributing to discussions about school life', 'Helping organise and run student-facing activities'],
    skills: ['Teamwork', 'Organisation', 'Speaking up'],
  },
  {
    title: 'Library volunteer',
    category: 'volunteering',
    organisation: 'The Stanway School library',
    involvement: 'Volunteering in the school library, helping keep it running and helping other students find what they need.',
    responsibilities: ['Shelving and organising stock', 'Helping students locate resources'],
    skills: ['Service', 'Organisation', 'Patience'],
  },
  {
    title: 'UKMT Senior Mathematical Challenge',
    category: 'competition',
    organisation: 'UK Mathematics Trust',
    year: 'TODO: year',
    involvement: 'Took part in the Senior Maths Challenge, multiple-choice problems designed to reward insight rather than routine method.',
    skills: ['Problem solving', 'Mathematical reasoning'],
  },
  {
    title: 'University of Essex Mathematics Competition',
    category: 'competition',
    organisation: 'University of Essex',
    year: 'TODO: year',
    involvement: 'Participated in a mathematics competition hosted at the University of Essex.',
    skills: ['Problem solving', 'Working under time pressure'],
  },
  {
    title: 'Last 10% hackathon',
    category: 'competition',
    organisation: 'Last 10%',
    year: 'TODO: year',
    involvement: 'Hackathon participation, scoping, building and presenting a working project within the event\'s time limit.',
    skills: ['Rapid prototyping', 'Teamwork', 'Presenting'],
  },
  {
    title: 'Termly Science Award',
    category: 'recognition',
    organisation: 'The Stanway School',
    involvement: 'Recognised across the sciences for consistent effort and attainment.',
    skills: ['Consistency'],
  },
  {
    title: 'Media Studies Award',
    category: 'recognition',
    organisation: 'The Stanway School',
    involvement: 'Recognised for strong work in Media Studies.',
    skills: ['Analysis', 'Creativity'],
  },
  {
    title: 'Language Awards',
    category: 'recognition',
    organisation: 'The Stanway School',
    involvement: 'Recognised for progress and effort in languages.',
    skills: ['Persistence'],
  },
  {
    title: 'Programme completion certificates',
    category: 'recognition',
    organisation: 'Springpod · Amazon · Rolls-Royce · AXA UK',
    year: '2026',
    involvement: 'Completed four employer programmes in 2026, AI literacy and digital communication (Amazon), procurement (Rolls-Royce) and an AI engineer career simulation (AXA UK), listed in full on the Experience page.',
    skills: ['Initiative', 'Self-directed learning'],
  },
]

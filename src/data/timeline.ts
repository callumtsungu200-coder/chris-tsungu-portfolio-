/** Chronological timeline used on the home page. */

export type TimelineEvent = {
  year: string
  title: string
  detail: string
  side: 'academic' | 'sport' | 'project' | 'experience'
}

export const timeline: TimelineEvent[] = [
  { year: '2022', side: 'academic', title: 'Started at The Stanway School', detail: 'Began secondary school in Essex.' },
  { year: '2024', side: 'academic', title: 'Appointed School Prefect', detail: 'Selected as a Prefect and member of the Student Leadership Team.' },
  { year: '2025', side: 'project', title: 'Launched Grade Lab', detail: 'Built and deployed a GCSE flashcard app that grew into a 12-subject revision platform.' },
  { year: '2025', side: 'experience', title: 'First client website sold', detail: 'Designed, built and sold a website to a local business, then a second.' },
  { year: '2025', side: 'project', title: 'Started independent market research', detail: 'Began tracking a small cryptocurrency portfolio to learn about risk and markets.' },
  { year: '2025', side: 'experience', title: 'TUI work shadowing', detail: 'In-person placement shadowing a software engineer (June).' },
  { year: '2026', side: 'experience', title: 'Springpod programmes', detail: 'Amazon AI literacy and digital communication, Rolls-Royce Buyer (February); AXA UK AI engineer career simulation (September).' },
  { year: '2026', side: 'academic', title: 'Year 10 Summer Report', detail: 'Teacher estimated grades of 8 in Mathematics, Chemistry and Media Studies, 7 in Biology, Physics, History and English Literature.' },
  { year: '2026', side: 'sport', title: 'Ipswich Town Academy trial', detail: 'Invited to trial at academy level (April).' },
  { year: '2026', side: 'project', title: 'Portfolio v2', detail: 'Rebuilt this site as a multi-page portfolio with case studies and a finance section.' },
  { year: '2027', side: 'academic', title: 'GCSEs', detail: 'Then A-levels in Mathematics, Further Mathematics, Economics and Physics (Chemistry as backup).' },
]

/** Education, The Stanway School, GCSEs with exam boards, intended A-levels. */

export type Subject = { subject: string; board: string; note?: string }

export const gcseSubjects: Subject[] = [
  { subject: 'Mathematics', board: 'Edexcel' },
  { subject: 'English Language', board: 'AQA' },
  { subject: 'English Literature', board: 'AQA' },
  { subject: 'Biology', board: 'AQA', note: 'Triple Science' },
  { subject: 'Chemistry', board: 'AQA', note: 'Triple Science' },
  { subject: 'Physics', board: 'AQA', note: 'Triple Science' },
  { subject: 'Computer Science', board: 'OCR' },
  { subject: 'History', board: 'Edexcel' },
  { subject: 'Spanish', board: 'AQA' },
  { subject: 'Media Studies', board: 'Eduqas' },
]

export type GradeRow = { subject: string; grade: string }

export type ReportRow = GradeRow & { target: string; behaviour: 'Excellent' | 'Good'; effort: 'Excellent' | 'Good' }

/**
 * Pupil Estimated Grades (PEG), target grades, behaviour and effort,
 * from The Stanway School Year 10 Summer Report 2025/26.
 */
export const predictedGrades: ReportRow[] = [
  { subject: 'Mathematics', grade: '8', target: '8', behaviour: 'Excellent', effort: 'Excellent' },
  { subject: 'Chemistry', grade: '8', target: '8', behaviour: 'Excellent', effort: 'Excellent' },
  { subject: 'Media Studies', grade: '8', target: '6', behaviour: 'Good', effort: 'Good' },
  { subject: 'English Literature', grade: '7', target: '6', behaviour: 'Excellent', effort: 'Good' },
  { subject: 'Biology', grade: '7', target: '8', behaviour: 'Excellent', effort: 'Excellent' },
  { subject: 'Physics', grade: '7', target: '8', behaviour: 'Excellent', effort: 'Excellent' },
  { subject: 'History', grade: '7', target: '7', behaviour: 'Excellent', effort: 'Excellent' },
  { subject: 'English Language', grade: '6+', target: '6', behaviour: 'Excellent', effort: 'Good' },
  { subject: 'Computer Science', grade: '6', target: '6', behaviour: 'Good', effort: 'Good' },
  { subject: 'Spanish', grade: '6', target: '6', behaviour: 'Excellent', effort: 'Excellent' },
]

export const reportMeta = {
  note: 'PEG is the Pupil Estimated Grade: what my teachers expect me to achieve in the final GCSE. Target is the school\'s nationally calibrated end-of-course target. Neither is a final result; GCSEs are sat in summer 2027.',
  source: 'Year 10 Summer Report 2025/26, The Stanway School',
  attendance: '96.7%',
  behaviourExcellent: predictedGrades.filter((r) => r.behaviour === 'Excellent').length,
  effortExcellent: predictedGrades.filter((r) => r.effort === 'Excellent').length,
  atOrAboveTarget: predictedGrades.filter((r) => parseInt(r.grade, 10) >= parseInt(r.target, 10)).length,
}

export const intendedALevels = [
  { subject: 'Mathematics', why: 'The foundation for everything quantitative.' },
  { subject: 'Further Mathematics', why: 'Deeper pure maths, mechanics and statistics, the toolkit of quantitative finance.' },
  { subject: 'Economics', why: 'How markets, incentives and policy fit together.' },
  { subject: 'Physics', why: 'Modelling the real world with mathematics and testing it.' },
]

/** Reserve choice if one of the four above is not available or does not fit the timetable. */
export const backupALevel = { subject: 'Chemistry', why: 'My backup: a strong PEG of 8 and a subject I enjoy, if one of the four above falls through.' }

export const academicInterests: string[] = [
  'Mathematics, particularly probability, statistics and anything that models uncertainty',
  'Economics, markets, inflation, interest rates and incentives',
  'Computer Science, algorithms and building software that people use',
  'Physics, modelling systems and reasoning from first principles',
]

export type Competition = { name: string; detail: string; year?: string }
export const competitions: Competition[] = [
  { name: 'UKMT Senior Mathematical Challenge', detail: 'Took part in the Senior Maths Challenge.', year: 'TODO: year' },
  { name: 'University of Essex Mathematics Competition', detail: 'Participated in a mathematics competition hosted at the University of Essex.', year: 'TODO: year' },
  { name: 'Last 10% hackathon', detail: 'Hackathon participation, building and presenting a project under time pressure.', year: 'TODO: year' },
]

export const futureAcademic = [
  'Strong GCSE results in 2027.',
  'A-levels in Mathematics, Further Mathematics, Economics and Physics, with Chemistry as my backup.',
  'A quantitative degree (Mathematics, Economics or a joint course) at a strong university.',
  'Spring weeks and internships in investment banking or quantitative finance during university.',
]

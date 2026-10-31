/** Football & sporting experience. No invented statistics. */

export const footballProfile = {
  position: 'Left wing / Striker',
  level: 'Youth football, U16',
  photo: {
    jpg: '/images/football/chris-tsungu-football-action.jpg',
    webp: '/images/football/chris-tsungu-football-action.webp',
    alt: 'Chris Tsungu in a yellow and navy kit shielding the ball from a defender during a match',
    width: 315,
    height: 762,
  },
  intro:
    'I have played competitive youth football for most of my school years, mainly on the left wing or up front. It is where I learned to handle pressure, take criticism and keep working when things are not going my way, habits that carry straight into school and work.',
}

export type Club = { name: string; role: string; period: string; detail: string; kind: 'club' | 'academy' | 'trial' }

export const clubs: Club[] = [
  {
    name: 'Witham Town U16',
    role: 'Left wing / striker',
    period: 'TODO: seasons',
    detail: 'Competitive youth football in Essex, weekly training and league fixtures.',
    kind: 'club',
  },
  {
    name: 'Lewisham Borough U16',
    role: 'Left wing / striker',
    period: 'TODO: seasons',
    detail: 'Trial experience and competitive football within the Lewisham Borough setup.',
    kind: 'club',
  },
  {
    name: 'FITC Academy',
    role: 'Academy player',
    period: 'TODO: seasons',
    detail: 'Academy-style coaching and development programme.',
    kind: 'academy',
  },
  {
    name: 'Ipswich Town Academy',
    role: 'Trialist',
    period: 'April 2026',
    detail: 'Invited to trial at academy level, a demanding environment and a clear benchmark for where I needed to improve.',
    kind: 'trial',
  },
]

export const competitiveExperience: string[] = [
  'Weekly training and competitive fixtures through the season alongside full-time school.',
  'Played against Category 1 academy sides, which raised the speed and standard of everything.',
  'Trials at Ipswich Town Academy and within the Lewisham Borough setup.',
]

export type TransferableSkill = { title: string; detail: string }
export const transferableSkills: TransferableSkill[] = [
  { title: 'Teamwork', detail: 'A winger only looks good if the full-back and striker trust him. Learning to play for the team before yourself.' },
  { title: 'Discipline', detail: 'Turning up to train in the rain in January when nobody is watching, the same muscle revision needs.' },
  { title: 'Communication', detail: 'Constant talking on the pitch; being clear and quick under pressure.' },
  { title: 'Resilience', detail: 'Not being selected, losing finals, being dropped, and coming back the next week.' },
  { title: 'Handling feedback', detail: 'Coaches are blunt. Learning to separate the message from the delivery.' },
  { title: 'Competitive mentality', detail: 'Wanting to win, but measuring myself against last month rather than the person next to me.' },
]

export const gallery = [
  { src: '/images/football/match-banner.webp', fallback: '/images/football/match-banner.jpg', alt: 'Chris Tsungu, match-day banner graphic', caption: 'On the wing' },
  { src: '/images/football/match-action-banner.webp', fallback: '/images/football/match-action-banner.jpg', alt: 'Chris Tsungu in match action', caption: 'In the game' },
] as const

/** YouTube/Vimeo embed URL for the highlight reel. Leave empty to show a placeholder. */
export const reelEmbedUrl: string = 'https://www.youtube.com/embed/hZ8D3N_ig5I'

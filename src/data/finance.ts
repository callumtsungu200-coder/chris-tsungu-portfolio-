/**
 * Finance & Economics content. Everything here is about Chris: what he is
 * interested in, how he researches markets himself, and where he is heading.
 *
 * The portfolio figures were supplied by Chris from earlier records and are
 * NOT published (`portfolioRecord.published = false`) at his request.
 */

export type FinanceInterest = { title: string; description: string }

/** Written in the first person: why each area matters to me. */
export const financeInterests: FinanceInterest[] = [
  { title: 'Investment banking', description: 'The career I am aiming for. I want to understand how deals are structured and how companies are valued, and then do it for real.' },
  { title: 'Quantitative finance', description: 'The side of finance that rewards the maths I enjoy most: probability, statistics and code.' },
  { title: 'Financial markets', description: 'I follow markets daily and keep notes on why prices moved and whether I expected it.' },
  { title: 'Equity research', description: 'I like reading a business through its accounts and forming my own view on what it is worth.' },
  { title: 'Macroeconomics', description: 'Inflation, interest rates and central-bank decisions are the backdrop to everything else I follow.' },
  { title: 'Financial technology', description: 'Where my two interests overlap: I build software, and finance is increasingly a software problem.' },
  { title: 'Cryptocurrency', description: 'The market I have tracked most closely, with my own small portfolio, for over a year.' },
  { title: 'Blockchain', description: 'I am interested in whether distributed ledgers genuinely change how assets settle, or just add complexity.' },
]

export const researchApproach = {
  intro:
    'For over a year I have followed cryptocurrency markets closely and tracked a small personal portfolio. The aim was never to trade for profit. It was to learn how markets behave by having a real, if small, stake in them.',
  pillars: [
    {
      title: 'How I research',
      detail: 'I read project documentation, tokenomics and on-chain data rather than relying on social media sentiment, and I write down a thesis before acting so I can judge it afterwards.',
    },
    {
      title: 'How I follow the market',
      detail: 'I watch how prices react to macro events, such as interest-rate decisions, ETF news and exchange failures, and I note where my expectations were wrong.',
    },
    {
      title: 'How I track the portfolio',
      detail: 'I record allocation, monthly returns, best and worst months and simple volatility in a spreadsheet, so performance is measured honestly, including the bad months.',
    },
    {
      title: 'How I think about risk',
      detail: 'Concentration, liquidity, counterparty and protocol risk are all real in crypto. Keeping a cash buffer and staking a portion were deliberate choices about which risks I was prepared to take.',
    },
  ],
  disclaimer:
    'Nothing on this site is investment advice. This is a student learning in public with small amounts of money and a long time horizon.',
}

export type PortfolioRecord = {
  published: boolean
  periodLabel: string
  periodStart: string
  periodEnd: string
  allocation: { label: string; pct: number }[]
  stakingPct: number
  totalReturnPct: number
  bestMonthPct: number
  avgMonthlyReturnPct: number
  volatilityPct: number
  notes: string[]
}

export const portfolioRecord: PortfolioRecord = {
  // Chris has asked that no numbers or percentages from this record are published.
  published: false,
  periodLabel: 'Over a year of tracking',
  periodStart: 'TODO (month/year)',
  periodEnd: 'TODO (month/year)',
  allocation: [
    { label: 'SOL', pct: 82 },
    { label: 'Cash / stablecoins', pct: 18 },
  ],
  stakingPct: 65,
  totalReturnPct: 24.8,
  bestMonthPct: 18.6,
  avgMonthlyReturnPct: 2.1,
  volatilityPct: 12.4,
  notes: [
    'Self-reported figures from a personal tracking spreadsheet; not audited.',
    'A small portfolio concentrated in one asset. Past performance says nothing about future results.',
    'Volatility is the standard deviation of monthly returns over the period.',
  ],
}

/** What I am doing now to get closer to the career. */
export const financeNextSteps: { title: string; detail: string }[] = [
  { title: 'A-levels that point at finance', detail: 'Mathematics, Further Mathematics, Economics and Physics from 2027, with Chemistry as my backup.' },
  { title: 'Work experience', detail: 'Applying for insight days and placements with banks and financial firms for 2027.' },
  { title: 'Reading and notes', detail: 'Keeping a written record of what moves markets and what I expected, so my understanding is tested rather than assumed.' },
  { title: 'Python for markets', detail: 'Moving my spreadsheet tracking into code with NumPy and pandas.' },
]

/**
 * Project case studies. Each entry renders a card on /projects and a full
 * case-study page at /projects/:slug.
 *
 * Fields marked TODO need information from Chris; they render as clearly
 * labelled placeholders rather than invented detail.
 */

export type ProjectStatus = 'live' | 'in-development' | 'prototype' | 'ongoing' | 'on-hold'
export type ProjectCategory = 'edtech' | 'commercial' | 'web' | 'ai' | 'finance' | 'hardware'

export type ProjectLink = { label: string; href: string }
export type Screenshot = { src: string; alt: string; caption?: string }

export type ProjectSection = {
  heading: string
  /** Paragraphs. */
  body?: string[]
  /** Bullet list. */
  bullets?: string[]
}

export type Project = {
  slug: string
  title: string
  tagline: string
  status: ProjectStatus
  category: ProjectCategory
  featured?: boolean
  /** Short description for cards. */
  summary: string
  period: string
  role: string
  technologies: string[]
  links: ProjectLink[]
  screenshots: Screenshot[]
  overview: string[]
  problem: string[]
  motivation: string[]
  objectives: string[]
  contribution: string[]
  features: string[]
  process: string[]
  challenges: ProjectSection[]
  learned: string[]
  results: string[]
  future: string[]
  /** Optional sub-projects (used for the two client websites). */
  subProjects?: SubProject[]
}

export type SubProject = {
  title: string
  context: string
  requirements: string[]
  problemsAddressed: string[]
  responsibilities: string[]
  process: string[]
  technologies: string[]
  deliverables: string[]
  results: string
  link?: string
}

export const statusLabel: Record<ProjectStatus, string> = {
  live: 'Live',
  'in-development': 'In development',
  prototype: 'Prototype',
  ongoing: 'Ongoing',
  'on-hold': 'On hold',
}

export const categoryLabel: Record<ProjectCategory, string> = {
  edtech: 'EdTech',
  commercial: 'Client work',
  web: 'Web',
  ai: 'AI',
  finance: 'Finance',
  hardware: 'Hardware',
}

export const projects: Project[] = [
  {
    slug: 'grade-lab',
    title: 'Grade Lab',
    tagline: 'A GCSE revision platform built from scratch.',
    status: 'live',
    category: 'edtech',
    featured: true,
    summary:
      'Flashcards, exam-style questions and auto-marked quizzes across 12 GCSE subjects, with spaced repetition, progress sync and gamification. Designed, built and maintained by me.',
    period: '2025 to present',
    role: 'Founder, designer and sole developer',
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'TypeScript',
      'Framer Motion',
      'Supabase (auth, Postgres, storage)',
      'Netlify (hosting + serverless function)',
      'PWA (vite-plugin-pwa)',
      'pdf.js',
    ],
    links: [
      { label: 'Live site', href: 'https://gradelab.netlify.app/' },
      { label: 'GitHub organisation', href: 'https://github.com/Grade-Lab' },
      { label: 'Source repository', href: 'https://github.com/callumtsungu200-coder/Grade-Lab' },
    ],
    screenshots: [
      { src: '/images/projects/grade-lab/landing.jpg', alt: 'Grade Lab landing page: "Everything you need to reach grade 9", with a phone mock-up showing a Biology flashcard', caption: 'Landing page, 12 subjects, 4,700+ flashcards, 4,900+ exam questions' },
    ],
    overview: [
      'Grade Lab is a web app for GCSE students. It started as a dark-themed flashcard app for the seven subjects I was revising myself, and has grown into a platform covering 12 subjects with around 4,700 flashcards and a bank of exam-style questions organised by grade.',
      'Everything in it is tied to the real specifications, AQA, Edexcel, OCR, Eduqas and WJEC, so topics are split the way the exam boards split them rather than as vague summaries.',
    ],
    problem: [
      'Most free revision tools are either generic (not matched to a specific exam board) or locked behind paywalls. Flashcard apps rarely know which tier or which separate-science paper a fact belongs to, so students waste time on content they will never be examined on.',
      'I also wanted something that would make me come back: tracking what I actually knew, bringing cards back just before I would forget them, and making a 20-minute session feel worthwhile.',
    ],
    motivation: [
      'I built the first version for my own Year 10 revision. Once it worked for me it made sense to open it up, add the subjects my friends were taking and treat it as a real product, which is also where my interest in building and shipping software comes from.',
    ],
    objectives: [
      'Cover the subjects and exam boards students at my school actually sit.',
      'Make revision active: flip, self-grade, quiz, and see progress.',
      'Work the same on a phone and a laptop, including offline as an installable PWA.',
      'Keep a free tier that is genuinely useful.',
    ],
    contribution: [
      'Everything: product design, UI/UX, front-end code, data model, Supabase schema and row-level security policies, authentication, the serverless PDF function and deployment.',
      'Wrote and organised the flashcard and question content by specification topic code.',
      'Used AI-assisted development to speed up boilerplate and content formatting, reviewing and testing the output myself.',
    ],
    features: [
      'Flashcards for 12 GCSE subjects (Biology, Chemistry, Physics, Maths, Computer Science, History, English Literature, Media Studies, Spanish, Business, Citizenship, Religious Studies) with tier and separate-science filters.',
      'Spaced repetition: cards climb a 1 → 3 → 7 → 14 → 30 → 60 day ladder when known, and reset when marked "still learning".',
      'Exam-style questions graded 4–9 with mark schemes and model answers; auto-marked multiple-choice quizzes.',
      'Past-paper viewer using pdf.js, with a Netlify function proxying PDFs.',
      'Accounts and cloud progress sync via Supabase, so progress follows the user across devices.',
      'Gamification: XP, levels, badges, gems, an item shop and a global leaderboard.',
      'Custom flashcards, keyboard shortcuts, shuffle, "only what I don\'t know yet" filters.',
      'Light and dark display themes, celebration animations that respect prefers-reduced-motion, installable PWA.',
    ],
    process: [
      'Started with a plain React + Vite flashcard app and a single subject, then generalised the data model to `[question, answer, tier]` tuples grouped under spec topic codes so new subjects were just new data files.',
      'Added progress tracking in localStorage first; moved to Supabase once accounts and cross-device sync became the obvious next step.',
      'Introduced spaced repetition after noticing I was cramming the same deck repeatedly, the scheduler deliberately ignores early reviews so cramming does not fling cards months away.',
      'Layered on quizzes, exam questions and past papers, then gamification to improve retention.',
      'Each iteration was deployed to Netlify from the main branch and tested on my own phone before wider use.',
    ],
    challenges: [
      {
        heading: 'Data at scale',
        body: [
          'Thousands of cards across 12 subjects quickly became hard to keep consistent. Grouping cards under exam-board topic codes and writing small scripts to build seed data kept the content manageable.',
        ],
      },
      {
        heading: 'Migrating progress to the cloud',
        body: [
          'Existing users already had progress stored locally. The sync layer merges local and cloud state rather than overwriting either, and the spaced-repetition system gives older cards a virtual schedule so nobody opens the app to a wall of 400 overdue reviews.',
        ],
      },
      {
        heading: 'Security with a public front end',
        body: [
          'Because the app talks to Supabase directly from the browser, row-level security policies had to be right for every table, user progress, leaderboard entries, payments and admin tools.',
        ],
      },
    ],
    learned: [
      'How to structure a growing React codebase and when to move logic out of components.',
      'Relational data design, authentication and row-level security in Supabase.',
      'That spaced repetition and small gamification loops matter more to retention than visual polish.',
      'How to use AI tools productively, for scaffolding and content formatting, while still owning and understanding the code.',
    ],
    results: [
      'Live at gradelab.netlify.app and in active use by me and students I know.',
      'Covers 12 subjects, roughly 4,700 flashcards and several thousand exam-style questions.',
      // Deliberately no user counts or performance statistics, none are measured.
    ],
    future: [
      'More subjects and exam-board variants as people request them.',
      'Better analytics for students: weakest topics, predicted readiness per paper.',
      'Teacher / class features so a teacher can see which topics a class is struggling with.',
      'Automated tests for the spaced-repetition and sync logic.',
    ],
  },

  {
    slug: 'commercial-websites',
    title: 'Commercial website development',
    tagline: 'Websites designed, built and sold to two local businesses.',
    status: 'ongoing',
    category: 'commercial',
    featured: true,
    summary:
      'I have developed and sold websites to two clients: MO BARBER, a barbershop in Colchester, and Brows by Deja, a brow studio in Akron, Ohio. The work covered requirements, design, build, deployment and handover.',
    period: '2025 to present',
    role: 'Designer, developer and point of contact',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Netlify'],
    links: [
      { label: 'mo-barber.com', href: 'https://mo-barber.com/' },
      { label: 'browsbydeja.netlify.app', href: 'https://browsbydeja.netlify.app/' },
    ],
    screenshots: [
      { src: '/images/projects/commercial/mo-barber-home.jpg', alt: 'MO BARBER website home page: hero photo of a barber at work, "Book Appointment" button and Google review rating', caption: 'MO BARBER, Colchester barbershop' },
      { src: '/images/projects/commercial/brows-by-deja-home.jpg', alt: 'Brows by Deja website home page: dark, editorial layout with portrait and "Book an appointment" button', caption: 'Brows by Deja, brow studio, Akron, Ohio' },
    ],
    overview: [
      'Alongside my own projects I have taken on paid website work for two service businesses: MO BARBER, an independent barbershop in Colchester, Essex, and Brows by Deja, a brow artist based in Akron, Ohio. Both needed a clean, mobile-first site that made it easy for customers to see services and prices, look at real work and book.',
      'Both sites are live and linked above. Pricing and private details of the engagements are not published.',
    ],
    problem: [
      'Both businesses relied on word of mouth, Google and social media. Neither had a site of their own, which meant no single place for services, prices, opening hours and booking, and nothing for search engines to index beyond a listing.',
    ],
    motivation: [
      'I wanted to test whether skills I had learned building my own projects were worth something to a real customer. Finding a business need, pitching a solution, agreeing a price and delivering it was as much the point as the code.',
    ],
    objectives: [
      'Deliver a professional, fast, mobile-first website each client could be proud of.',
      'Make the key actions obvious: call, book, find us, see services.',
      'Hand over something the owner could keep without ongoing technical help.',
    ],
    contribution: [
      'Initial outreach and requirement gathering with the business owners.',
      'Design, copy structure, build, deployment and domain/hosting setup.',
      'Revisions based on client feedback and a handover walkthrough.',
    ],
    features: [
      'Services and pricing sections, opening hours and location.',
      'Online booking calls-to-action throughout, and a gallery of real work.',
      'Reviews / rating surfaced on the page (MO BARBER).',
      'Responsive layouts tuned for phones first, since that is how customers find local businesses.',
      'Basic on-page SEO: titles, descriptions, structured headings.',
    ],
    process: [
      'Met each owner to understand the business, their customers and what they wanted the site to do.',
      'Produced a simple design direction, agreed scope and price, then built a first version for review.',
      'Iterated on feedback, deployed to Netlify, and walked the owner through how to request changes.',
    ],
    challenges: [
      {
        heading: 'Managing expectations and scope',
        body: [
          'Clients naturally ask for additions mid-project. Agreeing what was included up front and treating anything else as a follow-up kept both projects on track.',
        ],
      },
      {
        heading: 'Designing for someone else',
        body: [
          'A site for a business has to reflect their brand and customers, not my taste. That meant more listening and fewer assumptions than on my own projects.',
        ],
      },
    ],
    learned: [
      'Client communication: asking the right questions early saves rebuilding later.',
      'Pricing and scoping small projects, and the confidence to ask to be paid for work.',
      'Deployment, domains and handover, the parts of web development that are not code.',
    ],
    results: [
      'Two websites delivered, paid for and live in production: mo-barber.com and browsbydeja.netlify.app.',
      'Both clients ended up with a site they did not have before; I ended up with my first commercial experience, including a client in another country.',
    ],
    future: [
      'Offer maintenance and small SEO improvements as a follow-on service.',
      'Move Brows by Deja onto a custom domain.',
      'Build a reusable template so future client sites are faster to deliver.',
    ],
    subProjects: [
      {
        title: 'MO BARBER: Colchester, Essex',
        context: 'An independent barbershop in the heart of Colchester specialising in curly tapers, skin fades and modern styles, with a strong Google review rating but no website of its own.',
        requirements: [
          'Services and prices, opening hours and location in one place.',
          'Online booking as the primary call-to-action.',
          'A gallery of real work and client reviews.',
          'Mobile-first and quick to load.',
        ],
        problemsAddressed: [
          'Customers had nowhere to check prices and hours without calling or visiting.',
          'Strong reviews were not working for the business beyond the Google listing.',
        ],
        responsibilities: ['Requirements', 'Design', 'Build', 'Deployment', 'Handover'],
        process: ['Discovery conversation with the owner', 'Design direction and scope agreed', 'Build and review rounds', 'Launch on a custom domain'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
        deliverables: ['Responsive marketing site', 'Services & prices, gallery, reviews', 'Booking CTA', 'Custom domain and hosting'],
        results: 'Live at mo-barber.com.',
        link: 'https://mo-barber.com/',
      },
      {
        title: 'Brows by Deja: Akron, Ohio',
        context: 'A licensed brow artist offering shaping, lamination, microblading and combo brows, wanting a polished first impression for new clients.',
        requirements: [
          'A full service menu with durations and prices, including touch-up tiers.',
          'Clear booking route for every service.',
          'An editorial look that matched the existing branding.',
        ],
        problemsAddressed: [
          'New clients had no way to compare services and prices before enquiring.',
          'Enquiries were scattered across social media messages.',
        ],
        responsibilities: ['Requirements', 'Design', 'Build', 'Deployment', 'Handover'],
        process: ['Remote discovery conversation', 'Design matched to existing branding', 'Build and feedback rounds', 'Launch'],
        technologies: ['React', 'Tailwind CSS', 'Netlify'],
        deliverables: ['Responsive site with service menu and pricing', 'Per-service booking links', 'Gallery and about section', 'Hosting setup'],
        results: 'Live at browsbydeja.netlify.app.',
        link: 'https://browsbydeja.netlify.app/',
      },
    ],
  },

  {
    slug: 'personal-portfolio',
    title: 'Personal portfolio',
    tagline: 'This website: designed and built as a project in its own right.',
    status: 'live',
    category: 'web',
    featured: true,
    summary:
      'A multi-page portfolio built with React, TypeScript, Tailwind CSS and Framer Motion. Content is driven from typed data files so it can grow through sixth form and beyond without rewriting components.',
    period: 'February 2025 to present',
    role: 'Designer and developer',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Netlify Forms'],
    links: [
      { label: 'Live site', href: 'https://chris-c-tsungu.netlify.app/' },
      { label: 'Source repository', href: 'https://github.com/callumtsungu200-coder/chris-tsungu-portfolio-' },
    ],
    screenshots: [],
    overview: [
      'The site you are reading. The first version was a single-page site focused on football and academics; the current version is a multi-page portfolio covering projects, finance, experience and education, built to be maintained for years.',
    ],
    problem: [
      'I needed one place that presented real evidence (projects, client work, research and experience) to teachers, admissions tutors and employers, and that I could keep updating as a student without a CMS.',
    ],
    motivation: [
      'Partly to have a professional presence, partly because building it is the best way to practise modern front-end development.',
    ],
    objectives: [
      'Make every claim verifiable and every section easy to update.',
      'Fast, accessible and responsive, with sensible SEO.',
      'A design that feels considered rather than templated.',
    ],
    contribution: ['Design, code, content and deployment.'],
    features: [
      'Typed content layer in `src/data/`, adding a project, article or status update is a data change, not a code change.',
      'Project case studies with filtering, article system with categories and search, "currently working on" board with statuses.',
      'Printable CV generated from site data; contact form with validation and spam protection via Netlify Forms.',
      'Per-page titles, descriptions, Open Graph tags, sitemap, robots.txt and reduced-motion support.',
    ],
    process: [
      'Version 1: single-page React site with Framer Motion, deployed to Netlify.',
      'Version 2: restructured into routes with React Router, split content into typed data modules, added the finance section and the CV page.',
    ],
    challenges: [
      {
        heading: 'Honesty versus impressiveness',
        body: [
          'It is tempting to round numbers up or present plans as achievements. The content layer deliberately flags anything unverified so the site stays accurate.',
        ],
      },
      {
        heading: 'Keeping motion tasteful',
        body: ['Animation is used for reveal and feedback only, and everything respects prefers-reduced-motion.'],
      },
    ],
    learned: [
      'React Router, code organisation for a growing site, and writing content as data.',
      'Accessibility details: focus states, semantic landmarks, alt text and keyboard navigation.',
    ],
    results: ['Live and continuously updated.'],
    future: [
      'Add a PDF CV and certificate images.',
      'Automate sitemap generation at build time.',
    ],
  },

  {
    slug: 'ai-speaker-raspberry-pi',
    title: 'Smart AI speaker (Raspberry Pi)',
    tagline: 'A voice-assistant prototype combining hardware, software and a language-model API.',
    status: 'in-development',
    category: 'ai',
    summary:
      'A Raspberry Pi with a microphone and speaker that sends speech to a large-language-model API and reads the answer back. An experiment in hardware–software integration, not a finished product.',
    period: '2025 to present',
    role: 'Builder',
    technologies: ['Raspberry Pi', 'Python', 'LLM API', 'Speech-to-text / text-to-speech'],
    links: [],
    screenshots: [],
    overview: [
      'Inspired by devices like Alexa, this project wires a microphone and speaker to a Raspberry Pi and uses an AI API for understanding and generating responses.',
    ],
    problem: ['I wanted to understand what actually happens between saying something to a smart speaker and hearing an answer.'],
    motivation: ['Curiosity about AI beyond the browser, and a reason to work with Python on real hardware.'],
    objectives: ['Capture audio, transcribe it, send it to a language model and speak the reply.', 'Keep latency low enough to feel conversational.'],
    contribution: ['All of it, hardware setup, Python scripts and API integration.'],
    features: ['Microphone capture and playback on the Pi.', 'Speech → text → LLM → speech pipeline.'],
    process: ['Set up the Pi and audio devices first, then the text-only API loop, then joined the pieces.'],
    challenges: [
      { heading: 'Audio on Linux', body: ['Getting microphone input and speaker output configured reliably on the Pi took longer than the AI part.'] },
    ],
    learned: ['Python on Linux, working with APIs, and the practical difficulties of hardware projects.'],
    results: ['Working prototype loop; still in development and not a finished device.'],
    future: ['Wake-word detection, better speech synthesis and a tidy enclosure.'],
  },

  {
    slug: 'nfc-review-prototype',
    title: 'NFC Google Review prototype',
    tagline: 'Tap a phone on a tag to open a business\'s review page.',
    status: 'prototype',
    category: 'hardware',
    summary:
      'A physical NFC tag that opens a local business\'s Google Review page when tapped. The prototype did not fully work, and it taught me more than some things that did.',
    period: '2025',
    role: 'Builder',
    technologies: ['NFC tags', 'Smartphone automation', 'URL handling'],
    links: [],
    screenshots: [],
    overview: ['An attempt to make leaving a review frictionless for customers of the small businesses I was building websites for.'],
    problem: ['Businesses ask for reviews but customers rarely follow through; a tap-to-review tag on the counter removes the search step.'],
    motivation: ['It connected directly to my client work and seemed like a small product businesses would pay for.'],
    objectives: ['Reliable tap-to-open on both Android and iOS.'],
    contribution: ['Research, tag programming and testing.'],
    features: ['NFC tag encoded with a review URL.'],
    process: ['Encoded tags, tested across devices, iterated on URL formats.'],
    challenges: [
      { heading: 'Inconsistent device behaviour', body: ['Different phones handled the tags differently, and the deep links into Google Reviews were not reliable across platforms.'] },
    ],
    learned: ['Debugging across devices, testing methodically, and being honest about when something is not working.'],
    results: ['Prototype did not fully work; shelved for now.'],
    future: ['Revisit with a hosted redirect page rather than deep links.'],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

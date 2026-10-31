import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Loader } from '@/components/layout/Loader'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { ErrorBoundary } from '@/components/layout/ErrorBoundary'
import { PageTransition } from '@/components/layout/PageTransition'
import { HomePage } from '@/pages/HomePage'

// Secondary routes are code-split so the home page stays light.
const AboutPage = lazy(() => import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })))
const ProjectPage = lazy(() => import('@/pages/ProjectPage').then((m) => ({ default: m.ProjectPage })))
const SkillsPage = lazy(() => import('@/pages/SkillsPage').then((m) => ({ default: m.SkillsPage })))
const FinancePage = lazy(() => import('@/pages/FinancePage').then((m) => ({ default: m.FinancePage })))
const ExperiencePage = lazy(() => import('@/pages/ExperiencePage').then((m) => ({ default: m.ExperiencePage })))
const EducationPage = lazy(() => import('@/pages/EducationPage').then((m) => ({ default: m.EducationPage })))
const AchievementsPage = lazy(() => import('@/pages/AchievementsPage').then((m) => ({ default: m.AchievementsPage })))
const FootballPage = lazy(() => import('@/pages/FootballPage').then((m) => ({ default: m.FootballPage })))
const NowPage = lazy(() => import('@/pages/NowPage').then((m) => ({ default: m.NowPage })))
const CVPage = lazy(() => import('@/pages/CVPage').then((m) => ({ default: m.CVPage })))
const ContactPage = lazy(() => import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

function RouteFallback() {
  return (
    <div className="container pt-40 pb-24" aria-busy="true" aria-live="polite">
      <div className="h-3 w-40 animate-pulse rounded-2xl bg-ink-800" />
      <div className="mt-6 h-12 w-3/4 animate-pulse rounded-2xl bg-ink-800" />
      <div className="mt-4 h-4 w-1/2 animate-pulse rounded-2xl bg-ink-800" />
    </div>
  )
}

export default function App() {
  const location = useLocation()
  return (
    <div className="relative min-h-screen overflow-clip bg-ink-950 text-ink-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-2xl focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-ink-950">
        Skip to content
      </a>
      <Loader />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

      <main id="main" tabIndex={-1} className="outline-none">
        <ErrorBoundary>
          <PageTransition>
            <Suspense fallback={<RouteFallback />}>
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:slug" element={<ProjectPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/finance" element={<FinancePage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/achievements" element={<AchievementsPage />} />
                <Route path="/football" element={<FootballPage />} />
                <Route path="/now" element={<NowPage />} />
                <Route path="/cv" element={<CVPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </PageTransition>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  )
}

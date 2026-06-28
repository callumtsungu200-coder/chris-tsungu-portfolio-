import { Loader } from '@/components/layout/Loader'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { CursorGlow } from '@/components/layout/CursorGlow'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Education } from '@/components/sections/Education'
import { Achievements } from '@/components/sections/Achievements'
import { Sports } from '@/components/sections/Sports'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Gallery } from '@/components/sections/Gallery'
import { Timeline } from '@/components/sections/Timeline'
import { Contact } from '@/components/sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-clip bg-ink-950 text-ink-100">
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Achievements />
        <Sports />
        <Skills />
        <Projects />
        <Gallery />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

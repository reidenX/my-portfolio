import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero/Hero'
import { lazy, Suspense } from 'react'

import { Toaster } from './components/ui/sonner'

const About = lazy(() => import('./sections/About/About'))
const Projects = lazy(() => import('./sections/Projects/Projects'))
const Education = lazy(() => import('./sections/Education/Education'))
const Contact = lazy(() => import('./sections/Contact/Contact'))

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div></div>}>
          <About />
          <Education />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App

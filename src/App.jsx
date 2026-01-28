import About from "./Components/About"
import Contact from "./Components/Contact"
import Education from "./Components/Education"
import Experience from "./Components/Experience"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Technologies from "./Components/Technologies"

const App = () => {
  return (
    <div className="relative overflow-x-hidden text-neutral-300 antialiased 
      selection:bg-cyan-300 selection:text-cyan-900">

      {/* Background that covers the whole page */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full min-h-screen 
        bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%, 
        rgba(120,119,198,0.3), rgba(255,255,255,0))]">
      </div>

      {/* All content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App

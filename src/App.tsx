import { Navbar } from './components/Navbar'
import { Marquee } from './components/Marquee'
import { Templates } from './components/Templates'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      {/* 1. High-End Navbar containing only the logo and company name Well'D */}
      <Navbar />

      {/* Main Experience */}
      <main>
        {/* 2. Kinetic Marquee Strip */}
        <Marquee />

        {/* 3. Project Visual Reel (Expandable Strips Accordion for 6 Live Projects) */}
        <Templates />
      </main>

      {/* 4. Minimalist Luxury Footer */}
      <Footer />
    </div>
  )
}

export default App

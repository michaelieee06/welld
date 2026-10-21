import { Navbar } from './components/Navbar'
import { Marquee } from './components/Marquee'
import { Templates } from './components/Templates'

export function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Marquee />
        <Templates />
      </main>
    </div>
  )
}

export default App

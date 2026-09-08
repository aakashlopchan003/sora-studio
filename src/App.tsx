import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Services from './components/Services'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Gallery />
      <Services />
      <BookingCTA />
      <Footer />
    </main>
  )
}

export default App

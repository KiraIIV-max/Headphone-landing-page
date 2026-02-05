import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Tec from './components/Tec'
import Footer from './components/Footer'

const App = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Features />
      <Tec />
      <Footer />
    </section>
  )
}

export default App
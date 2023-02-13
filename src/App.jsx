import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CTA from './components/CTA'
import CTA2 from './components/CTA2'
import Content from './components/Content'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Features from './components/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      {/* <CTA2 /> */}
      <Content />
      <Contact />
      <Footer />
    </>
  )
}

export default App

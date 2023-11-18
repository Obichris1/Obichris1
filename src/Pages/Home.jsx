import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div id='home'>
        <Navbar />
        <HeroSection />
        <About />
        <Project />
        <Contact />
        <Footer />
        
        
    </div>
  )
}

export default Home

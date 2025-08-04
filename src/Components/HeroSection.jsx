import React from 'react'
import './HeroSection.css'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import HeroBanner from '../Assets/hero-banner.jpg'

const HeroSection = () => {
  return (
    <div className='hero'>

      <div className='mask'>
        <img src={HeroBanner} alt="HeroBanner" />
      </div>

      <div className='content'>
        <h1>WEBSITE DEVELOPER</h1>
      

      <div className='buttons'>
      <Link to='projects' spy={true} smooth={true} offset={-80} duration={500} className='btn' >Projects  </Link>
         <Link to='contact' spy={true} smooth={true} offset={-80} duration={500} className='btn2 btn-light '>Contact</Link>
          
        
        </div>
     </div>
    </div>
  )
}

export default HeroSection
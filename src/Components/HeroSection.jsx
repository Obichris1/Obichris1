import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'
import HeroBanner from '../Assets/hero-banner.jpg'

const HeroSection = () => {
  return (
    <div className='hero'>

      <div className='mask'>
        <img src={HeroBanner} alt="HeroBanner" />
      </div>

      <div className='content'>
        <h1>FRONTEND DEVELOPER</h1>
      

      <div>
        <a href='#projects' className='btn'>
          Projects
        </a>
        <a href='#contacts' className='btn btn-light'>
          Contacts
        </a>
        </div>
     </div>
    </div>
  )
}

export default HeroSection
import React from 'react'
import HeroBanner from '../Assets/hero-banner.jpg'
import './Project.css'

const Project = () => {
  return (
   <div id='projects'>
      <div className='card-container'>
      <div className='project-card card1'>  
          <img src={HeroBanner} alt="" />
          {/* <div className='card-content'> */}
          <h1 className='project-heading'>Fitness Application</h1>
          <p className= 'project-about'>A fitness application that fetches and displays exercises</p>
          <p className='project-url'>Live Url</p>
          <hr />
          <div className='Tech-used'>
         
       </div>
         
         
      </div>

      <div className='project-card card2'>  
          <img src={HeroBanner} alt="" />
          <h1 className='project-heading'>Fitness Application</h1>
          <p className= 'project-about'>A fitness application that fetches and displays exercises</p>
          <p className='project-url'>Live Url</p>
          <hr />
          <div className='Tech-used'>
          </div>
        
      </div>

      <div className='project-card card3'>  
          <img src={HeroBanner} alt="" />
          <h1 className='project-heading'>Fitness Application</h1>
          <p className= 'project-about'>A fitness application that fetches and displays exercises</p>
          <p className='project-url'>Live Url</p>
          <hr />
          <div className='Tech-used'>
          </div>

           
        
      </div>

      <div className='project-card card3'>  
          <img src={HeroBanner} alt="" />
          <h1 className='project-heading'>Fitness Application</h1>
          <p className= 'project-about'>A fitness application that fetches and displays exercises</p>
          <p className='project-url'>Live Url</p>
          <hr />
          <div className='Tech-used'>
          </div>

           
        
      </div>
    </div>
 </div>
  )
}

export default Project
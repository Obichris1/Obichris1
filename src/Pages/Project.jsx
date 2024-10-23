import React from 'react'
import shred from '../Assets/Shred app.png'
import shoesHive from '../Assets/ShoesHive.png'
import myInsta from '../Assets/my-insta.png'
import firebaseAuth from '../Assets/fire base auth app.png'
import './Project.css'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
   <div id='projects'>
      <div className='card-container'>

      <Link className='project-card' to='https://shoes-hive.vercel.app/' target='_blank' rel="noopener noreferrer">  
          <img src={shoesHive} alt="" height={200}/>
          <p className='project-heading'>Shoes Hive</p>
          <p className= 'project-about'>E-commerce Application</p>
        
      </Link>

      <Link className='project-card' to='https://shredapp.netlify.app/' target='_blank' rel="noopener noreferrer">  
          <img src={shred} alt="" height={200}/>
          {/* <div className='card-content'> */}
          <p className='project-heading'>Shred</p>
          <p className= 'project-about'>Fitness Application</p>
                
      </Link>

      

      <Link className='project-card' to='https://my-instag.netlify.app/' target='_blank' rel="noopener noreferrer">  
          <img src={myInsta} alt="" height={200}/>
          <p className='project-heading'>My Instagram</p>
          <p className= 'project-about'>Basic Instagram Clone</p>
       
           
        
      </Link>

      <Link className='project-card' to='https://firebaseautheapp.netlify.app/' target='_blank' rel="noopener noreferrer">  
          <img src={firebaseAuth} alt="" />
          <p className='project-heading'>Firebase auth app</p>
          

           
        
      </Link>

     
    </div>
          <div className='more-projects'>
       <a target='_blank' href='https://github.com/Obichris1?tab=repositories' rel="noopener noreferrer" style={{color : '#cadetblue', fontSize : '2rem', marginTop : '2000px', textAlign : ''}}>See More Projects</a>
          </div>
 </div>
  )
}

export default Project
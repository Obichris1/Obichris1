import React from 'react'
import ninemile from '../Assets/9mile.png'
import shoesHive from '../Assets/ShoesHive.png'
import Dsquare from '../Assets/Dsquare.png'
import EsoE from '../Assets/EsoE.png'
import myInsta from '../Assets/my-insta.png'
import firebaseAuth from '../Assets/fire base auth app.png'
import JoeKarter from '../Assets/joe-karter.png'
import Fmcc from '../Assets/fmcc.png'
import tandtdeals from '../Assets/tandtdeals.png'
import './Project.css'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
   <div id='projects'>
      <div className='card-container'>

      <Link className='project-card' to='https://9mileon.com/' target='_blank' rel="noopener noreferrer">  
          <img src={ninemile} alt="" height={200}/>
          {/* <div className='card-content'> */}
          <p className='project-heading'>9mileon Financial services</p>
          <p className= 'project-about'>Fintech Application</p>
                
      </Link>

      <Link className='project-card' to='https://ibank.esoebank.com/dashboard/' target='_blank' rel="noopener noreferrer">  
          <img src={EsoE} alt="" height={200}/>
          <p className='project-heading'>EsoE Microfinance Bank</p>
          <p className= 'project-about'>A self-service client application for ESO-E mfb</p>
        
      </Link>

      <Link className='project-card' to='https://tandtdeals.ng/' target='_blank' rel="noopener noreferrer">  
          <img src={tandtdeals} alt="" height={200}/>
          <p className='project-heading'>T and T deals store</p>
          <p className= 'project-about'>e-commerce application</p>
        
      </Link>

      <Link className='project-card' to='https://joe-karter-store-xvs1.vercel.app/' target='_blank' rel="noopener noreferrer">  
          <img src={JoeKarter} alt="" height={200}/>
          <p className='project-heading'>Joe Karter stores </p>
          <p className= 'project-about'>e-commerce application</p>
        
      </Link>

      <Link className='project-card' to='https://www.fmccng.com/' target='_blank' rel="noopener noreferrer">  
          <img src={Fmcc} alt="" height={200}/>
          <p className='project-heading'>FMCC Nigeria</p>
          <p className= 'project-about'>Web application for FMCC consultation company</p>
        
      </Link>



      <Link className='project-card' to='https://dsquare-events.vercel.app' target='_blank' rel="noopener noreferrer">  
          <img src={Dsquare} alt="" height={200}/>
          <p className='project-heading'>Dsquare Events Center</p>
          <p className= 'project-about'>Events Center Application</p>
        
      </Link>

      <Link className='project-card' to='https://shoes-hive.vercel.app/' target='_blank' rel="noopener noreferrer">  
          <img src={shoesHive} alt="" height={200}/>
          <p className='project-heading'>Shoes Hive</p>
          <p className= 'project-about'>E-commerce Application</p>
        
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
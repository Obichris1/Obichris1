import React from 'react'
import shred from '../Assets/Shred app.png'
import expense from '../Assets/expense.png'
import myInsta from '../Assets/my-insta.png'
import { FaGithub, FaLink } from 'react-icons/fa'
import './Project.css'

const Project = () => {
  return (
   <div id='projects'>
      <div className='card-container'>
      <div className='project-card card1'>  
          <img src={shred} alt="" />
          {/* <div className='card-content'> */}
          <h1 className='project-heading'>Shred</h1>
          <p className= 'project-about'>A fitness application that fetches and displays exercises based on the users search</p>
          < span className='project-url'><a target='_blank' href="https://shredapp.netlify.app/" style={{color : 'cadetblue'}}>Live URL <FaLink size={20}></FaLink></a></span>
          <span className='project-url' ><a target='_blank' href="https://my-instag.netlify.app/" > Code <FaGithub size={20}></FaGithub></a></span>

          <hr />
          <div className='project-tech'>
          <p className='btn-small'>HTML</p>
          <p className='btn-small'>CSS</p>
            <p className='btn-small'>JavaScript</p>
            <p className='btn-small'>React.js</p>
           
            <p className='btn-small'>Material UI</p>
           
          </div>
         
         
      </div>

      <div className='project-card card2'>  
          <img src={expense} alt="" />
          <h1 className='project-heading'>Expense tracker application</h1>
          <p className= 'project-about'>An app that keeps track of expenses done for each month in a paticular year</p>
          <span className='project-url'><a target='_blank' href="https://github.com/Obichris1/Expenses-Tracker"> Code <FaGithub size={20}></FaGithub></a></span>

          <hr />
          <div className='project-tech'>
            <p className='btn-small'>JavaS</p>
            <p className='btn-small'>CSS</p>
            <p className='btn-small'>Material UI</p>
            <p className='btn-small'>HTML</p>
          </div>
        
      </div>

      <div className='project-card card3'>  
          <img src={myInsta} alt="" />
          <h1 className='project-heading'>My Instagram</h1>
          <p className= 'project-about'>An instagram clone that only allows the user to add/delete images, update bio and profile picture</p>
          <span className='project-url'><a target='_blank' href="https://my-instag.netlify.app/" style={{color : 'cadetblue'}}>Live URL  <FaLink size={20}></FaLink></a></span>
          <span className='project-url'><a target='_blank' href="https://my-instag.netlify.app/"> Code <FaGithub size={20}></FaGithub></a></span>

          <hr />
          <div className='project-tech'>
          <p className='btn-small'>HTML</p>
          <p className='btn-small'>CSS</p>
            <p className='btn-small'>React.js</p>
            <p className='btn-small'>Dexie.js</p>
           
            
           
          </div>

           
        
      </div>

     
    </div>
          <div className='more-projects'>
       <a target='_blank' href='https://github.com/Obichris1?tab=repositories' style={{color : '#cadetblue', fontSize : '2rem', marginTop : '2000px', textAlign : ''}}>See More Projects</a>
          </div>
 </div>
  )
}

export default Project
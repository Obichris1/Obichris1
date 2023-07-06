import React from 'react'
import './Contact.css'
import {FaTwitter,FaLinkedin,FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <div id='contact'>
      <div className='contact-content'>
        <h1>Contact Me</h1>
        <p>Need a developer? Or would like to say hi. Feel free! hello@toriola</p>
     
        <div className='socials'>
        <div className='twitter'>
         <a href="tel:+234812914462"><FaTwitter  size={30} style={{color :'#fff'}}/></a>
        </div>

        <div className='linkedin'>
            <Link to='https://www.linkedin.com/in/obinna-chukwunenye-9b98291b9/'><FaLinkedin size={30} style={{color :'#fff'}} /></Link>
        </div>

        <div className='Github'>
          <FaGithub size={30} style={{color :'#fff'}} />
        </div>

       

        </div>
        
        

      </div>
    </div>
  )
}

export default Contact
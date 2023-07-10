import React from 'react'
import './Contact.css'
import {FaTwitter,FaLinkedin,FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <div id='contact'>
      <div className='contact-content'>
        <h1>Contact Me</h1>
        <p>Need a developer? Or would like to say hi. Feel free! <span><a href="mailto:obichris202@gmail.com">hello@Chukwunenye</a></span></p>
         <hr style={{color : '#fff' }}/>
        <div className='socials'>
        <div className='twitter'>
         <a href="tel:+234812914462"><FaTwitter  size={50} style={{color :'#fff'}}/></a>
        </div>

        <div className='linkedin'>
            <Link to='https://www.linkedin.com/in/obinna-chukwunenye-9b98291b9/'><FaLinkedin size={50} style={{color :'#fff'}} /></Link>
        </div>

        <div className='Github'>
          <FaGithub size={50} style={{color :'#fff'}} />
        </div>

        </div>
        <p className='copyright'>Copyright &copy; 2023 Chukwunenye Obinna</p>        
        

      </div>
    </div>
  )
}

export default Contact
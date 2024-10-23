import React from 'react'
import './Contact.css'
import {FaTwitter,FaLinkedin,FaGithub} from 'react-icons/fa'



const Contact = () => {
  return (
    <div id='contact'>
      <div className='contact-content'>
        <h1>Get In Touch</h1>
        <p>Need a developer? Or would like to say hi. Feel free! <span><a href="mailto:obichris202@gmail.com">hello@Obinna</a></span></p>
         <hr style={{color : '#fff' }}/>
        <div className='socials'>
        <div className='social-links twitter'>
         <a href="https://twitter.com/obichris202"><FaTwitter  size={35} style={{color :'#fff'}}/></a>
        </div>

        <div className='social-links linkedin'>
            <a target='_blank' href='https://www.linkedin.com/in/obinna-chukwunenye-9b98291b9/'><FaLinkedin size={35} style={{color :'#fff'}} /></a>
        </div>  

        <div className='social-links Github'>
        <a target='_blank' href='https://github.com/Obichris1?tab=repositories'><FaGithub size={35} style={{color :'#fff'}} /></a>
        </div>

        

        </div>
        <p className='copyright'>Copyright &copy; 2023 Chukwunenye Obinna</p>        
        

      </div>
    </div>
  )
}

export default Contact
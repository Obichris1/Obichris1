import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'



const Navbar = () => {
  const [click , setClick] = useState(false)

  const showMenu = () => {
    setClick(!click)
  }

  const [color, setColor] = useState(false)

  const changeColor = () => {
    if(window.scrollY >= 1){
      setColor(true)
    } else{
        setColor(false)
    }
  }

  window.addEventListener('scroll',changeColor)

  
  return (
 <div className={color ? 'header header-bg' : 'header'}>
    <Link to='/'>
      <h1>Chukwunenye Obinna</h1>
      
      </Link> 
    <ul className={click ? 'nav-links active' : 'nav-links'}>
      <li>
        <Link to='/'>Home</Link>
      </li>   
      <li>
        <a href='#about'>About</a>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
      </ul>       

      <div className='hamburger' onClick={showMenu}>
        {click ?  <FaTimes size={20} style={{color : '#fff'}} /> : 
                  <FaBars size={20} style={{color : '#fff'}} />
}
        
       

      </div>
    
 </div>
  )
}                        

export default Navbar
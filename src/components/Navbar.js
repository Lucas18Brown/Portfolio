import LucasIcon from '../assets/Lucasicon.png'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll'


function Navbar() {

  const [ faded, setFade ] = useState(false)
  const setFaded = () => {
    if (window.scrollY >= 600) {
      setFade(true)
    } else {
      setFade(false)
    }
  }

  window.addEventListener("scroll", setFaded)

  return (
    <div className="navbar">
      <ul id="navbar-ul"  style={{ fontWeight: '300', fontSize: '15px'}}>
        <div className='my-info'>
          <img src= {LucasIcon} alt="Lucas Brown" className='lucas-icon cursor-pointer' onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}></img>
          <li className={faded ? "transition-opacity duration-300 ease-in opacity-100 hover:cursor-pointer font-bold" : "transition-opacity duration-300 ease-out opacity-0 font-bold"}>Lucas Brown</li>
        </div>
        <div className='dropdown'>
        <FontAwesomeIcon icon={faBars} className="bar text-base"/>
          <div className="nav-items">
            <Link activeClass='active' offset={-80} to='about-container'>
              <li className='cursor-pointer hover:text-[#FFC947]'>About</li>
            </Link>
            <Link activeClass='active' offset={-80} to='projects'>
              <li className='cursor-pointer hover:text-[#FFC947]' onClick={() => { window.scrollTo({behavior: 'smooth'})}}>Projects</li>
            </Link>
            <Link activeClass='active' to='contacts'>
            <li className='cursor-pointer hover:text-[#FFC947]' onClick={() => { window.scrollTo({behavior: 'smooth'})}}>Contacts</li>
            </Link>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Navbar

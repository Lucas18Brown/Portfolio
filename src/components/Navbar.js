import LucasIcon from '../assets/Lucasicon.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {

  return (
    <div className="navbar">
      <ul id="navbar-ul"  style={{ fontWeight: '300', fontSize: '15px'}}>
        <div className='my-info'>
          <img src= {LucasIcon} alt="Lucas Brown" className='lucas-icon cursor-pointer' onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}></img>
          <li className='font-bold'>Lucas Brown</li>
        </div>
        <div className='dropdown'>
        <FontAwesomeIcon icon={faBars} className="bar text-base"/>
          <div className="nav-items">
            <li className='cursor-pointer hover:text-[#FFC947]' onClick={() => { window.scrollTo({top: 850, behavior: 'smooth'})}}>About</li>
            <li className='cursor-pointer hover:text-[#FFC947]' onClick={() => { window.scrollTo({top: 1750, behavior: 'smooth'})}}>Projects</li>
            <li className='cursor-pointer hover:text-[#FFC947]' onClick={() => { window.scrollTo({top: 6000, behavior: 'smooth'})}}>Contacts</li>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Navbar

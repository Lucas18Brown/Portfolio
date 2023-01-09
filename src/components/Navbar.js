import LucasIcon from '../assets/Lucasicon.png'


function Navbar() {

  return (
    <div className="navbar">
      <ul id="navbar-ul"  style={{ fontWeight: '300', fontSize: '15px'}}>
        <div className='my-info'>
          <img src= {LucasIcon} alt="Lucas Brown" className='lucas-icon'></img>
          <li className='font-bold'>Lucas Brown</li>
        </div>
        <div className="nav-items">
          <li>About</li>
          <li>Projects</li>
          <li>Contacts</li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar

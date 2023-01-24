import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
  <div className="footer">
    <div className="footer-copyright">
      Made with
      <a href='https://reactjs.org/' target="_blank" rel='noopener noreferrer'>
        <span className='font-bold text-sky-400'>React</span> <FontAwesomeIcon icon={faReact} className="text-sky-400 fa-beat"/>
      </a>
    </div>
  </div>
)}

export default Footer

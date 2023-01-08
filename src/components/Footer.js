import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faReact} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
  <div className="footer">
    <div className="footer-links">
      <a href="https://www.linkedin.com/in/lucas18brown/" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faLinkedin} className="social-icon"/>
      </a>
      <a href='https://github.com/Lucas18Brown' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="social-icon"/>
      </a>
    </div>
    <div className="footer-copyright">
      Made with
      <a href='https://reactjs.org/' target="_blank" rel='noopener noreferrer'>
        <span className='font-bold text-sky-400'>React</span> <FontAwesomeIcon icon={faReact} className="text-sky-400 fa-beat"/>
      </a>
    </div>
  </div>
)}

export default Footer

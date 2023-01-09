import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


function Contacts() {
  return (
    <div className="contacts">
      <h1 className="m-0">Contact Me</h1>
      <p className="contact-info">Please message me with questions, opportunities or to simply say hi!</p>
      <div className="footer-links">
      <a href="https://www.linkedin.com/in/lucas18brown/" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faLinkedin} className="social-icon"/>
      </a>
      <a href='https://github.com/Lucas18Brown' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="social-icon"/>
      </a>
    </div>
    </div>
  )
}

export default Contacts;

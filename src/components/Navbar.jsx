import LucasIcon from '../assets/Lucasicon.png'
import { useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll'
import { useAnimationControls, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import fadeInTop from './Animation/FadeInTop';


function Navbar() {

  const [navItems, setClassName] = useState('nav-items');

  useEffect(() => {
    const updateNavItems = () => {
      if (window.innerWidth > 1024) {
        setClassName('nav-items');
      } else {
        setClassName('hidden');
      }
    };

    updateNavItems();
    window.addEventListener('resize', updateNavItems);

    return () => {
      window.removeEventListener('resize', updateNavItems);
    };
  }, []);

  const toggleClass = () => {
    setClassName(prevClassName => (prevClassName === 'hidden' ? 'nav-items' : 'hidden'));
  }

  const [animationPlayed, setAnimationPlayed] = useState(false);
  const control = useAnimationControls();
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView && !animationPlayed) {
      control.start("visible");
      setAnimationPlayed(true)
    }
  }, [control, inView, animationPlayed]);

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
      <motion.div initial="hidden" ref={ref} animate={control} variants={fadeInTop}>
        <ul id="navbar-ul"  style={{ fontWeight: '300', fontSize: '15px'}}>
          <div className='my-info'>
            <img src= {LucasIcon} alt="Lucas Brown" className='lucas-icon cursor-pointer' onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}></img>
            <li className={faded ? "transition-opacity duration-300 ease-in opacity-100 hover:cursor-pointer font-bold" : "transition-opacity duration-300 ease-out opacity-0 font-bold"}>Lucas Brown</li>
          </div>
          <div className='dropdown'>
            <FontAwesomeIcon icon={faBars} className="bar text-base" onClick={ toggleClass }/>
            <div className={navItems} >
              <Link activeClass='active' offset={-80} to='about-container'>
                <li className='n-item cursor-pointer hover:text-[#FFC947]'>About</li>
              </Link>
              <Link activeClass='active' offset={-80} to='projects'>
                <li className='n-item cursor-pointer hover:text-[#FFC947]' onClick={() => { window.scrollTo({behavior: 'smooth'})}}>Projects</li>
              </Link>
              <Link activeClass='active' to='contacts'>
              <li className='n-item cursor-pointer hover:text-[#FFC947]' onClick={() => { window.scrollTo({behavior: 'smooth'})}}>Contacts</li>
              </Link>
            </div>
          </div>
        </ul>
      </motion.div>
    </div>
  )
}

export default Navbar

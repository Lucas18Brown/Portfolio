import Carousel, { CarouselItem } from '../Carousel.jsx'
import Landing from '../../assets/Landing.png'
import Home from '../../assets/Home.png'
import Edit from '../../assets/Edit.png'
import New from '../../assets/New.png'
import React, { useState, useEffect } from "react";
import { useAnimationControls, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import fadeInLeft from "../Animation/FadeInLeft"
import fadeInRight from "../Animation/FadeInRight"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Project1() {

  const [animationPlayed, setAnimationPlayed] = useState(false);
  const control = useAnimationControls();
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView && !animationPlayed) {
      control.start("visible");
      setAnimationPlayed(true)
    }
  }, [control, inView, animationPlayed]);

  return (
    <div className="project1" name="pxlsounds">
      <motion.div initial="hidden" ref={ref} animate={control} variants={fadeInLeft}>
        <div>
          <h1 className='text-2xl font-medium'>PxlSounds</h1>
          <div className='flex'>
            <p className='text-xsm mb-10 mt-0 text-[#FFC947]'>Desktop</p>
            <a href='https://github.com/CodeLemons/PxlSounds' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-[#FFC947] hover:text-[#185ADB] ml-3 pb-0.5"/>
            </a>
          </div>
          <p className="md:text-sm text-xsm">A white-noise generator that helps people block distractions around them in order to focus on their tasks.</p>
          <br></br>
          <p className='md:text-sm text-xsm'>In PxlSounds you can choose different worlds that have specific themes around them, combine different sounds from those worlds in order to create your perfect environment for work.</p>
          <div className='language'>
            <a href='https://rubyonrails.org/' target="_blank" rel='noopener noreferrer'>
              <p className='px-2 bg-[#FFC947] rounded my-2 mr-2 text-[#0A1931] hover:bg-[#185ADB] text-xsm'>Ruby on Rails</p>
            </a>
            <a href='https://stimulus.hotwired.dev/' target="_blank" rel='noopener noreferrer'>
              <p className='px-2 bg-[#FFC947] rounded my-2 mr-2 text-[#0A1931] hover:bg-[#185ADB] text-xsm'>Stimulus</p>
            </a>
            <a href='https://www.heroku.com/' target="_blank" rel='noopener noreferrer'>
              <p className='px-2 bg-[#FFC947] rounded my-2 mr-2 text-[#0A1931] hover:bg-[#185ADB] text-xsm'>Heroku</p>
            </a>
          </div>
        </div>
      </motion.div>
      <div className='div-border'></div>
      <motion.div initial="hidden" ref={ref} animate={control} variants={fadeInRight}>
        <Carousel>
          <CarouselItem><img src={Landing} alt='landing page' className='project-img'></img></CarouselItem>
          <CarouselItem><img src={Home} alt='home page' className='project-img'></img></CarouselItem>
          <CarouselItem><img src={New} alt='new page' className='project-img'></img></CarouselItem>
          <CarouselItem><img src={Edit} alt='edit page' className='project-img'></img></CarouselItem>
        </Carousel>
      </motion.div>
    </div>
  )
}

export default Project1

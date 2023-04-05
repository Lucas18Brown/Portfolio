import Carousel ,{ CarouselItem } from "../Carousel.jsx";
import HLanding from "../../assets/Travel_landing_page.png"
import Index from "../../assets/Travel_Modal.png"
import Show from "../../assets/Travel_show.png"
import React, { useState, useEffect } from "react";
import { useAnimationControls, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import fadeInLeft from "../Animation/FadeInLeft"
import fadeInRight from "../Animation/FadeInRight"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Project4() {

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
    <div className="project2" name="our-travel-journal">
      <motion.div initial="hidden" ref={ref} animate={control} variants={fadeInLeft}>
        <Carousel>
          <CarouselItem><img src={HLanding} alt='landing page' className='project-img'></img></CarouselItem>
          <CarouselItem><img src={Index} alt='index page' className='project-img'></img></CarouselItem>
          <CarouselItem><img src={Show} alt='new page' className='project-img'></img></CarouselItem>
        </Carousel>
      </motion.div>
      <div className='div-border'></div>
      <motion.div initial="hidden" ref={ref} animate={control} variants={fadeInRight}>
        <div>
          <h1 className="text-2xl font-medium">Our Travel Journal</h1>
          <div className='flex'>
            <p className='text-xsm mb-10 mt-0 text-[#FFC947]'>Desktop/mobile</p>
            <a href='https://github.com/Lucas18Brown/My-Travel-Journal' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-[#FFC947] hover:text-[#185ADB] ml-3 pb-0.5"/>
            </a>
          </div>
          <p className="text-sm">A Travel Journal, to log all your amazing trips</p>
          <div className='language'>
            <a href='https://rubyonrails.org/' target="_blank" rel='noopener noreferrer'>
              <p className='px-2 bg-[#FFC947] rounded my-2 mr-2 text-[#0A1931] hover:bg-[#185ADB] text-xsm'>Ruby on Rails</p>
            </a>
            <a href='https://stimulus.hotwired.dev/' target="_blank" rel='noopener noreferrer'>
              <p className='px-2 bg-[#FFC947] rounded my-2 mr-2 text-[#0A1931] hover:bg-[#185ADB] text-xsm'>React</p>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Project4;

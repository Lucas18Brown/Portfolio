import Carousel ,{ CarouselItem } from "../Carousel.jsx";
import Land from "../../assets/Ticlanding.png"
import Move from "../../assets/Ticmove.png"
import Win from "../../assets/Ticwin.png"
import React, { useState, useEffect } from "react";
import { useAnimationControls, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import fadeInLeft from "../Animation/FadeInLeft"
import fadeInRight from "../Animation/FadeInRight"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Project3() {

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
    <div className="project1" name="tic-tac-toe">
      <motion.div initial="hidden" ref={ref} animate={control} variants={fadeInLeft}>
        <div>
          <h1 className="text-[60px] font-medium">Tic-Tac-Toe</h1>
          <div className='flex'>
            <p className='text-xsm mb-10 mt-0 text-[#FFC947]'>Desktop</p>
            <a href='https://github.com/Lucas18Brown/tic-tac-toe' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-[#FFC947] hover:text-[#185ADB] ml-3 pb-0.5"/>
            </a>
          </div>
          <p className="text-sm">Classic game of Tic-Tac-Toe, created with react.</p>
          <div className='language'>
            <a href='https://reactjs.org/' target="_blank" rel='noopener noreferrer'>
              <p className='px-2 bg-[#FFC947] rounded my-2 mr-2 text-[#0A1931] hover:bg-[#185ADB] text-xsm'>React</p>
            </a>
          </div>
        </div>
      </motion.div>
      <div className='div-border'></div>
      <motion.div initial="hidden" ref={ref} animate={control} variants={fadeInRight}>
        <Carousel>
          <CarouselItem><img src={Land} alt='landing page' className='project-img'></img></CarouselItem>
          <CarouselItem><img src={Move} alt='move page' className='project-img'></img></CarouselItem>
          <CarouselItem><img src={Win} alt='win page' className='project-img'></img></CarouselItem>
        </Carousel>
      </motion.div>
    </div>
  )
}

export default Project3;

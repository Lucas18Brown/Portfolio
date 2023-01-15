import Carousel ,{ CarouselItem } from "../Carousel.js";
import HLanding from "../../assets/Hitman landing.png"
import Index from "../../assets/index.png"
import Show from "../../assets/show.png"
import React, { useState, useEffect } from "react";
import { useAnimationControls, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import fadeInLeft from "../Animation/FadeInLeft"
import fadeInRight from "../Animation/FadeInRight"

function Project2() {

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
    <div className="project2" name="hitwho">
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
          <h1 className="text-2xl font-medium">HitWho?</h1>
          <p className='text-xsm mb-10 mt-0 text-[#FFC947]'>Desktop</p>
          <p className="text-sm">A clone of Airbnb, but instead of renting rooms, we rent... Hitmen</p>
          <div className='language'>
            <a href='https://rubyonrails.org/' target="_blank" rel='noopener noreferrer'>
              <p className='px-2 bg-[#FFC947] rounded my-2 mr-2 text-[#0A1931] hover:bg-[#185ADB] text-xsm'>Ruby on Rails</p>
            </a>
            <a href='https://stimulus.hotwired.dev/' target="_blank" rel='noopener noreferrer'>
              <p className='px-2 bg-[#FFC947] rounded my-2 mr-2 text-[#0A1931] hover:bg-[#185ADB] text-xsm'>Stimulus</p>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Project2;

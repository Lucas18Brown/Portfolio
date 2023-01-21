import React, { useState, useEffect } from "react";
import { useAnimationControls, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import fadeInLeft from "./Animation/FadeInLeft"
import fadeInRight from "./Animation/FadeInRight"

function Welcome() {

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
      <div className='welcome-container'>
        <motion.div initial="hidden" ref={ref} animate={control} variants={fadeInLeft}>
          <div className='profile-name'>
            <p id="hey">Hey! Im,</p>
            <h1 id="name" className="xl:text-4xl lg:text-3xl md:text-[85px] text-2xl">Lucas <br></br> Brown</h1>
          </div>
        </motion.div>
        <div className='div-border'></div>
        <motion.div initial="hidden" ref={ref} animate={control} variants={fadeInRight}>
          <div className="info-container md:pt-16">
            <h2 id="job" className=" lg:text-xl md:text-base sm:text-xl text-base">Full Stack <br></br> Web Developer </h2>
            <p id='info' className="lg:text-base md:text-sm sm:text-base md:text-left text-center">Looking to create and design experiences that simplify peoples' lives.</p>
          </div>
        </motion.div>
      </div>
  )
}


export default Welcome

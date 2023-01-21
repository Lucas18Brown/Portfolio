import { useAnimationControls ,motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from "react";
import fadeInLeft from "./Animation/FadeInLeft"
import fadeInRight from "./Animation/FadeInRight"

function About() {

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
    <div className="about-container">
      <motion.div initial="hidden" ref={ref} animate={control}  variants={fadeInLeft} >
        <h1 className="about lg:text-2xl md:text-xl text-2xl font-light md:text-right">About</h1>
      </motion.div>
      <div className='div-border'></div>
        <div className="skills-about">
          <motion.div initial="hidden" ref={ref} animate={control} variants={fadeInRight}>
            <div id="about-info">
              <h2 id="job">Full Stack <br></br> Web Developer </h2>
              <p className="md:text-left text-justify xl:text-sm text-xsm">
                I recently graduated from Edge Hill University with a 2:1 in Business & Management.
                Throughout my final year of university and after I graduated,
                I realised that I had little interest in the employment options that my degree had prepared me for.
                After plenty of research, I made the decision to take a chance on a 10-week course at LeWagon London in order to pursue a career in web development.
                It was a fantastic decision that confirmed my desire to pursue this as a career.
                I now have a background with Ruby and Ruby on Rails, although some of my most recent projects have been developed using React.
                As a developer, my goal is to create and design experiences that simplify people's lives.
                I am also, a huge football fan, especially of Everton Football Club, where you may (sometimes) see me supporting them.
              </p>
            </div>
          </motion.div>
          <motion.div initial="hidden" ref={ref} animate={control} variants={fadeInRight}>
            <div className="md:pt-10 md:px-0 sm:px-14">
              <h2 className="skills md:pb-5 sm:pb-14 sm:pt-0 pt-10">Skills</h2>
              <div className="skills-info">
                <p className="p-2 bg-[#EFEFEF] rounded m-2 grow xl:text-sm text-xsm text-[#0A1931]">Ruby</p>
                <p className="p-2 bg-[#EFEFEF] rounded m-2 grow xl:text-sm text-xsm text-[#0A1931]">Ruby on Rails</p>
                <p className="p-2 bg-[#EFEFEF] rounded m-2 grow xl:text-sm text-xsm text-[#0A1931]">Html/CSS</p>
                <p className="p-2 bg-[#EFEFEF] rounded m-2 grow xl:text-sm text-xsm text-[#0A1931]">Heroku</p>
                <p className="p-2 bg-[#EFEFEF] rounded m-2 grow xl:text-sm text-xsm text-[#0A1931]">SCSS</p>
                <p className="p-2 bg-[#EFEFEF] rounded m-2 grow xl:text-sm text-xsm text-[#0A1931]">React</p>
                <p className="p-2 bg-[#EFEFEF] rounded m-2 grow xl:text-sm text-xsm text-[#0A1931]">Postgresql</p>
                <p className="p-2 bg-[#EFEFEF] rounded m-2 grow xl:text-sm text-xsm text-[#0A1931]">Github</p>
                <p className="p-2 bg-[#EFEFEF] rounded m-2 grow xl:text-sm text-xsm text-[#0A1931]">Git</p>
                <p className="p-2 bg-[#EFEFEF] rounded m-2 grow xl:text-sm text-xsm text-[#0A1931]">JavaScript</p>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default About

import Carousel ,{ CarouselItem } from "../Carousel.js";
import HLanding from "../../assets/Hitman landing.png"
import Index from "../../assets/index.png"
import Show from "../../assets/show.png"

function Project2() {
  return (
    <div className="project1">
      <Carousel>
        <CarouselItem><img src={HLanding} alt='landing page' className='project-img'></img></CarouselItem>
        <CarouselItem><img src={Index} alt='index page' className='project-img'></img></CarouselItem>
        <CarouselItem><img src={Show} alt='new page' className='project-img'></img></CarouselItem>
      </Carousel>
      <div className='div-border'></div>
      <div className='project-info'>
        <h1 id='projects-title'>HitWho?</h1>
        <p className='text-sm mb-10 mt-0 text-[#FFC947]'>Desktop</p>
        <p>A clone of Airbnb, but instead of renting rooms, we rent... Hitmen</p>
        <div className='language'>
          <a href='https://rubyonrails.org/' target="_blank" rel='noopener noreferrer'>
            <p className='mr-5 text-[#FFC947] text-sm hover:text-[#185ADB]'>Ruby on Rails</p>
          </a>
          <a href='https://stimulus.hotwired.dev/' target="_blank" rel='noopener noreferrer'>
            <p className='mr-5 text-[#FFC947] text-sm hover:text-[#185ADB]'>Stimulus</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project2;

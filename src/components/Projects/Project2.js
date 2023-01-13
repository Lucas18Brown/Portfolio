import Carousel ,{ CarouselItem } from "../Carousel.js";
import HLanding from "../../assets/Hitman landing.png"
import Index from "../../assets/index.png"
import Show from "../../assets/show.png"

function Project2() {
  return (
    <div className="project2">
      <Carousel>
        <CarouselItem><img src={HLanding} alt='landing page' className='project-img'></img></CarouselItem>
        <CarouselItem><img src={Index} alt='index page' className='project-img'></img></CarouselItem>
        <CarouselItem><img src={Show} alt='new page' className='project-img'></img></CarouselItem>
      </Carousel>
      <div className='div-border'></div>
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
    </div>
  )
}

export default Project2;

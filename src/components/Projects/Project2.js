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
        <p>A clone of Airbnb, but instead of renting rooms, we rent... Hitmen</p>
      </div>
    </div>
  )
}

export default Project2;

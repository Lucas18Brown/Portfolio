import Carousel ,{ CarouselItem } from "../Carousel.js";
import Land from "../../assets/Ticlanding.png"
import Move from "../../assets/Ticmove.png"
import Win from "../../assets/Ticwin.png"

function Project3() {
  return (
    <div className="project1">
      <div className='project-info'>
        <h1>Tic-Tac-Toe</h1>
        <p>Classic game of Tic-Tac-Toe, created with react.</p>
      </div>
      <div className='div-border'></div>
      <Carousel>
        <CarouselItem><img src={Land} alt='landing page' className='project-img'></img></CarouselItem>
        <CarouselItem><img src={Move} alt='move page' className='project-img'></img></CarouselItem>
        <CarouselItem><img src={Win} alt='win page' className='project-img'></img></CarouselItem>
      </Carousel>
    </div>
  )
}

export default Project3;

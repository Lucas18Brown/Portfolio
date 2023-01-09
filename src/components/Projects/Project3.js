import Carousel ,{ CarouselItem } from "../Carousel.js";
import Land from "../../assets/Ticlanding.png"
import Move from "../../assets/Ticmove.png"
import Win from "../../assets/Ticwin.png"

function Project3() {
  return (
    <div className="project1">
      <div className='project-info'>
        <h1 className="m-0">Tic-Tac-Toe</h1>
        <p className='text-sm mb-10 mt-0 text-[#FFC947]'>Desktop</p>
        <p>Classic game of Tic-Tac-Toe, created with react.</p>
        <div className='language'>
          <a href='https://reactjs.org/' target="_blank" rel='noopener noreferrer'>
            <p className='mr-2 text-[#FFC947] text-sm hover:text-[#185ADB]'>React</p>
          </a>
        </div>
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

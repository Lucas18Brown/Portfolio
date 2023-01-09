import Carousel, { CarouselItem } from '../Carousel.js'
import Landing from '../../assets/Landing.png'
import Home from '../../assets/Home.png'
import Edit from '../../assets/Edit.png'
import New from '../../assets/New.png'

function Project1() {
  return (
    <div className="project1">
      <div className='project-info'>
        <h1 id='projects-title'>PxlSounds</h1>
        <p className='text-sm mb-10 mt-0 text-[#FFC947]'>Desktop</p>
        <p>A white-noise generator that helps people block distractions around them in order to focus on their tasks.</p>
        <p>In PxlSounds you can choose different worlds that have specific themes around them, combine different sounds from those worlds in order to create your perfect environment for work.</p>
        <div className='language'>
          <a href='https://rubyonrails.org/' target="_blank" rel='noopener noreferrer'>
            <p className='mr-5 text-[#FFC947] text-sm hover:text-[#185ADB]'>Ruby on Rails</p>
          </a>
          <a href='https://stimulus.hotwired.dev/' target="_blank" rel='noopener noreferrer'>
            <p className='mr-5 text-[#FFC947] text-sm hover:text-[#185ADB]'>Stimulus</p>
          </a>
          <a href='https://www.heroku.com/' target="_blank" rel='noopener noreferrer'>
            <p className='mr-5 text-[#FFC947] text-sm hover:text-[#185ADB]'>Heroku</p>
          </a>
        </div>
      </div>
      <div className='div-border'></div>
      <Carousel>
        <CarouselItem><img src={Landing} alt='landing page' className='project-img'></img></CarouselItem>
        <CarouselItem><img src={Home} alt='home page' className='project-img'></img></CarouselItem>
        <CarouselItem><img src={New} alt='new page' className='project-img'></img></CarouselItem>
        <CarouselItem><img src={Edit} alt='edit page' className='project-img'></img></CarouselItem>
      </Carousel>
    </div>
  )
}

export default Project1
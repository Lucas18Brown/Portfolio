import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import { Link } from 'react-scroll'

function Projects() {
  return (
    <div className="projects">
      <div className="project-showcase">
        <div className="md:text-left text-center">
          <h1 className="lg:text-2xl md:text-xl sm:text-2xl text-xl font-medium">Project <br></br> Showcase</h1>
          <p className="md:text-left text-justify lg:text-sm md:text-xsm sm:text-sm text-xsm md:px-0 px-8">
            A selection of my most recent and notable projects.
            Each project represents a unique challenge that I have successfully tackled,
            and I am proud to present the results of my hard work and dedication.
          </p>
        </div>
        <div className='div-border'></div>
        <div className="project-items">
          <div className="pxl-sounds">
            <h2 className="mb-4 text-base">PxlSounds</h2>
            <p className='my-2 lg:text-sm md:text-xsm sm:text-sm text-xsm'>A white-noise generator that helps people block distractions around them in order to focus on their tasks.</p>
            <Link activeClass='active' offset={-80} to='pxlsounds'>
              <button className="project-button">Go</button>
            </Link>
          </div>
          <div className="hitwho">
            <h2 className="mb-4 mt-24 text-base">HitWho?</h2>
            <p className='my-2 lg:text-sm md:text-xsm sm:text-sm text-xsm'>A clone of Airbnb, but instead of renting, rooms we rent... Hitmen</p>
            <Link activeClass='active' offset={-80} to='hitwho'>
              <button className="project-button">Go</button>
            </Link>
          </div>
          <div className="tic">
            <h2 className="mb-4 mt-24 text-base">Tic-Tac-Toe</h2>
            <p className='my-2 lg:text-sm md:text-xsm sm:text-sm text-xsm'>Classic game of Tic-Tac-Toe, created with react.</p>
            <Link activeClass='active' offset={-80} to='tic-tac-toe'>
              <button className="project-button" onClick={() => { window.scrollTo({ top: 4400, behavior: 'smooth'})}}>Go</button>
            </Link>
          </div>
        </div>
      </div>
      <Project1/>
      <Project2/>
      <Project3/>
    </div>
  )
};

export default Projects;

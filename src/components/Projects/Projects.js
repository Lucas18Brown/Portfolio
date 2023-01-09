import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

function Projects() {
  return (
    <div className="projects">
      <div className="project-showcase">
        <div className="title-info">
          <h1 id="projects-title">Project <br></br> Showcase</h1>
          <p id="projects-info">
            A selection of my most recent and notable projects.
            Each project represents a unique challenge that I have successfully tackled,
            and I am proud to present the results of my hard work and dedication.
          </p>
        </div>
        <div className='div-border'></div>
        <div className="project-items">
          <div className="pxl-sounds">
            <h2 className="mb-4">PxlSounds</h2>
            <p className='my-0.5'>A white-noise generator that helps people block distractions around them in order to focus on their tasks.</p>
            <button className="project-button">Go</button>
          </div>
          <div className="hitwho">
            <h2 className="mb-4 mt-24">HitWho?</h2>
            <p className='my-0.5'>A clone of Airbnb, but instead of renting, rooms we rent... Hitmen</p>
            <button className="project-button">Go</button>
          </div>
          <div className="tic">
            <h2 className="mb-4 mt-24">Tic-Tac-Toe</h2>
            <p className='my-0.5'>Classic game of Tic-Tac-Toe, created with react.</p>
            <button className="project-button">Go</button>
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

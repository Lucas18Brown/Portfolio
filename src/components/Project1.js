import Landing from '../assets/Landing.png'
// import Home from '../assets/Home.png'

function Project1() {
  return (
    <div className="project1">
      <div>
        <h1 id='projects-title'>PxlSounds</h1>
        <p>A white-noise generator that helps people block distractions around them in order to focus on their tasks.</p>
        <p>In PxlSounds you can choose different worlds that have specific themes around them, combine different sounds from those worlds in order to create your perfect environment for work.</p>
      </div>
      <div className='div-border'></div>
      <img src={Landing} alt="landing page" className='pxlsounds-img1'></img>
    </div>
  )
}

export default Project1

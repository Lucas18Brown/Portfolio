
function About() {
  return (
    <div className="about-container">
      <h1 className="about">About</h1>
      <div className='div-border'></div>
      <div id="about-info">
        <h1 id="job">Full Stack <br></br> Web Developer </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div id="skills-info">
        <h1 className="skills">Skills</h1>
        <ul>
          <li>Ruby</li>
          <li>Rails</li>
          <li>Html</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>Postgresql</li>
        </ul>
      </div>
    </div>
  )
}

export default About

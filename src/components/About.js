
function About() {
  return (
    <div className="about-container">
      <h1 className="about text-2xl font-light">About</h1>
      <div className='div-border'></div>
      <div id="about-info">
        <h2 id="job">Full Stack <br></br> Web Developer </h2>
        <p className="md:text-left text-justify md:text-sm text-xsm">
          I recently graduated from Edge Hill University with a 2:1 in Business & Management.
          Throughout my final year of university and after I graduated,
          I realised that I had little interest in the employment options that my degree had prepared me for.
          After plenty of research, I made the decision to take a chance on a 10-week course at LeWagon London in order to pursue a career in web development.
          It was a fantastic decision that confirmed my desire to pursue this as a career.
          I now have a background with Ruby and Ruby on Rails, although some of my most recent projects have been developed using React.
          As a developer, my goal is to create and design experiences that simplify people's lives.
          I am also, a huge football fan, especially of Everton Football Club, where you may (sometimes) see me supporting them.
        </p>
      </div>
      <div className="pt-10">
        <h2 className="skills">Skills</h2>
        <div className="skills-info">
          <p className="p-2 bg-[#EFEFEF] rounded m-2 grow text-[#0A1931]">Ruby</p>
          <p className="p-2 bg-[#EFEFEF] rounded m-2 grow text-[#0A1931]">Ruby on Rails</p>
          <p className="p-2 bg-[#EFEFEF] rounded m-2 grow text-[#0A1931]">Html/CSS</p>
          <p className="p-2 bg-[#EFEFEF] rounded m-2 grow text-[#0A1931]">Heroku</p>
          <p className="p-2 bg-[#EFEFEF] rounded m-2 grow text-[#0A1931]">SCSS</p>
          <p className="p-2 bg-[#EFEFEF] rounded m-2 grow text-[#0A1931]">React</p>
          <p className="p-2 bg-[#EFEFEF] rounded m-2 grow text-[#0A1931]">Postgresql</p>
          <p className="p-2 bg-[#EFEFEF] rounded m-2 grow text-[#0A1931]">Github</p>
          <p className="p-2 bg-[#EFEFEF] rounded m-2 grow text-[#0A1931]">Git</p>
          <p className="p-2 bg-[#EFEFEF] rounded m-2 grow text-[#0A1931]">JavaScript</p>
        </div>
      </div>
    </div>
  )
}

export default About

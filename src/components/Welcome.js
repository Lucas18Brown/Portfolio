
function Welcome(props) {
  return (
      <div className='welcome-container'>
        <div className='profile-name'>
          <p id="hey">Hey! Im,</p>
          <h1 id="name" className="xl:text-4xl md:text-3xl text-2xl">Lucas <br></br> Brown</h1>
        </div>
        <div className='div-border'></div>
        <div className="info-container md:pt-16">
          <h2 id="job" className=" md:text-xl text-base">Full Stack <br></br> Web Developer </h2>
          <p id='info' className="md:text-base text-sm md:text-left text-center">Looking to create and design experiences that simplify peoples' lives.</p>
        </div>
      </div>
  )
}


export default Welcome



function Welcome() {
  return (
      <div className='welcome-container'>
        <div className='profile-name'>
          <p id="hey">Hey! Im,</p>
          <h1 id="name" className="xl:text-4xl lg:text-3xl md:text-[85px] text-2xl">Lucas <br></br> Brown</h1>
        </div>
        <div className='div-border'></div>
        <div className="info-container md:pt-16">
          <h2 id="job" className=" lg:text-xl md:text-base sm:text-xl text-base">Full Stack <br></br> Web Developer </h2>
          <p id='info' className="lg:text-base md:text-sm sm:text-base md:text-left text-center">Looking to create and design experiences that simplify peoples' lives.</p>
        </div>
      </div>
  )
}


export default Welcome

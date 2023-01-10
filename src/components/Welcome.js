
function Welcome(props) {
  return (
      <div className='welcome-container'>
        <div className='profile-name'>
          <p className="text-right">Hey! Im,</p>
          <h1 id="name">Lucas <br></br> Brown</h1>
        </div>
        <div className='div-border'></div>
        <div className="info-container">
          <h2 id="job">Full Stack <br></br> Web Developer </h2>
          <p id='info'>Looking to create and design experiences that simplify peoples' lives.</p>
        </div>
      </div>
  )
}


export default Welcome

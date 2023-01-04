import { TypeAnimation } from 'react-type-animation';

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     entry.target.classList.toggle('show', entry.isIntersecting);
//   })
// })

// const hiddenElements = document.querySelectorAll('hidden');
// hiddenElements.forEach((el) => observer.observe(el));

function Welcome(props) {
  return (
      <div className='welcome-container'>
        <div className='profile-name'>
          <p style={{ fontWeight: '300', textAlign: 'right', paddingRight: '10px', fontSize: '15px'}}>Hey! Im,</p>
          <h1>Lucas <br></br> Brown</h1>
        </div>
        <div className='div-border'></div>
        <div style={{textAlign: 'left', fontWeight: '300', paddingLeft: '140px'}}>
          <p id='info'>A <span style={{ fontWeight: '500', color: '#FFC947'}}> Full Stack Web Developer </span> looking to create and design experiences that simplify peoples' lives.</p>
          <TypeAnimation
            sequence={[
              1000,
              'Rails',
              1000,
              'React',
              1000,
              'Html',
              1000,
              'Heroku',
              1000,
              'CSS',
              1000,
              'SCSS',
              1000,
              'JavaScript',
              1000,
              'Postgresql',
              1000,
              'Ruby',

              () => {
                console.log('Done typing!'); // Place optional callbacks anywhere in the array
              }
            ]}
            speed={1}
            deletionSpeed={1}
            wrapper="TypeAnimation"
            cursor={true}
            style={{ fontSize: '32px', color: '#FFC947', fontWeight: '500'}}
          />
        </div>
      </div>
  )
}


export default Welcome

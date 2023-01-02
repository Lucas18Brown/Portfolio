import { TypeAnimation } from 'react-type-animation';

function Welcome(props) {
  return (
      <div className='welcome-container'>
        <div className='Profile-name'>
          <h1 id='name'>Lucas <br></br> Brown</h1>
        </div>
        <div style={{textAlign: 'center'}}>
          <p id='info'>A Full Stack Web Developer looking to create and design experiences that simplify peoples' lives.</p>
          <TypeAnimation
            sequence={[
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
            style={{ fontSize: '80px'}}
          />
        </div>
      </div>
  )
}


export default Welcome

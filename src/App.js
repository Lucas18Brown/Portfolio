import Navbar from './components/Navbar.js';
import Welcome from './components/Welcome.js';
import About from './components/About.js';
import Projects from './components/Projects/Projects.js';
import Footer from './components/Footer.js';
import Contacts from './components/Contacts.js';

const App = () => {
  return (
    <div className='main-container'>
    <Navbar/>
    <Welcome/>
    <About/>
    <Projects/>
    <Contacts/>
    <Footer/>
  </div>
  );
}

export default App;

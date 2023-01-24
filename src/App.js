import Navbar from './components/Navbar.jsx';
import Welcome from './components/Welcome.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer.jsx';
import Contacts from './components/Contacts.jsx';

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

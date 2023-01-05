import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer.js';
import './index.css';
import Navbar from './components/Navbar.js';
import Welcome from './components/Welcome.js';
import About from './components/About.js';
// import { useInView } from 'react-intersection-observer';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faGithub, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faGithub, faCoffee)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='container'>
    <Navbar/>
    <Welcome/>
    <About/>
    <Footer/>
  </div>
);

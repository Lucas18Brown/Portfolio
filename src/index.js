import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './footer';
import './index.css';
import Navbar from './navbar';
import Welcome from './welcome.js';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faGithub, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faGithub, faCoffee)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='main-container'>
    <div className='container'>
      <Navbar/>
      <Welcome/>
      <div className='border'></div>
    </div>
    <Footer/>
  </div>
);

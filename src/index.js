import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar.js';
import Welcome from './components/Welcome.js';
import About from './components/About.js';
import Projects from './components/Projects/Projects.js';
import Footer from './components/Footer.js';
import Contacts from './components/Contacts.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='main-container'>
    <Navbar/>
    <Welcome/>
    <About/>
    <Projects/>
    <Contacts/>
    <Footer/>
  </div>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer.js';
import './index.css';
import Navbar from './components/Navbar.js';
import Welcome from './components/Welcome.js';
import About from './components/About.js';
import Projects from './components/Projects/Projects.js';
import Project1 from './components/Projects/Project1.js';
import Project2 from './components/Projects/Project2.js';
import Project3 from './components/Projects/Project3.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='container'>
    <Navbar/>
    <Welcome/>
    <About/>
    <Projects/>
    <Project1/>
    <Project2/>
    <Project3/>
    <Footer/>
  </div>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer.js';
import './index.css';
import Navbar from './components/Navbar.js';
import Welcome from './components/Welcome.js';
import About from './components/About.js';
import Project from './components/Project.js';
import Project1 from './components/Project1.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='container'>
    <Navbar/>
    <Welcome/>
    <About/>
    <Project/>
    <Project1/>
    <Footer/>
  </div>
);

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
// import Header from '../src/components/Header/Header';
import Home from '../src/Components/Home/Home';
import Contact from '../src/Components/Contact/Contact';
import AboutUs from '../src/Components/AboutUs/AboutUs';
import Services from '../src/Components/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../src/Components/Hero/Hero';





function App() {
  return (
    <div className="my-div">
      <Navbar/>
      <Hero/>
      {/* <Home/> */}
      {/* <Contact/>
      <AboutUs/>
      <Services/> */}
    </div>
  );
}

export default App;

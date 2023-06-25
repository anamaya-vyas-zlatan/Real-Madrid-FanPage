import React from 'react';
import bgImage from '../assets/luka.png';
import logo from '../assets/logo.png';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
  <div className = 'home-page'>
    <h3 className="header">
      Real Madrid
    </h3>
    <Navbar/>
    <img src = { logo } alt = "Real Madrid Logo" className="logo" />
    <img src = { bgImage } alt = "home-page" className='home-image' />
  </div>
  )
}

export default Home

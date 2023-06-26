import React from 'react';
import bgImage from '../assets/luka.png';
import logo from '../assets/logo4.png';
import Navbar from '../components/Navbar';
import HomeTitle from '../components/HomeTitle';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  return (
  <div className = 'home-page'>
    <img src = { logo } alt = "Real Madrid Logo" className="logo" />
    <h3 className="header">
      Real Madrid
    </h3>
    <Navbar/>
    <HomeTitle />
    <HomeInfo />
    <img src = { bgImage } alt = "home-page" className='home-image' />
  </div>
  )
}

export default Home

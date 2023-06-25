import React from 'react'
import bgImage from '../assets/modric.png'
import {Typography} from '@mui/material'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
  <div className = 'Home-Page'>
    <img src = {bgImage} alt = "home-page" className='home-image' />
    <Typography className='first-name' variant="h3" gutterBottom fontWeight="bold" style={{
          position: 'absolute',
          top: '100px',
          left: '120px',
          color: 'white'
        }}>
        Real Madrid
    </Typography>
    <Navbar/>
    
  </div>
  )
}

export default Home

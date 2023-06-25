import React from 'react'
import {Stack} from '@mui/material'
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className= 'navbar'>
      <Stack direction ="column">
        <a href="/" className="navlink">CALENDAR</a>
        <a href="/" className="navlink">TEAM</a>
        <a href="/" className="navlink">TROPHIES</a>
        <a href="/" className="navlink">TRANSFERS</a>
        <a href="/" className="navlink">HOME</a>
      </Stack>
    </div>
  )
}

export default Navbar

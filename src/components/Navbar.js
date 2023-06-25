import React from 'react'
<<<<<<< HEAD
import {Link} from 'react-router-dom'
import {Stack } from '@mui/material'
=======
import {Stack} from '@mui/material'
// import { Link } from 'react-router-dom';
>>>>>>> e517622038593f47ab17ef5a19923d311757dd39

const Navbar = () => {
  return (
    <div className= 'navbar'>
      <Stack direction ="column">
<<<<<<< HEAD
      <a href =  "/" style={{color: 'white', fontSize: '20px'}} >Calender</a>
      <a href =  "/" style={{color: 'white', fontSize: '20px'}} >Home</a>
      <a href =  "/" style={{color: 'white', fontSize: '20px'}} >Home</a>
=======
        <a href="/" className="navlink">CALENDAR</a>
        <a href="/" className="navlink">TEAM</a>
        <a href="/" className="navlink">TROPHIES</a>
        <a href="/" className="navlink">TRANSFERS</a>
        <a href="/" className="navlink">HOME</a>
>>>>>>> e517622038593f47ab17ef5a19923d311757dd39
      </Stack>
    </div>
  )
}

export default Navbar

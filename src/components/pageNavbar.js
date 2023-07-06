import React from 'react'
import {Stack} from '@mui/material'
import { Link } from 'react-router-dom';

const pageNavbar = () => {
  return (
    <div className= 'navbar'>
      <Stack direction ="column">
        <Link to="/" className="navlink">CALENDAR</Link>
        <Link to="/" className="navlink">TEAM</Link>
        <Link to="/" className="navlink">TROPHIES</Link>
        <Link to="/" className="navlink">TRANSFERS</Link>
        <Link to="/" className="navlink">HOME</Link>
      </Stack>
    </div>
  )
}

export default pageNavbar

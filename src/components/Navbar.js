import React from 'react'

import {Stack } from '@mui/material'

const Navbar = () => {
  return (
    <div className= 'first-name'style={{top: '160px', left:'120px', }}>
      <Stack direction ="column">
      <a href =  "/" style={{color: 'white', fontSize: '20px'}} >Home</a>
      <a href =  "/" style={{color: 'white', fontSize: '20px'}} >Home</a>
      <a href =  "/" style={{color: 'white', fontSize: '20px'}} >Home</a>
      </Stack>
    </div>
  )
}

export default Navbar

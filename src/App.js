import React from 'react'
import './App.css'
import Home from './pages/Home' 
// import HomeInfo from './components/HomeInfo'
import Trophies from './pages/Trophies'
import { Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="trophies" element={ <Trophies/> } />
      </Routes>
    </div>
  )
}

export default App

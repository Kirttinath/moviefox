import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Hero.css'
import MovieSection from '../MovieSection/MovieSection'

export default function Hero() {
  return (
    <div className='Hero'>
      <NavBar/>
      <MovieSection />
    </div>
  )
}

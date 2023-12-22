import React from 'react'
import './Movies.css'
import DashBoard from '../../components/Dashboard/DashBoard'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'

export default function Movies() {
  return (
    <div className='Movies'>
      
      <DashBoard/>
      <Hero/>
    </div>
  )
}

import React from 'react'
import './MyList.css'
import DashBoard from '../../components/Dashboard/DashBoard'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'

export default function MyList() {
  return (
    <div className='MyList'>
      
        <DashBoard/>
        <Hero/>
    </div>
  )
}

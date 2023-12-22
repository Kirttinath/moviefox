import React from 'react'
import DashBoard from '../../components/Dashboard/DashBoard'
import Hero from '../../components/Hero/Hero'
import './Home.css'
export default function Home() {
  return (
    <div className='Home'>
        <DashBoard/>
        <Hero />
    </div>
  )
}

import React from 'react'
import './Style.css'
import user from "../../assets/user.png"


export default function User() {
  return (
    <div className='User'>
        <img src={user} alt="" />
        <h2>Name</h2>
    </div>
  )
}

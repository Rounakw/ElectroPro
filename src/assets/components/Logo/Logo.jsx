import React from 'react'
import './Logo.css'
import icon from "./assets/logoicon.png" 

function Logo() {
  return (
    <div className='logo'>
        <div className='logo-img-sec'>
        <img src={icon} alt="icon"/>
        <span className='logo-first'>PRO</span>
        </div>
        <div className="logo-full-name">
            <span>ElectroPro</span>
        </div>
    </div>
  )
}

export default Logo
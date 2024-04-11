import React from 'react'
import mac from './assets/mac.png'
import './MacRefurbished.css'
import { Link } from 'react-router-dom'

function MacRefurbished() {
  return <>
  <div className='mac-refurbished'>
        
        <div className="mac-right">
            <h2 className='refurbished-mac-head'>Refurbished Mac Book</h2>
            <p className='refurbished-mac-description'>
            Welcome to our refurbished Mac collection, where quality meets affordability. Our meticulously curated selection of refurbished Mac computers offers you the best of both worlds – top-notch performance and significant savings. Each Mac undergoes rigorous testing and refurbishment processes to ensure it meets our high standards, providing you with a reliable computing experience without compromising on quality.
            </p>
            <Link to={"maintanence"}> 
            <button >Learn More</button>
            </Link>
    </div>
    <img src={mac} alt="macimg" />
    </div>

  <div className='mac-refurbished2'>
    <img src={mac} alt="macimg2" />
        
        <div className="mac-right2">
            <h2 className='refurbished-mac-head2'>Refurbished Mac Book</h2>
            <p className='refurbished-mac-description2'>
            Welcome to our refurbished Mac collection, where quality meets affordability. Our meticulously curated selection of refurbished Mac computers offers you the best of both worlds – top-notch performance and significant savings. Each Mac undergoes rigorous testing and refurbishment processes to ensure it meets our high standards, providing you with a reliable computing experience without compromising on quality.
            </p>
            <button >Learn More</button>
    </div>
    </div>


    </>

  
}

export default MacRefurbished
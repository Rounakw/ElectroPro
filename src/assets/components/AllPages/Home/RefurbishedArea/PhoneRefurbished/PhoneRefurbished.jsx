import React from 'react'
import phone from './assets/mobile.png'
import './PhoneRefurbished.css'
import { Link } from 'react-router-dom'

function PhoneRefurbished() {
  return (
    <div className='phone-refurbished'>
        <img src={phone} alt="Phoneimg" />
        <div className="phone-right">
            <h2 className='refurbished-phone-head'>Refurbished iPhone</h2>
            <p className='refurbished-phone-description'>
            Discover unparalleled value with our premium refurbished iPhones. Each device undergoes a rigorous refurbishment process, ensuring optimal functionality and performance. With a meticulous inspection and testing procedure, you can trust that your refurbished iPhone meets the highest standards of quality and reliability.
            Upgrade your smartphone experience without breaking the bank. Explore our collection of premium refurbished iPhones today and join countless satisfied customers who've made the smart choice for quality and affordability.</p>
            <Link to={"maintanence"}> 
            <button>Learn more</button>
            </Link>
        </div>

    </div>
  )
}

export default PhoneRefurbished
import React from 'react'
import PhoneRefurbished from './PhoneRefurbished/PhoneRefurbished'
import MacRefurbished from './MacRefurbished/MacRefurbished'

function RefurbishedProducts() {
  return (
    <div className='container' style={{margin:"100px 0px 0px 0px"}}>
        <PhoneRefurbished/>
        <MacRefurbished/>
    </div>
  )
}

export default RefurbishedProducts
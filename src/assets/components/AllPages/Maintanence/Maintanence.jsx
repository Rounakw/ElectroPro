import React from 'react'
import './Maintanence.css'
import setting from './assets/setting.png'
function Maintanence() {
    return (
        <div className='Main-maintanence'>
            <img className='setimg' src={setting} alt="" />

            <div className="text">
                <div className="maintanence-head">
                    <p>We are</p>
                    <p>Under Maintanence🤖</p>
                </div>

                <div className='maintanence-description'>
                    "Dear Visitor,
                    Thank you for visiting our website. We are currently undergoing maintenance to enhance your browsing experience and improve our services. We apologize for any inconvenience this may cause.
                    Please check back soon, as we'll be back online shortly with exciting updates and new features.
                    Thank you for your patience and understanding.
                    Best regards,"
                    <p className='b-name'>Electro<span>Pro</span></p>
                </div>


                <div className="exploresec">
                    <p>🔴Explore Our Other Section...</p>
                </div>
            </div>
        </div>
    )
}

export default Maintanence
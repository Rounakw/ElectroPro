import React from 'react'
import Logo from '../../../Logo/Logo'
import './Footer.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Footer() {
  return (
    <div className='Footer'>

      {/* footer */}
      <div className="footer-up">

        <div className="footer-up-left">
          <p className='left-heading'>Sign up & get 10% off</p>
          <div className="sign-in-input">
            <input type="text" placeholder='Email' />
            <button>Sign up</button>
          </div>
          <p className='fast'>*New customers only, Offer lasts 30 days. see Terms.</p>
        </div>

        <div className="footer-up-right">
          <span className='head'>My Account</span>
          <span className='head'>Support</span>
          <span className='head'>StackCommerce</span>
          <span>Profile</span>
          <span>Contact</span>
          <span>About</span>
          <span>Account</span>
          <span>FAQs</span>
          <span>Publishers</span>
          <span>Purchases</span>
          <span>Shipping</span>
          <span>Affiliates</span>
          <span>Credits</span>
          <span>Terms</span>
          <span>Blog</span>
          <span>Preferences</span>
          <span>Privacy</span>
          <span>Careers</span>

        </div>
      </div>

      <div className="footer-down">
        <div className="down-left">
          <p className="poweredby">Powered By</p>
          <p className='b-name'>Electro<span>Pro</span></p>
        </div>
        <div className="down-middle">
          <p>Made in kolkata, IN</p>
          <p>Copyright © 2023 ElectroPro.com, All Rights Reserve</p>

        </div>
        <div className="down-right">
          <Logo />

        </div>
      </div>
      <ArrowUpwardIcon sx={{ backgroundColor:"rgb(24 24 24)", color: "black", width: "40px", height: "40px", borderRadius: "5px" }} className='uparraow' />
    </div>
  )
}

export default Footer
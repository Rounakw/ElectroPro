import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import './Navbar.css'
import menu from "./assets/hamburger.png"
import cross from "./assets/cross.svg"
import home from "./assets/home.png"
import product from "./assets/product.png"
import cart from "./assets/cart.png"
import contact from "./assets/contact.png"
function Navbar() {
let totalCart = 5

    const [show, setShow] = useState(false)
    function handleToggleMenu() {
        setShow(!show)
    }
    return (
        <>
        <div className='navbar'>
            <Logo />
            <div className='navbarpageslist'>
                <p className='navitem-home'>Home</p>
                <p className='navitem-produc'>Product</p>
                <p className='navitem-cart'>
                    Cart
                <span className='totalcart'>{totalCart}</span></p>
                
                <p className='navitem-contact'>Contact us</p>
                
            </div>
            <div className="mobile-right">
                <div className='navbar-signin'>
                    <button >Sign In</button>
                </div>

                <div className='navbar-hamburger-menu'>
                    <img src={show ? cross : menu} onClick={handleToggleMenu} alt="" />
                </div>
            </div>

            <div className={show?'hamburgermenu-slider':'hidden'}>
                <br />
                <div className='hamburger-menu-icon'>
                <Logo />
                </div>
                <br />
                <p className='navitem-home'><img src={home} alt="" />Home</p>
                <p className='navitem-product'><img src={product} alt="" />Product</p>
                <p className='navitem-cart' style={{position:"relative"}}><img src={cart} alt="" />Cart
                <span className='totalcart'>{totalCart}</span></p>
                <p className='navitem-contact'><img src={contact} alt="" />Contact us</p>
            </div>
        </div>
        </>
    )
}

export default Navbar
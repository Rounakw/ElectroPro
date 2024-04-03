import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import './Navbar.css'
import menu from "./assets/hamburger.png"
import cross from "./assets/cross.svg"
import home from "./assets/home.png"
import product from "./assets/product.png"
import cart from "./assets/cart.png"
import contact from "./assets/contact.png"
import { NavLink } from 'react-router-dom'
function Navbar() {
    let totalCart = 0

    const [show, setShow] = useState(false)
    function handleToggleMenu() {
        setShow(!show)
    }
    return (
        <>
            <div className='navbar'>
                <NavLink to={''}>
                    <Logo />
                </NavLink>

                <div className='navbarpageslist'>
                    <p className='navitem-home'>
                        <NavLink to={"home"} style={({ isActive }) => { return { color: isActive ? "red" : "white", textDecoration: "none" } }}>
                            Home
                        </NavLink>
                    </p>

                    <p className='navitem-produc'>
                        <NavLink to={"product"} style={({ isActive }) => { return { color: isActive ? "red" : "white", textDecoration: "none" } }}>Product
                        </NavLink>
                    </p>
                    <p className='navitem-cart'>
                        <NavLink to={"cart"} style={({ isActive }) => { return { color: isActive ? "red" : "white", textDecoration: "none" } }}>
                            Cart
                        </NavLink>
                        <span className='totalcart'>{totalCart}</span>
                    </p>

                    <p className='navitem-contact'>
                    <NavLink to={"contact"} style={({ isActive }) => { return { color: isActive ? "red" : "white", textDecoration: "none" } }}>
                        Contact us
                        </NavLink>
                        </p>

                </div>
                <div className="mobile-right">
                    <div className='navbar-signin'>
                        <button >Sign In</button>
                    </div>

                    <div className='navbar-hamburger-menu'>
                        <img src={show ? cross : menu} onClick={handleToggleMenu} alt="" />
                    </div>
                </div>

                <div className={show ? 'hamburgermenu-slider' : 'hidden'}>
                    <br />
                    <div className='hamburger-menu-icon'>
                        <Logo />
                    </div>
                    <br />
                    <p className='navitem-home'><img src={home} alt="" />Home</p>
                    <p className='navitem-product'><img src={product} alt="" />Product</p>
                    <p className='navitem-cart' style={{ position: "relative" }}><img src={cart} alt="" />Cart
                        <span className='totalcart'>{totalCart}</span></p>
                    <p className='navitem-contact'><img src={contact} alt="" />Contact us</p>
                </div>
            </div>
        </>
    )
}

export default Navbar
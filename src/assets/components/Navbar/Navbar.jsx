import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import './Navbar.css'
import menu from "./assets/hamburger.png"
import cross from "./assets/cross.svg"
import home from "./assets/home.png"
import product from "./assets/product.png"
import cartimg from "./assets/cart.png"
import contact from "./assets/contact.png"
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
function Navbar() {
    let [cart] = useCart()
    let l = cart.length;
    let totalCart = l

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
                    <p className='navitem-i'>
                        <NavLink to={"home"} style={({ isActive }) => { return { color: isActive ? "red" : "white", textDecoration: "none", } }}>
                            <span className="span">Home</span>
                        </NavLink>
                    </p>

                    <p className='navitem-i'>
                        <NavLink to={"product"} style={({ isActive }) => { return { color: isActive ? "red" : "white", textDecoration: "none", } }}>
                            <span className="span">Product</span>

                        </NavLink>
                    </p>
                    <p className='navitem-i'>
                        <NavLink to={"cart"} style={({ isActive }) => { return { color: isActive ? "red" : "white", textDecoration: "none" } }}>
                            <span className="span">Cart</span>
                        </NavLink>
                        <span className='totalcart'>{totalCart}</span>
                    </p>

                    <p className='navitem-i'>
                        <NavLink to={"contact"} style={({ isActive }) => { return { color: isActive ? "red" : "white", textDecoration: "none" } }}>
                            <span className="span">Contact us</span>
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
                    <NavLink to={''}>
                    <Logo />
                </NavLink>
                    </div>
                    <br />
                    <NavLink to={"home"} style={({ isActive })=>{ return { color: isActive ? "red" : "white", textDecoration: "none", } }}>
                    <p className='navitem-i'>
                            <img src={home} alt="" />
                                <span className="span2">Home</span>
                    </p>
                    </NavLink>

                    <NavLink to={"product"} style={({ isActive })=>{ return { color: isActive ? "red" : "white", textDecoration: "none", } }}>
                    <p className='navitem-i'>
                    <img src={product} alt="" />
                                <span className="span2">Product</span>
                    </p>
                    </NavLink>


                    <NavLink to={"cart"} style={({ isActive })=>{ return { color: isActive ? "red" : "white", textDecoration: "none", } }}>
                    <p className='navitem-cart nav-item-cart' style={{ position: "relative" }}><img src={cartimg} alt="" />Cart
                        <span className='totalcart'>{totalCart}</span></p>
                        </NavLink>



                    <NavLink to={"contact"} style={({ isActive })=>{ return { color: isActive ? "red" : "white", textDecoration: "none", } }}>
                     <p className='navitem-i'>
                    <img src={contact} alt="" />
                                <span className="span2">Contact us</span>
                    </p>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar
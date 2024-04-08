import React, { useEffect, useLayoutEffect } from 'react'
import  {useLocation} from 'react-router-dom'
import { useCart } from '../components/context/CartContext'

function ScrollToTop() {
    let [cart, setCart] =useCart()
    let {pathname} = useLocation()
    
    
    return useEffect(() => {
        window.scrollTo(
            {top:0,
            behavior:"smooth"}
            )
    }, [pathname])
}

export default ScrollToTop
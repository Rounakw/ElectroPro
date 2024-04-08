import React, { useEffect, useLayoutEffect } from 'react'
import  {useLocation} from 'react-router-dom'
import { useCart } from '../components/context/CartContext'

function ScrollToTop() {
    let [cart, setCart] =useCart()
    let {pathname} = useLocation()
    
    
    return useEffect(() => {
        window.scrollTo(0, 0)
        // console.log(window.screenX,window.screenY);
    }, [pathname])
}

export default ScrollToTop
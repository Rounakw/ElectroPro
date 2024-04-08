import React, { useEffect } from 'react'
import  {useLocation} from 'react-router-dom'

function ScrollToTop() {
    let {pathname} = useLocation()
    
    
    return useEffect(() => {
        window.scrollTo(
            {top:0,
            behavior:"smooth"}
            )
    }, [pathname])
}

export default ScrollToTop
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function ScroolToTop() {
    const {pathname} = useLocation();
    useEffect(()=>{
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    },[pathname]);
    return null;
}
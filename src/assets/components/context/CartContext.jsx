import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider(props){
    let [cart,setCart] = useState([])
    return(
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext);
}
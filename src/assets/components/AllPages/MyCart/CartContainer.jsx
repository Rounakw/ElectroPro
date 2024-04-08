import React from 'react'
import { useCart } from '../../context/CartContext';

function CartContainer() {
    let [cart, setcart] = useCart()
console.log(cart);

  return (
    <div>CartContainer</div>
  )
}

export default CartContainer
import React from 'react'
import { useCart } from '../../context/CartContext';
import Cart from './Cart';
import './CartContainer.css'
function CartContainer() {
    let [cart] = useCart()
    // console.log(cart.length);
    return <div className='page-cart'>
        {
            cart.length === 0 ?
                <div className='emptycart'>
                    <h2>Your Shopping bag is empty</h2>
                </div>
                :
                cart && cart.map((perCart, idx) => {
                    return <div key={idx} className='perCart'>
                        <Cart title={perCart.title} thumbnail={perCart.thumbnail} price={perCart.price} />
                    </div>
                })
        }


        <hr style={{ 'width': '80%' }}></hr>
        <br />
    </div>
}

export default CartContainer
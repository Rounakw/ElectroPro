import React from 'react'
import { useCart } from '../../context/CartContext';
import Cart from './Cart';
import './CartContainer.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function CartContainer() {
    let [cart] = useCart()
    let total = cart.reduce((a, b) => a + Number(b.price.replace(",", "")), 0)


    return <><div className='page-cart'>

        {
            cart.length === 0 ?
                <div className='emptycart'>
                    <h2 className='emptycartmsz'>Your Shopping bag is empty</h2>
                </div>
                :
                <>
                    <h2>Your Shopping bag <ShoppingBagIcon sx={{ fontSize: "35px", marginBottom: "10px" }} /></h2>
                    {
                        cart && cart.map((perCart, idx) => {
                            return <div key={idx} className='perCart'>

                                <Cart title={perCart.title} thumbnail={perCart.thumbnail} price={perCart.price} />
                            </div>
                        })
                    }
                    <hr style={{ 'width': '80%' }}></hr>
                    {/* <br /> */}
                </>
        }
    </div>

        { cart.length!== 0&&
            <div className="total-ssection">
            <p><span>Total:</span>&#x20b9;{total}</p>
            <button>Checkout</button>
        </div>
        }
    </>
}

export default CartContainer